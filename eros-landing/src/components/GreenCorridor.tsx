import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CorridorDiagram = () => {
  const reduced = useReducedMotion()

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#0F1E2F] border border-slate-700/60 shadow-2xl">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-[#0A1628] border-b border-slate-700/40">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emergency-red animate-pulse" />
          <span className="text-xs font-bold text-white tracking-wider">CORRIDOR CONTROL</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-green-400 font-semibold">ACTIVE</span>
          <span className="text-xs text-slate-500">Mission: A-07</span>
        </div>
      </div>

      {/* Main diagram */}
      <div className="p-6 sm:p-8">
        <svg
          viewBox="0 0 600 260"
          className="w-full h-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Road background */}
          <rect x="0" y="100" width="600" height="60" fill="#1E293B" />
          <rect x="0" y="130" width="600" height="2" stroke="#334155" strokeWidth="1" strokeDasharray="20 12" fill="none" />

          {/* Road shoulder lines */}
          <rect x="0" y="98" width="600" height="4" fill="#2D3748" />
          <rect x="0" y="158" width="600" height="4" fill="#2D3748" />

          {/* Detection cone */}
          <motion.path
            d="M 110 130 L 250 80 L 250 180 Z"
            fill="#16A34A"
            opacity="0.12"
            animate={reduced ? {} : { opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 110 130 L 250 80 L 250 180 Z"
            stroke="#16A34A"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            animate={reduced ? {} : { opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* 500m radius label */}
          <text x="185" y="72" textAnchor="middle" fontSize="9" fill="#16A34A" fontFamily="Inter" fontWeight="600" opacity="0.8">500m</text>

          {/* GREEN CORRIDOR – animated route line */}
          <motion.rect
            x="60" y="113" width="480" height="34" rx="3"
            fill="#16A34A"
            opacity="0.1"
            animate={reduced ? {} : { opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* ── AMBULANCE ── */}
          <motion.g
            animate={reduced ? {} : { x: [0, 40, 80, 120] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          >
            {/* Body */}
            <rect x="28" y="115" width="62" height="30" rx="4" fill="white" />
            <rect x="28" y="115" width="22" height="30" rx="4" fill="#EFF6FF" />
            {/* Red cross */}
            <rect x="33" y="122" width="12" height="16" rx="2" fill="#F8FAFC" />
            <rect x="36" y="125" width="6" height="10" rx="1" fill="#E53935" />
            <rect x="34" y="128" width="10" height="4" rx="1" fill="#E53935" />
            {/* Wheels */}
            <circle cx="44" cy="147" r="4" fill="#374151" />
            <circle cx="76" cy="147" r="4" fill="#374151" />
            {/* Siren */}
            <motion.rect
              x="50" y="112" width="14" height="5" rx="2" fill="#E53935"
              animate={reduced ? {} : { fill: ['#E53935', '#1565C0', '#E53935'] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            {/* Radar pulse */}
            <motion.circle
              cx="59" cy="130" r="20"
              stroke="#16A34A"
              strokeWidth="1"
              fill="none"
              animate={reduced ? {} : { r: [15, 50], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </motion.g>

          {/* ── SIGNAL 1 (ahead) ── */}
          <g transform="translate(220, 60)">
            <rect x="-4" y="0" width="8" height="50" rx="3" fill="#374151" />
            <rect x="-14" y="0" width="28" height="36" rx="4" fill="#1E293B" stroke="#374151" strokeWidth="1" />
            <motion.circle
              cx="0" cy="10" r="5"
              animate={reduced ? { fill: '#16A34A' } : { fill: ['#E53935', '#F59E0B', '#16A34A'] }}
              transition={{ duration: 4, times: [0, 0.3, 0.5], repeat: Infinity }}
            />
            <motion.circle
              cx="0" cy="22" r="5"
              animate={reduced ? { fill: '#16A34A' } : { fill: ['transparent', '#F59E0B', 'transparent'] }}
              transition={{ duration: 4, times: [0, 0.35, 0.6], repeat: Infinity }}
            />
            <motion.circle
              cx="0" cy="34" r="5"
              animate={reduced ? { fill: '#16A34A' } : { fill: ['transparent', 'transparent', '#16A34A'] }}
              transition={{ duration: 4, times: [0, 0.45, 0.6], repeat: Infinity }}
            />
          </g>

          {/* Signal 1 label */}
          <motion.g animate={reduced ? {} : { opacity: [0, 1, 1, 0] }} transition={{ duration: 4, times: [0, 0.45, 0.9, 1], repeat: Infinity }}>
            <rect x="188" y="42" width="66" height="14" rx="3" fill="#16A34A" />
            <text x="221" y="52" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700" fontFamily="Inter">PRIORITY ACTIVATED</text>
          </motion.g>

          {/* ── SIGNAL 2 ── */}
          <g transform="translate(380, 60)">
            <rect x="-4" y="0" width="8" height="50" rx="3" fill="#374151" />
            <rect x="-14" y="0" width="28" height="36" rx="4" fill="#1E293B" stroke="#374151" strokeWidth="1" />
            <motion.circle
              cx="0" cy="10" r="5"
              animate={reduced ? { fill: '#16A34A' } : { fill: ['#E53935', '#E53935', '#16A34A'] }}
              transition={{ duration: 5, times: [0, 0.55, 0.7], repeat: Infinity }}
            />
            <motion.circle cx="0" cy="22" r="5" fill="transparent" />
            <motion.circle
              cx="0" cy="34" r="5"
              animate={reduced ? { fill: '#16A34A' } : { fill: ['transparent', 'transparent', '#16A34A'] }}
              transition={{ duration: 5, times: [0, 0.5, 0.7], repeat: Infinity }}
            />
          </g>

          {/* ── HOSPITAL ── */}
          <rect x="520" y="90" width="70" height="50" rx="6" fill="#1E3A5F" stroke="#1565C0" strokeWidth="1.5" />
          <text x="555" y="108" textAnchor="middle" fontSize="8" fill="#93C5FD" fontWeight="700" fontFamily="Inter">HOSPITAL</text>
          <rect x="549" y="112" width="12" height="20" rx="1" fill="#1565C0" />
          <rect x="543" y="118" width="24" height="8" rx="1" fill="#1565C0" />
          <circle cx="555" cy="90" r="5" fill="#16A34A" stroke="#0F1E2F" strokeWidth="1.5" />

          {/* ETA label */}
          <rect x="524" y="144" width="62" height="14" rx="3" fill="#16A34A" opacity="0.9" />
          <text x="555" y="154" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700" fontFamily="Inter">ETA: 04:32 MIN</text>

          {/* Floating data chips */}
          <motion.g animate={reduced ? {} : { y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <rect x="60" y="60" width="96" height="32" rx="5" fill="#0A1628" stroke="#16A34A" strokeWidth="1" />
            <text x="72" y="74" fontSize="7" fill="#16A34A" fontWeight="700" fontFamily="Inter">● LIVE</text>
            <text x="92" y="74" fontSize="7" fill="white" fontFamily="Inter">AMBULANCE A-07</text>
            <text x="72" y="85" fontSize="6.5" fill="#64748B" fontFamily="Inter">62 km/h  |  Corridor Active</text>
          </motion.g>

          <motion.g animate={reduced ? {} : { y: [0, -3, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>
            <rect x="290" y="172" width="90" height="24" rx="4" fill="#0A1628" stroke="#F59E0B" strokeWidth="1" />
            <text x="335" y="183" textAnchor="middle" fontSize="7.5" fill="#F59E0B" fontWeight="600" fontFamily="Inter">CORRIDOR RESTORED</text>
            <text x="335" y="192" textAnchor="middle" fontSize="6.5" fill="#64748B" fontFamily="Inter">Post-clearance signal reset</text>
          </motion.g>
        </svg>
      </div>
    </div>
  )
}

export default function GreenCorridor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-road-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-corridor-green rounded" />
              <span className="text-xs font-semibold text-corridor-green tracking-widest uppercase">Signature Feature</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display leading-tight mb-5">
              A Green Corridor{' '}
              <span className="text-gradient-green">That Thinks Ahead.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-7">
              Before the ambulance reaches an intersection, EROS has already identified it, commanded a priority transition, and confirmed the green light. The corridor is cleared before it is needed.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4">
              {[
                { icon: '◦', color: '#16A34A', label: '500m Directional Detection', desc: 'A 120° cone continuously scans the ambulance path for upcoming signals.' },
                { icon: '◦', color: '#F59E0B', label: 'Red → Amber → Green Transition', desc: 'Signal states are commanded in sequence, not overridden abruptly.' },
                { icon: '◦', color: '#1565C0', label: 'Post-Clearance Reset', desc: 'Signals return to normal operation after the ambulance passes.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-black"
                    style={{ color: f.color, backgroundColor: `${f.color}12` }}
                  >
                    ●
                  </div>
                  <div>
                    <p className="font-semibold text-command-navy text-sm">{f.label}</p>
                    <p className="text-xs text-text-secondary mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CorridorDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
