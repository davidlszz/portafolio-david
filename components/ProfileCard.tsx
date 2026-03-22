"use client";

import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  subtitle: string;
  imageSrc: string;
}

export default function ProfileCard({
  name,
  role,
  subtitle,
  imageSrc,
}: ProfileCardProps) {
  const [hasImage, setHasImage] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    element.style.setProperty("--rotate-x", `${(0.5 - relativeY) * 16}deg`);
    element.style.setProperty("--rotate-y", `${(relativeX - 0.5) * 16}deg`);
    element.style.setProperty("--glare-x", `${relativeX * 100}%`);
    element.style.setProperty("--glare-y", `${relativeY * 100}%`);
  };

  const resetCard = () => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    element.style.setProperty("--rotate-x", "0deg");
    element.style.setProperty("--rotate-y", "0deg");
    element.style.setProperty("--glare-x", "50%");
    element.style.setProperty("--glare-y", "50%");
  };

  return (
    <div className="mx-auto w-full max-w-[390px] [perspective:1400px]">
      <div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetCard}
        className="profile-tilt group relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,30,35,0.95),rgba(16,18,22,0.9))] shadow-[0_36px_90px_rgba(0,0,0,0.34)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,85,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(137,176,163,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div
          aria-hidden="true"
          className="profile-glare pointer-events-none absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/14 blur-3xl"
        />
        <div className="absolute inset-4 rounded-[1.65rem] border border-white/8" />

        <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/18 px-3 py-1.5 text-[11px] tracking-[0.2em] text-[color:var(--muted)] backdrop-blur">
          <ShieldCheck size={14} />
          FIELD PROFILE
        </div>

        <div className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/18 px-3 py-1.5 text-[11px] tracking-[0.2em] text-[color:var(--accent)] backdrop-blur">
          <Sparkles size={14} />
          ACTIVE
        </div>

        <div className="relative mx-5 mt-16 overflow-hidden rounded-[1.75rem] border border-white/10">
          <div className="relative aspect-[0.9]">
            {hasImage ? (
              <Image
                src={imageSrc}
                alt={`Retrato de ${name}`}
                fill
                priority
                sizes="(max-width: 768px) 70vw, 28vw"
                className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                onError={() => setHasImage(false)}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,138,85,0.22),transparent_34%),linear-gradient(180deg,#181c21_0%,#111317_100%)]">
                <div className="text-center">
                  <p className="font-sans text-6xl font-extrabold text-white">DLS</p>
                  <p className="mt-3 text-sm tracking-[0.22em] text-[color:var(--muted)]">{role}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,16,20,0.04),rgba(14,16,20,0.04)_38%,rgba(14,16,20,0.38)_100%)]" />
          </div>
        </div>

        <div className="relative z-10 px-6 py-5">
          <div className="rounded-[1.6rem] border border-white/10 bg-black/18 p-5 backdrop-blur">
            <p className="font-mono text-xs tracking-[0.3em] text-white/45">{subtitle}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{name}</h3>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-sm text-[color:var(--muted)]">{role}</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] tracking-[0.14em] text-[color:var(--accent)]">
                OPERATIONS
                <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
