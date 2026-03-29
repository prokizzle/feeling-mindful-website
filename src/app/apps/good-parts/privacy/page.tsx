import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Good Parts',
  description: 'Privacy Policy for Good Parts, an IFS-aware voice journaling app by Feeling Mindful Labs.',
}

export default function GoodPartsPrivacy() {
  return (
    <PrivacyPolicy
      appName="Good Parts"
      dataCollected={[
        'Name and email address (account registration)',
        'Voice recordings (journal entries — transcribed and analyzed)',
        'Journal transcriptions and AI-generated parts analysis',
        'Subscription and purchase history',
        'Device information (model, OS version)',
        'App usage analytics',
      ]}
      thirdPartyServices={[
        'Firebase Authentication — account management',
        'Firebase Firestore — cloud data storage',
        'Sentry — crash reporting and error tracking',
        'Apple StoreKit — subscription management',
        'OpenAI API — journal transcription and IFS parts analysis (text only, audio is not sent)',
      ]}
      devicePermissions={[
        'Microphone — for voice journal recording',
        'Push Notifications — for reminders and updates',
      ]}
    />
  )
}
