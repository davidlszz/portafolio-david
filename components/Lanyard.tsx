"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

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
  const rotate = useMotionValue(0);
  const springRotate = useSpring(rotate, { stiffness: 180, damping: 16, mass: 0.5 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    rotate.set((relativeX - 0.5) * 14);
  };

  const reset = () => rotate.set(0);

  return (
    <div className={`mx-auto flex flex-col items-center ${compact ? "w-full max-w-[240px]" : "w-full max-w-[280px]"}`}>
      <div className="mb-[-1px] h-12 w-px bg-gradient-to-b from-cyan-300/60 to-cyan-300/5" />
      <div className="mb-3 h-3 w-16 rounded-full border border-cyan-300/20 bg-cyan-300/8" />
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotate: springRotate, transformOrigin: "top center" }}
        className={`relative w-full overflow-hidden rounded-[1.6rem] border border-cyan-300/20 bg-slate-950/88 shadow-[0_24px_50px_rgba(0,0,0,0.28)] ${compact ? "p-4" : "p-5"}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.12),transparent_34%),linear-gradient(180deg,rgba(0,255,136,0.04),transparent_42%)]" />
        <div className="relative flex items-center gap-4">
          <div className={`relative overflow-hidden rounded-2xl border border-cyan-300/16 ${compact ? "h-16 w-16" : "h-20 w-20"}`}>
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
              <div className="flex h-full items-center justify-center bg-slate-900 text-sm font-semibold text-cyan-100">
                DLS
              </div>
            )}
          </div>
          <div className="min-w-0">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/16 bg-emerald-400/8 px-3 py-1 text-[10px] tracking-[0.18em] text-emerald-100">
              <ShieldCheck size={12} />
              LANYARD
            </div>
            <p className={`truncate font-semibold text-white ${compact ? "text-base" : "text-lg"}`}>{name}</p>
            <p className={`truncate text-emerald-200 ${compact ? "text-xs" : "text-sm"}`}>{role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
