import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { mindfulnessApps, fitnessApps, type AppInfo } from '@/lib/apps'

function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-sand-50/50 to-white" />

      <FloatingOrb className="animate-float-slow top-20 -left-32 h-96 w-96 bg-sage-200/40" />
      <FloatingOrb className="animate-float top-40 right-0 h-80 w-80 bg-dawn-200/30" delay={1} />
      <FloatingOrb className="animate-float-slow top-96 left-1/4 h-64 w-64 bg-dusk-200/20" delay={2} />

      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-48 md:pb-32">
        <FadeIn className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-sage-400 to-transparent" />
            <span className="font-display text-sm font-medium tracking-widest text-sage-600 uppercase">
              Feeling Mindful Labs
            </span>
          </div>

          <h1 className="font-display text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-sage-950">Software for</span>
            <span className="mt-1 block bg-gradient-to-r from-sage-600 via-sage-500 to-dawn-500 bg-clip-text text-transparent">
              mind and body.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-sage-700/80 sm:text-2xl">
            We build apps that help you understand yourself better —
            from IFS-guided inner work to data-driven fitness.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="#apps"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sage-950 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-sage-900"
            >
              <span className="relative z-10">Explore Our Apps</span>
              <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-sage-800 to-sage-900 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-sage-200 px-8 py-4 text-base font-semibold text-sage-700 transition-all hover:border-sage-300 hover:bg-sage-50"
            >
              Get in touch
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
        <article className="relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-sage-900/5 ring-1 ring-sage-900/5 transition-all duration-500 hover:shadow-xl hover:shadow-sage-900/10 hover:ring-sage-200 sm:p-10">
          <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${app.bgGlow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

          <div className="relative">
            <div className="relative inline-block">
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${app.gradient} opacity-20 blur-lg`} />
              <Image
                src={app.icon}
                alt={app.name}
                width={72}
                height={72}
                className="relative h-18 w-18 rounded-2xl shadow-lg"
              />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage-100 px-3 py-1">
              {app.status === 'Beta' && (
                <span className="h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
              )}
              {app.status === 'Live' && (
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              )}
              <span className="text-sm font-medium text-sage-700">{app.status}</span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-semibold text-sage-950 transition-colors group-hover:text-sage-800 sm:text-3xl">
              {app.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-sage-600">
              {app.description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-sage-600 transition-colors group-hover:text-sage-800">
              <span>Learn more</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  )
}

function AppSection({ title, subtitle, icon, apps: sectionApps }: {
  title: string
  subtitle: string
  icon: React.ReactNode
  apps: AppInfo[]
}) {
  return (
    <div>
      <FadeIn>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100">
            {icon}
          </div>
          <span className="font-display text-sm font-semibold tracking-widest text-sage-600 uppercase">
            {title}
          </span>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-sage-700/80">
          {subtitle}
        </p>
      </FadeIn>

      <FadeInStagger className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sage-50/30 to-white" />

      <Container className="relative">
        <FadeIn>
          <h2 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
            Our apps
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-24">
          <AppSection
            title="Mindfulness"
            subtitle="IFS-informed tools for self-discovery, meditation, and daily practice."
            icon={
              <svg className="h-5 w-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
            }
            apps={mindfulnessApps}
          />

          <AppSection
            title="Fitness"
            subtitle="Data-driven training powered by HealthKit and machine learning."
            icon={
              <svg className="h-5 w-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            }
            apps={fitnessApps}
          />
        </div>
      </Container>
    </section>
  )
}

function ServicesTeaser() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-950 via-sage-900 to-dusk-950" />

      <FloatingOrb className="animate-breathe absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 bg-sage-700/30" />
      <FloatingOrb className="animate-breathe absolute -right-32 top-1/3 h-80 w-80 bg-dusk-700/20" delay={1.5} />

      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <Container className="relative">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-display text-sm font-medium tracking-widest text-sage-400 uppercase">
              Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Need a codebase refactor?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sage-300">
              We help teams untangle legacy iOS and web codebases.
              Architecture audits, incremental refactoring, and
              modernization — without stopping feature work.
            </p>
            <Link
              href="/services/refactor"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-sage-950 transition-all hover:bg-sage-100"
            >
              Learn about our refactoring service
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function Philosophy() {
  const principles = [
    {
      title: 'Evidence-based',
      description: 'Every feature is grounded in research and clinical practice, from IFS therapy to exercise science.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Privacy-first',
      description: 'Your data belongs to you. We process on-device where possible and never sell your information.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Distraction-free',
      description: 'No ads, no social feeds, no gamification tricks. Just tools that help you focus on what matters.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Data-driven',
      description: 'HealthKit, ML models, and real-time adaptation. Your data works for you, not against you.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-dawn-50/20 to-white" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dawn-100">
                <svg className="h-5 w-5 text-dawn-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <span className="font-display text-sm font-semibold tracking-widest text-dawn-600 uppercase">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
              Technology in service of you
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sage-700/80">
              We believe the best tools get out of your way. Whether you&apos;re
              exploring your inner world or optimizing your training, our apps
              are designed to support your goals — not distract from them.
            </p>

            <div className="mt-12 hidden lg:block">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-200/50 via-sand-200/50 to-dawn-200/50 animate-breathe" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sage-100 via-sand-100 to-dawn-100 animate-breathe" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-16 rounded-full bg-white shadow-inner" />
              </div>
            </div>
          </FadeIn>

          <FadeInStagger className="grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <FadeIn key={principle.title}>
                <div className="group relative h-full rounded-2xl bg-white p-6 shadow-lg shadow-sage-900/5 ring-1 ring-sage-900/5 transition-all duration-300 hover:shadow-xl hover:ring-sage-200">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sage-100 to-sand-100 text-sage-600 transition-colors group-hover:from-sage-200 group-hover:to-sand-200">
                    {principle.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-sage-950">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sage-600">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Feeling Mindful Labs - Apps for mind and body',
  description:
    'Feeling Mindful Labs builds apps for mindful living and intelligent fitness. IFS journaling, meditation, adaptive fat loss, and HR zone training.',
}

export default async function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <AppsSection />
      <ServicesTeaser />
      <Philosophy />
      <ContactSection />
    </RootLayout>
  )
}
