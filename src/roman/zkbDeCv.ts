import type { CvProfile } from "../types/cv";

export const zkbDeCv: CvProfile = {
  language: "de",
  theme: {
    primary: "#0066B3",
    primaryDark: "#003D7A",
  },
  name: "Roman Weis",
  title: "Software Architect & Engineer",
  availability: "Aktuell Software Architect bei Digitec Galaxus",
  summary:
    "Erfahrener Software Architect mit Fokus auf Webplattformen, Microservices und Domain-Driven Design. Breite Erfahrung in der Konzeption und Weiterentwicklung skalierbarer, resilienter Systeme im Finanz-, Energie- und E-Commerce-Umfeld.",
  contact: [
    { label: "roman.weis@proton.me", url: "mailto:roman.weis@proton.me" },
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
      name: "Domänenarchitektur",
      items: [
        "Domain-Driven Design (DDD)",
        "Bounded Context Design",
        "Event Storming & Context Mapping",
      ],
    },
    {
      name: "Plattformarchitektur",
      items: [
        "Microservices & Verteilte Systeme",
        "Event-Driven Architecture",
        "Skalierbarkeit, Performance & Monitoring",
        "Resilienz & API-Gateway-Patterns",
        "Modular Monolith",
      ],
    },
    {
      name: "Cloud & Infrastruktur",
      items: [
        "Azure Cloud Services",
        "Google Cloud Platform (GCP)",
        "Kubernetes & Docker",
        "Infrastructure as Code",
      ],
    },
    {
      name: "Programmierung & Technologien",
      items: [
        "C#/.NET Core, Java, Python",
        "TypeScript, React, Angular, Next.js",
        "GraphQL, REST APIs",
        "PostgreSQL, SQL Server, MongoDB, RavenDB",
      ],
    },
    {
      name: "Architektur-Governance",
      items: [
        "Architecture Decision Records",
        "Technologieevaluation & PoCs",
        "Cross-Team Alignment",
      ],
    },
    {
      name: "Führung & Mentoring",
      items: [
        "Technische Führung",
        "Architektur-Workshops",
        "Mentoring von Entwicklern",
        "Stakeholder-Kommunikation",
      ],
    },
    {
      name: "Marktplatz & E-Commerce",
      items: [
        "Integration von Zahlungssystemen",
        "Online-Buchungssysteme",
        "SEO-Techniken",
      ],
    },
    {
      name: "DevOps & Qualität",
      items: [
        "CI/CD Pipelines",
        "Observability & Monitoring",
        "Teststrategien",
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
        "Architektonische Weiterentwicklung der grössten E-Commerce-Plattform der Schweiz mit Millionen von Kunden",
        "Modernisierung von Legacy-Systemen zu resilienten, skalierbaren Services für den wachsenden Online-Handel",
        "Anwendung von DDD-Prinzipien zur Verbesserung der Resilienz und Skalierbarkeit von Lagerlogistiksystemen",
        "Technische Leitung von teamübergreifenden Projekten in komplexen Geschäftsbereichen",
        "Einführung KI-gestützter Entwicklungsworkflows und -tools zur Steigerung der Engineering-Produktivität",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (extern)",
      company: "Axpo Group",
      location: "Baden",
      period: "Mai 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Architektur einer skalierbaren Datenplattform mit REST-APIs für den internationalen Energiehandel",
        "Aufbau automatisierter Infrastruktur und CI/CD-Pipelines mit Azure, Terraform, TeamCity und Octopus Deploy",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (extern)",
      company: "Swiss Life Group",
      location: "Zürich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Feature-Entwicklung für das Versicherungsportal mit React Relay, GraphQL, .NET/C#, MongoDB und Kubernetes",
        "Technische Leitung der Datenmigration von SQL Server zu SAP C4C für Millionen von Kundendatensätzen",
      ],
    },
    {
      role: "Gründer, Architekt & Entwickler",
      company: "Stamy Booking GmbH",
      location: "Zürich",
      period: "März 2020 - Mai 2022",
      allowPageBreak: true,
      highlights: [
        "Architektur und Betrieb einer öffentlich zugänglichen SaaS-Plattform mit Endkunden-Self-Service und Zahlungsintegration",
        "Aufbau einer Multi-Cloud-Infrastruktur über Azure, GCP, AWS und Hetzner",
        "Entwicklung mehrerer Web-Frontends mit Angular, React und Next.js",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zürich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Einführung von Scrum-Methoden und Continuous-Delivery-Praktiken mit Azure DevOps",
        "Mentoring von Junior-Entwicklern in Software-Architektur und Clean-Code-Prinzipien",
      ],
    },
    {
      role: ".NET Fullstack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "Mai 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Modernisierung eines komplexen Legacy-Systems für Steuerberichterstattung mit .NET Core, SQL Server, Docker, RavenDB und Angular",
        "Fullstack-Entwicklung in mehreren Scrum-Teams für eine Privatbank-Plattform für vermögende Kunden",
        "Anwendung von Domain-Driven Design in der Masterarbeit mit Fokus auf Modernisierung von Software-Architekturen",
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Zürich",
      period: "Jan. 2017 - Mai 2017",
      highlights: [
        "Entwicklung einer Anwendung für Backtesting von Forex-Handelsstrategien mit Echtzeit-Marktdatenanalyse in Java",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (ehemals Alstom Power)",
      location: "Baden",
      period: "Okt. 2012 - Dez. 2016",
      allowPageBreak: true,
      highlights: [
        "Aerodynamische Auslegung von Gasturbinen-Verdichtern für Kraftwerke",
        "Modernisierung des Legacy-Designsystems von Rolls-Royce mit Python, PyQt und PostgreSQL",
        "Technische Integration von Konstruktionssoftware während der Unternehmensakquisition mit Koordination funktionsübergreifender Teams",
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
        "Spezialisierung auf verteilte Systeme, Software-Architekturmuster und Enterprise-Integration",
      ],
    },
    {
      role: "Diplom Maschinenbau & Verfahrenstechnik (Note 1.7)",
      company: "TU Kaiserslautern",
      location: "Kaiserslautern",
      period: "Abschluss 2012",
      highlights: [
        "Vertiefungen: Energietechnik, Grundlagen des Maschinenbaus, Strömungsmechanik",
        "Diplomarbeit bei Rolls-Royce, Dahlewitz: Numerische Untersuchungen & CFD-Simulationen von Gehäusebehandlungen (Note 1.0)",
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
