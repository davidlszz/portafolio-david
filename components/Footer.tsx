"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import { useLanguage } from "./LanguageContext";
import SectionCard from "./SectionCard";
import StarBorder from "./StarBorder";

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();

  return (
    <footer className="relative z-10 px-4 pb-8 md:px-6">
      <SectionCard accent="mixed" depth={6}>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
          <AnimatedContent>
            <p className="eyebrow mb-4 text-xs text-white/42">
              {lang === "es" ? "Cierre / portfolio" : "Closing / portfolio"}
            </p>
            <h3 className="max-w-[18ch] text-3xl font-semibold text-white md:text-4xl">
              {lang === "es"
                ? "Infraestructura segura, visible y defendible."
                : "Secure, visible, and defensible infrastructure."}
            </h3>
            <p className="section-copy mt-4 max-w-2xl text-base leading-relaxed">
              {lang === "es"
                ? "Este portafolio esta pensado como un sistema: contenido tecnico, direccion visual y narrativa profesional trabajando juntos."
                : "This portfolio is designed as a system: technical content, visual direction, and professional narrative working together."}
            </p>
          </AnimatedContent>

          <AnimatedContent delay={0.08} className="flex flex-wrap items-center gap-3 xl:justify-end">
            <a
              href="mailto:davidlszdev@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white transition hover:bg-white/9"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white transition hover:bg-white/9"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/davidlszz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white transition hover:bg-white/9"
            >
              <Github size={16} />
              GitHub
            </a>
            <StarBorder as="a" href="#home" className="star-border-cta" color="#8cb7aa" speed="9s">
              <span className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white">
                <ArrowUpRight size={16} />
                {lang === "es" ? "Volver arriba" : "Back to top"}
              </span>
            </StarBorder>
          </AnimatedContent>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/8 pt-5 text-center text-xs text-white/42 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            {"\u00a9"} {year} David Lopez Sanchez
          </p>
          <p>
            {lang === "es"
              ? "Disenado para mostrar criterio tecnico, no solo herramientas."
              : "Designed to show technical judgment, not just tools."}
          </p>
        </div>
      </SectionCard>
    </footer>
  );
}
