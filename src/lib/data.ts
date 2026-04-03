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
    category: { en: "Full Stack", nl: "Full Stack" },
    description: {
      en: "Orchestrated the high-scale migration of the OpenML.org platform to a modern Next.js architecture, improving performance and SEO for the global machine learning community.",
      nl: "Gecoördineerde grootschalige migratie van het OpenML.org platform naar een moderne Next.js architectuur, wat de prestaties en SEO verbeterde voor de wereldwijde machine learning community.",
    },
    tags: ["Next.js", "TypeScript", "Docker", "Kubernetes", "FastAPI"],
    link: "https://openmlorg.vercel.app",
    featured: true,
  },
  {
    id: "lookout-mode",
    title: "Lookout Mode",
    category: { en: "E-Commerce", nl: "E-Commerce" },
    description: {
      en: "Full-featured fashion e-commerce store prototype with a responsive design and modern UI.",
      nl: "Volledig functioneel prototype van een fashion e-commerce winkel met een responsive design en moderne UI.",
    },
    tags: ["Next.js", "Tailwind CSS", "E-commerce"],
    link: "https://lookoutmode.vercel.app",
    featured: true,
  },
  {
    id: "phone-case-customizer",
    title: "Phone Case Customizer",
    category: { en: "Web App", nl: "Web App" },
    description: {
      en: "Interactive e-commerce prototype with image upload and live customization preview.",
      nl: "Interactief e-commerce prototype met afbeelding-upload en live aanpassingsvoorbeeld.",
    },
    tags: ["Next.js", "UploadThing", "Zustand"],
    link: "https://phone-case-sepia.vercel.app",
  },
  {
    id: "tharros",
    title: "Tharros Training & Coaching",
    category: { en: "Corporate Web", nl: "Bedrijfswebsite" },
    description: {
      en: "Modern corporate website for a training and coaching company, focusing on clean design and accessibility.",
      nl: "Moderne bedrijfswebsite voor een trainings- en coachingsbedrijf, met de focus op een strak ontwerp en toegankelijkheid.",
    },
    tags: ["React", "CSS Modules", "SEO"],
    link: "https://tharros-trainingcoaching.nl",
  },
  {
    id: "biomaatschappij",
    title: "Stichting Biomaatschappij",
    category: { en: "Science & Education", nl: "Wetenschap & Educatie" },
    description: {
      en: "Developed and maintained the Foundation's platform, including multisite setup, security hardening, and digital publishing tools.",
      nl: "Ontwikkelde en onderhield het platform van de stichting, inclusief multisite setup, security hardening en digitale publicatietools.",
    },
    tags: ["WordPress", "Security", "Multisite", "SEO"],
    link: "https://biomaatschappij.nl",
  },
  {
    id: "werkaanhetspoel",
    title: "Werk aan het Spoel",
    category: { en: "Culture & Venue", nl: "Cultuur & Locatie" },
    description: {
      en: "Custom features for a cultural heritage site, including complex event booking and dynamic content management.",
      nl: "Maatwerk functies voor een cultureel erfgoed terrein, inclusief complexe evenementenboekingen en dynamisch contentbeheer.",
    },
    tags: ["UserPro", "Custom Features", "E-ticketing"],
    link: "https://werkaanhetspoel.nl",
  },
  {
    id: "museumhogewoerd",
    title: "Museum Hoge Woerd",
    category: { en: "Culture & Museum", nl: "Cultuur & Museum" },
    description: {
      en: "Interactive web presence for a major Roman heritage site in the Netherlands.",
      nl: "Interactieve website voor een belangrijke Romeinse archeologische vindplaats in Nederland.",
    },
    tags: ["Design", "Content Strategy", "SEO"],
    link: "https://museumhogewoerd.nl",
  },
  {
    id: "nyenrode-now",
    title: "Nyenrode Now / Hersenstichting",
    category: { en: "Graphic Design", nl: "Grafisch Ontwerp" },
    description: {
      en: "Visual identity, editorial design, and branding for high-profile institutions and foundations.",
      nl: "Visuele identiteit, redactioneel ontwerp en branding voor vooraanstaande instellingen en stichtingen.",
    },
    tags: ["Branding", "Editorial", "Visual Identity"],
    featured: true,
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
        "Developed Docker images and Compose configs for multi-service architecture.",
        "Managed microservices deployment within a Kubernetes environment.",
        "Collaborated on Python microservices using FastAPI.",
      ],
      nl: [
        "Frontend Migratie Lead voor het OpenML.org platform.",
        "Ontwikkelde Docker images en Compose configuraties voor multi-service architectuur.",
        "Beheerde microservices implementatie binnen een Kubernetes omgeving.",
        "Werkte samen aan Python microservices met FastAPI.",
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
    description: {
      en: [
        "Developed and maintained 30+ WordPress websites and webshops.",
        "Provided ongoing technical support and hosting management.",
        "Key clients: biomaatschappij.nl, werkaanhetspoel.nl, stichtingdeboshalte.nl.",
      ],
      nl: [
        "Ontwikkelde en onderhield 30+ WordPress websites en webshops.",
        "Bood doorlopende technische ondersteuning en hostingbeheer.",
        "Belangrijke klanten: biomaatschappij.nl, werkaanhetspoel.nl, stichtingdeboshalte.nl.",
      ],
    },
  },
  {
    id: "art-director",
    role: {
      en: "Graphic Designer / Art Director",
      nl: "Grafisch Ontwerper / Art Director",
    },
    company: "Various Studios (Hemels, Communipart)",
    location: "Amsterdam / Lisbon",
    period: "1993 - 2009",
    description: {
      en: [
        "Directed visual identities for high-profile corporate magazines.",
        "Clients included DaimlerChrysler, Mercedes, Philips, and Lanschot Bankiers.",
        "Specialized in editorial design and brand consistency.",
      ],
      nl: [
        "Regisseerde visuele identiteiten voor hoogwaardige bedrijfsbladen.",
        "Klanten waren onder meer DaimlerChrysler, Mercedes, Philips en Lanschot Bankiers.",
        "Gespecialiseerd in redactioneel ontwerp en merkconsistentie.",
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: { en: "Frontend", nl: "Frontend" },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    category: { en: "Backend & State", nl: "Backend & State" },
    skills: ["PostgreSQL", "Prisma", "Zustand", "TanStack Query", "FastAPI (Python)"],
  },
  {
    category: { en: "Design", nl: "Design" },
    skills: ["Adobe XD", "Photoshop", "Illustrator", "Figma", "Visual Hierarchy", "Typography"],
  },
  {
    category: { en: "DevOps & Tools", nl: "DevOps & Tools" },
    skills: ["Docker", "Kubernetes", "CI/CD", "Vercel", "Git", "AI Automation"],
  },
];
