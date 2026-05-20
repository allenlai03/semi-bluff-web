"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-md md:px-lg">
        <Link href="/" className="flex items-center gap-sm">
          <BrandMark size={28} />
          <span className="font-display text-[18px] font-semibold text-text-primary">
            Straddled
          </span>
        </Link>

        <nav className="hidden items-center gap-lg md:flex">
          <a
            href="#how-it-works"
            className="text-[11px] uppercase tracking-caps text-text-secondary transition hover:text-gold"
          >
            How it works
          </a>
          <a
            href="#receipt"
            className="text-[11px] uppercase tracking-caps text-text-secondary transition hover:text-gold"
          >
            Receipts
          </a>
          <Link
            href="/support"
            className="text-[11px] uppercase tracking-caps text-text-secondary transition hover:text-gold"
          >
            Support
          </Link>
        </nav>

        <a
          href="#install"
          className="rounded-xl bg-gold px-md py-[8px] font-display text-[13px] font-semibold text-text-inverse transition hover:bg-gold-light"
        >
          Get the app
        </a>
      </div>
    </header>
  );
};
