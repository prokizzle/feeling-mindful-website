import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { mindfulnessApps, fitnessApps, type AppInfo } from '@/lib/apps'

function HeroSection() {
  return (
    <div className="relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-52 md:pb-36">
        <FadeIn className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
            Feeling Mindful Labs
          </div>

          <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Software for{' '}
            <span className="text-gradient-brand">
              mind and body.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            We build iOS apps that help you understand yourself better —
            from IFS-guided inner work to data-driven fitness.
            Plus a refactoring service for teams shipping to the App Store.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="#apps"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-zinc-950 transition-all hover:bg-zinc-100"
            >
              Explore Our Apps
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services/refactor"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
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
        <article className="relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 sm:p-10">
          {/* Glow effect on hover */}
          <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${app.bgGlow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

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

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1">
              {app.status === 'Beta' && (
                <span className="h-1.5 w-1.5 rounded-full bg-sage-400 animate-pulse" />
              )}
              {app.status === 'Live' && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              )}
              {app.status === 'Coming Soon' && (
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
              )}
              <span className="text-xs font-medium text-zinc-400">{app.status}</span>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold text-white transition-colors group-hover:text-zinc-100 sm:text-2xl">
              {app.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {app.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
              <span>Learn more</span>
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  )
}

function AppSection({ title, subtitle, accentColor, apps: sectionApps }: {
  title: string
  subtitle: string
  accentColor: string
  apps: AppInfo[]
}) {
  return (
    <div>
      <FadeIn>
        <div className="flex items-center gap-3 mb-3">
          <div className={`h-px w-8 ${accentColor}`} />
          <span className="font-display text-sm font-medium tracking-widest text-zinc-500 uppercase">
            {title}
          </span>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-zinc-400">
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
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
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
      {/* Separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <Container>
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-zinc-400" />
                <span className="font-display text-sm font-medium tracking-widest text-zinc-500 uppercase">
                  Services
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Turn your vibe-coded app into production software.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-400">
                AI got you 80% of the way. We handle the other 20% — architecture,
                edge cases, and the polish that makes reviewers approve your App Store submission.
              </p>
              <Link
                href="/services/refactor"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-100"
              >
                Get a free code audit
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { price: '$3K', label: 'UI Polish', desc: 'Design system, animations, native feel' },
                { price: '$7.5K', label: 'Full Refactor', desc: 'Architecture, state, API, tests' },
                { price: '$20K', label: 'Production Ready', desc: 'App Store submission + 30d support' },
              ].map((tier) => (
                <div key={tier.label} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
                  <div className="font-display text-2xl font-semibold text-white">{tier.price}</div>
                  <div className="mt-1 text-sm font-medium text-zinc-300">{tier.label}</div>
                  <div className="mt-2 text-xs text-zinc-500">{tier.desc}</div>
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
      description: 'Every feature is grounded in research — IFS clinical practice to exercise science.',
    },
    {
      title: 'Privacy-first',
      description: 'On-device processing where possible. Your data is never sold.',
    },
    {
      title: 'Platform-native',
      description: 'Swift 6, SwiftUI, HealthKit, SwiftData. Not cross-platform compromises.',
    },
    {
      title: 'Data-driven',
      description: 'ML models, biofeedback signals, and real-time adaptation. Your data works for you.',
    },
  ]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <Container>
        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-sage-400" />
            <span className="font-display text-sm font-medium tracking-widest text-zinc-500 uppercase">
              Philosophy
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technology in service of you
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            The best tools get out of your way. Whether you&apos;re exploring your inner world
            or optimizing your training, our software supports your goals — not distracts from them.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <FadeIn key={principle.title}>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
                <h3 className="font-display text-base font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
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
  title: 'Feeling Mindful Labs - Software for mind and body',
  description:
    'Feeling Mindful Labs builds iOS apps for mindful living and intelligent fitness. IFS journaling, meditation, adaptive fat loss, and HR zone training.',
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
