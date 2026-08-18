import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SolutionFlow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-surface-bg overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-corridor-green rounded" />
            <span className="text-xs font-semibold text-corridor-green tracking-widest uppercase">The Transformation</span>
            <span className="w-8 h-0.5 bg-corridor-green rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display leading-tight">
            From Chaos to <span className="text-gradient-green">Coordinated Response</span>
          </h2>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:flex items-stretch justify-between gap-0 relative">
            {/* Connecting line behind */}
            <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 -translate-y-1/2 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-emergency-red via-traffic-amber to-corridor-green rounded-full"
                initial={reduced ? {} : { scaleX: 0 }}
                animate={inView && !reduced ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            {[
              {
                step: '01',
                label: 'TRAFFIC CHAOS',
                desc: 'Congested intersections, blocked routes, no coordination',
                color: '#E53935',
                bg: 'bg-red-50',
                border: 'border-red-100',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M4 16h24M4 10h24M4 22h24" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="4" fill="#E53935" opacity="0.2" />
                  </svg>
                ),
              },
              {
                step: '02',
                label: 'REAL-TIME INTELLIGENCE',
                desc: 'GPS telemetry, MQTT streams, spatial analysis',
                color: '#F59E0B',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="10" stroke="#F59E0B" strokeWidth="2" />
                    <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="3" fill="#F59E0B" />
                  </svg>
                ),
              },
              {
                step: '03',
                label: 'COORDINATED RESPONSE',
                desc: 'Police alerted, signals preempted, route managed',
                color: '#1565C0',
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <rect x="8" y="8" width="16" height="16" rx="3" stroke="#1565C0" strokeWidth="2" />
                    <path d="M12 16h8M16 12v8" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="2" fill="#1565C0" />
                  </svg>
                ),
              },
              {
                step: '04',
                label: 'GREEN CORRIDOR',
                desc: 'Clear path from ambulance to hospital',
                color: '#16A34A',
                bg: 'bg-green-50',
                border: 'border-green-100',
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M4 16h24" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M18 10l6 6-6 6" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="8" cy="16" r="3" fill="#16A34A" opacity="0.3" stroke="#16A34A" strokeWidth="1.5" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                animate={inView && !reduced ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="relative z-10 flex-1 flex flex-col items-center"
              >
                <div className={`rounded-2xl border ${item.border} ${item.bg} p-6 w-full max-w-[200px] text-center flex flex-col items-center gap-3 shadow-sm`}>
                  <span
                    className="text-xs font-black tracking-widest"
                    style={{ color: item.color }}
                  >
                    {item.step}
                  </span>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}12` }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-command-navy text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-text-secondary leading-snug">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="lg:hidden flex flex-col gap-6 relative">
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-emergency-red via-traffic-amber to-corridor-green" />
            {[
              { step: '01', label: 'Traffic Chaos', desc: 'Congested intersections, blocked routes', color: '#E53935' },
              { step: '02', label: 'Real-Time Intelligence', desc: 'GPS telemetry, MQTT, spatial analysis', color: '#F59E0B' },
              { step: '03', label: 'Coordinated Response', desc: 'Signals preempted, police alerted', color: '#1565C0' },
              { step: '04', label: 'Green Corridor', desc: 'Clear path to hospital', color: '#16A34A' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, x: -20 }}
                animate={inView && !reduced ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 ml-0"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center z-10 flex-shrink-0 border-2 border-white shadow"
                  style={{ backgroundColor: item.color }}
                >
                  <span className="text-white text-xs font-black">{item.step}</span>
                </div>
                <div className="pt-1">
                  <p className="font-bold text-command-navy">{item.label}</p>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-center mt-12 text-text-secondary text-sm"
        >
          The entire intelligence pipeline — from telemetry ingestion to signal preemption — operates in real time.
        </motion.p>
      </div>
    </section>
  )
}
