type AppStoreBadgeProps = {
  size?: "default" | "lg";
  className?: string;
  label?: string;
};

// TODO: replace with real App Store URL after Apple approves the submission
const APP_STORE_URL =
  "https://apps.apple.com/app/straddled/id0000000000";

/**
 * Primary CTA — bright gold-yellow pill, dark text. No icon (offsuit-style).
 * Used in the hero (subtle), header (compact), and closer (large).
 */
export const AppStoreBadge = ({
  size = "default",
  className = "",
  label = "Get the app",
}: AppStoreBadgeProps) => {
  const padding =
    size === "lg" ? "px-xxl py-md text-[16px]" : "px-lg py-sm text-[14px]";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-gold-bright font-semibold text-text-inverse transition-all duration-200 hover:scale-[1.03] hover:bg-gold-light ${padding} ${className}`}
    >
      {label}
    </a>
  );
};

/**
 * Subtle "Android coming after WSOP" caption — paired with the CTA.
 */
export const AndroidComingSoon = () => (
  <span className="inline-block text-[10px] uppercase tracking-caps text-text-tertiary">
    Android — coming after WSOP
  </span>
);
