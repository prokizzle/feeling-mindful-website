import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: string; name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-zinc-900 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-zinc-800 stroke-zinc-700/20"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              <p className="sm:before:absolute sm:before:right-full">
                &quot;{children}&quot;
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <Image
                src={client.logo}
                alt={client.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-display text-base font-semibold text-white">
                {client.name}
              </span>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
