"use client";

import {
  ArrowUpRight,
  LockKeyhole,
  Radar,
  ShieldCheck,
  TimerReset,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiGithubactions, SiLinux, SiNginx } from "react-icons/si";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import Lanyard from "./Lanyard";
import LogoLoop from "./LogoLoop";
import Magnet from "./Magnet";
import ProfileCard from "./ProfileCard";
import SectionCard from "./SectionCard";
import StarBorder from "./StarBorder";

const rotatingWords = {
  es: ["segura", "visible", "operable"],
  en: ["secure", "visible", "operable"],
} as const;

const heroStats = {
  es: [
    { label: "Foco", value: "Infraestructura y seguridad", icon: ShieldCheck },
    { label: "Metodo", value: "Trazabilidad sobre ruido", icon: Workflow },
    { label: "Respuesta", value: "24-48 horas", icon: TimerReset },
  ],
  en: [
    { label: "Focus", value: "Infrastructure and security", icon: ShieldCheck },
    { label: "Method", value: "Traceability over noise", icon: Workflow },
    { label: "Response", value: "24-48 hours", icon: TimerReset },
  ],
} as const;

const heroSignals = {
  es: [
    "Hardening aplicable",
    "Pipelines con control",
    "Observabilidad util",
  ],
  en: [
    "Applicable hardening",
    "Controlled pipelines",
    "Useful observability",
  ],
} as const;

const toolStrip = {
  es: [
    { label: "Linux", icon: <SiLinux className="text-base" /> },
    { label: "Nginx", icon: <SiNginx className="text-base" /> },
    { label: "GitHub Actions", icon: <SiGithubactions className="text-base" /> },
    { label: "SSH", icon: <LockKeyhole size={16} /> },
    { label: "Hardening", icon: <ShieldCheck size={16} /> },
    { label: "Observabilidad", icon: <Radar size={16} /> },
  ],
  en: [
    { label: "Linux", icon: <SiLinux className="text-base" /> },
    { label: "Nginx", icon: <SiNginx className="text-base" /> },
    { label: "GitHub Actions", icon: <SiGithubactions className="text-base" /> },
    { label: "SSH", icon: <LockKeyhole size={16} /> },
    { label: "Hardening", icon: <ShieldCheck size={16} /> },
    { label: "Observability", icon: <Radar size={16} /> },
  ],
} as const;

export default function Hero() {
  const { lang } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);
  const words = rotatingWords[lang];
  const stats = heroStats[lang];
  const signals = heroSignals[lang];
  const loopItems = toolStrip[lang];
  const role = lang === "es" ? "Ingeniero de sistemas" : "Systems engineer";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 1900);

    return () => window.clearInterval(interval);
  }, [words]);

  return (
    <section
      id="home"
      className="content-section relative flex min-h-[98svh] scroll-mt-28 items-center justify-center px-4 py-10 md:px-6 md:py-16"
    >
      <SectionCard accent="mixed" depth={0} className="rounded-[2.4rem]">
        <div className="relative">
          <div className="premium-orb left-[8%] top-8 hidden h-28 w-28 border border-white/8 bg-white/5 md:block" />
          <div
            className="premium-orb right-[18%] top-26 hidden h-14 w-14 border border-white/8 bg-[color:var(--accent)]/12 md:block"
            style={{ ["--orb-duration" as string]: "10s" }}
          />
          <div
            className="premium-orb bottom-18 right-[6%] hidden h-20 w-20 border border-white/8 bg-[color:var(--secondary)]/14 md:block"
            style={{ ["--orb-duration" as string]: "16s" }}
          />

          <div className="pointer-events-none absolute right-0 top-0 hidden translate-x-[12%] xl:block">
            <p className="hero-kicker hero-outline font-semibold uppercase">OPS</p>
          </div>

          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] xl:items-start">
            <div className="relative z-10">
              <AnimatedContent className="max-w-3xl">
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <span className="eyebrow rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] text-white/58">
                    {lang === "es" ? "Portfolio 2026 / premium technical edition" : "Portfolio 2026 / premium technical edition"}
                  </span>
                  <span className="rounded-full border border-white/10 bg-[color:var(--accent)]/10 px-4 py-2 text-[11px] tracking-[0.18em] text-[color:var(--accent)]">
                    {lang === "es" ? "Practicante con criterio operativo" : "Intern with operational judgment"}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="eyebrow text-xs text-white/42">
                    {lang === "es" ? "Seguridad, redes y delivery con direccion visual fuerte" : "Security, networking, and delivery with stronger direction"}
                  </p>
                </div>

                <p className="hero-kicker font-semibold uppercase text-white/10">Secure</p>

                <h1 className="-mt-4 max-w-[11ch] text-[clamp(3rem,7vw,6.6rem)] leading-[0.88] font-semibold tracking-[-0.06em] text-white">
                  {lang === "es" ? "Infraestructura " : "Infrastructure "}
                  <span className="inline-block min-w-[6.8ch] border-r-2 border-[color:var(--accent)] pr-1 text-[color:var(--accent)] hero-word-caret">
                    {words[wordIndex]}
                  </span>
                  {lang === "es" ? " con criterio de operacion." : " with operational judgment."}
                </h1>

                <p className="section-copy mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
                  {lang === "es"
                    ? "Estoy construyendo un perfil donde hardening, redes, automatizacion y observabilidad se presentan con una narrativa mas madura. No me interesa inflar una landing: me interesa que cada decision visual y tecnica ayude a comunicar criterio real."
                    : "I am building a profile where hardening, networking, automation, and observability are presented with a more mature narrative. I am not trying to inflate a landing page; I want every visual and technical decision to communicate real judgment."}
                </p>
              </AnimatedContent>

              <FadeContent className="mt-8 flex flex-wrap gap-4" delay={0.05}>
                <Magnet padding={120} magnetStrength={3}>
                  <StarBorder as="a" href="#projects" className="star-border-cta" color="#ff8754" speed="8s">
                    <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white">
                      {lang === "es" ? "Explorar builds premium" : "Explore premium builds"}
                      <ArrowUpRight size={16} />
                    </span>
                  </StarBorder>
                </Magnet>

                <a
                  href="mailto:davidlszdev@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/16 hover:bg-white/9"
                >
                  {lang === "es" ? "Contactar directo" : "Contact directly"}
                  <ArrowUpRight size={16} />
                </a>
              </FadeContent>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <FadeContent key={stat.label} delay={0.08 * index}>
                    <div className="premium-panel rounded-[1.7rem] p-5">
                      <div className="mb-3 flex items-center gap-3 text-[color:var(--accent)]">
                        <stat.icon size={17} />
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">
                          {stat.label}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white">{stat.value}</p>
                    </div>
                  </FadeContent>
                ))}
              </div>

              <FadeContent className="mt-8" delay={0.12}>
                <LogoLoop items={loopItems} duration={22} />
              </FadeContent>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-6 xl:pt-14">
              <AnimatedContent delay={0.08}>
                <ProfileCard
                  name="David Lopez Sanchez"
                  role={role}
                  subtitle={lang === "es" ? "Premium field profile" : "Premium field profile"}
                  imageSrc="/profile-photo.jpg"
                />
              </AnimatedContent>

              <AnimatedContent delay={0.12}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(31,34,39,0.94), rgba(18,20,24,0.94))"
                  borderRadius="1.85rem"
                  borderColor="rgba(255,255,255,0.08)"
                  glareColor="#fff4eb"
                  glareOpacity={0.11}
                  glareAngle={-28}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <div className="rounded-[1.85rem] p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="eyebrow text-[11px] text-white/42">
                          {lang === "es" ? "Criterio curatorial" : "Curatorial criteria"}
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-white">
                          {lang === "es" ? "Menos adornos, mas postura." : "Less decoration, more stance."}
                        </h2>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-[color:var(--accent)]">
                        03
                      </span>
                    </div>

                    <div className="space-y-3">
                      {signals.map((signal, index) => (
                        <FadeContent key={signal} delay={0.06 * index}>
                          <div className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/8 bg-black/12 px-4 py-3">
                            <span className="text-sm text-[color:var(--muted)]">{signal}</span>
                            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_rgba(255,135,84,0.75)]" />
                          </div>
                        </FadeContent>
                      ))}
                    </div>
                  </div>
                </GlareHover>
              </AnimatedContent>

              <AnimatedContent delay={0.16}>
                <Lanyard name="David Lopez Sanchez" role={role} imageSrc="/profile-photo.jpg" />
              </AnimatedContent>
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
