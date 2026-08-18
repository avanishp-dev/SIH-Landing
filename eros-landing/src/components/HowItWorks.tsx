import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Track',
    subtitle: 'GPS / IoT',
    body: 'Continuous GPS telemetry and IoT sensor data identify the ambulance position, speed, and heading in real time.',
    color: '#E53935',
    iconPath: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="2" fill="currentColor" />
        <path d="M12 16v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Understand',
    subtitle: 'Real-Time Telemetry',
    body: 'The system processes movement vectors, heading, and velocity to build a live operational picture of the emergency route.',
    color: '#F59E0B',
    iconPath: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 17l4-8 4 5 3-3 4 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="3" cy="17" r="1.5" fill="currentColor" />
        <circle cx="21" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Predict',
    subtitle: 'Spatial Intelligence',
    body: 'PostGIS geospatial engine identifies traffic signals, intersections, and obstacles within the 500m detection cone ahead.',
    color: '#1565C0',
    iconPath: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L8 8h8L12 2z" fill="currentColor" opacity="0.3" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Preempt',
    subtitle: 'Traffic Preemption',
    body: 'Signals in the ambulance path receive priority commands. Red turns amber, then green — before the ambulance arrives.',
    color: '#16A34A',
    iconPath: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="9" y="2" width="6" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="7" r="2" fill="#E53935" />
        <circle cx="12" cy="12" r="2" fill="#F59E0B" />
        <circle cx="12" cy="17" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Respond',
    subtitle: 'Emergency Escalation',
    body: 'If the ambulance is blocked, SOS triggers automatic dispatch of nearest police units via AI-generated voice alerts.',
    color: '#B71C1C',
    iconPath: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Resolve',
    subtitle: 'Command Center',
    body: 'The command center monitors all active missions, incidents, and outcomes. Mission lifecycle tracked from activation to completion.',
    color: '#102A43',
    iconPath: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 20h10M12 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 9h4M7 12h6M7 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="16" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <section id="how-it-works" className="relative py-24 bg-surface-bg overflow-hidden">
      <div className="absolute inset-0 bg-road-pattern pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-deep-blue rounded" />
            <span className="text-xs font-semibold text-deep-blue tracking-widest uppercase">Operational Flow</span>
            <span className="w-8 h-0.5 bg-deep-blue rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display">
            How <span className="text-gradient-navy">TVARIT Works</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Six coordinated stages — from ambulance detection to emergency resolution.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {/* Connecting SVG lines (desktop only) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#CBD5E0" />
              </marker>
            </defs>
          </svg>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={reduced ? {} : { opacity: 0, y: 28 }}
              animate={inView && !reduced ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative z-10 bg-white rounded-2xl border border-surface-border shadow-sm p-6 group"
            >
              {/* Top accent */}
              <div className="h-0.5 w-12 rounded mb-4" style={{ backgroundColor: step.color }} />

              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-3xl font-black leading-none font-display"
                  style={{ color: `${step.color}30` }}
                >
                  {step.num}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ color: step.color, backgroundColor: `${step.color}12` }}
                >
                  {step.iconPath}
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                  {step.subtitle}
                </p>
                <h3 className="text-lg font-bold text-command-navy mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>

              {/* Arrow indicator */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 z-20 items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                    <path d="M7 10h6M11 7l3 3-3 3" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
