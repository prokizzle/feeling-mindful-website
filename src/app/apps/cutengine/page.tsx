import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'
import { ProductlaneButton } from '@/components/ProductlaneWidget'

const highlights = [
  { label: 'ML-Adaptive', description: 'Daily calorie targets that learn YOUR metabolic response, not population averages.' },
  { label: 'HealthKit-First', description: 'Apple Watch data — activity, sleep, HRV — flows in automatically. No manual logging.' },
  { label: 'Recovery-Aware', description: '6-signal biofeedback system auto-reduces deficit when recovery declines.' },
  { label: 'Enhancement-Tier Aware', description: 'Natural, TRT, GLP-1, peptides — the algorithm adapts to your context.' },
]

export const metadata: Metadata = {
  title: 'CutEngine - ML-driven adaptive fat loss',
  description:
    'ML-driven fat loss app that adapts your calorie targets daily based on real HealthKit data, not static formulas.',
}

export default function CutEnginePage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-3xl">
          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/icons/cutengine-icon.png"
              alt="CutEngine"
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-sm font-medium text-zinc-400 mb-2">
                Beta
              </span>
              <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
                CutEngine
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-zinc-400">
            ML-driven fat loss that adapts daily. Your Apple Watch data becomes personalized
            calorie and macro targets — with safety rails that protect your recovery.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ProductlaneButton
              className="inline-flex items-center px-6 py-3 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-100 transition-colors"
            >
              Request Beta Access
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
              Your data. Your cut. Adapted daily.
            </h2>
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
              Static calorie calculators give you a number on day one and never adjust. As your body
              adapts, that number becomes wrong — leading to plateaus, muscle loss, or unnecessary suffering.
            </p>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              CutEngine analyzes your weight trends, activity, recovery metrics, and biofeedback signals
              to calculate personalized, daily-adjusted targets. The ML model learns your response, not
              population averages.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6">
                <h3 className="font-display text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white">
              Part of the BodyEngine suite
            </h2>
            <p className="mt-4 text-zinc-400">
              CutEngine works alongside{' '}
              <Link href="/apps/cardioengine" className="text-zinc-200 underline hover:text-white">CardioEngine</Link>
              {' '}for HR zone training. Together they share user data via App Groups for a complete picture of your fitness.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
