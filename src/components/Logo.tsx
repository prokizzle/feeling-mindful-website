import clsx from 'clsx'
import Image from 'next/image'

export function Logomark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logos/fm-logomark.png"
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
}) {
  return (
    <div className={clsx('flex items-center gap-x-3', className)}>
      <Logomark className="h-10 w-10" />
      <span
        className={clsx(
          'font-display text-2xl font-semibold tracking-tight',
          invert ? 'text-white' : 'text-ink',
        )}
      >
        Feeling Mindful
      </span>
    </div>
  )
}
