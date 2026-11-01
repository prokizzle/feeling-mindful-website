import { describe, expect, it } from 'vitest'

import { classifyClick, type ClickedLink } from './events'

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
