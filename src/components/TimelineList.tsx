import type { TimelineItem } from "../data/recruitingDeCv";

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="space-y-6">
      {items.map((item) => (
        <li
          key={`${item.role}-${item.company}-${item.period}`}
          className="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm shadow-slate-100"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-slate-600">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
            </div>
            <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
              {item.period}
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-400"
                />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
