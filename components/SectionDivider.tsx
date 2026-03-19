"use client";

export default function SectionDivider() {
  return (
    <div className="pointer-events-none relative mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/25 to-cyan-300/5" />
      <div className="rounded-full border border-cyan-300/20 bg-slate-950/70 px-3 py-1 text-[10px] tracking-[0.35em] text-cyan-100/55">
        FLOW
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-emerald-400/25 to-emerald-400/5" />
    </div>
  );
}
