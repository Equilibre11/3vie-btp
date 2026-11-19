"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/content";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") || "").trim();
    if (!email) return;
    const subject = encodeURIComponent("Inscription newsletter 3VIE-BTP");
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite m'inscrire à la newsletter.\nEmail: ${email}`,
    );
    window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`;
    setDone(true);
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <label className="sr-only" htmlFor="newsletter-email">
        Adresse e-mail
      </label>
      <div className="relative">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Votre e-mail"
          className="w-full rounded-2xl border border-white/20 bg-white/10 py-3 pl-4 pr-28 text-sm text-white outline-none placeholder:text-white/45 focus:border-brand-safety"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-xl bg-brand-red px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-brand-red-dark sm:text-sm"
        >
          S’inscrire
        </button>
      </div>
      {done ? (
        <p className="mt-2 text-xs text-white/70">Ouverture de votre messagerie…</p>
      ) : null}
    </form>
  );
}
