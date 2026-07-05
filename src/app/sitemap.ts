import { type MetadataRoute } from 'next'

const BASE_URL = 'https://feelingmindful.com'

// Hidden app pages and /the-collective stay live at their URLs but are
// intentionally excluded here while those products are unannounced.
const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/apps', priority: 0.9 },
  { path: '/apps/good-parts', priority: 0.9 },
  { path: '/services/refactor', priority: 0.7 },
  { path: '/services/hermes', priority: 0.7 },
  { path: '/contact', priority: 0.6 },
  { path: '/support', priority: 0.5 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/data-deletion', priority: 0.3 },
  { path: '/apps/good-parts/privacy', priority: 0.3 },
  { path: '/apps/good-parts/terms', priority: 0.3 },
  { path: '/apps/becoming-one/privacy', priority: 0.3 },
  { path: '/apps/simple-rituals/privacy', priority: 0.3 },
  { path: '/apps/simple-rituals/terms', priority: 0.3 },
  { path: '/apps/cutengine/privacy', priority: 0.3 },
  { path: '/apps/cardioengine/privacy', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority,
  }))
}
