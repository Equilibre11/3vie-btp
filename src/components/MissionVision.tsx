import { missionVision, values } from "@/lib/content";
import { Container } from "@/components/Container";

export function MissionVision() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-wide text-brand-navy md:text-5xl">
            Mission et vision
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {missionVision.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border-l-4 border-brand-red bg-white px-6 py-8 shadow-[0_18px_50px_rgba(29,43,89,0.06)]"
            >
              <h3 className="font-display text-2xl tracking-wide text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-navy/75">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-brand-navy/10 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
