import type { CvProfile } from "../types/cv";

export const hitachiCosEnCv: CvProfile = {
  language: "en",
  name: "Julia Kempel",
  title: "Project Manager | Energy Sector Leader",
  availability: "Internal Candidate - Hitachi Energy",
  summary:
    "Strategic project manager with 15+ years in the energy sector, combining deep technical expertise in power generation with strong business acumen and executive communication skills. Proven ability to manage cross-functional initiatives, engage senior stakeholders, and drive organizational priorities in multinational environments. Entrepreneurial background demonstrates analytical thinking, business case development, and hands-on leadership.",
  contact: [
    { label: "julia.kempel@email.com", url: "mailto:julia.kempel@email.com" },
    { label: "LinkedIn", url: "https://linkedin.com/in/juliakempel" },
  ],
  personal: [
    { label: "Nationality", value: "German" },
    { label: "Location", value: "Baden, Switzerland" },
  ],
  location: "Baden, Aargau, Switzerland",
  languages: [
    { language: "German", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Russian", level: "Basic" },
  ],
  sidebarSections: [
    { key: "personal" },
    { key: "contact" },
    { key: "skills", allowPageBreak: true },
    { key: "languages", allowPageBreak: true },
  ],
  skills: [
    {
      name: "Executive Support & Communications",
      items: [
        "Executive presentations & briefings",
        "Stakeholder management (C-level)",
        "Strategic communications",
        "Cross-functional coordination",
      ],
    },
    {
      name: "Project & Program Management",
      items: [
        "End-to-end project leadership",
        "Multi-project monitoring & reporting",
        "Risk identification & mitigation",
        "Budget & schedule management",
      ],
    },
    {
      name: "Business Analysis",
      items: [
        "Business case development",
        "Market research & analysis",
        "Process optimization",
        "KPI tracking & executive reporting",
      ],
    },
    {
      name: "Energy Industry Expertise",
      items: [
        "Power generation (gas/steam turbines, HRSG)",
        "EPC project execution",
        "Construction & commissioning",
        "Regulatory compliance & EHS",
      ],
    },
    {
      name: "Tools & Technologies",
      items: [
        "Microsoft 365 (PowerPoint, Excel)",
        "Project management tools",
        "Digital collaboration platforms",
        "SAP & ERP systems",
      ],
    },
  ],
  experiences: [
    {
      role: "Project Manager - Construction and Commissioning",
      company: "Hitachi Energy",
      location: "Baden, Switzerland",
      period: "Oct. 2022 - Present",
      highlights: [
        "Managing cross-functional projects involving multiple international stakeholders and senior leadership",
        "Preparing executive reports and presentations for project status updates and strategic decisions",
        "Coordinating with internal teams and external partners to ensure timely delivery of key priorities",
        "Conducting business analyses and developing recommendations for process improvements",
        "Driving clear communication across organizational boundaries in a multinational environment",
      ],
    },
    {
      role: "Co-Founder & Business Lead",
      company: "Stamy Booking GmbH",
      location: "Zurich, Switzerland",
      period: "Aug. 2020 - Oct. 2023",
      allowPageBreak: true,
      highlights: [
        "Led strategic initiatives from concept to market launch, managing multiple priorities simultaneously",
        "Developed business cases, conducted market research, and prepared investor presentations",
        "Built and maintained stakeholder relationships across healthcare and technology sectors",
        "Managed digital platforms and coordinated cross-functional teams in a fast-paced startup environment",
      ],
    },
    {
      role: "Owner & Managing Director",
      company: "Intoku GmbH",
      location: "Zurich, Switzerland",
      period: "Dec. 2018 - Sep. 2022",
      allowPageBreak: true,
      highlights: [
        "Founded and scaled healthcare coworking business, demonstrating entrepreneurial leadership",
        "Prepared business plans, financial analyses, and strategic presentations for stakeholders",
        "Managed all aspects of operations while maintaining focus on strategic growth priorities",
      ],
    },
    {
      role: "Peer Mentor - Female Founders Program",
      company: "EmpowHer (Impact Hub Basel)",
      location: "Basel, Switzerland",
      period: "Oct. 2021 - Apr. 2022",
      allowPageBreak: true,
      highlights: [
        "Mentored early-stage entrepreneurs on business strategy and sustainable growth",
        "Provided structured guidance and analytical frameworks for decision-making",
      ],
    },
    {
      role: "Lead Installation Leadership Specialist",
      company: "GE Power",
      location: "Baden, Switzerland",
      period: "Nov. 2015 - May 2018",
      allowPageBreak: true,
      highlights: [
        "Led high-visibility projects with direct reporting to senior management",
        "Prepared executive briefings and status reports for leadership review",
        "Coordinated international teams and managed stakeholder communications across multiple regions",
        "Drove cost reduction initiatives and margin improvement through analytical problem-solving",
      ],
    },
    {
      role: "Site Operation Manager / Field Service Manager",
      company: "Alstom Switzerland Ltd.",
      location: "Baden, Switzerland",
      period: "Nov. 2011 - Oct. 2015",
      allowPageBreak: true,
      highlights: [
        "Managed global site execution for power generation projects (gas turbines, steam turbines, HRSG)",
        "Coordinated field service resources across worldwide locations, ensuring regulatory compliance",
        "Delivered executive reports on project performance, costs, schedule, and quality metrics",
        "Identified issues proactively and implemented corrective actions to ensure timely resolution",
        "Provided strategic input for tendering projects, contributing to business development efforts",
      ],
    },
    {
      role: "International Graduate Programme",
      company: "Alstom Switzerland Ltd.",
      location: "Baden / South Africa",
      period: "Nov. 2009 - Oct. 2011",
      allowPageBreak: true,
      highlights: [
        "Rotated through key functions: site management support, contract management, and tender engineering",
        "Gained multinational experience working on 6 x 790MW steam project in South Africa",
        "Developed foundation in cross-functional collaboration and international stakeholder management",
      ],
    },
    {
      role: "Student Trainee - Green Building Management",
      company: "Drees & Sommer",
      location: "Frankfurt, Germany",
      period: "Jun. 2008 - Apr. 2009",
      allowPageBreak: true,
      highlights: [
        "Contributed to LEED and DGNB sustainability certification projects",
        "Gained exposure to consulting environment and client-facing deliverables",
      ],
    },
  ],
  education: [
    {
      role: "Master in Industrial Engineering",
      company: "TU Darmstadt",
      location: "Darmstadt, Germany",
      period: "Graduated",
      highlights: [
        "Major in Real Estate Development and Construction Planning",
        "Strong foundation in analytical methods and project management",
      ],
    },
    {
      role: "Edupreneurship Studies",
      company: "Intrinsic",
      location: "Zurich, Switzerland",
      period: "2021",
      highlights: [
        "Leadership and entrepreneurship development program",
      ],
    },
  ],
  labels: {
    experience: "Professional Experience",
    education: "Education",
    personal: "Personal Information",
    contact: "Contact",
    skills: "Skills",
    languages: "Languages",
  },
};
