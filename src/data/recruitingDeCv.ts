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
  allowPageBreak?: boolean;
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

export type SidebarSectionKey = "personal" | "contact" | "skills" | "languages";

export type SidebarSectionConfig = {
  key: SidebarSectionKey;
  allowPageBreak?: boolean;
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
  sidebarSections?: SidebarSectionConfig[];
};

export const recruitingDeCv: CvProfile = {
  name: "Roman Weis",
  title: "Software Architect & Fullstack Engineer",
  availability: "Aktuell Software Architect bei Digitec Galaxus",
  summary:
    "Schwerpunkt auf Backend, Software-Architekturen und Agentic AI. Erfahrung in E-Commerce, Lagerlogistik, Energie-, Versicherungs- und Finanzbranchen.",
  contact: [
    {
      label: "roman.weis@protonmail.com",
      url: "mailto:roman.weis@protonmail.com",
    },
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
  sidebarSections: [
    { key: "personal" },
    { key: "contact" },
    { key: "skills", allowPageBreak: true },
    { key: "languages", allowPageBreak: true },
  ],
  skills: [
    {
      name: "Programmiersprachen",
      items: ["C#", "TypeScript", "Python"],
    },
    {
      name: "Architektur & Engineering",
      items: [
        "Domain-driven Design",
        "Quality-driven Software Architecture",
        "Design patterns",
        "Strukturierter Monolith",
        "Self-contained Systems",
      ],
    },
    {
      name: "Architekturdokumentation",
      items: [
        "UML",
        "arc42 Architektursichten",
        "C4 Model",
        "Architecture Decisions Records (ADRs)",
        "Diagramme als Code (Mermaid)",
      ],
    },
    {
      name: "Daten & Persistenz",
      items: [
        "RDBMS: MS SQL Server, PostgreSQL",
        "NoSQL: MongoDB, RavenDB, Redis, Neo4j",
        "Datenmodellierung",
        "Performance Tuning",
      ],
    },
    {
      name: "Messaging Systeme",
      items: [
        "Azure Service Bus",
        "NServiceBus",
        "Kafka",
        "RabbitMQ",
        "Event Sourcing/Streaming",
      ],
    },
    {
      name: "APIs & Integration",
      items: [
        "REST/GraphQL/gRPC",
        "API-First, Contract-driven",
        "Schema design",
        "Versionierung, AuthN/AuthZ",
      ],
    },
    {
      name: "KI-gestützte Entwicklung",
      items: [
        "Code Generation, Refactoring, Testing",
        "GitHub Copilot coding agent",
        "MCP Server",
        "Sematic Kernel",
      ],
    },
    {
      name: "Frontend",
      items: [
        "React, Next.js, Angular",
        "GraphQL: React/Relay",
        "Blazor",
        "Design Systems: tailwindcss, material ui",
        "Performance, Accessibility",
      ],
    },
    {
      name: "Cloud & Plattform",
      items: [
        "Multi-Cloud (Azure/AWS/GCP/Hetzner)",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
    {
      name: "DevOps & Reliability",
      items: [
        "Github Actions, Azure DevOps, TeamCity",
        "CI/CD, Release-Strategien",
        "Testautomatisierung: Playwright, Testcontainers",
      ],
    },
    {
      name: "Observability",
      items: [
        "Tracing/Logging/Metrics (OpenTelemetry)",
        "Proaktive Überwachung, Runbooks & Postmortems",
      ],
    },
    {
      name: "Security & Compliance",
      items: [
        "Zero Trust, Secrets-Management",
        "Encryption (at-rest/in-transit)",
        "Auditierbarkeit, Datenschutz (z. B. DSGVO)",
      ],
    },
  ],
  experiences: [
    {
      role: "Software Architect",
      company: "Digitec Galaxus AG",
      location: "Zürich",
      period: "Aug. 2024 – heute",
      highlights: [
        "Konzeption, Implementierung und Dokumentation skalierbarer Softwarekomponenten für die Lagerlogistik",
        "Technische Leitung und zentrale Ansprechperson für bereichsübergreifende Initiativen",
        "Mentoring und Befähigung von Softwareentwickler:innen in Architektur- und Engineering-Praktiken",
        "Entwicklung von Werkzeugen für Architektur-Governance und Qualitätssicherung",
        "Frühe Adoption und aktive Befürwortung von KI-Technologien in der Softwareentwicklung (Alltag und Hackathons)",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (extern)",
      company: "Axpo Group",
      location: "Baden",
      period: "Mai 2023 – Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Konzeption und Entwicklung einer Energiedatenplattform in Microservices-Architektur (.NET/C#, GraphQL, PostgreSQL, Blazor)",
        "Aufbau und Automatisierung von Infrastruktur sowie CI/CD-Pipelines mit Azure, Terraform, TeamCity und Octopus Deploy",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (extern)",
      company: "Swiss Life Group",
      location: "Zürich",
      period: "Jun. 2022 – Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Umsetzung von Features für ein Versicherungsportal mit React Relay, Hot Chocolate GraphQL, .NET/C#, MongoDB und Kubernetes",
        "Planung und Durchführung von Datenmigrationen von SQL Server nach SAP C4C",
      ],
    },
    {
      role: "Founder, Architect & Developer",
      company: "Stamy Booking GmbH",
      location: "Zürich",
      period: "März 2020 – Mai 2022",
      allowPageBreak: true,
      highlights: [
        "Konzeption und Realisierung einer SaaS-Lösung für die Fitness- und Wellnessbranche",
        "Aufbau einer Multi-Cloud-Infrastruktur über Azure, GCP, AWS und Hetzner",
        "Entwicklung mehrerer Web-Frontends mit Angular, React und Next.js",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software",
      location: "Zürich",
      period: "Nov. 2019 – Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Einführung von Scrum und Continuous Delivery in Azure",
        "Technische Betreuung und Anleitung von Junior-Entwickler:innen",
      ],
    },
    {
      role: ".NET Fullstack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "Mai 2017 – Sep. 2019",
      allowPageBreak: false,
      highlights: [
        "Modernisierung und Skalierung eines komplexen Legacy-Systems für die Steuerberichterstattung (.NET Core, SQL Server, Docker, RavenDB, Angular)",
        "Mitarbeit in mehreren Scrum-Teams als .NET-/Angular-Fullstack-Engineer für eine Privatbank",
        "Masterarbeit mit Schwerpunkt Domain-driven Design und Softwarearchitekturen erfolgreich abgeschlossen",
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Zürich",
      period: "Jan. 2017 – Mai 2017",
      highlights: [
        "Entwicklung einer Java-Anwendung für das Backtesting von Forex-Handelsstrategien",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (ehemals Alstom Power)",
      location: "Baden",
      period: "Okt. 2012 – Dez. 2016",
      highlights: [
        "Aerodynamische Auslegung von Verdichtern für Gasturbinen",
        "Modernisierung eines Legacy-Designsystems von Rolls-Royce mit Python, PyQt und PostgreSQL",
        "Technische Leitung der Integration von Konstruktionssoftware im Zuge einer Unternehmensübernahme",
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
};
