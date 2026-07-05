import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'
import { ProductlaneButton } from '@/components/ProductlaneWidget'

const features = [
  'IFS-specific guided meditations (parts work, unblending, Self energy)',
  'General mindfulness and breathing practices',
  'Composed chunk-based playback — same content, flexible session length',
  'Course-based progression with standalone sessions',
  'HealthKit integration for mindfulness session tracking',
]

const themes = [
  {
    name: 'Parts Work',
    description:
      'Meet and work with your inner protectors, exiles, and managers.',
  },
  {
    name: 'Self Energy',
    description: 'Connect with calm, curious, compassionate Self leadership.',
  },
  {
    name: 'Unblending',
    description:
      'Practice separating from overwhelming feelings to see them clearly.',
  },
  {
    name: 'General Mindfulness',
    description: 'Breathing, body scan, and grounding practices for everyone.',
  },
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
          <div className="mb-8 flex items-center gap-6">
            <Image
              src="/icons/becoming-one-icon.png"
              alt="Becoming One"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="mb-2 inline-block rounded-full border border-edge-strong bg-raised-2 px-3 py-1 text-sm font-medium text-ink-muted">
                Coming Soon
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                Becoming One
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-ink-muted">
            IFS-guided meditation for self-integration. Explore your inner world
            through practices designed for parts work — from meeting protectors
            to connecting with Self energy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ProductlaneButton className="inline-flex items-center rounded-full bg-ink px-6 py-3 font-medium text-surface transition-colors hover:bg-ink/85">
              Request Early Access
            </ProductlaneButton>
            <ProductlaneButton className="inline-flex items-center rounded-full border border-edge-strong bg-raised px-6 py-3 font-medium text-ink-muted transition-colors hover:border-ink-faint">
              Give Feedback
            </ProductlaneButton>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-24 rounded-2xl border border-edge bg-raised-2 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Meditation meets parts work
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Becoming One uses the Internal Family Systems framework to guide
              your meditation practice. The name refers to the IFS concept of
              integration — bringing scattered inner parts into a unified,
              Self-led whole. It&apos;s an ongoing process, not a destination.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">
              Content ranges from general mindfulness to IFS-specific guided
              practices. No prior IFS knowledge required — the app rewards
              curiosity at every level.
            </p>
          </FadeIn>
        </Container>
      </div>

      <SectionIntro title="Meditation themes" className="mt-24 sm:mt-32">
        <p>Practices organized by IFS concept and general mindfulness.</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {themes.map((theme) => (
              <div
                key={theme.name}
                className="rounded-2xl border border-edge bg-raised p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {theme.name}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      <SectionIntro title="What to expect" className="mt-24 sm:mt-32">
        <p>
          Becoming One is in active development. Here&apos;s what we&apos;re
          building.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <ul className="mx-auto max-w-xl space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 text-ink-faint">&#10003;</span>
                <span className="text-ink-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>

      <Container className="mt-24 mb-24 sm:mt-32">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
              Part of the Feeling Mindful suite
            </h2>
            <p className="mt-4 text-ink-muted">
              Becoming One is a sibling to{' '}
              <Link
                href="/apps/good-parts"
                className="text-ink underline hover:text-ink"
              >
                Good Parts
              </Link>{' '}
              (IFS journaling). Users who engage with parts work in meditation
              can go deeper with journaling — and vice versa.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <p className="text-center text-sm text-ink-faint">
            <Link
              href="/apps/becoming-one/privacy"
              className="hover:text-ink"
            >
              Privacy Policy
            </Link>
          </p>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
