import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200',
    invert
      ? 'bg-white text-sage-950 hover:bg-sage-100 hover:shadow-lg hover:shadow-white/10'
      : 'bg-sage-950 text-white hover:bg-sage-800 hover:shadow-lg hover:shadow-sage-950/20',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
