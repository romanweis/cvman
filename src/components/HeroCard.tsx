import type { CvProfile } from "../types/cv";

type HeroCardProps = {
  profile: CvProfile;
};

export function HeroCard({ profile }: HeroCardProps) {
  return (
    <header className="cv-hero border-b border-slate-300 pb-4">
      <div className="grid gap-3 md:grid-cols-[auto,1fr] md:items-start">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">
            {profile.availability}
          </span>
          <h1 className="text-2xl font-semibold uppercase tracking-[0.1em] text-slate-900">
            {profile.name}
          </h1>
          <p className="text-[12px] font-medium text-slate-700">
            {profile.title}
          </p>
          <p className="text-[10px] font-medium text-slate-600">
            {profile.location}
          </p>
        </div>
        <div className="space-y-2.5 text-[11px] leading-relaxed text-slate-700">
          <p>{profile.summary}</p>
        </div>
      </div>
    </header>
  );
}
