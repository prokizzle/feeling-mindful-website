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
      lastUpdated="2026-10-15"
      dataCollected={[
        'Name and email address, and your profile picture if you sign in with Google (account registration)',
        'Course progress (which meditations you have saved a reflection for) and, in app versions that use Supabase (none released yet), records of the meditations you finish, kept only on your phone',
        'Course completion data',
        'Device information (model, OS version)',
        'Reflections you write after a meditation, and the moods you choose',
        'App update checks, which include a random installation ID and your IP address (Expo)',
        'An app-start record with a random installation ID each time the app opens, crash reports and error details with device and app information when something goes wrong, and performance traces from a sample of app sessions (Sentry)',
      ]}
      thirdPartyServices={[
        'Google Sign-In — authentication. GoodParts and BecomingOne use the same Google sign-in setup. If you sign in with Google in both apps, Google can tell that the same Google account uses both. To sign you in, the app asks Google only for your name, email address and profile picture. In app versions that use Firebase, Google Cloud also stores some app data, including your saved reflections, as listed in this section.',
        'Apple Sign-In — authentication',
        'Google Firebase — in app versions that use Firebase: sign-in accounts, meditation audio, and your saved reflections with the meditation, moods and time of each. This data stays in Firebase even if a later version of the app uses Supabase instead; contact us at privacy@feelingmindful.com for a copy or to have it removed.',
        'Supabase — in app versions that use Supabase (none released yet): your anonymous account, which records the IP address and device and app information it was used from; the meditation catalog and audio the app plays; and logs of the requests the app makes. It does not receive your reflections or meditation history, which stay on your phone.',
        'Expo (EAS Update) — app update checks, which include a random installation ID and your IP address',
        'Sentry — an app-start record each time the app opens, crash reports and error details, and performance traces from a sample of sessions',
      ]}
      devicePermissions={['Apple Health / Health Connect: writing mindful sessions (optional)']}
      dataUse={[
        'To provide the app: play meditations, save your reflections and show your progress',
        'To fix crashes and errors (Sentry)',
        'To deliver app updates (Expo)',
      ]}
      implicitConsent={false}
      dataSharingDescription="We share data with the service providers listed above to operate Becoming One. Under their own terms, Sentry may use non-identifying service data to improve its products, and Expo may keep and use de-identified or aggregated data."
      retentionDescription="In app versions that use Firebase, your reflections are kept until you ask us to remove them: there is no automatic time limit yet, and deleting a Feeling Mindful account does not remove data held in Firebase. Email privacy@feelingmindful.com to have it removed. In app versions that use Supabase (none released yet), your reflections and meditation history stay only on your phone, and Delete my data in the app's Settings removes them from your phone and deletes your anonymous account. An anonymous account is also deleted after 12 months without use. See the Consumer Health Data Privacy Policy for details and backup schedules. Sentry deletes crash reports and error details automatically after up to 90 days, and performance traces after up to 30 days. Expo keeps app update check records under its own retention periods. Mindful minutes stay in Apple Health or Health Connect, on your device or in your Apple or Google account, until you delete them there."
    >
      <h2>Health data</h2>
      <p>
        Mindful minutes (write only). If you allow it, each finished session is written to Apple
        Health on iPhone or Health Connect on Android. The app does not read any health data. You can
        turn this off in the Health app on iPhone, or in Health Connect under App permissions on
        Android.
      </p>
      <h2>Consumer Health Data</h2>
      <p>
        How Becoming One handles consumer health data under Washington&apos;s My Health My Data Act,
        and how to exercise your rights over it, is described in our{' '}
        <Link href="/apps/becoming-one/consumer-health-privacy">
          Becoming One Consumer Health Data Privacy Policy
        </Link>
        .
      </p>
      <p>
        Using the app, or reading this policy, is not consent. Where we need your consent, for
        example to write to Apple Health or Health Connect, we ask for it separately. If we change
        how we use or share health data, we will ask for your consent first.
      </p>

      {/* BOI-37: Becoming One's App Store availability excludes the EEA, the UK and Switzerland
          (set 2026-10-11). Offering it there again needs the full GDPR disclosures first. */}
      <h2 id="eea-uk-switzerland">EEA, UK and Switzerland</h2>
      <p>
        Becoming One is not offered in the European Economic Area, the United Kingdom or
        Switzerland. If you use it from there, email{' '}
        <a href="mailto:privacy@feelingmindful.com">privacy@feelingmindful.com</a> and we will
        handle your request under the law that applies to you.
      </p>
    </PrivacyPolicy>
  )
}
