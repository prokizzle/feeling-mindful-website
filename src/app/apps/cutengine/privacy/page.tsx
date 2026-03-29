import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - CutEngine',
  description: 'Privacy Policy for CutEngine, an ML-driven adaptive fat loss app by Feeling Mindful Labs.',
}

export default function CutEnginePrivacy() {
  return (
    <PrivacyPolicy
      appName="CutEngine"
      dataCollected={[
        'User profile data (age, height, enhancement tier)',
        'Body composition data (weight, body fat percentage)',
        'Calorie and macro targets and adjustments',
        'Biofeedback survey responses (energy, sleep quality, mood, hunger, libido, recovery)',
        'Subscription and purchase history',
        'Device information (model, OS version)',
        'App usage analytics',
      ]}
      thirdPartyServices={[
        'Apple StoreKit — subscription management',
      ]}
      healthData={[
        'Body weight measurements (read/write)',
        'Active energy burned (read)',
        'Basal energy burned (read)',
        'Step count (read)',
        'Exercise minutes (read)',
        'Sleep analysis (read)',
        'Heart rate variability (read)',
        'Resting heart rate (read)',
      ]}
      devicePermissions={[
        'HealthKit — fitness and health data integration (required for core functionality)',
        'Push Notifications — for daily target updates and reminders',
      ]}
    />
  )
}
