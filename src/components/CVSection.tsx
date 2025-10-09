import type { PropsWithChildren } from "react";

type CVSectionProps = PropsWithChildren<{
  title: string;
  accent?: boolean;
}>;

export function CVSection({ title, children, accent = false }: CVSectionProps) {
  return (
    <section className="space-y-4">
      <header className="flex items-center gap-3">
        <div
          className={`h-0.5 w-10 rounded-full ${
            accent
              ? "bg-gradient-to-r from-emerald-500 to-teal-500"
              : "bg-slate-300"
          }`}
        />
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {title}
        </h2>
      </header>
      <div className="space-y-3 text-sm text-slate-700 [&>p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
