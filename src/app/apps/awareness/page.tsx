import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'

const pillars = [
  {
    name: 'Audio Guidance',
    description: 'Start your day with guided sessions to set your intention and build awareness.',
    icon: '🎧',
  },
  {
    name: 'Journaling',
    description: 'Use prompts to explore your thoughts and track your progress over time.',
    icon: '📓',
  },
  {
    name: 'Exercise',
    description: 'Integrate physical movement as part of your awareness practice.',
    icon: '🏃',
  },
  {
    name: 'Nutrition',
    description: 'Plan meals with intention, connecting nutrition to your overall wellbeing.',
    icon: '🥗',
  },
]

const steps = [
  {
    number: '1',
    title: 'Start with guidance',
    description: 'Begin your day with a guided audio session to set your intention and build awareness.',
  },
  {
    number: '2',
    title: 'Reflect and journal',
    description: 'Use prompts to explore your thoughts and track your progress over time.',
  },
  {
    number: '3',
    title: 'Move your body',
    description: 'Integrate physical exercise as part of your awareness practice.',
  },
  {
    number: '4',
    title: 'Nourish mindfully',
    description: 'Plan meals with intention, connecting nutrition to your overall wellbeing.',
  },
]

export const metadata: Metadata = {
  title: 'Awareness - A daily plan for transformational awareness',
  description:
    'More than meditation. A complete blueprint for becoming more aware through audio guidance, journaling, exercise, and mindful nutrition.',
}

export default function AwarenessPage() {
  return (
    <RootLayout>
      {/* Hero */}
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/icons/awareness-icon.png"
              alt="Awareness"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-2">
                Beta
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                Awareness
              </h1>
            </div>
          </div>
          <p className="text-lg text-neutral-600 mb-2">
            by{' '}
            <a
              href="https://shankscounseling.com"
              className="text-neutral-950 underline hover:text-emerald-600"
              target="_blank"
              rel="noopener"
            >
              Chris Shanks
            </a>
          </p>
          <p className="mt-4 text-xl text-neutral-600">
            More than meditation. A complete daily blueprint for transformational
            awareness—combining the practices that work in clinical settings into
            a program anyone can follow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              Join the Beta
            </a>
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
              More than meditation
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
              Awareness isn't just another meditation app. It's a complete daily blueprint
              for transformational awareness—combining the practices that work in clinical
              settings into a program anyone can follow.
            </p>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl">
              Developed by Chris Shanks, this app brings the methodology from his
              counseling practice to the general public.
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* Four Pillars */}
      <SectionIntro
        title="The Four Pillars"
        className="mt-24 sm:mt-32"
      >
        <p>
          Each day guides you through four interconnected practices designed to
          build lasting awareness and positive change.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                className="text-center p-6 bg-neutral-50 rounded-2xl"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                  {pillar.icon}
                </div>
                <h3 className="font-medium text-neutral-950">{pillar.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* How it works */}
      <SectionIntro
        eyebrow="How it works"
        title="Your Daily Practice"
        className="mt-24 sm:mt-32"
      >
        <p>
          Follow a simple four-step process each day to build awareness and
          create lasting positive change.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="space-y-6 max-w-2xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-medium text-neutral-950 mb-1">{step.title}</h3>
                  <p className="text-neutral-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* CTA */}
      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950">
              Ready to begin?
            </h2>
            <p className="mt-4 text-neutral-600">
              Join the beta and start your transformational awareness journey today.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center px-8 py-4 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              Join the Beta
            </a>
            <p className="mt-6 text-sm text-neutral-400">
              <Link href="/apps/awareness/privacy" className="hover:text-neutral-600">
                Privacy Policy
              </Link>
              <span className="mx-2">·</span>
              <Link href="/apps/awareness/terms" className="hover:text-neutral-600">
                Terms of Service
              </Link>
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
