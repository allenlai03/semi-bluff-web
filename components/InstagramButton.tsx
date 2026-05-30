type InstagramButtonProps = {
  size?: "default" | "lg";
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
};

// Single source of truth for the handle. Note the dot: straddled.app, not straddledapp.
export const INSTAGRAM_URL = "https://www.instagram.com/straddled.app/";

// Hand-rolled glyph — lucide-react dropped its brand icons, and CLAUDE.md says build
// primitives by hand. Strokes inherit currentColor so the icon takes the button's text color.
const InstagramGlyph = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const InstagramButton = ({
  size = "default",
  className = "",
  label = "Follow my story",
  variant = "secondary",
}: InstagramButtonProps) => {
  const padding =
    size === "lg" ? "px-8 py-4 text-[15px]" : "px-7 py-3 text-[14px]";

  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-[#D4B370] text-black hover:bg-[#E8C988]"
      : "border border-[#D4B370]/60 text-[#D4B370] hover:bg-[#D4B370]/10";

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Straddled on Instagram"
      className={`${base} ${variantClasses} ${padding} ${className}`}
    >
      <InstagramGlyph size={size === "lg" ? 18 : 16} />
      {label}
    </a>
  );
};

// Time-bound micro-label for the Vegas trip. Static dot (no animation, per landing-page rules).
export const LiveFromVegas = () => (
  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-[#4ADE80]"
      aria-hidden
    />
    Live from Vegas · WSOP
  </span>
);
