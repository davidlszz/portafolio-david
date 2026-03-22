"use client";

import {
  Activity,
  Boxes,
  LockKeyhole,
  Network,
  Radar,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SiGit, SiGithubactions, SiLinux, SiNginx } from "react-icons/si";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import { useLanguage } from "./LanguageContext";
import LogoLoop from "./LogoLoop";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";

const stackGroups = {
  es: [
    {
      title: "Seguridad de red",
      subtitle: "Base defensiva para tráfico, acceso y segmentación.",
      icon: Network,
      accent: "from-cyan-400/22 to-cyan-300/6",
      items: ["TCP/IP", "DNS", "TLS", "SSH", "Subnetting"],
      focus: "Control de exposición y protección en capa de red.",
    },
    {
      title: "Infraestructura",
      subtitle: "Servicios endurecidos con foco en estabilidad operativa.",
      icon: ServerCog,
      accent: "from-emerald-400/22 to-emerald-300/6",
      items: ["Linux", "VPS", "Nginx", "Reverse proxy", "Hardening base"],
      focus: "Despliegues confiables y administración segura de servidores.",
    },
    {
      title: "DevSecOps",
      subtitle: "Automatización, entrega segura y observabilidad útil.",
      icon: Workflow,
      accent: "from-cyan-400/18 to-emerald-300/12",
      items: ["Git", "CI/CD", "Observabilidad", "Incidentes", "Automatización"],
      focus: "Menos tareas manuales, más trazabilidad y resiliencia.",
    },
  ],
  en: [
    {
      title: "Network security",
      subtitle: "Defensive foundations for traffic, access, and segmentation.",
      icon: Network,
      accent: "from-cyan-400/22 to-cyan-300/6",
      items: ["TCP/IP", "DNS", "TLS", "SSH", "Subnetting"],
      focus: "Exposure control and protection at the network layer.",
    },
    {
      title: "Infrastructure",
      subtitle: "Hardened services with an operations-first mindset.",
      icon: ServerCog,
      accent: "from-emerald-400/22 to-emerald-300/6",
      items: ["Linux", "VPS", "Nginx", "Reverse proxy", "Baseline hardening"],
      focus: "Reliable deployments and secure server administration.",
    },
    {
      title: "DevSecOps",
      subtitle: "Automation, secure delivery, and useful observability.",
      icon: Workflow,
      accent: "from-cyan-400/18 to-emerald-300/12",
      items: ["Git", "CI/CD", "Observability", "Incident handling", "Automation"],
      focus: "Less manual work, more traceability and resilience.",
    },
  ],
} as const;

const stackSignals = {
  es: [
    { label: "Arquitectura", value: "Defensa en capas", icon: ShieldCheck },
    { label: "Operación", value: "Monitoreo activo", icon: Radar },
    { label: "Entrega", value: "Cambios controlados", icon: Boxes },
  ],
  en: [
    { label: "Architecture", value: "Defense in depth", icon: ShieldCheck },
    { label: "Operations", value: "Active monitoring", icon: Radar },
    { label: "Delivery", value: "Controlled change", icon: Boxes },
  ],
} as const;

const stackLoop = {
  es: [
    { label: "Linux", icon: <SiLinux className="text-lg" /> },
    { label: "Nginx", icon: <SiNginx className="text-lg" /> },
    { label: "Git", icon: <SiGit className="text-lg" /> },
    { label: "GitHub Actions", icon: <SiGithubactions className="text-lg" /> },
    { label: "TLS", icon: <ShieldCheck size={17} /> },
    { label: "SSH", icon: <LockKeyhole size={17} /> },
  ],
  en: [
    { label: "Linux", icon: <SiLinux className="text-lg" /> },
    { label: "Nginx", icon: <SiNginx className="text-lg" /> },
    { label: "Git", icon: <SiGit className="text-lg" /> },
    { label: "GitHub Actions", icon: <SiGithubactions className="text-lg" /> },
    { label: "TLS", icon: <ShieldCheck size={17} /> },
    { label: "SSH", icon: <LockKeyhole size={17} /> },
  ],
} as const;

export default function Stack() {
  const { lang } = useLanguage();
  const groups = stackGroups[lang];
  const signals = stackSignals[lang];
  const loopItems = stackLoop[lang];

  return (
    <section
      id="stack"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="emerald" depth={2}>
        <div className="mb-8 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] xl:items-start">
          <AnimatedContent className="mx-auto max-w-3xl text-center xl:mx-0 xl:text-left">
            <p className="mb-3 text-xs tracking-[0.3em] text-cyan-300/82">
              {lang === "es" ? "STACK PROFESIONAL" : "PROFESSIONAL STACK"}
            </p>
            <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
              {lang === "es" ? "Capacidades técnicas" : "Technical capabilities"}
            </h2>
            <p className="cyber-text text-base leading-relaxed md:text-lg">
              {lang === "es"
                ? "Más que una lista de herramientas, este stack explica cómo conecto seguridad, infraestructura y operación para construir sistemas con mejor visibilidad, menor superficie de ataque y entregas más estables."
                : "More than a tool list, this stack shows how I connect security, infrastructure, and operations to build systems with better visibility, lower attack surface, and more stable delivery."}
            </p>

            <div className="mt-6">
              <FadeContent>
                <LogoLoop items={loopItems} duration={22} reverse />
              </FadeContent>
            </div>
          </AnimatedContent>

          <AnimatedContent className="rounded-[1.7rem] border border-cyan-300/20 bg-slate-950/60 p-6" delay={0.08}>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-emerald-200">
                <LockKeyhole size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {lang === "es" ? "Perfil operativo" : "Operational profile"}
                </p>
                <p className="text-sm text-cyan-100/70">
                  {lang === "es" ? "Orientado a seguridad y confiabilidad" : "Security and reliability oriented"}
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-[1.1rem] border border-cyan-300/15 bg-slate-900/80 px-4 py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <signal.icon size={16} className="text-cyan-200" />
                      <span className="text-sm text-cyan-100/80">{signal.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-emerald-200">{signal.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <ScrollStack key={group.title} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <article className="interactive-card relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-emerald-400/18 bg-slate-950/68 p-6">
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.accent} opacity-100`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-xs tracking-[0.25em] text-cyan-200/75">
                          {lang === "es" ? "DOMINIO" : "DOMAIN"}
                        </p>
                        <h3 className="max-w-[12ch] text-2xl font-semibold text-white">{group.title}</h3>
                      </div>
                      <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/85 p-3 text-cyan-200">
                        <group.icon size={22} />
                      </div>
                    </div>

                    <p className="cyber-text mb-6 min-h-[84px] text-base leading-relaxed">{group.subtitle}</p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 text-xs text-cyan-100/85"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto rounded-[1.25rem] border border-emerald-400/15 bg-slate-900/75 px-4 py-4">
                      <div className="mb-2 flex items-center gap-2 text-emerald-200">
                        <Activity size={15} />
                        <span className="text-xs tracking-[0.22em]">
                          {lang === "es" ? "FOCO ACTUAL" : "CURRENT FOCUS"}
                        </span>
                      </div>
                      <p className="text-sm text-cyan-100/80">{group.focus}</p>
                    </div>
                  </div>
                </article>
              </FadeContent>
            </ScrollStack>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
