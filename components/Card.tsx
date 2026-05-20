import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "hero";
};

export const Card = ({
  children,
  className = "",
  size = "default",
}: CardProps) => {
  const radius = size === "hero" ? "rounded-3xl" : "rounded-2xl";
  return (
    <div
      className={`${radius} border border-[#D4B370]/[0.12] bg-[#0E0E0E] ${className}`}
    >
      {children}
    </div>
  );
};
