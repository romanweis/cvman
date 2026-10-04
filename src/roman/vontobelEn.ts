import type { CvProfile } from "../types/cv";

export const vontobelEnCv: CvProfile = {
  language: "en",
  name: "Roman Weis",
  title: "Software Architect & Engineer",
  availability: "Currently Software Architect at Digitec Galaxus",
  summary:
    "Experienced Software Engineer & Architect specializing in Domain-Driven Design, legacy applications modernization, and cloud-native architectures. Passionate about AI-assisted engineering, agentic systems, and driving AI adoption across teams and organizations.",
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
    { language: "English", level: "Fluent" },
  ],
  projects: [
    {
      name: "dotnetagents.net",
      url: "https://dotnetagents.net/",
      description:
        "Blog on applying agentic patterns in .NET-based AI, covering the Microsoft Agent Framework, MCP servers, and agent orchestration.",
    },
    {
      name: "Chess",
      description: "Active player in online and live tournaments.",
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
      name: "AI Assisted Engineering",
      items: [
        "Azure AI Foundry",
        "Microsoft Agent Framework",
        "Copilot & Claude Code",
      ],
    },
    {
      name: "Platform Architecture",
      items: [
        "Microservices & Distributed Systems",
        "Event-Driven Architecture",
        "Modular Monolith",
        "Scalability & Performance",
      ],
    },
    {
      name: "Cloud & Infrastructure",
      items: [
        "Azure Cloud Services",
        "Google Cloud Platform (GCP)",
        "Kubernetes & Docker",
        "Infrastructure as Code",
      ],
    },
    {
      name: "Programming & Technologies",
      items: [
        "C#/.NET Core",
        "TypeScript, React, Angular, Next.js",
        "Java & Python",
        "GraphQL, REST APIs",
      ],
    },
    {
      name: "Architecture Governance",
      items: [
        "Architecture Decision Records",
        "Technology Evaluation & PoCs",
        "Cross-team Alignment",
      ],
    },
    {
      name: "Leadership & Mentoring",
      items: [
        "Technical Leadership",
        "Architecture Workshops",
        "Developer Mentoring",
        "Stakeholder Communication",
      ],
    },
    {
      name: "DevOps & Quality",
      items: [
        "CI/CD Pipelines",
        "Observability & Monitoring",
        "Testing Strategies",
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
        "Modernize and improve legacy systems to meet the demands of a rapidly growing online retail business",
        "Driving cross-team initiatives in highly complex business domains",
        "Driving AI tooling adoption across team and organization by organizing AI-assisted coding and change management workshops",
        "Active member of the AI Task Force and AI Coding Guild, shaping company-wide AI engineering practices",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (Contract)",
      company: "Axpo Group",
      location: "Baden",
      period: "May 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Architected and developed an energy data platform supporting international trading operations",
        "Built automated infrastructure and CI/CD pipelines using Azure, Terraform, TeamCity, and Octopus Deploy",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (Contract)",
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
      role: ".NET Fullstack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "May 2017 - Sep. 2019",
      allowPageBreak: true,
      pageBreakBefore: true,
      highlights: [
        "Modernized complex legacy tax reporting system using .NET Core, SQL Server, Docker, RavenDB, and Angular",
        "Contributed as fullstack engineer across multiple Scrum teams for a private banking platform serving high-net-worth clients",
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
