import Link from 'next/link'
import { Container } from '@/components/Container'
import { Arrow } from '@/components/ProductMarketing'
export function ContactSection() {
  return (
    <section className="contact-section">
      <Container>
        <div>
          <h2>
            A question, a thought,
            <br />a hello.
          </h2>
          <p>
            Have a question about an app or something you’d like to share? I’d
            love to hear from you.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:nick@feelingmindful.com" className="text-link">
            nick@feelingmindful.com <Arrow />
          </a>
          <Link href="/support" className="text-link">
            Get app support <Arrow />
          </Link>
        </div>
      </Container>
    </section>
  )
}
