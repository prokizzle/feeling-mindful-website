// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { sanitizeEvent } from './scrub'
import { resolvePosthogHosts } from './posthog-hosts.mjs'
import {
  POSTHOG_CONFIG,
  clickLocation,
  readPosthogKey,
  startAnalytics,
  type AnalyticsClient,
} from './posthog'

function fakeClient() {
  return {
    init: vi.fn<AnalyticsClient['init']>(),
    capture: vi.fn<AnalyticsClient['capture']>(),
  }
}

function render(html: string) {
  document.body.innerHTML = html
}

describe('readPosthogKey', () => {
  it.each([undefined, '', '   '])('treats %j as unset', (raw) => {
    expect(readPosthogKey(raw)).toBeNull()
  })

  it('trims a configured key', () => {
    expect(readPosthogKey('  phc_sample  ')).toBe('phc_sample')
  })
})

describe('POSTHOG_CONFIG', () => {
  it('is cookieless, profile-free, and turns off everything but analytics', () => {
    expect(POSTHOG_CONFIG).toMatchObject({
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      cookieless_mode: 'always',
      persistence: 'memory',
      person_profiles: 'never',
      capture_pageview: 'history_change',
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
    })
  })
})

describe('resolvePosthogHosts', () => {
  it('defaults to PostHog US', () => {
    expect(resolvePosthogHosts(undefined)).toEqual({
      ingest: 'https://us.i.posthog.com',
      assets: 'https://us-assets.i.posthog.com',
      ui: 'https://us.posthog.com',
    })
  })

  it('follows the configured region', () => {
    expect(resolvePosthogHosts('https://eu.i.posthog.com/')).toEqual({
      ingest: 'https://eu.i.posthog.com',
      assets: 'https://eu-assets.i.posthog.com',
      ui: 'https://eu.posthog.com',
    })
  })

  it('ignores a host that is not a PostHog ingest host', () => {
    expect(resolvePosthogHosts('https://evil.example').ingest).toBe(
      'https://us.i.posthog.com',
    )
  })
})

describe('clickLocation', () => {
  it('prefers an explicit data-analytics-location', () => {
    render(
      '<section id="hero"><div data-analytics-location="pricing"><a id="t" href="/">x</a></div></section>',
    )
    expect(clickLocation(document.getElementById('t')!)).toBe('pricing')
  })

  it('uses the nearest section id', () => {
    render('<section id="download"><a id="t" href="/">x</a></section>')
    expect(clickLocation(document.getElementById('t')!)).toBe('download')
  })

  it('falls back to the landmark, then to page', () => {
    render('<footer><a id="t" href="/">x</a></footer><a id="u" href="/">y</a>')
    expect(clickLocation(document.getElementById('t')!)).toBe('footer')
    expect(clickLocation(document.getElementById('u')!)).toBe('page')
  })
})

describe('startAnalytics', () => {
  let doc: Document

  beforeEach(() => {
    doc = document.implementation.createHTMLDocument('test')
  })

  it('does nothing without a key', () => {
    const client = fakeClient()
    const listen = vi.spyOn(doc, 'addEventListener')

    expect(startAnalytics(client, null, doc)).toBe(false)
    expect(client.init).not.toHaveBeenCalled()
    expect(listen).not.toHaveBeenCalled()
  })

  it('initialises with the cookieless config when a key is set', () => {
    const client = fakeClient()

    expect(startAnalytics(client, 'phc_sample', doc)).toBe(true)
    expect(client.init).toHaveBeenCalledWith('phc_sample', POSTHOG_CONFIG)
  })

  it('captures app_store_clicked from a click inside a store link', () => {
    const client = fakeClient()
    startAnalytics(client, 'phc_sample', doc)
    doc.body.innerHTML =
      '<section id="hero"><a href="https://apps.apple.com/app/id6757692886"><span id="t">Get</span></a></section>'

    doc
      .getElementById('t')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(client.capture).toHaveBeenCalledWith(
      'app_store_clicked',
      { app: 'goodparts', store: 'ios', location: 'hero' },
      { transport: 'sendBeacon' },
    )
  })

  it('captures cta_clicked for a button-styled link', () => {
    const client = fakeClient()
    startAnalytics(client, 'phc_sample', doc)
    doc.body.innerHTML =
      '<main><a id="t" class="action-primary" href="https://other.example/x">Go</a></main>'

    doc
      .getElementById('t')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(client.capture).toHaveBeenCalledWith(
      'cta_clicked',
      { cta: 'main:other.example', destination: 'other.example' },
      { transport: 'sendBeacon' },
    )
  })

  it('ignores ordinary links', () => {
    const client = fakeClient()
    startAnalytics(client, 'phc_sample', doc)
    doc.body.innerHTML = '<a id="t" href="/plain">x</a>'

    doc
      .getElementById('t')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(client.capture).not.toHaveBeenCalled()
  })
})
