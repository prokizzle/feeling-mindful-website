# Feeling Mindful website design

## Direction

A GoodParts-led editorial app studio following the supplied family branding: large serif statements, warm paper, forest ink, generous spacing and labeled product interface examples. Community gifts have their own section; consulting is not offered.

## Tokens

Colors live in src/styles/tailwind.css; layout and interaction styles in src/styles/base.css. Reuse semantic variables.

| Token             | Light   | Dark    |
| ----------------- | ------- | ------- |
| surface           | #f4f1ec | #1a1e18 |
| raised            | #fbfaf7 | #2a2e28 |
| ink               | #2e3b2a | #e8e4de |
| ink-muted         | #586552 | #b5c0a5 |
| brand-accent-text | #80582f | #c4ad88 |

## Type and layout

Self-hosted DM Serif Display regular for headings; DM Sans 400/500/700 for body and controls. Display sizes cap at 6rem. Layouts collapse to one column below 1024px, with additional spacing adjustments below 600px. Product examples retain their light app surfaces within either website theme.

## Components and behavior

ProductMarketing shares product identity, beta actions, legal links and community sections. ProductPreview recreates the supplied app screens in HTML/CSS, using theme-aware surfaces without the store posters’ backgrounds or marketing headlines. Previews are noninteractive and clearly labeled as sample content. Native details/summary handles mobile navigation with Escape-to-close and focus return. Links have visible focus; reduced-motion preferences disable decorative motion.

## Content

GoodParts comes first, followed by Simple Rituals, CardioEngine and community work. Do not imply GoodParts or Simple Rituals can currently be downloaded. Beta enquiries open the visitor’s email app; no mailing list or checkout exists. Preserve legal text and truthful processing disclosures.
