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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg-primary/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-md md:h-16 md:px-lg">
        <Link
          href="/"
          className="group flex items-center gap-sm"
          aria-label="Straddled home"
        >
          <BrandMark size={28} />
          <span className="font-display text-[17px] font-semibold tracking-tight text-text-primary transition group-hover:text-gold-light">
            Straddled
          </span>
        </Link>

        <div className="flex items-center gap-lg">
          <Link
            href="/support"
            className="hidden text-[13px] text-text-secondary transition hover:text-gold-light md:inline-block"
          >
            Support
          </Link>
          <a
            href="#install"
            className="text-[13px] font-medium text-gold transition hover:text-gold-light"
          >
            Get the app{" "}
            <span aria-hidden="true" className="ml-[2px]">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
