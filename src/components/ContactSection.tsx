import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-edge-strong to-transparent" />

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-ink-muted" />
              <span className="font-display text-sm font-medium tracking-widest text-ink-faint uppercase">
                Work With Us
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              Whether you need a custom app, a codebase refactor, or want to collaborate —
              we&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-ink/85"
              >
                <span>Get in touch</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="mailto:nick@feelingmindful.com"
                className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-8 py-4 text-base font-semibold text-ink-muted transition-all hover:border-ink-faint hover:text-ink"
              >
                nick@feelingmindful.com
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
