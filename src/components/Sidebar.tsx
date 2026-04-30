import type { CSSProperties, ReactNode } from "react";
import type { CvProfile, SidebarSectionConfig } from "../types/cv";

function SectionContainer({
  title,
  children,
  allowPageBreak = false,
}: {
  title: string;
  children: ReactNode;
  allowPageBreak?: boolean;
}) {
  const breakStyle: CSSProperties = {
    breakInside: allowPageBreak ? "auto" : "avoid",
    pageBreakInside: allowPageBreak ? "auto" : "avoid",
  };

  return (
    <section className="space-y-1" style={breakStyle}>
      <h3
        className="text-[10px] font-semibold uppercase tracking-[0.3em] border-b pb-1"
        style={{
          color: "var(--cv-accent-strong)",
          borderColor: "var(--cv-accent)",
        }}
      >
        {title}
      </h3>
      <div className="space-y-[4px] text-[11.5px] text-slate-700 pt-1">
        {children}
      </div>
    </section>
  );
}

const fallbackSections: SidebarSectionConfig[] = [
  { key: "personal" },
  { key: "contact" },
  { key: "skills", allowPageBreak: false },
  { key: "languages", allowPageBreak: false },
];

const skillGroupBreakStyle: CSSProperties = {
  breakInside: "avoid",
  pageBreakInside: "avoid",
};

export function Sidebar({ profile }: { profile: CvProfile }) {
  const sections = profile.sidebarSections ?? fallbackSections;

  return (
    <aside className="grid gap-4 text-[11.5px]">
      {sections.map(({ key, allowPageBreak = false }) => {
        switch (key) {
          case "personal":
            return (
              <SectionContainer
                key={key}
                title={profile.labels.personal}
                allowPageBreak={allowPageBreak}
              >
                <ul className="space-y-1">
                  {profile.personal.map((item) => (
                    <li key={item.label} className="space-y-0.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="text-[11.5px] font-medium text-slate-700">
                        {item.value}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionContainer>
            );
          case "contact":
            return (
              <SectionContainer
                key={key}
                title={profile.labels.contact}
                allowPageBreak={allowPageBreak}
              >
                <ul className="space-y-[2px] text-slate-600">
                  {profile.contact.map((link) => (
                    <li key={link.url} className="break-all text-[11.5px]">
                      {link.label}
                    </li>
                  ))}
                </ul>
              </SectionContainer>
            );
          case "skills":
            return (
              <SectionContainer
                key={key}
                title={profile.labels.skills}
                allowPageBreak={allowPageBreak}
              >
                <div className="space-y-3">
                  {profile.skills.map((group) => (
                    <div
                      key={group.name}
                      className="space-y-1"
                      style={skillGroupBreakStyle}
                    >
                      <p
                        className="text-[10px] font-semibold tracking-[0.2em]"
                        style={{ color: "var(--cv-accent)" }}
                      >
                        {group.name}
                      </p>
                      <ul className="list-disc list-inside space-y-[2px] text-[11px] leading-snug text-slate-600">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SectionContainer>
            );
          case "projects":
            if (!profile.projects || profile.projects.length === 0) {
              return null;
            }
            return (
              <SectionContainer
                key={key}
                title={profile.labels.projects ?? "Side Projects"}
                allowPageBreak={allowPageBreak}
              >
                <ul className="space-y-2">
                  {profile.projects.map((project) => (
                    <li key={project.url ?? project.name} className="space-y-0.5">
                      <p className="text-[11.5px] font-semibold text-slate-800 break-all">
                        {project.name}
                      </p>
                      <p className="text-[11px] leading-snug text-slate-600">
                        {project.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionContainer>
            );
          case "languages":
            return (
              <SectionContainer
                key={key}
                title={profile.labels.languages}
                allowPageBreak={allowPageBreak}
              >
                <ul className="space-y-[2px] text-[11.5px]">
                  {profile.languages.map((language) => (
                    <li
                      key={language.language}
                      className="flex justify-start gap-2"
                    >
                      <span className="font-medium text-slate-700">
                        {language.language}
                      </span>
                      <span className="text-slate-500">{language.level}</span>
                    </li>
                  ))}
                </ul>
              </SectionContainer>
            );
          default:
            return null;
        }
      })}
    </aside>
  );
}
