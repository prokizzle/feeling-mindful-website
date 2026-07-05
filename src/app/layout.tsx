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
    default: 'Feeling Mindful Labs - Mindful AI. Real software.',
  },
  description:
    'Feeling Mindful Labs is an AI-native studio building apps grounded in clinical research, starting with Good Parts — IFS-aware voice journaling.',
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
      suppressHydrationWarning
      className={`h-full bg-surface text-base antialiased ${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        {/* Set theme class before paint to avoid a flash of the wrong mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col text-ink">
        {children}
        <ProductlaneWidget />
      </body>
    </html>
  )
}
