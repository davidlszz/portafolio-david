'use client'

import { useEffect, useRef, useState } from 'react'

const PACKETS = [
  { time: '00:00.001', src: '192.168.1.1',   dst: 'CLIENT',    key: 'identity.name',       val: '"David López Sánchez"',    color: '#00FF41' },
  { time: '00:00.043', src: '10.0.0.2',       dst: 'CLIENT',    key: 'identity.role',       val: '"Systems Engineer"',       color: '#00FF41' },
  { time: '00:00.127', src: 'SKILL_SRV',      dst: 'CLIENT',    key: 'skills.networking',   val: '["TCP/IP","BGP","VPN","DNS","Load Balancing"]', color: '#00FFFF' },
  { time: '00:00.209', src: 'SKILL_SRV',      dst: 'CLIENT',    key: 'skills.security',     val: '["Pentesting","SIEM","Zero Trust","IDS/IPS"]',  color: '#00FFFF' },
  { time: '00:00.312', src: 'SKILL_SRV',      dst: 'CLIENT',    key: 'skills.infra',        val: '["Docker","K8s","Terraform","CI/CD","Linux"]',   color: '#00FFFF' },
  { time: '00:00.418', src: 'SKILL_SRV',      dst: 'CLIENT',    key: 'skills.dev',          val: '["Next.js","TypeScript","Node","PostgreSQL"]',   color: '#00FFFF' },
  { time: '00:00.531', src: 'PROFILE_SRV',    dst: 'CLIENT',    key: 'focus.primary',       val: '"Infrastructure & Reliable Delivery"',           color: '#FF8C00' },
  { time: '00:00.644', src: 'PROFILE_SRV',    dst: 'CLIENT',    key: 'focus.secondary',     val: '"Security-First Engineering"',                   color: '#FF8C00' },
  { time: '00:00.750', src: 'ATTR_SRV',       dst: 'CLIENT',    key: 'traits[]',            val: '"obsessive about uptime"',                       color: '#00FF41' },
  { time: '00:00.812', src: 'ATTR_SRV',       dst: 'CLIENT',    key: 'traits[]',            val: '"writes docs nobody reads (but works)"',         color: '#00FF41' },
  { time: '00:00.891', src: 'ATTR_SRV',       dst: 'CLIENT',    key: 'traits[]',            val: '"ships at 3am and fixes at 3:01am"',             color: '#00FF41' },
  { time: '00:01.020', src: 'STATUS_SRV',     dst: 'CLIENT',    key: 'connection.status',   val: '"OPEN — always looking for hard problems"',      color: '#00FFFF' },
]

export default function PacketSniffer() {
  const [visible, setVisible] = useState<number[]>([])
  const [running, setRunning] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setRunning(true)
        }
      },
      { threshold: 0.25 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!running) return
    const timers = PACKETS.map((_, i) =>
      setTimeout(() => setVisible((v) => [...v, i]), i * 160 + 200)
    )
    return () => timers.forEach(clearTimeout)
  }, [running])

  return (
    <section ref={sectionRef} id="about" className="relative z-10 py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="mb-10">
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: '#FF8C00', fontFamily: "'Press Start 2P', monospace" }}
          >
            // PACKET SNIFFER v1.0
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold"
            style={{ color: '#00FF41', fontFamily: "'Press Start 2P', monospace", lineHeight: 1.4 }}
          >
            ABOUT.EXE
          </h2>
        </div>

        {/* Terminal window */}
        <div
          className="rounded border overflow-hidden"
          style={{
            background: '#050505',
            borderColor: '#00FF4140',
            boxShadow: '0 0 30px #00FF4110, inset 0 0 20px #00000080',
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2 border-b"
            style={{ borderColor: '#00FF4140', background: '#0a1a00' }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff3300]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF8C00]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00FF41]" />
            <span className="ml-3 text-[9px] text-[#00FF41]/50" style={{ fontFamily: 'monospace' }}>
              tcpdump — david@localhost — 120×36
            </span>
          </div>

          {/* Header row */}
          <div
            className="grid text-[9px] px-4 py-2 border-b"
            style={{
              borderColor: '#00FF4115',
              color: '#00FF41',
              fontFamily: 'monospace',
              gridTemplateColumns: '6rem 9rem 7rem 1fr',
            }}
          >
            <span className="opacity-50">TIME</span>
            <span className="opacity-50">SOURCE</span>
            <span className="opacity-50">KEY</span>
            <span className="opacity-50">VALUE</span>
          </div>

          {/* Packet rows */}
          <div className="px-4 py-3 space-y-1 min-h-[320px]">
            {PACKETS.map((pkt, i) =>
              visible.includes(i) ? (
                <div
                  key={i}
                  className="grid text-[9px] sm:text-[10px] leading-5 animate-[fadeRow_0.2s_ease_forwards]"
                  style={{
                    fontFamily: 'monospace',
                    gridTemplateColumns: '6rem 9rem 7rem 1fr',
                    color: pkt.color,
                  }}
                >
                  <span className="opacity-40">{pkt.time}</span>
                  <span className="opacity-60">{pkt.src}</span>
                  <span className="opacity-80">{pkt.key}</span>
                  <span>{pkt.val}</span>
                </div>
              ) : null
            )}

            {/* Blinking cursor */}
            {visible.length < PACKETS.length && running && (
              <div
                className="text-[10px] text-[#00FF41] animate-pulse"
                style={{ fontFamily: 'monospace' }}
              >
                █
              </div>
            )}

            {visible.length === PACKETS.length && (
              <div
                className="mt-4 text-[9px] text-[#00FF41]/40"
                style={{ fontFamily: 'monospace' }}
              >
                — capture complete. {PACKETS.length} packets received —
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeRow {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
