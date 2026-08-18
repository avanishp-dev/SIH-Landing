import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-command-navy via-[#1a3a5c] to-[#0d2137]" />
      <div className="absolute inset-0 bg-road-pattern opacity-5" />

      {/* Decorative route line */}
      <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
        <path d="M 0 200 Q 300 100 600 200 T 1200 180" stroke="#16A34A" strokeWidth="2" fill="none" strokeDasharray="12 8" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight mb-6">
            <span className="text-white">Every Second Counted.</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corridor-green to-emerald-400">
              Every Route Cleared.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            TVARIT turns real-time data into coordinated emergency action, ensuring priority routes when it matters most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/login"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(229, 57, 53, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-emergency-red hover:bg-emergency-burgundy text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Enter Command Center
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all bg-white/5 backdrop-blur-sm"
            >
              Explore How It Works
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
