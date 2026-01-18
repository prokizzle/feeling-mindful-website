import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import { RootLayout } from '@/components/RootLayout'

const apps = [
  {
    name: 'Awareness',
    slug: 'awareness',
    description: 'A daily plan for transformational awareness through meditation, journaling, exercise, and mindful nutrition.',
    status: 'Beta',
    icon: '/icons/awareness-icon.png',
  },
  {
    name: 'Good Parts',
    slug: 'good-parts',
    description: 'IFS-aware voice journaling. Record your thoughts, discover your parts, and track patterns over time.',
    status: 'Coming Soon',
    icon: '/icons/good-parts-icon.png',
  },
]

function Apps() {
  return (
    <>
      <SectionIntro
        title="Apps for mindful living"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We build tools that help you develop awareness, understand yourself
          better, and live more intentionally. Each app is designed with care
          and grounded in evidence-based practices.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {apps.map((app) => (
            <FadeIn key={app.slug} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={`/apps/${app.slug}`}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-xl"
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span className="font-semibold">{app.status}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {app.name}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {app.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Philosophy() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Philosophy"
        title="Technology in service of awareness"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe the best tools get out of your way. Our apps are designed
          to support your practice, not distract from it.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <List className="mt-16 lg:mt-0 lg:w-full lg:max-w-2xl">
            <ListItem title="Evidence-based">
              Every feature is grounded in research and clinical practice,
              developed in collaboration with mental health professionals.
            </ListItem>
            <ListItem title="Privacy-first">
              Your data belongs to you. We use end-to-end encryption and
              never sell your information to third parties.
            </ListItem>
            <ListItem title="Distraction-free">
              No ads, no social feeds, no gamification tricks. Just tools
              that help you focus on what matters.
            </ListItem>
            <ListItem title="Accessible">
              We believe mindfulness should be available to everyone,
              regardless of their background or circumstances.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Feeling Mindful Labs - Apps for mindful living',
  description:
    'Feeling Mindful Labs builds apps for mindful living. Tools for meditation, journaling, and self-discovery.',
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Tools for mindful living.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We build apps that help you develop awareness, understand yourself
            better, and live more intentionally. Grounded in evidence-based
            practices and designed with care.
          </p>
        </FadeIn>
      </Container>

      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/heroes/homepage-hero.png"
              alt="Mindful living illustration"
              width={1280}
              height={720}
              className="w-full object-cover"
              priority
            />
          </div>
        </FadeIn>
      </Container>

      <Apps />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Chris Shanks', logo: '/icons/awareness-icon.png' }}
      >
        The practices in Awareness come from years of clinical work helping
        people transform their relationship with themselves and the world
        around them.
      </Testimonial>

      <Philosophy />

      <ContactSection />
    </RootLayout>
  )
}
