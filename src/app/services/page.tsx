import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ingénierie, architecture, génie civil, construction BTP, menuiserie, formation, forage et plus. 3VIE-BTP.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Toute la chaîne du BTP"
        description="Études, exécution, suivi et prestations complémentaires pour vos chantiers et consultations."
        image="/images/hero-services.jpg"
        imageAlt="Plans et casque de chantier"
      />
      <Services />
      <WhyUs />
      <Process />
      <CtaBanner />
    </main>
  );
}
