import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

const navigation = [
  {
    title: 'Mindfulness',
    links: [
      { title: 'Good Parts', href: '/apps/good-parts' },
      { title: 'Becoming One', href: '/apps/becoming-one' },
      { title: 'Simple Rituals', href: '/apps/simple-rituals' },
    ],
  },
  {
    title: 'Fitness',
    links: [
      { title: 'CutEngine', href: '/apps/cutengine' },
      { title: 'CardioEngine', href: '/apps/cardioengine' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Refactor Service', href: '/services/refactor' },
      { title: 'The Collective', href: '/the-collective' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Delete My Data', href: '/data-deletion' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-zinc-200">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-zinc-500">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-zinc-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="border-t border-zinc-800 pt-12">
          <Navigation />
        </div>
        <div className="mt-16 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-zinc-800/50 pt-8">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-zinc-600">
            &copy; Feeling Mindful Labs {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
