import HeroCommandCenter from "@/components/HeroCommandCenter";
import OperatorProfile from "@/components/OperatorProfile";
import ArchitecturePreviews from "@/components/ArchitecturePreviews";
import DeliverabilityProof from "@/components/DeliverabilityProof";
import SystemsToolkit from "@/components/SystemsToolkit";
import InsightsLog from "@/components/InsightsLog";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-accent/30 overflow-x-hidden">
      <HeroCommandCenter />
      <OperatorProfile />
      <DeliverabilityProof />
      <ArchitecturePreviews />
      <SystemsToolkit condensed={true} />
      <InsightsLog condensed={true} />
      <AuditCTA />
      <Footer />
    </main>
  );
}
