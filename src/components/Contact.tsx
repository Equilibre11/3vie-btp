"use client";

import { FormEvent, useState } from "react";
import { company, contactSubjects } from "@/lib/content";
import { Container } from "@/components/Container";
import { CustomSelect } from "@/components/CustomSelect";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState<string>(contactSubjects[0]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subjectValue = String(data.get("subject") || subject).trim();
    const message = String(data.get("message") || "").trim();
    const mailSubject = encodeURIComponent(`${subjectValue} - ${name || "Client"}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nE-mail: ${email}\nTéléphone: ${phone}\nObjet: ${subjectValue}\n\nMessage:\n${message}`,
    );
    window.location.href = `${company.emailHref}?subject=${mailSubject}&body=${body}`;
    setSent(true);
  }

  return (
    <section>
      <Container className="grid gap-8 py-14 md:gap-10 md:py-20 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <li>
            <a
              href={company.phoneHref}
              className="flex h-full items-start gap-4 rounded-3xl border border-brand-navy/10 bg-white p-5 text-brand-navy shadow-[0_10px_30px_rgba(29,43,89,0.04)] transition hover:border-brand-red/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-surface">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 6.5a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
              <span>
                <span className="block text-sm text-brand-navy/55">Téléphone</span>
                <span className="mt-1 block text-lg font-semibold">{company.phone}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={company.emailHref}
              className="flex h-full items-start gap-4 rounded-3xl border border-brand-navy/10 bg-white p-5 text-brand-navy shadow-[0_10px_30px_rgba(29,43,89,0.04)] transition hover:border-brand-red/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-surface">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                  <path d="m4.5 7 7.5 6 7.5-6" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-brand-navy/55">E-mail</span>
                <span className="mt-1 block text-lg font-semibold break-all">
                  {company.email}
                </span>
              </span>
            </a>
          </li>
          <li className="sm:col-span-2 xl:col-span-1">
            <div className="flex h-full items-start gap-4 rounded-3xl border border-brand-navy/10 bg-white p-5 text-brand-navy shadow-[0_10px_30px_rgba(29,43,89,0.04)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-surface">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z" />
                  <circle cx="12" cy="10.8" r="2.2" />
                </svg>
              </span>
              <span>
                <span className="block text-sm text-brand-navy/55">Adresse</span>
                <span className="mt-1 block text-lg font-semibold">
                  {company.address.line1}
                </span>
                <span className="mt-1 block text-sm text-brand-navy/70">
                  {company.address.line2}
                </span>
                <span className="mt-2 block text-sm text-brand-navy/60">
                  {company.hours}
                </span>
              </span>
            </div>
          </li>
        </ul>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-brand-navy/10 bg-white p-5 text-brand-navy shadow-[0_18px_50px_rgba(29,43,89,0.08)] sm:p-7 md:p-8"
        >
          <h2 className="font-display text-2xl tracking-wide text-brand-navy md:text-3xl">
            Demande de devis / AO
          </h2>
          <p className="mt-2 text-sm text-brand-navy/65">
            Remplissez le formulaire. Votre messagerie s’ouvrira pour envoyer le
            message.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
            <label className="block">
              <span className="text-sm font-medium text-brand-navy/70">Nom complet</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-surface px-4 py-3 outline-none transition focus:border-brand-red"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-brand-navy/70">E-mail</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-surface px-4 py-3 outline-none transition focus:border-brand-red"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-brand-navy/70">Téléphone</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="mt-2 w-full rounded-2xl border border-brand-navy/15 bg-surface px-4 py-3 outline-none transition focus:border-brand-red"
              />
            </label>
            <div className="block">
              <span className="text-sm font-medium text-brand-navy/70">Objet</span>
              <CustomSelect
                id="contact-subject"
                name="subject"
                required
                value={subject}
                onChange={setSubject}
                options={contactSubjects.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-brand-navy/70">Votre projet</span>
              <textarea
                name="message"
                required
                rows={3}
                className="mt-2 w-full resize-y rounded-2xl border border-brand-navy/15 bg-surface px-4 py-3 outline-none transition focus:border-brand-red"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-brand-red px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
          >
            Envoyer la demande
          </button>
          {sent ? (
            <p className="mt-3 text-center text-sm text-brand-navy/70">
              Ouverture de votre messagerie…
            </p>
          ) : null}
        </form>
      </Container>

      <Container className="pb-14 md:pb-20">
        <div className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white">
          <div className="flex flex-col gap-3 border-b border-brand-navy/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">Nous trouver</h3>
              <p className="mt-1 text-sm text-brand-navy/65">
                {company.address.line1}, {company.address.line2}
              </p>
            </div>
            <a
              href={company.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-brand-red transition hover:text-brand-red-dark"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
          <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
            <iframe
              title="Localisation 3VIE-BTP à Agoè Assiyéyé, Lomé"
              src={company.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
