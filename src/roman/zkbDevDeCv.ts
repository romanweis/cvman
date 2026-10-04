import type { CvProfile } from "../types/cv";

export const zkbDevDeCv: CvProfile = {
  language: "de",
  theme: {
    primary: "#003cb4",
    primaryDark: "#080f5e",
  },
  name: "Roman Weis",
  title: "Senior Software Engineer & Architect",
  availability: "Aktuell Software Architect bei Digitec Galaxus",
  summary:
    "Erfahrener Senior Software Engineer mit fundierter Backend-Entwicklung in regulierten Finanz- und Versicherungssystemen. Spezialisiert auf C#/.NET, SQL Server, Microservices und Python für die Weiterentwicklung produktiver, geschäftskritischer Plattformen mit Fokus auf Datenverarbeitung, Reporting und stabile End-to-End-Prozesse.",
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
  ],
  sidebarSections: [
    { key: "personal" },
    { key: "contact" },
    { key: "skills", allowPageBreak: true },
    { key: "projects", allowPageBreak: true },
    { key: "languages", allowPageBreak: true },
  ],
  projects: [
    {
      name: "dotnetagents.net",
      url: "https://dotnetagents.net/",
      description:
        "Technische Plattform rund um Agentic AI Patterns mit dem Microsoft Agent Framework.",
    },
    {
      name: "Schach",
      description: "Aktiver Spieler in Online- und Live-Turnieren.",
    },
  ],
  skills: [
    {
      name: "Backend-Entwicklung",
      items: [
        "C#/.NET Core, .NET Framework",
        "Python (PyQt, Datenanalyse, Tooling)",
        "Java (Backtesting & Marktdaten)",
        "Microservices & verteilte Systeme",
      ],
    },
    {
      name: "Datenbanken & Datenverarbeitung",
      items: [
        "SQL Server & T-SQL",
        "PostgreSQL, MongoDB, RavenDB",
        "Datenmigrationen, Reporting & ETL",
        "Datenverarbeitungs-Pipelines",
      ],
    },
    {
      name: "Banking & Financial Services",
      items: [
        "Erfahrung in regulierten Finanzumgebungen",
        "Privatbank-Plattformen & Steuerberichterstattung",
        "Versicherungsportale (Swiss Life)",
        "Forex-Backtesting & Marktdatenanalyse",
      ],
    },
    {
      name: "DevOps & Tooling",
      items: [
        "Azure DevOps, GitHub",
        "CI/CD Pipelines",
        "Docker & Kubernetes",
        "Observability & Monitoring",
      ],
    },
    {
      name: "Architektur & Methodik",
      items: [
        "Domain-Driven Design (DDD)",
        "Microservices & Modular Monolith",
        "Skalierbarkeit, Resilienz, Performance",
        "Agile/Scrum, Continuous Delivery",
      ],
    },
    {
      name: "Schnittstellen & APIs",
      items: ["REST APIs", "GraphQL", "Event-Driven Integration"],
    },
    {
      name: "Führung & Mentoring",
      items: [
        "Senior- & Mentoring-Erfahrung",
        "Cross-Team Alignment",
        "Stakeholder-Kommunikation",
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
        "Backend-Entwicklung und Weiterentwicklung produktiver Microservices in C#/.NET Core und SQL Server der grössten E-Commerce-Plattform der Schweiz",
        "Modernisierung geschäftskritischer Legacy-Systeme zu resilienten, skalierbaren Services unter Anwendung von Domain-Driven Design",
        "Umsetzung anspruchsvoller Backend-Logik und Datenverarbeitung für Lagerlogistik-Prozesse",
        "Technische Leitung teamübergreifender Backend-Initiativen in komplexen Geschäftsbereichen",
      ],
    },
    {
      role: "Senior .NET Backend Engineer (extern)",
      company: "Axpo Group",
      location: "Baden",
      period: "Mai 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Backend-Entwicklung produktiver Microservices in C#/.NET, SQL Server und T-SQL für den internationalen Energiehandel",
        "Weiterentwicklung einer geschäftskritischen Datenplattform für Tradeabwicklung und Reporting in regulierter Umgebung",
        "Umsetzung anspruchsvoller Backend-Logik und Datenverarbeitungs-Pipelines für Marktdaten und Handelsprozesse",
        "Aufbau automatisierter CI/CD-Pipelines mit mit Azure, Terraform, TeamCity und Octopus Deploy",
      ],
    },
    {
      role: "Senior .NET Engineer (extern)",
      company: "Swiss Life Group",
      location: "Zürich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Backend-Entwicklung in C#/.NET, GraphQL und MongoDB für das produktive Versicherungsportal eines regulierten Finanzdienstleisters",
        "Weiterentwicklung geschäftskritischer Datenprozesse und Migration von SQL Server zu SAP C4C für Millionen Kundendatensätze",
        "Umsetzung anspruchsvoller Backend-Logik für Versicherungsprodukte und Self-Service-Funktionen im Financial-Services-Umfeld",
        "Arbeit in agilen Teams einer regulierten Finanzdienstleistungsumgebung mit hohen Anforderungen an Stabilität und Genauigkeit",
      ],
    },
    {
      role: "Gründer, Architekt & Backend Engineer",
      company: "Stamy Booking GmbH",
      location: "Zürich",
      period: "März 2020 - Mai 2022",
      allowPageBreak: true,
      highlights: [
        "Backend-Entwicklung produktiver Microservices in C#/.NET für eine SaaS-Plattform",
        "Implementierung anspruchsvoller Backend-Logik für Buchungs-, Abrechnungs- und Self-Service-Prozesse mit Zahlungsintegration",
        "Aufbau von REST-APIs, Reporting-Funktionen und Datenverarbeitung",
        "Verantwortung für Stabilität, Datenkonsistenz und Performance unter produktiver Last",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zürich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Senior Backend-Entwicklung von Logistikanwendungen in C#/.NET und SQL Server",
        "Einführung von Continuous-Delivery-Praktiken mit Azure DevOps",
        "Mentoring von Junior-Entwicklern in Backend-Architektur und Clean-Code-Prinzipien",
      ],
    },
    {
      role: ".NET Software Engineer (Banking)",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "Mai 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Senior Backend- und Fullstack-Entwicklung in C#/.NET Core, SQL Server und T-SQL für eine Privatbank-Plattform vermögender Kunden in regulierter Finanzumgebung",
        "Modernisierung eines komplexen Legacy-Systems für Steuerberichterstattung mit .NET Core, SQL Server, T-SQL, Docker, RavenDB und Angular",
        "Umsetzung anspruchsvoller Backend-Logik und Datenverarbeitungs-Pipelines für Banking- und Reporting-Anwendungen",
        "Anwendung von Domain-Driven Design auf Banking-Prozesse als Schwerpunkt der Masterarbeit",
      ],
    },
    {
      role: "Software Developer (Forex Backtesting)",
      company: "Freelance",
      location: "Zürich",
      period: "Jan. 2017 - Mai 2017",
      highlights: [
        "Backend-Entwicklung in Java einer Anwendung für Backtesting von Forex-Handelsstrategien mit Echtzeit-Marktdatenanalyse und persistenter Speicherung",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (ehemals Alstom Power)",
      location: "Baden",
      period: "Okt. 2012 - Dez. 2016",
      allowPageBreak: true,
      highlights: [
        "Modernisierung des Legacy-Designsystems von Rolls-Royce mit Python, PyQt und PostgreSQL für Datenanalyse, numerische Auswertung und interne Tools",
        "Aerodynamische Auslegung von Gasturbinen-Verdichtern für Kraftwerke",
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
    projects: "Nebenprojekte & Hobbys",
  },
};
