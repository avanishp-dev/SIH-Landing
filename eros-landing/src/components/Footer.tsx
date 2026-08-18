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
    <footer className="bg-command-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-white font-display mb-1">EROS</h3>
            <p className="text-xs text-slate-400 mb-4">Emergency Response & Operational System</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Intelligent emergency mobility platform for real-time ambulance coordination and traffic preemption.
            </p>
            <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
              Smart India Hackathon 2026
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} EROS. Prototype platform for demonstration purposes.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
