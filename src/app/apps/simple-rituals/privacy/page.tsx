import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Simple Rituals',
  description: 'Privacy Policy for Simple Rituals, a routine-building app by Feeling Mindful Labs.',
}

export default function SimpleRitualsPrivacy() {
  return (
    <PrivacyPolicy
      appName="Simple Rituals"
      lastUpdated="2026-08-28"
      dataCollected={[
        'A pseudonymous user ID created by Firebase Authentication so your data can be stored and retrieved',
        'Your email address if you choose to link your account using Sign in with Apple or Google',
        'Ritual content and configuration, including titles, descriptions, time windows, ordering, and selected ritual pack',
        'Completion and progress history associated with your user ID',
        'Purchase history, product identifiers, transaction status, and Pro entitlement status',
        'Crash reports, error details, app and device information, and performance measurements',
      ]}
      dataStoredOnDevice={[
        'Notification preferences and the schedule used for local reminder notifications',
        'Whether you have completed onboarding',
      ]}
      dataUse={[
        'To authenticate you and provide, sync, restore, and personalize your rituals and progress',
        'To validate purchases, restore Pro access, prevent purchase fraud, and understand purchase performance',
        'To diagnose crashes, errors, and performance problems and improve app reliability',
        'To respond to support, privacy, and deletion requests',
      ]}
      thirdPartyServices={[
        'Google Firebase Authentication and Cloud Firestore — anonymous or linked account authentication and cloud storage',
        'RevenueCat — in-app purchase validation, entitlement management, purchase analytics, and restoration',
        'Sentry — crash reporting, error monitoring, and performance diagnostics',
        'Apple App Store and StoreKit — payment processing and purchase records',
        'Sign in with Apple — optional account linking',
      ]}
      devicePermissions={[
        'Notifications — to schedule ritual reminders locally on your device',
      ]}
      retentionDescription="We retain cloud-hosted ritual, completion, account, and purchase-entitlement data while you use Simple Rituals. Ritual and completion data is deleted when you use Delete my data in the app or when we complete a verified deletion request. Apple, Firebase, RevenueCat, and Sentry may retain limited transaction, security, backup, or diagnostic records according to their policies and legal obligations."
      deletionDescription={
        <>
          You can delete your rituals, completion history, and local app data
          from Settings → Delete my data. For access, correction, portability,
          or deletion of any remaining account record, contact{' '}
          <a href="mailto:privacy@feelingmindful.com">privacy@feelingmindful.com</a>{' '}
          or use our <a href="/data-deletion">data deletion request page</a>.
        </>
      }
      inAppPurchaseDescription="Simple Rituals offers an optional, one-time, non-consumable Pro purchase billed through the Apple App Store or Google Play. It is not an auto-renewing subscription. RevenueCat processes purchase and entitlement records, while the app store processes payment information. We do not receive your payment card details. Refund requests must be directed to the store where you made the purchase."
    />
  )
}
