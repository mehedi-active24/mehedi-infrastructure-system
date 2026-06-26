import HeroCommandCenter from "@/components/HeroCommandCenter";
import Services from "@/components/Services";
import OperatorProfile from "@/components/OperatorProfile";
import ToolStack from "@/components/ToolStack";
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
      {/* 1. Hook */}
      <HeroCommandCenter />
      {/* 2. What I do — 3 buyer types */}
      <Services />
      {/* 3. Who I am */}
      <OperatorProfile />
      {/* 4. Tools I work with — hands-on evidence */}
      <ToolStack />
      {/* 5. Documented case recoveries */}
      <DeliverabilityProof />
      {/* 6. Social proof */}
      <Testimonials />
      {/* 7. How it works */}
      <BuildProcess />
      {/* 8. Deep proof for technical readers */}
      <ArchitecturePreviews />
      {/* 9. Objection handling */}
      <FAQ />
      {/* 10. Final CTA */}
      <AuditCTA />
      <Footer />
    </main>
  );
}
