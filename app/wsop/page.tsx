/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreBadge, AndroidComingSoon } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Straddled at WSOP",
  description:
    "You kept the chip. Straddled is the app I built to track every home game I run — track every buy-in, settle the math, name the Shark.",
};

const feltPanel =
  "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)";

export default function WSOPPage() {
  return (
    <>
      <Header />
      <main className="bg-black">
        {/* ─────────────── HERO — full-bleed felt arrival ─────────────── */}
        <section
          className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center md:px-10"
          style={{ background: feltPanel }}
        >
          {/* Barely-there oversized chip watermark behind the content */}
          <img
            src="/brand/logo.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.05]"
            style={{ width: "min(680px, 115vw)", height: "auto" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* The chip — the star. Mirrors the one in their hand. */}
            <img
              src="/brand/logo.png"
              alt="The Straddled chip — the same mark on the chip in your hand."
              width={1200}
              height={1200}
              fetchPriority="high"
              className="h-[104px] w-[104px] rounded-[26px] ring-1 ring-[#D4B370]/30 md:h-[132px] md:w-[132px] md:rounded-[32px]"
            />

            <span className="mt-6 inline-flex items-center rounded-full border border-[#D4B370]/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#E8C988]">
              Handed to you · Not for sale
            </span>

            <h1
              className="font-display mt-7 text-white"
              style={{
                fontSize: "clamp(2.75rem, 13vw, 7rem)",
                fontWeight: 500,
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block">You kept</span>
              <span className="block">the chip.</span>
            </h1>

            <p className="mt-6 max-w-[440px] text-[16px] leading-[1.6] text-white/75 md:text-[17px]">
              It&apos;s the logo of a poker app I built. The chip looks like the
              logo because the logo looks like a chip. Here it is.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <AppStoreBadge size="lg" label="Get the app" />
              <AndroidComingSoon />
            </div>
          </div>

          {/* Scroll cue */}
          <a
            href="#what"
            className="absolute bottom-4 left-1/2 z-10 inline-flex min-h-[44px] -translate-x-1/2 items-center px-4 text-[11px] uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white"
          >
            What is this <span aria-hidden>↓</span>
          </a>
        </section>

        {/* ─────────────── WHAT IS STRADDLED ─────────────── */}
        <section id="what" className="scroll-mt-24 px-6 pt-32 md:px-10 md:pt-44">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">What is Straddled</p>
            <h2
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              <span className="block">Track every buy-in.</span>
              <span className="block">Settle the math.</span>
            </h2>
            <p className="mt-6 max-w-[540px] text-[15px] leading-[1.6] text-white/55 md:text-[16px]">
              A poker session tracker for home games. Rebuys in one tap, the
              fewest possible Venmo transfers at settle-up, and a receipt the
              group chat actually opens.
            </p>

            <div className="mt-16 grid grid-cols-1 items-center gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
              <article className="flex min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-8 md:min-h-[480px] md:p-10">
                <div>
                  <p className="eyebrow">Live session</p>
                  <h3 className="mt-6 text-[26px] font-semibold leading-[1.1] tracking-tight text-white md:text-[32px]">
                    Real-time pot. No napkins.
                  </h3>
                  <p className="mt-4 max-w-[360px] text-[15px] leading-[1.6] text-white/55">
                    Buy-ins, rebuys, cash-outs across the table. The pot updates
                    as the night goes.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <img
                    src="/screenshots/live-session.png"
                    alt="Live session screen: Sunday Sesh, $80 pot, three players."
                    width={1290}
                    height={2626}
                    loading="lazy"
                    className="h-auto w-[200px] rounded-[24px] md:w-[240px]"
                  />
                </div>
              </article>

              <article className="flex min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-8 md:min-h-[480px] md:p-10">
                <div>
                  <p className="eyebrow">Settle-up receipt</p>
                  <h3 className="mt-6 text-[26px] font-semibold leading-[1.1] tracking-tight text-white md:text-[32px]">
                    One image. Pot, results, awards.
                  </h3>
                  <p className="mt-4 max-w-[360px] text-[15px] leading-[1.6] text-white/55">
                    Drop it in the chat. Someone gets named the Shark. The rest
                    settle up on Venmo.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <img
                    src="/screenshots/receipt-share.png"
                    alt="Straddled settlement receipt — Sunday Sesh, $80 pot, four players."
                    width={1080}
                    height={3134}
                    loading="lazy"
                    className="h-auto w-[200px] rounded-[24px] md:w-[240px]"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ─────────────── WHERE TO FIND ME ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-44">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Where to find me</p>
            <h2
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Around the cash tables.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
              <article className="rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-7 md:p-8">
                <p className="eyebrow">The chip</p>
                <p className="mt-5 text-[15px] leading-[1.6] text-white/65">
                  Look for the dashed-gold ring with an <span className="text-[#D4B370]">S</span> on
                  the front. If it&apos;s in your hand, you already found me.
                </p>
              </article>

              <article className="rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-7 md:p-8">
                <p className="eyebrow">The room</p>
                <p className="mt-5 text-[15px] leading-[1.6] text-white/65">
                  Cash tables, mostly. I&apos;m not running deep in any bracelet
                  event. Ask for Allen.
                </p>
              </article>

              <article className="rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-7 md:p-8">
                <p className="eyebrow">The pitch</p>
                <p className="mt-5 text-[15px] leading-[1.6] text-white/65">
                  Five seconds, no slide deck. I built the app, I run a home
                  game, I&apos;d love to know what you think.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ─────────────── CLOSER ─────────────── */}
        <section id="install" className="px-6 py-32 md:px-10 md:py-48">
          <div className="mx-auto max-w-6xl">
            <div
              className="grain relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16 md:py-28"
              style={{ background: feltPanel }}
            >
              <div className="relative z-10">
                <p className="eyebrow text-white/80">Straddled</p>
                <h2
                  className="font-display mx-auto mt-6 max-w-[860px] text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 6.5vw, 6rem)",
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span className="block">Add it before you</span>
                  <span className="block">forget you have it.</span>
                </h2>
                <p className="mx-auto mt-8 max-w-[460px] text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
                  Free. iPhone-first. Built for the way home games actually
                  happen — so the chip doesn&apos;t just end up in a drawer.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4">
                  <AppStoreBadge size="lg" label="Get the app" />
                  <AndroidComingSoon />
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
