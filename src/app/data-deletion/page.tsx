import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { DataDeletionForm } from '@/components/DataDeletionForm'

export const metadata: Metadata = {
  title: 'Request Data Deletion - Feeling Mindful',
  description: 'Request deletion of your personal data from Feeling Mindful services.',
}

export default function DataDeletionPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40 mb-24">
        <FadeIn className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Request Data Deletion
          </h1>
          <p className="mt-6 text-neutral-600">
            You have the right to request deletion of your personal data. Enter your email
            address below and we&apos;ll process your request within 30 days.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            This will delete all data associated with your account, including your profile,
            progress, journal entries, and any other personal information stored in our systems.
          </p>

          <div className="mt-10">
            <DataDeletionForm />
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h2 className="font-display text-lg font-medium text-neutral-950">
              What happens next?
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-medium">1.</span>
                We&apos;ll verify your email address matches an account in our system.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-medium">2.</span>
                You&apos;ll receive a confirmation email with details about what data will be deleted.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-medium">3.</span>
                Your data will be permanently deleted within 30 days of your request.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-medium">4.</span>
                You&apos;ll receive a final confirmation once deletion is complete.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
