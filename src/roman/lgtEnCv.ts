import type { CvProfile } from "../types/cv";

export const lgtEnCv: CvProfile = {
  language: "en",
  name: "Roman Weis",
  title: "Senior Full Stack Engineer & Software Architect",
  availability: "Currently Software Architect at Digitec Galaxus",
  summary:
    "Senior Full Stack Engineer & Architect specializing in distributed REST microservices, Azure cloud-native platforms, and AI-assisted developer workflows. Background spans private banking, insurance, and e-commerce, with hands-on experimentation in agent-based systems and MCP.",
  contact: [
    { label: "roman.weis@proton.me", url: "mailto:roman.weis@proton.me" },
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
    { language: "German", level: "Native" },
    { language: "English", level: "Fluent" },
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
      name: "Distributed Systems",
      items: [
        "Stateless REST Microservices & API Design",
        "Event-Driven Architecture",
        "Domain-Driven Design (DDD)",
        "Scalability & Resilience",
      ],
    },
    {
      name: "Cloud, DevOps & SRE",
      items: [
        "Azure (preferred), GCP, Multi-Region",
        "Kubernetes, Docker, Terraform",
        "GitLab CI/CD, ArgoCD, GitHub Actions",
        "SRE Practices, OpenTelemetry",
        "Security Best Practices, GDPR Compliance",
      ],
    },
    {
      name: "Programming & Technologies",
      items: [
        "C#/.NET Core, Java, Python",
        "TypeScript, React, Angular, Next.js",
        "GraphQL, REST APIs",
        "SQL Server, PostgreSQL, MongoDB, RavenDB",
        "Kafka, Event Streaming",
        "Functional & OO Design Principles",
      ],
    },
    {
      name: "Leadership & Domain",
      items: [
        "Technical Leadership, Mentoring, Code Reviews",
        "Agile/Scrum, Lean Development",
        "Private Banking, Wealth & Asset Management",
        "Insurance, E-commerce, Energy Trading",
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
        "Leading architectural evolution of Switzerland's largest e-commerce platform serving millions of customers",
        "Modernizing legacy systems into resilient, scalable distributed services to meet rapidly growing demand",
        "Applying DDD principles to improve resilience and scalability of warehouse logistics systems",
        "Driving cross-team initiatives in highly complex business domains",
        "Pioneering AI-assisted development workflows, multi-agent tooling, and MCP-based integrations to enhance engineering productivity",
      ],
    },
    {
      role: "Full Stack Engineer .NET/Blazor (Contract)",
      company: "Axpo Group",
      location: "Baden",
      period: "May 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Architected a shared data foundation and platform-as-a-service for international energy trading, exposing curated datasets via stateless REST APIs",
        "Built distributed microservices with .NET/C#, PostgreSQL, Blazor and CI/CD on Azure, Terraform, TeamCity, Octopus Deploy",
      ],
    },
    {
      role: "Full Stack Engineer .NET/React (Contract)",
      company: "Swiss Life Group",
      location: "Zurich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Developed features for insurance platform using React Relay, GraphQL, .NET/C#, MongoDB, and Kubernetes",
        "Led data migration initiatives from SQL Server to SAP C4C affecting millions of customer records",
      ],
    },
    {
      role: "Founder, Architect & Developer",
      company: "Stamy Booking GmbH",
      location: "Zurich",
      period: "Mar. 2020 - May 2022",
      allowPageBreak: true,
      highlights: [
        "Founded and architected SaaS platform for fitness and wellness industry from concept to market launch",
        "Built multi-cloud infrastructure spanning Azure, GCP, AWS, and Hetzner with Kubernetes orchestration",
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
        "Contributed as Full Stack engineer across multiple Scrum teams for a private banking and wealth management platform serving high-net-worth clients",
        "Modernized complex legacy tax reporting system using .NET Core, SQL Server, Docker, RavenDB, and Angular",
        "Applied Domain-Driven Design principles in Master's thesis focusing on software architecture modernization",
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Zurich",
      period: "Jan. 2017 - May 2017",
      highlights: [
        "Developed a Java application for backtesting and executing quantitative forex trading models with real-time market data analysis",
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
