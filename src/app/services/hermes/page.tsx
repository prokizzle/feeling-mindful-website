import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PricingTiers, StepsGrid, type ServiceTier } from '@/components/ServiceSections'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'

const industries = [
  'Professional services',
  'Healthcare & wellness',
  'E-commerce',
  'Real estate',
  'Agencies',
]

const steps = [
  {
    number: '01',
    title: 'Tell us your bottleneck',
    description:
      'A short call about the work that eats your week.',
    detail: '30 minutes',
  },
  {
    number: '02',
    title: 'We set up your agent',
    description:
      'An AI agent configured for your workflow, living in your Slack. No new software for your team to learn.',
    detail: 'As fast as 48 hours',
  },
  {
    number: '03',
    title: 'Your team gets trained',
    description:
      'A hands-on session so everyone knows how to work with the agent — and what to expect from it.',
    detail: '1–2 hours',
  },
  {
    number: '04',
    title: 'It works while you do',
    description:
      'The agent handles the busywork daily. We stay on Slack support while it beds in.',
    detail: '2–60 days included',
  },
]

const tiers: ServiceTier[] = [
  {
    name: 'Quick Start',
    price: '$750',
    description: 'One agent, one workflow, working in 48 hours',
    features: [
      '1 AI agent in your Slack',
      '1 workflow — email triage, CRM enrichment, or customer FAQ',
      '48-hour setup',
      '1-hour training session',
      '2 weeks of Slack support',
    ],
    highlighted: false,
  },
  {
    name: 'Business Ops',
    price: '$2,000',
    description: 'A small team of agents running your daily ops',
    features: [
      '2–3 specialized agents',
      'Dedicated Slack channels',
      'Scheduled jobs (reports, follow-ups, alerts)',
      '2 custom skills for your business',
      '2-hour training session',
      '30 days of Slack support + 1 skill iteration',
    ],
    highlighted: true,
  },
  {
    name: 'Full Stack',
    price: '$4,500',
    description: 'Multi-agent automation across your whole operation',
    features: [
      'Multi-agent setup',
      'Custom integrations — CRM, email, calendar',
      'SOP automation & dashboards',
      'Full team training',
      '60 days of support',
      'Quarterly health checks',
    ],
    highlighted: false,
  },
]

export const metadata: Metadata = {
  title: 'Hermes AI Consulting - AI Agents for Small Business',
  description:
    'AI agents for small business, one Slack channel at a time. Working in your Slack in as little as 48 hours.',
}

export default function HermesConsultingPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-edge bg-raised px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {industry}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
            You&apos;ve tried AI tools.{' '}
            <span className="bg-gradient-to-r from-sage-600 via-sage-500 to-dawn-500 bg-clip-text text-transparent">
              Now put AI to work.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-muted">
            Most small businesses have paid for AI; few use it daily. We set up
            autonomous agents that live in your Slack and run the busywork:
            email triage, lead follow-up, scheduling, reporting.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-ink/85"
            >
              See Packages
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <span className="text-sm text-ink-faint">
              Working agent in as little as 48 hours.
            </span>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <span className="font-display text-sm font-semibold tracking-widest text-ink-muted uppercase">
            Why This Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Not another chatbot. Not another Zapier.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
            Chat tools answer questions; automation tools follow rigid rules.
            Our agents reason through multi-step work autonomously, run on
            open-source and local-first infrastructure (a real privacy story
            for legal, medical, and finance), and live where your team already
            works: Slack. No new interface to learn, no strategy deck.
          </p>
        </FadeIn>

        <StepsGrid steps={steps} />
      </Container>

      <section
        id="pricing"
        className="mt-24 rounded-2xl bg-raised py-20 sm:mt-32 sm:py-32"
      >
        <Container>
          <FadeIn>
            <span className="font-display text-sm font-semibold tracking-widest text-ink-muted uppercase">
              Pricing
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Fixed packages. Start small, grow into it.
            </h2>
            <p className="mt-4 max-w-xl text-ink-muted">
              Every package ends with agents your team uses daily.
            </p>
          </FadeIn>

          <PricingTiers tiers={tiers} />

          <FadeIn>
            <p className="mt-10 text-center text-sm text-ink-faint">
              Ongoing tuning, new skills, and monitoring available on a monthly
              retainer ($300–$800/mo), with priority Slack support included.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container className="mt-24 mb-24 sm:mt-32">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
              Have an app that needs work instead?
            </h2>
            <p className="mt-4 text-ink-muted">
              We also turn vibe-coded mobile apps into production software — see
              the{' '}
              <Link
                href="/services/refactor"
                className="text-ink underline hover:text-ink"
              >
                Refactor Service
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
