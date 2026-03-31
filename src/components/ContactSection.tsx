import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-zinc-400" />
              <span className="font-display text-sm font-medium tracking-widest text-zinc-500 uppercase">
                Work With Us
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              Whether you need a custom app, a codebase refactor, or want to collaborate —
              we&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-zinc-950 transition-all hover:bg-zinc-100"
              >
                <span>Get in touch</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="mailto:nick@feelingmindful.com"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
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
