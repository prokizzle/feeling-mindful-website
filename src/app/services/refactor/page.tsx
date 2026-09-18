import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
export const metadata: Metadata = {
  title: 'Our focus is on apps',
  robots: { index: false, follow: true },
}
export default function ServicePage() {
  return (
    <RootLayout>
      <Container>
        <section className="text-page">
          <h1>
            Our focus
            <br />
            is on apps.
          </h1>
          <p className="lead">
            Feeling Mindful Labs does not offer consulting or development services.
            I’m focused on building GoodParts and the apps in our family.
          </p>
          <Link className="action-primary" href="/apps/good-parts">
            Meet GoodParts
          </Link>
          <p className="quiet-note">
            <Link href="/apps">Explore all apps</Link>
          </p>
        </section>
      </Container>
    </RootLayout>
  )
}
