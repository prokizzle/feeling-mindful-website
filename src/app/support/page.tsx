import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { SupportPortal } from '@/components/SupportPortal'
import { apps } from '@/lib/apps'

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Get help with Feeling Mindful apps, report a problem, or share product feedback.',
  openGraph: {
    title: 'How can we help? — Feeling Mindful Support',
    description:
      'Support for every Feeling Mindful app, routed to the right team.',
    images: ['https://feelingmindful.com/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How can we help? — Feeling Mindful Support',
    description:
      'Support for every Feeling Mindful app, routed to the right team.',
    images: ['https://feelingmindful.com/og.png'],
  },
}

export default async function SupportPage({
  searchParams,
}: {
  searchParams: Promise<{ app?: string; type?: string }>
}) {
  const params = await searchParams
  const initialApp = apps.some((app) => app.slug === params.app)
    ? params.app
    : undefined

  return (
    <RootLayout>
      <SupportPortal initialApp={initialApp} initialCategory={params.type} />
    </RootLayout>
  )
}
