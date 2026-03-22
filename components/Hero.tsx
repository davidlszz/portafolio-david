"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, LockKeyhole, Radar, ShieldCheck, Workflow } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SiGit, SiGithubactions, SiLinux, SiNginx } from "react-icons/si";
import { useLanguage } from "./LanguageContext";
import LogoLoop from "./LogoLoop";
import SectionCard from "./SectionCard";

const heroMetrics = {
  es: [
    { label: "Foco", value: "Infra + Sec", icon: ShieldCheck },
    { label: "Modo", value: "DevSecOps", icon: Workflow },
    { label: "Senal", value: "Observabilidad", icon: Radar },
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
    { label: "Operacion clara", icon: Radar },
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
  const [hasProfileImage, setHasProfileImage] = useState(true);
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
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
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
            {lang === "es" ? "Perfil tecnico en evolucion" : "Technical profile in progress"}
          </motion.div>
        </div>

        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
          <div className="text-center xl:text-left">
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
                ? "Ingenieria de sistemas enfocada en ciberseguridad, hardening de infraestructura, redes seguras y confiabilidad operativa con mentalidad DevSecOps."
                : "Systems engineering focused on cybersecurity, infrastructure hardening, secure networking, and operational reliability with a DevSecOps mindset."}
            </motion.p>

            <motion.div
              className="mb-8 grid gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="cyber-metric rounded-[1.45rem] px-4 py-4 text-left"
                >
                  <div className="mb-2 flex items-center gap-2 text-cyan-200">
                    <metric.icon size={15} />
                    <span className="text-[11px] tracking-[0.22em] text-cyan-100/70">{metric.label}</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </motion.div>

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
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-full border border-cyan-300/16 bg-slate-950/62 px-4 py-2 text-xs text-cyan-100/76"
                >
                  <span className="inline-flex items-center gap-2 tracking-[0.16em]">
                    <signal.icon size={14} className="text-emerald-200" />
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <p className="mb-4 text-center text-[11px] tracking-[0.32em] text-cyan-100/55 xl:text-left">
                {lang === "es" ? "LOGO LOOP // TOOLSET" : "LOGO LOOP // TOOLSET"}
              </p>
              <LogoLoop items={loopItems} duration={21} />
            </motion.div>
          </div>

          <motion.div
            className="mx-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <div className="cyber-grid-panel relative mx-auto aspect-[4/5] overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-slate-950/75 p-3 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.18),transparent_36%),linear-gradient(180deg,rgba(0,255,136,0.05),transparent)]" />
              <div className="absolute left-4 top-4 rounded-full border border-emerald-400/20 bg-slate-950/75 px-3 py-1 text-[10px] tracking-[0.24em] text-emerald-200">
                {lang === "es" ? "IDENTIDAD" : "IDENTITY"}
              </div>
              <div className="absolute right-4 top-4 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] tracking-[0.2em] text-cyan-100">
                {lang === "es" ? "React style" : "React style"}
              </div>
              <div className="absolute bottom-4 left-4 z-10 max-w-[13rem] rounded-[1.25rem] border border-cyan-300/18 bg-slate-950/74 px-4 py-3 backdrop-blur-md">
                <p className="text-[10px] tracking-[0.24em] text-cyan-100/52">
                  {lang === "es" ? "SENAL" : "SIGNAL"}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {lang === "es" ? "Perfil centrado en seguridad e infraestructura" : "Security and infrastructure centered profile"}
                </p>
              </div>
              <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-emerald-400/20 bg-slate-900">
                {hasProfileImage ? (
                  <Image
                    src="/profile-photo.jpg"
                    alt={"Retrato de David L\u00f3pez S\u00e1nchez"}
                    fill
                    priority
                    sizes="(max-width: 768px) 70vw, 32vw"
                    className="object-cover"
                    onError={() => setHasProfileImage(false)}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.22),transparent_34%),linear-gradient(180deg,#071018_0%,#0b1520_100%)]">
                    <div className="text-center">
                      <p className="cyber-title text-6xl font-extrabold text-white">DLS</p>
                      <p className="mt-3 text-sm tracking-[0.22em] text-cyan-200/80">
                        {lang === "es" ? "Perfil profesional" : "Professional profile"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionCard>
    </section>
  );
}
