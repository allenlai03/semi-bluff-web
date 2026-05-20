# Straddled Web — Design System

This file is read by Claude Code at the start of every session. It is the source of truth for visual design. The website must feel like the marketing layer of the iOS app — same colors, same type, same card treatment. A user who downloads the app from this site should feel zero visual whiplash.

## Aesthetic anchor

This is a poker app. The aesthetic is **casino felt + gold chips on a black table**. Refined, not garish. Think: a high-end home game, a leather-bound ledger, an Apple-designed casino. Not Vegas neon.

The reference is the Straddled iOS app, specifically the settlement receipt screen (the share card) and the live session view. The website should look like those screens scaled up to desktop.

When in doubt about a design choice, the answer is "what would the app do." If you cannot find the same pattern somewhere in the app, do not invent a new one.

## Stack

- Next.js App Router, TypeScript
- Tailwind CSS
- `next/link` for navigation, `next/image` for images
- No UI libraries (no shadcn, no Radix). Build primitives by hand.
- No animation libraries on the landing page. CSS transitions only.

## Typography

**Two typefaces, both purposeful:**

- **Display (headlines only):** `Fraunces` (variable Google font). Loaded via `next/font/google` with the optical-size axis (`opsz`), `SOFT`, and `WONK` enabled. Set `font-variation-settings: "opsz" 144, "SOFT" 0, "WONK" 0` for refined-editorial — sharp letterforms, no quirky variants. Weights 400 and 500 only.
- **Body + UI (everything else):** `Inter` at 400 / 500 / 600.

Fraunces was chosen over Bodoni Moda because it has more editorial character (used by The New Yorker, Substack, Lulu Lytle) without crossing into "AI generic luxury serif." The SOFT axis lets us pull warmth in/out per surface. Default is `SOFT 0` (sharp); future hero variants may try `SOFT 50` for a slightly softer cut.

**Never** mix a third typeface in. Never use the serif for body. Never use the sans for the hero headline.

### Type scale

- Hero h1 (serif): `clamp(1.75rem, 7.5vw, 8rem)`, font-weight 500, tracking `-0.02em`, line-height `1.0`. The lower bound is tight on purpose — Fraunces renders wider than Bodoni, and narrow mobile (≤375px) overflows otherwise. Pair with `<span className="block">` per line so each phrase wraps independently.
- Section h2 (serif): `clamp(2rem, 6vw, 5rem)`, font-weight 500, tracking `-0.015em`, line-height `1.05`
- Featured-card h3 (serif): `clamp(3rem, 8vw, 6rem)`, font-weight 500, tracking `-0.02em`, line-height `0.95`. Reserved for the headline award and similar single-moment cards.
- Card title h3 (sans): `text-2xl md:text-3xl`, font-weight 600, tracking `-0.01em`
- Body (sans): `text-[15px]` or `text-base`, line-height `1.6`, color `text-white/60`
- Eyebrow labels (sans): `text-[11px]`, uppercase, tracking `[0.18em]`, font-weight 500, color **gold** `#D4B370` at 90% opacity. This matches the app exactly — see "RESULTS", "AWARDS", "SETTLE UP", "SESSION", "PAYMENTS" labels in the app screens.

**Rules:**
- Headlines: `text-white` (essentially `#FAFAF7` — slightly warm white, never blue-white).
- Body: `text-white/60`. Eyebrows: gold (`#D4B370`).
- No italics. No font-weight 700 or higher — 600 max. The serif at weight 500 is already strong.
- Numerals in financial contexts (pot totals, results, deltas): use `tabular-nums` so columns align.

### Decorative numerals — the page's typographic anchor

Use Fraunces at extreme size (5.5rem on cards; up to `clamp(8rem, 24vw, 22rem)` on the headline award) as a decorative anchor in two places:

1. **Headline award (The Shark):** a giant `01` numeral positioned top-right of the felt-green panel, color `rgba(212,179,112,0.10)` — barely visible, sets the felt texture.
2. **Supporting award cards:** each card carries its index (`02` through `07`) top-right in `rgba(212,179,112,0.22)`, brightening to `0.32` on hover.

This is the one repeating typographic moment on the homepage. It gives the Awards section rhythm without clutter, and lets the serif do work beyond the headlines. Don't apply it elsewhere — it loses meaning if used everywhere.

The numeral utility lives in `globals.css` as `.numeral`. Don't replicate the style inline.

## Color

The app uses three colors purposefully. Match them exactly.

```
/* Background tiers */
--bg-black:        #000000     /* page background, pure */
--bg-card:         #0E0E0E     /* card backgrounds */
--bg-card-border:  rgba(212, 179, 112, 0.12)  /* faint gold border on cards */

/* Felt green — for hero gradients, settlement headers, the "branded" sections */
--felt-deep:       #0A3D2E     /* deep felt, hero gradient bottom */
--felt-mid:        #0F5340     /* mid felt, hero gradient top */
--felt-glow:       #1A6B52     /* lighter highlight for radial glows */

/* Chip gold — for accents, eyebrows, primary CTA borders */
--gold:            #D4B370     /* primary gold, matches app buttons + labels */
--gold-bright:     #E8C988     /* hover / brighter state */
--gold-soft:       rgba(212, 179, 112, 0.6)  /* secondary text in gold contexts */

/* Result colors — semantic, used sparingly */
--win-green:       #4ADE80     /* +$ amounts, "Shark" award */
--loss-red:        #F87171     /* -$ amounts, "ATM" award */

/* Foreground */
--fg:              #FAFAF7     /* headlines */
--fg-muted:        white/60    /* body */
--fg-faint:        white/40    /* eyebrows in non-gold contexts, captions */
```

**Hard rules:**
- Page bg is `#000`. Cards are `#0E0E0E` with a faint gold border (`rgba(212,179,112,0.12)`).
- Gold (`#D4B370`) is the ONE persistent accent. Use it on: eyebrow labels, primary CTA borders/fills, active tab state, key numerical highlights. **Not** on body text.
- Felt green is for **branded section backgrounds only** — the hero gradient, a settlement receipt mockup, the final CTA section. It is not used on small UI elements.
- Win green / loss red are semantic only. Use them when showing real or example financial outcomes. Never use them for decoration.
- No purples. No blues except the "Iceman" award color (`#7DD3FC`) if that specific badge appears.
- No gradients on text. The felt green gradient on backgrounds is the only gradient allowed.

## Layout

- Hero section: `min-h-[92vh]`, centered content
- Feature sections: `py-32` minimum, generous breathing room
- Max content width: `max-w-6xl mx-auto`
- Horizontal padding: `px-6 md:px-10`
- Section spacing: `py-32` between sections, `mb-20` between section headline and content

**Negative space rule:** Cards in the app are dense with info because they have to be (it's a tracker). On the web, we have room to breathe — make cards roughly 60% content / 40% empty space. Eyebrow label top-left, title + body bottom-left, the rest empty or holding a single visual.

## Cards — match the app exactly

The app's card pattern, used on every screen:

```tsx
className="rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-6 md:p-8"
```

- Border radius: `rounded-2xl` (16px) for content cards, `rounded-3xl` (24px) for hero/CTA cards. The app uses 16px almost everywhere.
- Border: 1px solid gold at 12% opacity. This is the signature look — the faint gold hairline.
- Background: `#0E0E0E`, one notch above pure black.
- Padding: `p-6` mobile, `p-8` desktop. Larger feature cards: `p-10`.
- Internal layout: eyebrow (gold, uppercase, tracked) at top. Title + description at bottom. Use `flex flex-col justify-between` with `min-h-[260px]`.

### The felt-green card variant (for "premium" sections)

Match the settlement receipt header in the app — a subtle radial gradient on felt green, **always** with the grain texture overlay:

```tsx
className="grain relative overflow-hidden rounded-3xl p-10 md:p-12"
style={{
  background: 'radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)'
}}
```

Wrap the inner content in `<div className="relative z-10">` so it sits above the `::after` grain layer.

Use this for: hero section background panel, final CTA section, the headline award card, group/session page headers. **Not** for everyday content cards.

### Grain texture — the casino-felt finish

Every felt-green panel uses the `.grain` utility (defined in `globals.css`). It paints a tiny inline-SVG fractal-noise overlay at 8% opacity with `mix-blend-mode: overlay`. The effect is barely visible up close — but at a glance it stops the felt panels from feeling like flat CSS gradients and gives them the texture of actual table cloth.

Rules:
- **Only** apply `.grain` to felt-green panels. Never to black cards. Never to the page background. It would read as cheap noise on dark surfaces.
- Don't increase opacity above 0.08 — past that it reads as JPEG artifact, not texture.
- The grain layer uses `::after` and absolute positioning, so the parent must have `position: relative` (the `.grain` class sets this) and content needs `relative z-10` to stack above it.

## Grids

The app uses single-column lists on mobile (it has to). On web, use asymmetric grids:

- 2/3 + 1/3 splits for feature sections
- Single full-width "headline" card on top, then `grid-cols-3` of smaller cards below (matches the Awards screen pattern — The Shark gets a big card, the other 6 awards get smaller cards)
- Never plain 2x2. Always vary card sizes.

## Buttons

The app has exactly two button styles. Match them.

### Primary CTA (matches "Cash Out Players", "Start Session", "Add Player", "Email me a sign-in link")
```tsx
className="rounded-full bg-[#D4B370] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#E8C988]"
```
Solid gold, black text, pill shape, font-weight 600.

### Secondary CTA (matches "Actions" outlined buttons)
```tsx
className="rounded-full border border-[#D4B370]/60 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#D4B370] transition hover:bg-[#D4B370]/10"
```
Gold border, gold text, transparent fill.

**Rules:**
- All buttons are pill-shaped. Always.
- Only `transition` on color/bg. No scale, no glow, no shadow.
- No third button style. If you need something less prominent than secondary, use a plain text link in gold.

## The "Receipt" — your hero visual

The app's settlement receipt (Sunday Sesh share card) is the strongest visual asset in the product. The website's hero should feature it prominently.

When building the hero, do not generate a fake mockup. Use an actual screenshot of the receipt as a static image, placed:
- Centered on desktop, below the headline, with felt-green gradient behind it
- Straight-on, 0° rotation (no tilts)
- No glow, no halo
- Sized so the receipt is the focal point but the headline above it is still primary

## Phone mockups

- Use clean device frames or real hand-held photography
- **Straight-on, 0° rotation.** Never tilt.
- No ambient glows or spotlights
- On dark backgrounds, a very subtle 1px border at `rgba(212,179,112,0.08)` is fine to keep the phone from disappearing — nothing more

## Iconography

Match the app:
- Use Lucide icons at `stroke-width={1.5}`
- Icon color: gold (`#D4B370`) for active/branded, white/60 for neutral
- Award icons are illustrated emoji-style in the app (shark, money, diamond, etc.). For the web, either use the same illustrated style or simple Lucide outline icons — don't mix the two on the same page.

## Voice and copy

The app's copy is **dry, deadpan, slightly funny.** "cashcow swam away with +$20.00." "cashcow reloaded 1x. Generous." "Warmed the chair." Match this on the website:

- Hero: short, declarative, specific. "Settle the night. Share the receipt." not "The ultimate poker tracking experience."
- Section headers: imperative or noun phrases. "Built for the table." "Name the Shark." "Settle the math."
- Body: state what it does in one short sentence. No marketing speak ("revolutionary," "seamless," "powerful").
- Card descriptions: max 1-2 sentences. If you can't say it in 15 words, the feature is too small to deserve a card.

## What "AI slop" looks like — do not do these

- Generic Inter-on-black landing pages with no point of view — we have a point of view (poker felt + gold)
- Tilted phone mockups with soft purple/green glows
- Gradient text (especially purple→pink)
- Glassmorphism / backdrop-blur cards
- Three or more accent colors
- Drop shadows on cards
- Animated mesh gradient backgrounds
- Stock photography of people playing poker (use the app's own visuals instead)
- Emoji used as iconography in headers (the app uses them inside award rows, which is fine — but never as the only visual in a hero or feature card)
- Bullet-pointed feature lists in marketing copy. Use cards instead.

## Reference component

A complete landing page in this aesthetic lives at `app/page.tsx`. When building new pages, match its: type pairing (serif h1/h2 + sans body), card structure (gold-hairline border on `#0E0E0E`), color usage (gold accents, felt green only on premium sections), and density.

## When prompted to "make it more interesting"

Try these first, in order:
1. Make the serif headline bigger
2. Add more vertical space between sections
3. Pull in a felt-green gradient panel for one section
4. Use an actual app screenshot as the visual instead of a stylized mockup
5. Tighten the body copy — half the words, twice the punch

Only after exhausting those: consider adding a new element.