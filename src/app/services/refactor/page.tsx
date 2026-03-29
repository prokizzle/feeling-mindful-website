import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'

const platforms = ['iOS', 'Android', 'React Native', 'Flutter', 'SwiftUI']

const steps = [
  { number: '01', title: 'Submit your app', description: 'Send us a link to your repo, TestFlight, or APK. Tell us what\'s bugging you.', detail: 'Takes 2 minutes' },
  { number: '02', title: 'Get your free audit', description: 'We review your code and send back a detailed report: what\'s good, what\'s not, and what it\'ll take to fix.', detail: 'Within 48 hours' },
  { number: '03', title: 'We refactor', description: 'Pick a package. We refactor your app while you keep building your business. You own every line of code.', detail: '1\u20134 weeks' },
  { number: '04', title: 'Ship with confidence', description: 'Launch a production-quality app that looks, feels, and performs like it was built by a funded startup.', detail: 'App Store ready' },
]

const tiers = [
  {
    name: 'UI Polish',
    price: '$3,000',
    description: 'Your app works but doesn\'t look the part',
    features: ['Design system cleanup', 'Responsive layouts for all screen sizes', 'Smooth animations & transitions', 'Platform-native feel (iOS or Android)', 'Typography & color consistency'],
    highlighted: false,
  },
  {
    name: 'Full Refactor',
    price: '$7,500',
    description: 'The code under the hood needs work too',
    features: ['Everything in UI Polish', 'Architecture refactor', 'State management overhaul', 'API layer cleanup', 'Error handling & edge cases', 'Unit test coverage'],
    highlighted: true,
  },
  {
    name: 'Production Ready',
    price: '$20,000',
    description: 'You want to launch and never look back',
    features: ['Everything in Full Refactor', 'App Store optimization & submission', 'CI/CD pipeline setup', 'Performance monitoring', 'Analytics integration', 'Launch support & 30 days post-launch fixes'],
    highlighted: false,
  },
]

export const metadata: Metadata = {
  title: 'Refactor Service - Turn Your Vibe-Coded App Into Production Software',
  description:
    'AI got you 80% of the way. We handle the other 20%. Turn your vibe-coded mobile app into something you\'re proud to put in the App Store.',
}

export default function RefactorServicePage() {
  return (
    <RootLayout>
      {/* Hero */}
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {platforms.map((platform) => (
              <span key={platform} className="rounded-full border border-sage-200 bg-sage-50 px-3 py-1 text-xs font-medium text-sage-600">
                {platform}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl lg:text-6xl">
            You don&apos;t need a technical cofounder.{' '}
            <span className="bg-gradient-to-r from-sage-600 via-sage-500 to-dawn-500 bg-clip-text text-transparent">
              You need a refactor.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-sage-700/80">
            AI got you 80% of the way. We handle the other 20%. We turn your vibe-coded mobile app
            into something you&apos;re proud to put in the App Store.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-sage-950 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-sage-900"
            >
              Get Your Free Code Audit
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="text-sm text-sage-500">No commitment. No credit card. Just honest feedback.</span>
          </div>
        </FadeIn>
      </Container>

      {/* How It Works */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <span className="font-display text-sm font-semibold tracking-widest text-sage-600 uppercase">
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-sage-950 sm:text-4xl">
            From prototype to production in four steps
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <FadeIn key={step.number}>
              <div className="group">
                <div className="text-5xl font-extrabold text-sage-100 transition group-hover:text-sage-200">
                  {step.number}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-sage-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sage-600">{step.description}</p>
                <span className="mt-3 inline-block text-xs font-medium text-dawn-600">{step.detail}</span>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      {/* Pricing */}
      <section id="pricing" className="mt-24 rounded-4xl bg-sage-50 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <span className="font-display text-sm font-semibold tracking-widest text-sage-600 uppercase">
              Pricing
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-sage-950 sm:text-4xl">
              Transparent pricing. No surprises.
            </h2>
            <p className="mt-4 max-w-xl text-sage-600">
              Not sure which tier you need? The free audit will tell you.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <FadeIn key={tier.name}>
                <div className={`relative flex h-full flex-col rounded-2xl border p-8 transition ${
                  tier.highlighted
                    ? 'border-sage-300 bg-white shadow-lg shadow-sage-900/10'
                    : 'border-sage-200 bg-white hover:border-sage-300'
                }`}>
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sage-950 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-sage-950">{tier.name}</h3>
                  <p className="mt-1 text-sm text-sage-600">{tier.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-sage-950">{tier.price}</span>
                    <span className="ml-1 text-sm text-sage-500">starting at</span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-sage-600">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                      tier.highlighted
                        ? 'bg-sage-950 text-white hover:bg-sage-800'
                        : 'border border-sage-200 text-sage-700 hover:bg-sage-50'
                    }`}
                  >
                    {tier.highlighted ? 'Get Started' : 'Learn More'}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <ContactSection />
    </RootLayout>
  )
}
