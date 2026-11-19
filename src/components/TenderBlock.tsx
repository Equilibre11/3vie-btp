import Link from "next/link";
import { tenderCapabilities } from "@/lib/content";
import { Container } from "@/components/Container";

export function TenderBlock() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-wide text-brand-navy md:text-5xl">
            Prêts pour vos consultations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/75 md:text-lg">
            3VIE-BTP répond aux appels d’offres publics et privés. Nos
            réalisations, notre organisation et notre ancrage local renforcent
            la solidité de nos candidatures.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {tenderCapabilities.map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-brand-navy/10 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 md:mt-10">
          <Link
            href="/contact"
            className="inline-flex rounded-2xl bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
          >
            Nous contacter pour un AO
          </Link>
        </div>
      </Container>
    </section>
  );
}
