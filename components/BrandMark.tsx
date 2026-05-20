/* eslint-disable @next/next/no-img-element */
type BrandMarkProps = {
  size?: number;
  className?: string;
};

export const BrandMark = ({ size = 32, className = "" }: BrandMarkProps) => {
  return (
    <img
      src="/brand/logo.png"
      alt="Straddled"
      width={size}
      height={size}
      className={`block ${className}`}
      style={{ width: size, height: size }}
    />
  );
};
