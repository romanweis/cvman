import type { CvProfile } from "../types/cv";

export const csharpDevDeCv: CvProfile = {
  language: "de",
  name: "Roman Weis",
  title: "C#/.NET Software Engineer mit Industrie- und Maschinenbauhintergrund",
  availability: "Aktuell Software Architect bei Digitec Galaxus",
  summary:
    "C#/.NET Software Engineer mit Maschinenbau-Diplom und mehrjähriger Tätigkeit als Aerodynamik- und Tools-Entwickler bei Ansaldo Energia.",
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
      name: "Programmiersprachen",
      items: [
        "C# / .NET (Core, Framework)",
        "Python (PyQt, NumPy, SciPy)",
        "TypeScript / JavaScript",
        "Java",
      ],
    },
    {
      name: "Software Engineering",
      items: [
        "Objektorientierte Entwicklung",
        "Clean Code & SOLID-Prinzipien",
        "Domain-Driven Design",
        "Teststrategien & TDD",
      ],
    },
    {
      name: "Industrielle Applikationen",
      items: [
        "Mess- und Berechnungstools",
        "Material- und Komponentendatenbanken",
        "Modernisierung von Legacy-Systemen",
        "Wissenschaftliche Datenverarbeitung",
      ],
    },
    {
      name: "Datenbanken & Backend",
      items: [
        "PostgreSQL, SQL Server",
        "MongoDB, RavenDB",
        "REST APIs, GraphQL",
        "Entity Framework",
      ],
    },
    {
      name: "Tools & Infrastruktur",
      items: [
        "Git, Azure DevOps",
        "CI/CD Pipelines",
        "Docker & Kubernetes",
        "Windows- und Netzwerkumgebungen",
      ],
    },
    {
      name: "Maschinenbau & Physik",
      items: [
        "Strömungsmechanik & Aerodynamik",
        "Thermodynamik & Energietechnik",
        "CFD-Simulationen",
        "Prüfstands- und Messdaten",
      ],
    },
    {
      name: "Zusammenarbeit",
      items: [
        "Schnittstelle zu Fachbereichen",
        "Anforderungsaufnahme",
        "Mentoring & Wissenstransfer",
        "Koordination externer Dienstleister",
      ],
    },
  ],
  experiences: [
    {
      role: "Aerodynamics & Tools Engineer GT Compressor",
      company: "Ansaldo Energia (ehemals Alstom Power)",
      location: "Baden",
      period: "Okt. 2012 - Dez. 2016",
      highlights: [
        "Entwicklung und Wartung interner Berechnungs- und Designtools für die aerodynamische Auslegung von Gasturbinen-Verdichtern",
        "Modernisierung des von Rolls-Royce übernommenen Legacy-Designsystems mit Python, PyQt und PostgreSQL inklusive Materialdatenbank",
        "Technische Integration von Konstruktions- und Berechnungssoftware während der Unternehmensakquisition (Alstom zu Ansaldo Energia) mit Koordination funktionsübergreifender Teams",
        "Enge Zusammenarbeit mit Prüfstand und Messtechnik zur Auswertung aerodynamischer und thermodynamischer Messgrössen",
        "Ansprechperson der Aerodynamik-Abteilung für Software- und Tooling-Themen",
      ],
    },
    {
      role: "Software Architect",
      company: "Digitec Galaxus AG",
      location: "Zürich",
      period: "Aug. 2024 - heute",
      allowPageBreak: true,
      highlights: [
        "Tätigkeit im Logistikbereich: Entwicklung und Wartung von C#/.NET-Software für Verpackungsprozesse in den Lager- und Versandzentren",
        "Modernisierung und Refactoring von Legacy-Systemen mit Fokus auf Clean Code, Resilienz und Testbarkeit",
        "Anwendung von DDD-Prinzipien zur Verbesserung der Wartbarkeit komplexer Geschäftsdomänen",
        "Einführung KI-gestützter Entwicklungsworkflows zur Steigerung der Engineering-Produktivität",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (extern)",
      company: "Axpo Group",
      location: "Baden",
      period: "Mai 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Konzeption und Entwicklung einer C#-basierten Energiedatenplattform für den internationalen Energiehandel",
        "Verarbeitung und Visualisierung grosser Mengen an Zeitreihen- und Messdaten",
        "Aufbau automatisierter CI/CD-Pipelines mit Azure DevOps, Terraform, TeamCity und Octopus Deploy",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (extern)",
      company: "Swiss Life Group",
      location: "Zürich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Eigenständige Umsetzung neuer Features für das Versicherungsportal mit C#/.NET, GraphQL und MongoDB",
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
        "Eigenständige Entwicklung einer C#/.NET SaaS-Plattform von der Konzeption bis zur Markteinführung",
        "Verantwortung für Backend, Frontend, Infrastruktur und Betrieb über Azure, GCP und Hetzner",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zürich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Entwicklung von C#/.NET-Anwendungen für ein Logistikunternehmen mit industriellem Umfeld",
        "Einführung von Continuous-Delivery-Praktiken und Mentoring von Junior-Entwicklern in Clean Code",
      ],
    },
    {
      role: ".NET Fullstack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "Mai 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Modernisierung eines komplexen Legacy-Systems mit C#/.NET Core, SQL Server und Docker",
        "Eigenständige Umsetzung von Software-Modulen in mehreren Scrum-Teams für Kunden aus Banking und Versicherung",
        "Anwendung von objektorientierten Designprinzipien und Clean-Code-Standards",
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
  ],
  education: [
    {
      role: "Diplom Maschinenbau & Verfahrenstechnik (Note 1.7)",
      company: "TU Kaiserslautern",
      location: "Kaiserslautern",
      period: "Abschluss 2012",
      highlights: [
        "Vertiefungen: Energietechnik, Strömungsmechanik, Thermodynamik",
        "Diplomarbeit bei Rolls-Royce, Dahlewitz: Numerische Untersuchungen & CFD-Simulationen von Gehäusebehandlungen (Note 1.0)",
      ],
    },
    {
      role: "Master of Computer Science (Note 1.4)",
      company: "FH Trier - Fernstudium",
      location: "Trier / Remote",
      period: "Abschluss 2019",
      highlights: [
        "Masterarbeit: Domain-Driven Design, Microservices-Architektur, CQRS, Event Sourcing (Note 1.0)",
        "Fernstudium parallel zu Vollzeit-Software-Engineering-Projekten",
        "Spezialisierung auf Software-Architekturmuster und Enterprise-Integration",
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
