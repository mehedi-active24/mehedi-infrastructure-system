import HeroCommandCenter from "@/components/HeroCommandCenter";
import OperatorProfile from "@/components/OperatorProfile";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import BuildProcess from "@/components/BuildProcess";
import ArchitecturePreviews from "@/components/ArchitecturePreviews";
import DeliverabilityProof from "@/components/DeliverabilityProof";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SystemsToolkit from "@/components/SystemsToolkit";
import DeliverabilityIntelligence from "@/components/DeliverabilityIntelligence";
import InsightsLog from "@/components/InsightsLog";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-accent/30">
      <HeroCommandCenter />
      <OperatorProfile />
      <CapabilitiesGrid />
      <BuildProcess />
      <ArchitecturePreviews />
      <DeliverabilityProof />
      <CaseStudiesSection />
      <SystemsToolkit />
      <DeliverabilityIntelligence />
      <InsightsLog />
      <AuditCTA />
      <Footer />
    </main>
  );
}
