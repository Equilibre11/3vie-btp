import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez 3VIE-BTP à Lomé : devis, appels d’offres, téléphone +228 91 28 30 06, 3vietogo@gmail.com.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Échangeons sur votre besoin"
        description="Devis, visite de site ou candidature à un appel d’offres. Écrivez-nous ou appelez directement."
        image="/images/hero-contact.jpg"
        imageAlt="Chantier et grue au crépuscule"
      />
      <Contact />
      <Faq />
    </main>
  );
}
