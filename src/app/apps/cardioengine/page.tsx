import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'
import { ProductlaneButton } from '@/components/ProductlaneWidget'

const features = [
  'HR zone-based workout coaching with real-time guidance',
  'Bluetooth heart rate monitor support (Polar, Garmin, Wahoo)',
  'Apple Watch companion app for wrist-based tracking',
  'Zone color mapping for instant visual feedback',
  'Shared data with CutEngine via App Groups',
]

export const metadata: Metadata = {
  title: 'CardioEngine - HR zone-based cardio training',
  description:
    'HR zone-based cardio training with live workout coaching and Bluetooth heart rate monitor support.',
}

export default function CardioEnginePage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-3xl">
          <div className="mb-8 flex items-center gap-6">
            <Image
              src="/icons/cardioengine-icon.png"
              alt="CardioEngine"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="mb-2 inline-block rounded-full border border-edge-strong bg-raised-2 px-3 py-1 text-sm font-medium text-ink-muted">
                Coming Soon
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                CardioEngine
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-ink-muted">
            HR zone-based cardio training with live workout coaching. Connect
            your Bluetooth heart rate monitor or Apple Watch and train smarter.
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
              Train in the right zone
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Heart rate zones are the foundation of effective cardio training.
              CardioEngine provides real-time guidance to keep you in the right
              zone — whether you&apos;re doing steady-state fat burning or
              high-intensity interval work.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="mb-12 text-center font-display text-2xl font-medium tracking-tight text-ink">
            What to expect
          </h2>
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
              Part of the BodyEngine suite
            </h2>
            <p className="mt-4 text-ink-muted">
              CardioEngine works alongside{' '}
              <Link
                href="/apps/cutengine"
                className="text-ink underline hover:text-ink"
              >
                CutEngine
              </Link>{' '}
              for adaptive fat loss. Your cardio data feeds directly into
              CutEngine&apos;s calorie calculations.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <p className="text-center text-sm text-ink-faint">
            <Link
              href="/apps/cardioengine/privacy"
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
