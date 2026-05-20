/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// NOTE: this page is a client component (interactive ledger expand/collapse),
// so we can't export Next.js `metadata`. We set the document title + meta
// description on mount instead. If metadata SEO becomes critical, split this
// into a server wrapper + client child.

type Product = {
  ref: string;        // "02" .. "07"
  name: string;       // "The Uniform"
  category: string;   // "Hoodie"
  price: number;      // 120
  materials: string;  // "14oz brushed cotton. Tonal stitch. Gold metal label."
  description: string; // two-sentence deadpan blurb
  // Placeholder photos — swap for real product shots before the drop.
  photo: string;
  photoAlt: string;
};

const PRODUCTS: Product[] = [
  {
    ref: "02",
    name: "The Uniform",
    category: "Hoodie",
    price: 120,
    materials: "14oz brushed cotton · Tonal embroidery · Gold metal label",
    description:
      "Heavyweight cotton. Quiet logo. Will outlast your worst session.",
    // Receipt-share lives on felt — closest to a uniform photo we have on hand.
    photo: "/screenshots/receipt-share.png",
    photoAlt: "Placeholder — Straddled receipt share card (final hoodie photo TBD).",
  },
  {
    ref: "03",
    name: "The Tell",
    category: "Tee",
    price: 55,
    materials: "Midweight ringspun cotton · Set-in collar · Garment-dyed black",
    description:
      "Plain black tee. Two-color chest mark. Reads quietly across the table.",
    photo: "/screenshots/receipt-raw.png",
    photoAlt: "Placeholder — Straddled raw receipt (final tee photo TBD).",
  },
  {
    ref: "04",
    name: "The Cap",
    category: "Cap",
    price: 45,
    materials: "Washed canvas · Brass slide buckle · Chip-mark embroidery",
    description:
      "Six panels. One chip. Sits low enough to fold under without losing it.",
    photo: "/screenshots/home.png",
    photoAlt: "Placeholder — Straddled home tab (final cap photo TBD).",
  },
  {
    ref: "05",
    name: "The Cooler",
    category: "Deck of cards",
    price: 35,
    materials: "Linen-finish stock · Black core · Custom tuck case",
    description:
      "Standard 52, plus two jokers nobody'll let you use. Marked only by the case it came in.",
    photo: "/screenshots/settlement.png",
    photoAlt: "Placeholder — Straddled settlement card (final deck photo TBD).",
  },
  {
    ref: "06",
    name: "The Stack",
    category: "Chip set",
    price: 180,
    materials: "100 clay chips, 13.5g · Four denominations · Lined hard case",
    description:
      "Heavy enough to feel like money. Quiet enough that the neighbors won't ask.",
    photo: "/screenshots/stats.png",
    photoAlt: "Placeholder — Straddled stats tab (final chip set photo TBD).",
  },
  {
    ref: "07",
    name: "The Wallet",
    category: "Bifold",
    price: 95,
    materials: "Full-grain leather · Edge-painted gold · Six card slots",
    description:
      "Two folds. One slot for cards. The other for whatever's left after the night.",
    photo: "/screenshots/live-session.png",
    photoAlt: "Placeholder — Straddled live session (final wallet photo TBD).",
  },
];

const feltPanel =
  "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)";

export default function ApparelPage() {
  const [activeRef, setActiveRef] = useState<string | null>(null);
  const potTotal = PRODUCTS.reduce((sum, p) => sum + p.price, 0);

  // Client-side metadata: set title + description on mount.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Apparel — Straddled";
    const desc =
      "Spring 2026 — six pieces of Straddled apparel. Heavyweight cotton, clay chips, full-grain leather. Limited run.";
    let tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const created = !tag;
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    const previousDesc = tag.content;
    tag.content = desc;
    return () => {
      document.title = previousTitle;
      if (created && tag) tag.remove();
      else if (tag) tag.content = previousDesc;
    };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-black">
        {/* ─────────────── HERO — receipt-card structure ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-44">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Straddled</p>
            <h1
              className="font-display mt-8 text-white"
              style={{
                fontSize: "clamp(1.75rem, 7.5vw, 8rem)",
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block">The Ledger.</span>
            </h1>
            <p className="mt-8 max-w-[560px] text-[16px] leading-[1.6] text-white/60 md:text-[17px]">
              Spring 2026 — Six pieces.
            </p>

            {/* Receipt-pot pill — verbatim pattern from /app/s/[id]/page.tsx */}
            <div className="mt-10 inline-flex items-center gap-4 rounded-full border border-[#D4B370]/40 bg-black/40 px-5 py-2">
              <span className="text-[13px] text-white/70">6 items</span>
              <span className="text-white/40">·</span>
              <span className="nums text-[15px] font-semibold text-[#D4B370]">
                ${potTotal} pot
              </span>
            </div>
          </div>
        </section>

        {/* ─────────────── LEDGER ROWS ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-48">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The drop</p>
            <h2
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Six line items.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-white/50 md:text-[16px]">
              Tap a row to open the reference. Limited run. No reshuffles.
            </p>

            {/* Ledger — full-width hairline-bordered rows */}
            <div className="mt-16 border-t border-[#D4B370]/[0.12]">
              {PRODUCTS.map((p) => {
                const isOpen = activeRef === p.ref;
                return (
                  <div
                    key={p.ref}
                    className="border-b border-[#D4B370]/[0.12]"
                  >
                    {/* Row trigger */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveRef(isOpen ? null : p.ref)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`detail-${p.ref}`}
                      className="group flex w-full items-center gap-4 py-6 text-left transition-colors hover:bg-white/[0.015] md:gap-10 md:py-8"
                    >
                      {/* Mobile: numeral + name on row 1, price + chevron on row 2 */}
                      {/* Desktop: numeral | name+category | price + chevron */}
                      <span
                        aria-hidden
                        className="numeral hidden shrink-0 md:inline-block md:w-20"
                        style={{ fontSize: "2rem" }}
                      >
                        {p.ref}
                      </span>

                      <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                        <div className="flex items-baseline gap-3 md:contents">
                          <span
                            aria-hidden
                            className="numeral inline-block shrink-0 md:hidden"
                            style={{ fontSize: "1.5rem" }}
                          >
                            {p.ref}
                          </span>
                          <h3
                            className="font-display text-white"
                            style={{
                              fontSize: "clamp(1.25rem, 3.5vw, 1.5rem)",
                              fontWeight: 500,
                              letterSpacing: "-0.015em",
                              lineHeight: 1.1,
                            }}
                          >
                            {p.name}
                          </h3>
                        </div>
                        <p className="text-[12px] uppercase tracking-[0.18em] text-white/40 md:ml-0">
                          {p.category}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="nums text-[15px] font-semibold text-[#D4B370] md:text-[17px]">
                          ${p.price}
                        </span>
                        <span
                          aria-hidden
                          className={`inline-block text-[20px] text-[#D4B370] transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </div>
                    </button>

                    {/* Expanded detail — Vault-style reference */}
                    {isOpen && (
                      <div
                        id={`detail-${p.ref}`}
                        className="pb-12 md:pb-16"
                      >
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-10">
                          {/* Photo — 60% (3/5) on desktop */}
                          <div className="md:col-span-3">
                            <div
                              className="relative overflow-hidden rounded-3xl"
                              style={{ backgroundColor: "#0E0E0E" }}
                            >
                              {/* Soft-gold Ref. numeral — reuses .numeral, mirrors homepage Awards */}
                              <span
                                aria-hidden
                                className="numeral pointer-events-none absolute right-4 top-2 z-0 select-none md:right-8 md:top-4"
                                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
                              >
                                Ref. {p.ref}
                              </span>
                              <div className="relative z-10 flex aspect-[4/5] items-center justify-center p-8 md:p-12">
                                {/* TODO: real product photography goes here. */}
                                <img
                                  src={p.photo}
                                  alt={p.photoAlt}
                                  className="max-h-full w-auto max-w-[260px] rounded-[24px] md:max-w-[320px]"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Details — 40% (2/5) on desktop */}
                          <div className="flex flex-col justify-center md:col-span-2">
                            <p
                              className="text-[11px] uppercase tracking-[0.18em] text-[#D4B370]/90"
                            >
                              Ref. {p.ref} / {p.category}
                            </p>
                            <h4
                              className="font-display mt-5 text-white"
                              style={{
                                fontSize: "clamp(1.75rem, 4.5vw, 2.25rem)",
                                fontWeight: 500,
                                lineHeight: 1.05,
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {p.name}
                            </h4>
                            <p className="mt-5 text-[15px] leading-[1.6] text-white/65 md:text-[16px]">
                              {p.description}
                            </p>
                            <p className="mt-6 text-[13px] leading-[1.6] text-white/40">
                              {p.materials}
                            </p>
                            <p className="nums mt-8 text-[24px] font-semibold text-[#D4B370] md:text-[28px]">
                              ${p.price}
                            </p>
                            <div className="mt-6">
                              <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-full bg-[#D4B370] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#E8C988]"
                              >
                                Reserve
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pot total — ledger footer line, echoes the receipt UI */}
            <div className="mt-10 flex items-baseline justify-between border-t border-[#D4B370]/[0.25] pt-6">
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Pot — if you bought everything
              </span>
              <span className="nums text-[20px] font-semibold text-[#D4B370] md:text-[24px]">
                ${potTotal}
              </span>
            </div>
          </div>
        </section>

        {/* ─────────────── CLOSER — felt-green panel ─────────────── */}
        <section className="px-6 py-40 md:px-10 md:py-56">
          <div className="mx-auto max-w-6xl">
            <div
              className="grain relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16 md:py-32"
              style={{ background: feltPanel }}
            >
              <div className="relative z-10">
                <p className="eyebrow text-white/80">Spring 2026</p>
                <h2
                  className="font-display mx-auto mt-6 max-w-[920px] text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 6.5vw, 6rem)",
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span className="block">Drop the chat.</span>
                  <span className="block">Drop the merch.</span>
                </h2>
                <p className="mx-auto mt-8 max-w-[520px] text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
                  Small run. Made once. When it&apos;s gone, it&apos;s gone — same
                  as the night.
                </p>
                <div className="mt-12 flex justify-center">
                  <a
                    href="mailto:hello@straddled.app?subject=Notify%20me%20—%20Straddled%20Apparel"
                    className="inline-flex items-center justify-center rounded-full border border-[#D4B370]/60 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#D4B370] transition hover:bg-[#D4B370]/10"
                  >
                    Notify me when it drops
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
