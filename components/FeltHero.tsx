import type { ReactNode } from "react";

type FeltHeroProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Felt gradient section — reserved for hero surfaces and the install closer.
 * Includes the subtle noise overlay (.felt-noise) for tabletop texture.
 */
export const FeltHero = ({ children, className = "", id }: FeltHeroProps) => {
  return (
    <section
      id={id}
      className={`felt-noise relative overflow-hidden bg-felt ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
};
