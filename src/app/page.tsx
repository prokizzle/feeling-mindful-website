import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

const apps = [
  {
    name: 'Shanks Awareness Training',
    slug: 'awareness',
    description: 'A daily plan for transformational awareness through meditation, journaling, exercise, and mindful nutrition.',
    status: 'Beta',
    icon: '/icons/awareness-icon.png',
    gradient: 'from-sage-400 to-sage-600',
    bgGlow: 'bg-sage-400/20',
  },
  {
    name: 'Good Parts',
    slug: 'good-parts',
    description: 'IFS-aware voice journaling. Record your thoughts, discover your parts, and track patterns over time.',
    status: 'Coming Soon',
    icon: '/icons/good-parts-icon.png',
    gradient: 'from-dusk-400 to-dusk-600',
    bgGlow: 'bg-dusk-400/20',
  },
]

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
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-sand-50/50 to-white" />

      {/* Floating orbs for depth */}
      <FloatingOrb className="animate-float-slow top-20 -left-32 h-96 w-96 bg-sage-200/40" />
      <FloatingOrb className="animate-float top-40 right-0 h-80 w-80 bg-dawn-200/30" delay={1} />
      <FloatingOrb className="animate-float-slow top-96 left-1/4 h-64 w-64 bg-dusk-200/20" delay={2} />

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-48 md:pb-32">
        <FadeIn className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-sage-400 to-transparent" />
            <span className="font-display text-sm font-medium tracking-widest text-sage-600 uppercase">
              Feeling Mindful Labs
            </span>
          </div>

          {/* Main headline with gradient */}
          <h1 className="font-display text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-sage-950">Tools for</span>
            <span className="block mt-1 bg-gradient-to-r from-sage-600 via-sage-500 to-dawn-500 bg-clip-text text-transparent">
              mindful living.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-sage-700/80 sm:text-2xl">
            We build apps that help you develop awareness, understand yourself
            better, and live more intentionally.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/apps/awareness"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sage-950 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-sage-900"
            >
              <span className="relative z-10">Try Shanks Awareness Training</span>
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

      {/* Hero image with enhanced treatment */}
      <Container className="relative pb-16 sm:pb-24">
        <FadeIn>
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-sage-200/50 via-sand-200/50 to-dawn-200/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-sage-900/10 ring-1 ring-sage-900/5">
              <Image
                src="/images/heroes/homepage-hero.png"
                alt="Mindful living illustration"
                width={1280}
                height={720}
                className="w-full object-cover"
                priority
              />
              {/* Subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/10 via-transparent to-transparent" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function Apps() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sage-50/30 to-white" />

      <Container className="relative">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100">
              <svg className="h-5 w-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-display text-sm font-semibold tracking-widest text-sage-600 uppercase">
              Our Apps
            </span>
          </div>

          <h2 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
            Apps for mindful living
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sage-700/80">
            We build tools that help you develop awareness, understand yourself
            better, and live more intentionally. Each app is designed with care
            and grounded in evidence-based practices.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {apps.map((app) => (
            <FadeIn key={app.slug}>
              <Link href={`/apps/${app.slug}`} className="group block">
                <article className="relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-sage-900/5 ring-1 ring-sage-900/5 transition-all duration-500 hover:shadow-xl hover:shadow-sage-900/10 hover:ring-sage-200 sm:p-10">
                  {/* Background glow on hover */}
                  <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${app.bgGlow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative">
                    {/* App icon with enhanced styling */}
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

                    {/* Status badge */}
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage-100 px-3 py-1">
                      {app.status === 'Beta' && (
                        <span className="h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
                      )}
                      <span className="text-sm font-medium text-sage-700">{app.status}</span>
                    </div>

                    {/* App name and description */}
                    <h3 className="mt-6 font-display text-2xl font-semibold text-sage-950 transition-colors group-hover:text-sage-800 sm:text-3xl">
                      {app.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-sage-600">
                      {app.description}
                    </p>

                    {/* Learn more link */}
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
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-950 via-sage-900 to-dusk-950" />

      {/* Decorative elements */}
      <FloatingOrb className="animate-breathe absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 bg-sage-700/30" />
      <FloatingOrb className="animate-breathe absolute -right-32 top-1/3 h-80 w-80 bg-dusk-700/20" delay={1.5} />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <Container className="relative">
        <FadeIn>
          <figure className="mx-auto max-w-4xl text-center">
            {/* Quote marks */}
            <div className="mb-8 flex justify-center">
              <svg className="h-12 w-12 text-sage-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <blockquote className="font-display text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl">
              The practices in Shanks Awareness Training come from years of
              clinical work helping people transform their relationship with
              themselves and the world around them.
            </blockquote>

            <figcaption className="mt-10">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/icons/awareness-icon.png"
                  alt="Chris Shanks"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full ring-2 ring-white/20"
                />
                <div className="text-left">
                  <div className="font-display text-lg font-semibold text-white">Chris Shanks</div>
                  <div className="text-sage-300">Creator of Shanks Awareness Training</div>
                </div>
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </section>
  )
}

function Philosophy() {
  const principles = [
    {
      title: 'Evidence-based',
      description: 'Every feature is grounded in research and clinical practice, developed in collaboration with mental health professionals.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Privacy-first',
      description: 'Your data belongs to you. We use end-to-end encryption and never sell your information to third parties.',
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
      title: 'Accessible',
      description: 'We believe mindfulness should be available to everyone, regardless of their background or circumstances.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-dawn-50/20 to-white" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column - Intro */}
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
              Technology in service of awareness
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sage-700/80">
              We believe the best tools get out of your way. Our apps are designed
              to support your practice, not distract from it.
            </p>

            {/* Decorative element */}
            <div className="mt-12 hidden lg:block">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-200/50 via-sand-200/50 to-dawn-200/50 animate-breathe" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sage-100 via-sand-100 to-dawn-100 animate-breathe" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-16 rounded-full bg-white shadow-inner" />
              </div>
            </div>
          </FadeIn>

          {/* Right column - Principles grid */}
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
  title: 'Feeling Mindful Labs - Apps for mindful living',
  description:
    'Feeling Mindful Labs builds apps for mindful living. Tools for meditation, journaling, and self-discovery.',
}

export default async function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <Apps />
      <Testimonial />
      <Philosophy />
      <ContactSection />
    </RootLayout>
  )
}
