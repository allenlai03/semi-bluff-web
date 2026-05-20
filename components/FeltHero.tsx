import type { ReactNode } from "react";

type FeltHeroProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Felt-green panel — radial gradient matching the app's settlement receipt header.
 * Reserved for hero surfaces and the final CTA section. Not for everyday content cards.
 */
export const FeltHero = ({ children, className = "", id }: FeltHeroProps) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at top, #1A6B52 0%, #0F5340 40%, #0A3D2E 100%)",
      }}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
};
