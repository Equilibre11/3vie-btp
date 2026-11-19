import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { Container } from "@/components/Container";

type ServicesProps = {
  limit?: number;
  showCta?: boolean;
};

export function Services({ limit, showCta = false }: ServicesProps) {
  const list = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-fluid-3xl tracking-wide text-brand-navy text-balance">
            Une offre BTP complète
          </h2>
          <p className="mt-4 text-fluid-base leading-relaxed text-brand-navy/75">
            De l’étude à la livraison, 3VIE-BTP accompagne vos projets de
            construction, d’aménagement et d’infrastructure.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((service) => (
            <li
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-brand-navy/10 bg-surface transition hover:border-brand-red/30 hover:bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-brand-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                  {service.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {showCta ? (
          <div className="mt-8 md:mt-10">
            <Link
              href="/services"
              className="inline-flex rounded-2xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-red"
            >
              Voir tous les services
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
