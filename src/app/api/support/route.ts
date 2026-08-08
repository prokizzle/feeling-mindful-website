import { NextResponse } from 'next/server'

import { apps } from '@/lib/apps'
import { createLinearComment, linearRequest } from '@/lib/linear'
import {
  formatLinearDescription,
  supportCategories,
  validateSupportRequest,
} from '@/lib/support'
import {
  customerMarker,
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
          title: `[${supportCategories.find(({ value }) => value === payload.category)!.label}] ${payload.subject}`,
          description: formatLinearDescription(
            payload,
            app.name,
            customerMarker(payload),
          ),
        },
      },
    )
    const issue = result.issueCreate.issue

    const confirmationSent = await sendSupportEmail({
      to: payload.email,
      subject: `[${issue.identifier}] We received your request`,
      text: `Hi ${payload.name},\n\nThanks for contacting Feeling Mindful Support about ${app.name}. Our support team has your request, and we'll reply here.\n\nReference: ${issue.identifier}\nSubject: ${payload.subject}\n\nYou can add more details by replying to this email.\n\n— Feeling Mindful Support`,
      issueId: issue.id,
      idempotencyKey: `support-received/${issue.id}`,
    })
      .then(() => true)
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
