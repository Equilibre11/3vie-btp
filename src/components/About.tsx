import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";
import { BrandName } from "@/components/BrandName";
import { Container } from "@/components/Container";

type AboutProps = {
  compact?: boolean;
};

export function About({ compact = false }: AboutProps) {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-12 xl:gap-16">
        <div className="relative min-h-[22rem] overflow-hidden rounded-3xl sm:min-h-[26rem] md:min-h-full">
          <Image
            src="/images/about-equipe.jpg"
            alt="Équipe technique 3VIE-BTP sur un chantier"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/85 to-transparent p-5 md:p-6">
            <p className="text-sm font-semibold text-white">
              Expertise terrain · Lomé, Togo
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-[0_16px_40px_rgba(29,43,89,0.05)] sm:p-8 md:p-9">
          <h2 className="font-display text-3xl tracking-wide md:text-5xl">
            <BrandName />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-navy/80 md:text-lg">
            {company.description}
          </p>
          {!compact ? (
            <p className="mt-5 border-l-4 border-brand-red pl-5 text-base font-medium italic leading-relaxed text-brand-navy">
              {company.mission}
            </p>
          ) : null}
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface p-5">
              <dt className="text-sm font-semibold text-brand-navy">Localisation</dt>
              <dd className="mt-2 text-sm text-brand-navy/75">
                {company.address.line1}
                <br />
                {company.address.line2}
              </dd>
            </div>
            <div className="rounded-2xl bg-surface p-5">
              <dt className="text-sm font-semibold text-brand-navy">Savoir-faire</dt>
              <dd className="mt-2 text-sm text-brand-navy/75">
                {company.activities[0]}
                <br />
                {company.activities[1]}
              </dd>
            </div>
          </dl>
          {compact ? (
            <Link
              href="/a-propos"
              className="mt-8 inline-flex self-start rounded-2xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-red"
            >
              En savoir plus
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
