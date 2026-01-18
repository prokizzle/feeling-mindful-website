import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Terms of Service - Feeling Mindful Labs',
  description: 'Terms of use for Feeling Mindful Labs services',
}

export default function TermsPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <article className="prose prose-neutral max-w-3xl mx-auto">
            <h1>Terms of Service</h1>
            <p className="lead">
              <strong>Last updated: January 17, 2026</strong>
            </p>
            <p>
              Please read these Terms of Service ("Terms") carefully before using
              services operated by Feeling Mindful Labs LLC.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use our
              services.
            </p>

            <h2>Use of Services</h2>
            <p>
              You may use our services only in compliance with these Terms and all
              applicable laws. You agree not to misuse our services or help anyone
              else do so.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Feeling Mindful Labs shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of your use of our services.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:legal@feelingmindful.com">
                  legal@feelingmindful.com
                </a>
              </li>
            </ul>

            <hr />
            <p className="text-sm text-neutral-500">
              <em>
                Individual apps may have additional terms. See app-specific terms
                of service for details.
              </em>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
