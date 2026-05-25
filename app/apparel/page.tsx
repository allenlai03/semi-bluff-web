/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apparel",
  description:
    "Drop 01 — Spring 2026. Six pieces. Small run. The Straddled apparel collection.",
};

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
};

const products: Product[] = [
  { id: "uniform", name: "The Uniform", category: "Hoodie",        price: 120 },
  { id: "tell",    name: "The Tell",    category: "Tee",           price: 55  },
  { id: "cap",     name: "The Cap",     category: "Cap",           price: 45  },
  { id: "cooler",  name: "The Cooler",  category: "Deck of Cards", price: 35  },
  { id: "stack",   name: "The Stack",   category: "Chip Set",      price: 180 },
  { id: "wallet",  name: "The Wallet",  category: "Bifold",        price: 95  },
];

const feltPanel =
  "radial-gradient(ellipse at center, #1A6B52 0%, #0F5340 45%, #0A3D2E 100%)";

// Nothing is buyable yet — every tile funnels to the same notify email as the closer.
const NOTIFY_HREF =
  "mailto:hello@straddled.app?subject=Notify%20me%20%E2%80%94%20Straddled%20Apparel";

const [featured, ...rest] = products;

export default function ApparelPage() {
  return (
    <>
      {/* Promo strip — thin gold-on-black, sits above the header */}
      <div className="relative z-[60] border-b border-[#D4B370]/[0.18] bg-black py-3">
        <p className="mx-auto max-w-6xl px-6 text-center text-[11px] uppercase tracking-[0.22em] text-[#D4B370] md:px-10">
          Drop 01 · Spring 2026 · Limited Run
        </p>
      </div>

      <Header />

      <main className="bg-black">
        {/* ─────────────── HERO (full-bleed) ─────────────── */}
        <section
          className="grain relative flex min-h-[88vh] items-end overflow-hidden md:min-h-[92vh]"
          style={{ background: feltPanel }}
        >
          {/* Centered chip mark — placeholder until a real campaign photo exists. */}
          <img
            src="/brand/logo.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] opacity-[0.18] md:-translate-y-[55%]"
            style={{ width: "min(620px, 70vw)", height: "auto" }}
          />

          {/* Decorative oversized numeral */}
          <span
            aria-hidden
            className="numeral pointer-events-none absolute -right-6 -top-10 select-none md:-right-12 md:-top-20"
            style={{
              fontSize: "clamp(8rem, 24vw, 22rem)",
              color: "rgba(212,179,112,0.10)",
            }}
          >
            01
          </span>

          {/* Overlay copy — bottom-left like the Hidden Hills reference */}
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-44">
            <p className="eyebrow text-white/80">Straddled · Apparel</p>
            <h1
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2.5rem, 9vw, 8rem)",
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block">The Drop.</span>
            </h1>
            <p className="mt-6 max-w-[480px] text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
              Six pieces. Spring 2026. Made once, made small — sold the way a
              home game fills up.
            </p>
            <a
              href="#collection"
              className="mt-8 -mb-2 inline-flex min-h-[44px] items-center gap-2 py-2 text-[12px] uppercase tracking-[0.22em] text-[#E8C988] transition-colors hover:text-white"
            >
              View the collection
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* ─────────────── COLLECTION HEADER ─────────────── */}
        <section id="collection" className="px-6 pt-24 md:px-10 md:pt-36">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 border-b border-[#D4B370]/[0.18] pb-8 md:pb-10">
              <p className="eyebrow">Spring 2026 — Limited Run</p>
              <h2
                className="font-display text-white"
                style={{
                  fontSize: "clamp(2rem, 6vw, 4.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                The Collection
              </h2>
            </div>
          </div>
        </section>

        {/* ─────────────── PRODUCT GRID ─────────────── */}
        <section className="px-6 pb-32 pt-12 md:px-10 md:pt-16">
          <div className="mx-auto max-w-6xl">
            {/* Featured piece — large felt-green card, numbered 01 */}
            <FeaturedCard product={featured} />

            {/* The rest — 02 through 06 */}
            <div className="mt-6 grid grid-cols-2 gap-6 md:mt-8 md:grid-cols-3 md:gap-8">
              {rest.map((p, i) => (
                <ProductCard key={p.id} product={p} number={i + 2} />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── CLOSER ─────────────── */}
        <section className="px-6 py-32 md:px-10 md:py-40">
          <div className="mx-auto max-w-6xl">
            <div
              className="grain relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16 md:py-28"
              style={{
                background:
                  "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)",
              }}
            >
              <div className="relative z-10">
                <p className="eyebrow text-white/80">Spring 2026</p>
                <h2
                  className="font-display mx-auto mt-6 max-w-[720px] text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 6vw, 4.5rem)",
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span className="block">Drop the chat.</span>
                  <span className="block">Drop the merch.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-[480px] text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
                  Small run. Made once. When it&apos;s gone, it&apos;s gone —
                  same as the night.
                </p>
                <a
                  href="mailto:hello@straddled.app?subject=Notify%20me%20%E2%80%94%20Straddled%20Apparel"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-[#D4B370]/60 px-7 py-3 text-[14px] font-semibold text-[#D4B370] transition-colors hover:bg-[#D4B370]/10"
                >
                  Notify me when it drops
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Featured marquee — large felt-green card with no photo; the felt carries it.
function FeaturedCard({ product }: { product: Product }) {
  return (
    <a
      href={NOTIFY_HREF}
      className="grain group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl p-8 transition-colors md:min-h-[420px] md:p-12"
      style={{ background: feltPanel }}
      aria-label={`${product.name} — ${product.category}, $${product.price}. Notify me when it drops.`}
    >
      <span
        aria-hidden
        className="numeral pointer-events-none absolute -right-4 -top-10 z-0 select-none md:-right-6 md:-top-16"
        style={{
          fontSize: "clamp(7rem, 20vw, 18rem)",
          color: "rgba(212,179,112,0.12)",
        }}
      >
        01
      </span>

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/50">
          Coming soon
        </span>
        <span className="eyebrow text-white/70">Featured</span>
      </div>

      <div className="relative z-10">
        <p className="eyebrow text-white/70">{product.category}</p>
        <h3
          className="font-display mt-3 text-white"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 4rem)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {product.name}
        </h3>
        <p className="nums mt-4 text-[18px] font-semibold text-[#E8C988]">
          ${product.price}
        </p>
      </div>
    </a>
  );
}

function ProductCard({
  product,
  number,
}: {
  product: Product;
  number: number;
}) {
  return (
    <a
      href={NOTIFY_HREF}
      className="group block"
      aria-label={`${product.name} — ${product.category}, $${product.price}. Notify me when it drops.`}
    >
      {/* Square photo placeholder — chip mark on dark; real photo replaces this later. */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] transition-colors group-hover:border-[#D4B370]/[0.25]">
        <span
          aria-hidden
          className="numeral pointer-events-none absolute right-3 top-1 z-10 select-none transition-colors group-hover:[color:rgba(212,179,112,0.32)] md:right-4"
          style={{ fontSize: "4.5rem" }}
        >
          {String(number).padStart(2, "0")}
        </span>
        <img
          src="/brand/logo.png"
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.16] transition-opacity group-hover:opacity-[0.22]"
          style={{ width: "55%", height: "auto" }}
        />
        <span className="absolute left-4 top-4 z-10 text-[10px] uppercase tracking-[0.22em] text-white/40">
          Coming soon
        </span>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <div>
          <p className="text-[15px] font-medium text-white">{product.name}</p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-white/40">
            {product.category}
          </p>
        </div>
        <p className="nums shrink-0 text-[15px] font-semibold text-[#D4B370]">
          ${product.price}
        </p>
      </div>
    </a>
  );
}
