/**
 * The same-origin PostHog relay. It runs in middleware rather than as a
 * next.config rewrite, because an external rewrite forwards every request
 * header (Cookie, Authorization, Referer) to PostHog. Only the headers below
 * are forwarded. Mirrors goodparts.ai's ingest-proxy (goodparts-oe4).
 */

export const INGEST_PATH = '/ingest'

export const FORWARDED_HEADERS: readonly string[] = [
  'accept',
  'accept-encoding',
  'accept-language',
  'content-encoding',
  'content-length',
  'content-type',
  'origin',
  'user-agent',
  // PostHog counts a cookieless visitor from the client IP; the project
  // discards it afterwards.
  'x-forwarded-for',
  'x-real-ip',
]

export interface IngestHosts {
  ingest: string
  assets: string
}

export function isIngestPath(pathname: string): boolean {
  return pathname === INGEST_PATH || pathname.startsWith(`${INGEST_PATH}/`)
}

/**
 * The PostHog URL an /ingest request goes to. The SDK's scripts (/static/*)
 * and remote config (/array/*) come from the assets host, as in PostHog's
 * proxy guide; everything else goes to the ingest host. Null for any other
 * path.
 */
export function ingestUpstream(
  pathname: string,
  search: string,
  hosts: IngestHosts,
): string | null {
  if (!isIngestPath(pathname)) return null
  const rest = pathname.slice(INGEST_PATH.length) || '/'
  const fromAssets = rest.startsWith('/static/') || rest.startsWith('/array/')
  const target = fromAssets ? hosts.assets : hosts.ingest
  return `${target}${rest}${search}`
}

/** A copy of `headers` holding only the allowlisted names. */
export function forwardedHeaders(headers: Headers): Headers {
  const kept = new Headers()
  for (const name of FORWARDED_HEADERS) {
    const value = headers.get(name)
    if (value !== null) kept.set(name, value)
  }
  return kept
}
