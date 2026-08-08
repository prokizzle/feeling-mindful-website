import { Resend } from 'resend'

import { createLinearComment, getSupportIssue } from '@/lib/linear'
import {
  customerFromDescription,
  emailAddress,
  hasInboundEmail,
  inboundCommentMarker,
  issueIdFromRecipients,
  newestReply,
} from '@/lib/support-email'

function htmlToText(html: string) {
  return html
    .replace(/<(br|\/p|\/div)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

export async function POST(request: Request) {
  const id = request.headers.get('svix-id')
  const timestamp = request.headers.get('svix-timestamp')
  const signature = request.headers.get('svix-signature')
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET
  if (!id || !timestamp || !signature || !webhookSecret) {
    return new Response('Missing webhook configuration', { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const event = resend.webhooks.verify({
      payload: await request.text(),
      headers: { id, timestamp, signature },
      webhookSecret,
    })
    if (event.type !== 'email.received') return new Response('OK')

    const issueId = issueIdFromRecipients([
      ...event.data.to,
      ...event.data.received_for,
    ])
    if (!issueId) return new Response('Ignored')

    const issue = await getSupportIssue(issueId)
    if (!issue?.description) return new Response('Ignored: issue not found')
    if (hasInboundEmail(issue.comments.nodes, event.data.email_id)) {
      return new Response('OK')
    }

    const customer = customerFromDescription(issue.description)
    if (
      !customer ||
      emailAddress(event.data.from).toLowerCase() !==
        customer.email.toLowerCase()
    ) {
      return new Response('Ignored: sender does not match this support request')
    }

    const { data: email, error } = await resend.emails.receiving.get(
      event.data.email_id,
    )
    if (error || !email) throw new Error(error?.message ?? 'Email not found')

    const body = newestReply(email.text ?? htmlToText(email.html ?? '')).slice(
      0,
      10_000,
    )
    const attachmentNote = email.attachments.length
      ? `\n\n_Attachments received: ${email.attachments.map(({ filename }) => filename ?? 'unnamed file').join(', ')}_`
      : ''
    await createLinearComment(
      issue.id,
      `${body || '_Customer sent an attachment without a message._'}${attachmentNote}\n\n${inboundCommentMarker(email.id, email.message_id)}`,
    )

    return new Response('OK')
  } catch (error) {
    console.error('Resend webhook failed', error)
    return new Response('Webhook failed', { status: 500 })
  }
}
