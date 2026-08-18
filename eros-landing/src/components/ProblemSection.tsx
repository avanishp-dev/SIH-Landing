import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="12" width="24" height="4" rx="2" fill="currentColor" opacity="0.3" />
        <rect x="2" y="7" width="24" height="4" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="2" y="17" width="24" height="4" rx="2" fill="currentColor" opacity="0.7" />
        <circle cx="14" cy="14" r="5" fill="currentColor" opacity="0.2" />
        <path d="M10 14l8 0M14 10l0 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: '#E53935',
    bg: 'bg-red-50',
    border: 'border-red-100',
    label: 'CONGESTION',
    title: 'Traffic Congestion',
    body: 'Gridlocked roads slow emergency movement when every second counts. Ambulances lose critical response time stuck in urban traffic.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    accent: '#F59E0B',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    label: 'DELAY POINT',
    title: 'Red Signals',
    body: 'A single intersection can become a critical delay point. Manual signal operations cannot react fast enough to clear emergency routes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 11h10M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="21" cy="8" r="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.5 8h3M21 6.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#1565C0',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    label: 'VISIBILITY',
    title: 'Limited Visibility',
    body: 'Control rooms lack a unified real-time view of ambulance positions, route conditions, and signal states across the city.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M14 8v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 5l2 2M19 21l2 2M5 19l2-2M21 7l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    accent: '#102A43',
    bg: 'bg-slate-50',
    border: 'border-slate-100',
    label: 'RESPONSE',
    title: 'Delayed Assistance',
    body: 'When an ambulance is blocked, nearby police and responders often lack the real-time awareness to intervene and clear the route.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="problem" className="relative py-24 bg-white overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-road-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
            <span className="text-xs font-semibold text-emergency-red tracking-widest uppercase">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display leading-tight mb-4">
            Traffic Should Never{' '}
            <span className="text-gradient-emergency">Decide Who Lives.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Every minute an ambulance spends stuck in traffic is a minute that cannot be recovered. The city needs to respond — not wait.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-xl border ${p.border} ${p.bg} p-6 group overflow-hidden`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ backgroundColor: p.accent }} />

              {/* Label chip */}
              <span
                className="inline-block text-[10px] font-bold tracking-widest px-2 py-0.5 rounded mb-3"
                style={{ color: p.accent, backgroundColor: `${p.accent}12` }}
              >
                {p.label}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ color: p.accent, backgroundColor: `${p.accent}10` }}
              >
                {p.icon}
              </div>

              {/* Text */}
              <h3 className="font-bold text-command-navy text-base mb-2">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
