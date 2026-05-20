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
    title: "Start the session.",
    body: "Pick the group, set the stakes. Everyone joins from their phone.",
  },
  {
    num: "02",
    title: "Log the action.",
    body: "Buy-ins and rebuys in one tap. Cash-outs at the end. Straddled keeps the math honest in real time.",
  },
  {
    num: "03",
    title: "Settle and share.",
    body: "We compute who owes who in the fewest possible Venmo transfers. Then we hand you the receipt.",
  },
];

const superlatives = [
  {
    name: "The Shark",
    body: "Biggest net winner of the night.",
    icon: "🦈",
  },
  {
    name: "The ATM",
    body: "Most rebuys. We're not judging. (We are.)",
    icon: "🏧",
  },
  {
    name: "The Rock",
    body: "Longest stretch on a single stack. Disciplined or scared, same outcome.",
    icon: "🪨",
  },
  {
    name: "The Whale",
    body: "Biggest total buy-in. Brave. Possibly drunk.",
    icon: "🐋",
  },
  {
    name: "The Phoenix",
    body: "Came back from underwater. The arc your group will retell.",
    icon: "🔥",
  },
  {
    name: "The Iceman",
    body: "Broke exactly even. Statistically improbable. Suspiciously calm.",
    icon: "❄️",
  },
  {
    name: "The Grinder",
    body: "Most sessions played. The reason the game still exists.",
    icon: "⏱️",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg-primary">
        {/* HERO */}
        <FeltHero className="px-md pb-huge pt-mega md:px-lg">
          <div className="mx-auto max-w-6xl pt-xxl">
            <div className="grid items-center gap-xxl md:grid-cols-2">
              <div>
                <span className="eyebrow">Poker night, itemized.</span>
                <h1 className="mt-md font-display text-[44px] font-bold leading-[1.05] tracking-tight text-text-primary md:text-[72px]">
                  Settle the night.
                  <br />
                  Share the receipt.
                </h1>
                <p className="mt-lg max-w-[520px] text-[18px] leading-[28px] text-text-secondary">
                  Track every buy-in, rebuy, and cash-out in real time.
                  Straddled does the math, names a Shark, and drops a receipt
                  your group chat will actually open.
                </p>
                <div className="mt-xl flex flex-col items-start gap-sm">
                  <AppStoreBadge size="lg" />
                  <AndroidComingSoon />
                </div>
              </div>

              <div className="relative flex h-[460px] items-center justify-center md:h-[560px]">
                <img
                  src="/screenshots/live-session.png"
                  alt="Straddled live session screen"
                  className="absolute left-1/2 top-1/2 w-[240px] -translate-x-[60%] -translate-y-1/2 -rotate-[5deg] rounded-[40px] shadow-felt md:w-[300px]"
                />
                <img
                  src="/screenshots/receipt-raw.png"
                  alt="Straddled session receipt"
                  className="absolute left-1/2 top-1/2 w-[180px] -translate-x-[-10%] -translate-y-[55%] rotate-[8deg] rounded-[18px] shadow-felt md:w-[220px]"
                />
              </div>
            </div>

            <p className="mt-xxxl text-center text-[11px] uppercase tracking-caps text-text-tertiary">
              Built for home games · Used at WSOP 2026 · No real money moves
              through the app
            </p>
          </div>
        </FeltHero>

        {/* THE RECEIPT */}
        <section id="receipt" className="px-md py-mega md:px-lg">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow block text-center">The Receipt</span>
            <h2 className="mt-md text-center font-display text-[36px] font-semibold leading-[1.1] text-text-primary md:text-[44px]">
              The group chat artifact.
            </h2>
            <p className="mx-auto mt-md max-w-[560px] text-center text-[16px] leading-[26px] text-text-secondary">
              Every session ends with a shareable receipt. Final stacks. Net
              P/L. Settlements. Six superlatives. Drop it in iMessage and
              watch the reactions roll in.
            </p>
            <Card className="mt-xxl p-md md:p-lg">
              <img
                src="/screenshots/receipt-raw.png"
                alt="A Straddled session receipt"
                className="mx-auto block w-full max-w-[420px] rounded-md"
              />
            </Card>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="border-t border-divider bg-bg-secondary px-md py-mega md:px-lg"
        >
          <div className="mx-auto max-w-6xl">
            <span className="eyebrow block text-center">Mechanics</span>
            <h2 className="mx-auto mt-md max-w-3xl text-center font-display text-[32px] font-semibold leading-[1.1] text-text-primary md:text-[40px]">
              Three taps. One source of truth.
            </h2>
            <div className="mt-xxxl grid gap-lg md:grid-cols-3">
              {mechanics.map((m) => (
                <Card key={m.num} className="p-lg">
                  <span className="font-display text-[32px] font-bold text-gold">
                    {m.num}
                  </span>
                  <h3 className="mt-md text-[11px] uppercase tracking-caps text-gold-light">
                    {m.title}
                  </h3>
                  <p className="mt-sm text-[15px] leading-[24px] text-text-secondary">
                    {m.body}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SUPERLATIVES */}
        <section className="px-md py-mega md:px-lg">
          <div className="mx-auto max-w-6xl">
            <span className="eyebrow block text-center">The Superlatives</span>
            <h2 className="mx-auto mt-md max-w-3xl text-center font-display text-[32px] font-semibold leading-[1.1] text-text-primary md:text-[40px]">
              Every table has a Shark. We name them.
            </h2>
            <div className="mt-xxxl grid gap-md md:grid-cols-2">
              {superlatives.map((s) => (
                <Card key={s.name} className="flex items-start gap-md p-lg">
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {s.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-[22px] font-semibold text-gold-light">
                      {s.name}
                    </h3>
                    <p className="mt-xs text-[14px] leading-[22px] text-text-secondary">
                      {s.body}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HOSTS */}
        <section className="border-t border-divider bg-bg-secondary px-md py-mega md:px-lg">
          <div className="mx-auto max-w-5xl">
            <Card className="p-xl md:p-xxl">
              <h2 className="font-display text-[28px] font-semibold leading-[1.15] text-text-primary md:text-[40px]">
                If you host, you already know.
              </h2>
              <div className="mt-xl grid gap-xl md:grid-cols-2">
                <p className="text-[16px] leading-[26px] text-text-secondary">
                  Somebody forgot how many rebuys they had. Somebody else
                  swears they only bought in twice. Now it&apos;s 2 a.m.,
                  everyone wants to leave, and you&apos;re doing algebra on a
                  napkin.
                </p>
                <p className="text-[16px] leading-[26px] text-text-secondary">
                  Straddled is the napkin. And the math. And the receipt. Set
                  it up once and your home game runs itself.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* VEGAS WSOP */}
        <FeltHero className="px-md py-xxxl md:px-lg">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Vegas, 2026</span>
            <h2 className="mt-md font-display text-[28px] font-semibold leading-[1.15] text-text-primary md:text-[40px]">
              Built for the trip back to the suite.
            </h2>
            <p className="mx-auto mt-md max-w-[520px] text-[16px] leading-[26px] text-text-secondary">
              Find us around the Rio. We&apos;re handing out chips that
              aren&apos;t worth anything but will make your group chat
              funnier.
            </p>
          </div>
        </FeltHero>

        {/* INSTALL CLOSER */}
        <FeltHero id="install" className="px-md py-mega md:px-lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[40px] font-bold leading-[1.05] text-text-primary md:text-[56px]">
              Your next session deserves a receipt.
            </h2>
            <p className="mx-auto mt-lg max-w-[460px] text-[16px] leading-[26px] text-text-secondary">
              Free. iPhone first. No ads, no real money, no nonsense.
            </p>
            <div className="mt-xl flex flex-col items-center gap-sm">
              <AppStoreBadge size="lg" />
              <AndroidComingSoon />
            </div>
          </div>
        </FeltHero>
      </main>
      <Footer />
    </>
  );
}
