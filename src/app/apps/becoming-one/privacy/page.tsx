import { type Metadata } from 'next'
import Link from 'next/link'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Becoming One',
  description: 'Privacy Policy for Becoming One, an IFS-guided meditation app by Feeling Mindful Labs.',
}

export default function BecomingOnePrivacy() {
  return (
    <PrivacyPolicy
      appName="Becoming One"
      lastUpdated="2026-10-11"
      dataCollected={[
        'Name and email address (account registration)',
        'Meditation session history and progress',
        'Course completion data',
        'Device information (model, OS version)',
        'Reflections you write after a meditation, and the moods you choose',
        'Crash reports, error details, and device and app information when something goes wrong, and performance traces from a sample of app sessions (Sentry)',
      ]}
      thirdPartyServices={[
        'Google Sign-In — authentication. GoodParts and BecomingOne use the same Google sign-in setup. If you sign in with Google in both apps, Google can tell that the same Google account uses both. To sign you in, the app asks Google only for your name, email address and profile picture. In app versions that use Firebase, Google Cloud also stores some app data, including your saved reflections, as listed in this section.',
        'Apple Sign-In — authentication',
        'Google Firebase — in app versions that use Firebase: sign-in accounts, meditation audio, and your saved reflections with the meditation, moods and time of each. This data stays in Firebase when you move to a newer version of the app; contact us at privacy@feelingmindful.com for a copy or to have it removed.',
        'Supabase — in newer app versions: sign-in accounts, your reflections, and records of the meditations you finish.',
        'Expo (EAS Update) — app update checks, which include a random installation ID and your IP address',
        'Sentry — crash reporting and error tracking',
      ]}
      healthData={[
        'Mindfulness session data (write) — logs completed meditation sessions to Apple Health',
      ]}
      devicePermissions={[
        'HealthKit — mindfulness session tracking (optional)',
        'Push Notifications — for reminders and updates',
      ]}
    >
      <h2>Consumer Health Data</h2>
      <p>
        How Becoming One handles consumer health data under Washington&apos;s My Health My Data Act,
        and how to exercise your rights over it, is described in our{' '}
        <Link href="/apps/becoming-one/consumer-health-privacy">
          Becoming One Consumer Health Data Privacy Policy
        </Link>
        .
      </p>
    </PrivacyPolicy>
  )
}
