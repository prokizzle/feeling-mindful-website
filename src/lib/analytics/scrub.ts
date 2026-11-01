import type { CaptureResult } from 'posthog-js'

/**
 * Outgoing event scrubbing for website analytics (before_send). Mirrors
 * goodparts.ai's web-analytics-scrub (goodparts-oe4). Every function fails
 * closed: an unrecognised property is dropped, and a URL that cannot be
 * parsed is removed.
 */

const UTM = /^utm_/i

/** Custom properties our own named events send (events.ts). */
const NAMED_EVENT_KEYS = new Set([
  'app',
  'store',
  'location',
  'cta',
  'destination',
])

/** `$initial_*` properties that describe the page, not a campaign or click id. */
const INITIAL_PAGE_KEYS = new Set([
  'current_url',
  'referrer',
  'referring_domain',
  'host',
  'pathname',
])

/**
 * The SDK's own keys without a `$` (posthog-core.js): ingestion rejects an
 * event without `token` and `distinct_id` (the cookieless sentinel here), and
 * `title` is the page's document title.
 */
const SDK_PLAIN_KEYS = new Set(['token', 'distinct_id', 'title'])

/** Ad click and browser ids the SDK derives from URLs or ad cookies. */
const DROPPED_SDK_KEYS = new Set(['$fbc', '$fbp'])

/**
 * Heatmap point types the privacy policy covers ("where on the page you
 * click"). Pointer movement ("mousemove") is not disclosed, so it never
 * leaves the browser.
 */
const HEATMAP_TYPES = new Set(['click', 'rageclick', 'deadclick'])

const BASE = 'https://base.invalid'

function utmQuery(url: URL): string {
  const kept = [...url.searchParams].filter(([key]) => UTM.test(key))
  const query = new URLSearchParams(kept).toString()
  return query ? `?${query}` : ''
}

/** Keeps only utm_* parameters and drops the fragment. */
export function sanitizePageUrl(url: unknown): string | undefined {
  if (typeof url !== 'string') return undefined
  try {
    const parsed = new URL(url)
    return `${parsed.origin}${parsed.pathname}${utmQuery(parsed)}`
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

/** An href as autocapture records it, relative or absolute: path + utm_*. */
export function sanitizeHref(href: string): string {
  try {
    const parsed = new URL(href, BASE)
    if (!/^https?:$/.test(parsed.protocol)) return parsed.protocol
    const prefix = parsed.origin === BASE ? '' : parsed.origin
    return `${prefix}${parsed.pathname}${utmQuery(parsed)}`
  } catch {
    return ''
  }
}

function isDisclosedPoint(point: unknown): boolean {
  if (!point || typeof point !== 'object') return false
  const type = (point as { type?: unknown }).type
  return typeof type === 'string' && HEATMAP_TYPES.has(type)
}

/**
 * Heatmap points are keyed by the page's full href. Re-key them like page
 * URLs (merging what collapses) and keep only click-type points.
 */
export function sanitizeHeatmapData(data: unknown): unknown {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return undefined
  }
  const merged: Record<string, unknown[]> = {}
  for (const [url, points] of Object.entries(data)) {
    const key = sanitizePageUrl(url)
    if (!key || !Array.isArray(points)) continue
    const kept = points.filter(isDisclosedPoint)
    if (kept.length > 0) merged[key] = [...(merged[key] ?? []), ...kept]
  }
  return merged
}

/** Autocapture's element list: each element's `attr__href` and `href`. */
export function sanitizeElements(elements: unknown): unknown {
  if (!Array.isArray(elements)) return elements
  return elements.map((element) => {
    if (!element || typeof element !== 'object') return element
    const copy: Record<string, unknown> = { ...element }
    for (const key of ['attr__href', 'href']) {
      const value = copy[key]
      if (typeof value === 'string') copy[key] = sanitizeHref(value)
    }
    return copy
  })
}

/** The same hrefs inside `$elements_chain` (double-quoted, backslash-escaped). */
export function sanitizeElementsChain(chain: unknown): unknown {
  if (typeof chain !== 'string') return chain
  return chain.replace(
    /\b(attr__href|href)="((?:[^"\\]|\\.)*)"/g,
    (_match, key: string, value: string) => {
      const clean = sanitizeHref(value.replace(/\\(.)/g, '$1')).replace(
        /["\\]/g,
        '\\$&',
      )
      return `${key}="${clean}"`
    },
  )
}

/** Whether a property may leave the browser at all, judged by its key. */
export function isAllowedPropertyKey(key: string): boolean {
  if (DROPPED_SDK_KEYS.has(key)) return false
  if (key.startsWith('$initial_')) {
    const rest = key.slice('$initial_'.length)
    return UTM.test(rest) || INITIAL_PAGE_KEYS.has(rest)
  }
  if (key.startsWith('$')) return true
  return UTM.test(key) || NAMED_EVENT_KEYS.has(key) || SDK_PLAIN_KEYS.has(key)
}

type Properties = Record<string, unknown>

const SANITIZERS: ReadonlyArray<[string, (value: unknown) => unknown]> = [
  ['$current_url', sanitizePageUrl],
  ['$initial_current_url', sanitizePageUrl],
  ['$referrer', sanitizeReferrer],
  ['$initial_referrer', sanitizeReferrer],
  ['$external_click_url', (v) => (typeof v === 'string' ? sanitizeHref(v) : v)],
  ['$heatmap_data', sanitizeHeatmapData],
  ['$elements', sanitizeElements],
  ['$elements_chain', sanitizeElementsChain],
]

/**
 * The last check before an event leaves the browser: keeps only SDK,
 * campaign (utm_*) and named-event properties, trims every URL to its path
 * and campaign parameters, and turns off IP-based location lookup.
 */
export function sanitizeEvent(
  event: CaptureResult | null,
): CaptureResult | null {
  if (!event) return null
  const kept: Properties = Object.fromEntries(
    Object.entries(event.properties ?? {}).filter(([key]) =>
      isAllowedPropertyKey(key),
    ),
  )
  const properties: Properties = { ...kept }
  for (const [key, sanitize] of SANITIZERS) {
    if (key in properties) properties[key] = sanitize(properties[key])
  }
  // The policy promises no IP-based location lookup; enforce it per event
  // rather than relying on the project setting alone.
  properties.$geoip_disable = true
  return { ...event, properties: properties as CaptureResult['properties'] }
}
