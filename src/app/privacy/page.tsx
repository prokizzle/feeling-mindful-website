import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy - Feeling Mindful Labs',
  description: 'How Feeling Mindful Labs handles your data',
}

export default function PrivacyPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <article className="prose prose-neutral max-w-3xl mx-auto">
            <h1>Privacy Policy</h1>
            <p className="lead">
              <strong>Last updated: January 17, 2026</strong>
            </p>
            <p>
              Feeling Mindful Labs LLC ("we", "us", or "our") operates the Feeling
              Mindful Labs website and mobile applications.
            </p>
            <p>
              This page informs you of our policies regarding the collection, use,
              and disclosure of personal data when you use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you
              create an account, use our apps, or contact us for support.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve
              our services, and to communicate with you about your account and our
              products.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at:
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:privacy@feelingmindful.com">
                  privacy@feelingmindful.com
                </a>
              </li>
            </ul>

            <hr />
            <p className="text-sm text-neutral-500">
              <em>
                Individual apps may have additional privacy terms. See app-specific
                privacy policies for details.
              </em>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
