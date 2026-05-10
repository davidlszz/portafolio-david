'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

/* ── Web Audio helpers ── */
function playBeep(freq = 440, duration = 0.08, vol = 0.15) {
  try {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(vol, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
    osc.connect(gain); gain.connect(ctx.destination)
    osc.start(); osc.stop(ctx.currentTime + duration)
  } catch {}
}

function playShoot() {
  try {
    const ctx = new AudioContext()
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length)
    const src = ctx.createBufferSource()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'; filter.frequency.value = 800
    src.buffer = buf
    gain.gain.setValueAtTime(0.4, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
    src.connect(filter); filter.connect(gain); gain.connect(ctx.destination)
    src.start(); src.stop(ctx.currentTime + 0.2)
  } catch {}
}

function playExplosion() {
  try {
    const ctx = new AudioContext()
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.3))
    const src = ctx.createBufferSource()
    const gain = ctx.createGain()
    src.buffer = buf
    gain.gain.value = 0.5
    src.connect(gain); gain.connect(ctx.destination)
    src.start()
  } catch {}
}

/* ── BIOS lines ── */
const BIOS_LINES = [
  { text: 'PORTFOLIO BIOS v2.024', delay: 0, color: '#00FF41' },
  { text: 'Copyright (C) 2024  David Lopez Systems', delay: 120, color: '#00FF41' },
  { text: '─────────────────────────────────────', delay: 200, color: '#003d0f' },
  { text: 'CPU:  Intel Core i7 – BRAIN CORE @ 3.2GHz', delay: 340, color: '#00FF41' },
  { text: 'RAM:  16384MB Creative Memory Module OK', delay: 500, color: '#00FF41' },
  { text: 'GPU:  Imagination Series 12GB VRAM OK', delay: 680, color: '#00FF41' },
  { text: '─────────────────────────────────────', delay: 800, color: '#003d0f' },
  { text: 'Detecting drives...', delay: 950, color: '#00FF41' },
  { text: '  /dev/skills        [SSD  256GB]  OK', delay: 1100, color: '#00cc33' },
  { text: '  /dev/projects      [NVMe 4TB  ]  OK', delay: 1250, color: '#00cc33' },
  { text: '  /dev/experience    [RAID-10   ]  OK', delay: 1400, color: '#00cc33' },
  { text: 'Loading network protocols...  [====] OK', delay: 1650, color: '#00FF41' },
  { text: 'Loading security modules...   [====] OK', delay: 1900, color: '#00FF41' },
  { text: '─────────────────────────────────────', delay: 2100, color: '#003d0f' },
  { text: '!! ANOMALY DETECTED IN NETWORK LAYER !!', delay: 2400, color: '#ff3300' },
  { text: '!! 3 MALICIOUS PACKETS INTERCEPTED   !!', delay: 2650, color: '#ff3300' },
  { text: '!! ACTIVATING FIREWALL DEFENSE...    !!', delay: 2900, color: '#FF8C00' },
]

/* ── Packet (duck) ── */
interface Packet {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  dead: boolean
  exploding: boolean
}

function makePacket(id: number): Packet {
  const fromLeft = Math.random() > 0.5
  return {
    id,
    x: fromLeft ? -120 : window.innerWidth + 120,
    y: 120 + Math.random() * (window.innerHeight * 0.5),
    vx: fromLeft ? 1.8 + Math.random() * 1.2 : -(1.8 + Math.random() * 1.2),
    vy: (Math.random() - 0.5) * 0.8,
    dead: false,
    exploding: false,
  }
}

/* ── Main component ── */
export default function DuckHuntLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'bios' | 'game' | 'secure' | 'done'>('bios')
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [packets, setPackets] = useState<Packet[]>([])
  const [killed, setKilled] = useState(0)
  const [blinkVisible, setBlinkVisible] = useState(true)
  const rafRef = useRef<number | undefined>(undefined)
  const TOTAL = 3

  // BIOS text reveal
  useEffect(() => {
    if (phase !== 'bios') return
    const timers = BIOS_LINES.map((line, i) => {
      return setTimeout(() => {
        setVisibleLines((prev) => [...prev, i])
        playBeep(200 + i * 30, 0.05, 0.05)
      }, line.delay)
    })

    const gameTimer = setTimeout(() => setPhase('game'), 3400)
    return () => { timers.forEach(clearTimeout); clearTimeout(gameTimer) }
  }, [phase])

  // Blink cursor
  useEffect(() => {
    const t = setInterval(() => setBlinkVisible((v) => !v), 530)
    return () => clearInterval(t)
  }, [])

  // Spawn packets when game starts
  useEffect(() => {
    if (phase !== 'game') return
    setPackets([makePacket(0), makePacket(1), makePacket(2)])
  }, [phase])

  // Game loop
  useEffect(() => {
    if (phase !== 'game') return
    let last = performance.now()

    function loop(now: number) {
      const dt = Math.min(now - last, 32)
      last = now
      setPackets((prev) =>
        prev.map((p) => {
          if (p.dead) return p
          let nx = p.x + p.vx * (dt / 10)
          let nvy = p.vy
          // bounce off top/bottom
          const newY = p.y + p.vy * (dt / 10)
          if (newY < 60 || newY > window.innerHeight * 0.75) nvy = -p.vy
          // wrap horizontally
          if (nx < -140) nx = window.innerWidth + 140
          if (nx > window.innerWidth + 140) nx = -140
          return { ...p, x: nx, y: p.y + nvy * (dt / 10), vy: nvy }
        })
      )
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [phase])

  // Watch killed count
  useEffect(() => {
    if (killed >= TOTAL) {
      setPhase('secure')
      setTimeout(() => {
        setPhase('done')
        setTimeout(onDone, 600)
      }, 1800)
    }
  }, [killed, onDone])

  const shoot = useCallback((id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    playShoot()
    setTimeout(() => playExplosion(), 80)
    setPackets((prev) =>
      prev.map((p) =>
        p.id === id && !p.dead ? { ...p, exploding: true } : p
      )
    )
    setTimeout(() => {
      setPackets((prev) => prev.map((p) => (p.id === id ? { ...p, dead: true } : p)))
      setKilled((k) => k + 1)
    }, 350)
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[10000] overflow-hidden select-none"
      style={{ background: '#050505', fontFamily: "'Press Start 2P', monospace" }}
    >
      {/* ── BIOS PHASE ── */}
      {(phase === 'bios') && (
        <div className="p-6 sm:p-10 max-w-3xl mx-auto mt-8">
          {BIOS_LINES.map((line, i) => (
            visibleLines.includes(i) && (
              <div
                key={i}
                className="text-[10px] sm:text-xs leading-6 whitespace-pre"
                style={{ color: line.color }}
              >
                {line.text}
              </div>
            )
          ))}
          {visibleLines.length === BIOS_LINES.length && (
            <div className="mt-6 text-[10px] sm:text-xs" style={{ color: '#FF8C00' }}>
              {'> PRESS ANY KEY TO ENGAGE DEFENSE SYSTEM'}
              {blinkVisible && <span className="ml-1">█</span>}
            </div>
          )}
        </div>
      )}

      {/* ── GAME PHASE ── */}
      {phase === 'game' && (
        <>
          {/* Sky + Ground */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, #0a0a2e 0%, #050505 70%, #0a1a00 100%)',
            }}
          />
          {/* Grid floor */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/4"
            style={{
              backgroundImage:
                'linear-gradient(#00FF4120 1px, transparent 1px), linear-gradient(90deg, #00FF4120 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              perspective: '200px',
            }}
          />

          {/* HUD */}
          <div className="absolute top-4 left-0 right-0 flex justify-center gap-8 z-10">
            <div className="text-[10px] text-[#00FF41]">
              THREATS
            </div>
            <div className="flex gap-2">
              {Array.from({ length: TOTAL }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border border-[#00FF41] text-[8px] flex items-center justify-center"
                  style={{ background: i < killed ? '#00FF41' : 'transparent', color: '#050505' }}
                >
                  {i < killed ? '✓' : ''}
                </div>
              ))}
            </div>
            <div className="text-[10px] text-[#00FF41]">{killed}/{TOTAL} ELIMINATED</div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-8 left-0 right-0 text-center text-[9px] text-[#00FF41]/50">
            CLICK ON MALICIOUS PACKETS TO ELIMINATE THEM
          </div>

          {/* Packets */}
          {packets.map((p) => !p.dead && (
            <button
              key={p.id}
              onClick={(e) => shoot(p.id, e)}
              className="absolute focus:outline-none"
              style={{
                left: p.x,
                top: p.y,
                transform: 'translate(-50%, -50%)',
                pointerEvents: p.exploding ? 'none' : 'auto',
              }}
            >
              {p.exploding ? (
                /* Explosion */
                <div className="relative w-16 h-16 flex items-center justify-center">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-[#FF8C00]"
                      style={{
                        animation: 'explodePiece 0.35s ease-out forwards',
                        transform: `rotate(${i * 45}deg)`,
                        transformOrigin: 'center',
                        animationDelay: `${i * 20}ms`,
                      }}
                    />
                  ))}
                  <span className="text-[#ff3300] text-[10px] z-10">KILLED</span>
                </div>
              ) : (
                /* Packet */
                <div
                  className="border-2 border-[#ff3300] px-2 py-1 text-center hover:bg-[#ff3300]/20 transition-colors"
                  style={{
                    boxShadow: '0 0 8px #ff3300, inset 0 0 8px #ff330020',
                    minWidth: 90,
                  }}
                >
                  <div className="text-[8px] text-[#ff3300] leading-4">MALWARE.EXE</div>
                  <div className="text-[7px] text-[#ff3300]/70 font-mono">
                    {['0xDEADBEEF', '0xBADF00D', '0xCAFEBABE'][p.id]}
                  </div>
                  <div className="flex gap-0.5 justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-1 h-2 bg-[#ff3300]" style={{ opacity: 0.3 + i * 0.14 }} />
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </>
      )}

      {/* ── SECURE PHASE ── */}
      {phase === 'secure' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <div className="text-2xl sm:text-4xl text-[#00FF41] animate-pulse text-center">
            SYSTEM SECURE
          </div>
          <div className="text-sm text-[#00FF41]/70">ALL THREATS ELIMINATED</div>
          <div className="text-xs text-[#00FF41]/50 mt-4">BOOTING PORTFOLIO...</div>
          <div className="w-64 h-1 bg-[#003d0f] mt-2 overflow-hidden">
            <div className="h-full bg-[#00FF41] animate-[progress_1.6s_ease-out_forwards]" />
          </div>
        </div>
      )}

      {/* Scanlines on top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)',
        }}
      />

      <style>{`
        @keyframes explodePiece {
          0%   { transform: rotate(var(--r)) translateX(0); opacity: 1; }
          100% { transform: rotate(var(--r)) translateX(28px); opacity: 0; }
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
