'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

const navLinks = [
  { href: '/apps/awareness', label: 'Awareness' },
  { href: '/apps/good-parts', label: 'Good Parts' },
  { href: '/the-collective', label: 'Collective' },
]

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <Link
      href={href}
      className={clsx(
        'relative py-2 text-sm font-medium transition-colors duration-200',
        isActive
          ? 'text-sage-950'
          : 'text-sage-600 hover:text-sage-900',
      )}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-sage-500 to-sage-400" />
      )}
    </Link>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement | null>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  const content = (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link
        href="/"
        aria-label="Home"
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
      >
        <Logomark
          className="h-10 w-10 sm:hidden"
          invert={invert}
          filled={logoHovered}
        />
        <Logo
          className="hidden sm:block"
          invert={invert}
          filled={logoHovered}
        />
      </Link>

      {/* Desktop Navigation - Center */}
      {!invert && (
        <nav className="hidden lg:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Right side actions */}
      <div className="flex items-center gap-x-3 sm:gap-x-4">
        <Button href="/contact" invert={invert} className="hidden sm:inline-flex">
          Contact
        </Button>
        <button
          ref={toggleRef}
          type="button"
          onClick={onToggle}
          aria-expanded={expanded ? 'true' : 'false'}
          aria-controls={panelId}
          className={clsx(
            'group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200',
            invert
              ? 'hover:bg-white/10'
              : 'bg-sage-100/80 hover:bg-sage-200/80',
          )}
          aria-label="Toggle navigation"
        >
          <Icon
            className={clsx(
              'h-5 w-5 transition-colors',
              invert
                ? 'fill-white group-hover:fill-sage-200'
                : 'fill-sage-700 group-hover:fill-sage-900',
            )}
          />
        </button>
      </div>
    </div>
  )

  // When inverted (in expanded menu), wrap in Container
  if (invert) {
    return <Container>{content}</Container>
  }

  // Otherwise return content directly (will be wrapped by floating navbar)
  return content
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-sage-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-sage-950 px-6 py-8 even:mt-px sm:mx-0 sm:px-0 sm:py-12 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-sage-800/30 sm:even:pl-16"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-sage-400 to-transparent transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="absolute inset-y-0 -z-10 w-screen bg-sage-900/50 opacity-0 transition-opacity duration-300 group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
      <NavigationRow>
        <NavigationItem href="/apps/awareness">Shanks Awareness Training</NavigationItem>
        <NavigationItem href="/apps/good-parts">Good Parts</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/the-collective">The Collective</NavigationItem>
        <NavigationItem href="/contact">Contact</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let [isTransitioning, setIsTransitioning] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setIsTransitioning(false)
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig
      transition={
        shouldReduceMotion || !isTransitioning ? { duration: 0 } : undefined
      }
    >
      <header>
        {/* Fixed floating navbar */}
        <div
          className="fixed top-0 right-0 left-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? true : undefined}
        >
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl bg-white/80 px-4 py-3 shadow-lg shadow-sage-900/5 ring-1 ring-sage-900/5 backdrop-blur-xl sm:px-6 sm:py-4">
              <Header
                panelId={panelId}
                icon={MenuIcon}
                toggleRef={openRef}
                expanded={expanded}
                onToggle={() => {
                  setIsTransitioning(true)
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    closeRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
          </div>
        </div>

        {/* Expanded mobile menu */}
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-gradient-to-b from-sage-950 to-sage-900 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : true}
        >
          <motion.div layout className="bg-sage-900/30">
            <div ref={navRef} className="bg-sage-950 pt-14 pb-12 sm:pt-16 sm:pb-14">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setIsTransitioning(true)
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-sage-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-sage-800/30">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-14">
                  <div>
                    <h2 className="font-display text-xs font-semibold tracking-widest text-sage-500 uppercase">
                      Location
                    </h2>
                    <Offices
                      invert
                      className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-sage-800/20 sm:pl-16">
                    <h2 className="font-display text-xs font-semibold tracking-widest text-sage-500 uppercase">
                      Connect
                    </h2>
                    <SocialMedia className="mt-4" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-20 sm:pt-24"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-4"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-sage-50 stroke-sage-900/5"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
