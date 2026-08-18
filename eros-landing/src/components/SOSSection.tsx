import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, MapPin, Radio, Shield, Truck } from 'lucide-react'

const steps = [
  { label: 'Ambulance Blocked', icon: Truck, color: '#E53935' },
  { label: 'SOS / AI Detection', icon: AlertTriangle, color: '#F59E0B' },
  { label: 'Location Identified', icon: MapPin, color: '#1565C0' },
  { label: 'Nearest Police Unit', icon: Shield, color: '#4338CA' },
  { label: 'Voice / Radio Alert', icon: Radio, color: '#102A43' },
  { label: 'Corridor Cleared', icon: Truck, color: '#16A34A' },
]

export default function SOSSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-blue-50/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
            <span className="text-xs font-semibold text-emergency-red tracking-widest uppercase">Emergency Escalation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display leading-tight mb-4">
            When The Ambulance Stops,{' '}
            <span className="text-gradient-emergency">The System Starts Moving.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Blocked ambulances trigger automatic SOS escalation — nearest police units receive voice alerts while the command center tracks the incident.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Flow steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-4 bg-white border border-surface-border rounded-xl p-4 shadow-sm"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${step.color}12`, color: step.color }}
                >
                  <step.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold tracking-wider uppercase" style={{ color: step.color }}>
                    Step {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="font-semibold text-command-navy">{step.label}</p>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-text-secondary text-lg hidden sm:block">↓</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl border border-surface-border bg-[#F1F5F9] overflow-hidden shadow-lg"
          >
            <div className="px-4 py-2 bg-command-navy flex items-center justify-between">
              <span className="text-xs text-white font-semibold">SOS INCIDENT MAP</span>
              <span className="text-xs text-emergency-red font-medium animate-pulse">● ACTIVE</span>
            </div>
            <svg viewBox="0 0 400 300" className="w-full" aria-hidden="true">
              <rect width="400" height="300" fill="#F1F5F9" />
              <rect x="0" y="130" width="400" height="30" fill="#D8E2EC" />
              <rect x="180" y="0" width="30" height="300" fill="#D8E2EC" />

              {/* Connection lines */}
              <motion.line
                x1="100" y1="145" x2="200" y2="80"
                stroke="#E53935" strokeWidth="2" strokeDasharray="6 4"
                initial={reduced ? {} : { pathLength: 0 }}
                animate={inView && !reduced ? { opacity: [0.3, 1, 0.3] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.line
                x1="100" y1="145" x2="300" y2="200"
                stroke="#4338CA" strokeWidth="2" strokeDasharray="6 4"
                initial={reduced ? {} : { pathLength: 0 }}
                animate={inView && !reduced ? { opacity: [0.3, 1, 0.3] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.line
                x1="200" y1="80" x2="300" y2="200"
                stroke="#1565C0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"
              />

              {/* Ambulance (blocked) */}
              <g>
                <circle cx="100" cy="145" r="24" fill="#FEE2E2" stroke="#E53935" strokeWidth="1.5" strokeDasharray="4 2" />
                <rect x="88" y="138" width="24" height="12" rx="2" fill="white" stroke="#E53935" strokeWidth="1" />
                <text x="100" y="175" textAnchor="middle" fontSize="8" fill="#E53935" fontWeight="700" fontFamily="Inter">BLOCKED</text>
              </g>

              {/* Command center */}
              <g>
                <rect x="175" y="55" width="50" height="36" rx="4" fill="#102A43" />
                <text x="200" y="72" textAnchor="middle" fontSize="7" fill="white" fontWeight="700" fontFamily="Inter">COMMAND</text>
                <text x="200" y="82" textAnchor="middle" fontSize="7" fill="#94A3B8" fontFamily="Inter">CENTER</text>
              </g>

              {/* Police unit */}
              <g>
                <circle cx="300" cy="200" r="20" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
                <text x="300" y="198" textAnchor="middle" fontSize="7" fill="#4338CA" fontWeight="700" fontFamily="Inter">POLICE</text>
                <text x="300" y="208" textAnchor="middle" fontSize="7" fill="#4338CA" fontFamily="Inter">UNIT</text>
              </g>

              {/* Radio waves */}
              <motion.g
                animate={reduced ? {} : { opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M 200 90 Q 250 120 300 190" stroke="#102A43" strokeWidth="1" fill="none" strokeDasharray="3 2" />
                <circle cx="250" cy="130" r="8" fill="none" stroke="#102A43" strokeWidth="1" opacity="0.5" />
                <circle cx="250" cy="130" r="14" fill="none" stroke="#102A43" strokeWidth="0.8" opacity="0.3" />
              </motion.g>

              <rect x="20" y="240" width="140" height="40" rx="4" fill="#102A43" opacity="0.92" />
              <text x="30" y="255" fontSize="7" fill="#F59E0B" fontWeight="700" fontFamily="Inter">RADIO DISPATCH</text>
              <text x="30" y="268" fontSize="6.5" fill="white" fontFamily="Inter">"Unit OD-PCR-001, ambulance</text>
              <text x="30" y="278" fontSize="6.5" fill="white" fontFamily="Inter">blocked at Intersection X..."</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
