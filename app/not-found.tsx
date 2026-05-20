import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-md text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-md font-display text-[44px] font-bold leading-[1.05] text-text-primary md:text-[56px]">
          You missed this hand.
        </h1>
        <p className="mt-md max-w-[420px] text-[15px] leading-[24px] text-text-secondary">
          This page doesn&apos;t exist, or the link has expired. The session
          might&apos;ve been deleted from the app.
        </p>
        <div className="mt-xl flex flex-col items-center gap-sm">
          <Link
            href="/"
            className="text-[14px] uppercase tracking-caps text-gold transition hover:text-gold-light"
          >
            ← Back to home
          </Link>
          <div className="mt-md">
            <AppStoreBadge />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
