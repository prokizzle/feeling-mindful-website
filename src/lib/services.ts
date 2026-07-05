import { type ServiceTier } from '@/components/ServiceSections'

/** Single source of truth for refactor pricing — homepage mini-cards derive from this. */
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
