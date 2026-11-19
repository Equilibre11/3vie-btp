import Link from "next/link";
import { Container } from "@/components/Container";

type CtaBannerProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export function CtaBanner({
  title = "Un projet de construction ou un appel d’offres ?",
  description = "Devis, visite de site ou dossier de candidature — nous vous répondons rapidement.",
  buttonLabel = "Nous contacter",
  href = "/contact",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-contact.jpg)" }}
      />
      <div className="absolute inset-0 bg-brand-navy/85" />
      <Container className="relative flex flex-col items-start justify-between gap-6 text-white md:flex-row md:items-center md:gap-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl tracking-wide text-balance sm:text-3xl md:text-[2rem]">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 rounded-2xl bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
        >
          {buttonLabel}
        </Link>
      </Container>
    </section>
  );
}
