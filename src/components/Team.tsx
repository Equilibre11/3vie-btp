import Image from "next/image";
import { team } from "@/lib/content";
import { Container } from "@/components/Container";

export function Team() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-wide text-brand-navy md:text-5xl">
            Notre équipe
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/75 md:text-lg">
            Des profils complémentaires pour piloter vos études, vos chantiers et
            vos dossiers.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li
              key={member.photo}
              className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-[0_12px_40px_rgba(29,43,89,0.05)] transition hover:border-brand-red/30"
            >
              <div className="relative aspect-[3/4] bg-surface">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-red">
                  {member.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
