# Product Marketing Context — Feeling Mindful Labs LLC

*Last updated: 2026-07-05*

## Current Posture (2026-07) — READ FIRST
All apps are pre-launch. **Good Parts is the flagship and only publicly visible app** (shipping soon, exiting beta with consumer IAP). Becoming One, Simple Rituals, CutEngine, and CardioEngine are stealth-hidden on the website (pages live at their URLs, unlinked, out of the sitemap) — do not market them publicly until unhidden. CutEngine is parked (low adoption, strong competitor in MacroFactor). The fitness line is paused, not dead — keep the "mind and body" tagline but do not elaborate on fitness in public copy. "The Collective" is not a real concept (internal agent org is "The Split", internal-only — never market it). Revenue focus (next 90 days): GoodParts IAP + Hermes AI Consulting. **Refactor Service demoted 2026-07-05** — in the penalty box ("planned, not actively marketed"); page stays live at /services/refactor but is out of nav/footer/homepage/sitemap, reachable only via the Hermes cross-sell. One marketed service line per audience; capability folds into The Split when that opens for clients.

**GoodParts pricing (decided 2026-07-02, wiki/concepts/goodparts-landing-page.md):** Free tier 10 entries/mo; GoodParts Pro $4.99/mo or $35.99/yr; deliberately NO lifetime purchase (AI analysis costs scale per entry — annual saves 40%). NOTE: RevenueCat still has a lifetime product configured; needs reconciliation before launch.
**GoodParts launch web presence:** standalone landing page planned at goodparts.app (separate Next.js site, app's own warm palette DM Serif/DM Sans, Apple Smart App Banner app-id 6757692886) — see wiki/concepts/goodparts-landing-page.md and goodparts-gtm.md. feelingmindful.com/apps/good-parts stays the corporate page.

## Product Overview
**One-liner:** An indie iOS studio building IFS-informed tools for self-understanding — starting with Good Parts, voice journaling that discovers your parts.
**What it does:** Feeling Mindful Labs builds IFS-informed mindfulness apps (voice journaling, guided meditation, daily routines) with a parked data-driven fitness line, plus two B2B service lines: the Refactor Service (turning vibe-coded apps into production iOS software) and Hermes AI Consulting (Slack-native AI agents for small businesses).
**Product category:** Wellness tech / Dev services / AI consulting
**Product type:** Native iOS apps (consumer) + contract services (B2B)
**Business model:** Freemium subscriptions + lifetime IAP for apps (RevenueCat); fixed-price refactoring tiers ($3K/$7.5K/$20K); Hermes consulting tiers ($750 Quick Start / $2,000 Business Ops / $4,500 Full Stack + $300–800/mo retainer)
**Tagline:** Mindful AI. Real software. · **Philosophy:** Technology in service of you
**Positioning (wiki-canonical, 2026-06-30):** AI-native development studio shipping cross-platform apps, SaaS platforms, and autonomous business agents — grounded in clinical research, powered by a 13-agent dev team (The Split, internal).

## Target Audience

Three distinct audiences:

**1. Mindfulness seekers (consumer)**
Broadly spiritual people drawn to yoga, breathwork, journaling, therapy. IFS-curious or actively in IFS therapy. Want tools that feel premium and intentional, not clinical or gamified. Age 25-45, skew female, iPhone users.

**2. Serious fitness enthusiasts (consumer) — PARKED (fitness line paused; do not target until CutEngine/CardioEngine return)**
Intermediate-to-advanced lifters doing intentional fat loss phases (cuts). Track workouts, wear Apple Watch, want data-driven nutrition guidance — not generic "eat less" advice. Age 22-40, skew male, performance-oriented. Includes natural lifters, TRT users, GLP-1 users, competitive bodybuilders.

**3. Founders/CTOs with vibe-coded apps (B2B)**
Solo founders or small teams who used AI (Cursor, Copilot, Claude) to build an MVP mobile app. It works but the code is messy, the UI isn't polished, and they're embarrassed to submit to the App Store. Need someone to turn their prototype into production software.

**4. Small business owners wanting AI leverage (B2B — Hermes AI Consulting)**
SMB owners who hear about AI daily but have no technical staff. Want practical automation (intake, scheduling, follow-ups, reporting) inside tools they already use — especially Slack. Buy outcomes, not technology. Entry at $750 lowers commitment risk; retainer keeps agents maintained.

**Primary use cases:**
- Understand my inner world through IFS-guided journaling and meditation
- Optimize my cut with daily-adjusted calorie targets from real HealthKit data
- Turn my AI-generated app prototype into something I'm proud to ship

**Jobs to be done:**
- "Help me understand why I feel the way I feel" (mindfulness)
- "Tell me exactly what to eat today based on MY body" (fitness)
- "Make my app look and work like a funded startup built it" (refactor)

## Problems & Pain Points

**Mindfulness audience:**
- Meditation apps feel generic — Headspace is hand-holding, Insight Timer is just a timer
- No apps combine IFS therapy concepts with meditation in a meaningful way
- Voice journaling exists but nothing identifies IFS parts automatically
- Routine apps are too complex or too simplistic

**Fitness audience:**
- Calorie calculators give a static number on day 1 and never adjust
- Plateaus despite "doing everything right" — the calculator is wrong, not the dieter
- No app accounts for recovery, biofeedback, or enhancement status (TRT, GLP-1)
- HR zone apps don't support Bluetooth HR monitors alongside Apple Watch

**Refactor audience:**
- AI got them 80% of the way but the last 20% is architecture, edge cases, and polish
- Can't afford a full-time senior dev but need production-quality code
- Current code is fragile — adding features breaks existing ones
- Embarrassed to show investors or submit to App Store review

**What it costs them:** Stalled personal growth (mindfulness), stalled body composition progress (fitness), stalled business (refactor)

**Emotional tension:** "Am I doing this right?" — uncertainty across all three audiences

## Competitive Landscape

**Mindfulness:**
- **Direct:** Headspace, Calm — too generic, no IFS awareness, gamified
- **Secondary:** Insight Timer — just a timer, no guided IFS content
- **Indirect:** Working with an IFS therapist ($150-300/session) — expensive, limited availability

**Fitness:**
- **Direct:** MacroFactor — good adaptation but no biofeedback safety, no enhancement-tier awareness
- **Secondary:** RP Diet — rigid plans, not adaptive to daily HealthKit data
- **Indirect:** Hiring a nutrition coach ($150-300/mo)

**Refactor:**
- **Direct:** Toptal/Upwork freelancers — inconsistent quality, no fixed pricing, project management overhead
- **Secondary:** Consulting firms — $200-400/hr, overkill for MVP cleanup
- **Indirect:** Learning to refactor yourself — months of learning, opportunity cost

## Differentiation
**Key differentiators:**
- IFS-native: only app suite built specifically around Internal Family Systems therapy
- HealthKit-first: Apple Watch data flows in automatically, no manual logging for fitness apps
- ML-adaptive: calorie targets adjust daily based on YOUR metabolic response
- Biofeedback safety: 6-signal recovery system auto-protects during aggressive cuts
- Fixed-price refactoring: transparent pricing, no hourly billing surprises
- Solo founder with 16+ products: battle-tested across many domains, not a first-time builder

**How we do it differently:** Deep platform integration (HealthKit, SwiftUI, Swift 6) + domain expertise (IFS therapy, exercise science) + lean tooling (one person, AI-augmented workflows)

**Why customers choose us:** Premium iOS-native quality from someone who actually uses these tools daily

## Objections
| Objection | Response |
|-----------|----------|
| "Why use multiple apps instead of one?" | Each app does one thing well. GoodParts for journaling, Becoming One for meditation, CutEngine for cutting. They share an account and cross-link but each stands alone. |
| "I can use MyFitnessPal for free" | MFP gives you a static number. CutEngine adapts every day from your Apple Watch data. After 2 weeks your MFP target is wrong — CutEngine's is still right. |
| "Why trust a solo developer?" | 16+ shipped products, battle-tested architecture patterns. You get senior-level quality without agency overhead. Every line of code is mine — no handoffs, no telephone game. |
| "$7,500 for a refactor seems expensive" | Compare it to 3 months of a junior dev salary ($15-20K) who might introduce new problems. Fixed scope, fixed price, and you own every line of code. |

**Anti-persona:**
- Meditation beginners who want guided hand-holding (that's Headspace)
- Casual dieters who want "eat less" advice without tracking (that's Noom)
- Enterprises needing team-scale consulting (we're a solo studio)

## Switching Dynamics
**Push:** Frustration with generic tools that don't understand your context (whether that's IFS parts, metabolic adaptation, or a vibe-coded codebase)
**Pull:** "Finally, something built for people like me" — specificity and expertise
**Habit:** Comfort with current apps (Headspace subscription, MFP food database, "it kinda works" codebase)
**Anxiety:** "Will a small studio actually support this long-term?" — mitigated by transparency, open roadmap (Productlane), and responsive support

## Customer Language
**How they describe the problem:**
- "I feel like my meditation app doesn't really get what I'm working on in therapy"
- "My calories worked for the first few weeks then I stalled"
- "AI wrote most of my app but now I'm stuck — I can't refactor it myself"
- "I feel like crap but the scale isn't moving"
- "My app works but it looks like a prototype"

**How they describe us:**
- "It's like they built this specifically for IFS people"
- "It actually adjusts based on my Apple Watch data"
- "They turned my janky prototype into something I'm proud of"

**Words to use:** parts work, Self energy, integration, IFS, practice, cut, deficit, macros, refeed, recovery, adaptation, refactor, production-ready, ship
**Words to avoid:** diet (too generic), weight loss (we say fat loss/body composition), cheat day (we say refeed), guru, enlightenment, zen, hustle, disrupt

**Glossary:**
| Term | Meaning |
|------|---------|
| IFS | Internal Family Systems — evidence-based therapy model that views the mind as naturally multiple |
| Parts | In IFS, the sub-personalities that make up your inner world (protectors, exiles, managers) |
| Self | In IFS, the core of a person — calm, curious, compassionate, connected |
| Cut | Intentional fat loss phase with controlled calorie deficit |
| TDEE | Total Daily Energy Expenditure — calories your body burns in a day |
| Refeed | Planned higher-calorie day to support recovery during a cut |
| Vibe-coded | App built primarily with AI assistance (Cursor, Copilot, Claude) with minimal manual architecture |

## Brand Voice
**Tone:** Knowledgeable, direct, grounded — like a friend who happens to be an expert. Not corporate, not woo-woo, not bro-science.
**Style:** Technical when it matters (fitness data, architecture), warm when it matters (mindfulness, inner work). Never condescending. Respects the user's intelligence.
**Personality:** Precise, protective, intentional, quietly confident, builder-minded

## Proof Points
**Metrics:** Pre-launch phase — building credibility through product quality and transparent development
**Customers:** Beta testers via TestFlight, Productlane feedback portal
**Testimonials:** TBD — collecting during beta
**Value themes:**
| Theme | Proof |
|-------|-------|
| Domain expertise | IFS-specific content created with clinical input; ML models trained on real HealthKit data |
| Platform-native quality | Swift 6, SwiftUI, HealthKit, SwiftData — not cross-platform compromises |
| Transparency | Open roadmap on Productlane, public support portal, responsive solo founder |
| Adaptive intelligence | CutEngine's ML adjusts daily; GoodParts AI identifies IFS parts from voice journals |

## Goals
**Business goal:** Ship Good Parts out of beta profitably while growing services revenue (Hermes consulting + Refactor); long-term, establish Feeling Mindful Labs as the go-to indie studio for IFS-informed wellness apps on iOS
**Conversion actions:**
- Apps: Download → complete onboarding → subscribe (monthly/annual)
- Refactor: Visit page → request free code audit → purchase tier
- Overall: Visit site → explore apps → join beta or subscribe
**Current metrics:** Pre-launch, beta testing phase across all products
