'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Code2,
  Stethoscope,
  Heart,
  Activity,
  CheckCircle2,
  Sparkles,
  Phone,
} from 'lucide-react'
import confetti from 'canvas-confetti'

/* ─────────────────────────────────────────
   VARIANTS
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

/* ─────────────────────────────────────────
   CONFETTI
───────────────────────────────────────── */
function fireConfetti() {
  const colors = ['#3b82f6', '#f43f5e', '#a855f7', '#f59e0b', '#10b981']
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 }, colors, scalar: 1.1 })
  setTimeout(() => {
    confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors })
    confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors })
  }, 250)
}

/* ─────────────────────────────────────────
   GIFT BOX REVEAL
───────────────────────────────────────── */
function GiftReveal({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState<'idle' | 'shaking' | 'opening' | 'done'>('idle')

  const handleClick = useCallback(async () => {
    if (phase !== 'idle') return
    setPhase('shaking')
    await new Promise<void>((r) => setTimeout(r, 700))
    setPhase('opening')
    fireConfetti()
    await new Promise<void>((r) => setTimeout(r, 900))
    setPhase('done')
    await new Promise<void>((r) => setTimeout(r, 300))
    onOpen()
  }, [phase, onOpen])

  return (
    <motion.div
      key="gift"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 overflow-hidden w-screen h-screen"
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#f43f5e' : '#a855f7',
            left: `${(i * 37 + 5) % 95}%`,
            top: `${(i * 53 + 10) % 90}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5 + (i % 4) * 0.7, delay: i * 0.18, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-amber-400 font-mono text-sm tracking-widest uppercase">20 de Mayo</span>
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Tienes un regalo
        </h1>
        <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xs mx-auto">
          Haz clic en la caja para abrirlo 🎁
        </p>
      </motion.div>

      <motion.button
        onClick={handleClick}
        disabled={phase !== 'idle'}
        className="relative focus:outline-none cursor-pointer select-none"
        aria-label="Abrir regalo de cumpleaños"
        animate={
          phase === 'shaking'
            ? { rotate: [0, -8, 8, -6, 6, -3, 3, 0], scale: [1, 1.04, 1.04, 1.04, 1] }
            : phase === 'opening'
            ? { scale: [1, 1.08, 0.95] }
            : { scale: 1, rotate: 0 }
        }
        transition={{ duration: 0.6 }}
        whileHover={phase === 'idle' ? { scale: 1.06, y: -4 } : {}}
        whileTap={phase === 'idle' ? { scale: 0.97 } : {}}
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="80" width="140" height="90" rx="6" fill="url(#boxGrad)" />
          <rect x="20" y="80" width="140" height="14" rx="3" fill="#3b82f6" opacity="0.4" />
          <rect x="82" y="80" width="16" height="90" fill="#f43f5e" opacity="0.9" />
          <motion.g
            animate={phase === 'opening' || phase === 'done' ? { y: -90, rotate: -25, opacity: 0 } : { y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: '90px', originY: '80px' }}
          >
            <rect x="12" y="58" width="156" height="26" rx="5" fill="url(#lidGrad)" />
            <rect x="82" y="58" width="16" height="26" fill="#f43f5e" opacity="0.9" />
          </motion.g>
          <motion.g
            animate={phase === 'opening' || phase === 'done' ? { y: -100, opacity: 0, scale: 0.5 } : { y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeIn' }}
          >
            <ellipse cx="72" cy="48" rx="20" ry="12" fill="#f43f5e" transform="rotate(-20 72 48)" />
            <ellipse cx="72" cy="48" rx="13" ry="7" fill="#e11d48" transform="rotate(-20 72 48)" />
            <ellipse cx="108" cy="48" rx="20" ry="12" fill="#f43f5e" transform="rotate(20 108 48)" />
            <ellipse cx="108" cy="48" rx="13" ry="7" fill="#e11d48" transform="rotate(20 108 48)" />
            <circle cx="90" cy="52" r="10" fill="#f43f5e" />
            <circle cx="90" cy="52" r="6" fill="#fb7185" />
          </motion.g>
          <motion.text
            x="90" y="135" textAnchor="middle" fontSize="36"
            initial={{ opacity: 0, scale: 0 }}
            animate={phase === 'opening' || phase === 'done' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            style={{ originX: '90px', originY: '130px' }}
          >💙</motion.text>
          <defs>
            <linearGradient id="boxGrad" x1="20" y1="80" x2="160" y2="170" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1d4ed8" /><stop offset="1" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="lidGrad" x1="12" y1="58" x2="168" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb" /><stop offset="1" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 text-slate-600 text-xs font-mono"
      >
        {'// Feliz cumpleaños 🎂'}
      </motion.p>
    </motion.div>
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
    >
      <Heart className="w-16 h-16 text-rose-500 fill-rose-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]" />
    </motion.div>
  )
}

function PulsingDots({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1.6, delay: reversed ? (4 - i) * 0.18 : i * 0.18, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-rose-400"
        />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────
   PRESCRIPTION
───────────────────────────────────────── */
function Prescription() {
  const today = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className="bg-white border-2 border-blue-100 rounded-3xl p-7 shadow-xl shadow-blue-50 max-w-md mx-auto"
    >
      <div className="flex items-start justify-between mb-5 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm leading-tight">Dev López</p>
            <p className="text-xs text-slate-400 font-mono">Ing. de Sistemas · Build: 2024</p>
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

      <div className="text-blue-500 font-bold text-3xl mb-5 font-mono">℞</div>

      <div className="space-y-5 text-sm">
        <div>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">Paciente</span>
          <p className="text-slate-800 font-semibold mt-0.5 text-base">Para ti 💙</p>
        </div>

        <div>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">Síntomas Detectados</span>
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
          <p className="text-blue-700 font-bold mt-1 text-base">Conexión compatible de alta disponibilidad</p>
          <p className="text-xs text-blue-400 font-mono mt-1">CIE-11: CONN-HA-001 · Pronóstico: Excelente</p>
        </div>

        <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100">
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">Tratamiento Sugerido</span>
          <div className="flex items-center gap-2 mt-1">
            <Phone className="w-4 h-4 text-rose-500 shrink-0" />
            <p className="text-rose-700 font-bold text-base">Comodín: llámame cuando quieras</p>
          </div>
          <p className="text-xs text-rose-400 font-mono mt-1.5 leading-relaxed">
            Sin horario fijo · Siempre querré escucharte
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between mt-6 pt-5 border-t border-slate-100">
        <div>
          <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Firma</p>
          <p className="text-xl text-slate-700 italic font-bold" style={{ fontFamily: 'Georgia, serif' }}>
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
   DIAGNOSTIC MODULE
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

  function reset() { setPhase('idle'); setProgress(0); setStepIndex(0) }

  return (
    <div className="max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {phase === 'idle' && (
          <motion.div key="idle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Activity className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Módulo de Diagnóstico</h3>
            <p className="text-slate-400 text-sm mb-8 font-mono">Sistema de análisis interpersonal v2.0.24</p>
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
          <motion.div key="running" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
            <div className="text-center mb-8">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-blue-100 border-t-blue-500 rounded-full mx-auto mb-5" />
              <p className="text-slate-700 font-semibold text-sm">{STEPS[stepIndex]}</p>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mb-1.5 overflow-hidden">
              <motion.div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-rose-500"
                initial={{ width: '0%' }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: 'easeOut' }} />
            </div>
            <p className="text-xs text-slate-400 text-right font-mono mb-6">{Math.round(progress)}%</p>
            <div className="space-y-2">
              {STEPS.map((step, i) => {
                const done = progress >= ((i + 1) / STEPS.length) * 100
                return (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: done ? 1 : 0.28 }} className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${done ? 'text-green-500' : 'text-slate-300'}`} />
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
              <button onClick={reset} className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline underline-offset-4 font-mono">
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
   QUILL SVG
───────────────────────────────────────── */
function QuillSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Feather shaft */}
      <path d="M8 40 Q20 28 38 6" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      {/* Feather barbs right */}
      <path d="M38 6 Q30 14 22 24 Q28 18 36 12 Q32 20 24 30 Q30 22 38 6Z" fill="#d97706" opacity="0.8" />
      {/* Feather barbs left */}
      <path d="M38 6 Q26 16 18 28 Q22 20 32 14 Q26 22 16 34 Q22 24 38 6Z" fill="#fbbf24" opacity="0.6" />
      {/* Nib */}
      <path d="M8 40 L6 44 L11 42 Z" fill="#1e293b" />
      <path d="M8 40 L9 44 L11 42 Z" fill="#475569" />
      {/* Ink drop */}
      <circle cx="7.5" cy="43" r="1" fill="#1e40af" opacity="0.7" />
    </svg>
  )
}

/* ─────────────────────────────────────────
   LETTER SECTION
───────────────────────────────────────── */
const LETTER_TEXT = `Para ti,

Si estás leyendo esto, significa que hiciste clic. Y eso ya dice mucho de ti.

Soy alguien que pasa los días hablándole a una pantalla, escribiendo en un idioma que pocas personas entienden. Pero hay algo que ningún lenguaje de programación me ha podido enseñar: cómo describir lo que pasa cuando pienso en ti.

No tengo palabras perfectas, solo tengo líneas de código y esta carta. Ambas dicen lo mismo: que te pienso más de lo que cualquier algoritmo podría calcular.

La distancia es solo un número. Y yo siempre he sido bueno con los números.

Escrita con sinceridad, desde el teclado,

David <3`

function LetterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  const [displayed, setDisplayed] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [started, setStarted] = useState(false)

  // Start typewriter once in view
  useEffect(() => {
    if (isInView && !started) {
      // small delay for parchment entrance
      const t = setTimeout(() => setStarted(true), 900)
      return () => clearTimeout(t)
    }
  }, [isInView, started])

  useEffect(() => {
    if (!started) return
    if (charIndex >= LETTER_TEXT.length) return

    const delay = LETTER_TEXT[charIndex] === '\n' ? 60 : 28
    const t = setTimeout(() => {
      setDisplayed(LETTER_TEXT.slice(0, charIndex + 1))
      setCharIndex((c) => c + 1)
    }, delay)
    return () => clearTimeout(t)
  }, [started, charIndex])

  const done = charIndex >= LETTER_TEXT.length

  // Quill position: follows the last character rendered
  // We measure via a hidden span reference — simpler: just animate quill
  // along a path as charIndex increases
  const progress = LETTER_TEXT.length > 0 ? charIndex / LETTER_TEXT.length : 0

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-amber-50/40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-amber-50 text-amber-700 text-xs font-mono px-4 py-2 rounded-full mb-5 border border-amber-200">
          Carta · Manuscrita digitalmente
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Había algo más que{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">
            quería decirte
          </span>
        </h2>
      </motion.div>

      {/* Parchment */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, rotateX: 8 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1000 }}
        className="max-w-2xl mx-auto"
      >
        {/* Paper stack effect */}
        <div className="relative">
          <div className="absolute inset-0 translate-y-2 translate-x-1 bg-amber-100 rounded-2xl opacity-50" />
          <div className="absolute inset-0 translate-y-1 bg-amber-50 rounded-2xl opacity-70" />

          {/* Main parchment */}
          <div
            className="relative bg-amber-50 rounded-2xl px-8 sm:px-12 py-10 shadow-xl border border-amber-200/60"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 10%, rgba(251,191,36,0.06) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 90%, rgba(217,119,6,0.06) 0%, transparent 60%)
              `,
              boxShadow: '0 20px 60px rgba(120,80,20,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            {/* Decorative top line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 opacity-60" />

            {/* Quill + writing area */}
            <div className="relative">
              {/* Quill follows text progress — floats top-right while writing */}
              <AnimatePresence>
                {started && !done && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: [0, 8, -4, 6, 0],
                      y: [0, 2, -1, 2, 0],
                      rotate: [-30, -28, -32, -29, -30],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      x: { duration: 0.4, repeat: Infinity, ease: 'easeInOut' },
                      y: { duration: 0.3, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 0.35, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute -top-2 right-0 pointer-events-none"
                    style={{
                      top: `${Math.min(progress * 85, 82)}%`,
                      right: '0%',
                    }}
                  >
                    <QuillSVG />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Letter text */}
              <div
                className="font-serif text-slate-700 leading-8 text-base sm:text-[17px] whitespace-pre-wrap min-h-[320px] pr-12"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {displayed}
                {/* Blinking cursor while typing */}
                {!done && started && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-amber-700 ml-0.5 align-middle"
                  />
                )}
              </div>
            </div>

            {/* Decorative bottom line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 opacity-60" />

            {/* Wax seal */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={done ? { scale: 1, rotate: 0 } : { scale: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
              className="flex justify-center mt-6"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 shadow-lg flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white fill-white" />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-rose-300/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ParaEllaPage() {
  const [revealed, setRevealed] = useState(false)

  // Block body scroll while gift overlay is visible
  useEffect(() => {
    document.body.style.overflow = revealed ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [revealed])

  return (
    <>
      <AnimatePresence>
        {!revealed && <GiftReveal onOpen={() => setRevealed(true)} />}
      </AnimatePresence>

      {revealed && <main className="min-h-screen bg-slate-50" style={{ fontFamily: 'var(--font-sora), Inter, sans-serif' }}>

        {/* ── HERO ─────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[440px] h-[440px] bg-rose-100/50 rounded-full blur-3xl" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={revealed ? 'visible' : 'hidden'}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200 text-amber-700 text-xs font-mono px-4 py-2.5 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Feliz cumpleaños — 20 de Mayo 🎂
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 sm:gap-6 mb-14 flex-wrap">
              <motion.div whileHover={{ scale: 1.08, rotate: -6 }} transition={{ type: 'spring', stiffness: 300 }}
                className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-slate-200 border border-slate-100 flex items-center justify-center">
                <Stethoscope className="w-10 h-10 text-blue-400" />
              </motion.div>
              <PulsingDots />
              <BeatingHeart />
              <PulsingDots reversed />
              <motion.div whileHover={{ scale: 1.08, rotate: 6 }} transition={{ type: 'spring', stiffness: 300 }}
                className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-slate-200 border border-slate-100 flex items-center justify-center">
                <Code2 className="w-10 h-10 text-rose-400" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-xs font-mono px-4 py-2 rounded-full shadow-sm mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Connection.status(&quot;Established&quot;) ✓
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-7">
              Donde la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">medicina</span>
              <br />
              se encuentra{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">el código</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-11 leading-relaxed">
              Hay cosas que los sistemas no pueden calcular fácilmente.
              Pero el margen de error contigo es{' '}
              <span className="text-rose-400 font-semibold">aproximadamente cero</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
              <motion.a href="#diagnostic" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-md shadow-blue-200 transition-colors">
                <Activity className="w-4 h-4" /> Iniciar Diagnóstico
              </motion.a>
              <motion.a href="#carta" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-sm border border-slate-200 transition-colors">
                ✉️ Leer la carta
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── DIAGNOSTIC ───────────────────────── */}
        <section id="diagnostic" className="py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-white">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-block bg-rose-50 text-rose-500 text-xs font-mono px-4 py-2 rounded-full mb-5 border border-rose-100">
                Módulo Experimental · v2.0.24
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Diagnóstico Interactivo</h2>
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

        {/* ── CARTA ────────────────────────────── */}
        <div id="carta">
          <LetterSection />
        </div>
      </main>}
    </>
  )
}
