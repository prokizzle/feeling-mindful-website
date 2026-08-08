import { createHmac, timingSafeEqual } from 'node:crypto'

import { getSupportIssue } from '@/lib/linear'
import {
  customerFromDescription,
  latestMessageId,
  sendSupportEmail,
} from '@/lib/support-email'

type LinearCommentEvent = {
  action: string
  type: string
  webhookTimestamp: number
  data: { id: string; issueId: string; body: string }
}

function verifiedPayload(rawBody: string, signature: string) {
  const secret = process.env.LINEAR_WEBHOOK_SECRET
  if (!secret || !/^[a-f0-9]{64}$/i.test(signature)) return null

  const expected = createHmac('sha256', secret).update(rawBody).digest()
  const received = Buffer.from(signature, 'hex')
  if (
    expected.length !== received.length ||
    !timingSafeEqual(expected, received)
  ) {
    return null
  }

  const payload = JSON.parse(rawBody) as LinearCommentEvent
  return Math.abs(Date.now() - payload.webhookTimestamp) <= 60_000
    ? payload
    : null
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text()
    const payload = verifiedPayload(
      rawBody,
      request.headers.get('linear-signature') ?? '',
    )
    if (!payload) return new Response('Invalid webhook', { status: 400 })
    if (
      payload.type !== 'Comment' ||
      payload.action !== 'create' ||
      payload.data.body.includes('<!-- support-email-inbound:')
    ) {
      return new Response('OK')
    }

    const reply = payload.data.body.match(/^\/reply\s+([\s\S]+)$/)?.[1].trim()
    if (!reply) return new Response('OK')

    const issue = await getSupportIssue(payload.data.issueId)
    if (!issue?.description)
      return new Response('Issue not found', { status: 404 })

    const customer = customerFromDescription(issue.description)
    if (!customer) return new Response('Not a support issue')

    await sendSupportEmail({
      to: customer.email,
      subject: `Re: [${issue.identifier}] ${issue.title}`,
      text: `Hi ${customer.name},\n\n${reply}\n\n— Feeling Mindful Support`,
      issueId: issue.id,
      idempotencyKey: `linear-comment/${payload.data.id}`,
      inReplyTo: latestMessageId(issue.comments.nodes),
    })

    return new Response('OK')
  } catch (error) {
    console.error('Linear webhook failed', error)
    return new Response('Webhook failed', { status: 500 })
  }
}
