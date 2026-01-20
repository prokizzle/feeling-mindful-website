import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import { BetaSignupButton } from '@/components/BetaSignupButton'

const features = [
  {
    name: 'Morning & Evening Routines',
    description: 'Separate spaces for how you start and end each day.',
    icon: '🌅',
  },
  {
    name: 'Drag & Drop Ordering',
    description: 'Arrange rituals in the sequence that works for you.',
    icon: '↕️',
  },
  {
    name: 'Swipe to Complete',
    description: 'Mark rituals done with a simple gesture.',
    icon: '✓',
  },
  {
    name: 'Dark & Light Modes',
    description: 'A clean interface that fits your preference.',
    icon: '🌓',
  },
]

const priorities = [
  {
    tier: 'Must Do',
    description: 'Start with your essential rituals—the non-negotiables.',
    unlockText: null,
  },
  {
    tier: 'Should Do',
    description: 'Important-but-flexible rituals.',
    unlockText: 'Unlocked at 70% completion',
  },
  {
    tier: 'Could Do',
    description: 'Optional rituals when you have capacity.',
    unlockText: 'Unlocked at 85% completion',
  },
]

export const metadata: Metadata = {
  title: 'Simple Rituals - Build morning and evening routines that stick',
  description:
    'Build powerful morning and evening routines. Track your habits and create lasting change—one ritual at a time.',
}

export default function SimpleRitualsPage() {
  return (
    <RootLayout>
      {/* Hero */}
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl mb-16">
            <Image
              src="/images/heroes/simple-rituals-hero.png"
              alt="Simple Rituals app illustration"
              width={1280}
              height={768}
              className="w-full object-cover"
              priority
            />
          </div>
        </FadeIn>
        <FadeIn className="max-w-3xl">
          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/icons/simple-rituals-icon.png"
              alt="Simple Rituals"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-2">
                Beta
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                Simple Rituals
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-neutral-600">
            Build powerful morning and evening routines. Track your habits and
            create lasting change—one ritual at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BetaSignupButton
              app="simple-rituals"
              className="inline-flex items-center px-6 py-3 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              Join the Beta
            </BetaSignupButton>
            <Link
              href="/the-collective"
              className="inline-flex items-center px-6 py-3 bg-white border border-neutral-200 text-neutral-700 rounded-full font-medium hover:border-neutral-400 transition-colors"
            >
              Support Development
            </Link>
          </div>
        </FadeIn>
      </Container>

      {/* What it is */}
      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Routines that stick
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
              Build morning and evening routines that last. Add your habits,
              track progress, and grow your streaks.
            </p>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl">
              Simple Rituals keeps you focused with a clean interface—whether
              you&apos;re starting a morning meditation or winding down at night.
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* Features */}
      <SectionIntro title="What you get" className="mt-24 sm:mt-32">
        <p>
          Everything you need to build and maintain daily routines.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="text-center p-6 bg-neutral-50 rounded-2xl"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-neutral-950">{feature.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* MoSCoW Method */}
      <SectionIntro
        eyebrow="How it works"
        title="Focus on what matters"
        className="mt-24 sm:mt-32"
      >
        <p>
          Simple Rituals uses the MoSCoW method to help you prioritize. Complete
          your essentials first, then unlock more as you build consistency.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="space-y-6 max-w-2xl mx-auto">
            {priorities.map((priority, index) => (
              <div key={priority.tier} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-neutral-950 mb-1">
                    {priority.tier}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {priority.description}
                  </p>
                  {priority.unlockText && (
                    <p className="text-emerald-600 text-xs mt-1">
                      {priority.unlockText}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-500">
            &quot;Won&apos;t Do&quot; holds deprioritized items until you&apos;re ready for them.
          </p>
        </FadeIn>
      </Container>

      {/* CTA */}
      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950">
              Ready to build better routines?
            </h2>
            <p className="mt-4 text-neutral-600">
              Join the beta and start your practice today.
            </p>
            <BetaSignupButton
              app="simple-rituals"
              className="mt-8 inline-flex items-center px-8 py-4 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              Join the Beta
            </BetaSignupButton>
            <p className="mt-6 text-sm text-neutral-400">
              <Link
                href="/apps/simple-rituals/privacy"
                className="hover:text-neutral-600"
              >
                Privacy Policy
              </Link>
              <span className="mx-2">·</span>
              <Link
                href="/apps/simple-rituals/terms"
                className="hover:text-neutral-600"
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
