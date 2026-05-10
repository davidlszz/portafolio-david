'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
import Scanlines from '@/components/portfolio/Scanlines'
import Cursor from '@/components/portfolio/Cursor'
import DuckHuntLoader from '@/components/portfolio/DuckHuntLoader'
import PacketSniffer from '@/components/portfolio/PacketSniffer'
import DataCenter from '@/components/portfolio/DataCenter'

// Three.js — client only, no SSR
const NetworkBackground = dynamic(
  () => import('@/components/portfolio/NetworkBackground'),
  { ssr: false }
)

/* ── Glitch text component ── */
function GlitchText({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`} data-text={children}>
      <span className="glitch-layer glitch-a absolute inset-0 text-[#00FFFF] opacity-70" aria-hidden>{children}</span>
      <span className="glitch-layer glitch-b absolute inset-0 text-[#ff3300] opacity-70" aria-hidden>{children}</span>
      {children}
    </span>
  )
}

/* ── SVG Cable that draws on scroll ── */
function Cable({ className = '' }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const el = pathRef.current
    if (!el) return
    const len = el.getTotalLength()
    el.style.strokeDasharray = String(len)
    el.style.strokeDashoffset = String(len)

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'stroke-dashoffset 1.8s ease-out'
          el.style.strokeDashoffset = '0'
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      className={`w-full h-16 ${className}`}
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M0,30 C10,30 15,10 25,10 S40,50 50,50 S65,10 75,10 S90,30 100,30"
        fill="none"
        stroke="#00FF41"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  )
}

/* ── Hero section ── */
function Hero() {
  const [typed, setTyped] = useState('')
  const roles = 'INFRASTRUCTURE · SECURITY · DELIVERY'

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(roles.slice(0, i))
      i++
      if (i > roles.length) clearInterval(t)
    }, 55)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-start justify-center px-6 sm:px-16 lg:px-24"
    >
      {/* Top corner label */}
      <div
        className="absolute top-6 right-6 text-[9px] text-[#00FF41]/30"
        style={{ fontFamily: 'var(--font-ibm-mono, monospace)' }}
      >
        SYS:ONLINE · {new Date().getFullYear()}
      </div>

      {/* Asymmetric layout — slightly offset */}
      <div className="max-w-4xl -mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="text-[10px] mb-6 tracking-[0.4em]"
            style={{ color: '#FF8C00', fontFamily: 'var(--font-press-start, monospace)' }}
          >
            &gt; CONNECTING NODE...
          </div>

          <h1
            className="font-bold leading-[1.15] mb-6"
            style={{
              fontFamily: 'var(--font-press-start, monospace)',
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              color: '#00FF41',
            }}
          >
            <GlitchText>DAVID</GlitchText>
            <br />
            <span style={{ color: '#00FFFF' }}>LÓPEZ</span>
          </h1>

          <div
            className="text-[11px] sm:text-sm mb-8 h-5"
            style={{ color: '#00FF41', fontFamily: 'var(--font-ibm-mono, monospace)' }}
          >
            {typed}
            <span className="animate-pulse">█</span>
          </div>

          <p
            className="text-[11px] sm:text-sm max-w-lg leading-7 mb-10"
            style={{ color: '#00FF41', fontFamily: 'var(--font-ibm-mono, monospace)', opacity: 0.65 }}
          >
            Systems engineer who treats every service as critical infrastructure.
            I build networks that don't fall down, pipelines that don't lie,
            and systems secure enough that attackers move on.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { label: 'INSPECT PROJECTS', href: '#projects' },
              { label: 'READ PACKETS', href: '#about' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-5 py-2.5 text-[9px] border transition-all duration-200 hover:bg-[#00FF41] hover:text-[#050505]"
                style={{
                  borderColor: '#00FF41',
                  color: '#00FF41',
                  fontFamily: 'var(--font-press-start, monospace)',
                }}
                data-cursor
              >
                [{label}]
              </a>
            ))}
          </div>
        </motion.div>

        {/* ASCII decoration — asymmetric right side */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-[#00FF41] text-[10px] leading-4 hidden xl:block"
          aria-hidden
          style={{ fontFamily: 'monospace' }}
        >{`
┌──────────────┐
│  ██████████  │
│  █  NODE  █  │
│  ██████████  │
│  ●──────●   │
│  │  PKT  │   │
│  ●──────●   │
└──────────────┘
     │    │
  ───●────●───
`}</motion.pre>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[9px] text-[#00FF41]/30"
        style={{ fontFamily: 'monospace' }}
      >
        ↓ SCROLL TO EXPLORE NETWORK ↓
      </motion.div>
    </section>
  )
}

/* ── Contact footer ── */
function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 sm:px-16">
      <div
        className="max-w-2xl mx-auto border p-8"
        style={{
          borderColor: '#00FF4130',
          background: '#050505',
          boxShadow: '0 0 40px #00FF4108',
        }}
      >
        <div
          className="text-[10px] tracking-[0.3em] mb-4"
          style={{ color: '#FF8C00', fontFamily: 'var(--font-press-start, monospace)' }}
        >
          // ESTABLISH CONNECTION
        </div>
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: '#00FF41', fontFamily: 'var(--font-press-start, monospace)', lineHeight: 1.5 }}
        >
          PING ME
        </h2>

        <div className="space-y-3 font-mono text-sm" style={{ color: '#00FF41' }}>
          {[
            { label: 'GITHUB', val: 'github.com/davidlszz', href: 'https://github.com/davidlszz' },
            { label: 'EMAIL', val: 'david@devdlsz.dev', href: 'mailto:david@devdlsz.dev' },
            { label: 'LOCATION', val: 'Online — always.', href: null },
          ].map(({ label, val, href }) => (
            <div key={label} className="flex items-center gap-4 text-[11px]">
              <span className="opacity-40 w-20 shrink-0" style={{ fontFamily: 'var(--font-ibm-mono, monospace)' }}>{label}</span>
              {href ? (
                <a href={href} className="hover:text-[#00FFFF] transition-colors" data-cursor>{val}</a>
              ) : (
                <span className="opacity-70">{val}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-[9px] text-[#00FF41]/20" style={{ fontFamily: 'monospace' }}>
          © {new Date().getFullYear()} David López Sánchez · MIT · Built with obsession
        </div>
      </div>
    </section>
  )
}

/* ── Main page ── */
export default function PortfolioPage() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Boot loader */}
      <AnimatePresence>
        {!loaded && <DuckHuntLoader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Three.js background */}
          <NetworkBackground />

          {/* CRT overlay */}
          <Scanlines />

          {/* Custom cursor */}
          <Cursor />

          {/* Content */}
          <div className="relative">
            <Hero />
            <Cable className="px-16 opacity-60" />
            <PacketSniffer />
            <Cable className="px-16 opacity-60" />
            <DataCenter />
            <Cable className="px-16 opacity-40" />
            <Contact />
          </div>
        </motion.div>
      )}

      {/* Global styles */}
      <style>{`
        * { box-sizing: border-box; }
        ::selection { background: #00FF4130; color: #00FF41; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #00FF4150; border-radius: 2px; }

        .glitch-a { animation: glitchA 3.5s infinite; }
        .glitch-b { animation: glitchB 3.5s infinite; }

        @keyframes glitchA {
          0%,85%,100% { clip-path: none; transform: none; opacity: 0; }
          86% { clip-path: inset(20% 0 50% 0); transform: translateX(-3px); opacity: 0.7; }
          88% { clip-path: inset(60% 0 10% 0); transform: translateX(3px); opacity: 0.7; }
          90% { opacity: 0; }
        }
        @keyframes glitchB {
          0%,87%,100% { clip-path: none; transform: none; opacity: 0; }
          88% { clip-path: inset(40% 0 30% 0); transform: translateX(3px); opacity: 0.7; }
          90% { clip-path: inset(10% 0 70% 0); transform: translateX(-3px); opacity: 0.7; }
          92% { opacity: 0; }
        }
      `}</style>
    </>
  )
}
