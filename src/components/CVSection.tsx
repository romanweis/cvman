import type { PropsWithChildren } from "react";

type CVSectionProps = PropsWithChildren<{
  title: string;
  accent?: boolean;
}>;

export function CVSection({ title, children, accent = false }: CVSectionProps) {
  return (
    <section className="space-y-3">
      <header className="flex items-center gap-2.5">
        <div
          className={`${accent ? "h-[2px] w-10" : "h-px w-10 bg-slate-300"}`}
          style={accent ? { backgroundColor: "var(--cv-accent)" } : undefined}
        />
        <h2
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: "var(--cv-accent-strong)" }}
        >
          {title}
        </h2>
      </header>
      <div className="space-y-1.5 text-[12.5px] text-slate-700 [&>p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
