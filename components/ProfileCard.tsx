"use client";

import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";
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
        className="profile-tilt group relative w-full overflow-hidden rounded-[2rem] border border-cyan-300/24 bg-[#07111b] shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.2),transparent_34%),linear-gradient(180deg,rgba(0,255,136,0.06),transparent_40%),linear-gradient(180deg,#08121c_0%,#071018_100%)]" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
        <div
          aria-hidden="true"
          className="profile-glare pointer-events-none absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/12 blur-3xl"
        />
        <div className="absolute inset-4 rounded-[1.65rem] border border-cyan-300/16" />

        <div className="glass-chip absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/18 px-3 py-1.5 text-[11px] tracking-[0.2em] text-emerald-100">
          <ShieldCheck size={14} />
          PROFILE CARD
        </div>

        <div className="glass-chip absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-cyan-300/18 px-3 py-1.5 text-[11px] tracking-[0.2em] text-cyan-100">
          <Sparkles size={14} />
          LIVE
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
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.22),transparent_34%),linear-gradient(180deg,#071018_0%,#0b1520_100%)]">
                <div className="text-center">
                  <p className="cyber-title text-6xl font-extrabold text-white">DLS</p>
                  <p className="mt-3 text-sm tracking-[0.22em] text-cyan-200/80">{role}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,27,0.05),rgba(7,17,27,0.02)_38%,rgba(7,17,27,0.18)_100%)]" />
          </div>
        </div>

        <div className="relative z-10 px-6 py-5">
          <div className="glass-chip rounded-[1.6rem] border border-cyan-300/18 p-5">
            <p className="cyber-title text-xs tracking-[0.3em] text-cyan-100/56">{subtitle}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{name}</h3>
            <p className="mt-2 text-sm text-emerald-200">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
