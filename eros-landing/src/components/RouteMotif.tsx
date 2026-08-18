import { motion, useReducedMotion } from 'framer-motion'

export default function RouteMotif() {
  const reduced = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute w-full h-full opacity-[0.07]"
        viewBox="0 0 1440 6000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 80 200 Q 200 400 350 600 T 600 1000 Q 750 1200 900 1400 T 1100 1800 Q 1300 2000 1200 2300 T 900 2700 Q 700 2900 800 3200 T 1100 3600 Q 1300 3800 1100 4100 T 700 4500 Q 500 4700 600 5000 T 900 5400 Q 1100 5600 1000 5800"
          stroke="#16A34A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="12 8"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reduced ? 0 : 4, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 1360 300 Q 1200 500 1050 750 T 850 1200 Q 700 1400 850 1650 T 1100 2100 Q 1250 2300 1150 2600 T 850 3000 Q 650 3200 750 3500 T 1050 3900 Q 1250 4100 1050 4400 T 750 4800 Q 550 5000 650 5300 T 950 5700"
          stroke="#1565C0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8 6"
          opacity="0.6"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reduced ? 0 : 5, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
