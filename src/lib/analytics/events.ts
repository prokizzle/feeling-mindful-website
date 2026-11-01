/**
 * Named website analytics events. The names and property shapes are shared
 * with goodparts.ai so both sites report into the same PostHog project
 * ("Websites", split by $host) with identical semantics.
 *
 * Links opt in through data attributes, so server components stay server
 * components: a single delegated click listener (see instrumentation-client)
 * reads the attributes and captures the event.
 */

export const APP_IDS = [
  'goodparts',
  'simplerituals',
  'cardioengine',
  'becomingone',
  'cutengine',
] as const
export type AppId = (typeof APP_IDS)[number]

export const STORES = ['ios', 'android'] as const
export type Store = (typeof STORES)[number]

export type TrackedEvent =
  | {
      name: 'app_store_clicked'
      properties: { app: AppId; store: Store; location: string }
    }
  | {
      name: 'cta_clicked'
      properties: { cta: string; destination: string }
    }

/** Data attributes a link carries to opt into a named event. */
export type TrackingAttributes = Record<`data-${string}`, string>

const STABLE_ID = /^[a-z0-9][a-z0-9-]{0,63}$/

function isOneOf<T extends string>(
  values: readonly T[],
  value: string | undefined,
): value is T {
  return value !== undefined && (values as readonly string[]).includes(value)
}

export function appStoreAttributes(
  app: AppId,
  store: Store,
  location: string,
): TrackingAttributes {
  return {
    'data-track': 'app_store_clicked',
    'data-track-app': app,
    'data-track-store': store,
    'data-track-location': location,
  }
}

export function ctaAttributes(cta: string): TrackingAttributes {
  return { 'data-track': 'cta_clicked', 'data-track-cta': cta }
}

/**
 * Where a link goes, reduced to what the event needs: the path for
 * same-site links, the host for everything else. Query strings and
 * fragments are dropped so no user-entered values leak into properties.
 */
export function destinationFor(href: string, currentOrigin: string): string {
  try {
    const url = new URL(href, currentOrigin)
    return url.origin === currentOrigin ? url.pathname : url.host
  } catch {
    return ''
  }
}

export interface TrackedLinkSnapshot {
  dataset: Readonly<Record<string, string | undefined>>
  href: string
  currentOrigin: string
}

/**
 * Turns a clicked element's data attributes into a named event, or null when
 * the attributes are missing or malformed (a bad attribute never throws and
 * never sends a half-formed event).
 */
export function eventFromLink({
  dataset,
  href,
  currentOrigin,
}: TrackedLinkSnapshot): TrackedEvent | null {
  if (dataset.track === 'app_store_clicked') {
    const {
      trackApp: app,
      trackStore: store,
      trackLocation: location,
    } = dataset
    if (!isOneOf(APP_IDS, app) || !isOneOf(STORES, store)) return null
    if (!location || !STABLE_ID.test(location)) return null
    return { name: 'app_store_clicked', properties: { app, store, location } }
  }

  if (dataset.track === 'cta_clicked') {
    const cta = dataset.trackCta
    const destination = destinationFor(href, currentOrigin)
    if (!cta || !STABLE_ID.test(cta) || !destination) return null
    return { name: 'cta_clicked', properties: { cta, destination } }
  }

  return null
}
