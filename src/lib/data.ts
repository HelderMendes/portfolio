export type Project = {
  id: string;
  title: string;
  category: {
    en: string;
    nl: string;
  };
  description: {
    en: string;
    nl: string;
  };
  tags: string[];
  link?: string;
  github?: string;
  images: string[];
  featured?: boolean;
};

export type Experience = {
  id: string;
  role: {
    en: string;
    nl: string;
  };
  company: string;
  location: string;
  period: string;
  current?: boolean;
  logo?: string;
  technologies?: string[];
  description: {
    en: string[];
    nl: string[];
  };
};

export type SkillCategory = {
  category: {
    en: string;
    nl: string;
  };
  skills: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "openml",
    title: "OpenML.org Migration",
    category: { en: "Frontend Architecture", nl: "Frontend Architectuur" },
    description: {
      en: "Orchestrated the transition of a global machine learning platform into a modern React ecosystem. Focused on turning high-density scientific data into intuitive, design-led interfaces using Next.js and TypeScript.",
      nl: "Gecoördineerde overgang van een wereldwijd machine learning-platform naar een modern React-ecosysteem. Gericht op het transformeren van complexe wetenschappelijke data naar een intuïtieve, design-led interface.",
    },
    tags: ["Next.js", "TypeScript", "Docker", "Kubernetes", "UX Architecture"],
    link: "https://openml.org",
    images: ["/project_websites/openmlorg_vercel_app01.png", "/project_websites/openmlorg_vercel_app.png"],
    featured: true,
  },
  {
    id: "fastfit",
    title: "FastFit Automotive SaaS",
    category: { en: "Technical Product Design", nl: "Technisch Productontwerp" },
    description: {
      en: "Crafting the visual and technical blueprint for specialized automotive logic. Bridging the gap between rigid machine data and high-fidelity user workflows.",
      nl: "Het creëren van de visuele en technische blauwdruk voor gespecialiseerde automotive logica. Overbruggen van de kloof tussen complexe machinedata en hoogwaardige user workflows.",
    },
    tags: ["SaaS", "Product Design", "Process Architecture"],
    images: ["/webDesign/fastfit01.png", "/webDesign/FastFit.png", "/project_websites/fastfit-Automotive_software.jpeg"],
    featured: true,
  },
  {
    id: "emlinked",
    title: "EMLinked Professional Network",
    category: { en: "High-Fidelity Branding", nl: "High-Fidelity Branding" },
    description: {
      en: "Designing an elite networking ecosystem focused on visual consistency and performant frontend architecture.",
      nl: "Ontwerpen van een elite netwerk-ecosysteem gericht op visuele consideratie en performante frontend-architectuur.",
    },
    tags: ["Branding", "Next.js", "Interaction Design"],
    images: ["/webDesign/emlinked01.png", "/webDesign/emlinked02.png", "/webDesign/emlinked.png", "/project_websites/emlinked-nl.jpeg"],
    featured: true,
  },
  {
    id: "lookout-mode",
    title: "Lookout Mode",
    category: { en: "E-Commerce Design", nl: "E-Commerce Ontwerp" },
    description: {
      en: "Proving that heavy aesthetic excellence can run on high-performance code. A prototype focusing on motion and responsive layouts.",
      nl: "Bewijs dat zware esthetische uitmuntendheid kan draaien op hoogwaardige code. Een prototype gericht op motion en responsive layouts.",
    },
    tags: ["Next.js", "Motion", "Premium UI"],
    link: "https://lookoutmode.vercel.app",
    images: ["/APPs/lookoutmode.vercel.png", "/project_websites/lookout.jpg"],
  },
  {
    id: "svs",
    title: "SVS Portal",
    category: { en: "Management Software", nl: "Beheersoftware" },
    description: {
      en: "Modern management portal with real-time data visualization and complex user workflows.",
      nl: "Modern beheersportal met real-time datavisualisatie en complexe gebruikersworkflows.",
    },
    tags: ["Web Design", "Data Viz", "SaaS"],
    images: ["/webDesign/SVS.png"],
  },
  {
    id: "deboshalte",
    title: "De Boshalte",
    category: { en: "Web Design", nl: "Web Design" },
    description: {
      en: "Community hub for a unique local venue, focusing on accessibility and visual warmth.",
      nl: "Community hub voor een unieke lokale locatie, gericht op toegankelijkheid en visuele warmte.",
    },
    tags: ["Web Design", "Community", "Identity"],
    images: ["/webDesign/DeBoshalte.png"],
  },
  {
    id: "biomaatschappij",
    title: "Stichting Biomaatschappij",
    category: { en: "Science & Education", nl: "Wetenschap & Educatie" },
    description: {
      en: "Complex multisite architecture for a scientific foundation, managing security and digital publishing.",
      nl: "Complexe multisite architectuur voor een wetenschappelijke stichting, met beheer van security en digitale publicatie.",
    },
    tags: ["WordPress", "Security", "Multisite"],
    images: ["/project_websites/biomaatschappii.jpg"],
  },
  {
    id: "faect",
    title: "Faect NL",
    category: { en: "Web Development", nl: "Webontwikkeling" },
    description: {
      en: "High-performance marketing website and custom features for a technology and automation firm.",
      nl: "Hoogwaardige marketingwebsite en maatwerk functies voor een technologie- en automatiseringsbedrijf.",
    },
    tags: ["Next.js", "Animation", "SaaS"],
    images: ["/project_websites/faect-nl.png"],
  },
  {
    id: "monkeymotions",
    title: "MonkeyMotions",
    category: { en: "Digital Strategy", nl: "Digitale Strategie" },
    description: {
      en: "Interactive platform for physical education and talent tracking in schools.",
      nl: "Interactief platform voor lichamelijke opvoeding en talenttracking in scholen.",
    },
    tags: ["Product Design", "UX Architecture"],
    images: ["/project_websites/MonkeyMotions.jpg"],
  },
  {
    id: "heritage",
    title: "Art Direction Legacy",
    category: { en: "Senior Strategic Art Direction", nl: "Senior Strategische Art Direction" },
    description: {
      en: "15+ years of strategic leadership at Hemels International and Edições Arrábida, defining visual identities for Philips and Mercedes.",
      nl: "15+ jaar strategisch leiderschap bij Hemels International en Edições Arrábida, waarbij visuele identiteiten werden gedefinieerd voor Philips en Mercedes.",
    },
    tags: ["Senior Leadership", "Typography", "Art Direction"],
    images: ["/publicaties/Nyenrode_magazine.jpg", "/publicaties/Portfolio_magazine.jpg", "/publicaties/Pim_magazine.jpg"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "openml-tu-e",
    role: {
      en: "Design-Driven Frontend Lead (OpenML)",
      nl: "Design-Driven Frontend Lead (OpenML)",
    },
    company: "OpenML.org (TU/Eindhoven)",
    location: "Eindhoven, NL",
    period: "2024 - Present",
    current: true,
    technologies: ["React 19", "Next.js 15", "TurboPack", "Tailwind v4", "Docker", "Zod"],
    description: {
      en: [
        "Leading the complex frontend migration for a global scientific community.",
        "Architecting type-safe React systems that handle high-density machine learning metadata.",
        "Bridging scientific complexity with accessible UX/UI.",
      ],
      nl: [
        "Leidinggevende bij de complexe frontend-migratie voor een wereldwijde wetenschappelijke community.",
        "Architectuur van type-safe React-systemen voor grootschalige machine learning metadata.",
        "Overbruggen van wetenschappelijke complexiteit met toegankelijke UX/UI.",
      ],
    },
  },
  {
    id: "helder-design",
    role: {
      en: "Independent Web Architect",
      nl: "Zelfstandig Web Architect",
    },
    company: "Helder Design",
    location: "Amsterdam, NL",
    period: "2010 - Present",
    logo: "/logos_huisStyle/stadshuis_logo.jpg",
    technologies: ["Next.js", "WordPress REST API", "Framer Motion", "PHP", "AWS"],
    description: {
      en: [
        "Full-cycle development for 30+ production websites, including complex management portals and SaaS platforms.",
        "Technical consulting for SMEs, moving them from legacy systems to modern, design-centered architectures.",
      ],
      nl: [
        "Full-cycle ontwikkeling voor 30+ productie websites, inclusief complexe beheersportals en SaaS-platforms.",
        "Technische consultancy voor mkb-bedrijven, waarbij legacy-systemen worden gemoderniseerd naar design-centered architecturen.",
      ],
    },
  },
  {
    id: "art-director",
    role: {
      en: "Senior Art Director (Strategic Era)",
      nl: "Senior Art Director (Strategische Era)",
    },
    company: "Hemels International / Edições Arrábida",
    location: "Amsterdam / Lisbon",
    period: "1993 - 2009",
    logo: "/publicaties/Portfolio_magazine.jpg",
    technologies: ["Editorial Design", "Typography", "Branding", "Grid Theory", "Creative Direction"],
    description: {
      en: [
        "Strategic Art Direction for global market leaders like Philips, Mercedes-Benz, and DaimlerChrysler.",
        "Managed high-level visual production, from magazine layouts to total brand visual identities.",
        "Defining the standard for high-fidelity communication in the automotive and luxury sectors.",
      ],
      nl: [
        "Strategische Art Direction voor marktleders zoals Philips, Mercedes-Benz en DaimlerChrysler.",
        "Beheer van hoogwaardige visuele productie, van tijdschriftlay-outs tot volledige merkidentiteiten.",
        "Het definiëren van de standaard voor high-fidelity communicatie in de automotive- en luxesector.",
      ],
    },
  },
];

export const LANGUAGES = [
  { name: { en: "Dutch", nl: "Nederlands" }, level: "NT2 Level (Workplace Fluent)" },
  { name: { en: "English", nl: "Engels" }, level: "Professional Mastery" },
  { name: { en: "Portuguese", nl: "Portugees" }, level: "Native Proficiency" },
];
