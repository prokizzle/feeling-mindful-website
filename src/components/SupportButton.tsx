import Link from 'next/link'

export function SupportButton({
  app,
  category,
  className,
  children,
}: {
  app: string
  category: 'beta' | 'feedback'
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={`/support?app=${encodeURIComponent(app)}&type=${category}#contact-support`}
      className={className}
    >
      {children}
    </Link>
  )
}
