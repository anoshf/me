import React from "react";

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="absolute right-[-180px] top-[260px] h-[560px] w-[560px] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute bottom-[-240px] left-[-180px] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(15,23,42,0.05)_1px)] [background-size:16px_16px] opacity-60" />
    </div>
  );
}
