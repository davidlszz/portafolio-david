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
import FadeInSection from "./FadeInSection";
import { useLanguage } from "./LanguageContext";

const stackGroups = {
  es: [
    {
      title: "Seguridad de red",
      subtitle: "Base defensiva para tr\u00e1fico, acceso y segmentaci\u00f3n.",
      icon: Network,
      accent: "from-cyan-400/20 to-cyan-300/5",
      items: ["TCP/IP", "DNS", "TLS", "SSH", "Subnetting"],
      focus: "Control de exposici\u00f3n y protecci\u00f3n en capa de red.",
    },
    {
      title: "Infraestructura",
      subtitle: "Servicios endurecidos con foco en estabilidad operativa.",
      icon: ServerCog,
      accent: "from-emerald-400/20 to-emerald-300/5",
      items: ["Linux", "VPS", "Nginx", "Reverse proxy", "Hardening base"],
      focus: "Despliegues confiables y administraci\u00f3n segura de servidores.",
    },
    {
      title: "DevSecOps",
      subtitle: "Automatizaci\u00f3n, entrega segura y observabilidad \u00fatil.",
      icon: Workflow,
      accent: "from-cyan-400/15 to-emerald-300/10",
      items: ["Git", "CI/CD", "Observabilidad", "Gesti\u00f3n de incidentes", "Automatizaci\u00f3n"],
      focus: "Menos tareas manuales, m\u00e1s trazabilidad y resiliencia.",
    },
  ],
  en: [
    {
      title: "Network security",
      subtitle: "Defensive foundations for traffic, access, and segmentation.",
      icon: Network,
      accent: "from-cyan-400/20 to-cyan-300/5",
      items: ["TCP/IP", "DNS", "TLS", "SSH", "Subnetting"],
      focus: "Exposure control and protection at the network layer.",
    },
    {
      title: "Infrastructure",
      subtitle: "Hardened services with an operations-first mindset.",
      icon: ServerCog,
      accent: "from-emerald-400/20 to-emerald-300/5",
      items: ["Linux", "VPS", "Nginx", "Reverse proxy", "Baseline hardening"],
      focus: "Reliable deployments and secure server administration.",
    },
    {
      title: "DevSecOps",
      subtitle: "Automation, secure delivery, and useful observability.",
      icon: Workflow,
      accent: "from-cyan-400/15 to-emerald-300/10",
      items: ["Git", "CI/CD", "Observability", "Incident handling", "Automation"],
      focus: "Less manual work, more traceability and resilience.",
    },
  ],
} as const;

const stackSignals = {
  es: [
    { label: "Arquitectura", value: "Defensa en capas", icon: ShieldCheck },
    { label: "Operaci\u00f3n", value: "Monitoreo activo", icon: Radar },
    { label: "Entrega", value: "Cambios controlados", icon: Boxes },
  ],
  en: [
    { label: "Architecture", value: "Defense in depth", icon: ShieldCheck },
    { label: "Operations", value: "Active monitoring", icon: Radar },
    { label: "Delivery", value: "Controlled change", icon: Boxes },
  ],
} as const;

export default function Stack() {
  const { lang } = useLanguage();
  const groups = stackGroups[lang];
  const signals = stackSignals[lang];

  return (
    <section
      id="stack"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6"
    >
      <FadeInSection>
        <div className="section-shell mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
                {lang === "es" ? "Capacidades t\u00e9cnicas" : "Technical capabilities"}
              </h2>
              <p className="cyber-text max-w-3xl text-base leading-relaxed md:text-lg">
                {lang === "es"
                  ? "M\u00e1s que una lista de herramientas, este stack representa c\u00f3mo conecto seguridad, infraestructura y operaci\u00f3n para construir sistemas con mayor visibilidad, menor superficie de ataque y entregas m\u00e1s estables."
                  : "More than a tool list, this stack shows how I connect security, infrastructure, and operations to build systems with better visibility, lower attack surface, and more stable delivery."}
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/60 p-6">
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
                    className="rounded-xl border border-cyan-300/15 bg-slate-900/80 px-4 py-3"
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
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <article
                key={group.title}
                className="interactive-card relative overflow-hidden rounded-[1.6rem] border border-emerald-400/20 bg-slate-950/65 p-6"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.accent} opacity-100`}
                />
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs tracking-[0.25em] text-cyan-200/75">
                        {lang === "es" ? "DOMINIO" : "DOMAIN"}
                      </p>
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    </div>
                    <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/85 p-3 text-cyan-200">
                      <group.icon size={22} />
                    </div>
                  </div>

                  <p className="cyber-text mb-5 text-sm leading-relaxed">{group.subtitle}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs text-cyan-100/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-slate-900/75 px-4 py-3">
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
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
