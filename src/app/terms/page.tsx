import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Terms of Service - Feeling Mindful Labs',
  description:
    'Terms of Service for the Feeling Mindful Labs website and mobile applications.',
}

const APP_TERMS = [
  { name: 'Good Parts', href: '/apps/good-parts/terms' },
  { name: 'Simple Rituals', href: '/apps/simple-rituals/terms' },
]

export default function TermsPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <article className="prose max-w-3xl mx-auto">
            <h1>Terms of Service</h1>
            <p className="lead">
              <strong>Last updated: July 4, 2026</strong>
            </p>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the
              feelingmindful.com website and the mobile applications published
              by Feeling Mindful Labs LLC (&quot;Feeling Mindful Labs,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              (collectively, the &quot;Services&quot;). Please read them
              carefully.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Services, you agree to be bound by
              these Terms and our{' '}
              <Link href="/privacy">Privacy Policy</Link>. If you do not agree,
              do not use the Services. You must be at least 13 years old (or
              the minimum age of digital consent in your country) to use the
              Services.
            </p>

            <h2>2. Accounts</h2>
            <p>
              Some Services require an account. You are responsible for
              keeping your credentials secure and for all activity under your
              account. Provide accurate information and notify us promptly of
              any unauthorized use. We may suspend or terminate accounts that
              violate these Terms.
            </p>

            <h2>3. Subscriptions and Purchases</h2>
            <p>
              Some apps offer paid subscriptions or in-app purchases. Billing
              is handled by the Apple App Store or Google Play under their
              respective terms; we do not receive or store your payment card
              details.
            </p>
            <ul>
              <li>
                Subscriptions renew automatically unless cancelled at least 24
                hours before the end of the current period.
              </li>
              <li>
                Manage or cancel subscriptions in your Apple ID or Google Play
                account settings — deleting an app does not cancel a
                subscription.
              </li>
              <li>
                Refunds are governed by the policies of the app store where
                you made the purchase; refund requests should be directed to
                Apple or Google.
              </li>
              <li>
                Prices may change; we will provide notice as required by the
                applicable app store before any change takes effect.
              </li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Services in violation of any applicable law</li>
              <li>
                Reverse engineer, decompile, or attempt to extract the source
                code of the Services except as permitted by law
              </li>
              <li>
                Interfere with or disrupt the Services, their infrastructure,
                or other users
              </li>
              <li>
                Attempt to gain unauthorized access to any account, system, or
                data
              </li>
              <li>
                Resell, sublicense, or commercially exploit the Services
                without our written permission
              </li>
            </ul>

            <h2>5. Your Content</h2>
            <p>
              You retain ownership of the content you create in the Services —
              journal entries, recordings, routines, and other personal
              content. You grant us a limited license to host, store, and
              process that content solely to operate and improve the Services
              for you (for example, syncing it across your devices or running
              AI features you have enabled). We do not claim ownership of your
              content and do not use it for advertising.
            </p>

            <h2>6. Our Intellectual Property</h2>
            <p>
              The Services, including their design, code, branding, and
              content we create, are owned by Feeling Mindful Labs LLC and
              protected by intellectual property laws. We grant you a
              personal, non-exclusive, non-transferable, revocable license to
              use the apps on devices you own or control, subject to these
              Terms and the applicable app store rules.
            </p>

            <h2>7. AI Features</h2>
            <p>
              Some Services include AI-powered features such as transcription
              and analysis. AI output can be inaccurate or incomplete — it is
              provided for reflection and informational purposes only and
              should not be relied on as professional advice of any kind.
            </p>

            <h2>8. Not Medical or Mental Health Advice</h2>
            <p>
              Our apps are wellness and self-reflection tools. They are{' '}
              <strong>
                not therapy, medical care, or a substitute for professional
                mental health treatment
              </strong>
              , and we are not a healthcare provider. Content in the Services
              — including content inspired by frameworks such as Internal
              Family Systems — is for educational and personal-growth purposes
              only. If you are in crisis or think you may hurt yourself or
              others, call or text 988 (in the US) or contact your local
              emergency services immediately.
            </p>

            <h2>9. Third-Party Services</h2>
            <p>
              The Services rely on third-party providers (hosting,
              authentication, AI processing, subscription management) and may
              link to third-party sites. We are not responsible for
              third-party services, and your use of them is governed by their
              own terms.
            </p>

            <h2>10. Disclaimers</h2>
            <p>
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
              THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, FEELING MINDFUL LABS LLC
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, USE, OR
              PROFITS, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
              OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE GREATER OF
              THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE CLAIM OR
              ONE HUNDRED US DOLLARS ($100).
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Feeling Mindful Labs
              LLC from claims, damages, and expenses (including reasonable
              attorneys&apos; fees) arising from your violation of these Terms
              or misuse of the Services.
            </p>

            <h2>13. Termination</h2>
            <p>
              You may stop using the Services and delete your account at any
              time. We may suspend or terminate your access if you violate
              these Terms or if we discontinue a Service. Sections that by
              their nature should survive termination (including Sections 5,
              6, 10, 11, and 12) will survive.
            </p>

            <h2>14. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of the United States and
              the State of Texas, without regard to conflict-of-law rules.
              Before filing a claim, you agree to try to resolve the dispute
              informally by contacting us at{' '}
              <a href="mailto:legal@feelingmindful.com">
                legal@feelingmindful.com
              </a>
              . Any dispute that cannot be resolved informally shall be
              brought in the state or federal courts located in Travis County,
              Texas.
            </p>

            <h2>15. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will post the
              updated Terms here and revise the &quot;Last updated&quot; date;
              for material changes we will provide additional notice through
              the Services. Continued use after changes take effect
              constitutes acceptance.
            </p>

            <h2>16. App-Specific Terms</h2>
            <p>
              Individual apps may have additional terms that supplement these
              Terms:
            </p>
            <ul>
              {APP_TERMS.map((app) => (
                <li key={app.href}>
                  <Link href={app.href}>{app.name}</Link>
                </li>
              ))}
            </ul>

            <h2>17. Contact Us</h2>
            <p>
              Feeling Mindful Labs LLC, United States
              <br />
              Email:{' '}
              <a href="mailto:legal@feelingmindful.com">
                legal@feelingmindful.com
              </a>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
