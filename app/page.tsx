/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Banknote, Coins, Gem, Snowflake, Pickaxe, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreBadge, AndroidComingSoon } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Straddled — Poker night, itemized.",
  description:
    "Track every buy-in, rebuy, and cash-out in real time. Straddled does the math, names a Shark, and drops a receipt your group chat will actually open.",
};

type Award = {
  name: string;
  body: string;
  accent: "win" | "loss" | "iceman" | "gold" | "muted";
  Icon: ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
};

const supportingAwards: Award[] = [
  { name: "The ATM",     body: "cashcow reloaded 1×. Generous.",         accent: "loss",   Icon: Banknote },
  { name: "The Rock",    body: "cashcow sat tight — 1 min gap.",         accent: "muted",  Icon: Gem },
  { name: "The Swing",   body: "cashcow swung ±$20.00.",                 accent: "win",    Icon: TrendingUp },
  { name: "The Whale",   body: "Biggest total buy-in.",                  accent: "muted",  Icon: Coins },
  { name: "The Iceman",  body: "Broke exactly even. Warmed the chair.",  accent: "iceman", Icon: Snowflake },
  { name: "The Grinder", body: "4 sessions this month.",                 accent: "gold",   Icon: Pickaxe },
];

const accentColor: Record<Award["accent"], string> = {
  win: "#4ADE80",
  loss: "#F87171",
  iceman: "#7DD3FC",
  gold: "#D4B370",
  muted: "#FAFAF7",
};

const accentTint: Record<Award["accent"], string> = {
  win: "rgba(74,222,128,0.12)",
  loss: "rgba(248,113,113,0.12)",
  iceman: "rgba(125,211,252,0.12)",
  gold: "rgba(212,179,112,0.14)",
  muted: "rgba(255,255,255,0.06)",
};

const feltPanel =
  "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black">
        {/* ─────────────── HERO ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-44">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Straddled · Poker Night, Itemized</p>
            <h1
              className="font-display mt-8 text-white"
              style={{
                fontSize: "clamp(1.75rem, 7.5vw, 8rem)",
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block">Settle the night.</span>
              <span className="block">Share the receipt.</span>
            </h1>
            <p className="mt-8 max-w-[560px] text-[16px] leading-[1.6] text-white/60 md:text-[17px]">
              The poker session tracker your group chat has been faking with
              Notes and a calculator. Track every buy-in. Name the Shark.
              Drop a receipt the chat will actually open.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <AppStoreBadge size="lg" label="Get the app" />
              <AndroidComingSoon />
            </div>

            {/* The receipt, as a flat image — its own felt-green header is the only "panel." */}
            <div className="mt-20 flex justify-center md:mt-28">
              <img
                src="/screenshots/receipt-share.png"
                alt="Straddled settlement receipt — Sunday Sesh, $80 pot, four players, awards and settle-up."
                className="w-[300px] rounded-[28px] md:w-[420px]"
              />
            </div>
          </div>
        </section>

        {/* ─────────────── BUILT FOR THE TABLE ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-48">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">How it works</p>
            <h2
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Built for the table.
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.6] text-white/50 md:text-[16px]">
              No spreadsheets. No napkins. No &ldquo;wait, how many rebuys did
              you have?&rdquo;
            </p>

            <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-8 md:p-10">
                <div>
                  <p className="eyebrow">Live session</p>
                  <h3 className="mt-6 text-[28px] font-semibold leading-[1.1] tracking-tight text-white md:text-[34px]">
                    Track every buy-in.
                  </h3>
                  <p className="mt-4 max-w-[360px] text-[15px] leading-[1.6] text-white/55">
                    Real-time chip count across the table. Rebuys in one tap.
                    The pot updates as the night goes.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <img
                    src="/screenshots/live-session.png"
                    alt="Live session screen: Sunday Sesh, $80 pot, three players, Cash Out CTA."
                    className="w-[220px] rounded-[28px] md:w-[260px]"
                  />
                </div>
              </article>

              <article className="flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-8 md:p-10">
                <div>
                  <p className="eyebrow">Settlement</p>
                  <h3 className="mt-6 text-[28px] font-semibold leading-[1.1] tracking-tight text-white md:text-[34px]">
                    Settle the math.
                  </h3>
                  <p className="mt-4 max-w-[360px] text-[15px] leading-[1.6] text-white/55">
                    Net-balance minimization. The fewest possible Venmo
                    transfers — the math the room would do if anyone could be
                    bothered.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <img
                    src="/screenshots/settlement.png"
                    alt="Settlement screen: results, awards, settle-up for Sunday Sesh."
                    className="w-[220px] rounded-[28px] md:w-[260px]"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ─────────────── NAME THE SHARK ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-48">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The awards</p>
            <h2
              className="font-display mt-6 text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Name the Shark.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-white/50 md:text-[16px]">
              Seven superlatives, handed out automatically at settle-up. No
              voting. No arguments. The group chat takes care of the rest.
            </p>

            {/* Headline award — The Shark */}
            <div
              className="grain relative mt-20 overflow-hidden rounded-3xl p-10 md:p-14"
              style={{
                background:
                  "radial-gradient(ellipse at top left, #1A6B52 0%, #0F5340 45%, #0A3D2E 100%)",
              }}
            >
              <span
                aria-hidden
                className="numeral pointer-events-none absolute -right-4 -top-12 z-0 select-none md:-right-8 md:-top-20"
                style={{
                  fontSize: "clamp(8rem, 24vw, 22rem)",
                  color: "rgba(212,179,112,0.10)",
                }}
              >
                01
              </span>
              <div className="relative z-10">
                <p className="eyebrow text-white/80">Headline award</p>
                <h3
                  className="font-display mt-6 text-white"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    fontWeight: 500,
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                  }}
                >
                  The Shark.
                </h3>
                <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
                  Biggest net winner of the night. They didn&apos;t just take
                  your money — they made it look easy. Tonight&apos;s Shark gets
                  their name on the receipt.
                </p>
              </div>
            </div>

            {/* Supporting six — each with icon + numeral */}
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {supportingAwards.map((a, i) => {
                const color = accentColor[a.accent];
                const tint = accentTint[a.accent];
                const Icon = a.Icon;
                return (
                  <article
                    key={a.name}
                    className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-7 transition-colors hover:border-[#D4B370]/[0.25]"
                  >
                    <span
                      aria-hidden
                      className="numeral pointer-events-none absolute right-5 top-2 transition-colors group-hover:[color:rgba(212,179,112,0.32)]"
                      style={{ fontSize: "5.5rem" }}
                    >
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <div
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[12px]"
                      style={{ backgroundColor: tint }}
                    >
                      <Icon size={22} strokeWidth={1.5} color={color} />
                    </div>
                    <div className="relative z-10">
                      <h4
                        className="text-[20px] font-semibold tracking-tight"
                        style={{ color }}
                      >
                        {a.name}
                      </h4>
                      <p className="mt-2 text-[14px] leading-[1.55] text-white/50">
                        {a.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── RECEIPTS THAT GET OPENED ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-48">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Share the receipt</p>
            <h2
              className="font-display mt-6 max-w-[680px] text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Receipts that get opened.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-white/50 md:text-[16px]">
              One image. Pot, results, awards, settle-up. Drop it in the chat
              and watch your group actually open it for once.
            </p>

            <div className="mt-16 grid grid-cols-1 items-center gap-12 md:mt-20 md:grid-cols-2 md:gap-20">
              <div className="space-y-7">
                <Stat label="Pot" value="$80.00" />
                <Stat label="Players" value="4" />
                <Stat label="Settle-up transfers" value="2" />
                <Stat label="Shark" value="cashcow · +$20.00" gold />
              </div>
              <div className="flex justify-center">
                <img
                  src="/screenshots/receipt-raw.png"
                  alt="Straddled receipt detail — results, awards, settle-up."
                  className="w-[280px] rounded-[32px] md:w-[340px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── KNOW YOUR NUMBERS — Home + Stats ─────────────── */}
        <section className="px-6 pt-32 md:px-10 md:pt-48">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Know your numbers</p>
            <h2
              className="font-display mt-6 max-w-[800px] text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              The record doesn&apos;t lie.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-white/50 md:text-[16px]">
              Every session counts toward your line. Last five games, win rate,
              biggest win, longest streak — all there the next time someone at
              the table claims they&apos;re &ldquo;running cold.&rdquo;
            </p>

            <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="flex min-h-[560px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-8 md:p-10">
                <div>
                  <p className="eyebrow">Home</p>
                  <h3 className="mt-6 text-[28px] font-semibold leading-[1.1] tracking-tight text-white md:text-[34px]">
                    Your last five.
                  </h3>
                  <p className="mt-4 max-w-[340px] text-[15px] leading-[1.6] text-white/55">
                    Open the app. See the line. The chart that doesn&apos;t
                    care how you remember the night.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <img
                    src="/screenshots/home.png"
                    alt="Home tab showing $220 across last 5 games, 80% win rate, 2-week streak."
                    className="w-[220px] rounded-[28px] md:w-[260px]"
                  />
                </div>
              </article>

              <article className="flex min-h-[560px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-8 md:p-10">
                <div>
                  <p className="eyebrow">Stats</p>
                  <h3 className="mt-6 text-[28px] font-semibold leading-[1.1] tracking-tight text-white md:text-[34px]">
                    Every angle.
                  </h3>
                  <p className="mt-4 max-w-[340px] text-[15px] leading-[1.6] text-white/55">
                    Biggest win, biggest loss, average result, total buy-ins.
                    Filter by last 5, 30 days, or all time.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <img
                    src="/screenshots/stats.png"
                    alt="Stats tab: total earnings +$120, biggest win +$70, biggest loss -$40, 80% win rate."
                    className="w-[220px] rounded-[28px] md:w-[260px]"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ─────────────── CLOSER ─────────────── */}
        <section id="install" className="px-6 py-40 md:px-10 md:py-56">
          <div className="mx-auto max-w-6xl">
            <div
              className="grain relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16 md:py-32"
              style={{ background: feltPanel }}
            >
              <div className="relative z-10">
                <p className="eyebrow text-white/80">Straddled</p>
                <h2
                  className="font-display mx-auto mt-6 max-w-[920px] text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 6.5vw, 6rem)",
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span className="block">Your next session</span>
                  <span className="block">deserves a receipt.</span>
                </h2>
                <p className="mx-auto mt-8 max-w-[520px] text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
                  Free. iPhone-first. No ads, no real money, no nonsense. Built
                  for the way home games actually happen.
                </p>
                <div className="mt-12 flex flex-col items-center gap-4">
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

function Stat({
  label,
  value,
  gold = false,
}: {
  label: string;
  value: string;
  gold?: boolean;
}) {
  return (
    <div className="border-b border-[#D4B370]/[0.1] pb-5">
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
      <p
        className={`mt-2 text-[28px] font-semibold tracking-tight md:text-[32px] ${
          gold ? "text-[#D4B370]" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
