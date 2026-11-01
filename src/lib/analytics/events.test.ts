import { describe, expect, it } from 'vitest'

import {
  appStoreAttributes,
  ctaAttributes,
  destinationFor,
  eventFromLink,
} from './events'

const ORIGIN = 'https://site.example'

/** Mirrors how the browser maps data-track-* attributes onto dataset keys. */
function datasetOf(attributes: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(attributes).map(([name, value]) => [
      name
        .replace(/^data-/, '')
        .replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase()),
      value,
    ]),
  )
}

describe('destinationFor', () => {
  it('returns the path for same-site links, without query or fragment', () => {
    expect(destinationFor('/apps/sample?ref=x#top', ORIGIN)).toBe(
      '/apps/sample',
    )
  })

  it('returns the host for other sites', () => {
    expect(destinationFor('https://other.example/a?b=c', ORIGIN)).toBe(
      'other.example',
    )
  })

  it('returns an empty string for an unparseable href', () => {
    expect(destinationFor('http://', ORIGIN)).toBe('')
  })
})

describe('eventFromLink', () => {
  it('builds app_store_clicked from the attributes', () => {
    const event = eventFromLink({
      dataset: datasetOf(appStoreAttributes('goodparts', 'android', 'hero')),
      href: 'https://store.example/app',
      currentOrigin: ORIGIN,
    })
    expect(event).toEqual({
      name: 'app_store_clicked',
      properties: { app: 'goodparts', store: 'android', location: 'hero' },
    })
  })

  it('builds cta_clicked with a path destination for internal links', () => {
    const event = eventFromLink({
      dataset: datasetOf(ctaAttributes('sample-cta')),
      href: `${ORIGIN}/support`,
      currentOrigin: ORIGIN,
    })
    expect(event).toEqual({
      name: 'cta_clicked',
      properties: { cta: 'sample-cta', destination: '/support' },
    })
  })

  it('builds cta_clicked with a host destination for external links', () => {
    const event = eventFromLink({
      dataset: datasetOf(ctaAttributes('sample-cta')),
      href: 'https://other.example/path',
      currentOrigin: ORIGIN,
    })
    expect(event?.properties).toEqual({
      cta: 'sample-cta',
      destination: 'other.example',
    })
  })

  it.each([
    [
      'unknown app',
      {
        track: 'app_store_clicked',
        trackApp: 'nope',
        trackStore: 'ios',
        trackLocation: 'hero',
      },
    ],
    [
      'unknown store',
      {
        track: 'app_store_clicked',
        trackApp: 'goodparts',
        trackStore: 'web',
        trackLocation: 'hero',
      },
    ],
    [
      'missing location',
      { track: 'app_store_clicked', trackApp: 'goodparts', trackStore: 'ios' },
    ],
    [
      'malformed location',
      {
        track: 'app_store_clicked',
        trackApp: 'goodparts',
        trackStore: 'ios',
        trackLocation: 'Hero Section',
      },
    ],
    ['missing cta id', { track: 'cta_clicked' }],
    ['unknown event', { track: 'something_else' }],
    ['no event', {}],
  ])('returns null for %s', (_label, dataset) => {
    expect(
      eventFromLink({ dataset, href: `${ORIGIN}/`, currentOrigin: ORIGIN }),
    ).toBeNull()
  })
})
