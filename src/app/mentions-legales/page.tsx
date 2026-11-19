import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${company.name}.`,
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="18 novembre 2026">
      <section className="space-y-3">
        <h2>Éditeur du site</h2>
        <p>
          Le site est édité par <strong>{company.name}</strong>, entreprise
          intervenant dans le bâtiment, les travaux publics et la menuiserie.
        </p>
        <ul>
          <li>Adresse : {company.address.line1}, {company.address.line2}</li>
          <li>Téléphone : {company.phone}</li>
          <li>E-mail : {company.email}</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>Directeur de la publication</h2>
        <p>
          Le directeur de la publication est le représentant légal de{" "}
          {company.name}.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Hébergement</h2>
        <p>
          Selon l’environnement de déploiement (démonstration ou production), le
          site peut être hébergé par un prestataire cloud (ex. Vercel) ou un
          hébergeur dédié. Les coordonnées précises de l’hébergeur seront
          complétées lors de la mise en production payante.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, éléments
          graphiques, logo, structure) est protégé. Toute reproduction,
          représentation ou diffusion, totale ou partielle, sans autorisation
          écrite préalable de {company.name}, est interdite.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Limitation de responsabilité</h2>
        <p>
          {company.name} s’efforce de fournir des informations exactes et à jour.
          Toutefois, des erreurs ou omissions peuvent survenir. L’entreprise ne
          saurait être tenue responsable des dommages liés à l’utilisation du
          site ou à l’impossibilité d’y accéder.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Contact</h2>
        <p>
          Pour toute question relative aux présentes mentions :{" "}
          <a className="font-medium text-brand-red" href={company.emailHref}>
            {company.email}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
