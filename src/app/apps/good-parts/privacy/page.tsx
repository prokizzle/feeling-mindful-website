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
      lastUpdated="2026-09-16"
      canonicalUrl="https://goodparts.ai/privacy"
      webBilling
      dataCollected={[
        'Name and email address (account registration)',
        'Voice recordings (journal entries — uploaded for transcription, then deleted)',
        'Journal transcriptions and AI-generated parts analysis',
        'Journal-derived moods, themes, people, insights, and personalized reflection prompts',
        'Tool requests and approved reflection text when you connect Good Parts to ChatGPT',
        'Subscription and purchase history',
        'Device information (model, OS version)',
        'Crash and diagnostic data',
      ]}
      thirdPartyServices={[
        'Supabase — authentication and cloud data storage',
        'Google Firebase — authentication and cloud infrastructure',
        'RevenueCat — subscription management for Apple App Store, Google Play, and web billing',
        'Sentry — crash reporting and error tracking',
        'AssemblyAI (EU) — speech-to-text transcription. Your recording is uploaded, transcribed, and our copy is deleted; we do not permit training on your content.',
        'Vercel AI Gateway — routes the journal text to the model that analyses it for IFS parts, and the phrases you type into semantic search to the model that turns them into vectors. Only the text needed for the feature is sent. Every request requires zero data retention, which on this gateway also disallows training on the content, and is restricted to providers that honour it — currently Azure, DeepInfra, DigitalOcean, Fireworks, Baseten and Together AI. A request fails rather than falling back to a provider that does not. The analysis models are DeepSeek models, but they run on the providers above; DeepSeek itself never receives your content.',
        'OpenAI ChatGPT — access to the specific Good Parts data and actions you request after connecting your account',
      ]}
      devicePermissions={[
        'Microphone — for voice journal recording',
        'Push Notifications — for reminders and updates',
        'Face ID / biometrics — for the optional app lock (processed entirely on-device; never leaves your device)',
      ]}
      mentalHealthDisclaimer
    >
      <h2>ChatGPT Integration</h2>
      <p>
        Connecting Good Parts to ChatGPT is optional. Before access begins, the connection screen
        identifies the categories of private journal data ChatGPT may request. If you allow the
        connection, Good Parts sends only the information needed for the tool you ask ChatGPT to use.
        This may include entry summaries, one cleaned transcript when you request a specific entry,
        parts, moods, themes, people mentioned in your journal, insights, and reflection prompts.
      </p>
      <p>
        Good Parts receives the arguments ChatGPT sends to its tools, including exact reflection text
        you approve for saving, but it does not retrieve your entire ChatGPT conversation. With your
        explicit confirmation, ChatGPT can save that approved reflection as a new entry or mark a
        reflection prompt answered or dismissed. It cannot edit or delete existing journal entries.
      </p>

      <h2>Sensitive Journal Content</h2>
      <p>
        Journal content may reveal emotional, relationship, mental-health, or other sensitive personal
        information. Good Parts processes this content only as needed to provide the journaling and
        reflection features you choose. You control whether to connect ChatGPT, whether to request a
        specific entry&apos;s transcript, and whether to confirm a write action.
      </p>

      <h2>Disconnecting ChatGPT and Deleting Data</h2>
      <p>
        You can disconnect Good Parts in ChatGPT settings at any time, which stops future access.
        Disconnecting does not delete information already included in your ChatGPT conversations or
        your original Good Parts data. Manage or delete ChatGPT conversations through ChatGPT, and
        export or delete Good Parts data through Good Parts settings or our data deletion request page.
        OpenAI processes information received by ChatGPT under its own privacy policy and your ChatGPT
        account or workspace settings.
      </p>
    </PrivacyPolicy>
  )
}
