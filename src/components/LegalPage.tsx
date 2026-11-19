import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <main className="bg-white">
      <section className="bg-brand-navy pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-16">
          <h1 className="font-display text-4xl tracking-wide md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-white/65">Dernière mise à jour : {updatedAt}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-brand-navy/80 md:px-8 md:py-16 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-wide [&_h2]:text-brand-navy [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </article>
    </main>
  );
}
