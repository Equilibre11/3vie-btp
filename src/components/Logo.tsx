import { BrandName } from "@/components/BrandName";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  light?: boolean;
};

export function Logo({
  className = "",
  showWordmark = true,
  light = false,
}: LogoProps) {
  const subClass = light ? "text-white/70" : "text-brand-navy/70";

  return (
    <div className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg
        viewBox="0 0 72 72"
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
        aria-hidden="true"
      >
        <circle
          cx="36"
          cy="36"
          r="34"
          fill="#fff"
          stroke="#1D2B59"
          strokeWidth="2.5"
        />
        <path
          d="M18 34 L28 24 L36 30 L44 22 L54 32"
          fill="none"
          stroke="#1D2B59"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <rect x="24" y="30" width="5" height="5" fill="#1D2B59" opacity="0.85" />
        <rect x="43" y="28" width="5" height="5" fill="#1D2B59" opacity="0.85" />
        <path
          d="M16 48 Q36 40 56 48"
          fill="none"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M22 47 L50 47"
          fill="none"
          stroke="#fff"
          strokeWidth="1.4"
          strokeDasharray="3 3"
        />
        <path
          d="M30 18 L34 26 M32 18 L30 26"
          fill="none"
          stroke="#E31E24"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M40 17 L46 25 M44 17 L42 26"
          fill="none"
          stroke="#1D2B59"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text
          x="36"
          y="58"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fontFamily="var(--font-display), serif"
        >
          <tspan fill="#E31E24">3VIE</tspan>
          <tspan fill="#1D2B59">-BTP</tspan>
        </text>
      </svg>
      {showWordmark ? (
        <div className="min-w-0 leading-none">
          <p className="font-display text-xl tracking-wide sm:text-[1.35rem]">
            <BrandName light={light} />
          </p>
          <p
            className={`mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:block ${subClass}`}
          >
            Bâtiment & travaux publics
          </p>
        </div>
      ) : null}
    </div>
  );
}
