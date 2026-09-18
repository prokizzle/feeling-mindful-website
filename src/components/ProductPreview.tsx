import Image from 'next/image'

export function GoodPartsPreview() {
  return (
    <figure className="product-preview">
      <div className="app-study">
        <div className="study-brand">
          <Image
            src="/icons/good-parts-icon.png"
            alt=""
            width={32}
            height={32}
          />
          <span>GoodParts</span>
        </div>
        <p className="study-greeting">Hello, friend.</p>
        <p className="study-muted">A little space for what’s here.</p>
        <div className="study-record">
          <p className="study-prompt">
            Speak freely.
            <br />
            I’ll listen.
          </p>
          <span className="study-mic" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="9" y="3" width="6" height="12" rx="3" />
              <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" />
            </svg>
          </span>
          <p className="study-muted">or type instead</p>
        </div>
        <div className="study-thread">
          <p className="study-muted">Continue yesterday’s thread</p>
          <p>What did the Manager need you to know?</p>
        </div>
        <p className="study-title">Your journal</p>
        <div className="study-filters">
          <span>All</span>
          <span>Manager</span>
          <span>Exile</span>
          <span>Firefighter</span>
        </div>
        <p className="study-journal">
          “Part of me wants to say yes. Another part needs a little room.”
        </p>
        <div className="study-tabs">
          <span>Journal</span>
          <span>Parts</span>
          <span>Mentions</span>
          <span>Insights</span>
        </div>
      </div>
      <figcaption>GoodParts · Recreated preview with sample content</figcaption>
    </figure>
  )
}

export function RitualsPreview() {
  return (
    <figure className="product-preview">
      <div className="app-study ritual-study">
        <div className="study-brand">
          <Image
            src="/icons/simple-rituals-icon.png"
            alt=""
            width={32}
            height={32}
          />
          <span>Simple Rituals</span>
        </div>
        <div className="study-periods">
          <span>Morning</span>
          <span>Afternoon</span>
          <span>Evening</span>
        </div>
        <div className="study-progress">
          <span>Morning</span>
          <span>1 of 4</span>
        </div>
        <div className="study-track" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="study-next">
          <p className="study-muted">Next ritual · Must</p>
          <p className="study-prompt">
            Ten slow breaths<span className="study-dot">.</span>
          </p>
          <p className="study-muted">
            <em>before the phone · scheduled for 07:00</em>
          </p>
          <div className="study-complete">
            Complete ritual{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          </div>
          <p className="study-muted">
            Then <span>Step outside briefly</span>
          </p>
        </div>
        <div className="study-ritual-row">
          <span className="study-muted">Must · Non-negotiable</span>
          <p className="study-done">Glass of water</p>
          <p>Ten slow breaths</p>
        </div>
        <div className="study-ritual-row">
          <span className="study-muted">Should · Want to, most days</span>
          <p>Step outside briefly</p>
        </div>
        <div className="study-ritual-row">
          <span className="study-muted">Could · If time allows</span>
          <p>Journal one sentence</p>
        </div>
      </div>
      <figcaption>
        Simple Rituals · Recreated preview with sample content
      </figcaption>
    </figure>
  )
}
