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
 * - Session records: Supabase builds (none released yet).
 * - No analytics SDK, no AI or server-side processing of content.
 * - Sentry: content scrubbed, no replay, a 5% trace sample.
 * - Expo: update checks.
 */

export const metadata: Metadata = {
  title: 'Consumer Health Data Privacy Policy - Becoming One',
  description:
    'How Becoming One collects and uses consumer health data, who receives it, and your privacy rights under Washington law.',
}

const LAST_UPDATED = 'October 15, 2026'
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
              everything else the app collects. Using Becoming One, or reading this policy, is not
              consent. Where we need your consent, for example to write to Apple Health or Health
              Connect, we ask for it separately.
            </p>

            <h2>Health data we collect and why</h2>
            <ul>
              <li>
                Reflections you write after a meditation, and the moods you choose with them. They
                can describe your emotions and mental health. We store them so you can read them
                again in the app.
              </li>
              <li>
                Your course progress: which meditations you have saved a reflection for. We use it to
                show your progress, unlock courses and suggest what to play next.
              </li>
              <li>
                In app versions that use Supabase, a record of each meditation you finish: which one,
                how long, and when. It can reveal that you use a mental-wellbeing service. We keep it
                as a record of your practice, move it to your account when you sign in, and use it to
                tell whether an account is still in use.
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
            <p>We do not sell consumer health data or share it for targeted advertising.</p>

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
                time of each. This data stays in Firebase even if a later version
                of the app uses Supabase instead; contact us at <Email /> for a copy or to have it
                removed.
              </li>
              <li>
                <strong>Supabase</strong>: in app versions that use Supabase (none released yet),
                sign-in accounts, meditation audio,
                your reflections, and records of the meditations you finish.
              </li>
              <li>
                <strong>Sentry</strong>: each time the app opens, a short app-start record with a
                random installation ID and device and app information; crash reports and error details
                when something goes wrong; and performance traces from a sample of app sessions. The
                app is set up to keep reflection text, moods and other things you write out of the
                reports it sends. Sentry does not record your screen.
              </li>
              <li>
                <strong>Expo (EAS Update)</strong>: app update checks, which include a random
                installation ID and your IP address.
              </li>
            </ul>
            <h3>Third parties you choose to involve</h3>
            <p>
              Apple and Google, when you choose to sign in with them. They learn that your Apple or
              Google account signs in to Becoming One. The app asks Apple for your name and email
              address, and Google for your name, email address and profile picture. GoodParts and
              Becoming One use the same Google sign-in setup, so if you sign in with Google in both
              apps, Google can tell that the same Google account uses both.
            </p>
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
              We collect only what is needed to provide the features you use, including what keeps
              the app working and up to date: crash and error diagnostics (Sentry) and app update
              checks (Expo). A reflection is saved when you choose to save one. Mindful minutes are written only after you allow it in your phone&apos;s
              health permission prompt, and you can turn that off at any time in Apple Health or
              Health Connect. We share consumer health data only with the service providers and
              sign-in providers listed above, to run the app, and, if you allow it, with Apple Health or
              Health Connect. Their own use of limited service data is described under Recipients. If
              we want to share it with anyone else or for any other purpose, we will update this policy
              and ask for your separate consent first.
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
              In app versions that use Firebase, if you do not sign in, the app creates an anonymous
              Firebase account. Your reflections are kept in Firebase until you ask us to remove them;
              there is no automatic time limit yet. Deleting a Feeling Mindful account, for example
              from GoodParts’ Settings, does not remove data held in Firebase. In app versions that
              use Supabase, Becoming One has no sign-in. It uses an anonymous account that is never shared with our other apps, and keeps your reflections and meditation
              history only on your phone. Delete my data in the app’s Settings deletes that account and
              removes your practice data from your phone. We delete an anonymous account and everything
              saved to it after 12 months without use, the same way as deleting it yourself with Delete my
              data, including asking our service providers to delete their copies, where they hold any. We
              keep it longer only while a privacy request or appeal of yours is still open, or while we have
              set it aside on purpose. Opening the app keeps it.
            </p>
            <p>
              We respond without undue delay and within 45 days of receiving your request;
              authentication does not extend that deadline. If reasonably necessary, we may extend
              by another 45 days and explain why within the first 45. Deletion removes the data
              from our app databases: Supabase, and Firebase for app versions that use it. We also
              tell the service providers listed above that received your data, including Sentry and
              Expo, about your request and ask them to delete it. Crash and error reports sent to
              Sentry do not include your account ID, and the app is set up to keep the text you write
              out of them; Sentry also deletes them automatically after up to 90 days (performance
              data after up to 30 days). Copies in Supabase’s and Firebase’s backups are removed as
              those backups expire, within six months.
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
