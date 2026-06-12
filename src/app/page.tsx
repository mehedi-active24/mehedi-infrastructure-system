import HeroCommandCenter from "@/components/HeroCommandCenter";
import OperatorProfile from "@/components/OperatorProfile";
import DeliverabilityProof from "@/components/DeliverabilityProof";
import Testimonials from "@/components/Testimonials";
import BuildProcess from "@/components/BuildProcess";
import DeliverabilityTriage from "@/components/DeliverabilityTriage";
import ArchitecturePreviews from "@/components/ArchitecturePreviews";
import FreeChecklist from "@/components/FreeChecklist";
import InsightsLog from "@/components/InsightsLog";
import FAQ from "@/components/FAQ";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-accent/30 overflow-x-hidden">
      {/* 1. Claim */}
      <HeroCommandCenter />
      {/* 2. Differentiator */}
      <OperatorProfile />
      {/* 3. Proof — convince before asking them to understand the process */}
      <DeliverabilityProof />
      {/* 4. Social proof */}
      <Testimonials />
      {/* 5. How it works */}
      <BuildProcess />
      {/* 6. Self-qualify — "is this your situation?" after proof has been established */}
      <DeliverabilityTriage />
      {/* 7. Deep proof for readers who want case-level detail */}
      <ArchitecturePreviews />
      {/* 8. Lead magnet */}
      <FreeChecklist />
      {/* 9. Authority + email capture */}
      <InsightsLog condensed={true} />
      {/* 10. Objection handling */}
      <FAQ />
      {/* 11. Final CTA */}
      <AuditCTA />
      <Footer />
    </main>
  );
}
