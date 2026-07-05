import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy - Feeling Mindful Labs',
  description:
    'How Feeling Mindful Labs LLC collects, uses, and protects your personal data across our website and mobile applications.',
}

const APP_POLICIES = [
  { name: 'Good Parts', href: '/apps/good-parts/privacy' },
  { name: 'Becoming One', href: '/apps/becoming-one/privacy' },
  { name: 'Simple Rituals', href: '/apps/simple-rituals/privacy' },
  { name: 'CutEngine', href: '/apps/cutengine/privacy' },
  { name: 'CardioEngine', href: '/apps/cardioengine/privacy' },
]

export default function PrivacyPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <article className="prose prose-invert prose-zinc max-w-3xl mx-auto">
            <h1>Privacy Policy</h1>
            <p className="lead">
              <strong>Last updated: July 4, 2026</strong>
            </p>
            <p>
              Feeling Mindful Labs LLC (&quot;Feeling Mindful Labs,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
              feelingmindful.com website and a family of mobile applications
              (collectively, the &quot;Services&quot;). This Privacy Policy
              explains what personal data we collect, how we use it, who we
              share it with, and the rights you have over it.
            </p>
            <p>
              By using the Services, you agree to the collection and use of
              information in accordance with this policy.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information you provide</h3>
            <ul>
              <li>
                <strong>Account information</strong> — name, email address, and
                authentication credentials when you create an account in one of
                our apps.
              </li>
              <li>
                <strong>Content you create</strong> — journal entries, voice
                recordings, routines, fitness data, and other content you
                create inside our apps. App-specific policies describe this in
                detail.
              </li>
              <li>
                <strong>Communications</strong> — messages you send us through
                the contact form, support portal, or email.
              </li>
              <li>
                <strong>Purchase information</strong> — subscription status and
                purchase history. Payment is processed by Apple, Google, or
                their payment partners; we never receive your card details.
              </li>
            </ul>

            <h3>Information collected automatically</h3>
            <ul>
              <li>
                <strong>Usage data</strong> — pages visited, features used, and
                interactions with the Services.
              </li>
              <li>
                <strong>Device data</strong> — device model, operating system
                version, app version, language, and time zone.
              </li>
              <li>
                <strong>Diagnostics</strong> — crash reports and performance
                data collected through error-monitoring tools.
              </li>
            </ul>
            <p>
              We do not collect precise location data, and we do not use your
              data for third-party advertising.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide, maintain, and improve the Services</li>
              <li>To create and manage your account</li>
              <li>To process subscriptions and restore purchases</li>
              <li>
                To provide AI-powered features (such as transcription and
                analysis) where you have enabled them
              </li>
              <li>To respond to support requests and communicate with you</li>
              <li>To monitor stability, diagnose crashes, and fix bugs</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Third-Party Service Providers</h2>
            <p>
              We share data only with service providers that help us operate
              the Services, and only to the extent needed to do so:
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> — website hosting and delivery
              </li>
              <li>
                <strong>Google Firebase</strong> — authentication, cloud
                database, and app infrastructure
              </li>
              <li>
                <strong>Supabase</strong> — authentication and cloud database
                for certain apps
              </li>
              <li>
                <strong>Sentry</strong> — crash reporting and error monitoring
              </li>
              <li>
                <strong>RevenueCat</strong> — subscription management
              </li>
              <li>
                <strong>AI providers</strong> (OpenAI, OpenRouter, Google
                Gemini) — processing for opt-in AI features. Content sent for
                processing is limited to what the feature requires and is not
                used by us to train third-party models.
              </li>
              <li>
                <strong>Productlane</strong> — feedback and support portal
              </li>
            </ul>
            <p>
              Each provider processes data under its own privacy policy and our
              agreements with them. We do not sell your personal information,
              and we do not share it with data brokers.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website uses only the cookies necessary for it to function
              and for anonymous, aggregate analytics. We do not use cross-site
              tracking or advertising cookies.
            </p>

            <h2>Data Retention</h2>
            <p>
              We keep your personal data only as long as needed to provide the
              Services. When you delete your account, we delete your personal
              data from our active systems within 30 days, except where we are
              legally required to retain it. You can request deletion at any
              time via our <Link href="/data-deletion">data deletion page</Link>
              .
            </p>

            <h2>Data Security</h2>
            <p>
              We protect your data with industry-standard measures, including
              encryption in transit (TLS) and at rest. No method of
              transmission or storage is completely secure, so we cannot
              guarantee absolute security — but we work to protect your data
              and will notify you of any breach as required by law.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on where you live, you have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> — request a copy of the personal data
                we hold about you
              </li>
              <li>
                <strong>Correction</strong> — request that we fix inaccurate
                data
              </li>
              <li>
                <strong>Deletion</strong> — request that we delete your
                personal data
              </li>
              <li>
                <strong>Portability</strong> — receive your data in a portable
                format
              </li>
              <li>
                <strong>Objection</strong> — object to certain processing of
                your data
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{' '}
              <a href="mailto:privacy@feelingmindful.com">
                privacy@feelingmindful.com
              </a>{' '}
              or use the <Link href="/data-deletion">data deletion page</Link>.
              We will respond within 30 days.
            </p>

            <h3>California residents (CCPA/CPRA)</h3>
            <p>
              California residents have the rights to know, delete, correct,
              and opt out of the sale or sharing of personal information. We do
              not sell or share personal information as defined by the
              CCPA/CPRA. We will not discriminate against you for exercising
              your rights.
            </p>

            <h3>EEA, UK, and Swiss residents (GDPR)</h3>
            <p>
              We process personal data on the legal bases of contract
              performance (providing the Services), legitimate interests
              (security and improvement), and consent (opt-in features). You
              may withdraw consent at any time and have the right to lodge a
              complaint with your local supervisory authority.
            </p>

            <h2>International Transfers</h2>
            <p>
              We are based in the United States and process data there. If you
              access the Services from outside the United States, your data
              will be transferred to and processed in the United States under
              appropriate safeguards.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              The Services are not directed to children under 13, and we do not
              knowingly collect personal data from children under 13. If you
              believe a child has provided us personal data, contact us and we
              will delete it.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the updated policy here and revise the &quot;Last updated&quot;
              date. For material changes, we will provide additional notice
              through the Services or by email.
            </p>

            <h2>App-Specific Privacy Policies</h2>
            <p>
              Each app has its own privacy policy describing exactly what that
              app collects:
            </p>
            <ul>
              {APP_POLICIES.map((app) => (
                <li key={app.href}>
                  <Link href={app.href}>{app.name}</Link>
                </li>
              ))}
            </ul>

            <h2>Contact Us</h2>
            <p>
              Feeling Mindful Labs LLC, United States
              <br />
              Email:{' '}
              <a href="mailto:privacy@feelingmindful.com">
                privacy@feelingmindful.com
              </a>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
