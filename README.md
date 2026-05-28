# Straddled — Web

Marketing + share layer for **Straddled**, the poker session tracker for friend groups
([App Store](https://apps.apple.com/us/app/straddled/id6766053280)). This site is the
public face of the app: the landing page, the WSOP chip-scan page, the apparel drop, and
the dynamic share/invite pages that unfurl in group chats.

The visual design is intentionally a 1:1 match with the iOS app — casino felt + gold chips
on a black table. **`CLAUDE.md` is the source of truth for all visual design.** Read it
before touching anything visual.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (config-in-CSS via `app/globals.css`)
- **Supabase** (`@supabase/supabase-js`) — reads group/session/leaderboard data for the
  dynamic share pages
- **`@vercel/og`** — generates Open Graph preview images at the edge
- **`lucide-react`** — icons (stroke 1.5, no fills)
- Fonts via `next/font/google`: **Fraunces** (display) + **Inter** (body/UI)

No UI libraries (no shadcn/Radix). No animation libraries — CSS transitions only.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Dynamic pages (`/g`, `/s`, `/join`, OG routes) need Supabase env vars in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Routes

| Route | What it is |
|-------|------------|
| `/` | Landing page (the reference implementation of the design system) |
| `/wsop` | Chip-scan landing — full-bleed felt hero, the QR target on physical chips |
| `/apparel` | Drop 01 storefront (featured + numbered grid; "notify me" funnel) |
| `/join/[code]` | Invite-link landing; unfurls with the group's OG card |
| `/g/[slug]` | Public group leaderboard |
| `/s/[id]` | Public session receipt |
| `/api/og/group/[slug]` | Dynamic OG image — felt header + leaderboard |
| `/api/og/session/[id]` | Dynamic OG image — session receipt |
| `/privacy`, `/terms`, `/support` | Legal / help |

## Project shape

- `app/` — routes (App Router)
- `components/` — hand-built primitives (`Header`, `Footer`, `AppStoreBadge`, `BrandMark`, …)
- `lib/queries.ts` — Supabase data access
- `types/` — shared types
- `public/screenshots/` — cropped iOS captures used across the site
- `public/brand/` — logo (`logo.png` / `logo.svg`)

The App Store URL lives in one place — `components/AppStoreBadge.tsx` — and every "Get the
app" CTA reads from it.

## Conventions worth knowing

- **Match the app, not generic SaaS.** See `CLAUDE.md` → "What AI slop looks like."
- **Screenshots always carry `width`/`height`** (their real pixel dimensions) + `h-auto` to
  prevent layout shift; below-fold images use `loading="lazy"`.
- **Touch targets ≥ 44px** on interactive elements; mobile is the primary surface for
  `/wsop` (it's a QR target) and `/join`.

## Deploy

Vercel. `main` is the production branch.
