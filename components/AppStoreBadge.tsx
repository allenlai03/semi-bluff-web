type AppStoreBadgeProps = {
  size?: "default" | "lg";
  className?: string;
};

// TODO: replace with real App Store URL after Apple approves the submission
const APP_STORE_URL =
  "https://apps.apple.com/app/straddled/id0000000000";

/**
 * Apple App Store CTA — gold pill, dark text, single Apple glyph.
 * Single primary action across the site.
 */
export const AppStoreBadge = ({
  size = "default",
  className = "",
}: AppStoreBadgeProps) => {
  const padding =
    size === "lg" ? "px-xl py-md gap-md" : "px-lg py-sm gap-sm";
  const fontSize = size === "lg" ? "text-[15px]" : "text-[14px]";
  const iconSize = size === "lg" ? 22 : 18;

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-full bg-gold-light font-semibold text-text-inverse transition-all duration-200 hover:scale-[1.02] hover:bg-gold ${padding} ${fontSize} ${className}`}
    >
      <AppleGlyph size={iconSize} />
      <span>Download for iPhone</span>
    </a>
  );
};

export const AppleGlyph = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 384 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

/**
 * Subtle "Android coming after WSOP" pill — paired with the AppStoreBadge.
 */
export const AndroidComingSoon = () => (
  <span className="inline-block text-[10px] uppercase tracking-caps text-text-tertiary">
    Android — coming after WSOP
  </span>
);
