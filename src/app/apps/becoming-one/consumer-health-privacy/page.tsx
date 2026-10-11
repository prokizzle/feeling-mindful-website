import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

/**
 * BecomingOne's Consumer Health Data Privacy Policy under Washington's My Health My Data Act
 * (BOI-35). Modelled on GoodParts' /consumer-health-privacy, with every fact checked against the
 * BecomingOne app (apps/becomingone in the goodparts monorepo) rather than copied across:
 * - Apple Health and Health Connect: write-only, one mindful-session sample (start and end) per
 *   finished session; nothing is read.
 * - Reflections and moods: Firestore users/{uid}/reflections (Firebase builds) or Supabase.
 * - Session records: Supabase (newer builds).
 * - No analytics SDK, no AI or server-side processing of content.
 * - Sentry: content scrubbed, no replay, a 5% trace sample.
 * - Expo: update checks.
 */

export const metadata: Metadata = {
  title: 'Consumer Health Data Privacy Policy - Becoming One',
  description:
    'How Becoming One collects and uses consumer health data, who receives it, and your privacy rights under Washington law.',
}

const LAST_UPDATED = 'October 11, 2026'
const CONTACT_EMAIL = 'privacy@feelingmindful.com'
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=Becoming%20One%20privacy%20request`

function Email() {
  return <a href={MAILTO}>{CONTACT_EMAIL}</a>
}

export default function BecomingOneConsumerHealthPrivacy() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <article className="prose max-w-3xl mx-auto">
            <h1>Consumer Health Data Privacy Policy</h1>
            <p className="lead">
              <strong>Becoming One · Feeling Mindful Labs LLC</strong>
              <br />
              Last updated: {LAST_UPDATED}
            </p>
            <p>
              This policy describes how Becoming One handles consumer health data under
              Washington&apos;s My Health My Data Act. Our{' '}
              <Link href="/apps/becoming-one/privacy">Becoming One Privacy Policy</Link> covers
              everything else the app collects. Reading a policy or continuing to use Becoming One
              does not itself provide consent for additional collection or sharing.
            </p>

            <h2>Health data we collect and why</h2>
            <ul>
              <li>
                Reflections you write after a meditation, and the moods you choose with them. They
                can describe your emotions and mental health. We store them so you can read them
                again in the app.
              </li>
              <li>
                Records of the meditations you finish, and your course progress. They show
                your meditation practice and can reveal that you use a mental-wellbeing service. We
                use them to show your progress and suggest what to play next.
              </li>
              <li>
                Mindful minutes. If you allow it, when you finish a session the app writes one
                mindful session, its start and end time, to Apple Health on iPhone or Health Connect
                on Android. The app only writes these records. It does not read anything from Apple
                Health or Health Connect, and Apple Health and Health Connect do not send these
                records to us.
              </li>
              <li>
                Your account identifiers, and your name, email address and profile picture if you
                sign in with Apple or Google. These link your reflections and progress to your
                account, and can reveal that you use a mental-wellbeing service.
              </li>
            </ul>
            <p>
              We do not sell consumer health data or share it for targeted advertising. Becoming One
              has no analytics or advertising tools. We do not analyse your reflections with AI, and
              we do not use them to train AI models. We do not collect your location.
            </p>

            <h2>Where the data comes from</h2>
            <p>
              From you and your device, and from Apple or Google when you choose their sign-in.
            </p>

            <h2>Recipients, categories and purposes</h2>
            <p>
              These service providers process data for us to run the features you use:
            </p>
            <ul>
              <li>
                <strong>Google Firebase</strong>: in app versions that use Firebase, sign-in
                accounts, meditation audio, and your saved reflections with the meditation, moods and
                time of each, and your progress. This data stays in Firebase when you move to a newer
                version of the app; contact us at <Email /> for a copy or to have it removed.
              </li>
              <li>
                <strong>Supabase</strong>: in newer app versions, sign-in accounts, your reflections,
                and records of the meditations you finish.
              </li>
              <li>
                <strong>Sentry</strong>: crash reports, error details, and device and app information
                when something goes wrong, and performance traces from a sample of app sessions. The app
                is set up to keep reflection text, moods and other things you write out of these
                reports. Sentry does not record your screen.
              </li>
              <li>
                <strong>Expo (EAS Update)</strong>: app update checks, which include a random
                installation ID and your IP address.
              </li>
              <li>
                <strong>Apple and Google sign-in</strong>: when you choose them, Apple or Google
                signs you in. To sign you in, the app asks Google only for your name, email address
                and profile picture.
              </li>
            </ul>
            <p>
              Some providers&apos; own terms let them use limited information about our use of their
              service for their own purposes: Sentry may use non-identifying service data to improve
              its products, and Expo may keep and use de-identified or aggregated data.
            </p>
            <p>
              We do not share consumer health data with corporate affiliates. You may request the
              list of third parties that received your data, with an email address or online contact
              mechanism for each.
            </p>

            <h2>Collection and optional sharing</h2>
            <p>
              We collect only what the features you use need. A reflection is saved when you choose
              to save one. Mindful minutes are written only after you allow it in your phone&apos;s
              health permission prompt, and you can turn that off at any time in Apple Health or
              Health Connect. We do not share consumer health data for any purpose beyond running the
              app. If that changes, we will update this policy and ask for your separate consent
              first.
            </p>

            <h2 id="requests">Access, correction, withdrawal, deletion and appeals</h2>
            <p>
              Email <Email /> to confirm whether we collect or share your health data, access it and
              its recipient list, correct it, withdraw consent to future collection or sharing, or
              request deletion. Becoming One does not have in-app controls for these yet. State
              which right you want to exercise and the account involved, for example the email
              address you signed in with. Do not email the text of your reflections, passwords or
              authentication codes. We will use reasonable measures to authenticate your request and
              will not require you to create an account. If you never signed in with Apple or Google,
              your account has no email address and we may not be able to match a request to it.
            </p>
            <p>
              You can also request deletion on our{' '}
              <Link href="/data-deletion">data deletion page</Link>. Mindful minutes already written
              to Apple Health or Health Connect are stored there, on your device or in your Apple or
              Google account, not by us. Delete them in Apple Health or Health Connect.
            </p>
            <p>
              In newer app versions, Becoming One signs you in with a Feeling Mindful account that
              our other apps can share. Deleting that account, for example from GoodParts&apos;
              Settings, also deletes what Becoming One saved to it. In newer app versions, if you
              continue without signing in, your account is anonymous. We delete an anonymous account
              and everything saved to it after 12 months without use, including asking our service
              providers to delete their copies. Opening the app, or signing in, keeps it.
            </p>
            <p>
              We respond without undue delay and within 45 days of receiving your request;
              authentication does not extend that deadline. If reasonably necessary, we may extend
              by another 45 days and explain why within the first 45. Deletion includes asking the
              providers that hold the data to delete it. Crash and error reports already sent to
              Sentry are kept for up to 90 days, and performance data for up to 30 days, and are
              then deleted automatically. Supabase&apos;s daily backups are kept for 7 days. Firebase
              may keep limited security records or backups for a short time under its own policies.
              Withdrawing consent stops future collection or sharing and may make the affected
              features unavailable; it does not delete existing records.
            </p>
            <p>
              If we refuse a request, we explain why and how to appeal. To appeal, email the same
              address with &quot;Privacy appeal&quot; in the subject. We provide a written decision
              within 45 days. If we deny your appeal, you may{' '}
              <a href="https://www.atg.wa.gov/file-complaint">
                submit a complaint to the Washington Attorney General
              </a>
              . We do not unlawfully discriminate against you for exercising these rights.
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
