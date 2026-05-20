type BrandMarkProps = {
  size?: number;
  className?: string;
};

/**
 * Straddled brand mark — a dark rounded square with a gold dashed chip ring
 * and a gold "S" centered. Matches the mobile app's BrandMark component.
 */
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
      <rect width="64" height="64" rx="14" fill="#0A0E0B" />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="13"
        stroke="rgba(201,168,102,0.22)"
      />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="#C9A866"
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
        fontWeight="700"
        fill="#C9A866"
      >
        S
      </text>
    </svg>
  );
};
