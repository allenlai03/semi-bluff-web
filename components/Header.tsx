"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { AppStoreBadge } from "./AppStoreBadge";

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
          className="flex items-center gap-sm"
          aria-label="Straddled home"
        >
          <BrandMark size={28} />
          <span className="text-[17px] font-bold tracking-tight text-text-primary">
            Straddled
          </span>
        </Link>

        <AppStoreBadge label="Get the app" />
      </div>
    </header>
  );
};
