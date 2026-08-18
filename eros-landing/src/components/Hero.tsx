import { motion, useReducedMotion } from 'framer-motion'

/* ─── tiny city map SVG visual ─────────────────────────────────────────────── */
const CityMapVisual = () => {
  const reduced = useReducedMotion()

  return (
    <div className="relative w-full h-full min-h-[420px] select-none">
      {/* Map base */}
      <svg
        viewBox="0 0 520 400"
        className="w-full h-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background map fill */}
        <rect width="520" height="400" rx="16" fill="#F1F5F9" />

        {/* Water body – subtle blue */}
        <ellipse cx="460" cy="360" rx="80" ry="60" fill="#E0F2FE" opacity="0.6" />

        {/* City blocks */}
        {[
          [30, 30, 90, 60], [140, 30, 80, 60], [240, 30, 70, 60], [330, 30, 90, 60],
          [30, 120, 90, 70], [140, 120, 80, 70], [240, 120, 70, 70], [330, 120, 90, 70],
          [30, 220, 90, 60], [140, 220, 80, 60], [240, 220, 70, 60], [330, 220, 60, 60],
          [30, 310, 90, 70], [140, 310, 80, 70],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="#E8EEF4" stroke="#D1D9E0" strokeWidth="0.5" />
        ))}

        {/* Primary roads – horizontal */}
        <rect x="0" y="100" width="420" height="14" fill="#D8E2EC" />
        <rect x="0" y="200" width="420" height="14" fill="#D8E2EC" />
        <rect x="0" y="295" width="420" height="14" fill="#D8E2EC" />
        {/* Primary roads – vertical */}
        <rect x="125" y="0" width="10" height="400" fill="#D8E2EC" />
        <rect x="225" y="0" width="10" height="400" fill="#D8E2EC" />
        <rect x="325" y="0" width="10" height="400" fill="#D8E2EC" />
        <rect x="420" y="0" width="10" height="400" fill="#D8E2EC" />

        {/* Dashed road centre lines */}
        <line x1="0" y1="107" x2="420" y2="107" stroke="white" strokeWidth="1" strokeDasharray="12 8" />
        <line x1="0" y1="207" x2="420" y2="207" stroke="white" strokeWidth="1" strokeDasharray="12 8" />
        <line x1="130" y1="0" x2="130" y2="400" stroke="white" strokeWidth="1" strokeDasharray="12 8" />
        <line x1="230" y1="0" x2="230" y2="400" stroke="white" strokeWidth="1" strokeDasharray="12 8" />
        <line x1="330" y1="0" x2="330" y2="400" stroke="white" strokeWidth="1" strokeDasharray="12 8" />

        {/* GREEN CORRIDOR – the active route */}
        <motion.path
          d="M 50 207 L 125 207 L 125 107 L 230 107 L 230 200 L 325 200 L 325 107 L 420 107"
          stroke="#16A34A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="500"
          strokeDashoffset={reduced ? 0 : undefined}
          initial={reduced ? {} : { strokeDashoffset: 500 }}
          animate={reduced ? {} : { strokeDashoffset: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
          opacity="0.9"
        />
        {/* Glow layer */}
        <motion.path
          d="M 50 207 L 125 207 L 125 107 L 230 107 L 230 200 L 325 200 L 325 107 L 420 107"
          stroke="#16A34A"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="500"
          strokeDashoffset={reduced ? 0 : undefined}
          initial={reduced ? {} : { strokeDashoffset: 500 }}
          animate={reduced ? {} : { strokeDashoffset: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
          opacity="0.15"
        />

        {/* ── Traffic Signals ── */}
        {/* Signal at 125,107 */}
        <motion.circle
          cx="125" cy="100" r="7"
          animate={reduced ? { fill: '#16A34A' } : { fill: ['#E53935', '#F59E0B', '#16A34A', '#16A34A'] }}
          transition={{ duration: 4, times: [0, 0.3, 0.5, 1], repeat: Infinity, repeatDelay: 0.5 }}
        />
        <rect x="122" y="91" width="6" height="10" rx="2" fill="#374151" />

        {/* Signal at 230,107 */}
        <motion.circle
          cx="230" cy="100" r="7"
          animate={reduced ? { fill: '#16A34A' } : { fill: ['#E53935', '#E53935', '#F59E0B', '#16A34A'] }}
          transition={{ duration: 4, times: [0, 0.4, 0.6, 1], repeat: Infinity, repeatDelay: 1 }}
        />
        <rect x="227" y="91" width="6" height="10" rx="2" fill="#374151" />

        {/* Signal at 325,107 */}
        <motion.circle
          cx="325" cy="100" r="7"
          animate={reduced ? { fill: '#16A34A' } : { fill: ['#E53935', '#E53935', '#E53935', '#F59E0B', '#16A34A'] }}
          transition={{ duration: 5, times: [0, 0.3, 0.5, 0.65, 1], repeat: Infinity, repeatDelay: 0.5 }}
        />
        <rect x="322" y="91" width="6" height="10" rx="2" fill="#374151" />

        {/* ── Hospital marker ── */}
        <rect x="428" y="82" width="48" height="40" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
        <text x="452" y="98" textAnchor="middle" fontSize="9" fill="#1565C0" fontWeight="700" fontFamily="Inter">HOSPITAL</text>
        <rect x="448" y="100" width="8" height="14" rx="1" fill="#1565C0" />
        <rect x="444" y="104" width="16" height="6" rx="1" fill="#1565C0" />

        {/* ── Police marker ── */}
        <circle cx="240" cy="300" r="16" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
        <text x="240" y="296" textAnchor="middle" fontSize="7" fill="#4338CA" fontWeight="700" fontFamily="Inter">POLICE</text>
        <text x="240" y="306" textAnchor="middle" fontSize="7" fill="#4338CA" fontWeight="600" fontFamily="Inter">UNIT</text>

        {/* ── Ambulance ── */}
        <motion.g
          animate={reduced ? {} : { x: [0, 80, 80, 160, 160, 220] }}
          transition={reduced ? {} : { duration: 6, times: [0, 0.25, 0.3, 0.6, 0.65, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 }}
        >
          {/* Ambulance body */}
          <rect x="28" y="199" width="36" height="18" rx="3" fill="#ffffff" stroke="#102A43" strokeWidth="1.5" />
          <rect x="28" y="199" width="12" height="18" rx="3" fill="#EFF6FF" stroke="#102A43" strokeWidth="1.5" />
          {/* Red cross */}
          <rect x="31" y="204" width="6" height="8" rx="1" fill="#F8FAFC" />
          <rect x="33" y="206" width="2" height="4" fill="#E53935" />
          <rect x="32" y="207" width="4" height="2" fill="#E53935" />
          {/* Wheels */}
          <circle cx="36" cy="218" r="3" fill="#374151" />
          <circle cx="54" cy="218" r="3" fill="#374151" />
          {/* Siren lights */}
          <motion.circle
            cx="34" cy="200" r="2.5"
            animate={reduced ? {} : { fill: ['#E53935', '#1565C0', '#E53935'] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          <motion.circle
            cx="42" cy="200" r="2.5"
            animate={reduced ? {} : { fill: ['#1565C0', '#E53935', '#1565C0'] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        </motion.g>

        {/* Radar pulse around ambulance */}
        <motion.circle
          cx="46" cy="207" r="20"
          stroke="#16A34A"
          strokeWidth="1.5"
          fill="none"
          animate={reduced ? {} : { r: [15, 45], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.circle
          cx="46" cy="207" r="20"
          stroke="#16A34A"
          strokeWidth="1"
          fill="none"
          animate={reduced ? {} : { r: [15, 45], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
        />

        {/* ── Floating status labels ── */}
        {/* Ambulance label */}
        <motion.g animate={reduced ? {} : { y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="10" y="168" width="90" height="22" rx="4" fill="#102A43" opacity="0.92" />
          <text x="16" y="180" fontSize="7" fill="#16A34A" fontWeight="700" fontFamily="Inter">● LIVE</text>
          <text x="42" y="180" fontSize="7" fill="white" fontFamily="Inter">AMBULANCE A-07</text>
          <text x="16" y="189" fontSize="6.5" fill="#94A3B8" fontFamily="Inter">62 km/h  |  ETA 04:32</text>
        </motion.g>

        {/* Corridor Active label */}
        <motion.g animate={reduced ? {} : { y: [0, -2, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
          <rect x="152" y="68" width="100" height="22" rx="4" fill="#16A34A" opacity="0.95" />
          <text x="202" y="80" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700" fontFamily="Inter">CORRIDOR ACTIVE</text>
          <text x="202" y="89" textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,0.85)" fontFamily="Inter">3 SIGNALS PRIORITIZED</text>
        </motion.g>

        {/* Signal priority label */}
        <motion.g animate={reduced ? {} : { y: [0, -2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
          <rect x="345" y="68" width="84" height="14" rx="3" fill="#F59E0B" opacity="0.95" />
          <text x="387" y="78" textAnchor="middle" fontSize="7" fill="white" fontWeight="600" fontFamily="Inter">SIGNAL PRIORITY</text>
        </motion.g>
      </svg>
    </div>
  )
}

/* ─── Stat Strip ──────────────────────────────────────────────────────────── */
const stats = [
  { value: 'REAL-TIME', label: 'Live telemetry pipeline', color: 'text-emergency-red' },
  { value: '500 m', label: 'Traffic preemption detection radius', color: 'text-corridor-green' },
  { value: '90°', label: 'Directional field of view', color: 'text-deep-blue' },
  { value: '5 sec', label: 'Write-behind persistence cycle', color: 'text-traffic-amber' },
]

/* ─── Hero Component ────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-road-pattern pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EFF6FF] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EFF6FF]/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emergency-red/8 border border-emergency-red/20 text-emergency-red text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emergency-red animate-pulse" />
                Real-Time Emergency Mobility
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black leading-[1.1] text-command-navy font-display">
              When Every Second Matters,{' '}
              <span className="text-gradient-emergency">The Road Should Move</span>{' '}
              With You.
            </h1>

            {/* Subheading */}
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              EROS intelligently coordinates ambulances, traffic signals, emergency services and real-time city data to create faster, safer emergency corridors.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.a
                href="/login"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(229, 57, 53, 0.25)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-emergency-red hover:bg-emergency-burgundy text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Enter Command Center
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border border-command-navy/20 hover:border-command-navy text-command-navy font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 bg-white/60 backdrop-blur-sm"
              >
                See How It Works
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </div>

            {/* Trust note */}
            <p className="text-xs text-text-secondary flex items-center gap-2 pt-1">
              <span className="w-4 h-4 rounded-full bg-corridor-green/10 border border-corridor-green/30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-corridor-green" />
              </span>
              Smart India Hackathon 2026 — Prototype Platform
            </p>
          </motion.div>

          {/* ── Right: Map Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-2xl bg-white/80 backdrop-blur-sm">
              {/* Map header bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-command-navy border-b border-command-navy/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emergency-red animate-pulse" />
                  <span className="text-xs text-white font-semibold tracking-wider">EROS COMMAND</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-green-400 font-medium">● LIVE</span>
                  <span className="text-xs text-slate-400">Mission Active</span>
                </div>
              </div>
              {/* Map */}
              <CityMapVisual />
            </div>

            {/* Floating chip – ETA */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-white border border-surface-border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-corridor-green animate-pulse" />
              <div>
                <p className="text-xs font-bold text-command-navy">ETA 04:32</p>
                <p className="text-[10px] text-text-secondary">Corridor Active</p>
              </div>
            </motion.div>

            {/* Floating chip – Speed */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -top-3 -right-4 bg-white border border-surface-border rounded-xl px-3 py-2 shadow-lg"
            >
              <p className="text-xs font-bold text-deep-blue">62 km/h</p>
              <p className="text-[10px] text-text-secondary">Active Response</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative w-full border-t border-surface-border bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-border">
            {stats.map((stat, i) => (
              <div key={i} className="px-6 py-5 flex flex-col gap-0.5">
                <span className={`text-xl font-black font-display ${stat.color}`}>{stat.value}</span>
                <span className="text-xs text-text-secondary leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
