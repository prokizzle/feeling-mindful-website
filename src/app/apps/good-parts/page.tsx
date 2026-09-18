import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { GoodPartsPreview } from '@/components/ProductPreview'
import {
  AppIdentity,
  BetaAction,
  GoodPartsSteps,
  ProductLegal,
} from '@/components/ProductMarketing'

export const metadata: Metadata = {
  title: 'GoodParts — Get to know every part of you',
  description:
    'An IFS-informed voice journal for exploring your inner parts and noticing patterns over time. In development. Request beta access by email.',
}

export default function GoodPartsPage() {
  return (
    <RootLayout>
      <Container>
        <section className="product-hero">
          <div className="feature-copy">
            <AppIdentity
              name="GoodParts"
              icon="/icons/good-parts-icon.png"
              status="Coming soon"
            />
            <h1>
              Your inner world,
              <br />
              in your own words.
            </h1>
            <p>
              Say what is on your mind. GoodParts turns your voice entries into
              a journal you can explore, bringing recurring parts, people, and
              patterns into view.
            </p>
            <BetaAction />
          </div>
          <GoodPartsPreview />
        </section>
        <section className="reflection-section">
          <h2>Start with what’s here.</h2>
          <GoodPartsSteps />
        </section>
        <section className="product-story">
          <h2>
            Every part has
            <br />
            something to say.
          </h2>
          <div>
            <p>
              Internal Family Systems (IFS) offers a way to think about the
              different parts of our inner lives. The part that plans ahead. The
              part that worries. The part that wants to rest.
            </p>
            <p>
              GoodParts uses AI to suggest parts and connections in your
              journal, with guided prompts to help you reflect further. These
              are possibilities to explore in your own words, not conclusions
              about who you are.
            </p>
            <p>
              Journal recordings are transcribed in the cloud in the current
              version. Review the privacy policy for how recordings, entries,
              and analysis are handled.
            </p>
          </div>
        </section>
        <section className="beta-section">
          <h2>Help shape GoodParts.</h2>
          <p>
            GoodParts isn’t publicly available yet. Email Nick to express
            interest in trying the beta. Access is not automatic, and there is
            no purchase required to send a request.
          </p>
          <BetaAction />
        </section>
        <p className="quiet-note">
          GoodParts is for personal reflection, not diagnosis, treatment, or
          crisis support.
        </p>
        <ProductLegal slug="good-parts" terms />
      </Container>
    </RootLayout>
  )
}
