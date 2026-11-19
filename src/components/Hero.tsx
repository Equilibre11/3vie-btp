import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";
import { Container } from "@/components/Container";
import { TypewriterHeadline } from "@/components/TypewriterHeadline";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
      <Image
        src="/images/hero-chantier.jpg"
        alt="Chantier de construction 3VIE-BTP, bâtiment et grue"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/92 via-brand-navy/70 to-brand-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-brand-navy/30" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24">
        <div className="w-full max-w-5xl animate-rise md:pl-[4%] xl:pl-[6%] 2xl:max-w-6xl">
          <TypewriterHeadline />
          <p className="mt-6 max-w-2xl text-fluid-base leading-relaxed text-white/85 xl:mt-8">
            {company.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap xl:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark xl:px-8 xl:py-4 xl:text-base"
            >
              Demander un devis
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20 xl:px-8 xl:py-4 xl:text-base"
            >
              Voir les réalisations
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
