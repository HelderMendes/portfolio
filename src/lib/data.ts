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
  image?: string;
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
    category: { en: "Full Stack Architecture", nl: "Full Stack Architectuur" },
    description: {
      en: "Orchestrated the high-scale migration of the global platform to a modern Next.js/TypeScript architecture. Dockerizing microservices and managing global SEO/Performance.",
      nl: "Gecoördineerde grootschalige migratie naar een moderne Next.js/TypeScript architectuur. Dockerizen van microservices en beheren van wereldwijde SEO/Performance.",
    },
    tags: ["Next.js", "TypeScript", "Docker", "Kubernetes", "FastAPI"],
    link: "https://openml.org",
    image: "/Projest_websites/openmlorg_vercel_app01.png",
    featured: true,
  },
  {
    id: "fastfit",
    title: "FastFit Automotive SaaS",
    category: { en: "Web Application Design", nl: "Webapplicatie Ontwerp" },
    description: {
      en: "UI/UX design and architecture for specialized automotive software. Focused on a high-performance web interface for complex machine data.",
      nl: "UI/UX ontwerp en architectuur voor gespecialiseerde automotive software. Gericht op een hoogwaardige webinterface voor complexe machinedata.",
    },
    tags: ["Product Design", "SaaS", "Web Design"],
    image: "/webDesign/fastfit01.png",
    featured: true,
  },
  {
    id: "emlinked",
    title: "EMLinked Professional Network",
    category: { en: "Social Platform Design", nl: "Sociaal Platformontwerp" },
    description: {
      en: "Specialized networking platform focusing on intuitive user experience and high-fidelity frontend architecture.",
      nl: "Gespecialiseerd netwerkplatform gericht op intuïtieve gebruikerservaring en high-fidelity frontend architectuur.",
    },
    tags: ["Next.js", "UX Design", "Networking"],
    image: "/webDesign/emlinked01.png",
    featured: true,
  },
  {
    id: "lookout-mode",
    title: "Lookout Mode",
    category: { en: "E-Commerce", nl: "E-Commerce" },
    description: {
      en: "High-end fashion e-commerce prototype. Proving that aesthetic excellence can meet rigorous technical standards.",
      nl: "High-end fashion e-commerce prototype. Bewijs dat esthetische uitmuntendheid kan samengaan met strikte technische standaarden.",
    },
    tags: ["Next.js", "Tailwind CSS", "Premium UI"],
    link: "https://lookoutmode.vercel.app",
    image: "/APPs/lookoutmode.vercel.png",
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
    image: "/webDesign/SVS.png",
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
    image: "/webDesign/DeBoshalte.png",
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
    image: "/Projest_websites/biomaatschappii.jpg",
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
    image: "/Projest_websites/faect-nl.png",
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
    image: "/Projest_websites/MonkeyMotions.jpg",
  },
  {
    id: "heritage",
    title: "Art Direction Legacy",
    category: { en: "Design Heritage", nl: "Ontwerpervaring" },
    description: {
      en: "15+ years of strategic art direction for global leaders like Philips and Mercedes. This foundation fuels my technical precision.",
      nl: "15+ jaar strategische art direction voor wereldwijde marktleiders zoals Philips en Mercedes. Dit fundament voedt mijn technische precisie.",
    },
    tags: ["Art Direction", "Editorial", "Typography"],
    image: "/publicaties/Nyenrode_magazine.jpg",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "openml-tu-e",
    role: {
      en: "Full-Stack Developer (Open Source Migration)",
      nl: "Full-Stack Developer (Open Source Migratie)",
    },
    company: "OpenML.org (TU/Eindhoven)",
    location: "Eindhoven, NL",
    period: "2024 - Present",
    current: true,
    description: {
      en: [
        "Frontend Migration Lead for OpenML.org platform.",
        "Developing Next.js and FastAPI microservices.",
        "Managing Docker and Kubernetes deployment strategies.",
      ],
      nl: [
        "Frontend Migratie Lead voor het OpenML.org platform.",
        "Ontwikkelen van Next.js en FastAPI microservices.",
        "Beheren van Docker- en Kubernetes implementatiestrategieën.",
      ],
    },
  },
  {
    id: "freelance-dev",
    role: {
      en: "Freelance Web Developer & Designer",
      nl: "Freelance Web Developer & Designer",
    },
    company: "Helder Design",
    location: "Amsterdam, NL",
    period: "2010 - Present",
    logo: "/logos_huisStyle/stadshuis_logo.jpg",
    description: {
      en: [
        "30+ modern WordPress & React web solutions.",
        "Strategic UX/UI and backend development.",
        "Key clients: biomaatschappij.nl, werkaanhetspoel.nl.",
      ],
      nl: [
        "30+ moderne WordPress & React weboplossingen.",
        "Strategische UX/UI en backend ontwikkeling.",
        "Belangrijke klanten: biomaatschappij.nl, werkaanhetspoel.nl.",
      ],
    },
  },
  {
    id: "art-director",
    role: {
      en: "Senior Art Director / Graphic Designer",
      nl: "Senior Art Director / Grafisch Ontwerper",
    },
    company: "Communipart / Hemels",
    location: "Amsterdam, NL",
    period: "1993 - 2009",
    logo: "/publicaties/Portfolio_magazine.jpg",
    description: {
      en: [
        "Visual identities for Philips, Mercedes, and Daimler.",
        "Mastery of grid systems and high-fidelity typography.",
      ],
      nl: [
        "Visuele identiteiten voor Philips, Mercedes en Daimler.",
        "Beheersing van grid-systemen en high-fidelity typografie.",
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: { en: "Frontend", nl: "Frontend" },
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    category: { en: "Architecture", nl: "Architectuur" },
    skills: ["Docker", "Kubernetes", "PostgreSQL", "FastAPI", "Zustand"],
  },
  {
    category: { en: "Design", nl: "Design" },
    skills: ["Web Design", "UI/UX", "Art Direction", "Figma", "Adobe CS"],
  },
  {
    category: { en: "Workflow", nl: "Workflow" },
    skills: ["Git", "CI/CD", "Vercel", "AI Optimization"],
  },
];
