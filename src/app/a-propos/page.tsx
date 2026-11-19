import type { Metadata } from "next";
import { About } from "@/components/About";
import { Commitments } from "@/components/Commitments";
import { CtaBanner } from "@/components/CtaBanner";
import { MissionVision } from "@/components/MissionVision";
import { PageHero } from "@/components/PageHero";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mission, vision, équipe, statistiques et témoignages de 3VIE-BTP à Lomé.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Une entreprise BTP ancrée à Lomé"
        description="Ingénierie, construction et accompagnement de projets, avec une organisation capable de répondre aux marchés privés comme aux appels d’offres."
        image="/images/about-equipe.jpg"
        imageAlt="Équipe 3VIE-BTP sur un chantier"
      />
      <About />
      <Stats />
      <WhyUs />
      <MissionVision />
      <Team />
      <Commitments />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
