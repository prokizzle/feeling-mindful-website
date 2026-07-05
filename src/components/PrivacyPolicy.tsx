import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

interface PrivacyPolicyProps {
  appName: string
  dataCollected: string[]
  thirdPartyServices: string[]
  healthData?: string[]
  devicePermissions?: string[]
  mentalHealthDisclaimer?: boolean
}

const COMPANY_NAME = 'Feeling Mindful Labs'
const LEGAL_ENTITY = 'Feeling Mindful Labs LLC'
const LEGAL_ADDRESS = 'United States'
const CONTACT_EMAIL = 'privacy@feelingmindful.com'
const COUNTRY = 'the United States'
const LAST_UPDATED = '2026-07-04'

export function PrivacyPolicy({
  appName,
  dataCollected,
  thirdPartyServices,
  healthData,
  devicePermissions,
  mentalHealthDisclaimer,
}: PrivacyPolicyProps) {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40 mb-24">
        <FadeIn className="prose mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Privacy Policy — {appName}
          </h1>
          <p className="text-sm text-ink-faint">Last updated: {LAST_UPDATED}</p>

          <p>
            {COMPANY_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how your personal information is collected, used, and disclosed
            when you use {appName}.
          </p>
          <p>
            By using {appName}, you signify that you have read, understood, and agree to our collection,
            storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>

          <h2>Definitions</h2>
          <ul>
            <li><strong>Company:</strong> {LEGAL_ENTITY}, ({LEGAL_ADDRESS})</li>
            <li><strong>Device:</strong> Any internet-connected device such as a phone, tablet, or computer used to access {appName}</li>
            <li><strong>Personal Data:</strong> Any information that allows for the identification of a natural person</li>
            <li><strong>Service:</strong> The {appName} application and related services</li>
          </ul>

          <h2>What Information Do We Collect?</h2>
          <p>We collect the following information when you use {appName}:</p>
          <ul>
            {dataCollected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {healthData && healthData.length > 0 && (
            <>
              <h2>Health &amp; Fitness Data</h2>
              <p>
                {appName} integrates with Apple HealthKit to provide personalized features. We access
                the following health data only with your explicit permission:
              </p>
              <ul>
                {healthData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Health data is processed on-device and is never sold, shared with advertisers,
                or used for purposes unrelated to the app&apos;s core functionality.</strong> You can
                revoke HealthKit access at any time in your device&apos;s Settings &gt; Privacy &amp; Security &gt; Health.
              </p>
            </>
          )}

          {devicePermissions && devicePermissions.length > 0 && (
            <>
              <h2>Device Permissions</h2>
              <p>{appName} may request access to the following device features:</p>
              <ul>
                {devicePermissions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>You can manage these permissions at any time in your device&apos;s Settings.</p>
            </>
          )}

          <h2>How Do We Use Your Information?</h2>
          <ul>
            <li>To provide and maintain {appName}&apos;s core functionality</li>
            <li>To personalize your experience based on your preferences and data</li>
            <li>To improve {appName} based on usage patterns and feedback</li>
            <li>To process transactions (if applicable)</li>
            <li>To communicate updates, security alerts, and support messages</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>{appName} uses the following third-party services:</p>
          <ul>
            {thirdPartyServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Each third-party service has its own privacy policy governing the use of your information.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with third-party service providers
            solely to operate {appName} (e.g., authentication, cloud storage, crash reporting). We may
            also disclose information if required by law.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your information only as long as necessary to provide {appName} and fulfill the
            purposes described in this policy. When you delete your account, we remove your personal
            data from our active systems within 30 days.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information, including
            encryption in transit (TLS) and at rest. However, no method of electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-muted hover:text-ink">{CONTACT_EMAIL}</a> or use our{' '}
            <a href="/data-deletion" className="text-ink-muted hover:text-ink">data deletion request page</a>.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            {appName} is not intended for children under 13. We do not knowingly collect personal
            information from children under 13. If you believe a child has provided us with personal
            data, please contact us and we will remove it.
          </p>

          {mentalHealthDisclaimer && (
            <>
              <h2>Not Medical or Mental Health Advice</h2>
              <p>
                {appName} is a wellness and self-reflection tool. It is not therapy, medical care,
                or a substitute for professional mental health treatment, and nothing in the app
                constitutes medical advice. If you are in crisis, call or text 988 (in the US) or
                contact your local emergency services.
              </p>
            </>
          )}

          <h2>App Stores</h2>
          <p>
            {appName} is distributed through the Apple App Store and/or Google Play. The terms
            and privacy policies of Apple and Google also apply to your use of the app. We are
            solely responsible for {appName} and its content — Apple and Google have no
            obligation to provide maintenance or support.
          </p>

          <h2>In-App Purchases</h2>
          <p>
            {appName} may offer in-app purchases and subscriptions billed through the Apple App
            Store or Google Play. Refund requests should be directed to the store where you made
            the purchase. We do not have access to your payment card information.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes
            through the app or by email. Continued use of {appName} after changes constitutes acceptance
            of the updated policy.
          </p>

          <h2>Governing Law</h2>
          <p>
            This Privacy Policy is governed by the laws of {COUNTRY}. You consent to the jurisdiction
            of the courts located in Travis County, Texas for any disputes arising under this policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-muted hover:text-ink">{CONTACT_EMAIL}</a>
          </p>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
