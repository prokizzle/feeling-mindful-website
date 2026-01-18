import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy - Awareness App',
  description: 'Privacy policy for the Awareness app by Feeling Mindful Labs',
}

export default function AwarenessPrivacyPage() {
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
            <h1>Awareness Privacy Policy</h1>
            <p className="lead">
              <strong>Last updated: January 17, 2026</strong>
            </p>
            <p>
              This privacy policy describes how the Awareness app collects, uses,
              and protects your information.
            </p>

            <h2>Data We Collect</h2>
            <p>The Awareness app collects:</p>
            <ul>
              <li>Account information (email, name)</li>
              <li>Meditation and journaling progress</li>
              <li>Health data (with your permission via Health Connect)</li>
              <li>App usage analytics</li>
            </ul>

            <h2>How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide and personalize the app experience</li>
              <li>Track your progress and streaks</li>
              <li>Sync data across your devices</li>
              <li>Improve the app based on usage patterns</li>
            </ul>

            <h2>Data Storage</h2>
            <p>
              Your data is stored securely using Firebase services. Journal entries
              and personal reflections are encrypted.
            </p>

            <h2>Health Connect</h2>
            <p>
              If you grant permission, Awareness reads exercise data from Health
              Connect to automatically track cardio activities. We only read data;
              we never write to Health Connect.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions specific to Awareness, contact us at{' '}
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
