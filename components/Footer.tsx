"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const footerSignals = {
  es: [
    "Infraestructura segura",
    "Automatización operativa",
    "Observabilidad práctica",
  ],
  en: [
    "Secure infrastructure",
    "Operational automation",
    "Practical observability",
  ],
} as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const signals = footerSignals[lang];

  return (
    <footer className="relative z-10 px-4 pb-8 md:px-6">
      <div className="section-shell mx-auto max-w-6xl rounded-[2rem] p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <h3 className="cyber-title mb-4 text-2xl font-bold text-white md:text-3xl">
              {lang === "es" ? "Ingeniería de sistemas con enfoque en redes" : "Systems engineering with a networking focus"}
            </h3>

            <p className="cyber-text max-w-2xl text-base leading-relaxed">
              {lang === "es"
                ? "Este portfolio documenta una dirección clara: construir sistemas más seguros, observables y confiables, con criterio técnico y ejecución disciplinada."
                : "This portfolio documents a clear direction: building more secure, observable, and reliable systems with technical judgment and disciplined execution."}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-xs text-cyan-100/80"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-full rounded-[1.4rem] border border-cyan-300/18 bg-slate-950/65 p-5">
              <p className="mb-3 text-xs tracking-[0.24em] text-cyan-100/65">
                {lang === "es" ? "NAVEGACIÓN" : "NAVIGATION"}
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

            <div className="h-full rounded-[1.4rem] border border-emerald-400/18 bg-slate-950/65 p-5">
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

        <div className="mt-8 flex flex-col gap-3 border-t border-cyan-300/12 pt-5 text-xs text-cyan-100/60 md:flex-row md:items-center md:justify-between">
          <p>
            {"\u00a9"} {year} David {"L\u00f3pez S\u00e1nchez"} {"//"}{" "}
            {lang === "es" ? "Ingeniería de sistemas | Redes" : "Systems engineering | Networking"}
          </p>
          <p>{lang === "es" ? "Construido con foco en claridad, señal y criterio técnico." : "Built with a focus on clarity, signal, and technical judgment."}</p>
        </div>
      </div>
    </footer>
  );
}
