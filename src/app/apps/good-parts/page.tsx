import { type Metadata } from 'next'
import Image from 'next/image'

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
      {/* Hero */}
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/icons/good-parts-icon.png"
              alt="Good Parts"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-2">
                Coming Soon
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                Good Parts
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-neutral-600">
            IFS-aware voice journaling. Record your thoughts, discover your parts,
            and track patterns over time with AI-powered Internal Family Systems awareness.
          </p>
        </FadeIn>
      </Container>

      {/* What it is */}
      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Understanding your inner world
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
              Good Parts uses the Internal Family Systems (IFS) framework to help you
              understand the different parts of yourself. By speaking your thoughts
              aloud, you'll discover patterns in how your parts interact and learn
              to work with them more effectively.
            </p>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl">
              Our AI analyzes your voice journals to identify which parts are speaking,
              track their frequency over time, and surface insights about your inner
              landscape.
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* Features Preview */}
      <SectionIntro
        title="What to expect"
        className="mt-24 sm:mt-32"
      >
        <p>
          Good Parts is currently in development. Here's what we're building.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <ul className="space-y-4 max-w-xl mx-auto">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-amber-500 mt-0.5">✓</span>
                <span className="text-neutral-600">{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>

      {/* Newsletter */}
      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950">
              Get notified when Good Parts launches
            </h2>
            <p className="mt-4 text-neutral-600">
              Join our mailing list to be the first to know when Good Parts is ready.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
