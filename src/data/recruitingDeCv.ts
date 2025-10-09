export type ContactLink = {
  label: string;
  url: string;
};

export type DetailItem = {
  label: string;
  value: string;
};

export type TimelineItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export type ProjectHighlight = {
  title: string;
  role: string;
  context: string;
  outcome: string;
  techStack: string[];
  description?: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type CvProfile = {
  name: string;
  title: string;
  availability: string;
  summary: string;
  contact: ContactLink[];
  personal: DetailItem[];
  location: string;
  languages: { language: string; level: string }[];
  skills: SkillGroup[];
  experiences: TimelineItem[];
  education: TimelineItem[];
  interests: string[];
};

export const recruitingDeCv: CvProfile = {
  name: "Roman Weis",
  title: "Software Architect & Fullstack Engineer",
  availability: "Aktuell Software Architect bei Digitec Galaxus",
  summary:
    "Schwerpunkt auf .NET, Software-Architekturen und Experemente mit Agentic AI. Erfahrung in E-Commerce, Lagerlogistik, Energie- und Finanzdomänen.",
  contact: [
    { label: "roman.weis@proton.me", url: "mailto:roman.weis@proton.me" },
    { label: "+41 76 42 44 186", url: "tel:+41764244186" },
  ],
  personal: [
    { label: "Geburtsdatum", value: "19.11.1985" },
    { label: "Staatsangehörigkeit", value: "Schweizer" },
    { label: "Adresse", value: "Spyristeig 35, 8044 Zürich" },
  ],
  location: "Zürich, Schweiz",
  languages: [
    { language: "Deutsch", level: "Muttersprache" },
    { language: "Englisch", level: "Fliessend" },
    { language: "Russisch", level: "Fliessend" },
  ],
  skills: [
    {
      name: "Programmiersprachen",
      items: ["C#", "TypeScript", "Java", "Python"],
    },
    {
      name: "Datenbanken",
      items: ["MS SQL Server", "PostgreSQL", "RavenDB", "MongoDB"],
    },
    {
      name: "API",
      items: ["REST", "GraphQL", "gRPC"],
    },
    {
      name: "Frontend",
      items: ["React", "Angular", "Blazor"],
    },
    {
      name: "Cloud & Infrastruktur",
      items: ["GCP", "Azure", "AWS", "Hetzner", "Docker", "Kubernetes"],
    },
    {
      name: "CI/CD & Automation",
      items: ["Azure DevOps", "TeamCity", "Octopus Deploy", "GitHub Actions"],
    },
  ],
  experiences: [
    {
      role: "Software Architect",
      company: "Digitec Galaxus AG",
      location: "Zürich",
      period: "Aug 2024 - Heute",
      highlights: [
        "Entwurf, Umsetzung und Dokumentation von Software-Komponenten im Bereich Lagerlogistik",
        "Technische Leitung und Ansprechpartner für bereichsübergreifende Initiativen",
        "Coaching von Softwareentwickler:innen in Architektur- und Engineering-Praktiken",
        "Entwicklung von Tools für Architektur-Governance und Qualitätskontrolle",
        "Early Adopter und Evangelist für den Einsatz von KI-Technologien in der Softwareentwicklung",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (extern)",
      company: "Axpo Group",
      location: "Baden",
      period: "Mai 2023 - Jun 2024",
      highlights: [
        "Design und Entwicklung einer Energiedaten-Plattform als Microservices-Architektur (.NET/C#, GraphQL, PostgreSQL, Blazor)",
        "Automatisierung von Infrastruktur und Deployment-Pipelines mit Azure, Terraform, TeamCity und Octopus Deploy",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (extern)",
      company: "Swiss Life Group",
      location: "Zürich",
      period: "Jun 2022 - Apr 2023",
      highlights: [
        "Implementierung von Features mit React Relay, Hot Chocolate GraphQL, .NET/C#, MongoDB und Kubernetes",
        "Planung und Durchführung von Datenmigrationen von SQL Server zu SAP C4C",
      ],
    },
    {
      role: "Founder, Architect & Developer",
      company: "Stamy Booking GmbH",
      location: "Zürich",
      period: "Mär 2020 - Mai 2022",
      highlights: [
        "Entwurf und Implementierung einer SaaS-Lösung für die Fitness- und Wellnessbranche",
        "Implementierung einer Multi-Cloud-Infrastruktur über Azure, GCP, AWS und Hetzner",
        "Entwicklung mehrerer Web-Frontends in Angular, React und Next.js",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Techgroup / Maison du Software (Planzer Spin-off)",
      location: "Zürich",
      period: "Nov 2019 - Feb 2020",
      highlights: [
        "Unterstützung bei der Einführung von Scrum und kontinuierlicher Softwareauslieferung in Azure",
        "Technische Anleitung von Junior Entwickler:innen",
      ],
    },
    {
      role: ".NET Fullstack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "Mai 2017 - Sep 2019",
      highlights: [
        "Modernisierung und Skalierung eines komplexen Legacy-Systems für Steuerberichterstattung (.NET Core, SQL Server, Docker, RavenDB, Angular)",
        "Mitarbeit in mehreren Scrum-Teams als .NET/Angular Fullstack Engineer für eine Privatbank",
        "Abschluss der Masterarbeit mit Fokus auf Domain-driven Design und Softwarearchitekturen",
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Zürich",
      period: "Jan 2017 - Mai 2017",
      highlights: [
        "Entwicklung einer Java-Applikation für das Backtesting von Forex-Handelsstrategien",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (ehemals Alstom Power)",
      location: "Baden",
      period: "Okt 2012 - Dez 2016",
      highlights: [
        "Aerodynamische Auslegung von Gasturbinenverdichtern",
        "Modernisierung des Legacy Rolls-Royce Design Systems mit Python, PyQt und PostgreSQL",
        "Technischer Lead bei der Integration von Konstruktionssoftware während der Übernahme",
      ],
    },
  ],
  education: [
    {
      role: "Master of Computer Science (Note 1.4)",
      company: "FH Trier - Fernstudium",
      location: "Trier / Remote",
      period: "Abschluss 2019",
      highlights: [
        "Masterarbeit: Domain-driven Design, Microservices Architektur, CQRS, Event Sourcing (Note 1.0)",
        "Fernstudium parallel zu Vollzeitprojekten im Software Engineering",
      ],
    },
    {
      role: "Diplom Maschinenbau & Verfahrenstechnik (Note 1.7)",
      company: "TU Kaiserslautern",
      location: "Kaiserslautern",
      period: "Abschluss 2012",
      highlights: [
        "Vertiefungen: Energietechnik, Grundlagen des Maschinenbaus, Strömungsmechanik",
        "Diplomarbeit bei Rolls-Royce, Dahlewitz: Numerische Untersuchungen & CFD-Simulationen zu Casing Treatments (Note 1.0)",
      ],
    },
    {
      role: "Abitur (Note 2.2)",
      company: "Christian von Mannlich Gymnasium",
      location: "Homburg (Saar)",
      period: "Abschluss 2007",
      highlights: ["Allgemeine Hochschulreife"],
    },
    {
      role: "Zertifikate & Trainings",
      company: "iSAQB · IREB · Vaughn Vernon",
      location: "",
      period: "2022 - 2018",
      highlights: [
        "Certified Professional for Software Architecture, Foundation Level (iSAQB), 10/2022",
        "Certified Professional for Requirements Engineering, Foundation Level (IREB), 04/2019",
        "Domain-Driven Design Workshop mit Vaughn Vernon, 09/2018",
      ],
    },
  ],
  interests: [
    "Coaching & Mentoring von Softwareentwickler:innen",
    "Architektur-Communities rund um Domain-driven Design",
    "Continuous Delivery, Automatisierung & DevOps-Praktiken",
  ],
};
