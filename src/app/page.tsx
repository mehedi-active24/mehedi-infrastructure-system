import HeroCommandCenter from "@/components/HeroCommandCenter";
import OperatorProfile from "@/components/OperatorProfile";
import DeliverabilityProof from "@/components/DeliverabilityProof";
import Testimonials from "@/components/Testimonials";
import BuildProcess from "@/components/BuildProcess";
import ArchitecturePreviews from "@/components/ArchitecturePreviews";
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
      {/* 4. Proof — convince before asking them to understand the process */}
      <DeliverabilityProof />
      {/* 5. Social proof */}
      <Testimonials />
      {/* 6. How it works */}
      <BuildProcess />
      {/* 7. Deep proof for readers who want case-level detail */}
      <ArchitecturePreviews />
      {/* 10. Objection handling */}
      <FAQ />
      {/* 11. Final CTA */}
      <AuditCTA />
      <Footer />
    </main>
  );
}
