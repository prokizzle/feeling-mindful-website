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
          <article className="prose prose-neutral max-w-3xl mx-auto">
            <p className="text-sm text-neutral-500 mb-4">
              <Link href="/apps/simple-rituals" className="hover:text-neutral-700">
                ← Back to Simple Rituals
              </Link>
            </p>
            <h1>Simple Rituals Terms of Service</h1>
            <p className="lead">
              <strong>Last updated: January 19, 2026</strong>
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
              Your ritual data is stored locally on your device. You are
              responsible for backing up your data. If you enable iCloud sync,
              Apple&apos;s terms apply to that data.
            </p>

            <h2>Subscriptions</h2>
            <p>
              Some features require a Simple Rituals Pro subscription. Subscriptions
              are billed through the App Store and subject to Apple&apos;s terms.
              You can manage or cancel subscriptions in your Apple ID settings.
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
