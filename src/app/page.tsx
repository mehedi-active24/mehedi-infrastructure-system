import HeroCommandCenter from "@/components/HeroCommandCenter";
import Services from "@/components/Services";
import OperatorProfile from "@/components/OperatorProfile";
import DeliverabilityProof from "@/components/DeliverabilityProof";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-accent/30 overflow-x-hidden">
      <HeroCommandCenter />
      <Services />
      <OperatorProfile />
      <DeliverabilityProof />
      <AuditCTA />
      <Footer />
    </main>
  );
}
