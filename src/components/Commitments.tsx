import { commitments, coverage } from "@/lib/content";
import { Container } from "@/components/Container";

export function Commitments() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="flex flex-col">
            <h2 className="font-display text-3xl tracking-wide text-brand-navy md:text-5xl">
              Nos engagements chantier
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-navy/75 md:text-lg">
              Ce qui rassure un maître d’ouvrage : sécurité, délais, preuves
              d’avancement et communication directe.
            </p>
            <ul className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <li
                  key={item.title}
                  className="rounded-3xl border border-brand-navy/10 bg-white p-5"
                >
                  <h3 className="text-base font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-navy p-7 text-white md:p-8 lg:min-h-full">
            <div>
              <h3 className="font-display text-2xl tracking-wide md:text-3xl">
                Zone d’intervention
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Une couverture locale solide, étendue selon les besoins du chantier.
              </p>
            </div>
            <ul className="mt-8 space-y-4 text-sm text-white/85">
              {coverage.map((item) => (
                <li key={item} className="flex gap-3 border-b border-white/10 pb-4 last:border-none last:pb-0">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
