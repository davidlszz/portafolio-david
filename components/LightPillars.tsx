"use client";

export default function LightPillars() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="light-pillar light-pillar-left" />
      <div className="light-pillar light-pillar-center" />
      <div className="light-pillar light-pillar-right" />
    </div>
  );
}
