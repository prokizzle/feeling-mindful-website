import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Horton',
  description: 'Privacy Policy for Horton, a personal AI agent app by Feeling Mindful Labs.',
}

export default function HortonPrivacy() {
  return (
    <PrivacyPolicy
      appName="Horton"
      lastUpdated="2026-09-10"
      dataCollected={[
        'Your email address, used to send you a one-time sign-in code',
        "Your chat messages with your agent, and the agent's replies, stored with your account so your conversations are available when you return",
        'The profiles, ActionItems, and personal notes you or your agent create',
        'Images you choose to send to your agent',
        'Crash reports, error details, and app and device information',
        'Usage analytics, which Horton records by default and which you can turn off in Settings: which screens you view and which actions you take (for example, that a message was sent, never its content), associated with a stable pseudonymous account identifier',
      ]}
      dataStoredOnDevice={[
        'Voice memo recordings and their transcripts, which Horton produces on your device — the audio is not uploaded to us',
        'Your analytics on/off preference and local caches',
      ]}
      dataUse={[
        'To authenticate you with a one-time code emailed to your address',
        'To store, sync, and display your conversations, profiles, and ActionItems',
        'To diagnose crashes, errors, and performance problems and improve app reliability',
        'To understand which screens and features are used so we can improve Horton (you can turn this off in Settings)',
      ]}
      thirdPartyServices={[
        'Supabase — authentication and encrypted storage for your account',
        'PostHog — product analytics for feature usage; you can turn it off in Settings',
        'Sentry — crash reporting, error monitoring, and performance diagnostics',
        'Apple App Store and TestFlight — distribution',
      ]}
      devicePermissions={[
        'Microphone — to record voice memos, which are transcribed on your device',
        'Speech recognition — to turn voice memos into ActionItems',
        'Photo library — to attach images you choose to send to your agent',
        'Notifications — to deliver messages and reminders',
      ]}
      retentionDescription="We retain your conversations, profiles, ActionItems, and account data while you use Horton, so they are available when you return. Voice memo audio is transcribed on your device and is never uploaded to us. Supabase, PostHog, and Sentry may retain limited security, backup, or diagnostic records according to their policies and legal obligations."
      deletionDescription={
        <>
          You can sign out of Horton in the app at any time. Because Horton uses
          email sign-in, requests to access, correct, port, or delete the data
          associated with your account are handled by email. Contact{' '}
          <a href="mailto:privacy@feelingmindful.com">privacy@feelingmindful.com</a>.
        </>
      }
      inAppPurchaseDescription="Horton does not currently offer in-app purchases or subscriptions. It is distributed through TestFlight and the Apple App Store, and any future purchases would be billed by Apple. We do not receive your payment card details. If purchases are added, this policy and the app's store listing will be updated."
    >
      <h2>Usage Analytics</h2>
      <p>
        Horton records usage — which screens you view, sign-ins, and send counts
        — so we can improve the product. You can turn this off or back on at any
        time in Horton under Settings → Share usage analytics. When it is off, no
        analytics events are sent.
      </p>
      <p>
        Analytics never includes the content of your messages, your one-time
        sign-in codes, or your email address. We do not record or replay your
        screen, we do not use analytics for advertising, and we do not sell your
        information.
      </p>
    </PrivacyPolicy>
  )
}
