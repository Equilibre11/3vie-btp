import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import { Container } from "@/components/Container";

type ProjectsProps = {
  limit?: number;
  showCta?: boolean;
  detailed?: boolean;
};

export function Projects({
  limit,
  showCta = false,
  detailed = false,
}: ProjectsProps) {
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const featured = list[0];
  const others = list.slice(1);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-wide text-brand-navy md:text-5xl">
              Des chantiers menés avec rigueur
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/75 md:text-lg">
              Gros œuvre, finitions et ouvrages publics : des références utiles
              pour vos dossiers d’appels d’offres.
            </p>
          </div>
          {showCta ? (
            <Link
              href="/realisations"
              className="inline-flex shrink-0 rounded-2xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-red"
            >
              Toutes les réalisations
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-12 md:gap-6">
          <article className="group relative overflow-hidden rounded-3xl md:col-span-7 md:row-span-2">
            <div className="relative aspect-[16/11] md:aspect-auto md:h-full md:min-h-[26rem] xl:min-h-[30rem]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <p className="inline-flex rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
                  {featured.category}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-wide text-white md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-white/85">{featured.meta}</p>
                {detailed ? (
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                    {featured.summary}
                  </p>
                ) : null}
              </div>
            </div>
          </article>

          {others.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-brand-navy/10 bg-surface md:col-span-5"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold text-brand-safety">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{project.meta}</p>
                  {detailed ? (
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {project.summary}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
