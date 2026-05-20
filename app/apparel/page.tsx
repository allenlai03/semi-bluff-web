/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
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
              className="mt-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-[#E8C988] transition-colors hover:text-white"
            >
              View the collection
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* ─────────────── COLLECTION HEADER ─────────────── */}
        <section id="collection" className="px-6 pt-24 md:px-10 md:pt-36">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 border-b border-[#D4B370]/[0.18] pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
              <div>
                <p className="eyebrow">Spring 2026 — Limited Run</p>
                <h2
                  className="font-display mt-4 text-white"
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
              <a
                href="#"
                className="inline-flex items-center gap-2 self-start text-[12px] uppercase tracking-[0.22em] text-[#D4B370] underline decoration-[#D4B370]/30 underline-offset-[6px] transition-colors hover:text-[#E8C988] md:self-end"
              >
                View all
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────── PRODUCT GRID ─────────────── */}
        <section className="px-6 pb-32 pt-12 md:px-10 md:pt-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
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

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href="#"
      className="group block"
      aria-label={`${product.name} — ${product.category}, $${product.price}`}
    >
      {/* Square photo placeholder — chip mark on dark; real photo replaces this later. */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] transition-colors group-hover:border-[#D4B370]/[0.25]">
        <img
          src="/brand/logo.png"
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.16] transition-opacity group-hover:opacity-[0.22]"
          style={{ width: "55%", height: "auto" }}
        />
        <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.22em] text-white/40">
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
    </Link>
  );
}
