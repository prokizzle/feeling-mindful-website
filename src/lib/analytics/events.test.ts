import type { CaptureResult } from 'posthog-js'
import { describe, expect, it } from 'vitest'

import {
  classifyClick,
  sanitizeEvent,
  sanitizePageUrl,
  sanitizeReferrer,
  type ClickedLink,
} from './events'

const ORIGIN = 'https://site.example'

function click(overrides: Partial<ClickedLink>): ClickedLink {
  return {
    href: '/',
    pageOrigin: ORIGIN,
    isCta: false,
    ctaId: null,
    location: 'hero',
    ...overrides,
  }
}

describe('classifyClick: app_store_clicked', () => {
  it.each([
    ['https://apps.apple.com/app/id6757692886', 'goodparts', 'ios'],
    [
      'https://play.google.com/store/apps/details?id=com.feelingmindful.goodparts',
      'goodparts',
      'android',
    ],
    [
      'https://apps.apple.com/us/app/simple-rituals/id6762166301',
      'simplerituals',
      'ios',
    ],
    ['https://apps.apple.com/app/id6761030036', 'cardioengine', 'ios'],
    ['https://apps.apple.com/app/id1', 'other', 'ios'],
  ])('%s is %s on %s', (href, app, store) => {
    expect(classifyClick(click({ href, location: 'download' }))).toEqual({
      name: 'app_store_clicked',
      properties: { app, store, location: 'download' },
    })
  })

  it('counts store links even when they are not styled as buttons', () => {
    expect(
      classifyClick(click({ href: 'https://apps.apple.com/app/id1' }))?.name,
    ).toBe('app_store_clicked')
  })
})

describe('classifyClick: cta_clicked', () => {
  it('uses data-cta and a path destination for internal links', () => {
    expect(
      classifyClick(
        click({ href: '/support?x=1#y', isCta: true, ctaId: 'sample-cta' }),
      ),
    ).toEqual({
      name: 'cta_clicked',
      properties: { cta: 'sample-cta', destination: '/support' },
    })
  })

  it('falls back to <location>:<destination> and a host for external links', () => {
    expect(
      classifyClick(
        click({ href: 'https://other.example/a?b=c', isCta: true }),
      ),
    ).toEqual({
      name: 'cta_clicked',
      properties: { cta: 'hero:other.example', destination: 'other.example' },
    })
  })

  it('ignores ordinary links', () => {
    expect(classifyClick(click({ href: '/privacy' }))).toBeNull()
  })

  it('ignores non-http links', () => {
    expect(
      classifyClick(click({ href: 'mailto:someone@example.com', isCta: true })),
    ).toBeNull()
  })

  it('ignores an unparseable href', () => {
    expect(classifyClick(click({ href: 'http://', isCta: true }))).toBeNull()
  })
})

describe('sanitizePageUrl', () => {
  it('keeps only utm_* parameters and drops the fragment', () => {
    expect(
      sanitizePageUrl(`${ORIGIN}/a?utm_source=x&email=e&UTM_Medium=y#frag`),
    ).toBe(`${ORIGIN}/a?utm_source=x&UTM_Medium=y`)
  })

  it('drops non-strings and unparseable values', () => {
    expect(sanitizePageUrl(42)).toBeUndefined()
    expect(sanitizePageUrl('not a url')).toBeUndefined()
  })
})

describe('sanitizeReferrer', () => {
  it('keeps origin and path', () => {
    expect(sanitizeReferrer('https://ref.example/p?q=secret#f')).toBe(
      'https://ref.example/p',
    )
  })

  it('passes $direct through', () => {
    expect(sanitizeReferrer('$direct')).toBe('$direct')
  })
})

describe('sanitizeEvent', () => {
  it('trims URLs and referrers and disables geoip', () => {
    const event = {
      event: '$pageview',
      properties: {
        $current_url: `${ORIGIN}/a?utm_campaign=c&token=t`,
        $initial_current_url: `${ORIGIN}/b?token=t`,
        $referrer: 'https://ref.example/p?q=1',
        $initial_referrer: '$direct',
        other: 'kept',
      },
    } as unknown as CaptureResult

    expect(sanitizeEvent(event)?.properties).toEqual({
      $current_url: `${ORIGIN}/a?utm_campaign=c`,
      $initial_current_url: `${ORIGIN}/b`,
      $referrer: 'https://ref.example/p',
      $initial_referrer: '$direct',
      other: 'kept',
      $geoip_disable: true,
    })
  })

  it('does not mutate the original event', () => {
    const properties = { $current_url: `${ORIGIN}/?token=t` }
    const event = { event: 'x', properties } as unknown as CaptureResult
    sanitizeEvent(event)
    expect(properties.$current_url).toBe(`${ORIGIN}/?token=t`)
  })

  it('passes null through', () => {
    expect(sanitizeEvent(null)).toBeNull()
  })
})
