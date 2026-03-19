"use client";

import FadeInSection from "./FadeInSection";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Contacto() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6"
    >
      <FadeInSection>
        <div className="section-shell mx-auto w-full max-w-5xl rounded-2xl p-8 md:p-12">
          <h2 className="cyber-title mb-8 text-3xl font-bold text-white md:text-4xl">
            {lang === "es" ? "Contacto" : "Contact"}
          </h2>

          <p className="cyber-text mb-10 text-lg leading-relaxed">
            {lang === "es"
              ? "Si quieres colaborar en proyectos de ciberseguridad, infraestructura o confiabilidad, puedes contactarme por estos canales."
              : "If you want to collaborate on cybersecurity, infrastructure, or reliability projects, you can reach me through these channels."}
          </p>

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
