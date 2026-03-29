import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Feeling Mindful Labs',
    default: 'Feeling Mindful Labs - Apps for mindful living and fitness',
  },
  description: 'Feeling Mindful Labs builds apps for mindful living and intelligent fitness. IFS journaling, meditation, adaptive fat loss, and HR zone training.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
