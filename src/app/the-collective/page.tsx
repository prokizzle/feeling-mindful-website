import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

const benefits = [
  {
    icon: '🚀',
    title: 'Early Access',
    description: 'Be first to try new features before they\'re released to everyone.',
  },
  {
    icon: '🗺️',
    title: 'Shape the Roadmap',
    description: 'Your input directly influences what we build next.',
  },
  {
    icon: '⭐',
    title: 'Founding Member Status',
    description: 'Recognition as an early supporter who helped make this possible.',
  },
  {
    icon: '💚',
    title: 'Good Karma',
    description: 'Support technology that actually cares about your wellbeing.',
  },
]

const funding = [
  { label: 'Infrastructure', description: 'Servers, databases, and cloud services' },
  { label: 'Development', description: 'Building new features and fixing bugs' },
  { label: 'Content', description: 'Creating guided sessions and materials' },
]

export const metadata: Metadata = {
  title: 'The Collective - Feeling Mindful Labs',
  description: 'Join a community of supporters helping build mindful technology.',
}

export default function TheCollectivePage() {
  return (
    <RootLayout>
      {/* Hero */}
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
            The Collective
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            A community of supporters helping make mindful technology a reality.
          </p>
        </FadeIn>
      </Container>

      {/* Benefits */}
      <div className="mt-24 rounded-4xl bg-neutral-50 py-20 sm:mt-32 sm:py-32">
        <Container>
          <FadeIn>
            <h2 className="font-display text-2xl font-medium tracking-tight text-neutral-950 text-center mb-12">
              What members get
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white p-6 rounded-2xl ring-1 ring-neutral-950/5"
                >
                  <div className="text-2xl mb-3">{benefit.icon}</div>
                  <h3 className="font-medium text-neutral-950 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Where funding goes */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight text-neutral-950 mb-6">
              Where your support goes
            </h2>
            <p className="text-neutral-600 mb-8">
              We believe in transparency. Here's what Collective contributions fund:
            </p>
            <ul className="space-y-4 text-left max-w-md mx-auto">
              {funding.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-emerald-500">•</span>
                  <span className="text-neutral-600">
                    <strong>{item.label}</strong> – {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>

      {/* CTA */}
      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 mb-24">
        <Container>
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl font-medium tracking-tight text-white mb-4">
                Ready to join?
              </h2>
              <p className="text-neutral-400 mb-8">
                The Collective membership is available inside the Awareness app.
              </p>
              <Link
                href="/apps/awareness"
                className="inline-flex items-center px-8 py-4 bg-white text-neutral-950 rounded-full font-medium hover:bg-neutral-100 transition-colors"
              >
                Get the App
              </Link>
            </div>
          </FadeIn>
        </Container>
      </div>
    </RootLayout>
  )
}
