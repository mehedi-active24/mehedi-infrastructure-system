import HeroCommandCenter from "@/components/HeroCommandCenter";
import Services from "@/components/Services";
import OperatorProfile from "@/components/OperatorProfile";
import ToolStack from "@/components/ToolStack";
import DeliverabilityProof from "@/components/DeliverabilityProof";
import EvidenceGallery from "@/components/EvidenceGallery";
import BuildProcess from "@/components/BuildProcess";
import FAQ from "@/components/FAQ";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-accent/30 overflow-x-hidden">
      {/* 1. Hook */}
      <HeroCommandCenter />
      {/* 2. What I do — 3 buyer types */}
      <Services />
      {/* 3. Who I am */}
      <OperatorProfile />
      {/* 4. Tools I work with */}
      <ToolStack />
      {/* 5. Documented case recoveries */}
      <DeliverabilityProof />
      {/* 6. Additional real evidence */}
      <EvidenceGallery />
      {/* 7. How it works */}
      <BuildProcess />
      {/* 8. Objection handling */}
      <FAQ />
      {/* 9. Final CTA */}
      <AuditCTA />
      <Footer />
    </main>
  );
}
