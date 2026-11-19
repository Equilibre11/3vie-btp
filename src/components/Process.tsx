import { processSteps } from "@/lib/content";
import { Container } from "@/components/Container";

export function Process() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-fluid-3xl tracking-wide text-brand-navy text-balance">
            Notre méthode de travail
          </h2>
          <p className="mt-4 text-fluid-base leading-relaxed text-brand-navy/75">
            Une démarche claire, du premier échange jusqu’à la réception des
            travaux.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div
            className="pointer-events-none absolute left-6 right-6 top-8 hidden h-px bg-brand-navy/15 xl:block"
            aria-hidden="true"
          />
          {processSteps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-[0_12px_36px_rgba(29,43,89,0.04)]"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy font-display text-sm font-semibold text-white">
                {item.step}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-wide text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
