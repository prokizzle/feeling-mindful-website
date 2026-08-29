import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Terms of Service - Simple Rituals App',
  description: 'Terms of service for the Simple Rituals app by Feeling Mindful Labs',
}

export default function SimpleRitualsTermsPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <article className="prose max-w-3xl mx-auto">
            <p className="text-sm text-neutral-500 mb-4">
              <Link href="/apps/simple-rituals" className="hover:text-neutral-700">
                ← Back to Simple Rituals
              </Link>
            </p>
            <h1>Simple Rituals Terms of Service</h1>
            <p className="lead">
              <strong>Last updated: August 28, 2026</strong>
            </p>
            <p>
              These terms govern your use of the Simple Rituals app provided by
              Feeling Mindful Labs LLC.
            </p>

            <h2>Use of the App</h2>
            <p>
              Simple Rituals helps you build daily routines. The app is provided
              as-is for personal productivity and habit tracking.
            </p>

            <h2>Your Data</h2>
            <p>
              Simple Rituals uses a pseudonymous account identifier to store
              your rituals, configuration, and completion history in cloud
              services so the app can restore and sync your data. Notification
              preferences and reminder schedules are stored on your device.
              You retain ownership of the ritual content you create.
            </p>

            <h2>Accounts and Deletion</h2>
            <p>
              The app creates an anonymous account by default. You may
              optionally link it using Sign in with Apple or another available
              sign-in provider. Delete your rituals, completion history, local
              app data, and the account itself from Settings → Delete account.
              That in-app path is the deletion method for anonymous accounts,
              which have no email to verify. If you linked a sign-in provider,
              you may also email{' '}
              <a href="mailto:privacy@feelingmindful.com">privacy@feelingmindful.com</a>{' '}
              or use our{' '}
              <Link href="/data-deletion">data deletion page</Link>.
            </p>

            <h2>Simple Rituals Pro</h2>
            <p>
              Some features require Simple Rituals Pro, offered as a one-time,
              non-consumable in-app purchase. It is not an auto-renewing
              subscription. Purchases are billed by the Apple App Store or
              Google Play and are subject to the applicable store terms. You
              can restore an eligible purchase in the app. Refund requests must
              be submitted to the store that processed the purchase.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Simple Rituals app, including its design and code, is owned by
              Feeling Mindful Labs. Your ritual content belongs to you.
            </p>

            <h2>Disclaimer</h2>
            <p>
              Simple Rituals is a productivity tool, not medical or professional
              advice. We make no guarantees about results from using the app.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms. Continued use of the app constitutes
              acceptance of updated terms.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@feelingmindful.com">legal@feelingmindful.com</a>
            </p>

            <hr />
            <p className="text-sm text-neutral-500">
              See also: <Link href="/terms">General Terms of Service</Link>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
