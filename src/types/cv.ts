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
