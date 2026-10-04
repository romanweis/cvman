import type { CvProfile } from "../types/cv";

export const oliverBernardEnCv: CvProfile = {
  language: "en",
  name: "Roman Weis",
  title: "Principal Engineer & Software Architect",
  availability: "Currently Software Architect at Digitec Galaxus",
  summary:
    "Hands-on Software Architect with deep system design experience across backend, frontend, and cloud-native platforms. Combines long-term technical thinking with practical delivery, and actively builds with generative AI, agent-based systems, and MCP both at work and on side projects.",
  contact: [
    { label: "roman.weis@protonmail.com", url: "mailto:roman.weis@protonmail.com" },
    { label: "+41 76 42 44 186", url: "tel:+41764244186" },
  ],
  personal: [
    { label: "Date of Birth", value: "November 19, 1985" },
    { label: "Nationality", value: "Swiss" },
    { label: "Address", value: "Spyristeig 35, 8044 Zurich" },
    { label: "Hobbies", value: "Chess (Beginner)" },
  ],
  location: "Zurich, Switzerland",
  languages: [
    { language: "English", level: "Fluent" },
    { language: "German", level: "Native" },
  ],
  projects: [
    {
      name: "dotnetagents.net",
      url: "https://dotnetagents.net/",
      description:
        "Platform for building .NET-based AI agents and MCP servers, exploring agent orchestration and tool-calling.",
    },
    {
      name: "bognerchess.com",
      url: "https://www.bognerchess.com/",
      description:
        "Astro/React chess academy site, built and maintained with generative AI for coding and automated reviews.",
    },
  ],
  sidebarSections: [
    { key: "personal" },
    { key: "contact" },
    { key: "languages" },
    { key: "projects", allowPageBreak: true },
    { key: "skills", allowPageBreak: true },
  ],
  skills: [
    {
      name: "AI-Assisted Development",
      items: [
        "Agent-based Systems & Multi-Agent Workflows",
        "Model Context Protocol (MCP)",
        "Microsoft Agent Framework",
        "Claude Code, GitHub Copilot Agent",
        "Generative AI for Code, Tests & Reviews",
      ],
    },
    {
      name: "System Architecture",
      items: [
        "Large-Scale Distributed Systems",
        "Domain-Driven Design (DDD)",
        "Event-Driven Architecture",
        "Microservices & Modular Monolith",
      ],
    },
    {
      name: "Cloud & Infrastructure",
      items: [
        "Azure, GCP, AWS",
        "Kubernetes, Docker, Terraform",
        "CI/CD: GitHub Actions, Azure DevOps",
        "Observability & SRE",
      ],
    },
    {
      name: "Programming & Technologies",
      items: [
        "C#/.NET Core, Java, Python",
        "TypeScript, React, Angular, Next.js",
        "GraphQL, REST, Kafka",
        "PostgreSQL, SQL Server, MongoDB, RavenDB",
      ],
    },
    {
      name: "Leadership & Delivery",
      items: [
        "Technical Leadership & Mentoring",
        "Cross-Team Initiatives in Complex Domains",
        "Architecture Decision Records & Governance",
        "Rapid Experimentation & Production Rollouts",
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
        "Leading the modernization of warehouse logistics at Switzerland's largest online retailer, a system serving millions of customers and orders",
        "Replacing years of legacy with a resilient, scalable architecture grounded in DDD and modern distributed system patterns",
        "Driving cross-team initiatives across some of the most complex business domains in the company",
        "Introduced AI-assisted development into the engineering culture, with Claude Code, GitHub Copilot Agent, and MCP servers now part of the daily toolkit across teams",
      ],
    },
    {
      role: "Full Stack Engineer .NET/Blazor (Contract)",
      company: "Axpo Group",
      location: "Baden",
      period: "May 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Architected an energy data platform supporting international trading operations",
        "Built distributed microservices with .NET/C#, PostgreSQL, and Blazor",
        "Built automated infrastructure and CI/CD pipelines using Azure, Terraform, TeamCity, and Octopus Deploy",
      ],
    },
    {
      role: "Full Stack Engineer .NET/React (Contract)",
      company: "Swiss Life Group",
      location: "Zurich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Developed features for the insurance portal using React Relay, GraphQL, .NET/C#, MongoDB, and Kubernetes",
        "Led a data migration from SQL Server to SAP C4C affecting millions of customer records",
      ],
    },
    {
      role: "Founder, Architect & Developer",
      company: "Stamy Booking GmbH",
      location: "Zurich",
      period: "Mar. 2020 - May 2022",
      allowPageBreak: true,
      highlights: [
        "Founded and architected a SaaS booking platform for the fitness and wellness industry from concept to market launch",
        "Built multi-cloud infrastructure spanning Azure, GCP, AWS, and Hetzner",
        "Developed multiple web frontends using Angular, React, and Next.js",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zurich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Introduced Scrum methodologies and Continuous Delivery practices using Azure DevOps",
        "Mentored junior developers in software architecture principles and clean code practices",
      ],
    },
    {
      role: ".NET Full Stack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "May 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Modernized a complex legacy tax reporting system using .NET Core, SQL Server, Docker, RavenDB, and Angular",
        "Contributed as Full Stack engineer across multiple Scrum teams for a private banking platform serving high-net-worth clients",
        "Applied Domain-Driven Design principles in Master's thesis focusing on software architecture modernization",
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Zurich",
      period: "Jan. 2017 - May 2017",
      highlights: [
        "Developed a Java application for forex trading strategy backtesting with real-time market data analysis",
      ],
    },
    {
      role: "Aerodynamics Engineer GT Compressor",
      company: "Ansaldo Energia (formerly Alstom Power)",
      location: "Baden",
      period: "Oct. 2012 - Dec. 2016",
      allowPageBreak: true,
      highlights: [
        "Led aerodynamic design of gas turbine compressors for power generation facilities",
        "Modernized legacy Rolls-Royce design system using Python, PyQt, and PostgreSQL",
        "Managed technical integration of design software during corporate acquisition, coordinating cross-functional teams",
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
        "Completed distance learning program alongside full-time software engineering projects",
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
        "Diploma Thesis at Rolls-Royce, Dahlewitz: Numerical Investigations & CFD Simulations of Casing Treatments (Grade 1.0)",
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
      role: "Professional Certifications",
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
    projects: "Side Projects",
  },
};
