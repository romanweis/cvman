import type { CvProfile } from "../types/cv";

export const bcgEnCv: CvProfile = {
  language: "en",
  name: "Roman Weis",
  title: "Software Architect & IT Consultant",
  availability: "Currently Software Architect at Digitec Galaxus",
  summary:
    "Software Architect & Consultant focused on digital transformation: modernizing legacy estates, shaping target architectures, and leading small agile teams to deliver secure, scalable systems in banking and insurance.",
  contact: [
    { label: "roman.weis@proton.me", url: "mailto:roman.weis@proton.me" },
    { label: "+41 76 42 44 186", url: "tel:+41764244186" },
  ],
  personal: [
    { label: "Date of Birth", value: "November 19, 1985" },
    { label: "Nationality", value: "Swiss" },
    { label: "Address", value: "Spyristeig 35, 8044 Zurich" },
  ],
  location: "Zurich, Switzerland",
  languages: [
    { language: "German", level: "B2/C1" },
    { language: "English", level: "C1" },
    { language: "Russian", level: "Fluent" },
  ],
  sidebarSections: [
    { key: "personal" },
    { key: "contact" },
    { key: "skills", allowPageBreak: true },
    { key: "languages", allowPageBreak: true },
  ],
  skills: [
    {
      name: "Consulting & Strategy",
      items: [
        "Architecture assessments & feasibility studies",
        "Roadmapping & modernization strategy",
        "Stakeholder communication (tech & business)",
        "Workshop facilitation (event storming, vision/roadmap)",
      ],
    },
    {
      name: "Architecture & Modernization",
      items: [
        "Domain-Driven Design (strategic/tactical)",
        "Clean/Hexagonal, modular monolith, microservices",
        "Legacy decomposition & interface strangler patterns",
        "Event-driven systems & messaging",
      ],
    },
    {
      name: "Cloud, DevOps & Platforms",
      items: [
        ".NET ecosystem, C#",
        "Azure (App Services, Service Bus, Containers)",
        "Kubernetes & Docker, containerization",
        "CI/CD (GitHub Actions, TeamCity, Octopus)",
      ],
    },
    {
      name: "Cyber Resilience & Quality",
      items: [
        "Secure-by-design & threat-aware architectures",
        "Observability (OpenTelemetry) & SLOs",
        "Testing: unit/integration, Testcontainers, Playwright",
        "Performance & resilience reviews",
      ],
    },
    {
      name: "Data & Integration",
      items: [
        "SQL Server, PostgreSQL, MongoDB, RavenDB",
        "API-first: REST, GraphQL; contract-driven delivery",
        "Messaging (Azure Service Bus, Kafka)",
        "Data migration & domain consolidation",
      ],
    },
    {
      name: "Leadership",
      items: [
        "Technical leadership of small agile teams",
        "Architecture guardrails (ADRs, guidelines)",
        "Mentoring & upskilling engineers",
        "Cross-team alignment in complex domains",
      ],
    },
  ],
  experiences: [
    {
      role: "Software Architect .NET/Blazor",
      company: "Digitec Galaxus AG",
      location: "Zurich",
      period: "Aug. 2024 - Present",
      highlights: [
        "Leading architecture evolution for high-scale e-commerce logistics domain (millions of customers)",
        "Defining modular boundaries, introducing event-driven patterns, and improving reliability & performance",
        "Establishing architecture guardrails (ADRs, review process, coding guidelines) and mentoring developers",
        "Partnering with stakeholders to align architecture with business outcomes; facilitating architecture workshops",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (Contract)",
      company: "Axpo Group",
      location: "Baden",
      period: "May 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Designed and delivered .NET services for energy data platform supporting international trading",
        "Implemented CI/CD and infrastructure automation (Azure, Terraform, TeamCity, Octopus)",
        "Improved system observability and resilience with metrics, tracing, and alerting",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (Contract)",
      company: "Swiss Life Group",
      location: "Zurich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Delivered features for insurance platform (React Relay, GraphQL, .NET/C#, MongoDB, Kubernetes)",
        "Led large-scale data migration (SQL Server → SAP C4C) across millions of customer records",
        "Improved API consistency and domain boundaries across teams",
      ],
    },
    {
      role: "Founder, Architect & Developer .NET/Angular/React",
      company: "Stamy Booking GmbH",
      location: "Zurich",
      period: "Mar. 2020 - May 2022",
      allowPageBreak: true,
      highlights: [
        "Architected and launched SaaS platform from concept to production",
        "Built multi-cloud infrastructure (Azure, GCP, AWS, Hetzner); established CI/CD pipelines",
        "Delivered multiple web frontends (Angular, React, Next.js)",
      ],
    },
    {
      role: "Senior Software Engineer .NET/Angular",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zurich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Introduced Scrum and Continuous Delivery using Azure DevOps",
        "Mentored junior developers on architecture and clean code",
      ],
    },
    {
      role: "Fullstack Software Engineer .NET/Angular (Consulting)",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "May 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Modernized legacy tax reporting system (Banking) using .NET Core, SQL Server, Docker, RavenDB, Angular",
        "Contributed across multiple Scrum teams for private banking platform (HNW clients)",
        "Applied DDD in Master's thesis focused on architecture modernization",
      ],
    },
    {
      role: "Software Developer Java",
      company: "Freelance",
      location: "Zurich",
      period: "Jan. 2017 - May 2017",
      highlights: [
        "Developed Java application for forex strategy backtesting with real-time market data",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (formerly Alstom Power)",
      location: "Baden",
      period: "Oct. 2012 - Dec. 2016",
      allowPageBreak: true,
      highlights: [
        "Led aerodynamic design of gas turbine compressors",
        "Modernized legacy Rolls-Royce design system (Python, PyQt, PostgreSQL)",
        "Coordinated cross-functional integration during corporate acquisition",
      ],
    },
  ],
  education: [
    {
      role: "Master of Computer Science (Grade 1.4)",
      company: "University of Applied Sciences Trier - Distance Learning",
      location: "Trier / Remote",
      period: "Graduated 2019",
      highlights: [
        "Master's Thesis: DDD, Microservices, CQRS, Event Sourcing (Grade 1.0)",
        "Specialized in distributed systems and enterprise integration",
      ],
    },
    {
      role: "Diploma in Mechanical Engineering (Grade 1.7)",
      company: "Technical University of Kaiserslautern",
      location: "Kaiserslautern",
      period: "Graduated 2012",
      highlights: [
        "Specializations: Energy Technology, Fluid Mechanics",
        "Diploma Thesis at Rolls-Royce: CFD of casing treatments (Grade 1.0)",
      ],
    },
    {
      role: "Professional Certifications",
      company: "iSAQB · IREB · Vaughn Vernon",
      location: "",
      period: "2018 - 2022",
      highlights: [
        "iSAQB CPSA-F (Oct. 2022)",
        "IREB CPRE-FL (Apr. 2019)",
        "DDD Workshop (Vaughn Vernon, Sep. 2018)",
      ],
    },
  ],
  labels: {
    experience: "Professional Experience",
    education: "Education & Certifications",
    personal: "Personal Information",
    contact: "Contact",
    skills: "Skills",
    languages: "Languages",
  },
};
