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
      dataCollected={[
        'Name and email address (beta signup only — the app works offline without an account)',
        'Routine configuration and completion data (stored locally on device)',
        'Streak and progress history (stored locally on device)',
        'iCloud sync data (optional — encrypted by Apple, we cannot access it)',
      ]}
      thirdPartyServices={[
        'Apple iCloud / CloudKit — optional cross-device sync (encrypted by Apple)',
        'Apple StoreKit — subscription management (if applicable)',
      ]}
      devicePermissions={[
        'Push Notifications — for routine reminders',
        'iCloud — optional data sync across devices',
      ]}
    />
  )
}
