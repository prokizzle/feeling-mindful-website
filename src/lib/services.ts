import { type ServiceTier } from '@/components/ServiceSections'

/** Hermes AI Consulting tiers — the primary marketed service line. */
export const hermesTiers: (ServiceTier & {
  priceShort: string
  summary: string
})[] = [
  {
    name: 'Quick Start',
    price: '$750',
    priceShort: '$750',
    description: 'One agent, one workflow, working in 48 hours',
    summary: '1 agent in your Slack, 1 workflow',
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
    priceShort: '$2K',
    description: 'A small team of agents running your daily ops',
    summary: '2–3 agents, scheduled jobs, custom skills',
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
    priceShort: '$4.5K',
    description: 'Multi-agent automation across your whole operation',
    summary: 'Multi-agent + CRM/email/calendar integrations',
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

/** Refactor service — de-listed from nav 2026-07-05 (penalty box); page stays live as a sub-page. */
export const refactorTiers: (ServiceTier & {
  priceShort: string
  summary: string
})[] = [
  {
    name: 'UI Polish',
    price: '$3,000',
    priceShort: '$3K',
    description: "Your app works but doesn't look the part",
    summary: 'Design system, animations, native feel',
    features: [
      'Design system cleanup',
      'Responsive layouts for all screen sizes',
      'Smooth animations & transitions',
      'Platform-native feel (iOS or Android)',
      'Typography & color consistency',
    ],
    highlighted: false,
  },
  {
    name: 'Full Refactor',
    price: '$7,500',
    priceShort: '$7.5K',
    description: 'The code under the hood needs work too',
    summary: 'Architecture, state, API, tests',
    features: [
      'Everything in UI Polish',
      'Architecture refactor',
      'State management overhaul',
      'API layer cleanup',
      'Error handling & edge cases',
      'Unit test coverage',
    ],
    highlighted: true,
  },
  {
    name: 'Production Ready',
    price: '$20,000',
    priceShort: '$20K',
    description: 'You want to launch and never look back',
    summary: 'App Store submission + 30d support',
    features: [
      'Everything in Full Refactor',
      'App Store optimization & submission',
      'CI/CD pipeline setup',
      'Performance monitoring',
      'Analytics integration',
      'Launch support & 30 days post-launch fixes',
    ],
    highlighted: false,
  },
]
