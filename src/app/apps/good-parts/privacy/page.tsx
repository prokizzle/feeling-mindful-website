import { type Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Good Parts',
  description:
    'Privacy Policy for Good Parts, an IFS-aware voice journaling app by Feeling Mindful Labs.',
}

export default function GoodPartsPrivacy() {
  return (
    <PrivacyPolicy
      appName="Good Parts"
      dataCollected={[
        'Name and email address (account registration)',
        'Voice recordings (journal entries — processed on-device by default)',
        'Journal transcriptions and AI-generated parts analysis',
        'Subscription and purchase history',
        'Device information (model, OS version)',
        'Crash and diagnostic data',
      ]}
      thirdPartyServices={[
        'Supabase — authentication and cloud data storage',
        'Google Firebase — authentication and cloud infrastructure',
        'RevenueCat — subscription management (with Apple App Store / Google Play billing)',
        'Sentry — crash reporting and error tracking',
        'AI providers (OpenAI, OpenRouter, Google Gemini) — opt-in journal transcription and IFS parts analysis. Only the text needed for the feature is sent; we do not permit our AI providers to train models on your content.',
      ]}
      devicePermissions={[
        'Microphone — for voice journal recording',
        'Push Notifications — for reminders and updates',
        'Face ID / biometrics — for the optional app lock (processed entirely on-device; never leaves your device)',
      ]}
      mentalHealthDisclaimer
    />
  )
}
