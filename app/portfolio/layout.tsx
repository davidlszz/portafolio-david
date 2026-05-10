import type { Metadata } from 'next'
import { Press_Start_2P, IBM_Plex_Mono } from 'next/font/google'

const pressStart = Press_Start_2P({
  variable: '--font-press-start',
  subsets: ['latin'],
  weight: '400',
})

const ibmMono = IBM_Plex_Mono({
  variable: '--font-ibm-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'David López — Systems Engineer',
  description: 'Infrastructure, Security & Reliable Delivery. Network-Retro portfolio.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${pressStart.variable} ${ibmMono.variable} crt-root`}
      style={{ background: '#050505', minHeight: '100vh' }}
    >
      {children}
    </div>
  )
}
