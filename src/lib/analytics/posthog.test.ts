// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { ctaAttributes } from './events'
import { resolvePosthogHosts } from './posthog-hosts.mjs'
import {
  POSTHOG_CONFIG,
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

function freshDocument() {
  return document.implementation.createHTMLDocument('test')
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
  it('is cookieless, profile-free, and never records sessions', () => {
    expect(POSTHOG_CONFIG).toMatchObject({
      api_host: '/ingest',
      cookieless_mode: 'always',
      persistence: 'memory',
      person_profiles: 'never',
      disable_session_recording: true,
      autocapture: true,
      capture_pageview: 'history_change',
      capture_heatmaps: true,
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

describe('startAnalytics', () => {
  let doc: Document

  beforeEach(() => {
    doc = freshDocument()
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

  it('captures a named event when a tagged link (or its child) is clicked', () => {
    const client = fakeClient()
    startAnalytics(client, 'phc_sample', doc)

    const link = doc.createElement('a')
    link.href = 'https://other.example/x'
    for (const [name, value] of Object.entries(ctaAttributes('sample-cta'))) {
      link.setAttribute(name, value)
    }
    const label = doc.createElement('span')
    link.append(label)
    doc.body.append(link)

    label.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(client.capture).toHaveBeenCalledWith(
      'cta_clicked',
      { cta: 'sample-cta', destination: 'other.example' },
      { transport: 'sendBeacon' },
    )
  })

  it('ignores clicks on untagged elements', () => {
    const client = fakeClient()
    startAnalytics(client, 'phc_sample', doc)

    const link = doc.createElement('a')
    link.href = '/plain'
    doc.body.append(link)
    link.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(client.capture).not.toHaveBeenCalled()
  })
})
