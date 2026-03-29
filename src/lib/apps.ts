export type AppDomain = 'mindfulness' | 'fitness'

export interface AppInfo {
  name: string
  slug: string
  description: string
  status: 'Live' | 'Beta' | 'Coming Soon'
  domain: AppDomain
  icon: string
  gradient: string
  bgGlow: string
  externalUrl?: string
  appStoreUrl?: string
}

export const SUPPORT_URL = 'https://support.feelingmindful.com'

export const apps: AppInfo[] = [
  // Mindfulness suite
  {
    name: 'Good Parts',
    slug: 'good-parts',
    description: 'IFS-aware voice journaling. Record your thoughts, discover your parts, and track patterns over time.',
    status: 'Beta',
    domain: 'mindfulness',
    icon: '/icons/good-parts-icon.png',
    gradient: 'from-dusk-400 to-dusk-600',
    bgGlow: 'bg-dusk-400/20',
  },
  {
    name: 'Becoming One',
    slug: 'becoming-one',
    description: 'IFS-guided meditation. Explore your inner world through practices designed for parts work and self-integration.',
    status: 'Coming Soon',
    domain: 'mindfulness',
    icon: '/icons/becoming-one-icon.png',
    gradient: 'from-sand-400 to-sand-600',
    bgGlow: 'bg-sand-400/20',
  },
  {
    name: 'Simple Rituals',
    slug: 'simple-rituals',
    description: 'Build morning and evening routines that stick. Prioritize with MoSCoW, track streaks, grow consistency.',
    status: 'Beta',
    domain: 'mindfulness',
    icon: '/icons/simple-rituals-icon.png',
    gradient: 'from-sage-400 to-sage-600',
    bgGlow: 'bg-sage-400/20',
  },
  // Fitness suite
  {
    name: 'CutEngine',
    slug: 'cutengine',
    description: 'ML-driven fat loss that adapts daily. Your Apple Watch data becomes personalized calorie and macro targets.',
    status: 'Beta',
    domain: 'fitness',
    icon: '/icons/cutengine-icon.png',
    gradient: 'from-dawn-400 to-dawn-600',
    bgGlow: 'bg-dawn-400/20',
    externalUrl: 'https://cutengine.app',
  },
  {
    name: 'CardioEngine',
    slug: 'cardioengine',
    description: 'HR zone-based cardio training with live workout coaching and Bluetooth heart rate monitor support.',
    status: 'Coming Soon',
    domain: 'fitness',
    icon: '/icons/cardioengine-icon.png',
    gradient: 'from-dawn-500 to-dawn-700',
    bgGlow: 'bg-dawn-500/20',
  },
]

export const mindfulnessApps = apps.filter((a) => a.domain === 'mindfulness')
export const fitnessApps = apps.filter((a) => a.domain === 'fitness')
