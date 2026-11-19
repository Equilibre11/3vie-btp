"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { company, navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,color] duration-300 ${
        solid
          ? "border-b border-brand-navy/10 bg-white shadow-[0_10px_40px_rgba(29,43,89,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="site-container grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="relative z-10 justify-self-start" aria-label="3VIE-BTP, Accueil">
          <Logo light={!solid} />
        </Link>

        <nav
          className="hidden items-center justify-center gap-7 lg:flex xl:gap-9"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  solid
                    ? active
                      ? "text-brand-red"
                      : "text-brand-navy/80 hover:text-brand-red"
                    : active
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center justify-self-end gap-2">
          <Link
            href="/contact"
            className="hidden rounded-2xl bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark lg:inline-flex"
          >
            Devis gratuit
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl lg:hidden ${
              solid
                ? "bg-brand-navy/5 text-brand-navy"
                : "bg-white/15 text-white ring-1 ring-white/25"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        } absolute inset-x-0 top-full border-b border-brand-navy/10 bg-white shadow-[0_24px_50px_rgba(29,43,89,0.12)] transition-opacity`}
      >
        <nav className="site-container flex max-h-[calc(100svh-4.5rem)] flex-col gap-1 overflow-y-auto py-6" aria-label="Navigation mobile">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3.5 text-lg font-semibold ${
                  active ? "bg-brand-red/10 text-brand-red" : "text-brand-navy hover:bg-brand-navy/5"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 rounded-2xl bg-brand-red px-4 py-3.5 text-center font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Devis gratuit
          </Link>
          <a
            href={company.phoneHref}
            className="mt-2 rounded-2xl border border-brand-navy/15 px-4 py-3.5 text-center font-semibold text-brand-navy"
            onClick={() => setOpen(false)}
          >
            Appeler {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
