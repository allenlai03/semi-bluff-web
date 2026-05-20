import Link from "next/link";
import { BrandMark } from "./BrandMark";

export const Footer = () => {
  return (
    <footer className="border-t border-divider bg-bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-md px-md py-lg md:flex-row md:items-center md:px-xl md:py-xl">
        <Link href="/" className="flex items-center gap-sm">
          <BrandMark size={22} />
          <span className="text-[15px] font-bold tracking-tight text-text-primary">
            Straddled
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-md text-[13px] text-text-tertiary md:gap-lg">
          <a
            href="mailto:hello@straddled.app"
            className="transition hover:text-text-primary"
          >
            Contact
          </a>
          <Link href="/support" className="transition hover:text-text-primary">
            Support
          </Link>
          <Link href="/privacy" className="transition hover:text-text-primary">
            Privacy
          </Link>
          <a
            href="https://x.com/straddledapp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-text-primary"
          >
            X
          </a>
          <a
            href="https://instagram.com/straddledapp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-text-primary"
          >
            Instagram
          </a>
          <span className="text-text-tertiary/70">© 2026 Straddled</span>
        </nav>
      </div>
    </footer>
  );
};
