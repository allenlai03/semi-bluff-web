import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  emphasis?: "default" | "elevated";
};

/**
 * Dark card surface — gold hairline border, 14px radius. Used for every
 * non-hero content surface across the site.
 */
export const Card = ({
  children,
  className = "",
  emphasis = "default",
}: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-border ${
        emphasis === "elevated"
          ? "bg-surface-secondary shadow-card"
          : "bg-surface-primary"
      } ${className}`}
    >
      {children}
    </div>
  );
};
