import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Container>
        <FadeIn>
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-sand-100 via-sand-50 to-dawn-50 p-8 sm:p-12 md:p-16 lg:p-20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-dawn-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-80 w-80 rounded-full bg-sage-200/30 blur-3xl" />

            {/* Decorative circles */}
            <div className="absolute right-8 top-8 hidden lg:block">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 rounded-full border-2 border-sand-300/50" />
                <div className="absolute inset-4 rounded-full border-2 border-dawn-300/30" />
                <div className="absolute inset-8 rounded-full border-2 border-sage-300/40" />
              </div>
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand-200/80">
                  <svg className="h-5 w-5 text-sand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <span className="font-display text-sm font-semibold tracking-widest text-sand-700 uppercase">
                  Work With Us
                </span>
              </div>

              <h2 className="font-display text-3xl font-medium tracking-tight text-sage-950 sm:text-4xl lg:text-5xl">
                Need an app built?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-sage-700/80">
                We build thoughtful, well-crafted mobile and web applications.
                From concept to launch, we can help bring your idea to life with
                the same care we put into our own products.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-sage-950 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-sage-900"
                >
                  <span>Get in touch</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="mailto:hello@feelingmindful.com"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-sage-200 bg-white/50 px-8 py-4 text-base font-semibold text-sage-700 transition-all hover:border-sage-300 hover:bg-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>Email us</span>
                </Link>
              </div>

              <div className="mt-12 border-t border-sage-200/50 pt-10">
                <h3 className="font-display text-sm font-semibold tracking-widest text-sage-600 uppercase">
                  Based in
                </h3>
                <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
