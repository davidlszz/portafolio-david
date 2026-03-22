"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

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
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springConfig = { stiffness: 170, damping: 16, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);
  const glareLeft = useTransform(glareX, (value) => `${value}%`);
  const glareTop = useTransform(glareY, (value) => `${value}%`);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    rotateY.set((relativeX - 0.5) * 16);
    rotateX.set((0.5 - relativeY) * 16);
    glareX.set(relativeX * 100);
    glareY.set(relativeY * 100);
  };

  const resetCard = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <div className="mx-auto w-full max-w-[390px] [perspective:1400px]">
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetCard}
        style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
        className="group relative w-full overflow-hidden rounded-[2rem] border border-cyan-300/24 bg-[#07111b] shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.2),transparent_34%),linear-gradient(180deg,rgba(0,255,136,0.06),transparent_40%),linear-gradient(180deg,#08121c_0%,#071018_100%)]" />
        <motion.div
          aria-hidden="true"
          style={{ left: glareLeft, top: glareTop }}
          className="pointer-events-none absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/12 blur-3xl"
        />
        <div className="absolute inset-4 rounded-[1.65rem] border border-cyan-300/16" />

        <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/18 bg-emerald-400/10 px-3 py-1.5 text-[11px] tracking-[0.2em] text-emerald-100">
          <ShieldCheck size={14} />
          PROFILE CARD
        </div>

        <div className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1.5 text-[11px] tracking-[0.2em] text-cyan-100">
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
          <div className="rounded-[1.6rem] border border-cyan-300/18 bg-slate-950/86 p-5">
            <p className="cyber-title text-xs tracking-[0.3em] text-cyan-100/56">{subtitle}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{name}</h3>
            <p className="mt-2 text-sm text-emerald-200">{role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
