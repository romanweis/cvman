import type { CvProfile } from "./recruitingDeCv";

export const owtDeCv: CvProfile = {
  language: "de",
  name: "Roman Weis",
  title: "Software Architect & Technical Team Lead",
  availability: "Aktuell Software Architect bei Digitec Galaxus",
  summary:
    "Software Engineer, Architekt und Tech Lead mit über zwölf Jahren Erfahrung im E-Commerce, in der Lagerlogistik sowie in der Energie-, Maschinenbau-, Versicherungs- und Finanzbranche; davon mehr als vier Jahre in der Softwareberatung, über sechs Jahre in der Produktentwicklung und zwei Jahre als Enterpreneur.",
  contact: [
    {
      label: "roman.weis@proton.me",
      url: "mailto:roman.weis@proton.me",
    },
    { label: "+41 76 42 44 186", url: "tel:+41764244186" },
  ],
  personal: [
    { label: "Geburtsdatum", value: "19. November 1985" },
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
      name: "Team Leadership",
      items: [
        "Technische Führung",
        "Mentoring von Entwicklerteams",
        "Agile Methoden (Scrum)",
        "Stakeholder-Kommunikation",
        "Cross-Team Alignment",
      ],
    },
    {
      name: "Software-Architektur",
      items: [
        "Domain-Driven Design (DDD)",
        "Event-Driven Architecture (EDA)",
        "Modular Monolith",
        "Self-contained Systems & Microservices",
        "Clean Architecutre",
        "Verical Slice Architecture",
      ],
    },
    {
      name: "Architektur-Dokumentation",
      items: [
        "UML",
        "arc42 Architektursichten",
        "C4 Model",
        "Architecture Decisions Records (ADRs)",
        "Diagramme als Code (Mermaid)",
      ],
    },

    {
      name: "Programmiersprachen",
      items: ["C#", "Typescript", "Python", "Java"],
    },
    {
      name: "Frontend",
      items: [
        "React/Relay",
        "Next.js",
        "Angular",
        "Blazor",
        "Tailwindcss",
        "MUI",
      ],
    },
    {
      name: "Cloud & DevOps",
      items: [
        "Azure Cloud Services",
        "Google Cloud Platform",
        "AWS im Berecih Web Hosting & S3",
        "CI/CD Pipelines (GitHub Actions, Azure DevOps)",
        "Docker & Kubernetes",
        "Terraform",
      ],
    },
    {
      name: "Daten & Persistenz",
      items: [
        "RDBMS: MS SQL Server, PostgreSQL",
        "NoSQL: MongoDB, RavenDB, Redis",
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
        "Schema Design",
        "Versionierung, AuthN/AuthZ",
      ],
    },
    {
      name: "KI-gestützte Entwicklung",
      items: [
        "Code Generation, Refactoring, Testing",
        "GitHub Copilot Coding Agent",
        "MCP Server",
        "Semantic Kernel",
      ],
    },
  ],
  experiences: [
    {
      role: "Software Architect",
      company: "Digitec Galaxus AG",
      location: "Zürich",
      period: "Aug. 2024 - heute",
      highlights: [
        "Architektonische Weiterentwicklung der grössten schweizerischen Lagerlogistikplattform mit Millionen von Artikeln und Bestellungen",
        "Technische Führung, Mentoring und Coaching eines Teams von 6 Software-Ingenieuren",
        "Planung und Koordination von teamübergreifenden Initiativen",
        "Einführung von LLM-gestützten Entwicklungsworkflows zur Steigerung der Produktivität",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (extern)",
      company: "Axpo Group",
      location: "Baden",
      period: "Mai 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Konzipieren einer Energiedatenplattform zur Unterstützung des internationalen Energiehandels",
        "Umsetzung der Datenplattform als erweiterbare Microservices-Architektur mit .NET/C#, PostgreSQL und Blazor",
        "Aufbau automatisierter Infrastruktur und CI/CD - Pipelines mit Azure, Terraform, TeamCity und Octopus Deploy",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (extern)",
      company: "Swiss Life Group",
      location: "Zürich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Feature-Entwicklung für das Versicherungsportal mit React Relay, Hot Chocolate GraphQL, .NET/C# und MongoDB",
        "Technische Leitung der Datenmigration von SQL Server zu SAP C4C für Millionen von Kundendatensätzen",
      ],
    },
    {
      role: "Founder, Architect & Developer",
      company: "Stamy Booking GmbH",
      location: "Zürich",
      period: "März 2020 - Mai 2022",
      allowPageBreak: true,
      highlights: [
        "Gründung und Architektur einer SaaS-Plattform für die Fitness- und Wellnessbranche von Konzept bis Markteinführung",
        "Aufbau einer Multi-Cloud-Infrastruktur über Azure, GCP, AWS und Hetzner",
        "Entwicklung mehrerer Web-Frontends mit Angular, React und Next.js",
        "Vermarktung der Plattform und Gewinnung erster Kunden",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zürich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Optimierung von Scrum-Prozessen",
        "Mentoring von Junior-Entwicklern",
        "Modernisierung von Legacy-Logistikanwendungen",
      ],
    },
    {
      role: ".NET Fullstack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "Mai 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Modernisierung eines komplexen Legacy-Systems für Steuerberichterstattung (.NET Core, SQL Server, Docker, RavenDB, Angular)",
        "Fullstack-Entwicklung in mehreren Scrum-Teams für eine Privatbank",
        "Masterarbeit zu Domain-Driven Design und modernen Software-Architekturen",
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Zürich",
      period: "Jan. 2017 - Mai 2017",
      highlights: [
        "Entwicklung einer Java-Anwendung für Forex-Handelsstrategien-Backtesting",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (ehemals Alstom Power)",
      location: "Baden",
      period: "Okt. 2012 - Dez. 2016",
      allowPageBreak: true,
      highlights: [
        "Aerodynamische Auslegung von Gasturbinen-Verdichtern",
        "Ablösung des Legacy-Designsystems von Rolls-Royce mit Python, PyQt und PostgreSQL",
        "Begleitung der Unternehmensakquise als technischer Experte für Konstruktionssoftware",
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
        "Masterarbeit: Domain-Driven Design, Microservices-Architektur, CQRS, Event Sourcing (Note 1.0)",
        "Fernstudium parallel zu Vollzeit-Software-Engineering-Projekten",
        "Spezialisierung auf verteilte Systeme und Software-Architektur",
      ],
    },
    {
      role: "Diplom Maschinenbau & Verfahrenstechnik (Note 1.7)",
      company: "TU Kaiserslautern",
      location: "Kaiserslautern",
      period: "Abschluss 2012",
      highlights: [
        "Vertiefungen: Energietechnik, Grundlagen des Maschinenbaus, Strömungsmechanik",
        "Diplomarbeit bei Rolls-Royce, Dahlewitz: Numerische Untersuchungen & CFD-Simulationen (Note 1.0)",
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
      period: "2018 - 2022",
      highlights: [
        "Certified Professional for Software Architecture, Foundation Level (iSAQB), Okt. 2022",
        "Certified Professional for Requirements Engineering, Foundation Level (IREB), Apr. 2019",
        "Domain-Driven Design Workshop mit Vaughn Vernon, Sep. 2018",
      ],
    },
  ],
  labels: {
    experience: "Berufserfahrung",
    education: "Ausbildung & Zertifizierungen",
    personal: "Persönliche Daten",
    contact: "Kontakt",
    skills: "Fähigkeiten",
    languages: "Sprachen",
  },
};
