"use client";

import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
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
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/18 bg-emerald-400/8 px-4 py-2 text-[11px] tracking-[0.2em] text-emerald-200">
              <ShieldCheck size={14} />
              {lang === "es" ? "CIERRE DE PORTFOLIO" : "PORTFOLIO CLOSE"}
            </div>

            <h3 className="cyber-title mb-4 text-2xl font-bold text-white md:text-3xl">
              {lang === "es" ? "Ingeniería defensiva con enfoque operativo" : "Defensive engineering with operational focus"}
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

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.4rem] border border-cyan-300/18 bg-slate-950/65 p-5">
              <p className="mb-3 text-xs tracking-[0.24em] text-cyan-100/65">
                {lang === "es" ? "NAVEGACIÓN" : "NAVIGATION"}
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a href="#home" className="cyber-link inline-flex items-center justify-between">
                  <span>{lang === "es" ? "Inicio" : "Home"}</span>
                  <ArrowUpRight size={14} />
                </a>
                <a href="#projects" className="cyber-link inline-flex items-center justify-between">
                  <span>{lang === "es" ? "Proyectos" : "Projects"}</span>
                  <ArrowUpRight size={14} />
                </a>
                <a href="#contact" className="cyber-link inline-flex items-center justify-between">
                  <span>{lang === "es" ? "Contacto" : "Contact"}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-emerald-400/18 bg-slate-950/65 p-5">
              <p className="mb-3 text-xs tracking-[0.24em] text-cyan-100/65">
                {lang === "es" ? "CANALES" : "CHANNELS"}
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="mailto:davidlszdev@gmail.com"
                  className="cyber-link inline-flex items-center justify-between"
                >
                  <span>Email</span>
                  <Mail size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-link inline-flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://github.com/davidlszz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-link inline-flex items-center justify-between"
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
            {lang === "es" ? "Ingeniería defensiva" : "Defensive engineering"}
          </p>
          <p>{lang === "es" ? "Construido con foco en claridad, señal y criterio técnico." : "Built with a focus on clarity, signal, and technical judgment."}</p>
        </div>
      </div>
    </footer>
  );
}
