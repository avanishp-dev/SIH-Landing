import { motion } from 'framer-motion'
import { Ambulance, Wifi, Building2, Trees, Github, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Green Corridor', href: '#green-corridor' },
    { label: 'Command Center', href: '#impact' },
  ],
  Impact: [
    { label: 'Social Impact', href: '#impact' },
    { label: 'Economic Impact', href: '#impact' },
    { label: 'Urban Impact', href: '#impact' },
  ],
  Technology: [
    { label: 'Architecture', href: '#technology' },
    { label: 'Real-Time Systems', href: '#technology' },
    { label: 'Edge AI', href: '#technology' },
  ],
  Team: [{ label: 'Meet the Team', href: '#team' }],
}

export default function Footer() {
  return (
    <footer className="bg-command-navy text-slate-300 relative pt-24 overflow-hidden border-t border-slate-800">
      
      {/* --- Animated Green Corridor Scene --- */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-command-navy to-slate-900 border-b border-slate-800 overflow-hidden">
        
        {/* Background Elements (Cityscape & Trees) */}
        <div className="absolute bottom-2 left-0 w-full flex items-end justify-around opacity-10 pointer-events-none">
          <Building2 size={48} />
          <Trees size={32} />
          <Building2 size={64} className="mb-[-10px]" />
          <Building2 size={40} />
          <Trees size={24} />
          <Building2 size={56} />
          <Trees size={40} />
          <Building2 size={48} />
        </div>

        {/* The Road */}
        <div className="absolute bottom-0 w-full h-2 bg-slate-800 flex items-center overflow-hidden">
          <div className="w-[200%] h-[1px] flex gap-4">
             <div className="w-full border-t border-dashed border-slate-600 opacity-30"></div>
          </div>
        </div>

        {/* The Traffic Light */}
        <div className="absolute right-[15vw] md:right-[20vw] bottom-2 flex flex-col items-center">
          <div className="bg-slate-900 p-1 rounded-sm border border-slate-700 flex flex-col gap-1 mb-0.5 shadow-lg">
            {/* Red Light */}
            <motion.div 
              animate={{ opacity: [1, 1, 0.1, 0.1, 1] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.55, 0.95, 1] }}
              className="w-2 h-2 rounded-full bg-emergency-red shadow-[0_0_8px_#ef4444]"
            />
            {/* Green Light */}
            <motion.div 
              animate={{ opacity: [0.1, 0.1, 1, 1, 0.1] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.55, 0.95, 1] }}
              className="w-2 h-2 rounded-full bg-corridor-green shadow-[0_0_8px_#10b981]"
            />
          </div>
          {/* Pole */}
          <div className="w-1 h-6 bg-slate-700" />
        </div>

        {/* The Ambulance */}
        <motion.div 
          animate={{ x: ['-20vw', '120vw'] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-2 flex items-center gap-2 z-10"
        >
          {/* Vehicle */}
          <div className="relative bg-white rounded-md p-1 shadow-[0_0_15px_rgba(255,255,255,0.15)] border-b-2 border-slate-200">
            <Ambulance size={28} className="text-emergency-red" />
            {/* Tiny blue siren light */}
            <motion.div 
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.4, repeat: Infinity }}
              className="absolute -top-1 left-1 w-2 h-1 bg-blue-500 rounded-t shadow-[0_0_10px_#3b82f6]"
            />
          </div>

          {/* V2X Signal Pulse (Wi-Fi Icon emitting from front of ambulance) */}
          <motion.div 
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], x: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-corridor-green absolute -right-6 top-1"
          >
            <Wifi size={20} className="rotate-90" />
          </motion.div>
        </motion.div>
      </div>
      {/* --- End Animated Scene --- */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black text-white font-display mb-2 tracking-tight">TVARIT</h3>
            <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-widest">Emergency Response System</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Intelligent emergency mobility platform for real-time ambulance coordination and traffic preemption. Saving lives through milliseconds.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              <div className="w-2 h-2 rounded-full bg-corridor-green animate-pulse" />
              <span className="text-xs font-semibold text-slate-300">Smart India Hackathon 2026</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TVARIT. Prototype platform for demonstration.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors" aria-label="Contact">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
