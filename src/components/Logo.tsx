import clsx from 'clsx'
import Image from 'next/image'

export function Logomark({
  invert = false,
  className,
}: {
  invert?: boolean
  filled?: boolean
  className?: string
}) {
  return (
    <Image
      src={invert ? '/images/logos/logomark-dark.png' : '/images/logos/logomark-light.png'}
      alt="Feeling Mindful"
      width={32}
      height={32}
      className={className}
    />
  )
}

export function Logo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div className={clsx('flex items-center gap-x-2', className)}>
      <Logomark className="h-8 w-8" invert={invert} />
      <span
        className={clsx(
          'font-display text-xl font-semibold tracking-tight',
          invert ? 'text-white' : 'text-neutral-950',
        )}
      >
        Feeling Mindful
      </span>
    </div>
  )
}
