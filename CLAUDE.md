## Stack
Next.js 15 + React 19 + Tailwind CSS v4 + Framer Motion + Firebase + TypeScript

## Build
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Architecture
- App config: `src/lib/apps.ts` (single source of truth for all app metadata)
- Color palette: sage, sand, dawn, dusk (defined in `src/styles/tailwind.css` @theme)
- Components: `src/components/` (shared), pages in `src/app/`
- Feedback: Productlane widget (`ProductlaneWidget` component, key in code, signing key in Vercel env)
- Privacy: Shared `PrivacyPolicy` component, per-app data passed as props
- Support: support.feelingmindful.com (Productlane portal)
- Logo: FM continuous-line logomark at `public/images/logos/fm-logomark.png`

## Apps (5)
- **Mindfulness**: Good Parts (IFS journaling), Becoming One (IFS meditation), Simple Rituals (routines)
- **Fitness**: CutEngine (ML fat loss), CardioEngine (HR zone training)
- App icons sourced from their respective iOS project xcassets in the monorepo

## Legal
- NEVER reference Shanks Awareness Training — legal restriction, completely removed
- Privacy policies use shared component with app-specific props

## Deployment
- Push to main auto-deploys to Vercel (feelingmindful.com)
- Vercel org: feeling-mindful
- DNS managed in Vercel (migrated from Route53)

## Code Conventions
- Use `const` not `let`
- Escape entities in JSX (`&apos;` not `'`)
- Use sage palette for new pages (not neutral-950)
- Run `npm run build` before committing — build must pass
