# `/apparel` — Brainstorm

Three diverging directions for the `straddled.app/apparel` merch storefront. All inherit the homepage's design system (black + gold `#D4B370` + felt-green premium panels + Fraunces serif + Inter body + casino grain). All assume a small, intentional drop — ~6 pieces (cap, hoodie, tee, deck, chip set, one wildcard) that link out to Shopify or read "Reserve / Coming soon."

Pick one. Or take the strongest move from each and we combine.

---

## 1. The Ledger

**Brutalist-editorial. The page IS a receipt.**

The whole storefront is a single oversized settlement receipt. Products are line items on the ledger, priced like buy-ins, with the Shark/ATM/Iceman language reframed as merch awards — `THE UNIFORM`, `THE TELL`, `THE TILT`.

**Layout**
- Header: standard nav, `APPAREL` eyebrow in gold, no hero image
- Hero: full-width Fraunces wordmark `The Ledger / Spring '26` on pure black; decorative `01` numeral bleeding off the right edge in 10% gold (reuses the homepage `.numeral` pattern)
- Product list: **not a grid** — a vertical ledger. Each product is a hairline-bordered row, 100% width:
  - `02–07` numeral on the left
  - Product name in serif, centered
  - Price right-aligned in tabular-nums
  - One tiny square thumbnail
  - Tap-row expands inline
- Felt-green CTA panel at bottom with grain: "Drop the chat. Drop the merch."
- Footer: same as homepage

**Distinctive detail.** Total at the bottom of the ledger reads `POT — $XXX.XX (if you bought everything)` — a wink to the app's pot UI, in gold.

**Trade-off.** Sacrifices product photography drama. Items live or die by their naming and the row rhythm. Weak product shots will tank it.

---

## 2. The Vault

**Luxe-catalog. Hodinkee / Aimé Leon Dore reverence — one product at a time.**

Each product is a Hodinkee-style "Reference" page stitched into one long scroll. Felt-green hero panels alternate with black detail panels — treating a cap like a Patek.

**Layout**
- Header: standard nav with a small `EST. 2026` gold dot
- Hero: tight serif `Six pieces. / One table.` + a single hero shot (the deck of cards on felt) inside a grained felt-green panel
- Product modules (×6), each a near-full-viewport scroll snap:
  - **Left:** huge product photo on `#0E0E0E`, `rounded-3xl`
  - **Right:** eyebrow (`REF. 03 / HOODIE`), serif h3 product name, 2-sentence Inter description in the app's deadpan voice ("Heavyweight. Quiet. Will outlast your worst session."), price in gold, `Reserve` pill button
- Closer: small felt-green panel with mailing-list capture
- Footer: same as homepage

**Distinctive detail.** A serif `Ref. 0X` numeral floats top-right of each product photo at ~22% gold — same numeral system as the homepage's Awards section, repurposed as a watch reference number. Visual continuity, new meaning.

**Trade-off.** Six full-height modules = long scroll. You can't compare pieces at a glance. Demands strong photography for every SKU.

---

## 3. Playback

**Playful. The merch as a poker hand.**

The six pieces are dealt across the page like a hand of cards — overlapping, fanned, with the cap as the "hole card." Hover or tap to reveal each product.

**Layout**
- Header: standard nav
- Hero: serif `Six cards. / One hand.` + Inter sub: "The Straddled apparel drop. Limited run. No reshuffles."
- Product display:
  - **Desktop:** fanned arrangement of six tall cards (aspect ~3:4) overlapping by ~30%, gold hairline borders, each showing product photo + name + price
  - **Mobile (375–430):** horizontal snap-scroll carousel of the same cards — the same hand, dealt across the thumb
- Below the hand: felt-green "river" panel with grain, holding the `Shop the drop` pill CTA and one line of dry copy ("Sold in batches the size of a home game.")
- Footer: same as homepage

**Distinctive detail.** Each card has a tiny suit pip (♠ ♥ ♦ ♣) in the corner in gold instead of a category label — caps are spades, hoodies are clubs, decks are diamonds, chips are hearts. The only deviation from the homepage system, and it earns itself.

**Trade-off.** Most layout-experimental. Collapses awkwardly between 430px and 768px (the "in-between" tablet zone), and the suit-pip system borders on cheeky in a brand that's been disciplined about restraint.

---

## How to pick

- **Ledger** if the merch's strength is its **naming and concept**. Text-first.
- **Vault** if the merch's strength is its **making and materials**. Photography-first.
- **Playback** if the merch's strength is its **theatrics and drop energy**. Layout-first.

Tell me which one (or which moves to combine) and I'll implement.
