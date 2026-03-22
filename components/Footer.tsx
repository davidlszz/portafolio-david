"use client";

import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Workflow } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import LogoLoop from "./LogoLoop";
import SectionCard from "./SectionCard";

const footerSignals = {
  es: [
    { label: "Infraestructura segura", icon: <ShieldCheck size={16} /> },
    { label: "Automatización operativa", icon: <Workflow size={16} /> },
    { label: "Observabilidad práctica", icon: <ArrowUpRight size={16} /> },
    { label: "GitHub", icon: <Github size={16} /> },
    { label: "LinkedIn", icon: <Linkedin size={16} /> },
    { label: "Email", icon: <Mail size={16} /> },
  ],
  en: [
    { label: "Secure infrastructure", icon: <ShieldCheck size={16} /> },
    { label: "Operational automation", icon: <Workflow size={16} /> },
    { label: "Practical observability", icon: <ArrowUpRight size={16} /> },
    { label: "GitHub", icon: <Github size={16} /> },
    { label: "LinkedIn", icon: <Linkedin size={16} /> },
    { label: "Email", icon: <Mail size={16} /> },
  ],
} as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const signals = footerSignals[lang];

  return (
    <footer className="relative z-10 px-4 pb-8 md:px-6">
      <SectionCard accent="mixed" depth={6}>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-start">
          <div className="text-center xl:text-left">
            <h3 className="cyber-title mb-4 text-2xl font-bold text-white md:text-3xl">
              {lang === "es" ? "Ingeniería de sistemas con enfoque en redes" : "Systems engineering with a networking focus"}
            </h3>

            <p className="cyber-text mx-auto max-w-2xl text-base leading-relaxed xl:mx-0">
              {lang === "es"
                ? "Este portfolio documenta una dirección clara: construir sistemas más seguros, observables y confiables, con criterio técnico y ejecución disciplinada."
                : "This portfolio documents a clear direction: building more secure, observable, and reliable systems with technical judgment and disciplined execution."}
            </p>

            <div className="mt-5">
              <LogoLoop items={signals} duration={24} reverse />
            </div>

            <div className="mt-6">
              <a
                href="#home"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs tracking-[0.18em] text-cyan-100/80 transition hover:bg-cyan-300/14"
              >
                <ArrowUpRight size={14} />
                {lang === "es" ? "Volver arriba" : "Back to top"}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-full rounded-[1.45rem] border border-cyan-300/18 bg-slate-950/65 p-5">
              <p className="mb-3 text-xs tracking-[0.24em] text-cyan-100/65">
                {lang === "es" ? "NAVEGACION" : "NAVIGATION"}
              </p>
              <div className="grid gap-2.5 text-sm">
                <a
                  href="#home"
                  className="cyber-link inline-flex items-center justify-between rounded-xl border border-cyan-300/12 bg-slate-900/70 px-3 py-2.5"
                >
                  <span>{lang === "es" ? "Inicio" : "Home"}</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="#projects"
                  className="cyber-link inline-flex items-center justify-between rounded-xl border border-cyan-300/12 bg-slate-900/70 px-3 py-2.5"
                >
                  <span>{lang === "es" ? "Proyectos" : "Projects"}</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="#contact"
                  className="cyber-link inline-flex items-center justify-between rounded-xl border border-cyan-300/12 bg-slate-900/70 px-3 py-2.5"
                >
                  <span>{lang === "es" ? "Contacto" : "Contact"}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="h-full rounded-[1.45rem] border border-emerald-400/18 bg-slate-950/65 p-5">
              <p className="mb-3 text-xs tracking-[0.24em] text-cyan-100/65">
                {lang === "es" ? "CANALES" : "CHANNELS"}
              </p>
              <div className="grid gap-2.5 text-sm">
                <a
                  href="mailto:davidlszdev@gmail.com"
                  className="cyber-link inline-flex items-center justify-between rounded-xl border border-emerald-400/12 bg-slate-900/70 px-3 py-2.5"
                >
                  <span>Email</span>
                  <Mail size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-link inline-flex items-center justify-between rounded-xl border border-emerald-400/12 bg-slate-900/70 px-3 py-2.5"
                >
                  <span>LinkedIn</span>
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://github.com/davidlszz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-link inline-flex items-center justify-between rounded-xl border border-emerald-400/12 bg-slate-900/70 px-3 py-2.5"
                >
                  <span>GitHub</span>
                  <Github size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-cyan-300/12 pt-5 text-center text-xs text-cyan-100/60 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            {"\u00a9"} {year} David {"L\u00f3pez S\u00e1nchez"} {"//"}{" "}
            {lang === "es" ? "Ingeniería de sistemas | Redes" : "Systems engineering | Networking"}
          </p>
          <p>
            {lang === "es"
              ? "Construido con foco en claridad, señal y criterio técnico."
              : "Built with a focus on clarity, signal, and technical judgment."}
          </p>
        </div>
      </SectionCard>
    </footer>
  );
}
