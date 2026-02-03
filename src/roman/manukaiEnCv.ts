import type { CvProfile } from "../types/cv";

export const manukaiEnCv: CvProfile = {
  language: "en",
  name: "Roman Weis",
  title: "Backend Lead & Software Engineer",
  availability: "Currently Software Architect at Digitec Galaxus",
  summary:
    "Hands-on Software Engineer with 8+ years building scalable backend systems and a foundation of 4+ years as R&D Engineer designing compressor blading for one of the world's largest gas turbines. Strong expertise in C#/.NET and Python with deep experience in relational databases and systems integration. Understands the full journey from engineering design to manufactured product.",
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
      name: "Backend Development",
      items: [
        "C#/.NET Core & .NET Framework",
        "Python (Backend & Automation)",
        "REST APIs & Service Integration",
        "Microservices & Modular Architecture",
      ],
    },
    {
      name: "Systems Integration",
      items: [
        "Windows Systems & Services",
        "Desktop Applications (Electron)",
        "Multi-module Software Integration",
        "Data Flow Optimization",
      ],
    },
    {
      name: "Databases",
      items: [
        "SQL Server & PostgreSQL",
        "SQLite",
        "Database Design & Optimization",
        "Data Migration & ETL",
      ],
    },
    {
      name: "DevOps & CI/CD",
      items: [
        "Build & Deployment Automation",
        "Azure DevOps & TeamCity",
        "Docker & Containerization",
        "Monitoring & Observability",
      ],
    },
    {
      name: "Architecture & Design",
      items: [
        "Domain-Driven Design (DDD)",
        "Software Architecture Patterns",
        "Scalability & Performance",
        "Technical Documentation",
      ],
    },
    {
      name: "Agile & Leadership",
      items: [
        "Technical Decision Making",
        "Code Review & Best Practices",
        "Autonomous Problem Solving",
        "Cross-functional Coordination",
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
        "Leading architectural decisions for backend systems supporting Switzerland's largest e-commerce platform",
        "Designing and optimizing data flows between distributed services for warehouse logistics",
        "Driving automation initiatives to improve system reliability and developer productivity",
        "Establishing code review processes and best practices across engineering teams",
      ],
    },
    {
      role: "Fullstack Engineer .NET/Blazor (Contract)",
      company: "Axpo Group",
      location: "Baden",
      period: "May 2023 - Jun. 2024",
      allowPageBreak: true,
      highlights: [
        "Architected and developed C#/.NET backend services for energy data platform supporting international trading",
        "Built automated CI/CD pipelines using TeamCity and Octopus Deploy with Azure infrastructure",
        "Designed and implemented data interfaces between applications and SQL databases",
        "Improved system observability with comprehensive monitoring and alerting",
      ],
    },
    {
      role: "Fullstack Engineer .NET/React (Contract)",
      company: "Swiss Life Group",
      location: "Zurich",
      period: "Jun. 2022 - Apr. 2023",
      allowPageBreak: true,
      highlights: [
        "Developed backend services using .NET/C# with MongoDB and Kubernetes deployment",
        "Led data migration initiative from SQL Server to SAP C4C affecting millions of customer records",
        "Integrated multiple software modules via GraphQL APIs ensuring data consistency",
      ],
    },
    {
      role: "Founder, Architect & Developer",
      company: "Stamy Booking GmbH",
      location: "Zurich",
      period: "Mar. 2020 - May 2022",
      allowPageBreak: true,
      highlights: [
        "Founded and built SaaS platform from concept to production as sole technical founder",
        "Designed scalable backend architecture with automated deployment pipelines",
        "Built multi-cloud infrastructure spanning Azure, GCP, AWS, and Hetzner",
        "Delivered complete product autonomously with rapid iteration cycles",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Maison du Software (Planzer Spin-off)",
      location: "Zurich",
      period: "Nov. 2019 - Feb. 2020",
      allowPageBreak: true,
      highlights: [
        "Introduced Continuous Delivery practices and CI/CD automation using Azure DevOps",
        "Mentored team members on software architecture principles and testing strategies",
      ],
    },
    {
      role: ".NET Fullstack Software Engineer",
      company: "Zühlke Group",
      location: "Schlieren",
      period: "May 2017 - Sep. 2019",
      allowPageBreak: true,
      highlights: [
        "Modernized complex legacy systems using .NET Core, SQL Server, Docker, and RavenDB",
        "Designed data interfaces and optimized database performance for financial applications",
        "Applied Domain-Driven Design for software architecture modernization (Master's thesis)",
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Zurich",
      period: "Jan. 2017 - May 2017",
      highlights: [
        "Developed Java application for forex trading strategy backtesting with real-time data processing",
      ],
    },
    {
      role: "Aerodynamics Engineer → Software Developer",
      company: "Ansaldo Energia (formerly Alstom Power)",
      location: "Baden",
      period: "Oct. 2012 - Dec. 2016",
      allowPageBreak: true,
      highlights: [
        "Modernized legacy Windows-based design system using Python, PyQt, and PostgreSQL",
        "Automated engineering workflows and data processing pipelines",
        "Managed technical integration of software systems during corporate acquisition",
        "Led cross-functional coordination between engineering and software teams",
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
        "Specialized in distributed systems, software architecture, and enterprise integration",
      ],
    },
    {
      role: "Diploma in Mechanical Engineering (Grade 1.7)",
      company: "Technical University of Kaiserslautern",
      location: "Kaiserslautern",
      period: "Graduated 2012",
      highlights: [
        "Strong quantitative and analytical foundation",
        "Diploma Thesis at Rolls-Royce: Numerical Simulations & CFD Analysis (Grade 1.0)",
      ],
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
  },
};
