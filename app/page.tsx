/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Straddled — Poker night, itemized.",
  description:
    "Track every buy-in, rebuy, and cash-out in real time. Straddled does the math, names a Shark, and drops a receipt your group chat will actually open.",
};

const features = [
  {
    title: "Track every buy-in.",
    body: "Real-time chip count across the table. Rebuys in one tap.",
    image: "/screenshots/live-session.png",
  },
  {
    title: "Settle the math.",
    body: "Net-balance minimization. The fewest possible Venmo transfers.",
    image: "/screenshots/receipt-raw.png",
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
        <section className="relative overflow-hidden px-md pt-[120px] md:px-lg md:pt-[180px]">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-[40%] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(18,107,78,0.6) 0%, rgba(11,77,55,0.3) 35%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl text-center">
            <h1
              className="appear mx-auto max-w-[1100px] text-[52px] font-extrabold leading-[0.95] tracking-[-0.04em] text-text-primary md:text-[140px]"
              style={{ fontWeight: 800 }}
            >
              Settle the night.
              <br />
              Share the receipt.
            </h1>
            <p
              className="appear mx-auto mt-lg max-w-[520px] text-[15px] leading-[22px] text-text-secondary md:mt-xl md:text-[18px] md:leading-[28px]"
              style={{ animationDelay: "0.12s" }}
            >
              The poker session tracker your group chat has been faking with
              Notes and a calculator.
            </p>
            <div
              className="appear relative mt-xl flex justify-center md:mt-xxl"
              style={{ animationDelay: "0.24s" }}
            >
              <img
                src="/screenshots/live-session.png"
                alt="Straddled live session screen"
                className="relative w-[300px] rounded-[44px] md:w-[440px]"
                style={{
                  filter:
                    "drop-shadow(0 80px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(18,107,78,0.2))",
                  transform: "rotate(2deg)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ─── FEATURES (2 large showcase cards) ────────── */}
        <section
          id="how-it-works"
          className="px-md pt-mega md:px-lg md:pt-[180px]"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-[40px] font-extrabold leading-[1] tracking-[-0.03em] text-text-primary md:text-[88px]">
              Built for the table.
            </h2>
            <p className="mx-auto mt-md max-w-[500px] text-center text-[15px] text-text-tertiary md:text-[17px]">
              No spreadsheets. No napkins. No "wait, how many rebuys did you have?"
            </p>

            <div className="mt-xxxl grid grid-cols-1 gap-md md:mt-mega md:grid-cols-2 md:gap-lg">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="relative flex flex-col overflow-hidden rounded-[24px] border border-border bg-surface-primary"
                >
                  <div className="px-xl pt-xl md:px-xxl md:pt-xxl">
                    <h3 className="text-[28px] font-bold leading-[1.1] tracking-tight text-text-primary md:text-[36px]">
                      {f.title}
                    </h3>
                    <p className="mt-sm max-w-[400px] text-[14px] leading-[22px] text-text-secondary md:text-[15px]">
                      {f.body}
                    </p>
                  </div>
                  <div className="relative flex h-[320px] items-end justify-center overflow-hidden md:h-[400px]">
                    <div
                      className="pointer-events-none absolute inset-0 -z-10 opacity-30 blur-3xl"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 70%, rgba(18,107,78,0.4), transparent 65%)",
                      }}
                      aria-hidden="true"
                    />
                    <img
                      src={f.image}
                      alt=""
                      className="relative w-[180px] -mb-12 rounded-[28px] md:w-[240px]"
                      style={{
                        filter:
                          "drop-shadow(0 40px 50px rgba(0,0,0,0.5))",
                        transform: "rotate(-3deg)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SUPERLATIVES ─────────────────────────────── */}
        <section className="px-md pt-mega md:px-lg md:pt-[180px]">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-[40px] font-extrabold leading-[1] tracking-[-0.03em] text-text-primary md:text-[88px]">
              Name the Shark.
            </h2>
            <p className="mx-auto mt-md max-w-[500px] text-center text-[15px] text-text-tertiary md:text-[17px]">
              Seven superlatives, awarded automatically. No voting. No
              arguments.
            </p>

            {/* Featured Shark */}
            <div className="relative mt-xxxl overflow-hidden rounded-[24px] border border-gold-muted bg-surface-primary md:mt-mega">
              <div
                className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,197,94,0.6), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative px-xl py-xl md:px-xxl md:py-mega">
                <span className="text-[10px] font-bold uppercase tracking-caps text-gold-bright">
                  Headline Award
                </span>
                <h3 className="mt-sm text-[44px] font-extrabold leading-[1] tracking-[-0.03em] text-text-primary md:text-[96px]">
                  The Shark
                </h3>
                <p className="mt-md max-w-[440px] text-[15px] leading-[23px] text-text-secondary md:text-[17px] md:leading-[27px]">
                  Biggest net winner of the night. They didn&apos;t just take
                  your money — they made it look easy.
                </p>
              </div>
            </div>

            {/* Supporting six — 2-col on mobile, 3-col on tablet+ */}
            <div className="mt-md grid grid-cols-2 gap-sm md:mt-lg md:grid-cols-3 md:gap-md">
              {supportingSuperlatives.map((s) => (
                <div
                  key={s.name}
                  className="rounded-[16px] border border-border bg-surface-primary p-md md:p-lg"
                >
                  <h4 className="text-[16px] font-bold tracking-tight text-text-primary md:text-[18px]">
                    {s.name}
                  </h4>
                  <p className="mt-xs text-[12px] leading-[18px] text-text-secondary md:text-[13px] md:leading-[20px]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CLOSER (offsuit-style) ──────────────────── */}
        <section
          id="install"
          className="relative mt-mega overflow-hidden px-md py-mega md:px-lg md:py-[200px]"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(18,107,78,0.5), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[44px] font-extrabold leading-[0.98] tracking-[-0.03em] text-text-primary md:text-[120px]">
              Your next session
              <br />
              deserves a receipt.
            </h2>
            <p className="mx-auto mt-xl max-w-[560px] text-[15px] leading-[24px] text-text-secondary md:mt-xxl md:text-[18px] md:leading-[28px]">
              Free. iPhone-first. No ads, no real money, no nonsense. Built
              for the way home games actually happen.
            </p>
            <div className="mt-xxxl flex justify-center md:mt-mega">
              <AppStoreBadge size="lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
