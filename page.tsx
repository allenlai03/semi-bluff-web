// app/page.tsx
// Reference landing page for Straddled
// Aesthetic: matches the iOS app — felt green + chip gold on black, serif headlines, sans body.

import Link from "next/link";
import { Bodoni_Moda, Inter } from "next/font/google";

const serif = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export default function Page() {
  return (
    <main
      className={`${serif.variable} ${sans.variable} bg-black font-[var(--font-sans)] text-[#FAFAF7] antialiased selection:bg-[#D4B370] selection:text-black`}
    >
      <Nav />
      <Hero />
      <FeatureGrid />
      <Awards />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      <Link href="/" className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-[#D4B370]/40 text-[11px] font-semibold text-[#D4B370]">
          S
        </span>
        <span className="text-white">Straddled</span>
      </Link>
      <Link
        href="#download"
        className="rounded-full bg-[#D4B370] px-5 py-2 text-[13px] font-semibold text-black transition hover:bg-[#E8C988]"
      >
        Get the app
      </Link>
    </nav>
  );
}

/* ---------- HERO ---------- */
// Serif headline on black. Felt-green radial glow behind for warmth.
function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 text-center">
      {/* Subtle felt-green glow, far behind */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, #0F5340 0%, transparent 60%)",
        }}
      />

      <span className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B370]">
        The poker session tracker
      </span>

      <h1
        className="font-[var(--font-serif)] font-medium leading-[1.0] tracking-[-0.02em] text-white"
        style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
      >
        Settle the night.
        <br />
        <span className="italic text-[#D4B370]">Share the receipt.</span>
      </h1>

      <p className="mt-8 max-w-md text-[15px] leading-relaxed text-white/60 md:text-base">
        The poker session tracker your group chat has been faking with Notes and a calculator.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="#download"
          className="rounded-full bg-[#D4B370] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#E8C988]"
        >
          Get the app
        </Link>
        <Link
          href="#how"
          className="rounded-full border border-[#D4B370]/40 px-7 py-3.5 text-sm font-semibold text-[#D4B370] transition hover:bg-[#D4B370]/10"
        >
          See a receipt
        </Link>
      </div>
    </section>
  );
}

/* ---------- FEATURE GRID ---------- */
function FeatureGrid() {
  return (
    <section id="how" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B370]">
            Features
          </span>
          <h2
            className="mt-4 font-[var(--font-serif)] font-medium leading-[1.05] tracking-[-0.015em] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Built for the table.
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            No spreadsheets. No napkins. No &quot;wait, how many rebuys did you have?&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Wide card — Live tracking */}
          <FeatureCard
            className="md:col-span-2"
            eyebrow="Live tracking"
            title="Every buy-in, one tap."
            description="Real-time chip count across the table. Rebuys logged in a tap."
          />

          {/* Narrow — Settlement */}
          <FeatureCard
            eyebrow="Settlement"
            title="Fewest Venmo transfers."
            description="Net-balance minimization. No more 11-person payment chains."
          />

          {/* Narrow — Awards */}
          <FeatureCard
            eyebrow="Awards"
            title="Name the Shark."
            description="Seven superlatives, awarded automatically."
          />

          {/* Wide — Receipt */}
          <FeatureCard
            className="md:col-span-2"
            eyebrow="The Receipt"
            title="Shareable. Screenshotable. Settled."
            description="The receipt is the brag, the proof, and the group-chat post."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[260px] flex-col justify-between rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-8 md:p-10 ${className}`}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#D4B370]">
        {eyebrow}
      </span>
      <div className="max-w-sm">
        <h3 className="text-2xl font-semibold leading-[1.15] tracking-[-0.01em] text-white md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-white/60">{description}</p>
      </div>
    </div>
  );
}

/* ---------- AWARDS ---------- */
// Mirrors the app's Awards screen — Shark gets the big card, six minor get small cards.
function Awards() {
  const minor = [
    { name: "The ATM", desc: "Most rebuys.", tone: "loss" },
    { name: "The Rock", desc: "Longest stretch on one stack.", tone: "neutral" },
    { name: "The Whale", desc: "Biggest total buy-in.", tone: "neutral" },
    { name: "The Phoenix", desc: "Came back from underwater.", tone: "win" },
    { name: "The Iceman", desc: "Broke exactly even.", tone: "ice" },
    { name: "The Grinder", desc: "Most sessions played.", tone: "neutral" },
  ] as const;

  const toneColor = {
    win: "text-[#4ADE80]",
    loss: "text-[#F87171]",
    ice: "text-[#7DD3FC]",
    neutral: "text-[#D4B370]",
  };

  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B370]">
            Awards
          </span>
          <h2
            className="mt-4 font-[var(--font-serif)] font-medium leading-[1.05] tracking-[-0.015em] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Name the Shark.
          </h2>
          <p className="mt-4 text-white/60">
            Seven superlatives, awarded automatically. No voting. No arguments.
          </p>
        </div>

        {/* Headline award — felt green panel */}
        <div
          className="mb-4 flex min-h-[220px] flex-col justify-between rounded-3xl p-10 md:p-12"
          style={{
            background:
              "radial-gradient(ellipse at top left, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)",
          }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#D4B370]">
            Headline award
          </span>
          <div className="max-w-lg">
            <h3 className="font-[var(--font-serif)] text-4xl font-medium tracking-tight text-[#4ADE80] md:text-5xl">
              The Shark
            </h3>
            <p className="mt-3 text-white/70">
              Biggest net winner of the night. They didn&apos;t just take your money — they made it look easy.
            </p>
          </div>
        </div>

        {/* Minor awards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {minor.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-6"
            >
              <h4 className={`text-lg font-semibold tracking-tight ${toneColor[a.tone]}`}>
                {a.name}
              </h4>
              <p className="mt-1 text-sm text-white/60">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
// Felt-green panel. Serif headline. The "share the receipt" moment.
function FinalCTA() {
  return (
    <section id="download" className="px-6 py-32 md:px-10">
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-center rounded-3xl px-6 py-24 text-center md:py-32"
        style={{
          background:
            "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)",
        }}
      >
        <span className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B370]">
          Free. iPhone-first.
        </span>
        <h2
          className="font-[var(--font-serif)] font-medium leading-[1.05] tracking-[-0.015em] text-white"
          style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
        >
          Your next session
          <br />
          deserves a receipt.
        </h2>
        <Link
          href="/download"
          className="mt-12 rounded-full bg-[#D4B370] px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-[#E8C988]"
        >
          Get the app
        </Link>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-[#D4B370]/[0.08] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-[13px] text-white/40 md:flex-row md:items-center">
        <span className="flex items-center gap-2 font-medium text-white/70">
          <span className="grid h-6 w-6 place-items-center rounded-full border border-[#D4B370]/40 text-[10px] font-semibold text-[#D4B370]">
            S
          </span>
          Straddled
        </span>
        <div className="flex gap-8">
          <Link href="/contact" className="hover:text-[#D4B370]">Contact</Link>
          <Link href="/about" className="hover:text-[#D4B370]">About</Link>
          <Link href="/terms" className="hover:text-[#D4B370]">Terms</Link>
          <Link href="/privacy" className="hover:text-[#D4B370]">Privacy</Link>
        </div>
        <span>© 2026 Straddled</span>
      </div>
    </footer>
  );
}
