import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { apps, SUPPORT_URL } from '@/lib/apps'

export const metadata: Metadata = {
  title: 'Request Data Deletion - Feeling Mindful Labs',
  description: 'Request deletion of your personal data from any Feeling Mindful app.',
}

export default function DataDeletionPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40 mb-24">
        <FadeIn className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Request Data Deletion
          </h1>
          <p className="mt-6 text-zinc-400">
            You have the right to request deletion of your personal data. Select the app
            below to submit a deletion request. We&apos;ll process it within 30 days.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            This will delete all data associated with your account, including your profile,
            progress, journal entries, and any other personal information stored in our systems.
          </p>

          {/* App-specific deletion links */}
          <div className="mt-10 space-y-4">
            {apps.map((app) => (
              <Link
                key={app.slug}
                href={SUPPORT_URL}
                className="group flex items-center justify-between rounded-2xl bg-zinc-900/50 p-5 border border-zinc-800 transition-all hover:bg-zinc-800/50 hover:border-zinc-700"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{app.name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">Request deletion of your {app.name} data</p>
                </div>
                <svg className="h-5 w-5 text-zinc-500 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800">
            <h2 className="font-display text-lg font-medium text-white">
              What happens next?
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-500 font-medium">1.</span>
                We&apos;ll verify your email address matches an account in our system.
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-500 font-medium">2.</span>
                You&apos;ll receive a confirmation with details about what data will be deleted.
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-500 font-medium">3.</span>
                Your data will be permanently deleted within 30 days of your request.
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-500 font-medium">4.</span>
                You&apos;ll receive a final confirmation once deletion is complete.
              </li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-zinc-500">
            Questions? <Link href="/contact" className="text-zinc-300 underline hover:text-white">Contact us</Link> or visit our{' '}
            <Link href="/support" className="text-zinc-300 underline hover:text-white">support page</Link>.
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
