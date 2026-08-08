import { createHmac, timingSafeEqual } from 'node:crypto'

import { Resend } from 'resend'

import { type SupportRequest } from './support.ts'

type IssueComment = { body: string; createdAt: string }

type Customer = {
  email: string
  name: string
}

const markerPrefix = '<!-- fm-support:'
const messageMarker = /<!-- support-email-message:([A-Za-z0-9_-]+) -->/g

function relaySecret() {
  const secret = process.env.SUPPORT_REPLY_SECRET
  if (!secret) throw new Error('Support email relay is not configured')
  return secret
}

function sign(value: string) {
  return createHmac('sha256', relaySecret())
    .update(value)
    .digest('base64url')
    .slice(0, 20)
}

function validSignature(value: string, signature: string) {
  const expected = Buffer.from(sign(value))
  const received = Buffer.from(signature)
  return (
    expected.length === received.length && timingSafeEqual(expected, received)
  )
}

export function customerMarker(
  request: Pick<SupportRequest, 'email' | 'name'>,
) {
  const payload = Buffer.from(
    JSON.stringify({ email: request.email, name: request.name }),
  ).toString('base64url')
  return `${markerPrefix}${payload}.${sign(payload)} -->`
}

export function customerFromDescription(description: string): Customer | null {
  const match = description.match(
    /<!-- fm-support:([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+) -->/,
  )
  if (!match || !validSignature(match[1], match[2])) return null

  try {
    const customer = JSON.parse(
      Buffer.from(match[1], 'base64url').toString(),
    ) as Customer
    return /^\S+@\S+\.\S+$/.test(customer.email) && customer.name
      ? customer
      : null
  } catch {
    return null
  }
}

export function replyAddress(issueId: string) {
  const domain = process.env.RESEND_INBOUND_DOMAIN
  if (!domain) throw new Error('Resend inbound domain is not configured')
  return `reply+${issueId}.${sign(issueId)}@${domain}`
}

export function issueIdFromRecipients(recipients: string[]) {
  const domain = process.env.RESEND_INBOUND_DOMAIN?.toLowerCase()
  if (!domain) return null

  for (const recipient of recipients) {
    const match = recipient.match(
      /reply\+([0-9a-f-]{36})\.([A-Za-z0-9_-]+)@([^>\s,]+)/i,
    )
    if (
      match &&
      match[3].toLowerCase() === domain &&
      validSignature(match[1], match[2])
    ) {
      return match[1]
    }
  }
  return null
}

export function emailAddress(value: string) {
  return value.match(/<([^<>]+)>/)?.[1] ?? value.trim()
}

export function newestReply(text: string) {
  // ponytail: common reply markers only; use a dedicated email reply parser if edge cases become noisy.
  const markers = [
    /^On .+wrote:$/im,
    /^-{2,}\s*Original Message\s*-{2,}$/im,
    /^_{5,}$/m,
  ]
  const cutAt = markers.reduce((earliest, marker) => {
    const index = text.search(marker)
    return index >= 0 && index < earliest ? index : earliest
  }, text.length)
  return text
    .slice(0, cutAt)
    .split('\n')
    .filter((line) => !line.trimStart().startsWith('>'))
    .join('\n')
    .trim()
}

export function inboundCommentMarker(emailId: string, messageId: string) {
  return [
    emailMessageMarker(messageId),
    `<!-- resend-email:${emailId} -->`,
  ].join('\n')
}

export function emailMessageMarker(messageId: string) {
  return `<!-- support-email-message:${Buffer.from(messageId).toString('base64url')} -->`
}

export function hasInboundEmail(comments: IssueComment[], emailId: string) {
  return comments.some(({ body }) =>
    body.includes(`<!-- resend-email:${emailId} -->`),
  )
}

export function latestMessageId(comments: IssueComment[]) {
  return comments
    .flatMap((comment) => {
      const encoded = [...comment.body.matchAll(messageMarker)].at(-1)?.[1]
      if (!encoded) return []
      const value = Buffer.from(encoded, 'base64url').toString()
      if (!/^<[^<>\r\n]+>$/.test(value)) return []
      return [
        {
          createdAt: comment.createdAt,
          value,
        },
      ]
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0]?.value
}

export function emailRelayConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.RESEND_FROM_EMAIL &&
      process.env.RESEND_INBOUND_DOMAIN &&
      process.env.RESEND_WEBHOOK_SECRET &&
      process.env.LINEAR_WEBHOOK_SECRET &&
      process.env.SUPPORT_REPLY_SECRET,
  )
}

export async function sendSupportEmail({
  to,
  subject,
  text,
  issueId,
  idempotencyKey,
  inReplyTo,
}: {
  to: string
  subject: string
  text: string
  issueId: string
  idempotencyKey: string
  inReplyTo?: string
}) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send(
    {
      from: process.env.RESEND_FROM_EMAIL!,
      to,
      subject,
      text,
      replyTo: replyAddress(issueId),
      headers: inReplyTo
        ? { 'In-Reply-To': inReplyTo, References: inReplyTo }
        : undefined,
    },
    { idempotencyKey },
  )
  if (error || !data) throw new Error(error?.message ?? 'Email send failed')

  const { data: email, error: lookupError } = await resend.emails.get(data.id)
  const messageId = (email as (typeof email & { message_id?: string }) | null)
    ?.message_id
  if (lookupError || !messageId || !/^<[^<>\r\n]+>$/.test(messageId)) {
    console.warn('Could not record the sent email Message-ID')
    return undefined
  }
  return messageId
}
