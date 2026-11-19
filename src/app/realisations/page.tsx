import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { Projects } from "@/components/Projects";
import { TenderBlock } from "@/components/TenderBlock";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Références de chantiers 3VIE-BTP : ouvrages publics, bâtiment, second œuvre, utiles pour les appels d’offres.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="Références pour vos dossiers"
        description="Des chantiers concrets, dont le Centre communautaire de Doukpergou, pour illustrer notre capacité technique et organisationnelle."
        image="/images/projet-communaute.jpg"
        imageAlt="Centre communautaire réalisé par 3VIE-BTP"
      />
      <Projects detailed />
      <TenderBlock />
      <CtaBanner />
    </main>
  );
}
