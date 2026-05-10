'use client'

import { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import {
  Code2,
  Stethoscope,
  Heart,
  FlaskConical,
  Microscope,
  Brain,
  Activity,
  Cpu,
  Wifi,
  CheckCircle2,
  Pill,
  Zap,
  Database,
} from 'lucide-react'

/* ─────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

/* ─────────────────────────────────────────
   ECG PULSE — animated SVG line
───────────────────────────────────────── */
function ECGLine() {
  const ecgPath =
    'M0,40 L55,40 L70,40 L82,8 L94,72 L106,8 L118,40 L140,40 ' +
    'L195,40 L210,40 L222,8 L234,72 L246,8 L258,40 L280,40 ' +
    'L335,40 L350,40 L362,8 L374,72 L386,8 L400,40'

  return (
    <svg
      viewBox="0 0 400 80"
      preserveAspectRatio="none"
      className="w-full h-14"
    >
      <motion.path
        d={ecgPath}
        fill="none"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 2.4,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0.6,
          },
          opacity: { duration: 0.4 },
        }}
      />
    </svg>
  )
}

/* ─────────────────────────────────────────
   BEATING HEART
───────────────────────────────────────── */
function BeatingHeart() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? [1, 1.22, 1, 1.16, 1] : [1, 1.1, 1, 1.06, 1] }}
      transition={{ duration: hovered ? 0.55 : 1.1, repeat: Infinity, ease: 'easeInOut' }}
      className="cursor-pointer select-none"
      aria-label="Corazón latiendo"
    >
      <Heart className="w-16 h-16 text-rose-500 fill-rose-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]" />
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   PULSING DOTS — connection line
───────────────────────────────────────── */
function PulsingDots({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: 1.6,
            delay: reversed ? (4 - i) * 0.18 : i * 0.18,
            repeat: Infinity,
          }}
          className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-rose-400"
        />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────
   PRESCRIPTION CARD
───────────────────────────────────────── */
function Prescription() {
  const today = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border-2 border-blue-100 rounded-3xl p-7 shadow-xl shadow-blue-50 max-w-md mx-auto"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm leading-tight">Dr. Dev López</p>
            <p className="text-xs text-slate-400 font-mono">Ing. de Sistemas · MP: 2024-SYS</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400 font-mono">{today}</p>
          <div className="flex items-center gap-1.5 mt-1 justify-end">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-600 font-mono">Sistema activo</span>
          </div>
        </div>
      </div>

      {/* Rx symbol */}
      <div className="text-blue-500 font-bold text-3xl mb-5 font-mono">℞</div>

      {/* Fields */}
      <div className="space-y-5 text-sm">
        <div>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">Paciente</span>
          <p className="text-slate-800 font-semibold mt-0.5 text-base">Tú 💙</p>
        </div>

        <div>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">
            Síntomas Detectados
          </span>
          <ul className="mt-2 space-y-1.5 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5 text-base leading-none">•</span>
              Sonrisas inexplicables de aparición repentina
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5 text-base leading-none">•</span>
              Arritmia leve al recibir mensajes de sistemas
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">Diagnóstico</span>
          <p className="text-blue-700 font-bold mt-1 text-base">
            Conexión compatible de alta disponibilidad
          </p>
          <p className="text-xs text-blue-400 font-mono mt-1">
            CIE-11: CONN-HA-001 · Pronóstico: Excelente
          </p>
        </div>

        <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100">
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">
            Tratamiento Sugerido
          </span>
          <p className="text-rose-700 font-bold mt-1 text-base">
            Una salida por helado/café este fin de semana
          </p>
          <p className="text-xs text-rose-400 font-mono mt-1">
            Dosis: 1 vez/semana · Vía: presencial obligatorio
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between mt-6 pt-5 border-t border-slate-100">
        <div>
          <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Firma</p>
          <p
            className="text-xl text-slate-700 italic font-bold"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Dev López
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Sello</p>
          <div className="w-14 h-14 border-2 border-dashed border-blue-300 rounded-full flex items-center justify-center">
            <Code2 className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   DIAGNOSTIC MODULE — state machine
───────────────────────────────────────── */
const STEPS = [
  'Escaneando frecuencia cardíaca...',
  'Analizando compatibilidad neural...',
  'Procesando datos biométricos...',
  'Calculando índice de conexión...',
  'Generando diagnóstico final...',
]

function DiagnosticModule() {
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const [stepIndex, setStepIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  async function runDiagnostic() {
    if (phase !== 'idle') return
    setPhase('running')
    setProgress(0)

    for (let i = 0; i < STEPS.length; i++) {
      setStepIndex(i)
      await new Promise<void>((r) => setTimeout(r, 820))
      setProgress(((i + 1) / STEPS.length) * 100)
    }

    await new Promise<void>((r) => setTimeout(r, 350))
    setPhase('done')
  }

  function reset() {
    setPhase('idle')
    setProgress(0)
    setStepIndex(0)
  }

  return (
    <div className="max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {phase === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Activity className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Módulo de Diagnóstico</h3>
            <p className="text-slate-400 text-sm mb-8 font-mono">
              Sistema de análisis interpersonal v2.0.24
            </p>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(59,130,246,0.3)' }}
              whileTap={{ scale: 0.96 }}
              onClick={runDiagnostic}
              className="bg-blue-500 text-white px-8 py-3.5 rounded-2xl font-semibold text-sm shadow-md shadow-blue-200 hover:bg-blue-600 transition-colors"
            >
              Iniciar Chequeo de Conexión
            </motion.button>
          </motion.div>
        )}

        {phase === 'running' && (
          <motion.div
            key="running"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-blue-100 border-t-blue-500 rounded-full mx-auto mb-5"
              />
              <p className="text-slate-700 font-semibold text-sm">{STEPS[stepIndex]}</p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 mb-1.5 overflow-hidden">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-rose-500"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-slate-400 text-right font-mono mb-6">{Math.round(progress)}%</p>

            {/* Step list */}
            <div className="space-y-2">
              {STEPS.map((step, i) => {
                const done = progress >= ((i + 1) / STEPS.length) * 100
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: done ? 1 : 0.28 }}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <CheckCircle2
                      className={`w-3.5 h-3.5 shrink-0 ${done ? 'text-green-500' : 'text-slate-300'}`}
                    />
                    {step}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {phase === 'done' && (
          <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Prescription />
            <div className="text-center mt-5">
              <button
                onClick={reset}
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline underline-offset-4 font-mono"
              >
                Ejecutar nuevo diagnóstico
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
type Status = 'Publicado' | 'En curso' | 'Planificado'

interface Project {
  tag: string
  title: string
  description: string
  icon: React.ElementType
  status: Status
}

const STATUS_STYLES: Record<Status, string> = {
  Publicado: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'En curso': 'bg-amber-50 text-amber-600 border-amber-100',
  Planificado: 'bg-slate-100 text-slate-500 border-slate-200',
}

function ProjectCard({ tag, title, description, icon: Icon, status }: Project) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const background = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.06), transparent)`

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
      className="relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
            <Icon className="w-5 h-5 text-blue-500" />
          </div>
          <span
            className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${STATUS_STYLES[status]}`}
          >
            {status}
          </span>
        </div>
        <p className="text-[10px] text-blue-400 font-mono mb-1.5 uppercase tracking-widest">{tag}</p>
        <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors text-sm">
          {title}
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   PROJECTS DATA
───────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    tag: 'Investigación Clínica #001',
    title: 'SaludSync API',
    description:
      'Sistema de gestión clínica con endpoints RESTful para historiales médicos y agenda de citas en tiempo real.',
    icon: Stethoscope,
    status: 'Publicado',
  },
  {
    tag: 'Investigación Clínica #002',
    title: 'NeuroNet Dashboard',
    description:
      'Visualización de datos neurológicos con WebSockets, gráficas interactivas y alertas automáticas.',
    icon: Brain,
    status: 'En curso',
  },
  {
    tag: 'Investigación Clínica #003',
    title: 'RxCodeParser',
    description:
      'Procesamiento inteligente de recetas médicas con NLP para automatizar la transcripción digital.',
    icon: Pill,
    status: 'Publicado',
  },
  {
    tag: 'Investigación Clínica #004',
    title: 'BioData Lab',
    description:
      'Pipeline de análisis estadístico para estudios clínicos con visualización de resultados y exportación.',
    icon: FlaskConical,
    status: 'En curso',
  },
  {
    tag: 'Investigación Clínica #005',
    title: 'MedConnect Platform',
    description:
      'Red profesional para equipos de salud con sistema de consultas entre especialidades y videollamadas.',
    icon: Wifi,
    status: 'Planificado',
  },
  {
    tag: 'Investigación Clínica #006',
    title: 'DiagnosticAI',
    description:
      'Asistente de diagnóstico diferencial basado en ML, entrenado con datos clínicos anonimizados.',
    icon: Microscope,
    status: 'Planificado',
  },
]

/* ─────────────────────────────────────────
   TERMINAL LINE — animated typing
───────────────────────────────────────── */
function TerminalLine({
  children,
  color = 'text-slate-300',
  delay = 0,
  prefix = '>',
}: {
  children: React.ReactNode
  color?: string
  delay?: number
  prefix?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`flex items-center gap-2 font-mono text-sm ${color}`}
    >
      <span className="text-slate-500 select-none">{prefix}</span>
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ParaEllaPage() {
  return (
    <main className="min-h-screen bg-slate-50" style={{ fontFamily: 'var(--font-sora), Inter, sans-serif' }}>

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden">
        {/* Ambient blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[440px] h-[440px] bg-rose-100/50 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Connection visual */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-14 flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-slate-200 border border-slate-100 flex items-center justify-center"
            >
              <Stethoscope className="w-10 h-10 text-blue-400" />
            </motion.div>

            <PulsingDots />
            <BeatingHeart />
            <PulsingDots reversed />

            <motion.div
              whileHover={{ scale: 1.08, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-slate-200 border border-slate-100 flex items-center justify-center"
            >
              <Code2 className="w-10 h-10 text-rose-400" />
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-xs font-mono px-4 py-2 rounded-full shadow-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Connection.status(&quot;Established&quot;) ✓
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-7"
          >
            Donde la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              medicina
            </span>
            <br />
            se encuentra{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">
              el código
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-11 leading-relaxed"
          >
            Hay cosas que los sistemas no pueden calcular fácilmente.
            Pero el margen de error contigo es{' '}
            <span className="text-rose-400 font-semibold">aproximadamente cero</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
            <motion.a
              href="#diagnostic"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-md shadow-blue-200 transition-colors"
            >
              <Activity className="w-4 h-4" />
              Iniciar Diagnóstico
            </motion.a>
            <motion.a
              href="#lab"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-sm border border-slate-200 transition-colors"
            >
              <FlaskConical className="w-4 h-4" />
              Ver el Lab
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── DIAGNOSTIC ───────────────────────── */}
      <section
        id="diagnostic"
        className="py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-white"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="inline-block bg-rose-50 text-rose-500 text-xs font-mono px-4 py-2 rounded-full mb-5 border border-rose-100">
              Módulo Experimental · v2.0.24
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Diagnóstico Interactivo
            </h2>
            <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
              Sistema avanzado de análisis de compatibilidad. Los resultados son
              <span className="text-blue-500 font-medium"> clínicamente irrefutables</span>.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <DiagnosticModule />
          </motion.div>
        </motion.div>
      </section>

      {/* ── ENGINEERING LAB ───────────────────── */}
      <section id="lab" className="py-24 px-6 bg-white">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-mono px-4 py-2 rounded-full mb-5 border border-blue-100">
              The Engineering Lab
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Investigaciones Clínicas
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-rose-500">
                de Software
              </span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
              Cada proyecto es un ensayo clínico. Hipótesis, iteración y resultados medibles.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {PROJECTS.map((p, i) => (
              <motion.div key={i} variants={fadeUp}>
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer className="bg-slate-900 text-white pt-16 pb-10 px-6">
        <div className="max-w-4xl mx-auto">

          {/* ECG line */}
          <div className="mb-10 opacity-50">
            <ECGLine />
          </div>

          {/* Terminal window */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 mb-10">
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-slate-500 text-xs font-mono ml-2">
                terminal — sistema-afecto — bash
              </span>
            </div>

            {/* Lines */}
            <div className="space-y-3">
              <TerminalLine prefix="$" color="text-slate-300" delay={0.2}>
                <span className="text-blue-300">node</span>{' '}
                <span className="text-slate-300">diagnóstico.js</span>
              </TerminalLine>

              <TerminalLine color="text-green-400" delay={0.8}>
                System.status(
                <span className="text-amber-300">&quot;All heartbeats normal&quot;</span>) ✓
              </TerminalLine>

              <TerminalLine color="text-blue-400" delay={1.3}>
                Connection.uptime(
                <span className="text-amber-300">&quot;∞ ms&quot;</span>)
              </TerminalLine>

              <TerminalLine color="text-rose-400" delay={1.8}>
                Heart.rate(
                <span className="text-amber-300">&quot;optimal&quot;</span>) →{' '}
                <span className="text-slate-400">{'{ errors: 0, warnings: 0 }'}</span>
              </TerminalLine>

              <TerminalLine color="text-slate-300" delay={2.3}>
                <Cpu className="w-3.5 h-3.5 text-slate-400" />
                Compilado con afecto y{' '}
                <span className="text-green-400 font-semibold">0</span> errores de sintaxis.
              </TerminalLine>

              {/* Blinking cursor */}
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-slate-500">$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                  className="inline-block w-2.5 h-5 bg-green-400 rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Dev López</p>
                <p className="text-slate-500 text-xs font-mono">Ingeniería de Sistemas</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              Hecho con amor y TypeScript
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            </div>

            <div className="text-right">
              <p className="text-slate-500 text-xs font-mono">
                Build: {new Date().getFullYear()}.stable
              </p>
              <p className="text-slate-600 text-xs">MIT License · Open Heart</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
