export type ContactLink = {
  label: string;
  url: string;
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
  location: string;
  languages: { language: string; level: string }[];
  skills: SkillGroup[];
  highlights: string[];
  projectHighlights: ProjectHighlight[];
  experiences: TimelineItem[];
  education: TimelineItem[];
  interests: string[];
};

export const recruitingDeCv: CvProfile = {
  name: "Roman Weis",
  title: "Senior Software Engineer & Tech Lead",
  availability:
    "Bereit für Vermittlung – bevorzugt hybride oder remote Projekte (DACH)",
  summary:
    "Technologie- und delivery-orientierter Engineering Lead mit Schwerpunkt auf Cloud-nativen Webplattformen, skalierbaren Architekturen und cross-funktionaler Zusammenarbeit. Bringt fundiertes Branchenwissen aus Industrie, Logistik und Automotive mit und kombiniert Hands-on-Umsetzung mit strategischem Blick auf nachhaltige Softwareprodukte.",
  contact: [
    { label: "roman.weis@example.com", url: "mailto:roman.weis@example.com" },
    { label: "+49 000 0000000", url: "tel:+490000000000" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/romanweis" },
    { label: "GitHub", url: "https://github.com/romanweis" },
  ],
  location: "Nürnberg, Deutschland",
  languages: [
    { language: "Deutsch", level: "Muttersprache" },
    { language: "Englisch", level: "Verhandlungssicher" },
    { language: "Französisch", level: "Grundkenntnisse (aktualisieren)" },
  ],
  skills: [
    {
      name: "Tech Leadership",
      items: [
        "Teamführung & Mentoring",
        "Agile Methoden (Scrum, Kanban)",
        "Stakeholder-Management",
        "Delivery & Roadmap Ownership",
      ],
    },
    {
      name: "Architektur & Plattformen",
      items: [
        "Cloud Native (Azure, AWS)",
        "Microservices & Event-Driven",
        "API-Design (REST, GraphQL)",
        "Infrastructure as Code (Terraform, Bicep)",
      ],
    },
    {
      name: "Engineering Stack",
      items: [
        "TypeScript, Node.js, React, Next.js",
        "C#, .NET, Java, Spring Boot",
        "SQL & NoSQL (PostgreSQL, CosmosDB, DynamoDB)",
        "CI/CD (GitHub Actions, Azure DevOps)",
      ],
    },
  ],
  highlights: [
    "12+ Jahre Erfahrung in der Entwicklung skalierbarer Anwendungen und Cloud-Architekturen",
    "Beratung und technische Leitung in Projekten mit >150 Stakeholdern",
    "Fokus auf nachhaltige Engineering-Praktiken, Observability und Qualitätssicherung",
  ],
  projectHighlights: [
    {
      title: "Smart Manufacturing IoT-Plattform",
      role: "Lead Software Engineer & Solution Architect",
      context:
        "Aufbau einer IIoT-Plattform für einen globalen Industriekonzern zur Auswertung von Produktionslinien in Echtzeit.",
      outcome:
        "OEE-Steigerung um 18% dank Edge-Datenerfassung, Analytics-Dashboards und automatisierten Alarmierungsprozessen.",
      techStack: [
        "Azure IoT Hub",
        "Event Hubs",
        "Cosmos DB",
        "React",
        "TypeScript",
        "GraphQL",
        "Terraform",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget pretium sem. Morbi laoreet lectus sed nisl tincidunt, sed varius lorem rutrum.",
    },
    {
      title: "Supply-Chain Control Tower",
      role: "Technischer Projektleiter",
      context:
        "Implementierung einer Transparenzplattform für einen europäischen Logistikdienstleister mit über 150 Partnern.",
      outcome:
        "SLA-Konformität auf 99,2% erhöht, inklusive Integration von KI-basierten Forecast-Services.",
      techStack: [
        "AWS",
        "Serverless",
        "Node.js",
        "React",
        "TailwindCSS",
        "OpenSearch",
      ],
      description:
        "Curabitur suscipit, nisl nec interdum maximus, sem arcu aliquet mauris, a gravida ante quam non ipsum. Donec eget vehicula sapien.",
    },
    {
      title: "Digitale After-Sales Suite",
      role: "Lead Full-Stack Developer",
      context:
        "Modernisierung des Service-Portfolios eines Automotive-Zulieferers mit kundenindividuellen Self-Service-Portalen.",
      outcome:
        "Time-to-Market von Releases von 8 auf 2 Wochen reduziert, Einführung eines Design Systems für 20+ Märkte.",
      techStack: [
        "Next.js",
        ".NET",
        "Azure Functions",
        "Storybook",
        "Azure DevOps",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Bitte Projektdetails ergänzen>.",
    },
  ],
  experiences: [
    {
      role: "Senior Software Engineer / Tech Lead",
      company: "Beispiel GmbH",
      location: "Nürnberg",
      period: "2019 – heute",
      highlights: [
        "Führung eines 8-köpfigen Engineering-Teams, Einführung von Domain-Driven Design und Teststrategien",
        "Aufbau einer Microservice-Architektur auf Kubernetes inklusive Observability-Stack (Prometheus, Grafana)",
        "Etablierung einer Continuous-Delivery-Pipeline mit GitHub Actions und ArgoCD",
        "Enge Zusammenarbeit mit Product- und UX-Teams zur Ausrichtung auf Business-Outcome",
      ],
    },
    {
      role: "Lead Full-Stack Developer",
      company: "Digitale Lösungen AG",
      location: "München",
      period: "2014 – 2019",
      highlights: [
        "Umsetzung kundenspezifischer Portale in React/Angular & .NET inklusive Identity-Management",
        "Entwicklung eines unternehmensweiten Design Systems mit Storybook und Accessibility-Standards",
        "Technische Verantwortung für Architekturentscheidungen und externes Lieferantenmanagement",
      ],
    },
    {
      role: "Software Engineer",
      company: "Innovative Systems GmbH",
      location: "Erlangen",
      period: "2011 – 2014",
      highlights: [
        "Entwicklung von B2B-Integrationslösungen und REST-APIs (Java/Spring, SQL)",
        "Aufbau automatisierter Testsuites (JUnit, Selenium) und Deployment-Skripte",
        "Mitarbeit an Proof-of-Concepts für Cloud-Migration (Azure, AWS)",
      ],
    },
  ],
  education: [
    {
      role: "M.Sc. Informatik",
      company: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
      location: "Erlangen",
      period: "2011",
      highlights: [
        "Schwerpunkt: Verteilte Systeme & Software-Engineering",
        "Masterarbeit zu eventgetriebener Integration industrieller Datenströme",
      ],
    },
    {
      role: "B.Sc. Informatik",
      company: "Technische Hochschule Nürnberg Georg Simon Ohm",
      location: "Nürnberg",
      period: "2009",
      highlights: [
        "Fokus auf Webentwicklung und Datenbanken",
        "Praxissemester in agiler Produktentwicklung",
      ],
    },
    {
      role: "Zertifizierungen (Auswahl)",
      company: "AWS / Microsoft / Scrum.org",
      location: "",
      period: "Aktualisieren",
      highlights: [
        "AWS Certified Solutions Architect",
        "Microsoft Azure Architect",
        "Professional Scrum Master (PSM I)",
      ],
    },
  ],
  interests: [
    "Mentoring in lokalen Developer-Meetups",
    "Vorträge zu DevOps, Observability und Clean Architectures",
    "Trailrunning, Fotografie, UX-Design-Trends",
  ],
};
