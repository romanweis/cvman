import type { CvProfile } from "../types/cv";

export const jbSeniorFullStackEnCv: CvProfile = {
  language: "en",
  theme: {
    primary: "#003cb4",
    primaryDark: "#080f5e",
  },
  name: "Roman Weis",
  title: "Senior Full Stack Engineer .NET / Angular / React",
  availability: "Currently Software Architect at Digitec Galaxus",
  summary:
    "Senior Full Stack Engineer with proven delivery experience in C#/.NET Core, Angular, React, and SQL Server, including prior work in regulated banking and insurance environments. Comfortable taking end-to-end ownership of design, implementation, deployment, and monitoring in DevOps-centric, agile teams.",
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
    { language: "German", level: "Native" },
    { language: "English", level: "Fluent (C1/C2)" },
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
        "Technical platform on Agentic AI patterns built with the Microsoft Agent Framework.",
    },
    {
      name: "Chess",
      description: "Active player in online and live tournaments.",
    },
  ],
  skills: [
    {
      name: "Backend Development",
      items: [
        "C#/.NET Core",
        "Service-Oriented Architecture & Microservices",
        "REST Web Services & GraphQL",
        "Event-Driven Integration (Kafka, Avro)",
      ],
    },
    {
      name: "Frontend Development",
      items: [
        "Angular & TypeScript",
        "React & JavaScript",
        "Micro-frontends via Module Federation",
        "Responsive, production-grade UIs",
      ],
    },
    {
      name: "Banking & Wealth Management",
      items: [
        "Private banking platforms for HNW clients",
        "Tax reporting & regulated finance systems",
        "Insurance portals (Swiss Life)",
        "Forex backtesting & market data analysis",
      ],
    },
    {
      name: "Databases & Data",
      items: [
        "Microsoft SQL Server & T-SQL",
        "PostgreSQL, MongoDB, RavenDB",
        "Data migrations, reporting & ETL",
        "Processing pipelines for trading & finance",
      ],
    },
    {
      name: "DevOps & Quality",
      items: [
        "Azure DevOps, GitHub, TeamCity, Octopus Deploy",
        "CI/CD pipelines & Infrastructure as Code",
        "Kubernetes & Docker",
        "TDD, BDD & automated testing",
      ],
    },
    {
      name: "Architecture & Methodology",
      items: [
        "Domain-Driven Design (DDD)",
        "Agile/Scrum & Continuous Delivery",
        "Scalability, resilience, performance",
        "Solution design with architects & POs",
      ],
    },
    {
      name: "Leadership & Collaboration",
      items: [
        "Cross-functional, DevOps-centric teams",
        "Mentoring & engineering communities",
        "Stakeholder communication",
      ],
    },
  ],
  experiences: [
    {
      role: "Software Architect",
      company: "Digitec Galaxus AG",
      location: "Zurich",
      period: "Aug. 2024 - Present",
      highlights: [
        "End-to-end ownership of full stack development on Switzerland's largest e-commerce platform, using C#/.NET Core, Blazor and SQL Server",
        "Modernize business-critical legacy systems into resilient, scalable services applying Domain-Driven Design and microservices patterns",
        "Drive cross-team backend and frontend initiatives in highly complex business domains, collaborating with Solution Architects and Product Owners",
        "Active in engineering communities and AI Coding Guild, sharing knowledge and shaping company-wide engineering practices",
      ],
    },
    {
      role: "Senior Full Stack Engineer .NET/Blazor (Contract)",
      company: "Axpo Group",
      location: "Baden",
      period: "May 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Designed, implemented, deployed, and monitored microservices in C#/.NET, SQL Server, and Blazor for international energy trading in a regulated environment",
        "Delivered business-critical data platform for trade processing and reporting, applying TDD and BDD throughout",
        "Built automated CI/CD pipelines using Azure, Terraform, TeamCity, and Octopus Deploy",
        "Worked end-to-end in a cross-functional, DevOps-centric agile team",
      ],
    },
    {
      role: "Senior Full Stack Engineer .NET/React (Contract)",
      company: "Swiss Life Group",
      location: "Zurich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Full stack development in C#/.NET, GraphQL, React Relay, MongoDB, and Kubernetes for the production insurance portal of a regulated financial services provider",
        "Migrated millions of customer records from SQL Server to SAP C4C, ensuring data quality and operational continuity",
        "Implemented insurance product flows and self-service features with high stability and accuracy requirements",
        "Participated in planning, refinement, and merge request reviews in agile, regulated finance teams",
      ],
    },
    {
      role: "Founder, Architect & Full Stack Engineer",
      company: "Stamy Booking GmbH",
      location: "Zurich",
      period: "Mar. 2020 - May 2022",
      allowPageBreak: true,
      highlights: [
        "Architected and built a SaaS platform end-to-end using C#/.NET microservices, Angular, React, and Next.js frontends",
        "Implemented booking, billing, and self-service flows with payment integrations and REST APIs",
        "Operated multi-cloud infrastructure across Azure, GCP, AWS, and Hetzner with CI/CD and observability",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zurich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Senior full stack development of logistics applications in C#/.NET, Angular, and SQL Server",
        "Introduced Scrum and Continuous Delivery practices using Azure DevOps",
        "Mentored junior developers in architecture, testing, and clean code principles",
      ],
    },
    {
      role: ".NET Full Stack Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "May 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Full stack development in C#/.NET Core, SQL Server, T-SQL, and Angular for Julius Baer serving high-net-worth clients in a regulated finance environment",
        "Modernized a complex legacy tax reporting system using .NET Core, SQL Server, Docker, RavenDB, and Angular",
      ],
    },
    {
      role: "Software Developer (Forex Backtesting)",
      company: "Freelance",
      location: "Zurich",
      period: "Jan. 2017 - May 2017",
      highlights: [
        "Developed a Java application for backtesting forex trading strategies with real-time market data analysis and persistent storage",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (formerly Alstom Power)",
      location: "Baden",
      period: "Oct. 2012 - Dec. 2016",
      allowPageBreak: true,
      highlights: [
        "Modernized the legacy Rolls-Royce design system with Python, PyQt, and PostgreSQL for data analysis, numerical evaluation, and internal tooling",
        "Aerodynamic design of gas turbine compressors for power generation",
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
        "Master's Thesis: Domain-Driven Design, Microservices Architecture, CQRS, Event Sourcing (Grade 1.0)",
        "Specialized in distributed systems, software architecture patterns, and enterprise integration",
      ],
    },
    {
      role: "Diploma in Mechanical Engineering (Grade 1.7)",
      company: "Technical University of Kaiserslautern",
      location: "Kaiserslautern",
      period: "Graduated 2012",
      highlights: [
        "Specializations: Energy Technology, Mechanical Engineering Fundamentals, Fluid Mechanics",
      ],
    },
    {
      role: "High School Diploma (Grade 2.2)",
      company: "Christian von Mannlich Gymnasium",
      location: "Homburg (Saar)",
      period: "Graduated 2007",
      highlights: ["General university entrance qualification"],
    },
    {
      role: "Certifications & Training",
      company: "iSAQB · IREB · Vaughn Vernon",
      location: "",
      period: "2018 - 2022",
      highlights: [
        "Certified Professional for Software Architecture, Foundation Level (iSAQB), Oct. 2022",
        "Certified Professional for Requirements Engineering, Foundation Level (IREB), Apr. 2019",
        "Domain-Driven Design Workshop with Vaughn Vernon, Sep. 2018",
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
    projects: "Side Projects & Hobbies",
  },
};
