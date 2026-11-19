"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Container } from "@/components/Container";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-wide text-brand-navy md:text-5xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/75 md:text-lg">
            Les points les plus demandés avant un devis ou une candidature AO.
          </p>
        </div>
        <ul className="mt-10 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-brand-navy md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-navy/20 text-brand-navy transition ${
                      isOpen ? "bg-brand-red text-white border-brand-red" : ""
                    }`}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-brand-navy/70 md:text-base">
                    {item.answer}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
