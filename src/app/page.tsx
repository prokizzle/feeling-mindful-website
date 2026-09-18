import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { ContactSection } from '@/components/ContactSection'
import { GoodPartsPreview, RitualsPreview } from '@/components/ProductPreview'
import {
  AppIdentity,
  Arrow,
  BetaAction,
  CommunityProjects,
  GoodPartsSteps,
} from '@/components/ProductMarketing'

export const metadata: Metadata = {
  title: { absolute: 'Feeling Mindful Labs — Home of GoodParts' },
  description:
    'Meet GoodParts, an IFS-informed voice journal for getting to know your inner parts. Thoughtful apps and community projects by Feeling Mindful Labs.',
}

export default function Home() {
  return (
    <RootLayout>
      <Container>
        <section className="flagship-hero">
          <div className="hero-copy">
            <h1>
              Get to know
              <br />
              every part
              <br />
              of <em>you.</em>
            </h1>
            <p className="hero-description">
              Meet <strong>GoodParts</strong>, a voice journal for your inner
              world. Speak freely, explore the parts that show up, and notice
              what connects over time.
            </p>
            <div className="hero-actions">
              <BetaAction />
              <a className="text-link" href="https://goodparts.ai">
                Visit goodparts.ai <Arrow />
              </a>
            </div>
            <p className="availability">
              In development · Beta requests welcome
            </p>
          </div>
          <GoodPartsPreview />
        </section>
        <section className="reflection-section">
          <div className="section-heading">
            <h2>
              A little curiosity.
              <br />A different conversation.
            </h2>
            <p>
              Some days, you feel pulled in different directions. GoodParts
              draws on Internal Family Systems (IFS) to help you explore those
              inner voices with curiosity.
            </p>
          </div>
          <GoodPartsSteps />
          <p className="quiet-note">
            A tool for personal reflection. AI observations are suggestions to
            explore, not diagnoses or a substitute for professional care.
          </p>
        </section>
        <section className="rituals-feature" id="simple-rituals">
          <RitualsPreview />
          <div className="feature-copy">
            <AppIdentity
              name="Simple Rituals"
              icon="/icons/simple-rituals-icon.png"
              status="Coming soon"
            />
            <h2>
              Make room for
              <br />
              the everyday.
            </h2>
            <p>
              Self-understanding meets daily practice. Simple Rituals helps you
              shape a manageable rhythm around what matters today.
            </p>
            <p>
              Choose your priorities. Make time for a small ritual. Postpone
              when you need to. There is always room to begin again.
            </p>
            <Link href="/apps/simple-rituals" className="text-link">
              Explore Simple Rituals <Arrow />
            </Link>
            <p className="quiet-note">
              Morning will be free. Unlock the full day with a one-time
              purchase.
            </p>
          </div>
        </section>
        <section className="cardio-feature">
          <Image
            src="/icons/cardioengine-icon.png"
            width={72}
            height={72}
            alt=""
          />
          <div>
            <h2>CardioEngine</h2>
            <p>
              My first published app. Heart-rate zones and live workout guidance
              for iPhone and Apple Watch.
            </p>
            <span className="availability">Available now</span>
          </div>
          <Link href="/apps/cardioengine" className="text-link">
            Find your pace <Arrow />
          </Link>
        </section>
        <CommunityProjects />
        <section className="founder-note">
          <h2>Made with a personal purpose.</h2>
          <p>
            I’m Nick, the founder of Feeling Mindful Labs. GoodParts is my main
            focus. Alongside it, I’m building tools for daily life and giving
            back through software for my community.
          </p>
          <span>Nick · Founder, Feeling Mindful Labs</span>
        </section>
      </Container>
      <ContactSection />
    </RootLayout>
  )
}
