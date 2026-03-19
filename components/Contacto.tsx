"use client";

import FadeInSection from "./FadeInSection";
import { Clock3, Github, Linkedin, Mail, ShieldCheck, TerminalSquare, Workflow } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const contactSignals = {
  es: [
    "Infraestructura segura",
    "Automatización y CI/CD",
    "Observabilidad y operación",
    "Hardening y confiabilidad",
  ],
  en: [
    "Secure infrastructure",
    "Automation and CI/CD",
    "Observability and operations",
    "Hardening and reliability",
  ],
} as const;

const collaborationModes = {
  es: [
    {
      title: "Proyectos técnicos",
      description: "Diseño, hardening, automatización y mejora continua sobre plataformas y servicios.",
      icon: ShieldCheck,
    },
    {
      title: "Laboratorios y práctica",
      description: "Construcción de entornos controlados para observabilidad, segmentación y validación de controles.",
      icon: TerminalSquare,
    },
    {
      title: "Entrega operativa",
      description: "Apoyo en documentación, runbooks, flujos CI/CD y trazabilidad de cambios.",
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
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6"
    >
      <FadeInSection>
        <div className="section-shell mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-cyan-300/85">
                {lang === "es" ? "COLABORACIÓN Y CONTACTO" : "COLLABORATION AND CONTACT"}
              </p>
              <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
                {lang === "es" ? "Contacto" : "Contact"}
              </h2>

              <p className="cyber-text text-lg leading-relaxed">
                {lang === "es"
                  ? "Estoy interesado en colaborar en iniciativas donde infraestructura, seguridad y operación se crucen de forma real: despliegues confiables, hardening, observabilidad, automatización y mejora continua de plataformas."
                  : "I am interested in collaborating on initiatives where infrastructure, security, and operations intersect in real ways: reliable deployments, hardening, observability, automation, and continuous platform improvement."}
              </p>

              <p className="cyber-text mt-6 text-lg leading-relaxed">
                {lang === "es"
                  ? "Si tu equipo necesita una persona con mentalidad analítica, foco en trazabilidad técnica y capacidad para aprender rápido en entornos modernos, estos son mis canales principales para conversar sobre oportunidades, proyectos o colaboración."
                  : "If your team needs someone with an analytical mindset, a focus on technical traceability, and the ability to learn quickly in modern environments, these are my main channels for discussing opportunities, projects, or collaboration."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs text-cyan-100/85"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="cyber-grid-panel rounded-[1.6rem] border border-cyan-300/18 bg-slate-950/65 p-6">
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

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {modes.map((mode) => (
              <article
                key={mode.title}
                className="interactive-card rounded-[1.4rem] border border-emerald-400/18 bg-slate-950/65 p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <mode.icon size={20} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{mode.title}</h3>
                <p className="cyber-text text-sm leading-relaxed">{mode.description}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="interactive-card rounded-xl border border-emerald-400/30 bg-slate-950/55 p-5">
              <p className="mb-2 flex items-center gap-2 text-xs tracking-[0.18em] text-emerald-300">
                <Mail size={14} />
                EMAIL
              </p>
              <a className="cyber-link break-all" href="mailto:davidlszdev@gmail.com">
                davidlszdev@gmail.com
              </a>
            </article>

            <article className="interactive-card rounded-xl border border-cyan-300/30 bg-slate-950/55 p-5">
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

            <article className="interactive-card rounded-xl border border-emerald-400/30 bg-slate-950/55 p-5">
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
        </div>
      </FadeInSection>
    </section>
  );
}
