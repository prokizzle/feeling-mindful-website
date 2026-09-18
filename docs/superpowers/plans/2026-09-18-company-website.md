# GoodParts-led website implementation plan

**Goal:** Implement the approved company website spec in this worktree.
**Spec:** `docs/superpowers/specs/2026-09-18-company-website-design.md`
**Architecture:** Server-rendered Next.js pages share app metadata, product previews, navigation and contact actions. Existing support and legal routes remain intact.
**Stack:** Next.js 15, TypeScript, existing Tailwind and local brand fonts. No new dependencies.
**Execution:** Inline; user approved implementation. No external issue tracker or publication step.

## Completion record

Implemented all sections below. Verification: ESLint, production build (31 routes), and git diff --check passed. Impeccable detector returned no findings for the homepage, shared product components, navigation and layout CSS. Desktop/mobile and light/dark inspection covered the homepage and primary product presentations; mobile menu Escape/focus behavior and beta mailto were checked. Twelve representative routes, including contact, support, product policies and retired services, returned HTTP 200. Fixed mobile headline wrapping and confirmed the production build at 390px without horizontal overflow. Support form submission and email delivery were not exercised; no deployment was performed. The following checklists are the original implementation scope.

## 1. Product evidence and shared assets
- [ ] Verify current app presentation against sibling source, copy current icons and font license, and use clearly labeled interface examples where current screenshots are unavailable.
- [ ] Update `src/lib/apps.ts` with accurate visibility, names, statuses and the shared beta mailto and verified CardioEngine store URL.
- [ ] Add reusable GoodParts and Simple Rituals static previews in `src/components/ProductPreview.tsx` with sample content explicitly labeled.

## 2. Company and product pages
- [ ] Replace `src/app/page.tsx` with GoodParts hero, reflection flow, Simple Rituals feature, CardioEngine, community work and founder note.
- [ ] Rewrite `/apps/good-parts`, `/apps/simple-rituals`, `/apps/cardioengine` and `/apps` with current functionality and honest availability.
- [ ] Make email beta links functional without signup infrastructure. Keep screenshots/examples noninteractive and avoid fake controls in the tab order.

## 3. Shared navigation, contact and discovery
- [ ] Update `RootLayout`, `Footer`, `Logo`, `ContactSection` and contact page; preserve theme selection and provide a keyboard-accessible mobile menu.
- [ ] Replace both obsolete consulting offers with an unavailable-service notice.
- [ ] Align root metadata, sitemap, PRODUCT.md and DESIGN.md with approved positioning and verified design tokens.
- [ ] Ensure focus, contrast, reduced motion and small-screen wrapping in `src/styles/base.css` and shared tokens.

## 4. Verify
- [ ] Run `npm run lint` and `npm run build`; fix errors.
- [ ] Serve locally and inspect desktop/mobile, light/dark, app pages, navigation and beta links. Batch visual corrections and confirm once.
- [ ] Run Impeccable detector once on changed UI, address mechanical findings, and report any validation limitations.
- [ ] Check `git diff --check`, route availability and unintentional changes. Leave deployment to the user.
