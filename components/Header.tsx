"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg-primary/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-md md:h-20 md:px-xl">
        <Link
          href="/"
          className="group flex items-center gap-sm"
          aria-label="Straddled home"
        >
          <BrandMark size={32} />
          <span className="text-[18px] font-bold tracking-tight text-text-primary">
            Straddled
          </span>
        </Link>

        <div className="flex items-center gap-md md:gap-lg">
          <Link
            href="/support"
            className="hidden text-[13px] font-medium text-text-secondary transition hover:text-text-primary md:inline-block"
          >
            Support
          </Link>
          <a
            href="#install"
            className="rounded-full bg-gold-light px-md py-[8px] text-[13px] font-semibold text-text-inverse transition hover:scale-[1.02] hover:bg-gold md:px-lg md:py-[10px] md:text-[14px]"
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
};
