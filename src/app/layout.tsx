import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/styles/tailwind.css'
import { ProductlaneWidget } from '@/components/ProductlaneWidget'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Feeling Mindful Labs',
    default: 'Feeling Mindful Labs - Software for mind and body',
  },
  description: 'Feeling Mindful Labs builds apps for mindful living and intelligent fitness. IFS journaling, meditation, adaptive fat loss, and HR zone training.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`h-full bg-zinc-950 text-base antialiased ${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="flex min-h-full flex-col text-zinc-100">
        {children}
        <ProductlaneWidget />
      </body>
    </html>
  )
}
