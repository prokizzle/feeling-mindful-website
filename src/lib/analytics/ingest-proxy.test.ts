import { describe, expect, it } from 'vitest'

import {
  FORWARDED_HEADERS,
  forwardedHeaders,
  ingestUpstream,
  isIngestPath,
} from './ingest-proxy'

const HOSTS = {
  ingest: 'https://us.i.posthog.com',
  assets: 'https://us-assets.i.posthog.com',
}

describe('isIngestPath', () => {
  it.each([
    ['/ingest', true],
    ['/ingest/e/', true],
    ['/ingestion', false],
    ['/privacy', false],
  ])('%s → %s', (path, expected) => {
    expect(isIngestPath(path)).toBe(expected)
  })
})

describe('ingestUpstream', () => {
  it('sends static assets to the assets host', () => {
    expect(ingestUpstream('/ingest/static/array.js', '', HOSTS)).toBe(
      'https://us-assets.i.posthog.com/static/array.js',
    )
  })

  it('sends everything else to the ingest host, keeping the query', () => {
    expect(ingestUpstream('/ingest/e/', '?ver=1', HOSTS)).toBe(
      'https://us.i.posthog.com/e/?ver=1',
    )
    expect(ingestUpstream('/ingest', '', HOSTS)).toBe(
      'https://us.i.posthog.com/',
    )
  })

  it('returns null outside /ingest', () => {
    expect(ingestUpstream('/privacy', '', HOSTS)).toBeNull()
  })
})

describe('forwardedHeaders', () => {
  it('keeps only allowlisted headers', () => {
    const incoming = new Headers({
      cookie: 'session=secret',
      authorization: 'Bearer secret',
      referer: 'https://site.example/private?token=t',
      'x-vercel-sample': 'v',
      'content-type': 'application/json',
      'user-agent': 'agent',
      'x-forwarded-for': '203.0.113.7',
    })

    const kept = forwardedHeaders(incoming)

    expect(Object.fromEntries(kept)).toEqual({
      'content-type': 'application/json',
      'user-agent': 'agent',
      'x-forwarded-for': '203.0.113.7',
    })
  })

  it('never allowlists credential or referrer headers', () => {
    for (const name of ['cookie', 'authorization', 'referer']) {
      expect(FORWARDED_HEADERS).not.toContain(name)
    }
  })
})
