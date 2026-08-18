import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-bg flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-command-navy font-display mb-2">EROS</h1>
          <p className="text-text-secondary text-sm">Command Center Access</p>
        </div>
        <div className="bg-white border border-surface-border rounded-2xl p-8 shadow-sm">
          <p className="text-text-secondary mb-6">
            Authentication will be connected to the EROS backend. For now, this is a placeholder route.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emergency-red hover:text-emergency-burgundy transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  )
}
