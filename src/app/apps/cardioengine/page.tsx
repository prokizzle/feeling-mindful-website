import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'
import { SUPPORT_URL } from '@/lib/apps'

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
              <span className="inline-block rounded-full bg-dawn-100 px-3 py-1 text-sm font-medium text-dawn-700 mb-2">
                Coming Soon
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
                CardioEngine
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-sage-600">
            HR zone-based cardio training with live workout coaching.
            Connect your Bluetooth heart rate monitor or Apple Watch and train smarter.
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
              Train in the right zone
            </h2>
            <p className="mt-6 text-lg text-sage-300 max-w-2xl">
              Heart rate zones are the foundation of effective cardio training. CardioEngine provides
              real-time guidance to keep you in the right zone — whether you&apos;re doing steady-state
              fat burning or high-intensity interval work.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-medium tracking-tight text-sage-950 text-center mb-12">
            What to expect
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-dawn-500 mt-0.5">&#10003;</span>
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
              Part of the BodyEngine suite
            </h2>
            <p className="mt-4 text-sage-600">
              CardioEngine works alongside{' '}
              <Link href="/apps/cutengine" className="text-sage-800 underline hover:text-sage-950">CutEngine</Link>
              {' '}for adaptive fat loss. Your cardio data feeds directly into CutEngine&apos;s calorie calculations.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
