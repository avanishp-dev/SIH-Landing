import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CommandCenterPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const labels = [
    { text: 'LIVE TELEMETRY', top: '8%', left: '4%', color: '#16A34A' },
    { text: 'CORRIDOR ACTIVE', top: '12%', right: '8%', color: '#16A34A' },
    { text: '3 SIGNALS PRIORITIZED', bottom: '28%', left: '6%', color: '#F59E0B' },
    { text: 'POLICE UNIT DISPATCHED', bottom: '12%', right: '6%', color: '#4338CA' },
  ]

  return (
    <section className="relative py-24 bg-surface-bg overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-command-navy rounded" />
            <span className="text-xs font-semibold text-command-navy tracking-widest uppercase">Command Center</span>
            <span className="w-8 h-0.5 bg-command-navy rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display">
            Real-Time Command Center{' '}
            <span className="text-gradient-navy">Preview</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            A unified operational view — live map, active missions, telemetry, and incident management in one interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Browser frame */}
          <div className="rounded-2xl border border-surface-border bg-white shadow-2xl overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-command-navy border-b border-command-navy/20">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-slate-400 ml-2 font-mono">tvarit-command.local/dashboard</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">LIVE</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row min-h-[360px]">
              {/* Sidebar */}
              <div className="w-full lg:w-48 bg-slate-50 border-r border-surface-border p-4 flex lg:flex-col gap-3">
                {['Live Map', 'Incidents', 'Ambulances', 'Signals', 'Police'].map((item, i) => (
                  <div
                    key={item}
                    className={`text-xs font-medium px-3 py-2 rounded-lg ${
                      i === 0 ? 'bg-command-navy text-white' : 'text-text-secondary hover:bg-white'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main map area */}
              <div className="flex-1 relative bg-[#F1F5F9] min-h-[280px]">
                <svg viewBox="0 0 600 360" className="w-full h-full" aria-hidden="true">
                  <rect width="600" height="360" fill="#F1F5F9" />
                  {/* Grid */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <g key={i}>
                      <line x1={i * 120} y1="0" x2={i * 120} y2="360" stroke="#E2E8F0" strokeWidth="0.5" />
                      <line x1="0" y1={i * 72} x2="600" y2={i * 72} stroke="#E2E8F0" strokeWidth="0.5" />
                    </g>
                  ))}
                  {/* Roads */}
                  <rect x="0" y="160" width="600" height="20" fill="#D8E2EC" />
                  <rect x="280" y="0" width="20" height="360" fill="#D8E2EC" />
                  <rect x="0" y="80" width="600" height="12" fill="#D8E2EC" />
                  <rect x="120" y="0" width="12" height="360" fill="#D8E2EC" />

                  {/* Green corridor */}
                  <path d="M 40 170 L 280 170 L 280 86 L 420 86" stroke="#16A34A" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />

                  {/* Ambulances */}
                  {[
                    { x: 80, y: 165, id: 'A-07' },
                    { x: 320, y: 165, id: 'A-12' },
                    { x: 200, y: 75, id: 'A-03' },
                  ].map((a) => (
                    <g key={a.id}>
                      <rect x={a.x - 12} y={a.y - 6} width="24" height="12" rx="2" fill="white" stroke="#E53935" strokeWidth="1" />
                      <text x={a.x} y={a.y + 14} textAnchor="middle" fontSize="7" fill="#E53935" fontWeight="600" fontFamily="Inter">{a.id}</text>
                    </g>
                  ))}

                  {/* Police */}
                  <circle cx="480" cy="240" r="12" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
                  <text x="480" y="244" textAnchor="middle" fontSize="6" fill="#4338CA" fontWeight="700" fontFamily="Inter">PD</text>

                  {/* Hospital */}
                  <rect x="520" y="60" width="40" height="32" rx="4" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <text x="540" y="80" textAnchor="middle" fontSize="7" fill="#1565C0" fontWeight="700" fontFamily="Inter">HOSP</text>

                  {/* Traffic signals */}
                  {[
                    { x: 280, y: 150 },
                    { x: 280, y: 95 },
                    { x: 420, y: 75 },
                  ].map((s, i) => (
                    <circle key={i} cx={s.x} cy={s.y} r="5" fill="#16A34A" />
                  ))}
                </svg>

                {/* Floating labels */}
                {labels.map((label, idx) => (
                  <motion.div
                    key={label.text}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                    className="absolute text-[10px] font-bold px-2 py-1 rounded shadow-sm bg-white border border-surface-border"
                    style={{
                      top: label.top,
                      left: label.left,
                      right: label.right,
                      bottom: label.bottom,
                      color: label.color,
                    }}
                  >
                    ● {label.text}
                  </motion.div>
                ))}

                {/* Incident card */}
                <div className="absolute bottom-4 left-4 right-4 lg:right-auto lg:w-56 bg-white border border-emergency-red/30 rounded-lg p-3 shadow-md">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emergency-red animate-pulse" />
                    <span className="text-[10px] font-bold text-emergency-red">INCIDENT #042</span>
                  </div>
                  <p className="text-xs font-semibold text-command-navy">Ambulance A-07 — Corridor Active</p>
                  <p className="text-[10px] text-text-secondary mt-0.5">3 signals prioritized · ETA 04:32</p>
                </div>
              </div>

              {/* Telemetry panel */}
              <div className="w-full lg:w-44 bg-slate-50 border-l border-surface-border p-4 hidden lg:block">
                <p className="text-[10px] font-bold text-text-secondary tracking-wider mb-3">TELEMETRY</p>
                {[
                  { label: 'Active Units', value: '3' },
                  { label: 'Signals', value: '12' },
                  { label: 'Incidents', value: '1' },
                  { label: 'MQTT', value: 'Connected' },
                ].map((t) => (
                  <div key={t.label} className="mb-3">
                    <p className="text-[10px] text-text-secondary">{t.label}</p>
                    <p className="text-sm font-bold text-command-navy">{t.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
