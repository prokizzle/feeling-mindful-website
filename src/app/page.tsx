import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { mindfulnessApps, fitnessApps, type AppInfo } from '@/lib/apps'
import { refactorTiers } from '@/lib/services'

function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-raised-2" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-52 md:pb-36">
        <FadeIn className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-raised px-4 py-1.5 text-sm text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
            Technology in service of you
          </div>

          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-7xl lg:text-8xl">
            Mindful AI.{' '}
            <span className="text-gradient-brand">Real software.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            We build software in service of people: IFS-guided apps grounded
            in clinical research, plus refactoring and AI-agent services for
            small teams.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="#apps"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-ink/85"
            >
              Explore Our Apps
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/services/refactor"
              className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-8 py-4 text-base font-semibold text-ink-muted transition-all hover:border-ink-faint hover:text-ink"
            >
              Refactoring Service
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function AppCard({ app }: { app: AppInfo }) {
  return (
    <FadeIn>
      <Link href={`/apps/${app.slug}`} className="group block">
        <article className="relative h-full overflow-hidden rounded-2xl border border-edge bg-raised p-8 transition-all duration-300 hover:border-edge-strong hover:bg-raised-2 sm:p-10">
          <div
            className={`absolute -top-20 -right-20 h-64 w-64 rounded-full ${app.bgGlow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
          />

          <div className="relative">
            <div className="relative inline-block">
              <Image
                src={app.icon}
                alt={app.name}
                width={64}
                height={64}
                className="relative h-16 w-16 rounded-xl"
              />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-edge-strong bg-raised-2 px-3 py-1">
              {app.status === 'Beta' && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage-400" />
              )}
              {app.status === 'Live' && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              )}
              {app.status === 'Coming Soon' && (
                <span className="h-1.5 w-1.5 rounded-full bg-ink-faint" />
              )}
              <span className="text-xs font-medium text-ink-muted">
                {app.status}
              </span>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink transition-colors group-hover:text-ink sm:text-2xl">
              {app.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {app.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-faint transition-colors group-hover:text-ink">
              <span>Learn more</span>
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  )
}

function AppSection({
  title,
  subtitle,
  accentColor,
  apps: sectionApps,
}: {
  title: string
  subtitle: string
  accentColor: string
  apps: AppInfo[]
}) {
  if (sectionApps.length === 0) {
    return null
  }

  return (
    <div>
      <FadeIn>
        <div className="mb-3 flex items-center gap-3">
          <div className={`h-px w-8 ${accentColor}`} />
          <span className="font-display text-sm font-medium tracking-widest text-ink-faint uppercase">
            {title}
          </span>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-ink-muted">
          {subtitle}
        </p>
      </FadeIn>

      <FadeInStagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sectionApps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </FadeInStagger>
    </div>
  )
}

function AppsSection() {
  return (
    <section id="apps" className="relative py-24 sm:py-32">
      <Container>
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Our apps
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-20">
          <AppSection
            title="Mindfulness"
            subtitle="IFS-informed tools for self-discovery, meditation, and daily practice."
            accentColor="bg-sage-400"
            apps={mindfulnessApps}
          />
          <AppSection
            title="Fitness"
            subtitle="Data-driven training powered by HealthKit and machine learning."
            accentColor="bg-dawn-400"
            apps={fitnessApps}
          />
        </div>
      </Container>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-edge-strong to-transparent" />

      <Container>
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-ink-muted" />
                <span className="font-display text-sm font-medium tracking-widest text-ink-faint uppercase">
                  Services
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Turn your vibe-coded app into production software.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted">
                AI got you 80% of the way. We handle the other 20% —
                architecture, edge cases, and the polish that makes reviewers
                approve your App Store submission.
              </p>
              <Link
                href="/services/refactor"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-surface transition-all hover:bg-ink/85"
              >
                Get a free code audit
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <p className="mt-6 text-sm text-ink-faint">
                Running a small business instead?{' '}
                <Link
                  href="/services/hermes"
                  className="text-ink-muted underline hover:text-ink"
                >
                  AI agents in your Slack from $750
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {refactorTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-xl border border-edge bg-raised p-5 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-ink">
                    {tier.priceShort}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink-muted">
                    {tier.name}
                  </div>
                  <div className="mt-2 text-xs text-ink-faint">
                    {tier.summary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function PhilosophySection() {
  const principles = [
    {
      title: 'Evidence-based',
      description:
        'Every feature is grounded in research, from IFS clinical practice to exercise science.',
    },
    {
      title: 'Privacy-first',
      description:
        'On-device processing where possible. Your data is never sold.',
    },
    {
      title: 'Platform-native',
      description:
        'Swift 6, SwiftUI, HealthKit, SwiftData. Not cross-platform compromises.',
    },
    {
      title: 'Data-driven',
      description:
        'ML models, biofeedback signals, and real-time adaptation. Your data works for you.',
    },
  ]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-edge-strong to-transparent" />

      <Container>
        <FadeIn>
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-sage-400" />
            <span className="font-display text-sm font-medium tracking-widest text-ink-faint uppercase">
              Philosophy
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Technology in service of you
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
            The best tools get out of your way. Ours support the work
            you&apos;re doing, then step aside.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <FadeIn key={principle.title}>
              <div className="rounded-xl border border-edge bg-raised p-6 transition-colors hover:border-edge-strong">
                <h3 className="font-display text-base font-semibold text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Feeling Mindful Labs - Mindful AI. Real software.',
  description:
    'Feeling Mindful Labs is an AI-native studio building apps grounded in clinical research, starting with Good Parts — IFS-aware voice journaling.',
}

export default async function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <AppsSection />
      <ServicesSection />
      <PhilosophySection />
      <ContactSection />
    </RootLayout>
  )
}
