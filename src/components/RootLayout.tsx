'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'

const navigation = [
  { href: '/apps/good-parts', label: 'GoodParts' },
  { href: '/apps/simple-rituals', label: 'Simple Rituals' },
  { href: '/apps', label: 'All apps' },
  { href: '/support', label: 'Support' },
]

function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const menu = useRef<HTMLDetailsElement>(null)
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Container>
          <div className="header-row">
            <Link href="/" aria-label="Feeling Mindful home">
              <Logo />
            </Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="header-controls">
              <ThemeToggle />
              <details
                ref={menu}
                className="mobile-menu"
                onKeyDown={(event) => {
                  if (event.key === 'Escape' && menu.current?.open) {
                    menu.current.open = false
                    menu.current.querySelector('summary')?.focus()
                  }
                }}
              >
                <summary aria-label="Navigation menu">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M4 8h16M4 16h16" />
                  </svg>
                </summary>
                <nav aria-label="Mobile navigation">
                  {navigation.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      onClick={() => {
                        if (menu.current) menu.current.open = false
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact">Contact</Link>
                </nav>
              </details>
            </div>
          </div>
        </Container>
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <SiteFrame key={pathname}>{children}</SiteFrame>
}
