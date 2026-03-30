---
name: add-app
description: Add a new app to the Feeling Mindful portfolio website. Creates app page, privacy policy, updates apps.ts config, and verifies build.
disable-model-invocation: true
---

# Add App to Portfolio

Add a new app to the Feeling Mindful website portfolio.

## Arguments
- App name (e.g., "MomCare")
- App slug (e.g., "momcare")
- Domain: "mindfulness" or "fitness"
- One-line description
- Status: "Live", "Beta", or "Coming Soon"
- Icon path (check the iOS project xcassets first)

## Steps

1. **Update `src/lib/apps.ts`** — Add the app to the `apps` array with all metadata (name, slug, description, status, domain, icon, gradient, bgGlow)

2. **Create app page** at `src/app/apps/<slug>/page.tsx`:
   - Import `SUPPORT_URL` from `@/lib/apps` and `ProductlaneButton` from `@/components/ProductlaneWidget`
   - Match the pattern of existing app pages (hero with icon + status badge, dark section, features, cross-links)
   - Use sage palette (not neutral-950)
   - Include ProductlaneButton for "Request Early Access" and "Give Feedback"

3. **Create privacy policy** at `src/app/apps/<slug>/privacy/page.tsx`:
   - Use the shared `PrivacyPolicy` component
   - Pass app-specific props: dataCollected, thirdPartyServices, healthData (if applicable), devicePermissions

4. **Copy app icon** from the iOS project's xcassets to `public/icons/<slug>-icon.png`
   - Check: `find /Users/nicholasprokesch/repos/feeling-mindful -path "*.xcassets/AppIcon*" | grep -i <appname>`
   - Use the 1024x1024 version
   - If no icon exists, note it needs to be created

5. **Verify build** — Run `npm run build` and confirm all routes generate

6. **Commit** with message: `feat: add <AppName> to portfolio`
