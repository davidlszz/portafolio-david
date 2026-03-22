"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GradualBlurProps {
  children: ReactNode;
  className?: string;
  blurStrength?: number;
}

export default function GradualBlur({
  children,
  className = "",
  blurStrength = 18,
}: GradualBlurProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 52%"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [`blur(${blurStrength}px)`, "blur(3px)", "blur(0px)"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.38, 0.82, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.972, 1]);

  return (
    <motion.div
      ref={ref}
      style={reducedMotion ? undefined : { filter: blur, opacity, scale }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
