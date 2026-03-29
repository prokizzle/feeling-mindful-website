import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { apps, linearNewIssueUrl } from '@/lib/apps'

const supportActions = [
  {
    title: 'Report a Bug',
    description: 'Something not working right? Let us know and we\'ll fix it.',
    labels: 'bug',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Request a Feature',
    description: 'Have an idea that would make the app better? We\'d love to hear it.',
    labels: 'feature-request',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'General Feedback',
    description: 'Anything else on your mind? We read every message.',
    labels: 'feedback',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
]

export const metadata: Metadata = {
  title: 'Support - Feeling Mindful Labs',
  description: 'Get help, report bugs, request features, or share feedback for any Feeling Mindful app.',
}

export default function SupportPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
            Support
          </h1>
          <p className="mt-6 text-xl text-sage-600">
            Need help or have feedback? Choose your app and let us know what&apos;s on your mind.
            Every message creates a tracked issue that our team reviews.
          </p>
        </FadeIn>
      </Container>

      {/* App selector + action grid */}
      <Container className="mt-16 mb-24">
        <FadeIn>
          <div className="space-y-16">
            {apps.map((app) => (
              <div key={app.slug} className="rounded-3xl bg-sage-50 p-8 sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-sage-950">{app.name}</h2>
                <p className="mt-2 text-sage-600">{app.description}</p>

                <FadeInStagger className="mt-8 grid gap-4 sm:grid-cols-3">
                  {supportActions.map((action) => (
                    <FadeIn key={action.title}>
                      <Link
                        href={linearNewIssueUrl(app.linearTeamKey, { labels: action.labels })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sage-900/5 transition-all hover:shadow-md hover:ring-sage-200"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-600 transition-colors group-hover:bg-sage-200">
                          {action.icon}
                        </div>
                        <h3 className="font-display text-base font-semibold text-sage-950">{action.title}</h3>
                        <p className="mt-2 text-sm text-sage-600">{action.description}</p>
                      </Link>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Data deletion link */}
        <FadeIn>
          <div className="mt-16 text-center">
            <p className="text-sage-600">
              Need to delete your account or data?{' '}
              <Link href="/data-deletion" className="text-sage-800 underline hover:text-sage-950">
                Request data deletion
              </Link>
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
