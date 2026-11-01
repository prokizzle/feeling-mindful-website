import type { CaptureResult } from 'posthog-js'

/**
 * Cookieless website analytics: pure helpers, testable without a browser.
 * Event names, properties, and sanitising rules match goodparts.ai
 * (goodparts-oe4) so both sites read the same in the shared PostHog
 * "Websites" project, split by $host.
 */

// ---- Named events ----------------------------------------------------------

export type Store = 'ios' | 'android'
export type AppStoreClicked = { app: string; store: Store; location: string }
export type CtaClicked = { cta: string; destination: string }
export type WebEvent =
  | { name: 'app_store_clicked'; properties: AppStoreClicked }
  | { name: 'cta_clicked'; properties: CtaClicked }

/** Store listings, by the identifier in their URL. Others report "other". */
const APPS_BY_STORE_ID: Readonly<Record<string, string>> = {
  '6757692886': 'goodparts',
  'com.feelingmindful.goodparts': 'goodparts',
  '6762166301': 'simplerituals',
  '6761030036': 'cardioengine',
}

function storeLink(url: URL): { app: string; store: Store } | null {
  if (url.hostname === 'apps.apple.com') {
    const id = /\/id(\d+)/.exec(url.pathname)?.[1] ?? ''
    return { app: APPS_BY_STORE_ID[id] ?? 'other', store: 'ios' }
  }
  if (
    url.hostname === 'play.google.com' &&
    url.pathname.startsWith('/store/apps')
  ) {
    const id = url.searchParams.get('id') ?? ''
    return { app: APPS_BY_STORE_ID[id] ?? 'other', store: 'android' }
  }
  return null
}

export type ClickedLink = {
  href: string
  pageOrigin: string
  /** Button-styled link, or one that names its CTA with data-cta. */
  isCta: boolean
  ctaId?: string | null
  location: string
}

/**
 * The named event a link click sends, if any. A store link anywhere is
 * `app_store_clicked`; any other CTA link is `cta_clicked`. The destination
 * is a same-site path or another host, never a query string. Without an
 * explicit data-cta, the id is `<location>:<destination>`.
 */
export function classifyClick(link: ClickedLink): WebEvent | null {
  let url: URL
  try {
    url = new URL(link.href, link.pageOrigin)
  } catch {
    return null
  }
  const store = storeLink(url)
  if (store) {
    return {
      name: 'app_store_clicked',
      properties: { ...store, location: link.location },
    }
  }
  if (!link.isCta || !/^https?:$/.test(url.protocol)) return null
  const destination = url.origin === link.pageOrigin ? url.pathname : url.host
  const cta = link.ctaId?.trim() || `${link.location}:${destination}`
  return { name: 'cta_clicked', properties: { cta, destination } }
}

// ---- Outgoing event sanitising ---------------------------------------------

/** Keeps only utm_* parameters and drops the fragment. */
export function sanitizePageUrl(url: unknown): string | undefined {
  if (typeof url !== 'string') return undefined
  try {
    const parsed = new URL(url)
    const kept = [...parsed.searchParams].filter(([key]) =>
      key.toLowerCase().startsWith('utm_'),
    )
    const query = new URLSearchParams(kept).toString()
    return `${parsed.origin}${parsed.pathname}${query ? `?${query}` : ''}`
  } catch {
    return undefined
  }
}

/** Keeps the referrer's origin and path. PostHog sends "$direct" for none. */
export function sanitizeReferrer(referrer: unknown): unknown {
  if (typeof referrer !== 'string' || !/^https?:\/\//.test(referrer)) {
    return referrer
  }
  try {
    const parsed = new URL(referrer)
    return `${parsed.origin}${parsed.pathname}`
  } catch {
    return undefined
  }
}

const URL_PROPERTIES = ['$current_url', '$initial_current_url'] as const
const REFERRER_PROPERTIES = ['$referrer', '$initial_referrer'] as const

/** The last check before an event leaves the browser (before_send). */
export function sanitizeEvent(
  event: CaptureResult | null,
): CaptureResult | null {
  if (!event) return null
  const properties = { ...event.properties }
  for (const key of URL_PROPERTIES) {
    if (key in properties) properties[key] = sanitizePageUrl(properties[key])
  }
  for (const key of REFERRER_PROPERTIES) {
    if (key in properties) {
      properties[key] = sanitizeReferrer(properties[key])
    }
  }
  // The policy promises no IP-based location lookup; enforce it per event
  // rather than relying on the project setting alone.
  properties.$geoip_disable = true
  return { ...event, properties }
}
