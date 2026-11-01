import type { PostHogConfig } from 'posthog-js'

import { classifyClick, sanitizeEvent, type WebEvent } from './events'
import { resolvePosthogHosts } from './posthog-hosts.mjs'

/** Same-origin proxy path; next.config.mjs rewrites it to PostHog. */
export const INGEST_PATH = '/ingest'

/** Link classes this site uses for button-styled calls to action. */
const CTA_CLASSES = ['action-primary', 'action-secondary'] as const
const LANDMARKS = ['header', 'footer', 'nav', 'main'] as const

/**
 * Cookieless, no-banner configuration. Nothing is written to cookies,
 * localStorage, or sessionStorage; PostHog derives a daily, salted visitor
 * hash server-side. Everything beyond pageviews, clicks, and heatmaps is off.
 */
export const POSTHOG_CONFIG: Partial<PostHogConfig> = {
  api_host: INGEST_PATH,
  // The app host (not the ingest host) so toolbar links resolve.
  ui_host: resolvePosthogHosts(process.env.NEXT_PUBLIC_POSTHOG_HOST).ui,
  cookieless_mode: 'always',
  persistence: 'memory',
  person_profiles: 'never',
  capture_pageview: 'history_change',
  capture_pageleave: 'if_capture_pageview',
  autocapture: true,
  capture_heatmaps: true,
  disable_session_recording: true,
  disable_surveys: true,
  disable_web_experiments: true,
  advanced_disable_flags: true,
  capture_exceptions: false,
  capture_performance: false,
  capture_dead_clicks: false,
  before_send: sanitizeEvent,
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

/** An explicit marker, else the nearest section id, else the landmark. */
export function clickLocation(element: Element): string {
  const marked = element
    .closest('[data-analytics-location]')
    ?.getAttribute('data-analytics-location')
  if (marked) return marked
  const section = element.closest('section[id]')?.id
  if (section) return section
  return LANDMARKS.find((tag) => element.closest(tag)) ?? 'page'
}

function eventForClick(target: EventTarget | null): WebEvent | null {
  if (!(target instanceof Element)) return null
  const link = target.closest('a[href]')
  if (!link) return null
  const ctaId = link.getAttribute('data-cta')
  return classifyClick({
    href: link.getAttribute('href') ?? '',
    pageOrigin: window.location.origin,
    isCta:
      ctaId !== null || CTA_CLASSES.some((c) => link.classList.contains(c)),
    ctaId,
    location: clickLocation(link),
  })
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
      const event = eventForClick(clickEvent.target)
      // sendBeacon survives the page unloading on same-tab outbound links.
      if (event) {
        client.capture(event.name, event.properties, {
          transport: 'sendBeacon',
        })
      }
    },
    { capture: true },
  )
  return true
}
