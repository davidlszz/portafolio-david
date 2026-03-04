"use client";

import { motion } from "framer-motion";


export default function Enfoque() {
  return (
    <section className="min-h-screen bg-black text-white px-6 flex items-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10">
          Enfoque
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Mi interés principal está en comprender cómo funcionan los sistemas
          desde la capa de red hasta la entrega de aplicaciones en producción.
          Analizo la interacción entre protocolos, servidores, infraestructura
          y procesos de despliegue como un ecosistema completo.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Considero la automatización, la observabilidad y la confiabilidad
          como pilares fundamentales en el diseño de sistemas modernos.
          Reducir la intervención manual, medir el comportamiento del sistema
          y minimizar el MTTR son aspectos clave para construir entornos
          resilientes y seguros.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Mi objetivo es evolucionar hacia roles enfocados en infraestructura,
          cloud y Site Reliability Engineering, participando en la construcción
          y mantenimiento de plataformas escalables y altamente disponibles.
        </p>
      </motion.div>
    </section>
  );
}