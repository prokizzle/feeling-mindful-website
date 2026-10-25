export const supportCategories = [
  { value: 'help', label: 'I need help' },
  { value: 'bug', label: 'Report a bug' },
  { value: 'feedback', label: 'Share feedback' },
  { value: 'beta', label: 'Join a beta' },
  { value: 'data-deletion', label: 'Delete my data' },
  { value: 'data-access', label: 'Get a copy of my data' },
  { value: 'data-correction', label: 'Correct my data' },
  { value: 'consent-withdrawal', label: 'Withdraw my consent' },
  { value: 'privacy-appeal', label: 'Appeal a privacy decision' },
] as const

export type SupportCategory = (typeof supportCategories)[number]['value']

// GOO-897: privacy rights requests. Their details go to the privacy inbox only; the unrestricted
// Linear support team gets the reference and the kind, never the requester or what they wrote.
export const rightsCategories: readonly SupportCategory[] = [
  'data-deletion',
  'data-access',
  'data-correction',
  'consent-withdrawal',
  'privacy-appeal',
]

export const PRIVACY_INBOX = 'privacy@feelingmindful.com'

export function isRightsRequest(category: SupportCategory) {
  return rightsCategories.includes(category)
}

export function categoryLabel(category: SupportCategory) {
  return supportCategories.find(({ value }) => value === category)!.label
}

export type SupportRequest = {
  app: string
  category: SupportCategory
  email: string
  name: string
  subject: string
  message: string
  appVersion?: string
  device?: string
  website?: string
}

const limits = {
  name: 100,
  email: 254,
  subject: 160,
  message: 10_000,
  appVersion: 50,
  device: 100,
}

export function validateSupportRequest(
  value: unknown,
  appSlugs: readonly string[],
): SupportRequest | null {
  if (!value || typeof value !== 'object') return null

  const request = value as Record<string, unknown>
  const text = (key: keyof typeof limits, required = true) => {
    const field = request[key]
    if (typeof field !== 'string') return required ? null : ''
    const trimmed = field.trim()
    if ((required && !trimmed) || trimmed.length > limits[key]) return null
    return trimmed
  }

  const app = typeof request.app === 'string' ? request.app : ''
  const category = supportCategories.find(
    ({ value }) => value === request.category,
  )?.value
  const email = text('email')
  const name = text('name')
  const subject = text('subject')
  const message = text('message')
  const appVersion = text('appVersion', false)
  const device = text('device', false)

  if (
    !appSlugs.includes(app) ||
    !category ||
    !email ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !name ||
    !subject ||
    !message ||
    appVersion === null ||
    device === null ||
    [name, email, subject, appVersion, device].some((field) =>
      /[\r\n]/.test(field),
    )
  ) {
    return null
  }

  return {
    app,
    category,
    email,
    name,
    subject,
    message,
    appVersion,
    device,
    website:
      typeof request.website === 'string' ? request.website.trim() : '',
  }
}

export function formatLinearDescription(
  request: SupportRequest,
  appName: string,
  marker?: string,
) {
  const category = categoryLabel(request.category)

  return [
    '## Customer request',
    '',
    request.message,
    '',
    '## Context',
    '',
    `- **Customer:** ${request.name} <${request.email}>`,
    `- **App:** ${appName}`,
    `- **Type:** ${category}`,
    request.appVersion && `- **App version:** ${request.appVersion}`,
    request.device && `- **Device / OS:** ${request.device}`,
    `- **Submitted:** ${new Date().toISOString()}`,
    '',
    '## Reply from Linear',
    '',
    'Start a comment with `/reply` to email the customer. Comments without `/reply` stay private in Linear.',
    marker && '',
    marker,
  ]
    .filter((line): line is string => typeof line === 'string')
    .join('\n')
}

/** The Linear issue for a request: the whole request for support, the kind alone for a rights request. */
export function linearIssueContent(
  request: SupportRequest,
  appName: string,
  marker?: string,
) {
  const category = categoryLabel(request.category)
  if (!isRightsRequest(request.category)) {
    return {
      title: `[${category}] ${request.subject}`,
      description: formatLinearDescription(request, appName, marker),
    }
  }
  return {
    title: `[Privacy request] ${category}`,
    description: [
      `- **Kind:** ${request.category}`,
      '',
      `The request itself went to ${PRIVACY_INBOX}, under this issue's identifier. Handle it from that inbox and the restricted rights record, not here. Do not copy its details into Linear.`,
    ].join('\n'),
  }
}

/** The privacy inbox's copy of a rights request: everything the requester sent. */
export function formatPrivacyInboxEmail(
  request: SupportRequest,
  appName: string,
  reference: string,
) {
  return [
    `Reference: ${reference}`,
    `Kind: ${categoryLabel(request.category)}`,
    `App: ${appName}`,
    `From: ${request.name} <${request.email}>`,
    request.appVersion && `App version: ${request.appVersion}`,
    request.device && `Device / OS: ${request.device}`,
    `Received: ${new Date().toISOString()}`,
    '',
    `Subject: ${request.subject}`,
    '',
    request.message,
    '',
    'Reply to this email to answer the requester. The Linear issue holds only the reference and the kind.',
  ]
    .filter((line): line is string => typeof line === 'string')
    .join('\n')
}
