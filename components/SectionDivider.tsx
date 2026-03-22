"use client";

export default function SectionDivider() {
  return (
    <div className="pointer-events-none relative mx-auto flex w-full max-w-[1180px] items-center gap-3 px-4 py-4 md:px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/28 to-cyan-300/5" />
      <div className="flex h-2 w-2 rounded-full border border-cyan-300/30 bg-cyan-300/30 shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-emerald-400/28 to-emerald-400/5" />
    </div>
  );
}
