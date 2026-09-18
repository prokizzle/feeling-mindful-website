import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { AppIdentity, Arrow, ProductLegal } from '@/components/ProductMarketing'
import { CARDIOENGINE_STORE_URL } from '@/lib/apps'

export const metadata: Metadata = {
  title: 'CardioEngine — Heart-rate zone training',
  description:
    'Personalized heart-rate zones, live workout guidance, and session history for iPhone and Apple Watch. Available on the App Store.',
}

export default function CardioEnginePage() {
  return (
    <RootLayout>
      <Container>
        <section className="text-page">
          <AppIdentity
            name="CardioEngine"
            icon="/icons/cardioengine-icon.png"
            status="Available now"
          />
          <h1>
            Find your pace.
            <br />
            Stay in your zone.
          </h1>
          <p className="lead">
            Heart-rate zone training with live guidance for iPhone and Apple
            Watch. Connect your watch or Bluetooth heart-rate monitor and follow
            your effort as you move.
          </p>
          <a href={CARDIOENGINE_STORE_URL} className="action-primary">
            View on the App Store <Arrow />
          </a>
          <div className="product-steps">
            {[
              [
                'Personalized zones',
                'Use heart-rate zones informed by your training data and threshold estimates.',
              ],
              [
                'Guidance as you go',
                'See your heart rate during a workout and get guidance when you move outside your target zone.',
              ],
              [
                'Your training over time',
                'Review session history, track weekly cardio volume, and follow your progress.',
              ],
            ].map(([title, copy]) => (
              <div key={title}>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <p className="quiet-note">
            CardioEngine was my first published app. It remains part of the
            Feeling Mindful Labs family as I build GoodParts.
          </p>
          <ProductLegal slug="cardioengine" />
        </section>
      </Container>
    </RootLayout>
  )
}
