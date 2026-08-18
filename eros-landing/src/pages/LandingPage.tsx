import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import SolutionFlow from '../components/SolutionFlow'
import HowItWorks from '../components/HowItWorks'
import GreenCorridor from '../components/GreenCorridor'
import IntelligenceSection from '../components/IntelligenceSection'
import SOSSection from '../components/SOSSection'
import CommandCenterPreview from '../components/CommandCenterPreview'
import ImpactSection from '../components/ImpactSection'
import TechnologySection from '../components/TechnologySection'
import ArchitectureHighlights from '../components/ArchitectureHighlights'
import TeamSection from '../components/TeamSection'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import RouteMotif from '../components/RouteMotif'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <RouteMotif />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <SolutionFlow />
          <HowItWorks />
          <GreenCorridor />
          <IntelligenceSection />
          <SOSSection />
          <CommandCenterPreview />
          <ImpactSection />
          <TechnologySection />
          <ArchitectureHighlights />
          <TeamSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
