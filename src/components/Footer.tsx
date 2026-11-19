"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { company, legalLinks, navLinks } from "@/lib/content";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 text-white transition hover:border-brand-safety hover:text-brand-safety"
    >
      {children}
    </a>
  );
}

function FooterAccordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 md:border-none">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left md:mb-4 md:pointer-events-none md:cursor-default md:py-0"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <span className="text-white/70 md:hidden" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className={`${open ? "block pb-4" : "hidden"} md:block md:pb-0`}>
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-brand-navy text-white">
      <div className="site-container grid gap-2 py-10 md:grid-cols-2 md:gap-10 md:py-14 lg:grid-cols-4 lg:gap-8">
        <div className="pb-6 md:pb-0">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm italic leading-relaxed text-white/70">
            {company.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={company.social.facebook} label="Facebook 3VIE-BTP">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M14.5 8.5V6.8c0-.7.1-1.1 1.1-1.1H17V3h-2.3C11.9 3 11 4.6 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.4l.6-2.8h-3Z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={company.social.linkedin} label="LinkedIn 3VIE-BTP">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.2 9.2H3.5V20h2.7V9.2ZM4.8 4C3.8 4 3 4.8 3 5.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8S5.9 4 4.8 4Zm15.7 6.4c-1.1-.7-2.3-.8-2.9-.8-1.5 0-2.5.8-3 1.4V9.2h-2.7c0 .4 0 10.8 0 10.8h2.7v-6c0-.3 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 1.9 1 1.9 2.6V20H21v-6.5c0-2.8-1.5-4.1-3.5-4.1Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <FooterAccordion title="Navigation">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition hover:text-brand-safety"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterAccordion>

        <FooterAccordion title="Contact">
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a href={company.phoneHref} className="hover:text-brand-safety">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="hover:text-brand-safety">
                {company.email}
              </a>
            </li>
            <li>{company.hours}</li>
            <li>
              {company.address.line1}
              <br />
              {company.address.line2}
            </li>
          </ul>
        </FooterAccordion>

        <FooterAccordion title="Newsletter" defaultOpen>
          <NewsletterForm />
        </FooterAccordion>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-3 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-brand-safety"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
