import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

// DRAFT for Nick (goodparts-lng1). Every line describes The Roster 1.0 as planned in
// apps/roster decision 007 (on the device, no backend). Lines that wait on unbuilt work are
// listed in the PR body; none may ship until the released build does what it says.

export const metadata: Metadata = {
  title: 'Privacy Policy - The Roster Journal',
  description:
    'Privacy Policy for The Roster Journal, a private dating journal by Feeling Mindful Labs.',
}

export default function RosterPrivacy() {
  return (
    <PrivacyPolicy
      appName="The Roster Journal"
      lastUpdated="2026-11-05"
      dataCollected={[
        'Error reports: the kind of error, a short error code, the step of the app it happened in, where in the app’s code it happened, and app and device information. They are built to leave out what you write, names, and nicknames',
        'Purchase records: a random purchase ID created on your phone, the product, transaction and subscription status. The ID is not linked to you or to anything you write',
        'App update checks: the app version (runtime version and installed update), platform, update channel, and a random installation ID',
        'Anonymous product-usage events, such as opening the app, saving a note, or opening the weekly episode, with a random installation ID. They never include what you write, names, or nicknames',
      ]}
      dataStoredOnDevice={[
        'Your notes, whether typed or dictated with the keyboard',
        'Your roster: the people you write about, their nicknames, short traits, and standings',
        'Your weekly episodes',
        'Your settings and whether you have finished setup',
      ]}
      dataUse={[
        'To write your weekly episode',
        'To validate your subscription and restore it on a new install',
        'To diagnose crashes and errors and improve app reliability',
        'To check for and deliver app updates',
        'To understand, in aggregate, which parts of the app people use and where they stop, so we can improve it',
        'To respond to support and privacy requests',
      ]}
      thirdPartyServices={[
        'Apple Intelligence and Private Cloud Compute — writes your weekly episode. See “Your weekly episode” below',
        'RevenueCat — subscription validation, entitlement management, purchase analytics, and restoration, under a random purchase ID',
        'Sentry — crash and error reporting. Error reports from the app are rebuilt from a short list of allowed fields before they leave your phone. Native crash reports skip that step and are sent as Sentry’s iOS SDK records them',
        'PostHog (United States) — anonymous product-usage analytics. Events carry a random installation ID and never what you write, names, or nicknames. PostHog is set to discard your IP address and not to derive a location from it',
        'Apple App Store and StoreKit — payment processing and purchase records',
        'Expo EAS Update — app update delivery. Each update check sends the app version, platform, update channel, and a random installation ID, and Expo receives your IP address with each request',
      ]}
      implicitConsent={false}
      childrensPrivacyDescription="The Roster is for adults 18 and older."
      dataSharingDescription="We share data with the service providers listed above to operate The Roster Journal. Under their own terms, Sentry may use non-identifying service data to improve its products, and Expo may keep and use de-identified or aggregated data."
      retentionDescription="Your notes, roster, and episodes stay on your phone until you delete them. They are left out of iCloud backups, so they are not copied to a new phone and cannot be restored from a backup. We have no server that holds them. RevenueCat keeps your purchase record, and Sentry, PostHog, and Expo keep their diagnostic and usage records, under their own retention periods. Apple keeps your subscription and payment records."
      deletionDescription={
        <>
          Delete your notes, roster, and episodes from Settings → Delete all my data, or by
          deleting the app. We hold no account and nothing that identifies you, so there is no
          account to delete and nothing we can look up by your name or email. Your purchase record
          stays with Apple and RevenueCat; manage your subscription in your Apple Account settings.
          For any other privacy question, contact{' '}
          <a href="mailto:privacy@feelingmindful.com">privacy@feelingmindful.com</a>.
        </>
      }
      inAppPurchaseDescription="Writing notes and keeping your roster are free. Weekly episodes come with Roster Episodes, an optional auto-renewing subscription, monthly or annual, billed through the Apple App Store. The annual plan starts with a 1-week free trial. Payment is charged to your Apple Account when you confirm the purchase, and the subscription renews automatically unless you cancel it at least 24 hours before the end of the current period. Manage or cancel it in your Apple Account settings. RevenueCat receives the purchase record (product, transaction, and subscription status) so it can validate and restore your subscription. We do not receive your payment card details. Refund requests must be directed to Apple."
    >
      <h2>Your weekly episode</h2>
      <p>
        The weekly episode is written by Apple Intelligence. It is not written from your notes. It is
        written from a short summary the app makes on your phone: nicknames, whether each person is
        someone you’re seeing or a friend, short traits, how often each came up, a one-word mood, and the week’s
        standings. It never includes your notes, quotes from them, or first names.
      </p>
      <p>
        Apple Intelligence writes the episode on your iPhone when it can. When it needs more
        capacity, it sends that summary to Apple’s Private Cloud Compute. Apple states that Private
        Cloud Compute uses the data only to answer the request and does not store it or make it
        available to Apple. The summary is never sent to us.
      </p>

      <h2>Typing and dictation</h2>
      <p>
        You type notes, or dictate them with the iPhone keyboard. The app does not record audio and
        does not ask for microphone access. Keyboard dictation is an Apple feature, and Apple’s
        dictation settings and privacy terms apply to it; the app receives only the text.
      </p>

      <h2>Device permissions</h2>
      <p>The Roster Journal does not ask for access to your contacts, photos, location, or microphone.</p>

      <p>
        Our service providers (Sentry, RevenueCat, and Expo) receive your IP address and device and
        app information when the app connects to them, and use it for security and diagnostics.
        PostHog also receives your IP address with each request, and is set to discard it rather than
        store it.
      </p>
    </PrivacyPolicy>
  )
}
