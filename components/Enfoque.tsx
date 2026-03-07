"use client";

import { motion } from "framer-motion";

export default function Enfoque() {
  return (
    <section id="focus" className="flex min-h-screen scroll-mt-28 items-center px-6 py-20">
      <motion.div
        className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="cyber-title mb-8 text-3xl font-bold text-white md:text-4xl">Enfoque</h2>

        <p className="cyber-text mb-6 text-lg leading-relaxed">
          Mi enfoque integra ciberseguridad e infraestructura desde el diseno.
          Analizo riesgos, superficie de ataque y dependencias operativas para construir
          servicios mas resistentes en entornos reales.
        </p>

        <p className="cyber-text mb-6 text-lg leading-relaxed">
          Priorizo automatizacion, observabilidad y respuesta a incidentes como parte del
          ciclo de vida. Esto permite detectar desviaciones rapido y sostener continuidad
          operativa aun bajo eventos adversos.
        </p>

        <p className="cyber-text text-lg leading-relaxed">
          El objetivo es aportar a equipos de infraestructura y seguridad con practicas
          medibles, despliegues confiables y una cultura de mejora continua.
        </p>
      </motion.div>
    </section>
  );
}
