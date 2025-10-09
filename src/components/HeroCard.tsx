import type { CvProfile } from "../data/recruitingDeCv";

type HeroCardProps = {
  profile: CvProfile;
};

export function HeroCard({ profile }: HeroCardProps) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-emerald-100">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-br from-emerald-100 via-transparent to-transparent opacity-60" />
      <div className="relative grid gap-6 md:grid-cols-[auto,1fr] md:items-center">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
            {profile.availability}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg font-medium text-slate-600">{profile.title}</p>
        </div>
        <div className="space-y-4 text-sm text-slate-600">
          <p className="leading-relaxed text-base text-slate-700">
            {profile.summary}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {profile.location}
            </span>
          </div>
          <ul className="grid gap-2 text-sm text-slate-600">
            {profile.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-3 text-sm">
            {profile.contact.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="flex items-center gap-2 rounded-full border border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
