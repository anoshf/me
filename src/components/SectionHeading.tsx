import React from "react";

export function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-8">
      <div className="text-sm font-semibold tracking-widest text-slate-600">{eyebrow.toUpperCase()}</div>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 max-w-2xl text-slate-600">{desc}</p> : null}
    </div>
  );
}
