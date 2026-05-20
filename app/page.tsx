/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeltHero } from "@/components/FeltHero";
import { Card } from "@/components/Card";
import {
  AppStoreBadge,
  AndroidComingSoon,
} from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Straddled — Poker night, itemized.",
  description:
    "Track every buy-in, rebuy, and cash-out in real time. Straddled does the math, names a Shark, and drops a receipt your group chat will actually open.",
};

const mechanics = [
  {
    num: "01",
    title: "Start",
    body: "Pick the group. Set the stakes. Everyone joins from their phone.",
  },
  {
    num: "02",
    title: "Log",
    body: "Buy-ins and rebuys in one tap. Cash-outs at the end.",
  },
  {
    num: "03",
    title: "Settle",
    body: "We compute who owes who. You hand out the receipt.",
  },
];

const supportingSuperlatives = [
  { name: "The ATM", body: "Most rebuys." },
  { name: "The Rock", body: "Longest stretch on one stack." },
  { name: "The Whale", body: "Biggest total buy-in." },
  { name: "The Phoenix", body: "Came back from underwater." },
  { name: "The Iceman", body: "Broke exactly even." },
  { name: "The Grinder", body: "Most sessions played." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg-primary">
        {/* ─── HERO ─────────────────────────────────────── */}
        <FeltHero className="relative px-md pb-mega pt-mega md:px-lg">
          {/* Top vignette to recess the felt under the nav */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-primary/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg-primary" />

          <div className="relative mx-auto max-w-6xl pt-xxl">
            <div className="grid items-center gap-xxl md:grid-cols-[1.05fr_0.95fr]">
              <div className="appear">
                <h1 className="font-display text-[48px] font-bold leading-[1.02] tracking-[-0.02em] text-text-primary md:text-[88px]">
                  Settle the night.
                  <br />
                  <span className="text-gold-light">Share the receipt.</span>
                </h1>
                <p
                  className="mt-xl max-w-[480px] text-[17px] leading-[26px] text-text-secondary appear"
                  style={{ animationDelay: "0.15s" }}
                >
                  The poker session tracker your group chat has been faking
                  with Notes and a calculator.
                </p>
                <div
                  className="mt-xxl flex flex-col items-start gap-sm appear"
                  style={{ animationDelay: "0.3s" }}
                >
                  <AppStoreBadge size="lg" />
                  <AndroidComingSoon />
                </div>
              </div>

              <div
                className="relative flex h-[480px] items-center justify-center appear md:h-[640px]"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src="/screenshots/live-session.png"
                  alt="Straddled live session screen"
                  className="relative w-[280px] -rotate-[2deg] rounded-[44px] shadow-felt md:w-[360px]"
                  style={{
                    filter: "drop-shadow(0 60px 60px rgba(0,0,0,0.5))",
                  }}
                />
              </div>
            </div>
          </div>
        </FeltHero>

        {/* ─── MECHANICS ────────────────────────────────── */}
        <section
          id="how-it-works"
          className="border-t border-divider bg-bg-primary px-md py-mega md:px-lg"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid items-end gap-lg md:grid-cols-[1fr_auto]">
              <h2 className="font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.01em] text-text-primary md:text-[56px]">
                Three taps.
                <br />
                <span className="text-text-tertiary">One source of truth.</span>
              </h2>
              <span className="eyebrow self-end md:pb-md">Mechanics</span>
            </div>

            <div className="mt-xxxl grid gap-xs md:grid-cols-3">
              {mechanics.map((m, i) => (
                <div
                  key={m.num}
                  className="group border-t border-border py-lg md:border-t md:pr-lg"
                >
                  <div className="flex items-baseline gap-md">
                    <span className="font-display text-[40px] font-bold leading-none text-gold-light">
                      {m.num}
                    </span>
                    <span className="text-[11px] uppercase tracking-caps text-text-tertiary">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-md font-display text-[28px] font-semibold text-text-primary">
                    {m.title}
                  </h3>
                  <p className="mt-sm max-w-[320px] text-[15px] leading-[24px] text-text-secondary">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THE RECEIPT ──────────────────────────────── */}
        <section
          id="receipt"
          className="border-t border-divider bg-bg-secondary px-md py-mega md:px-lg"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-xxl md:grid-cols-2">
              <div>
                <span className="eyebrow">The Receipt</span>
                <h2 className="mt-md font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.01em] text-text-primary md:text-[56px]">
                  The group chat
                  <br />
                  <span className="text-gold-light">artifact.</span>
                </h2>
                <p className="mt-lg max-w-[440px] text-[16px] leading-[26px] text-text-secondary">
                  Every session ends with a graphic built to land in iMessage.
                  Final stacks, settlements, six superlatives — drop it in the
                  group chat and watch.
                </p>
              </div>

              <div className="relative flex justify-center">
                <div
                  className="absolute inset-0 -z-10 opacity-50 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(201,168,102,0.18), transparent 60%)",
                  }}
                />
                <img
                  src="/screenshots/receipt-raw.png"
                  alt="A Straddled session receipt"
                  className="relative w-full max-w-[360px] rounded-[18px]"
                  style={{
                    filter:
                      "drop-shadow(0 40px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 0 1px rgba(201,168,102,0.18))",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── SUPERLATIVES (editorial) ─────────────────── */}
        <section className="border-t border-divider bg-bg-primary px-md py-mega md:px-lg">
          <div className="mx-auto max-w-6xl">
            <span className="eyebrow">The Superlatives</span>
            <h2 className="mt-md max-w-3xl font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.01em] text-text-primary md:text-[56px]">
              Every table has a Shark.
              <br />
              <span className="text-gold-light">We name them.</span>
            </h2>

            {/* Featured Shark + supporting grid */}
            <div className="mt-xxxl grid gap-xl md:grid-cols-[1.2fr_0.8fr]">
              <Card className="relative overflow-hidden p-xl md:p-xxl">
                <div
                  className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(34,197,94,0.4), transparent 70%)",
                  }}
                />
                <span className="eyebrow">Headline Award</span>
                <h3 className="mt-md font-display text-[44px] font-bold leading-[1] tracking-[-0.02em] text-text-primary md:text-[72px]">
                  The Shark
                </h3>
                <p className="mt-lg max-w-[420px] text-[16px] leading-[26px] text-text-secondary">
                  Biggest net winner of the night. They didn&apos;t just take
                  your money — they made it look easy. Straddled awards it
                  automatically. No voting. No arguments.
                </p>
                <p className="mt-xl text-[11px] uppercase tracking-caps text-text-tertiary">
                  +$847 example pot · awarded 1 per session
                </p>
              </Card>

              <div className="grid gap-xs content-start">
                {supportingSuperlatives.map((s) => (
                  <div
                    key={s.name}
                    className="border-t border-border py-md last:border-b"
                  >
                    <h4 className="font-display text-[20px] font-semibold text-text-primary">
                      {s.name}
                    </h4>
                    <p className="mt-xs text-[14px] text-text-secondary">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CLOSER ───────────────────────────────────── */}
        <section
          id="install"
          className="relative border-t border-divider bg-bg-primary px-md py-mega md:px-lg"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[44px] font-bold leading-[1.02] tracking-[-0.02em] text-text-primary md:text-[80px]">
              Your next session
              <br />
              <span className="text-gold-light">deserves a receipt.</span>
            </h2>
            <p className="mx-auto mt-xl max-w-[420px] text-[15px] leading-[24px] text-text-secondary">
              Free. iPhone first. No ads, no real money, no nonsense.
            </p>
            <div className="mt-xxl flex flex-col items-center gap-sm">
              <AppStoreBadge size="lg" />
              <AndroidComingSoon />
            </div>
          </div>

          {/* Bottom hairline accent */}
          <div className="mx-auto mt-mega max-w-6xl border-t border-divider pt-md">
            <p className="text-center text-[10px] uppercase tracking-caps text-text-tertiary">
              No real money moves through the app · Built for home games · Used at WSOP 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
