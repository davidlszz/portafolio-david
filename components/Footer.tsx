"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();

  return (
    <footer className="relative z-10 px-4 pb-8 md:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-xl border border-cyan-300/25 bg-slate-950/70 px-5 py-4 text-xs text-cyan-100/75 md:flex-row md:items-center md:justify-between">
        <p>
          (c) {year} David Lopez Sanchez // {lang === "es" ? "Ingenieria defensiva" : "Defensive engineering"}
        </p>
        <div className="flex items-center gap-4">
          <a href="#home" className="cyber-link">
            {lang === "es" ? "Inicio" : "Home"}
          </a>
          <a href="#projects" className="cyber-link">
            {lang === "es" ? "Proyectos" : "Projects"}
          </a>
          <a href="#contact" className="cyber-link">
            {lang === "es" ? "Contacto" : "Contact"}
          </a>
        </div>
      </div>
    </footer>
  );
}
