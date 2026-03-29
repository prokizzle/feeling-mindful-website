import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - CardioEngine',
  description: 'Privacy Policy for CardioEngine, an HR zone-based cardio training app by Feeling Mindful Labs.',
}

export default function CardioEnginePrivacy() {
  return (
    <PrivacyPolicy
      appName="CardioEngine"
      dataCollected={[
        'Workout session history and HR zone data',
        'Heart rate monitor pairing information',
        'Training preferences and zone configurations',
        'Device information (model, OS version)',
        'App usage analytics',
      ]}
      thirdPartyServices={[
        'Apple StoreKit — subscription management (if applicable)',
      ]}
      healthData={[
        'Heart rate data (read/write)',
        'Workout sessions (read/write)',
        'Active energy burned (read)',
        'Exercise minutes (read)',
      ]}
      devicePermissions={[
        'HealthKit — fitness and heart rate data (required for core functionality)',
        'Bluetooth — heart rate monitor connectivity',
        'Push Notifications — for workout reminders',
      ]}
    />
  )
}
