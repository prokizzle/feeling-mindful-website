import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import {
  AppIdentity,
  Arrow,
  CommunityProjects,
} from '@/components/ProductMarketing'
import { visibleApps } from '@/lib/apps'
export const metadata: Metadata = {
  title: 'Our apps',
  description:
    'GoodParts, Simple Rituals, and CardioEngine. Explore the apps and community projects by Feeling Mindful.',
}
export default function AppsPage() {
  return (
    <RootLayout>
      <Container>
        <section className="text-page">
          <h1>
            Thoughtful tools.
            <br />
            Personal beginnings.
          </h1>
          <p className="lead">
            GoodParts is at the heart of Feeling Mindful. Alongside it: daily
            rituals, a way to train, and software built as a gift.
          </p>
          <div className="app-directory">
            {visibleApps.map((app) => (
              <Link key={app.slug} href={`/apps/${app.slug}`}>
                <AppIdentity
                  name={app.name}
                  icon={app.icon}
                  status={
                    app.status === 'Live' ? 'Available now' : 'Coming soon'
                  }
                />
                <p>{app.description}</p>
                <span className="text-link">
                  Explore {app.name} <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <CommunityProjects />
      </Container>
    </RootLayout>
  )
}
