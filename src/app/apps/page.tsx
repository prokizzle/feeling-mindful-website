import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'
import { fitnessApps, mindfulnessApps, type AppInfo } from '@/lib/apps'

export const metadata: Metadata = {
  title: 'Apps - Feeling Mindful Labs',
  description:
    'Apps by Feeling Mindful Labs, starting with Good Parts — IFS-aware voice journaling.',
}

function AppCard({ app }: { app: AppInfo }) {
  return (
    <FadeIn>
      <Link
        href={`/apps/${app.slug}`}
        className="group block rounded-3xl border border-edge bg-raised p-8 transition hover:border-sage-500/50 hover:bg-raised-2"
      >
        <div className="flex items-center gap-5">
          <Image
            src={app.icon}
            alt={app.name}
            width={64}
            height={64}
            className="rounded-2xl"
          />
          <div>
            <h2 className="font-display text-xl font-medium text-ink group-hover:text-sage-700 dark:group-hover:text-sage-300">
              {app.name}
            </h2>
            <span className="mt-1 inline-block rounded-full border border-edge-strong bg-raised-2 px-2.5 py-0.5 text-xs font-medium text-ink-muted">
              {app.status}
            </span>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-ink-muted">
          {app.description}
        </p>
      </Link>
    </FadeIn>
  )
}

export default function AppsPage() {
  const mindfulness = mindfulnessApps
  const fitness = fitnessApps

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Our apps
          </h1>
          <p className="mt-6 text-xl text-ink-muted">
            Tools that respect your attention and adapt to you — not the other
            way around. More coming soon.
          </p>
        </FadeIn>

        {mindfulness.length > 0 && (
          <>
            <FadeIn>
              <h2 className="mt-20 font-display text-2xl font-medium tracking-tight text-sage-700 dark:text-sage-300">
                Mindfulness
              </h2>
            </FadeIn>
            <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {mindfulness.map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </FadeInStagger>
          </>
        )}

        {fitness.length > 0 && (
          <>
            <FadeIn>
              <h2 className="mt-20 font-display text-2xl font-medium tracking-tight text-sage-700 dark:text-sage-300">
                Fitness
              </h2>
            </FadeIn>
            <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {fitness.map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </FadeInStagger>
          </>
        )}
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
