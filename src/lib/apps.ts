export type AppDomain = 'mindfulness' | 'fitness'

export interface AppInfo {
  name: string
  slug: string
  description: string
  status: 'Live' | 'Beta' | 'Coming Soon'
  domain: AppDomain
  icon: string
  bgGlow: string
  /** Hidden apps stay live at their URLs but are excluded from nav, hub, homepage, and sitemap. */
  hidden?: boolean
}

export const SUPPORT_URL = '/support'
export const BETA_EMAIL = 'nick@feelingmindful.com'
export const GOODPARTS_BETA_URL = `mailto:${BETA_EMAIL}?subject=GoodParts%20beta%20access`
export const CARDIOENGINE_STORE_URL = 'https://apps.apple.com/app/id6761030036'

export const apps: AppInfo[] = [
  // Mindfulness suite
  {
    name: 'GoodParts',
    slug: 'good-parts',
    description:
      'An IFS-informed voice journal. Explore your inner parts and notice the patterns that emerge over time.',
    status: 'Coming Soon',
    domain: 'mindfulness',
    icon: '/icons/good-parts-icon.png',
    bgGlow: 'bg-sage-400/20',
  },
  {
    name: 'Becoming One',
    slug: 'becoming-one',
    hidden: true,
    description:
      'IFS-guided meditation. Explore your inner world through practices designed for parts work and self-integration.',
    status: 'Coming Soon',
    domain: 'mindfulness',
    icon: '/icons/becoming-one-icon.png',
    bgGlow: 'bg-sand-400/20',
  },
  {
    name: 'Simple Rituals',
    slug: 'simple-rituals',
    description:
      'A little structure, a little more room to breathe. Build daily rituals with flexible priorities and space to begin again.',
    status: 'Coming Soon',
    domain: 'mindfulness',
    icon: '/icons/simple-rituals-icon.png',
    bgGlow: 'bg-sage-400/20',
  },
  // Fitness suite
  {
    name: 'CutEngine',
    slug: 'cutengine',
    hidden: true,
    description:
      'ML-driven fat loss that adapts daily. Your Apple Watch data becomes personalized calorie and macro targets.',
    status: 'Beta',
    domain: 'fitness',
    icon: '/icons/cutengine-icon.png',
    bgGlow: 'bg-dawn-400/20',
  },
  {
    name: 'CardioEngine',
    slug: 'cardioengine',
    description:
      'HR zone-based cardio training with live workout coaching and Bluetooth heart rate monitor support.',
    status: 'Live',
    domain: 'fitness',
    icon: '/icons/cardioengine-icon.png',
    bgGlow: 'bg-dawn-500/20',
  },
]

export const visibleApps = apps.filter((a) => !a.hidden)
export const mindfulnessApps = visibleApps.filter(
  (a) => a.domain === 'mindfulness',
)
export const fitnessApps = visibleApps.filter((a) => a.domain === 'fitness')
