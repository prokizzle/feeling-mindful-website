import type { CaptureResult } from 'posthog-js'
import { describe, expect, it } from 'vitest'

import {
  isAllowedPropertyKey,
  sanitizeElements,
  sanitizeElementsChain,
  sanitizeEvent,
  sanitizeHeatmapData,
  sanitizeHref,
  sanitizePageUrl,
  sanitizeReferrer,
} from './scrub'

const ORIGIN = 'https://site.example'

function event(properties: Record<string, unknown>): CaptureResult {
  return { event: 'x', properties } as unknown as CaptureResult
}

describe('sanitizePageUrl', () => {
  it('keeps only utm_* parameters and drops the fragment', () => {
    expect(
      sanitizePageUrl(
        `${ORIGIN}/a?utm_source=x&gclid=g&email=e&UTM_Medium=y#frag`,
      ),
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

describe('sanitizeHref', () => {
  it.each([
    ['/apps/a?fbclid=f&utm_source=s#x', '/apps/a?utm_source=s'],
    ['https://other.example/p?msclkid=m', 'https://other.example/p'],
    ['mailto:someone@example.com', 'mailto:'],
  ])('%s becomes %s', (href, expected) => {
    expect(sanitizeHref(href)).toBe(expected)
  })
})

describe('sanitizeHeatmapData', () => {
  it('re-keys by trimmed URL, merges, and keeps only click-type points', () => {
    const click = { x: 1, y: 2, type: 'click' }
    const dead = { x: 3, y: 4, type: 'deadclick' }
    const move = { x: 5, y: 6, type: 'mousemove' }
    expect(
      sanitizeHeatmapData({
        [`${ORIGIN}/a?gclid=1`]: [click, move],
        [`${ORIGIN}/a?gclid=2`]: [dead],
        [`${ORIGIN}/b`]: [move],
        'not a url': [click],
      }),
    ).toEqual({ [`${ORIGIN}/a`]: [click, dead] })
  })

  it('drops a non-object', () => {
    expect(sanitizeHeatmapData([1])).toBeUndefined()
  })
})

describe('autocapture elements', () => {
  it('trims href and attr__href in $elements', () => {
    expect(
      sanitizeElements([
        { tag_name: 'a', attr__href: '/x?gclid=g', href: '/x?utm_term=t' },
        'odd',
      ]),
    ).toEqual([
      { tag_name: 'a', attr__href: '/x', href: '/x?utm_term=t' },
      'odd',
    ])
  })

  it('trims hrefs inside $elements_chain and keeps escaping intact', () => {
    const chain =
      'a.action-primary:attr__href="https://other.example/p?fbclid=f"href="/q?utm_source=s&gclid=g"nth-child="1"'
    expect(sanitizeElementsChain(chain)).toBe(
      'a.action-primary:attr__href="https://other.example/p"href="/q?utm_source=s"nth-child="1"',
    )
  })
})

describe('isAllowedPropertyKey', () => {
  it.each([
    ['$current_url', true],
    ['$initial_current_url', true],
    ['$initial_utm_source', true],
    ['utm_campaign', true],
    ['cta', true],
    ['token', true],
    ['distinct_id', true],
    ['title', true],
    ['$fbc', false],
    ['$fbp', false],
    ['$initial_gclid', false],
    ['$initial_fbclid', false],
    ['gclid', false],
    ['fbclid', false],
    ['msclkid', false],
    ['anything_else', false],
  ])('%s → %s', (key, allowed) => {
    expect(isAllowedPropertyKey(key)).toBe(allowed)
  })
})

describe('sanitizeEvent', () => {
  it('drops click ids, trims every URL, and disables geoip', () => {
    const result = sanitizeEvent(
      event({
        $current_url: `${ORIGIN}/a?utm_campaign=c&gclid=g`,
        $initial_current_url: `${ORIGIN}/b?fbclid=f`,
        $referrer: 'https://ref.example/p?q=1',
        $initial_referrer: '$direct',
        $external_click_url: 'https://other.example/x?msclkid=m',
        $elements: [{ attr__href: '/y?gclid=g' }],
        $elements_chain: 'a:attr__href="/y?gclid=g"',
        $heatmap_data: {
          [`${ORIGIN}/a?gclid=g`]: [{ x: 1, y: 1, type: 'click' }],
        },
        $fbc: 'fb.1.x',
        $initial_gclid: 'g',
        gclid: 'g',
        utm_source: 's',
        cta: 'sample-cta',
      }),
    )

    expect(result?.properties).toEqual({
      $current_url: `${ORIGIN}/a?utm_campaign=c`,
      $initial_current_url: `${ORIGIN}/b`,
      $referrer: 'https://ref.example/p',
      $initial_referrer: '$direct',
      $external_click_url: 'https://other.example/x',
      $elements: [{ attr__href: '/y' }],
      $elements_chain: 'a:attr__href="/y"',
      $heatmap_data: { [`${ORIGIN}/a`]: [{ x: 1, y: 1, type: 'click' }] },
      utm_source: 's',
      cta: 'sample-cta',
      $geoip_disable: true,
    })
  })

  it('keeps the SDK keys ingestion requires', () => {
    // posthog-core.js adds these without a `$`; without token and
    // distinct_id, ingestion rejects every event.
    const result = sanitizeEvent(
      event({
        token: 'phc_sample',
        distinct_id: '$posthog_cookieless',
        title: 'Sample page',
      }),
    )
    expect(result?.properties).toMatchObject({
      token: 'phc_sample',
      distinct_id: '$posthog_cookieless',
      title: 'Sample page',
    })
  })

  it('does not mutate the original event', () => {
    const properties = { $current_url: `${ORIGIN}/?gclid=g`, gclid: 'g' }
    sanitizeEvent(event(properties))
    expect(properties).toEqual({
      $current_url: `${ORIGIN}/?gclid=g`,
      gclid: 'g',
    })
  })

  it('passes null through', () => {
    expect(sanitizeEvent(null)).toBeNull()
  })
})
