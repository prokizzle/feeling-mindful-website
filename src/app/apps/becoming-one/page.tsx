import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'
import { SUPPORT_URL } from '@/lib/apps'

const features = [
  'IFS-specific guided meditations (parts work, unblending, Self energy)',
  'General mindfulness and breathing practices',
  'Composed chunk-based playback — same content, flexible session length',
  'Course-based progression with standalone sessions',
  'HealthKit integration for mindfulness session tracking',
]

const themes = [
  { name: 'Parts Work', description: 'Meet and work with your inner protectors, exiles, and managers.' },
  { name: 'Self Energy', description: 'Connect with calm, curious, compassionate Self leadership.' },
  { name: 'Unblending', description: 'Practice separating from overwhelming feelings to see them clearly.' },
  { name: 'General Mindfulness', description: 'Breathing, body scan, and grounding practices for everyone.' },
]

export const metadata: Metadata = {
  title: 'Becoming One - IFS-guided meditation',
  description:
    'Explore your inner world through meditation practices designed for Internal Family Systems parts work and self-integration.',
}

export default function BecomingOnePage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-3xl">
          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/icons/becoming-one-icon.png"
              alt="Becoming One"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="inline-block rounded-full bg-sand-100 px-3 py-1 text-sm font-medium text-sand-700 mb-2">
                Coming Soon
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
                Becoming One
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-sage-600">
            IFS-guided meditation for self-integration. Explore your inner world through
            practices designed for parts work — from meeting protectors to connecting with Self energy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={SUPPORT_URL}
              className="inline-flex items-center px-6 py-3 bg-sage-950 text-white rounded-full font-medium hover:bg-sage-800 transition-colors"
            >
              Request Early Access
            </Link>
            <Link
              href={SUPPORT_URL}
              className="inline-flex items-center px-6 py-3 bg-white border border-sage-200 text-sage-700 rounded-full font-medium hover:border-sage-400 transition-colors"
            >
              Give Feedback
            </Link>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-24 rounded-4xl bg-sage-950 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Meditation meets parts work
            </h2>
            <p className="mt-6 text-lg text-sage-300 max-w-2xl">
              Becoming One uses the Internal Family Systems framework to guide your meditation practice.
              The name refers to the IFS concept of integration — bringing scattered inner parts into a
              unified, Self-led whole. It&apos;s an ongoing process, not a destination.
            </p>
            <p className="mt-4 text-lg text-sage-300 max-w-2xl">
              Content ranges from general mindfulness to IFS-specific guided practices.
              No prior IFS knowledge required — the app rewards curiosity at every level.
            </p>
          </FadeIn>
        </Container>
      </div>

      <SectionIntro title="Meditation themes" className="mt-24 sm:mt-32">
        <p>
          Practices organized by IFS concept and general mindfulness.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {themes.map((theme) => (
              <div key={theme.name} className="rounded-2xl bg-sage-50 p-6">
                <h3 className="font-display text-lg font-semibold text-sage-950">{theme.name}</h3>
                <p className="mt-2 text-sm text-sage-600">{theme.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      <SectionIntro title="What to expect" className="mt-24 sm:mt-32">
        <p>Becoming One is in active development. Here&apos;s what we&apos;re building.</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <ul className="space-y-4 max-w-xl mx-auto">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-sand-500 mt-0.5">&#10003;</span>
                <span className="text-sage-600">{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-medium tracking-tight text-sage-950">
              Part of the Feeling Mindful suite
            </h2>
            <p className="mt-4 text-sage-600">
              Becoming One is a sibling to{' '}
              <Link href="/apps/good-parts" className="text-sage-800 underline hover:text-sage-950">Good Parts</Link>
              {' '}(IFS journaling). Users who engage with parts work in meditation can go deeper with journaling — and vice versa.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
