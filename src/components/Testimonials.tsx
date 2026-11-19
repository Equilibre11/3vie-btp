import { testimonials } from "@/lib/content";
import { Container } from "@/components/Container";

export function Testimonials() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-wide text-brand-navy md:text-5xl">
            La confiance de nos interlocuteurs
          </h2>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.author}
              className="rounded-3xl border border-brand-navy/10 bg-white p-6"
            >
              <blockquote className="text-base leading-relaxed text-brand-navy/80">
                “{item.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-brand-navy/10 pt-4">
                <p className="text-sm font-semibold text-brand-navy">
                  {item.author}
                </p>
                <p className="mt-1 text-sm text-brand-navy/55">{item.context}</p>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
