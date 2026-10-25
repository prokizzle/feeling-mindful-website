import { NextResponse } from 'next/server'

import { apps } from '@/lib/apps'
import { createLinearComment, linearRequest } from '@/lib/linear'
import {
  categoryLabel,
  formatPrivacyInboxEmail,
  isRightsRequest,
  linearIssueContent,
  PRIVACY_INBOX,
  type SupportRequest,
  validateSupportRequest,
} from '@/lib/support'
import {
  customerMarker,
  emailMessageMarker,
  emailRelayConfigured,
  sendSupportEmail,
} from '@/lib/support-email'

export async function POST(request: Request) {
  const payload = validateSupportRequest(
    await request.json().catch(() => null),
    apps.map(({ slug }) => slug),
  )

  if (!payload) {
    return NextResponse.json(
      { error: 'Please check the required fields and try again.' },
      { status: 400 },
    )
  }

  // Honeypot: bots see a successful response without creating inbox noise.
  if (payload.website) return NextResponse.json({ ok: true })

  if (!emailRelayConfigured()) {
    return NextResponse.json(
      {
        error:
          'Support is temporarily unavailable. Please email support@feelingmindful.com.',
      },
      { status: 503 },
    )
  }

  const app = apps.find(({ slug }) => slug === payload.app)!
  const teamId = process.env.LINEAR_SUPPORT_TEAM_ID
  if (!teamId) {
    return NextResponse.json(
      {
        error:
          'Support is temporarily unavailable. Please email support@feelingmindful.com.',
      },
      { status: 503 },
    )
  }

  try {
    const result = await linearRequest<{
      issueCreate: {
        success: boolean
        issue: { id: string; identifier: string; title: string }
      }
    }>(
      `mutation CreateSupportIssue($input: IssueCreateInput!) {
          issueCreate(input: $input) {
            success
            issue { id identifier title }
          }
        }`,
      {
        input: {
          teamId,
          ...linearIssueContent(payload, app.name, customerMarker(payload)),
        },
      },
    )
    const issue = result.issueCreate.issue
    const rights = isRightsRequest(payload.category)

    if (rights && !(await forwardToPrivacyInbox(payload, app.name, issue))) {
      return NextResponse.json(
        {
          error: `We could not send this request. Please email ${PRIVACY_INBOX}.`,
        },
        { status: 502 },
      )
    }

    const confirmationSent = await sendSupportEmail({
      to: payload.email,
      subject: `[${issue.identifier}] We received your request`,
      text: rights
        ? `Hi ${payload.name},\n\nWe received your privacy request about ${app.name} (${categoryLabel(payload.category)}). We'll reply from ${PRIVACY_INBOX} within 45 days of today.\n\nReference: ${issue.identifier}\nSubject: ${payload.subject}\n\nYou can add more details by replying to this email. Please never send us journal entries, passwords or sign-in codes.\n\n— Feeling Mindful Labs Privacy`
        : `Hi ${payload.name},\n\nThanks for contacting Feeling Mindful Labs Support about ${app.name}. Our support team has your request, and we'll reply here.\n\nReference: ${issue.identifier}\nSubject: ${payload.subject}\n\nYou can add more details by replying to this email.\n\n— Feeling Mindful Labs Support`,
      issueId: issue.id,
      idempotencyKey: `support-received/${issue.id}`,
      replyTo: rights ? PRIVACY_INBOX : undefined,
    })
      .then(async (messageId) => {
        if (messageId) {
          await createLinearComment(
            issue.id,
            `Confirmation email sent.\n\n${emailMessageMarker(messageId)}`,
          ).catch(console.error)
        }
        return true
      })
      .catch(async (error) => {
        console.error('Support confirmation email failed', error)
        await createLinearComment(
          issue.id,
          'Confirmation email failed to send. Please follow up with the customer manually.',
        ).catch(console.error)
        return false
      })

    return NextResponse.json({
      ok: true,
      reference: issue.identifier,
      confirmationSent,
    })
  } catch (error) {
    console.error('Support submission failed', error)
    return NextResponse.json(
      {
        error:
          'We could not send this request. Please email support@feelingmindful.com.',
      },
      { status: 502 },
    )
  }
}

/** Sends a rights request's details to the privacy inbox. Linear only hears whether it arrived. */
async function forwardToPrivacyInbox(
  payload: SupportRequest,
  appName: string,
  issue: { id: string; identifier: string },
) {
  try {
    await sendSupportEmail({
      to: PRIVACY_INBOX,
      subject: `[${issue.identifier}] Privacy request: ${categoryLabel(payload.category)}`,
      text: formatPrivacyInboxEmail(payload, appName, issue.identifier),
      issueId: issue.id,
      idempotencyKey: `privacy-inbox/${issue.id}`,
      replyTo: payload.email,
    })
    return true
  } catch (error) {
    console.error('Privacy inbox email failed', error)
    await createLinearComment(
      issue.id,
      `This request did not reach ${PRIVACY_INBOX}. The requester was asked to email that address directly.`,
    ).catch(console.error)
    return false
  }
}
