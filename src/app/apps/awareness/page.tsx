import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { BetaSignupButton } from '@/components/BetaSignupButton'

const pillars = [
  {
    name: 'Audio Guidance',
    description: 'Wake to guided intention-setting that anchors your day.',
    longDescription: 'Each morning begins with a carefully crafted audio session. Set your intention, ground yourself in the present, and prepare your mind for the day ahead.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    gradient: 'from-sage-400 to-sage-600',
  },
  {
    name: 'Journaling',
    description: 'Write through targeted prompts that reveal patterns.',
    longDescription: 'Structured prompts guide you through self-reflection. Over time, patterns emerge—insights that would remain hidden without the discipline of daily writing.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: 'from-sand-400 to-sand-600',
  },
  {
    name: 'Exercise',
    description: 'Move with purpose as embodied practice.',
    longDescription: 'Movement becomes meditation. Whether walking, stretching, or training—approach your body with the same attention you give your mind.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: 'from-dawn-400 to-dawn-600',
  },
  {
    name: 'Nutrition',
    description: 'Eat with attention, connecting food to feeling.',
    longDescription: 'What you eat shapes how you feel. Plan meals with intention, notice how foods affect your energy and mood, and build a mindful relationship with nourishment.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    gradient: 'from-dusk-400 to-dusk-600',
  },
]

function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

export const metadata: Metadata = {
  title: 'Shanks Awareness Training - Daily practice for lasting change',
  description:
    'Four disciplines that transform how you relate to yourself and the world: audio guidance, journaling, exercise, and mindful nutrition.',
}

export default function AwarenessPage() {
  return (
    <RootLayout>
      {/* Hero - Full bleed with dramatic presence */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-sand-50 to-dawn-50" />

        {/* Floating orbs */}
        <FloatingOrb className="animate-float-slow absolute -top-32 -right-32 h-[500px] w-[500px] bg-sage-200/40" />
        <FloatingOrb className="animate-float absolute top-1/2 -left-48 h-[400px] w-[400px] bg-dawn-200/30" delay={1} />
        <FloatingOrb className="animate-float-slow absolute bottom-0 right-1/4 h-[300px] w-[300px] bg-dusk-200/20" delay={2} />

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

        <Container className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Content */}
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/icons/awareness-icon.png"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                    <span className="h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
                    Beta
                  </span>
                </div>
              </div>

              <h1 className="font-display text-5xl font-medium tracking-tight text-sage-950 sm:text-6xl lg:text-7xl">
                Shanks
                <br />
                <span className="bg-gradient-to-r from-sage-600 via-sage-500 to-dawn-500 bg-clip-text text-transparent">
                  Awareness
                </span>
                <br />
                Training
              </h1>

              <p className="mt-8 text-lg text-sage-600 leading-relaxed">
                by{' '}
                <a
                  href="https://shankscounseling.com"
                  className="text-sage-800 underline decoration-sage-300 underline-offset-4 hover:text-sage-950 hover:decoration-sage-500 transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  Chris Shanks
                </a>
              </p>

              <p className="mt-6 text-xl text-sage-700/80 leading-relaxed max-w-lg">
                Four disciplines that transform how you relate to yourself and
                the world. Clinical practice, distilled into daily action.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <BetaSignupButton className="group inline-flex items-center gap-2 px-8 py-4 bg-sage-950 text-white rounded-full font-semibold hover:bg-sage-800 transition-all">
                  <span>Join the Beta</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </BetaSignupButton>
                <Link
                  href="/the-collective"
                  className="inline-flex items-center px-8 py-4 border-2 border-sage-200 text-sage-700 rounded-full font-semibold hover:border-sage-300 hover:bg-sage-50 transition-all"
                >
                  Support Development
                </Link>
              </div>
            </FadeIn>

            {/* Right: Hero Image */}
            <FadeIn className="relative">
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-sage-300/40 via-sand-300/40 to-dawn-300/40 blur-3xl" />

                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-sage-900/20 ring-1 ring-sage-900/5">
                  <Image
                    src="/images/heroes/awareness-hero.png"
                    alt="Shanks Awareness Training"
                    width={800}
                    height={600}
                    className="w-full object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-950/20 via-transparent to-transparent" />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Philosophy Section - Dark, dramatic */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-950 via-sage-900 to-dusk-950" />

        {/* Decorative elements */}
        <FloatingOrb className="animate-breathe absolute -left-48 top-1/3 h-[400px] w-[400px] bg-sage-700/30" />
        <FloatingOrb className="animate-breathe absolute -right-48 bottom-1/4 h-[350px] w-[350px] bg-dusk-700/20" delay={1.5} />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

        <Container className="relative">
          <FadeIn>
            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                Beyond meditation
              </h2>

              <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <p className="text-xl text-sage-200 leading-relaxed">
                  Meditation alone changes little. Real transformation requires
                  integrated practice—mind, body, and daily habit working together.
                </p>
                <p className="text-xl text-sage-300 leading-relaxed">
                  Chris Shanks developed these methods through years of clinical
                  work. Now anyone can follow them.
                </p>
              </div>

              {/* Stats or proof points */}
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  { value: '4', label: 'Daily practices' },
                  { value: '15', label: 'Minutes minimum' },
                  { value: '21', label: 'Days to habit' },
                  { value: '∞', label: 'Potential growth' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-4xl font-medium text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-sage-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Four Pillars - Spacious cards */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sage-50/30 to-white" />

        <Container className="relative">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-sage-300" />
                <span className="font-display text-sm font-semibold tracking-widest text-sage-600 uppercase">
                  The Method
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-sage-300" />
              </div>
              <h2 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
                Four Pillars of Practice
              </h2>
              <p className="mt-6 text-xl text-sage-600">
                Each day guides you through four interconnected disciplines.
                Together, they build lasting awareness.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.name}>
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-3xl bg-white p-10 shadow-xl shadow-sage-900/5 ring-1 ring-sage-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-sage-900/10">
                    {/* Background glow on hover */}
                    <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${pillar.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                    <div className="relative">
                      {/* Number */}
                      <div className="absolute -top-2 -left-2 font-display text-8xl font-bold text-sage-100 select-none">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg`}>
                        {pillar.icon}
                      </div>

                      {/* Content */}
                      <h3 className="mt-8 font-display text-2xl font-semibold text-sage-950">
                        {pillar.name}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-sage-600">
                        {pillar.longDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Daily Practice Section - Visual timeline */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-dawn-50/50 to-sage-50" />

        <FloatingOrb className="animate-float-slow absolute top-0 right-0 h-[400px] w-[400px] bg-dawn-200/30" />
        <FloatingOrb className="animate-float absolute bottom-0 left-0 h-[300px] w-[300px] bg-sage-200/30" delay={1} />

        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Content */}
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="font-display text-sm font-semibold tracking-widest text-dawn-600 uppercase">
                  How It Works
                </span>
              </div>
              <h2 className="font-display text-4xl font-medium tracking-tight text-sage-950 sm:text-5xl">
                Your Daily Practice
              </h2>
              <p className="mt-6 text-xl text-sage-600 leading-relaxed">
                Four steps. Every day. Simple to follow, difficult to master.
                The app guides you through each phase, tracking your progress
                and adapting to your rhythm.
              </p>

              <div className="mt-12">
                <BetaSignupButton className="group inline-flex items-center gap-2 px-8 py-4 bg-sage-950 text-white rounded-full font-semibold hover:bg-sage-800 transition-all">
                  <span>Start Your Practice</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </BetaSignupButton>
              </div>
            </FadeIn>

            {/* Right: Timeline */}
            <FadeIn>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sage-200 via-sand-300 to-dawn-200" />

                <div className="space-y-12">
                  {[
                    { step: '1', title: 'Listen', time: 'Morning', description: 'Begin with guided audio that sets your intention for the day.', color: 'sage' },
                    { step: '2', title: 'Write', time: 'Mid-morning', description: 'Journal through prompts that surface insight and clarity.', color: 'sand' },
                    { step: '3', title: 'Move', time: 'Afternoon', description: 'Exercise as practice, not punishment. Embody awareness.', color: 'dawn' },
                    { step: '4', title: 'Nourish', time: 'Evening', description: 'Eat mindfully, linking nutrition to how you feel.', color: 'dusk' },
                  ].map((item) => (
                    <div key={item.step} className="relative flex gap-8">
                      {/* Step indicator */}
                      <div className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-${item.color}-100 text-${item.color}-700 shadow-lg ring-4 ring-white`}>
                        <span className="font-display text-2xl font-bold">{item.step}</span>
                      </div>

                      {/* Content */}
                      <div className="pt-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-xl font-semibold text-sage-950">
                            {item.title}
                          </h3>
                          <span className="text-sm text-sage-400">{item.time}</span>
                        </div>
                        <p className="mt-2 text-sage-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA Section - Dramatic finale */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50 to-white" />

        <Container className="relative">
          <FadeIn>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-sage-950 via-sage-900 to-dusk-950 px-8 py-24 sm:px-16 sm:py-32 overflow-hidden">
              {/* Decorative elements */}
              <FloatingOrb className="animate-breathe absolute -left-32 top-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-sage-700/30" />
              <FloatingOrb className="animate-breathe absolute -right-32 top-1/3 h-[350px] w-[350px] bg-dusk-700/20" delay={1} />

              {/* Concentric circles decoration */}
              <div className="absolute right-12 top-12 hidden lg:block">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse-soft" />
                  <div className="absolute inset-6 rounded-full border border-white/10 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute inset-12 rounded-full border border-white/10 animate-pulse-soft" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              <div className="relative max-w-2xl mx-auto text-center">
                <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Begin your practice
                </h2>
                <p className="mt-8 text-xl text-sage-200 leading-relaxed">
                  Join the beta and start transforming how you relate to
                  yourself and the world around you.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <BetaSignupButton className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-sage-950 rounded-full font-semibold hover:bg-sage-50 transition-all shadow-xl">
                    <span>Join the Beta</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </BetaSignupButton>
                </div>

                <p className="mt-10 text-sm text-sage-400">
                  <Link href="/apps/awareness/privacy" className="hover:text-sage-200 transition-colors">
                    Privacy Policy
                  </Link>
                  <span className="mx-3">·</span>
                  <Link href="/apps/awareness/terms" className="hover:text-sage-200 transition-colors">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </RootLayout>
  )
}
