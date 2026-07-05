import Link from 'next/link'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export interface ServiceStep {
  number: string
  title: string
  description: string
  detail: string
}

export interface ServiceTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
}

export function StepsGrid({ steps }: { steps: ServiceStep[] }) {
  return (
    <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <FadeIn key={step.number}>
          <div className="group">
            <div className="text-5xl font-extrabold text-ink/15 transition group-hover:text-ink/25">
              {step.number}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {step.description}
            </p>
            <span className="mt-3 inline-block text-xs font-medium text-dawn-700 dark:text-dawn-400">
              {step.detail}
            </span>
          </div>
        </FadeIn>
      ))}
    </FadeInStagger>
  )
}

export function PricingTiers({
  tiers,
  priceSuffix,
  secondaryCtaLabel,
}: {
  tiers: ServiceTier[]
  /** e.g. "starting at" — rendered after the price */
  priceSuffix?: string
  /** CTA label for non-highlighted tiers; highlighted tiers always say "Get Started" */
  secondaryCtaLabel?: string
}) {
  return (
    <FadeInStagger className="mt-16 grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <FadeIn key={tier.name}>
          <div
            className={`relative flex h-full flex-col rounded-2xl border p-8 transition ${
              tier.highlighted
                ? 'border-edge-strong bg-raised-2 shadow-lg shadow-black/20'
                : 'border-edge bg-raised hover:border-edge-strong'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-surface">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
            <p className="mt-1 text-sm text-ink-muted">{tier.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-ink">
                {tier.price}
              </span>
              {priceSuffix && (
                <span className="ml-1 text-sm text-ink-faint">
                  {priceSuffix}
                </span>
              )}
            </div>
            <ul className="mt-8 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-ink-muted"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-faint"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                tier.highlighted
                  ? 'bg-ink text-surface hover:bg-ink/85'
                  : 'border border-edge text-ink-muted hover:bg-raised-2'
              }`}
            >
              {tier.highlighted
                ? 'Get Started'
                : (secondaryCtaLabel ?? 'Get Started')}
            </Link>
          </div>
        </FadeIn>
      ))}
    </FadeInStagger>
  )
}
