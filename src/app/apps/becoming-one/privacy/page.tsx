import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Becoming One',
  description: 'Privacy Policy for Becoming One, an IFS-guided meditation app by Feeling Mindful Labs.',
}

export default function BecomingOnePrivacy() {
  return (
    <PrivacyPolicy
      appName="Becoming One"
      dataCollected={[
        'Name and email address (account registration)',
        'Meditation session history and progress',
        'Course completion data',
        'Device information (model, OS version)',
        'App usage analytics',
      ]}
      thirdPartyServices={[
        'Google Sign-In — authentication',
        'Apple Sign-In — authentication',
        'Firebase Firestore — cloud data storage',
        'Sentry — crash reporting and error tracking',
      ]}
      healthData={[
        'Mindfulness session data (write) — logs completed meditation sessions to Apple Health',
        'Mindfulness history (read) — displays your meditation stats',
      ]}
      devicePermissions={[
        'HealthKit — mindfulness session tracking (optional)',
        'Push Notifications — for reminders and updates',
      ]}
    />
  )
}
