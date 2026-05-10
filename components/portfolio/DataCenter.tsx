'use client'

import { useState, useCallback, useRef } from 'react'

function playFan() {
  try {
    const ctx = new AudioContext()
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.8, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.12
    const src = ctx.createBufferSource()
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'; filter.frequency.value = 320
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.1)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.75)
    src.buffer = buf
    src.connect(filter); filter.connect(gain); gain.connect(ctx.destination)
    src.start()
  } catch {}
}

const PROJECTS = [
  {
    id: 'SRV-001',
    name: 'NETWORK-MONITOR',
    desc: 'Real-time network topology viewer with anomaly detection and alerting engine.',
    tech: ['Go', 'InfluxDB', 'Grafana', 'gRPC'],
    status: 'ONLINE',
    uptime: '99.98%',
    load: 72,
    leds: [true, true, true, false, true],
  },
  {
    id: 'SRV-002',
    name: 'ZERO-TRUST-GATEWAY',
    desc: 'mTLS service mesh gateway with per-request auth and policy enforcement.',
    tech: ['Rust', 'Envoy', 'SPIFFE', 'OPA'],
    status: 'ONLINE',
    uptime: '100%',
    load: 45,
    leds: [true, true, true, true, true],
  },
  {
    id: 'SRV-003',
    name: 'DEVOPS-PIPELINE',
    desc: 'Self-healing CI/CD platform with blue-green deployments and rollback triggers.',
    tech: ['K8s', 'ArgoCD', 'Terraform', 'GitHub Actions'],
    status: 'ONLINE',
    uptime: '99.91%',
    load: 58,
    leds: [true, true, false, true, true],
  },
  {
    id: 'SRV-004',
    name: 'LOG-AGGREGATOR',
    desc: 'Distributed log shipping, parsing and search platform at 1M events/sec.',
    tech: ['Vector', 'ClickHouse', 'Kafka', 'TypeScript'],
    status: 'MAINTENANCE',
    uptime: '97.2%',
    load: 91,
    leds: [true, false, true, false, false],
  },
  {
    id: 'SRV-005',
    name: 'SALUDSYNC-API',
    desc: 'HIPAA-ready clinical REST API with end-to-end encryption and audit trail.',
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'Redis'],
    status: 'ONLINE',
    uptime: '99.95%',
    load: 33,
    leds: [true, true, true, true, false],
  },
  {
    id: 'SRV-006',
    name: 'PORTFOLIO-OS',
    desc: 'This very site — Next.js 19, Three.js, GSAP, Tailwind 4. You are running it.',
    tech: ['Next.js', 'Three.js', 'GSAP', 'TypeScript'],
    status: 'RUNNING',
    uptime: 'NOW',
    load: 12,
    leds: [true, true, true, true, true],
  },
]

const STATUS_COLOR: Record<string, string> = {
  ONLINE: '#00FF41',
  MAINTENANCE: '#FF8C00',
  RUNNING: '#00FFFF',
}

function Rack({ project }: { project: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false)
  const [glitch, setGlitch] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const onEnter = useCallback(() => {
    setHovered(true)
    setGlitch(true)
    playFan()
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setGlitch(false), 400)
  }, [])

  const statusColor = STATUS_COLOR[project.status] ?? '#00FF41'

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={() => setHovered(false)}
      className="relative border cursor-pointer transition-all duration-200"
      style={{
        borderColor: hovered ? statusColor : '#00FF4130',
        background: hovered ? '#0a1a00' : '#050505',
        boxShadow: hovered
          ? `0 0 24px ${statusColor}40, inset 0 0 12px ${statusColor}10`
          : 'none',
      }}
      data-cursor
    >
      {/* Rack header */}
      <div
        className="flex items-center justify-between px-3 py-2 border-b text-[9px]"
        style={{ borderColor: '#00FF4120', fontFamily: 'monospace' }}
      >
        <div className="flex items-center gap-2">
          {/* LEDs */}
          <div className="flex gap-1">
            {project.leds.map((on, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: on ? statusColor : '#1a1a1a',
                  boxShadow: on && hovered ? `0 0 4px ${statusColor}` : 'none',
                  animation: on && hovered ? `ledBlink 0.${6 + i}s infinite` : 'none',
                }}
              />
            ))}
          </div>
          <span style={{ color: '#00FF41' }}>{project.id}</span>
        </div>
        <span style={{ color: statusColor }}>{project.status}</span>
      </div>

      {/* Rack body */}
      <div className="px-3 py-3">
        {/* Name with glitch */}
        <div
          className="text-sm font-bold mb-2 overflow-hidden"
          style={{
            color: hovered ? statusColor : '#00FF41',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(8px, 1.2vw, 11px)',
            lineHeight: 1.6,
            animation: glitch ? 'glitchText 0.4s steps(2) forwards' : 'none',
          }}
        >
          {project.name}
        </div>

        {/* Description — reveals on hover */}
        <div
          className="text-[9px] leading-4 mb-3 transition-all duration-300 overflow-hidden"
          style={{
            color: '#00FF4190',
            fontFamily: 'monospace',
            maxHeight: hovered ? '80px' : '0px',
            opacity: hovered ? 1 : 0,
          }}
        >
          {project.desc}
        </div>

        {/* Load bar */}
        <div className="mb-2">
          <div className="flex justify-between text-[8px] mb-1" style={{ color: '#00FF4150', fontFamily: 'monospace' }}>
            <span>CPU LOAD</span>
            <span>{project.load}%</span>
          </div>
          <div className="h-1 bg-[#0a1a00] overflow-hidden">
            <div
              className="h-full transition-all duration-700"
              style={{
                width: hovered ? `${project.load}%` : '0%',
                background: project.load > 80 ? '#ff3300' : project.load > 60 ? '#FF8C00' : '#00FF41',
              }}
            />
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 text-[7px] border"
              style={{
                borderColor: `${statusColor}50`,
                color: statusColor,
                fontFamily: 'monospace',
                background: `${statusColor}08`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Uptime */}
        <div className="mt-3 text-[8px] flex justify-between" style={{ color: '#00FF4140', fontFamily: 'monospace' }}>
          <span>UPTIME</span>
          <span style={{ color: statusColor }}>{project.uptime}</span>
        </div>
      </div>

      {/* Drive slots decoration */}
      <div className="flex gap-0.5 px-3 pb-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-2 flex-1"
            style={{
              background: i < Math.ceil(project.leds.filter(Boolean).length * 1.5)
                ? `${statusColor}30`
                : '#111',
              border: '1px solid #00FF4110',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function DataCenter() {
  return (
    <section id="projects" className="relative z-10 py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: '#FF8C00', fontFamily: "'Press Start 2P', monospace" }}
          >
            // THE DATA CENTER
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold"
            style={{ color: '#00FF41', fontFamily: "'Press Start 2P', monospace", lineHeight: 1.4 }}
          >
            SERVER RACKS
          </h2>
          <p className="mt-4 text-[11px] text-[#00FF41]/50 font-mono">
            HOVER TO SPIN UP — CLICK TO INSPECT
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <Rack key={p.id} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ledBlink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes glitchText {
          0%  { clip-path: inset(0 0 90% 0); transform: translateX(-3px); }
          20% { clip-path: inset(40% 0 50% 0); transform: translateX(3px); color: #00FFFF; }
          40% { clip-path: inset(70% 0 10% 0); transform: translateX(-2px); }
          60% { clip-path: inset(20% 0 70% 0); transform: translateX(2px); color: #FF8C00; }
          80% { clip-path: inset(0 0 0 0); transform: translateX(0); }
          100%{ clip-path: none; transform: none; }
        }
      `}</style>
    </section>
  )
}
