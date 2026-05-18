import InsightsLog from "@/components/InsightsLog";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LogsPage() {
  return (
    <main className="min-h-screen bg-bg-dark pt-24 selection:bg-accent/30 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-7xl pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Operations
        </Link>
      </div>
      {/* Renders full uncompressed intelligence logs */}
      <InsightsLog condensed={false} />
      <Footer />
    </main>
  );
}
