"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Enfoque() {
  const { lang } = useLanguage();

  return (
    <section id="focus" className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6">
      <motion.div
        className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="cyber-title mb-8 text-3xl font-bold text-white md:text-4xl">
          {lang === "es" ? "Enfoque" : "Approach"}
        </h2>

        <p className="cyber-text mb-6 text-lg leading-relaxed">
          {lang === "es"
            ? "Mi enfoque integra ciberseguridad e infraestructura desde el diseno. Analizo riesgos, superficie de ataque y dependencias operativas para construir servicios mas resistentes en entornos reales."
            : "My approach integrates cybersecurity and infrastructure from design to operations. I analyze risks, attack surface, and dependencies to build resilient services in real environments."}
        </p>

        <p className="cyber-text mb-6 text-lg leading-relaxed">
          {lang === "es"
            ? "Priorizo automatizacion, observabilidad y respuesta a incidentes como parte del ciclo de vida. Esto permite detectar desviaciones rapido y sostener continuidad operativa aun bajo eventos adversos."
            : "I prioritize automation, observability, and incident response as part of the delivery lifecycle. This improves detection speed and sustains operational continuity under stress."}
        </p>

        <p className="cyber-text text-lg leading-relaxed">
          {lang === "es"
            ? "El objetivo es aportar a equipos de infraestructura y seguridad con practicas medibles, despliegues confiables y una cultura de mejora continua."
            : "The goal is to contribute to infrastructure and security teams through measurable practices, reliable deployments, and a continuous improvement mindset."}
        </p>
      </motion.div>
    </section>
  );
}
