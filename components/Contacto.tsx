"use client";

import {
  Clock3,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import LogoLoop from "./LogoLoop";
import SectionCard from "./SectionCard";

const contactSignals = {
  es: [
    { label: "Infraestructura segura", icon: <ShieldCheck size={16} /> },
    { label: "Automatizacion y CI/CD", icon: <Workflow size={16} /> },
    { label: "Observabilidad y operacion", icon: <TerminalSquare size={16} /> },
    { label: "LinkedIn", icon: <Linkedin size={16} /> },
    { label: "GitHub", icon: <Github size={16} /> },
    { label: "Email", icon: <Mail size={16} /> },
  ],
  en: [
    { label: "Secure infrastructure", icon: <ShieldCheck size={16} /> },
    { label: "Automation and CI/CD", icon: <Workflow size={16} /> },
    { label: "Observability and operations", icon: <TerminalSquare size={16} /> },
    { label: "LinkedIn", icon: <Linkedin size={16} /> },
    { label: "GitHub", icon: <Github size={16} /> },
    { label: "Email", icon: <Mail size={16} /> },
  ],
} as const;

const collaborationModes = {
  es: [
    {
      title: "Proyectos tecnicos",
      description: "Diseno, hardening, automatizacion y mejora continua sobre plataformas y servicios.",
      icon: ShieldCheck,
    },
    {
      title: "Laboratorios y practica",
      description: "Construccion de entornos controlados para observabilidad, segmentacion y validacion de controles.",
      icon: TerminalSquare,
    },
    {
      title: "Entrega operativa",
      description: "Apoyo en documentacion, runbooks, flujos CI/CD y trazabilidad de cambios.",
      icon: Workflow,
    },
  ],
  en: [
    {
      title: "Technical projects",
      description: "Design, hardening, automation, and continuous improvement across platforms and services.",
      icon: ShieldCheck,
    },
    {
      title: "Labs and practice",
      description: "Controlled environments for observability, segmentation, and validation of security controls.",
      icon: TerminalSquare,
    },
    {
      title: "Operational delivery",
      description: "Support in documentation, runbooks, CI/CD flows, and change traceability.",
      icon: Workflow,
    },
  ],
} as const;

export default function Contacto() {
  const { lang } = useLanguage();
  const signals = contactSignals[lang];
  const modes = collaborationModes[lang];

  return (
    <section
      id="contact"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="cyan" depth={5}>
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-cyan-300/82">
            {lang === "es" ? "COLABORACION Y CONTACTO" : "COLLABORATION AND CONTACT"}
          </p>
          <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
            {lang === "es" ? "Colaboracion y contacto" : "Collaboration and contact"}
          </h2>

          <p className="cyber-text text-lg leading-relaxed">
            {lang === "es"
              ? "Estoy interesado en colaborar en iniciativas donde infraestructura, seguridad y operacion se crucen de forma real: despliegues confiables, hardening, observabilidad, automatizacion y mejora continua de plataformas."
              : "I am interested in collaborating on initiatives where infrastructure, security, and operations intersect in real ways: reliable deployments, hardening, observability, automation, and continuous platform improvement."}
          </p>
        </div>

        <div className="mb-8">
          <LogoLoop items={signals} duration={23} />
        </div>

        <div className="mb-8 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <div className="grid gap-4 md:grid-cols-3">
            {modes.map((mode) => (
              <article
                key={mode.title}
                className="interactive-card rounded-[1.5rem] border border-emerald-400/18 bg-slate-950/65 p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <mode.icon size={20} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{mode.title}</h3>
                <p className="cyber-text text-sm leading-relaxed">{mode.description}</p>
              </article>
            ))}
          </div>

          <div className="cyber-grid-panel rounded-[1.7rem] border border-cyan-300/18 bg-slate-950/65 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {lang === "es" ? "Perfil de respuesta" : "Response profile"}
                </p>
                <p className="text-sm text-cyan-100/70">
                  {lang === "es" ? "Canales profesionales y disponibilidad" : "Professional channels and availability"}
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-cyan-300/15 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center gap-3 text-cyan-200">
                  <Clock3 size={16} />
                  <span className="text-sm text-cyan-100/85">
                    {lang === "es" ? "Respuesta estimada: 24 a 48 horas" : "Estimated reply: 24 to 48 hours"}
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-cyan-300/15 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center gap-3 text-cyan-200">
                  <Mail size={16} />
                  <span className="text-sm text-cyan-100/85">
                    {lang === "es" ? "Canal prioritario: correo y LinkedIn" : "Priority channel: email and LinkedIn"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="interactive-card rounded-[1.4rem] border border-emerald-400/30 bg-slate-950/55 p-5">
            <p className="mb-2 flex items-center gap-2 text-xs tracking-[0.18em] text-emerald-300">
              <Mail size={14} />
              EMAIL
            </p>
            <a className="cyber-link break-all" href="mailto:davidlszdev@gmail.com">
              davidlszdev@gmail.com
            </a>
          </article>

          <article className="interactive-card rounded-[1.4rem] border border-cyan-300/30 bg-slate-950/55 p-5">
            <p className="mb-2 flex items-center gap-2 text-xs tracking-[0.18em] text-cyan-300">
              <Linkedin size={14} />
              LINKEDIN
            </p>
            <a
              href="https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-link break-all"
            >
              {"linkedin.com/in/david-lopez-s\u00e1nchez-aa269a1b7"}
            </a>
          </article>

          <article className="interactive-card rounded-[1.4rem] border border-emerald-400/30 bg-slate-950/55 p-5">
            <p className="mb-2 flex items-center gap-2 text-xs tracking-[0.18em] text-emerald-300">
              <Github size={14} />
              GITHUB
            </p>
            <a
              href="https://github.com/davidlszz"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-link break-all"
            >
              github.com/davidlszz
            </a>
          </article>
        </div>
      </SectionCard>
    </section>
  );
}
