import type { ReactNode } from "react";
import type { CvProfile } from "../data/recruitingDeCv";

function SectionContainer({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600">
        {title}
      </h3>
      <div className="space-y-1.5 text-[13px] text-slate-700">{children}</div>
    </section>
  );
}

export function Sidebar({ profile }: { profile: CvProfile }) {
  return (
    <aside className="grid gap-6 text-[13px]">
      <SectionContainer title="Persönliche Daten">
        <ul className="space-y-2">
          {profile.personal.map((item) => (
            <li key={item.label} className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </p>
              <p className="text-[13px] font-medium text-slate-700">
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer title="Kontakt">
        <p className="font-medium text-slate-700">{profile.location}</p>
        <ul className="space-y-1 text-slate-600">
          {profile.contact.map((link) => (
            <li key={link.url} className="break-all text-[13px]">
              {link.label}
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer title="Sprachen">
        <ul className="space-y-1 text-sm">
          {profile.languages.map((language) => (
            <li key={language.language} className="flex justify-between">
              <span className="font-medium text-slate-700">
                {language.language}
              </span>
              <span className="text-slate-500">{language.level}</span>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer title="Kompetenzen">
        <div className="grid gap-4">
          {profile.skills.map((group) => (
            <div key={group.name} className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                {group.name}
              </p>
              <ul className="space-y-1 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                    />
                    <span className="leading-relaxed text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Engagement & Interessen">
        <ul className="space-y-1 text-sm">
          {profile.interests.map((interest) => (
            <li key={interest} className="leading-relaxed text-slate-600">
              {interest}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </aside>
  );
}
