import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { RitualsPreview } from '@/components/ProductPreview'
import { AppIdentity, Arrow, ProductLegal } from '@/components/ProductMarketing'

export const metadata: Metadata = {
  title: 'Simple Rituals — Find your daily rhythm',
  description:
    'Flexible daily rituals with gentle reminders and room to begin again. Coming soon, with a free morning window and a one-time full-day unlock.',
}

export default function SimpleRitualsPage() {
  return (
    <RootLayout>
      <Container>
        <section className="product-hero">
          <div className="feature-copy">
            <AppIdentity
              name="Simple Rituals"
              icon="/icons/simple-rituals-icon.png"
              status="Coming soon"
            />
            <h1>
              A rhythm for
              <br />
              real life.
            </h1>
            <p>
              Build a day around a few things that matter. Simple Rituals brings
              gentle structure to your morning, afternoon, and evening, with
              room for plans to change.
            </p>
            <a
              className="action-primary"
              href="mailto:nick@feelingmindful.com?subject=Simple%20Rituals%20enquiry"
            >
              Ask about Simple Rituals <Arrow />
            </a>
            <p className="quiet-note">
              Not publicly available yet. This link opens your email app.
            </p>
          </div>
          <RitualsPreview />
        </section>
        <section className="reflection-section">
          <h2>
            Small rituals.
            <br />A little more breathing room.
          </h2>
          <div className="product-steps">
            {[
              [
                'Start with your own day.',
                'Begin without signing up. Add your own rituals and choose when they fit: morning, afternoon, or evening.',
              ],
              [
                'Decide what matters today.',
                'Separate the musts from the shoulds and coulds. See the next ritual, mark it complete, or postpone it.',
              ],
              [
                'Keep an honest history.',
                'A calendar records the days you showed up. Optional reminders give you a gentle nudge as a part of your day begins.',
              ],
            ].map(([title, copy]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="product-story">
          <h2>
            Your morning,
            <br />
            always free.
          </h2>
          <div>
            <p>
              At launch, the morning window will be free. A single lifetime
              purchase will unlock afternoon and evening. No recurring
              subscription for the full-day unlock.
            </p>
            <p>
              Start without an account, then optionally link one to make your
              rituals recoverable.
            </p>
          </div>
        </section>
        <section className="beta-section">
          <h2>Make space for reflection, too.</h2>
          <p>
            A daily ritual can be a few minutes of listening to yourself.
            GoodParts, our flagship voice journal, is being built for that
            conversation.
          </p>
          <Link href="/apps/good-parts" className="text-link">
            Meet GoodParts <Arrow />
          </Link>
        </section>
        <ProductLegal slug="simple-rituals" terms />
      </Container>
    </RootLayout>
  )
}
