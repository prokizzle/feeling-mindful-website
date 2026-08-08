'use client'

import Image from 'next/image'
import { type FormEvent, useMemo, useState } from 'react'

import { Container } from '@/components/Container'
import { apps } from '@/lib/apps'
import { supportCategories } from '@/lib/support'

const faqs = [
  {
    question: 'How do I restore my subscription?',
    answer:
      'Open the app settings and choose Restore Purchases while signed into the Apple ID that made the purchase. You will not be charged again.',
  },
  {
    question: 'My Apple Health data is not appearing',
    answer:
      'In iPhone Settings, open Privacy & Security, then Health, select the app, and confirm the requested read permissions are enabled.',
  },
  {
    question: 'How do I protect or export my data?',
    answer:
      'Your app settings show the export and privacy controls available for that product. For an account copy or deletion, select Delete my data below.',
  },
  {
    question: 'Can I suggest a feature?',
    answer:
      'Yes. Choose Share feedback in the request form. Your note goes directly to our support team with the selected app attached.',
  },
]

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'success'; confirmationSent: boolean; reference?: string }
  | { kind: 'error'; message: string }

export function SupportPortal({
  initialApp,
  initialCategory,
}: {
  initialApp?: string
  initialCategory?: string
}) {
  const [selectedApp, setSelectedApp] = useState(initialApp ?? apps[0].slug)
  const [category, setCategory] = useState(
    supportCategories.some(({ value }) => value === initialCategory)
      ? initialCategory!
      : 'help',
  )
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const filteredFaqs = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return faqs
    return faqs.filter(({ question, answer }) =>
      `${question} ${answer}`.toLowerCase().includes(normalized),
    )
  }, [query])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus({ kind: 'sending' })
    const form = event.currentTarget
    const response = await fetch('/api/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null)
    const result = (await response?.json().catch(() => null)) as {
      confirmationSent?: boolean
      error?: string
      reference?: string
    } | null

    if (!response?.ok) {
      setStatus({
        kind: 'error',
        message:
          result?.error ??
          'We could not send this request. Please email support@feelingmindful.com.',
      })
      return
    }

    setStatus({
      kind: 'success',
      reference: result?.reference,
      confirmationSent: result?.confirmationSent !== false,
    })
    form.reset()
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-edge bg-raised-2/50 py-20 sm:py-28">
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sage-300/20 blur-3xl" />
        <Container className="relative text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-edge bg-raised px-3 py-1 text-xs font-medium text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
            Human support from the people building the apps
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
            Find a quick answer or send a note straight to our support team. We
            typically reply within two business days.
          </p>
          <label className="mx-auto mt-9 flex max-w-xl items-center gap-3 rounded-2xl border border-edge-strong bg-raised px-5 shadow-sm transition focus-within:border-sage-500 focus-within:ring-4 focus-within:ring-sage-200/30">
            <span className="text-xl text-ink-faint" aria-hidden="true">
              ⌕
            </span>
            <span className="sr-only">Search help articles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search common questions…"
              className="min-w-0 flex-1 bg-transparent py-4 text-base text-ink outline-none placeholder:text-ink-faint"
            />
          </label>
        </Container>
      </section>

      <Container className="py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
          <aside>
            <p className="text-xs font-semibold tracking-widest text-sage-700 uppercase dark:text-sage-300">
              Quick answers
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              Start here
            </h2>
            <div className="mt-7 divide-y divide-edge border-y border-edge">
              {filteredFaqs.map(({ question, answer }) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:hidden">
                    {question}
                    <span
                      aria-hidden="true"
                      className="text-xl text-ink-faint transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-6 text-ink-muted">
                    {answer}
                  </p>
                </details>
              ))}
              {filteredFaqs.length === 0 && (
                <p className="py-5 text-sm text-ink-muted">
                  No quick answer found. Send us the details and we&apos;ll
                  help.
                </p>
              )}
            </div>
            <div className="mt-8 rounded-2xl border border-edge bg-raised-2 p-5">
              <p className="text-sm font-semibold text-ink">Prefer email?</p>
              <a
                href="mailto:support@feelingmindful.com"
                className="mt-1 block text-sm text-ink-muted underline decoration-edge-strong underline-offset-4 hover:text-ink"
              >
                support@feelingmindful.com
              </a>
            </div>
          </aside>

          <section id="contact-support" className="scroll-mt-28">
            <p className="text-xs font-semibold tracking-widest text-sage-700 uppercase dark:text-sage-300">
              Contact support
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              Tell us what&apos;s going on
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Your request is sent directly to Feeling Mindful Support with the
              selected app attached.
            </p>

            {status.kind === 'success' ? (
              <div
                className="mt-8 rounded-3xl border border-sage-300 bg-sage-100/60 p-8 dark:border-sage-800 dark:bg-sage-950/50"
                role="status"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-600 text-xl text-white">
                  ✓
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  Your request is in the right hands.
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">
                  {status.confirmationSent
                    ? 'Check your email for confirmation. '
                    : 'Your confirmation email was delayed, but the request was received. '}
                  {status.reference && (
                    <>Keep reference {status.reference} for your records.</>
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus({ kind: 'idle' })}
                  className="mt-6 text-sm font-semibold text-ink underline underline-offset-4"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-7">
                <fieldset>
                  <legend className="text-sm font-semibold text-ink">
                    Which app?
                  </legend>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {apps.map((app) => (
                      <label
                        key={app.slug}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-3 transition ${
                          selectedApp === app.slug
                            ? 'border-sage-500 bg-sage-100/50 ring-2 ring-sage-200/50 dark:bg-sage-950/40'
                            : 'border-edge bg-raised hover:border-edge-strong'
                        }`}
                      >
                        <input
                          type="radio"
                          name="app"
                          value={app.slug}
                          checked={selectedApp === app.slug}
                          onChange={() => setSelectedApp(app.slug)}
                          className="sr-only"
                        />
                        <Image
                          src={app.icon}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9 rounded-lg"
                        />
                        <span className="min-w-0 text-sm font-medium text-ink">
                          {app.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="text-sm font-semibold text-ink">
                    What can we help with?
                  </span>
                  <select
                    name="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-edge-strong bg-raised px-4 py-3 text-ink outline-none focus:border-sage-500 focus:ring-4 focus:ring-sage-200/30"
                  >
                    {supportCategories.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <Field
                  label="Subject"
                  name="subject"
                  maxLength={160}
                  required
                />
                <label className="block">
                  <span className="text-sm font-semibold text-ink">
                    Details
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    maxLength={10000}
                    required
                    placeholder="What happened, what did you expect, and what have you tried?"
                    className="mt-2 w-full resize-y rounded-xl border border-edge-strong bg-raised px-4 py-3 text-ink outline-none placeholder:text-ink-faint focus:border-sage-500 focus:ring-4 focus:ring-sage-200/30"
                  />
                </label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="App version (optional)"
                    name="appVersion"
                    maxLength={50}
                    placeholder="e.g. 1.4.2"
                  />
                  <Field
                    label="Device / OS (optional)"
                    name="device"
                    maxLength={100}
                    placeholder="e.g. iPhone 17, iOS 26"
                  />
                </div>
                <label className="absolute -left-[9999px]" aria-hidden="true">
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>

                {status.kind === 'error' && (
                  <p
                    className="rounded-xl border border-dawn-300 bg-dawn-50 p-4 text-sm text-dawn-900 dark:border-dawn-800 dark:bg-dawn-950 dark:text-dawn-100"
                    role="alert"
                  >
                    {status.message}
                  </p>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-ink-faint">
                    Please do not include passwords, payment details, or private
                    journal content.
                  </p>
                  <button
                    type="submit"
                    disabled={status.kind === 'sending'}
                    className="inline-flex min-w-36 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-surface transition hover:bg-ink/85 disabled:cursor-wait disabled:opacity-60"
                  >
                    {status.kind === 'sending' ? 'Sending…' : 'Send request'}
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </Container>
    </>
  )
}

function Field({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-edge-strong bg-raised px-4 py-3 text-ink outline-none placeholder:text-ink-faint focus:border-sage-500 focus:ring-4 focus:ring-sage-200/30"
      />
    </label>
  )
}
