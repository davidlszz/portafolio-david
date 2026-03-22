"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, LockKeyhole, Radar, ShieldCheck, Workflow } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SiGit, SiGithubactions, SiLinux, SiNginx } from "react-icons/si";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import { useLanguage } from "./LanguageContext";
import Lanyard from "./Lanyard";
import LogoLoop from "./LogoLoop";
import ProfileCard from "./ProfileCard";
import SectionCard from "./SectionCard";

const heroMetrics = {
  es: [
    { label: "Foco", value: "Infra + Sec", icon: ShieldCheck },
    { label: "Modo", value: "DevSecOps", icon: Workflow },
    { label: "Señal", value: "Observabilidad", icon: Radar },
  ],
  en: [
    { label: "Focus", value: "Infra + Sec", icon: ShieldCheck },
    { label: "Mode", value: "DevSecOps", icon: Workflow },
    { label: "Signal", value: "Observability", icon: Radar },
  ],
} as const;

const heroLoops = {
  es: [
    { label: "Linux", icon: <SiLinux className="text-lg" /> },
    { label: "Nginx", icon: <SiNginx className="text-lg" /> },
    { label: "Git", icon: <SiGit className="text-lg" /> },
    { label: "CI/CD", icon: <SiGithubactions className="text-lg" /> },
    { label: "Hardening", icon: <ShieldCheck size={17} /> },
    { label: "Workflows", icon: <Workflow size={17} /> },
  ],
  en: [
    { label: "Linux", icon: <SiLinux className="text-lg" /> },
    { label: "Nginx", icon: <SiNginx className="text-lg" /> },
    { label: "Git", icon: <SiGit className="text-lg" /> },
    { label: "CI/CD", icon: <SiGithubactions className="text-lg" /> },
    { label: "Hardening", icon: <ShieldCheck size={17} /> },
    { label: "Workflows", icon: <Workflow size={17} /> },
  ],
} as const;

const heroSignals = {
  es: [
    { label: "Hardening primero", icon: ShieldCheck },
    { label: "Entregas medibles", icon: Activity },
    { label: "Operación clara", icon: Radar },
  ],
  en: [
    { label: "Hardening first", icon: ShieldCheck },
    { label: "Measurable delivery", icon: Activity },
    { label: "Clear operations", icon: Radar },
  ],
} as const;

export default function Hero() {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotion();
  const words = useMemo(
    () =>
      lang === "es"
        ? ["Cybersecurity", "Infraestructura", "DevSecOps"]
        : ["Cybersecurity", "Infrastructure", "DevSecOps"],
    [lang],
  );
  const metrics = heroMetrics[lang];
  const loopItems = heroLoops[lang];
  const signals = heroSignals[lang];
  const [wordIndex, setWordIndex] = useState(0);
  const role = lang === "es" ? "Ingeniero de sistemas" : "Systems engineer";

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [reducedMotion, words]);

  return (
    <section
      id="home"
      className="relative flex min-h-[96svh] scroll-mt-28 items-center justify-center px-4 py-24 md:px-6"
    >
      <SectionCard accent="mixed" depth={0}>
        <FadeContent className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <motion.p
            className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 font-mono text-[11px] tracking-[0.28em] text-cyan-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            SECURITY.OPS // ONLINE
          </motion.p>

          <motion.div
            className="cyber-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] tracking-[0.18em]"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <LockKeyhole size={14} />
            {lang === "es" ? "Perfil técnico en evolución" : "Technical profile in progress"}
          </motion.div>
        </FadeContent>

        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
          <AnimatedContent className="text-center xl:text-left">
            <motion.h1
              className="cyber-title mb-4 text-4xl font-extrabold text-white md:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              David {"L\u00f3pez S\u00e1nchez"}
            </motion.h1>

            <motion.p
              className="mb-5 text-lg font-semibold text-emerald-300 md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              {lang === "es" ? "Especialidad:" : "Specialty:"}{" "}
              <span
                className="inline-block min-w-[11ch] border-r-2 border-cyan-300 pr-1 text-cyan-200"
                style={{ animation: reducedMotion ? "none" : "blink-caret 0.85s steps(1) infinite" }}
              >
                {words[wordIndex]}
              </span>
            </motion.p>

            <motion.p
              className="cyber-text mx-auto mb-8 max-w-3xl text-base leading-relaxed xl:mx-0 md:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              {lang === "es"
                ? "Ingeniería de sistemas enfocada en ciberseguridad, hardening de infraestructura, redes seguras y confiabilidad operativa con mentalidad DevSecOps."
                : "Systems engineering focused on cybersecurity, infrastructure hardening, secure networking, and operational reliability with a DevSecOps mindset."}
            </motion.p>

            <div className="mb-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <FadeContent key={metric.label} delay={0.08 * index}>
                  <div className="cyber-metric rounded-[1.45rem] px-4 py-4 text-left">
                    <div className="mb-2 flex items-center gap-2 text-cyan-200">
                      <metric.icon size={15} />
                      <span className="text-[11px] tracking-[0.22em] text-cyan-100/70">{metric.label}</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                </FadeContent>
              ))}
            </div>

            <motion.div
              className="mb-8 flex flex-col justify-center gap-4 sm:flex-row xl:justify-start"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}
            >
              <a
                href="#projects"
                className="rounded-[1rem] border border-emerald-400/50 bg-emerald-400/10 px-6 py-3 font-medium text-emerald-200 transition hover:bg-emerald-400/20"
              >
                {lang === "es" ? "Ver proyectos" : "View projects"}
              </a>
              <a
                href="https://github.com/davidlszz"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1rem] border border-cyan-300/50 bg-cyan-300/10 px-6 py-3 font-medium text-cyan-100 transition hover:bg-cyan-300/20"
              >
                GitHub
              </a>
            </motion.div>

            <div className="mb-8 flex flex-wrap justify-center gap-3 xl:justify-start">
              {signals.map((signal, index) => (
                <FadeContent key={signal.label} delay={0.06 * index}>
                  <div className="rounded-full border border-cyan-300/16 bg-slate-950/62 px-4 py-2 text-xs text-cyan-100/76">
                    <span className="inline-flex items-center gap-2 tracking-[0.16em]">
                      <signal.icon size={14} className="text-emerald-200" />
                      {signal.label}
                    </span>
                  </div>
                </FadeContent>
              ))}
            </div>

            <FadeContent>
              <LogoLoop items={loopItems} duration={21} />
            </FadeContent>
          </AnimatedContent>

          <AnimatedContent className="mx-auto flex w-full max-w-md flex-col items-center gap-6" delay={0.08}>
            <ProfileCard
              name={"David L\u00f3pez S\u00e1nchez"}
              role={role}
              subtitle={lang === "es" ? "Perfil interactivo" : "Interactive profile"}
              imageSrc="/profile-photo.jpg"
            />
            <Lanyard
              name={"David L\u00f3pez S\u00e1nchez"}
              role={role}
              imageSrc="/profile-photo.jpg"
            />
          </AnimatedContent>
        </div>
      </SectionCard>
    </section>
  );
}
