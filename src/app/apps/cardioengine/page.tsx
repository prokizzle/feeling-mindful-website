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
          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/icons/cardioengine-icon.png"
              alt="CardioEngine"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-sm font-medium text-zinc-400 mb-2">
                Coming Soon
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
                CardioEngine
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-zinc-400">
            HR zone-based cardio training with live workout coaching.
            Connect your Bluetooth heart rate monitor or Apple Watch and train smarter.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ProductlaneButton
              className="inline-flex items-center px-6 py-3 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-100 transition-colors"
            >
              Request Early Access
            </ProductlaneButton>
            <ProductlaneButton
              className="inline-flex items-center px-6 py-3 bg-zinc-900/50 border border-zinc-700 text-zinc-300 rounded-full font-medium hover:border-zinc-500 transition-colors"
            >
              Give Feedback
            </ProductlaneButton>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-24 rounded-2xl bg-zinc-900 border border-zinc-800 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Train in the right zone
            </h2>
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
              Heart rate zones are the foundation of effective cardio training. CardioEngine provides
              real-time guidance to keep you in the right zone — whether you&apos;re doing steady-state
              fat burning or high-intensity interval work.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-medium tracking-tight text-white text-center mb-12">
            What to expect
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-zinc-500 mt-0.5">&#10003;</span>
                <span className="text-zinc-400">{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white">
              Part of the BodyEngine suite
            </h2>
            <p className="mt-4 text-zinc-400">
              CardioEngine works alongside{' '}
              <Link href="/apps/cutengine" className="text-zinc-200 underline hover:text-white">CutEngine</Link>
              {' '}for adaptive fat loss. Your cardio data feeds directly into CutEngine&apos;s calorie calculations.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
