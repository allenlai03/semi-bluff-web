type BrandMarkProps = {
  size?: number;
  className?: string;
};

export const BrandMark = ({ size = 32, className = "" }: BrandMarkProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Straddled"
    >
      <rect width="64" height="64" rx="14" fill="#0E0E0E" />
      <rect
        x="0.5"
        y="0.5"
        width="63"
        height="63"
        rx="13.5"
        stroke="rgba(212,179,112,0.18)"
      />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="#D4B370"
        strokeWidth="2"
        strokeDasharray="3 4"
        fill="none"
      />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="ui-serif, Georgia, serif"
        fontSize="24"
        fontWeight="600"
        fill="#D4B370"
      >
        S
      </text>
    </svg>
  );
};
