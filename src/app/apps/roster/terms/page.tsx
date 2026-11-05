import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

// DRAFT for Nick (goodparts-lng1). Subscription terms follow apps/roster decision 003 and the
// App Store listing draft; prices and the trial are not final until the products exist in ASC.

export const metadata: Metadata = {
  title: 'Terms of Use - The Roster Journal',
  description: 'Terms of use for The Roster Journal app by Feeling Mindful Labs',
}

export default function RosterTermsPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <article className="prose max-w-3xl mx-auto">
            <h1>The Roster Journal Terms of Use</h1>
            <p className="lead">
              <strong>Last updated: November 5, 2026</strong>
            </p>
            <p>
              These terms govern your use of The Roster Journal app provided by
              Feeling Mindful Labs LLC.
            </p>

            <h2>Use of the App</h2>
            <p>
              The Roster Journal is a private journal for your dating life. You
              write notes about your week, the app keeps a roster of the people
              you write about under nicknames, and it can turn each week into a
              short episode. It is provided as-is for personal use.
            </p>

            <h2>Your Notes</h2>
            <p>
              Your notes, roster, and episodes are stored only on your phone and
              are left out of iCloud backups. We do not have a copy, so we cannot
              restore them if you lose or replace your phone or delete the app.
              Your notes belong to you. See the{' '}
              <Link href="/apps/roster/privacy">privacy policy</Link> for what
              leaves your phone.
            </p>

            <h2>Writing About Other People</h2>
            <p>
              Your notes are about real people. Keep what you share with others,
              including episodes you send from the app, respectful of them. The
              app replaces first names with nicknames in what it writes, but you
              are responsible for what you choose to share.
            </p>

            <h2>Roster Episodes</h2>
            <p>
              Weekly episodes require Roster Episodes, an auto-renewing
              subscription offered monthly or annually through the Apple App
              Store. The annual plan starts with a 1-week free trial. Payment is
              charged to your Apple Account when you confirm the purchase. The
              subscription renews automatically at the same price and period
              unless you cancel it at least 24 hours before the end of the
              current period. Manage or cancel it in your Apple Account settings.
              Restore Purchases in the app carries an active subscription to a new
              install. Purchases are subject to Apple’s terms, and refund
              requests go to Apple.
            </p>

            <h2>Episodes Are Generated</h2>
            <p>
              Episodes are written by Apple Intelligence from a summary of your
              week. They can be wrong, and they are for fun. They are not advice
              about anyone you are seeing.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Roster Journal app, including its design and code, is owned by
              Feeling Mindful Labs. Your notes belong to you.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The Roster Journal is a journaling tool, not relationship, medical,
              or professional advice. We make no guarantees about results from
              using the app.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms. Continued use of the app constitutes
              acceptance of updated terms.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@feelingmindful.com">legal@feelingmindful.com</a>.
              For help with the app, visit{' '}
              <Link href="/support?app=roster">support</Link>.
            </p>

            <hr />
            <p className="text-sm text-neutral-500">
              See also: <Link href="/terms">General Terms of Service</Link>
            </p>
          </article>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
