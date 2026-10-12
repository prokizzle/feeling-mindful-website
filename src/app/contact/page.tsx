import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { Arrow, StoreActions } from '@/components/ProductMarketing'
import { GOODPARTS_APP_STORE_URL, GOODPARTS_PLAY_URL } from '@/lib/apps'
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nick at Feeling Mindful Labs, get GoodParts, or get help with an app.',
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
              It’s on the App Store for iPhone and on Google Play for Android.
            </p>
            <StoreActions
              appStoreUrl={GOODPARTS_APP_STORE_URL}
              playUrl={GOODPARTS_PLAY_URL}
            />
          </section>
        </section>
      </Container>
    </RootLayout>
  )
}
