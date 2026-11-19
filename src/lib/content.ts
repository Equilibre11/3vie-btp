export const company = {
  name: "3VIE-BTP",
  nameParts: { prefix: "3VIE", suffix: "BTP" } as const,
  tagline: "Votre satisfaction, notre plus grande fierté.",
  mission:
    "Proposer des solutions techniques fiables, durables et adaptées aux besoins de chaque client.",
  vision:
    "Devenir une référence du BTP au Togo et en Afrique de l’Ouest, reconnue pour la qualité d’exécution, la transparence et la capacité à répondre aux marchés publics comme privés.",
  description:
    "Entreprise basée à Lomé, spécialisée en ingénierie, architecture, génie civil et construction BTP. Nous intervenons aussi en menuiserie générale, expertise et contrôle, suivi de projets, formation, commerce général, vente de préfabriqués et forage.",
  phone: "+228 91 28 30 06",
  phoneHref: "tel:+22891283006",
  whatsapp: "https://wa.me/22891283006",
  email: "3vietogo@gmail.com",
  emailHref: "mailto:3vietogo@gmail.com",
  hours: "Lun – Sam : 08h00 – 18h00",
  address: {
    line1: "Agoè Assiyéyé",
    line2: "Non loin de EPL La Source, Lomé, Togo",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Ago%C3%A8%20Assiy%C3%A9y%C3%A9%20EPL%20La%20Source%20Lom%C3%A9%20Togo&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Ago%C3%A8+Assiy%C3%A9y%C3%A9+EPL+La+Source+Lom%C3%A9+Togo",
  activities: ["Bâtiment et travaux publics", "Tous travaux de menuiserie"],
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const contactSubjects = [
  "Demande de devis",
  "Appel d'offres",
  "Visite de site",
  "Partenariat",
  "Autre demande",
] as const;

export const whyUs = [
  {
    title: "Un interlocuteur unique",
    text: "Études, chantier et suivi coordonnés sans dispersion entre prestataires.",
  },
  {
    title: "Capacité AO et privé",
    text: "Dossiers techniques, références et organisation adaptés aux consultations.",
  },
  {
    title: "Présence terrain",
    text: "Base à Lomé, équipes opérationnelles et reporting d’avancement régulier.",
  },
  {
    title: "Qualité maîtrisée",
    text: "Contrôles, délais suivis et livrables conformes aux engagements pris.",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
] as const;

export const stats = [
  { end: 12, suffix: "+", label: "Domaines d’intervention" },
  { end: 100, suffix: "%", label: "Engagement qualité chantier" },
  { end: 12, suffix: "", label: "Prestations BTP couvertes" },
  { static: "AO", label: "Réponses aux appels d’offres" },
] as const;

export const missionVision = [
  {
    title: "Mission",
    text: company.mission,
  },
  {
    title: "Vision",
    text: company.vision,
  },
] as const;

export const values = [
  {
    title: "Fiabilité",
    text: "Des engagements tenus, du devis à la réception des travaux.",
  },
  {
    title: "Rigueur technique",
    text: "Méthodes, contrôles et suivi pour des ouvrages durables.",
  },
  {
    title: "Proximité client",
    text: "Écoute, transparence et communication à chaque étape.",
  },
] as const;

export const team = [
  {
    name: "Jean-Baptiste Koffi",
    role: "Directeur général",
    photo: "/team/membre-1.jpg",
  },
  {
    name: "Ama Séna",
    role: "Responsable bureau d’études",
    photo: "/team/membre-2.jpg",
  },
  {
    name: "Kodjo Agbeko",
    role: "Conducteur de travaux",
    photo: "/team/membre-3.jpg",
  },
  {
    name: "Essi Amégan",
    role: "Responsable menuiserie",
    photo: "/team/membre-4.jpg",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Un suivi de chantier sérieux et une équipe réactive. Le centre communautaire a été livré avec le niveau de finition attendu.",
    author: "Maître d’ouvrage, projet communautaire",
    context: "Ouvrage public",
  },
  {
    quote:
      "3VIE-BTP a su allier exigence technique et organisation. Communication claire tout au long du projet.",
    author: "Client privé, construction résidentielle",
    context: "Bâtiment",
  },
  {
    quote:
      "Dossier technique solide et présence terrain. Un partenaire crédible pour nos consultations.",
    author: "Partenaire institutionnel",
    context: "Appel d’offres",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Écoute du besoin",
    text: "Visite de site, cadrage du programme, contraintes techniques et budget.",
  },
  {
    step: "02",
    title: "Étude et devis",
    text: "Solutions techniques, planning prévisionnel et offre claire.",
  },
  {
    step: "03",
    title: "Exécution",
    text: "Pilotage chantier, contrôles qualité et reporting régulier.",
  },
  {
    step: "04",
    title: "Réception",
    text: "Livraison, levée des réserves et accompagnement après travaux.",
  },
] as const;

export const commitments = [
  {
    title: "Sécurité & HSE",
    text: "Organisation chantier, EPI et bonnes pratiques pour protéger les équipes et les ouvrages.",
  },
  {
    title: "Respect des délais",
    text: "Planning suivi, alertes anticipées et coordination des corps d’état.",
  },
  {
    title: "Traçabilité",
    text: "Compte-rendus, photos d’avancement et documents utiles aux dossiers AO.",
  },
  {
    title: "Transparence",
    text: "Devis détaillé, avenants expliqués et communication directe avec le client.",
  },
] as const;

export const coverage = [
  "Lomé et grande agglomération",
  "Régions du Togo selon projet",
  "Marchés privés et publics",
  "Chantiers résidentiels, communautaires et techniques",
] as const;

export const faqs = [
  {
    question: "Pouvez-vous répondre à un appel d’offres ?",
    answer:
      "Oui. Nous constituons des dossiers de candidature avec références, capacité technique et organisation de chantier.",
  },
  {
    question: "Intervenez-vous seulement à Lomé ?",
    answer:
      "Notre base est à Agoè Assiyéyé (Lomé). Nous étudions aussi des projets en régions selon le périmètre et le planning.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous par téléphone ou via le formulaire. Une visite de site peut être planifiée pour affiner l’offre.",
  },
  {
    question: "Quels corps d’état couvrez-vous ?",
    answer:
      "Ingénierie, architecture, génie civil, construction, menuiserie, finitions, suivi, forage et prestations associées.",
  },
] as const;

export const services = [
  {
    title: "Ingénierie & conseil",
    detail: "Études techniques et accompagnement de vos projets.",
    image: "/images/hero-services.jpg",
  },
  {
    title: "Architecture",
    detail: "Conception et plans adaptés à votre programme.",
    image: "/images/projet-communaute.jpg",
  },
  {
    title: "Génie civil",
    detail: "Ouvrages, infrastructures et fondations.",
    image: "/images/projet-genie-civil.jpg",
  },
  {
    title: "Construction BTP",
    detail: "Réalisation de bâtiments et chantiers complets.",
    image: "/images/hero-chantier.jpg",
  },
  {
    title: "Menuiserie générale",
    detail: "Bois, finitions et ouvrages sur mesure.",
    image: "/images/service-menuiserie.jpg",
  },
  {
    title: "Centre de formation",
    detail: "Montée en compétences des équipes chantier.",
    image: "/images/service-formation.jpg",
  },
  {
    title: "Expertise & contrôle",
    detail: "Contrôle qualité et diagnostics techniques.",
    image: "/images/service-expertise.jpg",
  },
  {
    title: "Suivi de projets",
    detail: "Pilotage, planning et reporting de chantier.",
    image: "/images/about-equipe.jpg",
  },
  {
    title: "Commerce général",
    detail: "Fournitures et solutions liées au BTP.",
    image: "/images/service-prefabriques.jpg",
  },
  {
    title: "Vente de préfabriqués",
    detail: "Éléments préfabriqués pour accélérer vos travaux.",
    image: "/images/service-prefabriques.jpg",
  },
  {
    title: "Forage",
    detail: "Travaux de forage adaptés à vos besoins.",
    image: "/images/service-forage.jpg",
  },
  {
    title: "Autres prestations",
    detail: "Solutions sur mesure selon votre chantier.",
    image: "/images/services-finitions.jpg",
  },
] as const;

export const projects = [
  {
    title: "Centre communautaire de Doukpergou",
    meta: "Juin 2025 · Ouvrage public",
    category: "Marché public",
    summary:
      "Réalisation d’un équipement communautaire : structure, finitions et aménagements extérieurs, livré pour un usage public.",
    image: "/images/projet-communaute.jpg",
  },
  {
    title: "Chantiers résidentiels et structurants",
    meta: "Construction · Gros œuvre",
    category: "Bâtiment",
    summary:
      "Exécution de travaux de construction et de mise en œuvre structurelle sur sites résidentiels et mixtes.",
    image: "/images/hero-chantier.jpg",
  },
  {
    title: "Finitions et aménagements intérieurs",
    meta: "Second œuvre · Éclairage",
    category: "Second œuvre",
    summary:
      "Travaux de finition, plafonds et intégration d’éclairages pour un rendu soigné et durable.",
    image: "/images/services-finitions.jpg",
  },
  {
    title: "Supervision et génie civil",
    meta: "Suivi · Contrôle qualité",
    category: "Ingénierie",
    summary:
      "Encadrement technique, contrôle d’exécution et coordination des corps d’état sur chantier.",
    image: "/images/projet-genie-civil.jpg",
  },
] as const;

export const tenderCapabilities = [
  {
    title: "Références de chantier",
    text: "Ouvrages publics et privés documentés pour constituer vos dossiers de candidature.",
  },
  {
    title: "Capacité technique",
    text: "Ingénierie, génie civil, construction, menuiserie et suivi de projet sous un même toit.",
  },
  {
    title: "Organisation et délais",
    text: "Pilotage de chantier, reporting et respect des échéances contractuelles.",
  },
  {
    title: "Ancrage local",
    text: "Présence à Lomé, connaissance du terrain et réactivité opérationnelle.",
  },
] as const;
