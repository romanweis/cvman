export type ContactLink = {
  label: string;
  url: string;
};

export type DetailItem = {
  label: string;
  value: string;
};

export type TimelineItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  allowPageBreak?: boolean;
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

export type SidebarSectionKey = "personal" | "contact" | "skills" | "languages";

export type SidebarSectionConfig = {
  key: SidebarSectionKey;
  allowPageBreak?: boolean;
};

export type CvProfile = {
  name: string;
  title: string;
  availability: string;
  summary: string;
  contact: ContactLink[];
  personal: DetailItem[];
  location: string;
  languages: { language: string; level: string }[];
  skills: SkillGroup[];
  experiences: TimelineItem[];
  education: TimelineItem[];
  sidebarSections?: SidebarSectionConfig[];
  language: "en" | "de";
  labels: {
    experience: string;
    education: string;
    personal: string;
    contact: string;
    skills: string;
    languages: string;
  };
};

export const smgEnCv: CvProfile = {
  language: "en",
  name: "Roman Weis",
  title: "Software Architect & Engineer",
  availability: "Currently Software Architect at Digitec Galaxus",
  summary:
    "Experienced Software Engineer & Architect specializing in Domain-Driven Design, legacy applications modernization, and cloud-native architectures.",
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
      name: "Domain Architecture",
      items: [
        "Domain-Driven Design (DDD)",
        "Strategic Domain Modeling",
        "Bounded Context Design",
        "Event Storming & Context Mapping",
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
        "TypeScript, Reat, Angular, Next.js",
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
      name: "Marketplace & E-commerce",
      items: [
        "Payment Systems Integration",
        "Online Booking Systems",
        "SEO techniques",
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
        "Applying DDD principles to improve resilience and scalability of warehouse logistics systems",
        "Driving cross-team initiatives in hihgly complex business domains",
        "Pioneering AI-assisted development workflows and tooling to enhance engineering productivity",
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
      highlights: [
        "Modernized complex legacy tax reporting system using .NET Core, SQL Server, Docker, RavenDB, and Angular",
        "Contributed as fullstack engineer across multiple Scrum teams for a private banking platform serving high-net-worth clients",
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
  },
};
