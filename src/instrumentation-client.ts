import { readPosthogKey, startAnalytics } from '@/lib/analytics/posthog'

// Runs once in the browser before the app hydrates (Next 15.3+).
// No-op when NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is unset: the SDK is not even
// downloaded. When set, it loads as a separate chunk, off the critical path.
const key = readPosthogKey()

if (key) {
  import('posthog-js')
    .then(({ default: posthog }) => startAnalytics(posthog, key, document))
    .catch((error: unknown) => {
      // Analytics must never break the page; leave a trace for debugging.
      console.warn('[analytics] PostHog failed to load', error)
    })
}
