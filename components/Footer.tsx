import Link from "next/link";
import { BrandMark } from "./BrandMark";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-md py-xxl md:px-lg">
        <div className="grid gap-xl md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-sm">
              <BrandMark size={32} />
              <span className="font-display text-[22px] font-semibold text-text-primary">
                Straddled
              </span>
            </Link>
            <p className="mt-sm max-w-[260px] text-[13px] leading-[20px] text-text-secondary">
              The poker session tracker for friend groups. Settle the night.
              Share the receipt.
            </p>
          </div>

          <nav className="flex flex-col gap-xs">
            <span className="eyebrow mb-xs">Site</span>
            <Link
              href="/"
              className="text-[14px] text-text-secondary transition hover:text-gold"
            >
              Home
            </Link>
            <Link
              href="/support"
              className="text-[14px] text-text-secondary transition hover:text-gold"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className="text-[14px] text-text-secondary transition hover:text-gold"
            >
              Privacy
            </Link>
          </nav>

          <nav className="flex flex-col gap-xs">
            <span className="eyebrow mb-xs">Contact</span>
            <a
              href="mailto:hello@straddled.app"
              className="text-[14px] text-text-secondary transition hover:text-gold"
            >
              hello@straddled.app
            </a>
            <a
              href="https://x.com/straddledapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-text-secondary transition hover:text-gold"
            >
              X / Twitter
            </a>
            <a
              href="https://instagram.com/straddledapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-text-secondary transition hover:text-gold"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="mt-xxl flex flex-col justify-between gap-sm border-t border-divider pt-md text-[10px] uppercase tracking-caps text-text-tertiary md:flex-row">
          <span>© 2026 Straddled</span>
          <span>Made for home games. Not for casinos.</span>
        </div>
      </div>
    </footer>
  );
};
