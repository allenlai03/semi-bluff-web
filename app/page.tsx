/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
        <section className="relative overflow-hidden px-md pt-[112px] md:px-lg md:pt-[160px]">
          {/* Felt-green halo behind phone */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-[35%] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(18,107,78,0.6) 0%, rgba(11,77,55,0.3) 35%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="mx-auto max-w-7xl text-center">
            <h1
              className="appear mx-auto max-w-[1100px] text-[56px] font-extrabold leading-[0.95] tracking-[-0.04em] text-text-primary md:text-[140px]"
              style={{ fontWeight: 800 }}
            >
              Settle the night.
              <br />
              Share the receipt.
            </h1>

            <p
              className="appear mx-auto mt-xl max-w-[520px] text-[16px] leading-[24px] text-text-secondary md:text-[18px] md:leading-[28px]"
              style={{ animationDelay: "0.12s" }}
            >
              The poker session tracker your group chat has been faking with
              Notes and a calculator.
            </p>

            <div
              className="appear relative mt-xxxl flex justify-center md:mt-mega"
              style={{ animationDelay: "0.24s" }}
            >
              <img
                src="/screenshots/live-session.png"
                alt="Straddled live session screen"
                className="relative w-[300px] rounded-[44px] md:w-[420px]"
                style={{
                  filter:
                    "drop-shadow(0 80px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(18,107,78,0.2))",
                  transform: "rotate(2deg)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ─── MECHANICS ────────────────────────────────── */}
        <section
          id="how-it-works"
          className="px-md pt-mega md:px-lg md:pt-[160px]"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-[42px] font-extrabold leading-[1] tracking-[-0.02em] text-text-primary md:text-[88px]">
              Three taps.
            </h2>
            <p className="mx-auto mt-md max-w-[480px] text-center text-[15px] text-text-tertiary md:text-[17px]">
              One source of truth for the night.
            </p>

            <div className="mt-xxxl grid gap-md md:mt-mega md:grid-cols-3 md:gap-lg">
              {mechanics.map((m) => (
                <div
                  key={m.num}
                  className="rounded-[20px] border border-border bg-surface-primary p-xl md:p-xxl"
                >
                  <span className="text-[14px] font-bold text-gold-light">
                    {m.num}
                  </span>
                  <h3 className="mt-lg text-[28px] font-bold tracking-tight text-text-primary md:text-[36px]">
                    {m.title}
                  </h3>
                  <p className="mt-sm text-[14px] leading-[22px] text-text-secondary md:text-[15px]">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THE RECEIPT ──────────────────────────────── */}
        <section id="receipt" className="px-md pt-mega md:px-lg md:pt-[160px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-[42px] font-extrabold leading-[1] tracking-[-0.02em] text-text-primary md:text-[88px]">
              The receipt.
            </h2>
            <p className="mx-auto mt-md max-w-[520px] text-center text-[15px] text-text-tertiary md:text-[17px]">
              Every session ends with a graphic built to land in iMessage. Drop
              it in the group chat and watch.
            </p>

            <div className="relative mt-xxxl flex justify-center md:mt-mega">
              <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(201,168,102,0.4), transparent 65%)",
                }}
                aria-hidden="true"
              />
              <img
                src="/screenshots/receipt-raw.png"
                alt="A Straddled session receipt"
                className="w-full max-w-[380px] rounded-[20px]"
                style={{
                  filter:
                    "drop-shadow(0 50px 60px rgba(0,0,0,0.65)) drop-shadow(0 0 0 1px rgba(201,168,102,0.22))",
                }}
              />
            </div>
          </div>
        </section>

        {/* ─── SUPERLATIVES ─────────────────────────────── */}
        <section className="px-md pt-mega md:px-lg md:pt-[160px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-[42px] font-extrabold leading-[1] tracking-[-0.02em] text-text-primary md:text-[88px]">
              Name the Shark.
            </h2>
            <p className="mx-auto mt-md max-w-[480px] text-center text-[15px] text-text-tertiary md:text-[17px]">
              Seven superlatives, awarded automatically. No voting. No
              arguments.
            </p>

            <div className="mt-xxxl grid gap-md md:mt-mega md:grid-cols-2 md:gap-lg">
              {/* Featured Shark */}
              <div className="relative overflow-hidden rounded-[20px] border border-gold-muted bg-surface-primary p-xl md:p-xxl">
                <div
                  className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(34,197,94,0.5), transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <span className="text-[10px] font-bold uppercase tracking-caps text-gold-light">
                  Headline Award
                </span>
                <h3 className="mt-md text-[48px] font-extrabold leading-[1] tracking-[-0.02em] text-text-primary md:text-[72px]">
                  The Shark
                </h3>
                <p className="mt-lg max-w-[380px] text-[15px] leading-[23px] text-text-secondary">
                  Biggest net winner of the night. They didn&apos;t just take
                  your money — they made it look easy.
                </p>
              </div>

              {/* Supporting list */}
              <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
                {supportingSuperlatives.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-[14px] border border-border bg-surface-primary p-lg"
                  >
                    <h4 className="text-[18px] font-bold tracking-tight text-text-primary">
                      {s.name}
                    </h4>
                    <p className="mt-xs text-[13px] leading-[20px] text-text-secondary">
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
          className="relative mt-mega overflow-hidden bg-bg-secondary px-md py-mega md:px-lg md:py-[160px]"
        >
          {/* Subtle felt halo */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(18,107,78,0.5), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[52px] font-extrabold leading-[0.98] tracking-[-0.03em] text-text-primary md:text-[112px]">
              Your next session
              <br />
              deserves a receipt.
            </h2>
            <p className="mx-auto mt-xl max-w-[440px] text-[15px] leading-[24px] text-text-secondary md:text-[17px]">
              Free. iPhone first. No ads, no real money, no nonsense.
            </p>

            <div className="mt-xxxl flex flex-col items-center gap-sm">
              <AppStoreBadge size="lg" />
              <AndroidComingSoon />
            </div>

            <p className="mt-mega text-[10px] uppercase tracking-caps text-text-tertiary">
              No real money moves through the app · Built for home games · Used
              at WSOP 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
