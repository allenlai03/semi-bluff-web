import Link from "next/link";
import { BrandMark } from "./BrandMark";

export const Footer = () => {
  return (
    <footer className="border-t border-[#D4B370]/[0.08] bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10 md:py-12">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark size={22} />
          <span className="text-[14px] font-semibold tracking-tight text-white">
            Straddled
          </span>
        </Link>

        <nav className="-my-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-white/50 md:gap-x-7">
          <a
            href="mailto:hello@straddled.app"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
          >
            Contact
          </a>
          <Link
            href="/support"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
          >
            Terms
          </Link>
          <a
            href="https://x.com/straddledapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
          >
            X
          </a>
          <a
            href="https://instagram.com/straddledapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
          >
            Instagram
          </a>
          <span className="inline-flex min-h-[44px] items-center text-white/30">
            © 2026 Straddled
          </span>
        </nav>
      </div>
    </footer>
  );
};
