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
        {/* ─────────────── HERO ─────────────── */}
        <section className="px-6 pt-28 md:px-10 md:pt-40">
          <div className="mx-auto max-w-6xl">
            <div
              className="grain relative overflow-hidden rounded-3xl px-7 py-16 md:px-14 md:py-24"
              style={{ background: feltPanel }}
            >
              <div className="relative z-10">
                <p className="eyebrow text-white/80">
                  WSOP 2026 · Las Vegas
                </p>
                <h1
                  className="font-display mt-8 text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 7.5vw, 8rem)",
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span className="block">You kept</span>
                  <span className="block">the chip.</span>
                </h1>
                <p className="mt-8 max-w-[520px] text-[16px] leading-[1.6] text-white/75 md:text-[17px]">
                  Thanks for grabbing one. Straddled is the app I built — it&apos;s
                  how I keep track of every home game I run. The chip in your
                  pocket looks like its logo because the logo looks like a chip.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <AppStoreBadge size="lg" label="Get the app" />
                  <AndroidComingSoon />
                </div>

                {/* The chip — visible reference to the one you're holding */}
                <div className="mt-16 flex items-center gap-5 md:mt-20">
                  <img
                    src="/brand/logo.png"
                    alt="Straddled chip logo — the same mark on the chip in your pocket."
                    className="h-20 w-20 md:h-24 md:w-24"
                    style={{ borderRadius: 18 }}
                  />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                      The chip you&apos;re holding
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.55] text-white/70 md:text-[15px]">
                      Same dashed-gold mark. Same app. Keep it — it&apos;s yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── WHAT IS STRADDLED ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-44">
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
                    className="w-[200px] rounded-[24px] md:w-[240px]"
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
                    className="w-[200px] rounded-[24px] md:w-[240px]"
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
