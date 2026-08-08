import assert from 'node:assert/strict'

import {
  formatLinearDescription,
  validateSupportRequest,
} from '../src/lib/support.ts'
import {
  customerFromDescription,
  customerMarker,
  emailMessageMarker,
  inboundCommentMarker,
  issueIdFromRecipients,
  issueReferenceFromEmail,
  latestMessageId,
  newestReply,
  replyAddress,
} from '../src/lib/support-email.ts'

process.env.SUPPORT_REPLY_SECRET = 'test-secret'
process.env.RESEND_INBOUND_DOMAIN = 'reply.example.com'

const valid = validateSupportRequest(
  {
    app: 'good-parts',
    category: 'bug',
    email: 'person@example.com',
    name: 'Person',
    subject: 'Sync stopped',
    message: 'Entries no longer sync.',
  },
  ['good-parts'],
)

assert(valid)
assert.match(
  formatLinearDescription(valid, 'Good Parts'),
  /person@example\.com/,
)
assert.equal(
  validateSupportRequest({ ...valid, email: 'not-an-email' }, ['good-parts']),
  null,
)
assert.equal(
  validateSupportRequest({ ...valid, app: 'unknown' }, ['good-parts']),
  null,
)
assert.equal(
  validateSupportRequest({ ...valid, subject: 'Header\nInjection' }, [
    'good-parts',
  ]),
  null,
)
assert.equal(
  validateSupportRequest({ ...valid, website: '   ' }, ['good-parts'])?.website,
  '',
)
assert.match(formatLinearDescription(valid, 'Good Parts'), /\n\n## Context\n\n/)

const marker = customerMarker(valid)
assert.deepEqual(customerFromDescription(marker), {
  email: valid.email,
  name: valid.name,
})

const issueId = '539068e2-ae88-4d09-bd75-22eb4a59612f'
assert.equal(issueIdFromRecipients([replyAddress(issueId)]), issueId)
assert.equal(
  issueReferenceFromEmail(
    ['support@reply.example.com'],
    'Re: [SUPPORT-2] We received your request',
  ),
  'SUPPORT-2',
)
assert.equal(
  issueReferenceFromEmail(
    ['support@elsewhere.example.com'],
    'Re: [SUPPORT-2] We received your request',
  ),
  null,
)
assert.equal(
  newestReply('New details here.\n\nOn Friday, Support wrote:\n> Old reply'),
  'New details here.',
)
assert.equal(
  latestMessageId([
    {
      body: inboundCommentMarker('email-id', '<message@example.com>'),
      createdAt: '2026-08-07T12:00:00.000Z',
    },
  ]),
  '<message@example.com>',
)
assert.equal(
  latestMessageId([
    {
      body: emailMessageMarker('<sent@example.com>'),
      createdAt: '2026-08-07T13:00:00.000Z',
    },
  ]),
  '<sent@example.com>',
)

console.log('Support routing checks passed')
