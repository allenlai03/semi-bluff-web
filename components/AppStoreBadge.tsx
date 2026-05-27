type AppStoreBadgeProps = {
  size?: "default" | "lg";
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
};

const APP_STORE_URL =
  "https://apps.apple.com/us/app/straddled/id6766053280";

export const AppStoreBadge = ({
  size = "default",
  className = "",
  label = "Get the app",
  variant = "primary",
}: AppStoreBadgeProps) => {
  const padding = size === "lg" ? "px-8 py-4 text-[15px]" : "px-7 py-3 text-[14px]";

  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-[#D4B370] text-black hover:bg-[#E8C988]"
      : "border border-[#D4B370]/60 text-[#D4B370] hover:bg-[#D4B370]/10";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variantClasses} ${padding} ${className}`}
    >
      {label}
    </a>
  );
};

export const AndroidComingSoon = () => (
  <span className="inline-block text-[10px] uppercase tracking-[0.18em] text-white/40">
    Android — coming after WSOP
  </span>
);
