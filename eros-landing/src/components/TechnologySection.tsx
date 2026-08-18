import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const layers = [
  {
    name: 'EDGE',
    items: ['GPS', 'AI Vision', 'Audio'],
    color: '#E53935',
    desc: 'Sensors and edge processing near the data source',
  },
  {
    name: 'EVENT',
    items: ['MQTT', 'HiveMQ'],
    color: '#F59E0B',
    desc: 'High-frequency telemetry event streaming',
  },
  {
    name: 'INTELLIGENCE',
    items: ['FastAPI', 'Spatial Engine', 'Redis'],
    color: '#1565C0',
    desc: 'Real-time processing and geospatial decisions',
  },
  {
    name: 'DATA',
    items: ['PostgreSQL', 'PostGIS'],
    color: '#102A43',
    desc: 'Durable geographic and operational storage',
  },
  {
    name: 'RESPONSE',
    items: ['Traffic Signals', 'Police', 'RoIP'],
    color: '#4338CA',
    desc: 'Physical world actuators and dispatch',
  },
  {
    name: 'EXPERIENCE',
    items: ['Command Center', 'Mapbox', 'WebSockets'],
    color: '#16A34A',
    desc: 'Live operational dashboard for dispatchers',
  },
]

export default function TechnologySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="technology" className="relative py-24 bg-surface-bg overflow-hidden">
      <div className="absolute inset-0 bg-road-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-deep-blue rounded" />
            <span className="text-xs font-semibold text-deep-blue tracking-widest uppercase">Architecture</span>
            <span className="w-8 h-0.5 bg-deep-blue rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display">
            Layered System{' '}
            <span className="text-gradient-navy">Architecture</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            From edge sensors to command center — each layer handles a distinct part of the emergency response pipeline.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="bg-white border border-surface-border rounded-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 sm:w-44 flex-shrink-0">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span className="text-sm font-black tracking-widest text-command-navy">{layer.name}</span>
                </div>
                <div className="flex flex-wrap gap-2 flex-1">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${layer.color}10`, color: layer.color }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-text-secondary sm:w-48 sm:text-right">{layer.desc}</p>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2v12M4 10l4 4 4-4" stroke="#CBD5E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
