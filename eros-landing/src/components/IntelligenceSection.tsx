import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const modules = [
  {
    id: 'gps',
    title: 'GPS + IoT',
    subtitle: 'Continuous Movement Telemetry',
    body: 'Every ambulance streams position, velocity, and heading continuously. IoT sensors add vehicle state awareness.',
    color: '#1565C0',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="13" r="8" stroke="#1565C0" strokeWidth="2" />
        <circle cx="16" cy="13" r="3" fill="#1565C0" opacity="0.4" />
        <circle cx="16" cy="13" r="1.5" fill="#1565C0" />
        <path d="M16 21v6" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 27h8" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="13" r="11" stroke="#1565C0" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'ai',
    title: 'AI Vision + Audio',
    subtitle: 'Anomaly & Siren Detection',
    body: 'Computer vision identifies traffic obstructions. Audio classifiers can detect ambulance sirens from edge nodes.',
    color: '#E53935',
    bg: 'bg-red-50',
    border: 'border-red-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="20" height="14" rx="3" stroke="#E53935" strokeWidth="2" />
        <circle cx="16" cy="15" r="4" stroke="#E53935" strokeWidth="1.5" />
        <circle cx="16" cy="15" r="1.5" fill="#E53935" />
        <path d="M4 6c4-3 20-3 24 0M4 26c4 3 20 3 24 0" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'geo',
    title: 'Geospatial Intelligence',
    subtitle: 'Road Context & Unit Finding',
    body: 'PostGIS understands road geometry, signal locations, and calculates nearest available police units in real time.',
    color: '#16A34A',
    bg: 'bg-green-50',
    border: 'border-green-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 26L12 8l6 10 4-6 6 14" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="8" r="2.5" fill="#16A34A" opacity="0.5" />
        <circle cx="28" cy="26" r="2.5" fill="#16A34A" />
        <circle cx="4" cy="26" r="2" fill="#16A34A" opacity="0.4" />
      </svg>
    ),
  },
]

const flowSteps = ['OBSERVE', 'UNDERSTAND', 'DECIDE', 'RESPOND']

export default function IntelligenceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <section className="relative py-24 bg-surface-bg overflow-hidden">
      <div className="absolute inset-0 bg-road-pattern pointer-events-none opacity-60" />

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
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
            <span className="text-xs font-semibold text-emergency-red tracking-widest uppercase">Intelligence Layer</span>
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display">
            The Intelligence Behind{' '}
            <span className="text-gradient-emergency">the Response</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            EROS doesn't just react — it observes, understands, decides, and responds. Every component is interconnected.
          </p>
        </motion.div>

        {/* Modules */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={reduced ? {} : { opacity: 0, y: 28 }}
              animate={inView && !reduced ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl border ${mod.border} ${mod.bg} p-6`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${mod.color}10` }}
              >
                {mod.icon}
              </div>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: mod.color }}>{mod.subtitle}</p>
              <h3 className="text-lg font-bold text-command-navy mb-2">{mod.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{mod.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Flow strip */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, scaleX: 0.8 }}
          animate={inView && !reduced ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-command-navy rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black border border-white/10"
                    style={{
                      background: i === 0 ? '#1565C020' : i === 1 ? '#F59E0B20' : i === 2 ? '#E5393520' : '#16A34A20',
                      color: i === 0 ? '#60A5FA' : i === 1 ? '#FCD34D' : i === 2 ? '#FCA5A5' : '#86EFAC',
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-white/80">{step}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="hidden sm:flex items-center flex-1 max-w-[80px]">
                    <motion.div
                      className="h-0.5 flex-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${['#1565C0', '#F59E0B', '#E53935'][i]}, ${['#F59E0B', '#E53935', '#16A34A'][i]})`,
                      }}
                      animate={reduced ? {} : { scaleX: [0, 1] }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                    />
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0" aria-hidden="true">
                      <path d="M1 1l6 5-6 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
