import type { CvProfile } from "../data/recruitingDeCv";

type HeroCardProps = {
  profile: CvProfile;
};

export function HeroCard({ profile }: HeroCardProps) {
  return (
    <header className="border-b border-slate-300 pb-6">
      <div className="grid gap-4 md:grid-cols-[auto,1fr] md:items-start">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">
            {profile.availability}
          </span>
          <h1 className="text-3xl font-semibold uppercase tracking-[0.1em] text-slate-900">
            {profile.name}
          </h1>
          <p className="text-base font-medium text-slate-700">
            {profile.title}
          </p>
          <p className="text-sm font-medium text-slate-600">
            {profile.location}
          </p>
        </div>
        <div className="space-y-3 text-[13px] leading-relaxed text-slate-700">
          <p>{profile.summary}</p>
          <ul className="space-y-1">
            {profile.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-1 text-[12px] text-slate-600">
            {profile.contact.map((link) => (
              <span key={link.url} className="break-all">
                {link.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
