import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const navigation = [
  {
    title: 'Apps',
    links: [
      { title: 'GoodParts', href: '/apps/good-parts' },
      { title: 'Simple Rituals', href: '/apps/simple-rituals' },
      { title: 'CardioEngine', href: '/apps/cardioengine' },
      { title: 'All Apps', href: '/apps' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Community projects', href: '/#community' },
      { title: 'Support', href: '/support' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'GoodParts Consumer Health Privacy', href: 'https://goodparts.ai/consumer-health-privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Delete My Data', href: '/data-deletion' },
    ],
  },
]

function Navigation() {
  return (
    <nav aria-label="Footer">
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="text-sm font-semibold text-ink">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-ink-faint">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link href={link.href} className="transition hover:text-ink">
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
    <Container as="footer" className="mt-20 w-full">
      <div>
        <div className="border-t border-edge pt-12">
          <Navigation />
        </div>
        <div className="mt-16 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-edge pt-8">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" />
          </Link>
          <p className="text-sm text-ink-faint">
            &copy; Feeling Mindful Labs {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </Container>
  )
}
