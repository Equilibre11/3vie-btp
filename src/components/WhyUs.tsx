import { whyUs } from "@/lib/content";
import { Container } from "@/components/Container";

export function WhyUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-fluid-3xl tracking-wide text-brand-navy text-balance">
            Pourquoi nous choisir
          </h2>
          <p className="mt-4 text-fluid-base leading-relaxed text-brand-navy/75">
            Ce qui fait la différence pour un maître d’ouvrage, un particulier
            ou une consultation publique.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyUs.map((item, index) => (
            <li
              key={item.title}
              className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-[0_12px_36px_rgba(29,43,89,0.04)] md:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 font-display text-sm font-semibold text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                    {item.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
