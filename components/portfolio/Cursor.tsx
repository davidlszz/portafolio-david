'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    document.body.style.cursor = 'none'

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnterLink = () => {
      cursorRef.current?.classList.add('cursor--hover')
      ringRef.current?.classList.add('ring--hover')
    }
    const onLeaveLink = () => {
      cursorRef.current?.classList.remove('cursor--hover')
      ringRef.current?.classList.remove('ring--hover')
    }

    window.addEventListener('mousemove', move)

    // attach to all interactive elements
    const bindLinks = () => {
      document.querySelectorAll('a,button,[data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }
    bindLinks()
    const obs = new MutationObserver(bindLinks)
    obs.observe(document.body, { childList: true, subtree: true })

    let raf: number
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      obs.disconnect()
      cancelAnimationFrame(raf)
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <>
      {/* Crosshair dot */}
      <div
        ref={cursorRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        {/* Center dot */}
        <div className="w-1 h-1 bg-[#00FF41] rounded-full absolute -translate-x-1/2 -translate-y-1/2 cursor--dot" />
        {/* Crosshair lines */}
        <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -translate-x-1/2 -translate-y-1/2 cursor--cross opacity-90">
          <line x1="12" y1="0" x2="12" y2="8" stroke="#00FF41" strokeWidth="1.5" />
          <line x1="12" y1="16" x2="12" y2="24" stroke="#00FF41" strokeWidth="1.5" />
          <line x1="0" y1="12" x2="8" y2="12" stroke="#00FF41" strokeWidth="1.5" />
          <line x1="16" y1="12" x2="24" y2="12" stroke="#00FF41" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke="#00FF41" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-8 h-8 border border-[#00FF41]/40 rounded-full -translate-x-1/2 -translate-y-1/2 ring--circle transition-all duration-150" />
      </div>

      <style>{`
        .cursor--hover .cursor--dot { background: #00FFFF; transform: translate(-50%,-50%) scale(1.5); }
        .cursor--hover .cursor--cross { stroke: #00FFFF; transform: translate(-50%,-50%) scale(1.2); }
        .ring--hover .ring--circle { width: 48px; height: 48px; border-color: rgba(0,255,255,0.5); }
      `}</style>
    </>
  )
}
