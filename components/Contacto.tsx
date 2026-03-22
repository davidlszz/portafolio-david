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
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import { useLanguage } from "./LanguageContext";
import Lanyard from "./Lanyard";
import LogoLoop from "./LogoLoop";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";

const contactSignals = {
  es: [
    { label: "Infraestructura segura", icon: <ShieldCheck size={16} /> },
    { label: "Automatización y CI/CD", icon: <Workflow size={16} /> },
    { label: "Observabilidad y operación", icon: <TerminalSquare size={16} /> },
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
  const role = lang === "es" ? "Ingeniero de sistemas" : "Systems engineer";

  return (
    <section
      id="contact"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="cyan" depth={5}>
        <div className="mb-8 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] xl:items-start">
          <AnimatedContent className="mx-auto max-w-3xl text-center xl:mx-0 xl:text-left">
            <p className="mb-3 text-xs tracking-[0.3em] text-cyan-300/82">
              {lang === "es" ? "COLABORACIÓN Y CONTACTO" : "COLLABORATION AND CONTACT"}
            </p>
            <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
              {lang === "es" ? "Colaboración y contacto" : "Collaboration and contact"}
            </h2>

            <p className="cyber-text text-lg leading-relaxed">
              {lang === "es"
                ? "Estoy interesado en colaborar en iniciativas donde infraestructura, seguridad y operación se crucen de forma real: despliegues confiables, hardening, observabilidad, automatización y mejora continua de plataformas."
                : "I am interested in collaborating on initiatives where infrastructure, security, and operations intersect in real ways: reliable deployments, hardening, observability, automation, and continuous platform improvement."}
            </p>

            <div className="mt-6">
              <FadeContent>
                <LogoLoop items={signals} duration={23} />
              </FadeContent>
            </div>
          </AnimatedContent>

          <AnimatedContent className="space-y-6" delay={0.08}>
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
                <div className="rounded-[1.1rem] border border-cyan-300/15 bg-slate-900/80 px-4 py-4">
                  <div className="flex items-center gap-3 text-cyan-200">
                    <Clock3 size={16} />
                    <span className="text-sm text-cyan-100/85">
                      {lang === "es" ? "Respuesta estimada: 24 a 48 horas" : "Estimated reply: 24 to 48 hours"}
                    </span>
                  </div>
                </div>
                <div className="rounded-[1.1rem] border border-cyan-300/15 bg-slate-900/80 px-4 py-4">
                  <div className="flex items-center gap-3 text-cyan-200">
                    <Mail size={16} />
                    <span className="text-sm text-cyan-100/85">
                      {lang === "es" ? "Canal prioritario: correo y LinkedIn" : "Priority channel: email and LinkedIn"}
                    </span>
                  </div>
                </div>
                <div className="rounded-[1.1rem] border border-cyan-300/15 bg-slate-900/80 px-4 py-4">
                  <div className="flex items-center gap-3 text-cyan-200">
                    <Workflow size={16} />
                    <span className="text-sm text-cyan-100/85">
                      {lang === "es"
                        ? "Abierto a proyectos, prácticas y colaboración"
                        : "Open to projects, internships, and collaboration"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Lanyard
              name={"David L\u00f3pez S\u00e1nchez"}
              role={role}
              imageSrc="/profile-photo.jpg"
              compact
            />
          </AnimatedContent>
        </div>

        <div className="mb-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {modes.map((mode, index) => (
            <ScrollStack key={mode.title} depth={index + 1}>
              <FadeContent delay={0.06 * index}>
                <article className="interactive-card flex h-full flex-col rounded-[1.7rem] border border-emerald-400/18 bg-slate-950/65 p-6">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <mode.icon size={22} />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-white">{mode.title}</h3>
                  <p className="cyber-text text-base leading-relaxed">{mode.description}</p>
                </article>
              </FadeContent>
            </ScrollStack>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              label: "EMAIL",
              href: "mailto:davidlszdev@gmail.com",
              text: "davidlszdev@gmail.com",
              icon: Mail,
              borderClass: "border-emerald-400/22",
              textClass: "text-emerald-300",
            },
            {
              label: "LINKEDIN",
              href: "https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7",
              text: "linkedin.com/in/david-lopez-sánchez-aa269a1b7",
              icon: Linkedin,
              borderClass: "border-cyan-300/22",
              textClass: "text-cyan-300",
            },
            {
              label: "GITHUB",
              href: "https://github.com/davidlszz",
              text: "github.com/davidlszz",
              icon: Github,
              borderClass: "border-emerald-400/22",
              textClass: "text-emerald-300",
            },
          ].map((item, index) => (
            <ScrollStack key={item.label} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <article className={`interactive-card rounded-[1.5rem] border bg-slate-950/55 p-5 ${item.borderClass}`}>
                  <p className={`mb-3 flex items-center gap-2 text-xs tracking-[0.18em] ${item.textClass}`}>
                    <item.icon size={14} />
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="cyber-link break-all text-base"
                  >
                    {item.text}
                  </a>
                </article>
              </FadeContent>
            </ScrollStack>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
