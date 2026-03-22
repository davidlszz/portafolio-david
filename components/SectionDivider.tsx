"use client";

export default function SectionDivider() {
  return (
    <div className="pointer-events-none relative mx-auto flex w-full max-w-[1180px] items-center gap-4 px-4 py-5 md:px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/28 to-cyan-300/5" />
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(34,211,238,0.45)]" />
        <span className="h-px w-16 bg-gradient-to-r from-cyan-300/18 to-emerald-300/18" />
        <span className="h-2 w-2 rounded-full bg-emerald-300/70 shadow-[0_0_12px_rgba(52,211,153,0.45)]" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-emerald-400/28 to-emerald-400/5" />
    </div>
  );
}
