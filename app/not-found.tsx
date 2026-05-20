import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center md:px-10">
        <span className="eyebrow">404</span>
        <h1
          className="font-display mt-8 max-w-[820px] text-white"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          You missed this hand.
        </h1>
        <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-white/60">
          This page doesn&apos;t exist, or the link has expired. The session
          might&apos;ve been deleted from the app.
        </p>
        <div className="mt-10 flex flex-col items-center gap-5">
          <AppStoreBadge size="lg" label="Get the app" />
          <Link
            href="/"
            className="text-[12px] uppercase tracking-[0.18em] text-[#D4B370] transition-colors hover:text-[#E8C988]"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
