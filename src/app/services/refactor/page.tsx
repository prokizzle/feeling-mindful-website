import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PricingTiers, StepsGrid } from '@/components/ServiceSections'
import { refactorTiers } from '@/lib/services'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'

const platforms = ['iOS', 'Android', 'React Native', 'Flutter', 'SwiftUI']

const steps = [
  { number: '01', title: 'Submit your app', description: 'Send us a link to your repo, TestFlight, or APK. Tell us what\'s bugging you.', detail: 'Takes 2 minutes' },
  { number: '02', title: 'Get your free audit', description: 'We review your code and send back a detailed report: what\'s good, what\'s not, and what it\'ll take to fix.', detail: 'Within 48 hours' },
  { number: '03', title: 'We refactor', description: 'Pick a package. We refactor your app while you keep building your business. You own every line of code.', detail: '1\u20134 weeks' },
  { number: '04', title: 'Ship with confidence', description: 'Launch a production-quality app that looks, feels, and performs like it was built by a funded startup.', detail: 'App Store ready' },
]

export const metadata: Metadata = {
  title: 'Refactor Service - Turn Your Vibe-Coded App Into Production Software',
  description:
    'AI got you 80% of the way. We handle the other 20%. Turn your vibe-coded mobile app into something you\'re proud to put in the App Store.',
}

export default function RefactorServicePage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {platforms.map((platform) => (
              <span key={platform} className="rounded-full border border-edge bg-raised px-3 py-1 text-xs font-medium text-ink-muted">
                {platform}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
            You don&apos;t need a technical cofounder.{' '}
            <span className="bg-gradient-to-r from-sage-600 via-sage-500 to-dawn-500 bg-clip-text text-transparent">
              You need a refactor.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-muted">
            AI got you 80% of the way. We handle the other 20%. We turn your vibe-coded mobile app
            into something you&apos;re proud to put in the App Store.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-ink/85"
            >
              Get Your Free Code Audit
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="text-sm text-ink-faint">No commitment. No credit card. Just honest feedback.</span>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <span className="font-display text-sm font-semibold tracking-widest text-ink-muted uppercase">
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            From prototype to production in four steps
          </h2>
        </FadeIn>

        <StepsGrid steps={steps} />
      </Container>

      <section id="pricing" className="mt-24 rounded-2xl bg-raised py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <span className="font-display text-sm font-semibold tracking-widest text-ink-muted uppercase">
              Pricing
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Transparent pricing. No surprises.
            </h2>
            <p className="mt-4 max-w-xl text-ink-muted">
              Not sure which tier you need? The free audit will tell you.
            </p>
          </FadeIn>

          <PricingTiers
            tiers={refactorTiers}
            priceSuffix="starting at"
            secondaryCtaLabel="Learn More"
          />
        </Container>
      </section>

      <ContactSection />
    </RootLayout>
  )
}
