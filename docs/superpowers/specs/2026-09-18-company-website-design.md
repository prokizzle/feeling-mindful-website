# Feeling Mindful website: GoodParts-led company story

## Approved direction

Feeling Mindful is an app company. GoodParts is its flagship and primary business focus. Simple Rituals is a complementary product that may introduce people to GoodParts. CardioEngine is the founder's first published app, but is secondary in the company story. PlayaOS and Waffles & House are free community projects rooted in Burning Man and gifting; they do not earn the founder money. Consulting is not an active business.

The user approved this homepage direction and the use of nick@feelingmindful.com for GoodParts beta requests on 2026-09-18. This document makes that direction reviewable before implementation.

## Content hierarchy and copy

1. Lead with GoodParts and the headline **“Get to know every part of you.”** Explain it immediately: an IFS-informed voice journal for exploring inner parts and noticing patterns across entries. Identify Feeling Mindful as the company behind it. Show the current product interface prominently.
2. Primary action: **“Request beta access”**, linking to `mailto:nick@feelingmindful.com?subject=GoodParts%20beta%20access`. Supporting text says it opens the visitor's email app; display the address as a fallback. A request does not promise admission or immediate access. Secondary action goes to the GoodParts detail page.
3. Explain the product through three concrete steps: speak an entry, explore the parts that appear, and return to patterns over time. Describe AI observations as prompts for reflection, not diagnoses, clinical conclusions, or guaranteed therapeutic outcomes.
4. Introduce **Simple Rituals** as a complementary daily practice: manageable rituals, flexible priorities, time-of-day windows, gentle reminders, and room to postpone. It is coming soon. Describe morning access as free at launch and the full-day unlock as a one-time purchase; do not invent a price. Link to its detail page.
5. Include a smaller **CardioEngine** feature, marked available now, focused on heart-rate zones, live workout guidance, and iPhone/Apple Watch use. Verify the public store destination before adding a download link. Keep the existing detail route.
6. Group **PlayaOS** and **Waffles & House** under community work. Explain the founder's connection to Burning Man and gifting in plain language. Link to `https://playaos.app` and `https://wafflecamp.com`; acknowledge the published Waffles & House app without presenting the camp as a commercial product owned by Feeling Mindful. Free refers to the software/community work, not camp dues, rentals, or event participation.
7. Close with a short founder note grounded in those supplied facts and accessible support/contact links. Remove pitches for consulting, custom development, and refactoring.

## Approaches considered

- **GoodParts-led company site — selected:** foregrounds the main business while giving complementary apps and community work a clear supporting role.
- **Equal-weight portfolio:** makes all projects visible but dilutes the flagship and exaggerates the importance of side projects.
- **GoodParts-only site:** focuses attention tightly but loses the company's broader identity and repeats the role of the dedicated GoodParts website.

## Product truth

User-confirmed launch status takes precedence over stale repository notes: GoodParts and Simple Rituals are not publicly available; CardioEngine and the Waffles & House mobile app are published.

GoodParts reference: `/Users/nicholasprokesch/repos/feeling-mindful/goodparts/apps/goodparts`. The current experience includes voice entries, recurring parts, people and mentions, cross-entry insights, guided prompts, and privacy controls. Its selectable v1 transcription path is cloud-based; do not advertise on-device transcription as the shipping default. Avoid unsupported universal statements about data handling and link to the existing privacy information.

Simple Rituals reference: `/Users/nicholasprokesch/repos/feeling-mindful/simplerituals`. Verify release feature flags against source before final copy. The documented enabled experience includes signup-free start, personal rituals, morning/afternoon/evening windows, priorities, postponement, a calendar, reminders, and a lifetime full-day unlock. Do not advertise default-disabled packs, statistics, or tab navigation, or repeat old claims about dark mode, swipe completion, streak pressure, and percentage-based unlocks without current implementation evidence.

CardioEngine reference: `/Users/nicholasprokesch/repos/feeling-mindful/bodyengine-ios`. Waffles & House app reference: `/Users/nicholasprokesch/repos/feeling-mindful/wafflecamp/wafflecamp-mobile`. PlayaOS reference: `/Users/nicholasprokesch/repos/feeling-mindful/playa-os`.

## Visual direction

Use the current app repositories as the authority for app-specific identity, supported by the supplied design-system archive. Continue the warm cream, forest, and clay company palette with locally hosted DM Sans and DM Serif Display. Give GoodParts the largest product presentation; Simple Rituals is a related but distinct secondary presentation. Community work may retain its own imagery and branding within the company page.

Replace the earlier generic glowing-journal hero and decorative workbench framing with current product evidence. Prefer verified current screenshots or assets. If a rendered interface example is necessary, base it on inspected components and label sample content clearly; never pass a concept or fabricated journal entry off as a real user's screenshot. Preserve responsive composition, readable light/dark themes, reduced-motion behavior, and visible keyboard focus.

## Implementation scope

- Rewrite the homepage, GoodParts and Simple Rituals detail pages, and app directory around this hierarchy. Refresh CardioEngine's public status and relevant copy.
- Update shared navigation and footer to feature GoodParts, Simple Rituals, other apps, and support. Replace the shared consulting contact section with product/company contact copy appropriate to its callers.
- Update app metadata in the existing shared app data module; keep Becoming One and CutEngine unpromoted.
- Remove consulting from public discovery, including navigation, footer, homepage, and sitemap. Retain the old service URLs with a clear message that consulting is not offered, replacing pricing and booking pitches; no redirect or deletion is needed.
- Update page titles, descriptions, sitemap entries, and PRODUCT.md to match the user-confirmed business. No changes to legal policy substance are part of this marketing rewrite.
- Keep existing Next.js/Tailwind components and route structure where useful. Introduce only small shared components needed by the revised pages; no new framework or CMS.

## Interaction and data flow

The beta CTA is a normal mailto link. No email list, signup database, automated enrollment, backend endpoint, or success screen is introduced. Show the address so a visitor without a configured email app can contact the founder manually. Replace the existing nonexistent GoodParts mailing-list promise and remove obsolete Simple Rituals beta/signup and broken development-support links from its revised marketing page.

Reuse the existing support portal. The current contact form lacks a submission handler; the redesigned contact page should use clear email and support links rather than offer a form that cannot deliver messages. Store links appear only when their exact product destinations are verified. A future preorder CTA can replace the beta link after a real listing is available; do not build speculative preorder infrastructure now.

## Verification and acceptance

- Homepage visibly leads with GoodParts and the approved beta action; both upcoming apps are labeled accurately.
- CardioEngine and Waffles & House are represented as published, with community work clearly separated from commercial offers.
- No promoted consulting, fabricated testimonials, launch dates, performance claims, or unsupported features.
- Check every new internal destination, mailto subject/address, and verified external product link. Confirm old service pages no longer solicit consulting.
- Run lint and production build, and check changed routes at desktop and mobile widths, light/dark appearance, menu behavior, keyboard focus, and reduced motion.
- Reconcile screenshots and written claims against the app source; do not launch or modify sibling apps or their backend data to obtain marketing evidence.
- Inspect once, batch corrections, and confirm once. Report any verification limits honestly.

## Publication boundary

This work prepares and verifies local website changes. Deployment, store preorders, email-list setup, and sending beta emails are not part of this implementation.
