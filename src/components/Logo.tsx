import clsx from 'clsx'

export function Logomark({
  invert = false,
  className,
}: {
  invert?: boolean
  filled?: boolean
  className?: string
}) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle
        cx="16"
        cy="16"
        r="14"
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
        )}
      />
      <path
        d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
        className={invert ? 'fill-neutral-950' : 'fill-white'}
      />
      <circle
        cx="16"
        cy="16"
        r="3"
        className={invert ? 'fill-neutral-950' : 'fill-white'}
      />
    </svg>
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
