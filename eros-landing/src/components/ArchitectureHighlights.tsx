import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Database, Globe, Layers, Radio, Route } from 'lucide-react'

const highlights = [
  {
    icon: Radio,
    title: 'Event Driven',
    body: 'Telemetry flows independently through MQTT at 1Hz per vehicle.',
    color: '#E53935',
  },
  {
    icon: Globe,
    title: 'Spatially Intelligent',
    body: 'PostGIS understands real-world geographic relationships and nearest-neighbor queries.',
    color: '#1565C0',
  },
  {
    icon: Layers,
    title: 'Real-Time',
    body: 'WebSockets deliver live operational updates to the command center dashboard.',
    color: '#16A34A',
  },
  {
    icon: Cpu,
    title: 'Edge-Aware',
    body: 'AI vision and siren detection can happen near the data source on edge nodes.',
    color: '#F59E0B',
  },
  {
    icon: Database,
    title: 'Resilient',
    body: 'Redis separates fast telemetry buffering from durable PostgreSQL persistence.',
    color: '#102A43',
  },
  {
    icon: Route,
    title: 'Mission-Aware',
    body: 'Routes and ambulance missions have explicit lifecycle states from activation to resolution.',
    color: '#4338CA',
  },
]

export default function ArchitectureHighlights() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-command-navy font-display">
            Built for Real-Time Response
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-surface-bg border border-surface-border rounded-xl p-5 group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${item.color}12`, color: item.color }}
              >
                <item.icon size={20} />
              </div>
              <h3 className="font-bold text-command-navy mb-1">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
