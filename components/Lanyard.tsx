"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";

interface LanyardProps {
  name: string;
  role: string;
  imageSrc: string;
  compact?: boolean;
}

export default function Lanyard({
  name,
  role,
  imageSrc,
  compact = false,
}: LanyardProps) {
  const [hasImage, setHasImage] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    element.style.setProperty("--lanyard-rotate", `${(relativeX - 0.5) * 14}deg`);
  };

  const reset = () => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    element.style.setProperty("--lanyard-rotate", "0deg");
  };

  return (
    <div className={`mx-auto flex flex-col items-center ${compact ? "w-full max-w-[240px]" : "w-full max-w-[280px]"}`}>
      <div className="mb-[-1px] h-12 w-px bg-gradient-to-b from-[color:var(--accent)]/70 to-transparent" />
      <div className="mb-3 h-3 w-16 rounded-full border border-white/10 bg-white/8" />
      <div
        ref={cardRef}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        className={`lanyard-card relative w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,28,33,0.94),rgba(16,18,22,0.94))] shadow-[0_24px_50px_rgba(0,0,0,0.28)] ${compact ? "p-4" : "p-5"}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,85,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="relative flex items-center gap-4">
          <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${compact ? "h-16 w-16" : "h-20 w-20"}`}>
            {hasImage ? (
              <Image
                src={imageSrc}
                alt={`Retrato de ${name}`}
                fill
                sizes="96px"
                className="object-cover"
                onError={() => setHasImage(false)}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-black/30 text-sm font-semibold text-white">
                DLS
              </div>
            )}
          </div>
          <div className="min-w-0">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] tracking-[0.18em] text-[color:var(--muted)]">
              <ShieldCheck size={12} />
              PASS
            </div>
            <p className={`truncate font-semibold text-white ${compact ? "text-base" : "text-lg"}`}>{name}</p>
            <p className={`truncate text-[color:var(--muted)] ${compact ? "text-xs" : "text-sm"}`}>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
