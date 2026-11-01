// Plain ESM so next.config.mjs and the browser bundle share one source.

export const DEFAULT_POSTHOG_HOST = 'https://us.i.posthog.com'

const INGEST_HOST = /^https:\/\/([a-z]+)\.i\.posthog\.com$/

/**
 * Resolves the PostHog hosts from NEXT_PUBLIC_POSTHOG_HOST (set by the
 * Vercel <> PostHog integration). An unset or unrecognised value falls back
 * to PostHog US, so the proxy can never point at an arbitrary origin.
 *
 * @param {string | undefined} raw
 * @returns {{ ingest: string, assets: string, ui: string }}
 */
export function resolvePosthogHosts(raw) {
  const candidate = (raw ?? '').trim().replace(/\/+$/, '')
  const match = INGEST_HOST.exec(candidate)
  const region = match ? match[1] : 'us'
  return {
    ingest: `https://${region}.i.posthog.com`,
    assets: `https://${region}-assets.i.posthog.com`,
    ui: `https://${region}.posthog.com`,
  }
}
