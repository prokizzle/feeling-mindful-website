import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'

const features = [
  'Voice-first journaling',
  'Automatic IFS parts identification',
  'Parts frequency tracking',
  'Pattern insights over time',
]

export const metadata: Metadata = {
  title: 'Good Parts - IFS-aware voice journaling',
  description:
    'Record your thoughts. Discover your parts. Track patterns over time with AI-powered Internal Family Systems awareness.',
}

export default function GoodPartsPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn>
          <div className="relative mb-16 overflow-hidden rounded-3xl">
            <Image
              src="/images/heroes/goodparts-hero.png"
              alt="Good Parts app illustration"
              width={1280}
              height={720}
              className="w-full object-cover"
              priority
            />
          </div>
        </FadeIn>
        <FadeIn className="max-w-3xl">
          <div className="mb-8 flex items-center gap-6">
            <Image
              src="/icons/good-parts-icon.png"
              alt="Good Parts"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="mb-2 inline-block rounded-full border border-edge-strong bg-raised-2 px-3 py-1 text-sm font-medium text-ink-muted">
                Coming Soon
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                Good Parts
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-ink-muted">
            IFS-aware voice journaling. Record your thoughts, discover your
            parts, and track patterns over time with AI-powered Internal Family
            Systems awareness.
          </p>
        </FadeIn>
      </Container>
      <div className="mt-24 rounded-2xl border border-edge bg-raised-2 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Understanding your inner world
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Good Parts uses the Internal Family Systems (IFS) framework to
              help you understand the different parts of yourself. By speaking
              your thoughts aloud, you&apos;ll discover patterns in how your
              parts interact and learn to work with them more effectively.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">
              Our AI analyzes your voice journals to identify which parts are
              speaking, track their frequency over time, and surface insights
              about your inner landscape.
            </p>
          </FadeIn>
        </Container>
      </div>
      <SectionIntro title="What to expect" className="mt-24 sm:mt-32">
        <p>
          Good Parts is currently in development. Here&apos;s what we&apos;re
          building.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <ul className="mx-auto max-w-xl space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 text-sage-600 dark:text-amber-500">✓</span>
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
              Get notified when Good Parts launches
            </h2>
            <p className="mt-4 text-ink-muted">
              Join our mailing list to be the first to know when Good Parts is
              ready.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <p className="text-center text-sm text-ink-faint">
            <Link
              href="/apps/good-parts/privacy"
              className="hover:text-ink"
            >
              Privacy Policy
            </Link>
            <span className="mx-2">·</span>
            <Link href="/apps/good-parts/terms" className="hover:text-ink">
              Terms of Service
            </Link>
          </p>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
