import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin } from 'lucide-react'
import { teamMembers } from '../data/team'

export default function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="team" className="relative py-24 bg-surface-bg overflow-hidden">
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
            <span className="w-8 h-0.5 bg-command-navy rounded" />
            <span className="text-xs font-semibold text-command-navy tracking-widest uppercase">Our Team</span>
            <span className="w-8 h-0.5 bg-command-navy rounded" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-command-navy font-display">
            Meet the Team
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Six members building the next generation of emergency mobility infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-surface-border rounded-2xl p-6 shadow-sm text-center group"
            >
              {/* Avatar placeholder */}
              <div className="relative mx-auto w-20 h-20 mb-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-surface-border flex items-center justify-center">
                  <span className="text-2xl font-black text-slate-300 font-display">{member.id}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-corridor-green border-2 border-white" />
              </div>

              <p className="text-[10px] font-bold text-text-secondary tracking-widest uppercase mb-1">
                {member.placeholder}
              </p>
              <h3 className="text-lg font-bold text-command-navy">{member.name}</h3>
              <p className="text-sm font-medium text-emergency-red mb-2">{member.role}</p>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">{member.contribution}</p>

              <div className="flex items-center justify-center gap-3 opacity-40 group-hover:opacity-70 transition-opacity">
                <button className="p-1.5 rounded-lg hover:bg-surface-bg transition-colors" aria-label="GitHub placeholder">
                  <Github size={16} className="text-command-navy" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-surface-bg transition-colors" aria-label="LinkedIn placeholder">
                  <Linkedin size={16} className="text-command-navy" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
