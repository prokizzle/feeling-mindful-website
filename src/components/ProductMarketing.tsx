import Image from 'next/image'
import Link from 'next/link'
import { BETA_EMAIL, GOODPARTS_BETA_URL } from '@/lib/apps'

export function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  )
}

export function BetaAction() {
  return (
    <div className="beta-action">
      <a href={GOODPARTS_BETA_URL} className="action-primary">
        Request beta access <Arrow />
      </a>
      <p>
        Opens your email app. You can also write to{' '}
        <a href={`mailto:${BETA_EMAIL}`}>{BETA_EMAIL}</a>.
      </p>
    </div>
  )
}

export function AppIdentity({
  name,
  icon,
  status,
}: {
  name: string
  icon: string
  status: string
}) {
  return (
    <div className="app-identity">
      <Image src={icon} alt="" width={48} height={48} />
      <span>{name}</span>
      <span className="app-status">{status}</span>
    </div>
  )
}

export function GoodPartsSteps() {
  return (
    <div className="product-steps">
      {[
        [
          'Say what’s on your mind.',
          'Start with a prompt or speak freely. GoodParts turns your recording into a journal entry you can return to.',
        ],
        [
          'Meet the parts that show up.',
          'Explore recurring inner voices, the roles they play, and the people and situations that bring them forward.',
        ],
        [
          'Notice what connects.',
          'Return to insights drawn across your entries. Find a thread worth exploring, then follow it in your next reflection.',
        ],
      ].map(([title, copy]) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>
      ))}
    </div>
  )
}

export function CommunityProjects() {
  return (
    <section className="community-section" id="community">
      <div className="section-heading">
        <h2>
          Some things are
          <br />
          built to be given.
        </h2>
        <p>
          Burning Man and the spirit of gifting are part of this story, too.
          These are tools and websites I’ve built for the communities I’m part
          of, from camp planning to staying connected.
        </p>
      </div>
      <div className="community-projects">
        <a href="https://playaos.app">
          <h3>
            PlayaOS <Arrow />
          </h3>
          <p>
            Software for the work of running a camp: bringing members, planning,
            and administration together.
          </p>
          <span>Visit PlayaOS</span>
        </a>
        <a href="https://wafflecamp.com">
          <h3>
            Waffles &amp; House <Arrow />
          </h3>
          <p>
            A website and published mobile app for our Burning Man camp. A place
            for campmates to prepare, participate, and stay connected.
          </p>
          <span>Explore the camp &amp; app</span>
        </a>
        <a href="https://brcpickleballclub.com">
          <h3>
            BRC Pickleball Club <Arrow />
          </h3>
          <p>
            The website I built for the camp I joined at Burning Man in 2026. A
            home for the camp’s plans, practical details, and community.
          </p>
          <span>Visit the camp website</span>
        </a>
      </div>
      <p className="community-note">
        PlayaOS and Waffles &amp; House are free software gifts. Camp dues,
        rentals, and participation costs are separate.
      </p>
    </section>
  )
}

export function ProductLegal({
  slug,
  terms = false,
}: {
  slug: string
  terms?: boolean
}) {
  return (
    <nav className="product-legal" aria-label="Product policies">
      <Link href={`/apps/${slug}/privacy`}>Privacy policy</Link>
      {terms && <Link href={`/apps/${slug}/terms`}>Terms of service</Link>}
      <Link href={`/support?app=${slug}`}>App support</Link>
    </nav>
  )
}
