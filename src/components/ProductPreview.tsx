import Image from 'next/image'

export function GoodPartsPreview() {
  return (
    <figure className="product-preview">
      <Image
        src="/images/apps/goodparts-journal.png"
        alt="GoodParts voice journal: speak freely or type an entry, revisit a journal thread, and explore Journal, Parts, Mentions and Insights."
        width={1290}
        height={2796}
        sizes="(max-width: 600px) calc(100vw - 48px), 360px"
        priority
      />
      <figcaption>GoodParts · App preview</figcaption>
    </figure>
  )
}

export function RitualsPreview() {
  return (
    <figure className="product-preview">
      <Image
        src="/images/apps/simple-rituals-morning.png"
        alt="Simple Rituals morning view: Ten slow breaths is the next ritual, with completion and postponement controls and Must, Should and Could priorities."
        width={1290}
        height={2796}
        sizes="(max-width: 600px) calc(100vw - 48px), 360px"
      />
      <figcaption>Simple Rituals · App preview</figcaption>
    </figure>
  )
}
