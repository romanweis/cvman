import type { CvProfile } from "../types/cv";

export const defaultEnCv: CvProfile = {
  language: "en",
  name: "Julia Kempel",
  title: "Project Manager Construction & Commissioning",
  availability: "Currently at Hitachi Energy",
  summary:
    "Experienced Project Manager with 15+ years in the energy sector, specializing in construction, commissioning, and site operations for power plant projects worldwide. Proven track record in managing complex EPC projects, leading international teams, and driving cost reduction initiatives. Entrepreneurial background with experience founding and scaling startups in the tech and healthcare space.",
  contact: [
    { label: "julia.kempel@email.com", url: "mailto:julia.kempel@email.com" },
    { label: "LinkedIn", url: "https://linkedin.com/in/juliakempel" },
  ],
  personal: [
    { label: "Nationality", value: "German" },
    { label: "Address", value: "Baden, Switzerland" },
  ],
  location: "Baden, Aargau, Switzerland",
  languages: [
    { language: "German", level: "Native" },
    { language: "English", level: "Fluent" },
  ],
  sidebarSections: [
    { key: "personal" },
    { key: "contact" },
    { key: "skills", allowPageBreak: true },
    { key: "languages", allowPageBreak: true },
  ],
  skills: [
    {
      name: "Project Management",
      items: [
        "International project management",
        "EPC project execution",
        "Contract management & tendering",
        "Cost control & budget management",
        "Schedule management",
      ],
    },
    {
      name: "Construction & Site Operations",
      items: [
        "Site execution management",
        "Installation & commissioning",
        "Field service resource delegation",
        "Quality & EHS compliance",
        "Construction planning (Bauplanung)",
      ],
    },
    {
      name: "Energy & Power Generation",
      items: [
        "Gas turbines",
        "Steam turbines",
        "Heat Recovery Steam Generators (HRSG)",
        "Power plant projects",
      ],
    },
    {
      name: "Business & Entrepreneurship",
      items: [
        "Startup founding & scaling",
        "SaaS platform development",
        "Business analysis",
        "Account management",
      ],
    },
    {
      name: "Leadership",
      items: [
        "Cross-functional team coordination",
        "Stakeholder management",
        "Mentoring (EmpowHer program)",
        "Board leadership (Vorstand)",
      ],
    },
  ],
  experiences: [
    {
      role: "Project Manager Construction and Commissioning",
      company: "Hitachi Energy",
      location: "Baden, Switzerland",
      period: "Oct. 2022 - Present",
      highlights: [
        "Managing construction and commissioning projects in the energy sector",
        "Overseeing site operations and project execution",
        "Contract management and cost control for EPC projects",
        "Coordinating international project teams and stakeholders",
      ],
    },
    {
      role: "Co-Founder",
      company: "Stamy Booking GmbH",
      location: "Zurich, Switzerland",
      period: "Aug. 2020 - Oct. 2023",
      allowPageBreak: true,
      highlights: [
        "Co-founded SaaS management tool for course instructors, therapists, and studios",
        "Managed platforms including healthcoworking.space, virtocooking.com, and holy54.ch",
        "Led business development and account management",
      ],
    },
    {
      role: "Owner & Managing Director",
      company: "Intoku GmbH",
      location: "Zurich, Switzerland",
      period: "Dec. 2018 - Sep. 2022",
      allowPageBreak: true,
      highlights: [
        "Founded and operated Medical Coworking hub for therapists and complementary medicine practitioners",
        "Developed digital platform and CRM tool for healthcare professionals",
        "Built flexible workspace solution enabling independent practitioners to grow their businesses",
      ],
    },
    {
      role: "Peer Mentor",
      company: "EmpowHer (Impact Hub Basel)",
      location: "Basel, Switzerland",
      period: "Oct. 2021 - Apr. 2022",
      allowPageBreak: true,
      highlights: [
        "Mentored early-stage female founders through 6-month development program",
        "Supported founders in building sustainable and profitable businesses",
      ],
    },
    {
      role: "Board Chair (Vorstandsvorsitzende)",
      company: "Funaniland Verein",
      location: "Zurich, Switzerland",
      period: "May 2019 - Apr. 2022",
      allowPageBreak: true,
      highlights: [
        "Led non-profit organization creating educational experiences for children aged 4-12",
        "Organized info events and pop-up activities for career exploration",
      ],
    },
    {
      role: "Lead Installation Leadership Specialist",
      company: "GE Power",
      location: "Baden, Switzerland",
      period: "Nov. 2015 - May 2018",
      allowPageBreak: true,
      highlights: [
        "Led installation and commissioning activities for power generation projects",
        "Managed construction planning, tendering, and cost control",
        "Coordinated international field service teams",
      ],
    },
    {
      role: "Site Operation Manager / Field Service Manager",
      company: "Alstom Switzerland Ltd.",
      location: "Baden, Switzerland",
      period: "Nov. 2011 - Oct. 2015",
      allowPageBreak: true,
      highlights: [
        "Overall management and coordination of site execution for gas turbines, steam turbines, and HRSG projects worldwide",
        "Delegated field service resources from worldwide locations following applicable laws and regulations",
        "Ensured successful execution of contractual requirements regarding costs, schedule, scope, quality, and EHS",
        "Identified technical and contractual deviations; implemented corrective and preventive actions",
        "Drove cost reduction initiatives and margin improvement opportunities",
        "Provided site costs and contractual input for tendering projects worldwide",
      ],
    },
    {
      role: "International Graduate Programme",
      company: "Alstom Switzerland Ltd.",
      location: "Baden, Switzerland / South Africa",
      period: "Nov. 2009 - Oct. 2011",
      allowPageBreak: true,
      highlights: [
        "PCCM Support at Thermal Systems Site Management (Nov 2009 - Jul 2010)",
        "Assistant to Site Contract Manager in South Africa for 6 x 790MW Steam project (Aug 2010 - Jan 2011)",
        "Tender Engineer for Plant Arrangement, Piping & Valves (Feb 2011 - Oct 2011)",
      ],
    },
    {
      role: "Student Trainee - Green Building Management",
      company: "Drees & Sommer",
      location: "Frankfurt, Germany",
      period: "Jun. 2008 - Apr. 2009",
      allowPageBreak: true,
      highlights: [
        "Worked on LEED and DGNB certification projects",
        "Gained expertise in sustainable building management",
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
      ],
    },
    {
      role: "Edupreneurship Studies",
      company: "Intrinsic",
      location: "Zurich, Switzerland",
      period: "Sep. 2021 - Dec. 2021",
      highlights: [
        "Part-time program focused on educational entrepreneurship",
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
