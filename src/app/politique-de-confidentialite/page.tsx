import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données, ${company.name}.`,
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="18 novembre 2026">
      <section className="space-y-3">
        <h2>Introduction</h2>
        <p>
          La présente politique décrit la manière dont {company.name} collecte,
          utilise et protège les données personnelles transmises via le site
          (formulaires de contact, devis, newsletter).
        </p>
      </section>

      <section className="space-y-3">
        <h2>Données collectées</h2>
        <p>Selon vos échanges, nous pouvons recevoir :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Contenu du message (projet, appel d’offres, demande d’information)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>Finalités</h2>
        <p>Ces données sont utilisées uniquement pour :</p>
        <ul>
          <li>Répondre à vos demandes de devis ou d’information</li>
          <li>Traiter les échanges liés aux appels d’offres</li>
          <li>Gérer l’inscription à la newsletter, si vous le demandez</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>Base et conservation</h2>
        <p>
          Le traitement repose sur votre demande (prise de contact) et, le cas
          échéant, votre consentement (newsletter). Les données sont conservées
          le temps nécessaire au traitement de la demande, puis archivées ou
          supprimées selon les besoins opérationnels et obligations applicables.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Destinataires</h2>
        <p>
          Les données sont destinées aux services internes de {company.name}.
          Elles ne sont pas vendues. Elles peuvent être transmises à des
          prestataires techniques strictement nécessaires au fonctionnement du
          site (hébergement, messagerie).
        </p>
      </section>

      <section className="space-y-3">
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l’accès, la rectification ou la suppression de
          vos données en écrivant à{" "}
          <a className="font-medium text-brand-red" href={company.emailHref}>
            {company.email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2>Cookies</h2>
        <p>
          Le site peut utiliser des cookies techniques nécessaires à son bon
          fonctionnement. Aucun cookie publicitaire n’est déployé à ce stade.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Contact</h2>
        <p>
          Pour toute question relative à la confidentialité : {company.email} ·{" "}
          {company.phone}.
        </p>
      </section>
    </LegalPage>
  );
}
