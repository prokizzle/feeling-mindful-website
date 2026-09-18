import { type Metadata } from 'next'
import localFont from 'next/font/local'

import '@/styles/tailwind.css'

const dmSans = localFont({
  src: [
    { path: '../fonts/DM-Sans-400.ttf', weight: '400' },
    { path: '../fonts/DM-Sans-500.ttf', weight: '500' },
    { path: '../fonts/DM-Sans-700.ttf', weight: '700' },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerif = localFont({
  src: '../fonts/DM-Serif-Display-400.ttf',
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Feeling Mindful Labs',
    default: 'Feeling Mindful — Home of GoodParts',
  },
  description:
    'Feeling Mindful makes GoodParts, an IFS-informed voice journal, alongside Simple Rituals, CardioEngine, and free community projects.',
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
      className={`h-full bg-surface text-base antialiased ${dmSans.variable} ${dmSerif.variable}`}
    >
      <head>
        {/* Set theme class before paint to avoid a flash of the wrong mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col text-ink">{children}</body>
    </html>
  )
}
