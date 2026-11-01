import { type NextRequest, NextResponse } from 'next/server'

import { forwardedHeaders, ingestUpstream } from '@/lib/analytics/ingest-proxy'
import { resolvePosthogHosts } from '@/lib/analytics/posthog-hosts.mjs'

// Static read, so Next inlines it into the middleware bundle.
const POSTHOG_HOSTS = resolvePosthogHosts(process.env.NEXT_PUBLIC_POSTHOG_HOST)

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const upstream = ingestUpstream(pathname, search, POSTHOG_HOSTS)
  if (!upstream) return NextResponse.next()
  // Cookieless analytics relay: never forward this origin's cookies,
  // credentials, or referrer to PostHog.
  return NextResponse.rewrite(upstream, {
    request: { headers: forwardedHeaders(request.headers) },
  })
}

export const config = { matcher: ['/ingest', '/ingest/:path*'] }
