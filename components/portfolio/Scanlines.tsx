'use client'

import { useEffect, useRef } from 'react'

/* CRT Scanlines + Grain overlay — covers the entire viewport */
export default function Scanlines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frameId: number

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function drawGrain() {
      if (!canvas || !ctx) return
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255
        data[i] = v
        data[i + 1] = v
        data[i + 2] = v
        data[i + 3] = Math.random() * 18 // very subtle
      }
      ctx.putImageData(imageData, 0, 0)
    }

    function loop() {
      drawGrain()
      frameId = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    loop()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      {/* Animated grain */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[9998] pointer-events-none mix-blend-overlay opacity-[0.04]"
        aria-hidden
      />

      {/* CRT scanlines */}
      <div
        aria-hidden
        className="fixed inset-0 z-[9997] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="fixed inset-0 z-[9996] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Phosphor glow flicker — very subtle */}
      <style>{`
        @keyframes flicker {
          0%,100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.94; }
          94% { opacity: 1; }
          96% { opacity: 0.97; }
        }
        .crt-root { animation: flicker 8s infinite; }
      `}</style>
    </>
  )
}
