type BrandNameProps = {
  className?: string;
  light?: boolean;
};

/** Wordmark with optical alignment: digit "3" sits high vs serif caps. */
export function BrandName({ className = "", light = false }: BrandNameProps) {
  const suffixClass = light ? "text-white" : "text-brand-navy";

  return (
    <span className={`inline-flex items-end leading-none ${className}`}>
      <span className="-translate-y-[0.2em] text-brand-red">3</span>
      <span className="text-brand-red">VIE</span>
      <span className={suffixClass}>-BTP</span>
    </span>
  );
}
