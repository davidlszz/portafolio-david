"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6">
      <FadeInSection>
        <div className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12">
          <h2 className="cyber-title mb-8 text-3xl font-bold text-white md:text-4xl">
            {lang === "es" ? "Sobre mi" : "About me"}
          </h2>

          <p className="cyber-text text-lg leading-relaxed">
            {lang === "es"
              ? "Soy estudiante de ingenieria de sistemas con foco en redes, infraestructura y seguridad operacional. Trabajo con protocolos como TLS y SSH, buenas practicas de hardening en Linux y despliegues controlados en entornos VPS."
              : "I am a systems engineering student focused on networking, infrastructure, and operational security. I work with protocols such as TLS and SSH, Linux hardening practices, and controlled deployments on VPS environments."}
          </p>

          <p className="cyber-text mt-6 text-lg leading-relaxed">
            {lang === "es"
              ? "Actualmente fortalezco procesos de CI/CD, monitoreo y analisis de logs para reducir superficie de ataque y mejorar disponibilidad. Mi objetivo es evolucionar a roles de ciberseguridad defensiva y confiabilidad sobre plataformas cloud."
              : "I am currently strengthening CI/CD processes, monitoring, and log analysis to reduce attack surface and improve availability. My goal is to evolve into defensive cybersecurity and reliability roles on cloud platforms."}
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
