import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { apps, SUPPORT_URL } from '@/lib/apps'

export const metadata: Metadata = {
  title: 'Request Data Deletion - Feeling Mindful Labs',
  description: 'Request deletion of your personal data from any Feeling Mindful Labs app.',
}
export default function DataDeletionPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40 mb-24">
        <FadeIn className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Request Data Deletion
          </h1>
          <p className="mt-6 text-ink-muted">
            You have the right to request deletion of your personal data. Select the app
            below to submit a deletion request. We&apos;ll process it within 30 days.
          </p>
          <p className="mt-4 text-sm text-ink-faint">
            This will delete all data associated with your account, including your profile,
            progress, journal entries, and any other personal information stored in our systems.
          </p>
          <div className="mt-10 space-y-4">
            {apps.map((app) => (
              <Link
                key={app.slug}
                href={`${SUPPORT_URL}?app=${app.slug}&type=data-deletion#contact-support`}
                className="group flex items-center justify-between rounded-2xl bg-raised p-5 border border-edge transition-all hover:bg-raised-2 hover:border-edge-strong"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{app.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">Request deletion of your {app.name} data</p>
                </div>
                <svg className="h-5 w-5 text-ink-faint transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>

          <section
            id="simple-rituals"
            aria-labelledby="simple-rituals-heading"
            className="mt-12 pt-8 border-t border-edge scroll-mt-24"
          >
            <h2 id="simple-rituals-heading" className="font-display text-lg font-medium text-ink">
              Simple Rituals: delete your account in the app
            </h2>
            <p className="mt-4 text-sm text-ink-muted">
              Simple Rituals is developed by Feeling Mindful Labs LLC. You can delete your
              Simple Rituals account and its data yourself, inside the app.
            </p>
            <ol className="mt-4 space-y-3 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span className="text-ink-faint font-medium">1.</span>
                Open Simple Rituals and tap the settings icon to open Settings.
              </li>
              <li className="flex gap-3">
                <span className="text-ink-faint font-medium">2.</span>
                Under Account, tap Delete account.
              </li>
              <li className="flex gap-3">
                <span className="text-ink-faint font-medium">3.</span>
                Tap Delete to confirm. Deletion happens right away and cannot be undone.
              </li>
            </ol>

            <h3 className="mt-8 font-display text-base font-semibold text-ink">What is deleted</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-muted">
              <li>Your rituals and their settings, and your selected ritual pack</li>
              <li>Your completion history</li>
              <li>Your anonymous user ID (the Firebase Authentication account the app created for you)</li>
              <li>
                App data in your device&apos;s local storage, and your reminder settings and
                scheduled reminders
              </li>
            </ul>

            <h3 className="mt-8 font-display text-base font-semibold text-ink">What is kept, and for how long</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-muted">
              <li>
                <strong className="font-medium text-ink">Purchase records.</strong> If you bought
                Simple Rituals Pro, Google Play (or the Apple App Store on iOS) keeps its record of
                the purchase under its own terms. Deleting your account in the app does not remove
                it. These records are used to restore purchases, prevent fraud, and meet legal and
                tax obligations.
              </li>
              <li>
                <strong className="font-medium text-ink">RevenueCat purchase history.</strong>{' '}
                RevenueCat, which validates purchases for us, keeps the purchase history linked to
                your anonymous ID, along with any server-side purchase event records we hold, until
                we delete them. Deleting your account in the app does not remove them. To have them deleted, email{' '}
                <a href="mailto:support@feelingmindful.com" className="text-ink-muted underline hover:text-ink">
                  support@feelingmindful.com
                </a>
                .
              </li>
              <li>
                <strong className="font-medium text-ink">Diagnostics.</strong> Crash and error
                reports already sent to Sentry are kept for up to 90 days, and performance data for
                up to 30 days, and are then deleted automatically.
              </li>
              <li>
                <strong className="font-medium text-ink">App update checks.</strong> Expo (EAS
                Update) may keep logs of update requests, including the random installation ID and
                IP address, according to its own retention policy.
              </li>
              <li>
                <strong className="font-medium text-ink">Backups and security records.</strong>{' '}
                Firebase may keep limited security records or backups for a short time under its
                own policies.
              </li>
            </ul>

            <p className="mt-6 text-sm text-ink-muted">
              If you have not linked a Google or Apple account, your Simple Rituals account has no
              email address, so a request on this page cannot be matched to it. Deleting from
              inside the app is how that account is removed. Uninstalling the app does not delete your data, so delete
              your account first. For help, email{' '}
              <a href="mailto:support@feelingmindful.com" className="text-ink-muted underline hover:text-ink">
                support@feelingmindful.com
              </a>
              .
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-edge">
            <h2 className="font-display text-lg font-medium text-ink">
              What happens next?
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span className="text-ink-faint font-medium">1.</span>
                If the app created an anonymous account with no email, delete
                from inside the app instead. For linked accounts we&apos;ll
                verify your email address matches an account in our system.
              </li>
              <li className="flex gap-3">
                <span className="text-ink-faint font-medium">2.</span>
                You&apos;ll receive a confirmation with details about what data will be deleted.
              </li>
              <li className="flex gap-3">
                <span className="text-ink-faint font-medium">3.</span>
                Your data will be permanently deleted within 30 days of your request.
              </li>
              <li className="flex gap-3">
                <span className="text-ink-faint font-medium">4.</span>
                You&apos;ll receive a final confirmation once deletion is complete.
              </li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-ink-faint">
            Questions? <Link href="/contact" className="text-ink-muted underline hover:text-ink">Contact us</Link> or visit our{' '}
            <Link href="/support" className="text-ink-muted underline hover:text-ink">support page</Link>.
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
