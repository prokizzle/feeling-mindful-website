import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy - Simple Rituals App',
  description: 'Privacy policy for the Simple Rituals app by Feeling Mindful Labs',
}

export default function SimpleRitualsPrivacyPage() {
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
            <h1>Simple Rituals Privacy Policy</h1>
            <p className="lead">
              <strong>Last updated: January 19, 2026</strong>
            </p>
            <p>
              Simple Rituals is built with privacy at its core. Your data stays
              on your device.
            </p>

            <h2>Privacy-First Design</h2>
            <p>Simple Rituals is designed to work entirely offline:</p>
            <ul>
              <li>No account required</li>
              <li>Your ritual data never leaves your device</li>
              <li>No analytics or tracking</li>
              <li>No third-party data sharing</li>
            </ul>

            <h2>Data Storage</h2>
            <p>
              All data is stored locally on your device using iOS Data Protection
              with AES-256 encryption. Your rituals, completion history, and
              preferences are encrypted at rest.
            </p>

            <h2>iCloud Sync (Optional)</h2>
            <p>
              If you enable iCloud sync, your data syncs across your Apple devices
              using CloudKit. This data is encrypted in transit and at rest by
              Apple. We cannot access your synced data.
            </p>

            <h2>What We Do Not Collect</h2>
            <ul>
              <li>Ritual names or content</li>
              <li>Completion history or patterns</li>
              <li>Personal identifiers</li>
              <li>Location data</li>
              <li>Usage analytics</li>
            </ul>

            <h2>Subscriptions</h2>
            <p>
              Purchases are processed through Apple. We receive confirmation of
              purchase status but no payment details.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions, contact us at{' '}
              <a href="mailto:privacy@feelingmindful.com">privacy@feelingmindful.com</a>
            </p>

            <hr />
            <p className="text-sm text-neutral-500">
              See also: <Link href="/privacy">General Privacy Policy</Link>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
