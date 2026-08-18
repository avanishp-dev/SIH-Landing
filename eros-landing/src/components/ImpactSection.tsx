import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Heart, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Heart,
    title: 'Social Impact',
    color: '#E53935',
    bg: 'from-red-50 to-white',
    items: [
      'Faster emergency movement',
      'Improved emergency coordination',
      'Better response visibility',
      'Greater road safety around emergency corridors',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Economic Impact',
    color: '#1565C0',
    bg: 'from-blue-50 to-white',
    items: [
      'Reduced emergency-response delays',
      'More efficient use of police resources',
      'Lower productivity loss from unnecessary road blockages',
      'Better utilization of emergency infrastructure',
    ],
  },
  {
    icon: Building2,
    title: 'Urban Impact',
    color: '#16A34A',
    bg: 'from-green-50 to-white',
    items: [
      'Smarter traffic coordination',
      'Real-time emergency mobility',
      'More efficient intersections',
      'Connected emergency-response ecosystem',
    ],
  },
]

const ecosystemLabels = [
  'Ambulances', 'Police', 'Traffic Signals', 'Hospitals', 'Control Rooms', 'AI Edge Nodes',
]

export default function ImpactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="impact" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
            <span className="text-xs font-semibold text-emergency-red tracking-widest uppercase">Widespread Impact</span>
            <span className="w-8 h-0.5 bg-emergency-red rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display">
            Saving Time. Saving Lives.{' '}
            <span className="text-gradient-emergency">Moving Cities.</span>
          </h2>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl border border-surface-border bg-gradient-to-b ${pillar.bg} p-6 shadow-sm overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: pillar.color }} />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${pillar.color}12`, color: pillar.color }}
              >
                <pillar.icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-command-navy mb-4">{pillar.title}</h3>
              <ul className="space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: pillar.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative bg-surface-bg border border-surface-border rounded-2xl p-8 sm:p-12"
        >
          <div className="relative flex flex-col items-center">
            <p className="text-xs font-bold text-corridor-green tracking-widest uppercase mb-2">Faster Response</p>
            <div className="flex items-center gap-8 sm:gap-16 w-full justify-center flex-wrap">
              <div className="text-center">
                <p className="text-xs font-bold text-traffic-amber tracking-wider mb-1">TRAFFIC</p>
                <p className="text-xs font-bold text-traffic-amber tracking-wider">EFFICIENCY</p>
                <span className="text-2xl text-traffic-amber hidden sm:block">←</span>
              </div>

              <div className="relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-command-navy flex items-center justify-center shadow-lg">
                  <span className="text-2xl sm:text-3xl font-black text-white font-display">TVARIT</span>
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-corridor-green/30" />
              </div>

              <div className="text-center">
                <p className="text-xs font-bold text-deep-blue tracking-wider mb-1">EMERGENCY</p>
                <p className="text-xs font-bold text-deep-blue tracking-wider">COORDINATION</p>
                <span className="text-2xl text-deep-blue hidden sm:block">→</span>
              </div>
            </div>
            <p className="text-xs font-bold text-emergency-red tracking-widest uppercase mt-4">Safer Cities</p>

            {/* Surrounding labels */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {ecosystemLabels.map((label) => (
                <span
                  key={label}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-surface-border text-text-secondary"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
