"use client";

import {
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
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import LogoLoop from "./LogoLoop";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";

const capabilityCards = {
  es: [
    {
      title: "Infraestructura endurecida",
      description: "Provisionamiento, configuracion base, control de acceso y publicacion segura de servicios.",
      icon: ServerCog,
      items: ["Linux", "VPS", "Nginx", "TLS", "SSH"],
    },
    {
      title: "Entrega con control",
      description: "Pipelines con validaciones, trazabilidad y menos cambios manuales en produccion.",
      icon: Workflow,
      items: ["Git", "CI/CD", "Policies", "Rollback", "Checks"],
    },
    {
      title: "Observabilidad util",
      description: "Logs, alertas y tableros que ayuden a diagnosticar, no solo a decorar.",
      icon: Radar,
      items: ["Logs", "Alerting", "Signals", "MTTR", "Runbooks"],
    },
    {
      title: "Red y segmentacion",
      description: "Diseno de zonas, reglas y flujos permitidos para reducir superficie de ataque.",
      icon: Network,
      items: ["TCP/IP", "DNS", "Subnets", "ACLs", "Segmentation"],
    },
  ],
  en: [
    {
      title: "Hardened infrastructure",
      description: "Provisioning, baseline configuration, access control, and secure service exposure.",
      icon: ServerCog,
      items: ["Linux", "VPS", "Nginx", "TLS", "SSH"],
    },
    {
      title: "Controlled delivery",
      description: "Pipelines with validation, traceability, and fewer manual changes in production.",
      icon: Workflow,
      items: ["Git", "CI/CD", "Policies", "Rollback", "Checks"],
    },
    {
      title: "Useful observability",
      description: "Logs, alerts, and dashboards that help diagnose rather than decorate.",
      icon: Radar,
      items: ["Logs", "Alerting", "Signals", "MTTR", "Runbooks"],
    },
    {
      title: "Networking and segmentation",
      description: "Zones, rules, and allowed flows designed to reduce attack surface.",
      icon: Network,
      items: ["TCP/IP", "DNS", "Subnets", "ACLs", "Segmentation"],
    },
  ],
} as const;

const operatingSignals = {
  es: [
    { label: "Base", value: "Hardening aplicable", icon: ShieldCheck },
    { label: "Entrega", value: "Cambios controlados", icon: Boxes },
    { label: "Acceso", value: "Minimo privilegio", icon: LockKeyhole },
  ],
  en: [
    { label: "Baseline", value: "Applicable hardening", icon: ShieldCheck },
    { label: "Delivery", value: "Controlled change", icon: Boxes },
    { label: "Access", value: "Least privilege", icon: LockKeyhole },
  ],
} as const;

const toolLoop = {
  es: [
    { label: "Linux", icon: <SiLinux className="text-base" /> },
    { label: "Nginx", icon: <SiNginx className="text-base" /> },
    { label: "Git", icon: <SiGit className="text-base" /> },
    { label: "GitHub Actions", icon: <SiGithubactions className="text-base" /> },
    { label: "TLS", icon: <ShieldCheck size={16} /> },
    { label: "SSH", icon: <LockKeyhole size={16} /> },
  ],
  en: [
    { label: "Linux", icon: <SiLinux className="text-base" /> },
    { label: "Nginx", icon: <SiNginx className="text-base" /> },
    { label: "Git", icon: <SiGit className="text-base" /> },
    { label: "GitHub Actions", icon: <SiGithubactions className="text-base" /> },
    { label: "TLS", icon: <ShieldCheck size={16} /> },
    { label: "SSH", icon: <LockKeyhole size={16} /> },
  ],
} as const;

export default function Stack() {
  const { lang } = useLanguage();
  const cards = capabilityCards[lang];
  const signals = operatingSignals[lang];
  const loopItems = toolLoop[lang];

  return (
    <section
      id="stack"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="emerald" depth={2}>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <AnimatedContent>
            <p className="eyebrow mb-4 text-xs text-white/42">
              {lang === "es" ? "Capacidades / stack real" : "Capabilities / real stack"}
            </p>
            <h2 className="section-quote max-w-[14ch] font-semibold text-white">
              {lang === "es"
                ? "Mi stack no empieza en la herramienta; empieza en lo que el sistema necesita soportar."
                : "My stack does not start with the tool; it starts with what the system must support."}
            </h2>

            <p className="section-copy mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              {lang === "es"
                ? "Trabajo estas tecnologias como partes de un flujo coherente: configurar mejor, exponer menos, automatizar sin perder control y dejar suficiente senal para operar con calma cuando algo falla."
                : "I use these technologies as parts of a coherent flow: configure better, expose less, automate without losing control, and leave enough signal to operate calmly when something fails."}
            </p>

            <FadeContent className="mt-8" delay={0.06}>
              <LogoLoop items={loopItems} duration={22} reverse />
            </FadeContent>
          </AnimatedContent>

          <AnimatedContent delay={0.08}>
            <div className="rounded-[1.85rem] border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--accent)]">
                  <Workflow size={18} />
                </div>
                <div>
                  <p className="eyebrow text-[11px] text-white/42">
                    {lang === "es" ? "Perfil operativo" : "Operating profile"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {lang === "es" ? "Como conecto las piezas" : "How I connect the pieces"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {signals.map((signal, index) => (
                  <FadeContent key={signal.label} delay={0.05 * index}>
                    <div className="rounded-[1.2rem] border border-white/8 bg-black/12 px-4 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-[color:var(--muted)]">
                          <signal.icon size={16} className="text-[color:var(--secondary)]" />
                          <span className="text-sm">{signal.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-white">{signal.value}</span>
                      </div>
                    </div>
                  </FadeContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <ScrollStack key={card.title} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(29,32,37,0.92), rgba(18,20,24,0.92))"
                  borderRadius="1.75rem"
                  borderColor="rgba(255,255,255,0.08)"
                  glareColor="#f3efe5"
                  glareOpacity={0.09}
                  glareAngle={-28}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <article className="interactive-card h-full rounded-[1.75rem] p-6">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="max-w-[18rem]">
                        <p className="eyebrow text-[11px] text-white/42">
                          {lang === "es" ? "Dominio" : "Domain"} 0{index + 1}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{card.title}</h3>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--accent)]">
                        <card.icon size={20} />
                      </div>
                    </div>

                    <p className="section-copy min-h-[72px] text-sm leading-relaxed">{card.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-[color:var(--muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </GlareHover>
              </FadeContent>
            </ScrollStack>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
