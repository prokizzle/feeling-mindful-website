import type { PostHogConfig } from 'posthog-js'

import { eventFromLink, type TrackedEvent } from './events'
import { resolvePosthogHosts } from './posthog-hosts.mjs'

/** Same-origin proxy path; next.config.mjs rewrites it to PostHog. */
export const INGEST_PATH = '/ingest'

/**
 * Cookieless, no-banner configuration. Nothing is written to cookies,
 * localStorage, or sessionStorage; PostHog derives a daily, salted visitor
 * hash server-side (project setting cookieless_server_hash_mode).
 */
export const POSTHOG_CONFIG: Partial<PostHogConfig> = {
  api_host: INGEST_PATH,
  // The app host (not the ingest host) so toolbar links resolve.
  ui_host: resolvePosthogHosts(process.env.NEXT_PUBLIC_POSTHOG_HOST).ui,
  cookieless_mode: 'always',
  persistence: 'memory',
  person_profiles: 'never',
  disable_session_recording: true,
  autocapture: true,
  capture_pageview: 'history_change',
  capture_heatmaps: true,
}

/** The subset of the posthog-js client this module calls. */
export interface AnalyticsClient {
  init: (key: string, config: Partial<PostHogConfig>) => unknown
  capture: (
    name: string,
    properties: Record<string, string>,
    options: { transport: 'sendBeacon' },
  ) => unknown
}

export function readPosthogKey(
  raw: string | undefined = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
): string | null {
  const key = raw?.trim()
  return key ? key : null
}

function captureEvent(client: AnalyticsClient, event: TrackedEvent) {
  // sendBeacon survives the page unloading on same-tab outbound links.
  client.capture(event.name, event.properties, { transport: 'sendBeacon' })
}

function trackedLinkFrom(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null
  return target.closest<HTMLAnchorElement>('a[data-track]')
}

/**
 * Starts analytics when a key is configured. Without one, it does nothing:
 * no SDK init, no network calls, no listeners.
 *
 * @returns whether analytics started
 */
export function startAnalytics(
  client: AnalyticsClient,
  key: string | null,
  doc: Document,
): boolean {
  if (!key) return false

  client.init(key, POSTHOG_CONFIG)

  doc.addEventListener(
    'click',
    (clickEvent) => {
      const link = trackedLinkFrom(clickEvent.target)
      if (!link) return
      const event = eventFromLink({
        dataset: { ...link.dataset },
        href: link.href,
        currentOrigin: window.location.origin,
      })
      if (event) captureEvent(client, event)
    },
    { capture: true },
  )
  return true
}
