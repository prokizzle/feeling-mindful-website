import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Terms of Service - Good Parts',
  description:
    'Terms of Service for Good Parts, an IFS-aware voice journaling app by Feeling Mindful Labs.',
}

export default function GoodPartsTermsPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <article className="prose prose-invert prose-zinc max-w-3xl mx-auto">
            <p className="text-sm text-zinc-500 mb-4">
              <Link href="/apps/good-parts" className="hover:text-zinc-300">
                ← Back to Good Parts
              </Link>
            </p>
            <h1>Good Parts Terms of Service</h1>
            <p className="lead">
              <strong>Last updated: July 4, 2026</strong>
            </p>
            <p>
              These terms govern your use of the Good Parts app provided by
              Feeling Mindful Labs LLC. They supplement our{' '}
              <Link href="/terms">General Terms of Service</Link>, which also
              apply. If these app-specific terms conflict with the general
              terms, these terms control for Good Parts.
            </p>

            <h2>Use of the App</h2>
            <p>
              Good Parts is a voice journaling app informed by the Internal
              Family Systems (IFS) framework. It is provided for personal
              reflection and self-development. You must be at least 13 years
              old to use the app.
            </p>

            <h2>Not Therapy or Medical Care</h2>
            <p>
              Good Parts is <strong>not therapy, medical care, or a substitute
              for professional mental health treatment</strong>, and Feeling
              Mindful Labs is not a healthcare provider. IFS-inspired content
              and AI-generated reflections are for educational and
              personal-growth purposes only. If you are in crisis or think you
              may hurt yourself or others, call or text 988 (in the US) or
              contact your local emergency services immediately.
            </p>

            <h2>AI Features</h2>
            <p>
              Good Parts offers opt-in AI features, including transcription of
              your voice entries and analysis of your journal text. AI output
              can be inaccurate, incomplete, or misattributed — treat it as a
              starting point for your own reflection, not as fact or advice.
              You can disable AI analysis in the app&apos;s privacy settings.
            </p>

            <h2>Your Content</h2>
            <p>
              Your journal entries, recordings, transcripts, and parts data
              belong to you. You grant us a limited license to store and
              process them solely to provide the app&apos;s features (such as
              sync, backup, and AI analysis you have enabled). You can export
              your data from Settings and delete your account at any time. See
              the{' '}
              <Link href="/apps/good-parts/privacy">
                Good Parts Privacy Policy
              </Link>{' '}
              for details on how your data is handled.
            </p>

            <h2>Subscriptions</h2>
            <p>
              Some features require a GoodParts Plus subscription. Billing is
              handled by the Apple App Store or Google Play under their terms:
            </p>
            <ul>
              <li>
                Subscriptions renew automatically unless cancelled at least 24
                hours before the end of the current period.
              </li>
              <li>
                Manage or cancel your subscription in your Apple ID or Google
                Play settings — deleting the app does not cancel it.
              </li>
              <li>
                Refund requests are handled by Apple or Google under their
                refund policies.
              </li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The Good Parts app, including its design, code, and branding, is
              owned by Feeling Mindful Labs LLC. Your journal content belongs
              to you.
            </p>

            <h2>Disclaimer and Limitation of Liability</h2>
            <p>
              The app is provided &quot;as is&quot; without warranties of any
              kind. To the fullest extent permitted by law, our liability is
              limited as described in the{' '}
              <Link href="/terms">General Terms of Service</Link>.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms. We will post updates here and revise
              the &quot;Last updated&quot; date; continued use of the app after
              changes take effect constitutes acceptance.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@feelingmindful.com">
                legal@feelingmindful.com
              </a>
            </p>

            <hr />
            <p className="text-sm text-zinc-500">
              See also: <Link href="/terms">General Terms of Service</Link> ·{' '}
              <Link href="/apps/good-parts/privacy">
                Good Parts Privacy Policy
              </Link>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
