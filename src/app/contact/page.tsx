import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { Arrow, BetaAction } from '@/components/ProductMarketing'
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nick at Feeling Mindful Labs, request GoodParts beta access, or get help with an app.',
}
export default function Contact() {
  return (
    <RootLayout>
      <Container>
        <section className="text-page">
          <h1>Let’s talk.</h1>
          <p className="lead">
            I’m Nick, the founder of Feeling Mindful Labs. For questions about the
            apps, feedback, or a simple hello, you can reach me directly.
          </p>
          <a
            className="text-link contact-address"
            href="mailto:nick@feelingmindful.com"
          >
            nick@feelingmindful.com <Arrow />
          </a>
          <div className="product-story">
            <h2>Need a hand?</h2>
            <div>
              <p>
                For an app issue, the support portal helps you send the details
                I need to look into it.
              </p>
              <Link className="action-primary" href="/support">
                Get app support <Arrow />
              </Link>
            </div>
          </div>
          <section className="beta-section">
            <h2>Curious about GoodParts?</h2>
            <p>
              It’s still in development. Send a beta request to let me know
              you’d like to try it.
            </p>
            <BetaAction />
          </section>
        </section>
      </Container>
    </RootLayout>
  )
}
