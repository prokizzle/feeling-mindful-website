import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Terms of Service - Awareness App',
  description: 'Terms of service for the Awareness app by Feeling Mindful Labs',
}

export default function AwarenessTermsPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <article className="prose prose-neutral max-w-3xl mx-auto">
            <p className="text-sm text-neutral-500 mb-4">
              <Link href="/apps/awareness" className="hover:text-neutral-700">
                ← Back to Awareness
              </Link>
            </p>
            <h1>Awareness Terms of Service</h1>
            <p className="lead">
              <strong>Last updated: January 17, 2026</strong>
            </p>
            <p>
              These terms govern your use of the Awareness app provided by
              Feeling Mindful Labs LLC.
            </p>

            <h2>Use of the App</h2>
            <p>
              Awareness is designed to support your mindfulness practice. The app
              and its content are not a substitute for professional medical or
              mental health advice.
            </p>

            <h2>Account</h2>
            <p>
              You are responsible for maintaining the security of your account
              credentials and for all activity under your account.
            </p>

            <h2>Content</h2>
            <p>
              All guided meditations, prompts, and other content are owned by
              Feeling Mindful Labs or our content partners. You may not
              redistribute or reproduce this content.
            </p>

            <h2>Subscriptions</h2>
            <p>
              Some features may require a subscription or Collective membership.
              Subscription terms and pricing are displayed in the app.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access if you violate these terms
              or engage in conduct harmful to other users.
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
