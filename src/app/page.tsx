import HeroCommandCenter from "@/components/HeroCommandCenter";
import OperatorProfile from "@/components/OperatorProfile";
import DeliverabilityTriage from "@/components/DeliverabilityTriage";
import BuildProcess from "@/components/BuildProcess";
import ProactiveScaling from "@/components/ProactiveScaling";
import DeliverabilityProof from "@/components/DeliverabilityProof";
import Testimonials from "@/components/Testimonials";
import ArchitecturePreviews from "@/components/ArchitecturePreviews";
import FreeChecklist from "@/components/FreeChecklist";
import SystemsToolkit from "@/components/SystemsToolkit";
import InsightsLog from "@/components/InsightsLog";
import FAQ from "@/components/FAQ";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-accent/30 overflow-x-hidden">
      <HeroCommandCenter />
      <OperatorProfile />
      <DeliverabilityTriage />
      <BuildProcess />
      <ProactiveScaling />
      <DeliverabilityProof />
      <Testimonials />
      <ArchitecturePreviews />
      <FreeChecklist />
      <SystemsToolkit condensed={true} />
      <InsightsLog condensed={true} />
      <FAQ />
      <AuditCTA />
      <Footer />
    </main>
  );
}
