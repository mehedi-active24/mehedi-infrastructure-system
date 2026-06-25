import architectures from "@/data/architectures.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Server, Activity, Shield, AlertTriangle } from "lucide-react";
import DynamicTopologyVisualizer from "@/components/diagrams/DynamicTopologyVisualizer";
import NeoScienceArchitecture from "@/components/diagrams/NeoScienceArchitecture";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return architectures.map((arch) => ({
    slug: arch.slug,
  }));
}

export default async function ArchitecturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const arch = architectures.find((a) => a.slug === slug);

  if (!arch) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent/30 pb-16">
      
      {/* Header */}
      <header className="border-b border-border-subtle bg-surface/50 pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/architecture" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors mb-8">
             <ArrowLeft className="w-3 h-3" /> Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
             <div className="text-[10px] font-mono border border-border-subtle px-2 py-1 bg-bg-dark text-text-secondary uppercase">
               CATEGORY: {arch.category}
             </div>
             <div className="flex items-center gap-1.5 text-[10px] font-mono border border-border-subtle px-2 py-1 bg-bg-dark">
               <div className={`w-1.5 h-1.5 rounded-full ${arch.status === 'ACTIVE' ? 'bg-emerald-400' : arch.status === 'STANDBY' ? 'bg-amber-400' : 'bg-blue-400'}`} />
               <span className={arch.status === 'ACTIVE' ? 'text-emerald-400' : arch.status === 'STANDBY' ? 'text-amber-400' : 'text-blue-400'}>{arch.status}</span>
             </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{arch.title}</h1>
          
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border-subtle">
             <div>
               <div className="text-[10px] font-mono text-text-secondary uppercase mb-1">System Type</div>
               <div className="text-sm font-medium">{arch.systemType}</div>
             </div>
             <div>
               <div className="text-[10px] font-mono text-text-secondary uppercase mb-1">Operational Scale</div>
               <div className="text-sm font-medium">{arch.scale}</div>
             </div>
             <div>
               <div className="text-[10px] font-mono text-text-secondary uppercase mb-1">Core Stack</div>
               <div className="text-sm font-medium">{arch.tools.join(" / ")}</div>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-6 mt-12 space-y-16">
        
        {/* 1. System Overview */}
        <section>
           <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
             <Server className="w-4 h-4 text-accent" /> 01. System Overview
           </h2>
           <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
             {arch.overview}
           </p>
        </section>

        {/* 2 & 3. Infrastructure Diagram & Operational Flow */}
        <section className="space-y-4">
           <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
             <Activity className="w-4 h-4 text-accent" /> 02. Infrastructure Topology
           </h2>
           
           <div className="border border-border-subtle bg-surface">
             {arch.slug === 'neo-science-outreach' ? (
               <NeoScienceArchitecture />
             ) : (
               <DynamicTopologyVisualizer tools={arch.tools} flow={arch.flow} />
             )}
           </div>
        </section>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* 4. Tool Stack Details could be expanded here, but we use the space for Deliverability Layer */}
          <section>
             <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
               <Shield className="w-4 h-4 text-emerald-400" /> 03. Deliverability Layer
             </h2>
             <div className="bg-surface border border-border-subtle p-6 text-sm text-text-secondary leading-relaxed">
               {arch.deliverabilityLayer}
             </div>
          </section>

          {/* 5. Scaling Logic */}
          <section>
             <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
               <Activity className="w-4 h-4 text-accent" /> 04. Scaling Logic
             </h2>
             <div className="bg-surface border border-border-subtle p-6 text-sm text-text-secondary leading-relaxed">
               {arch.scalingLogic}
             </div>
          </section>

          {/* 6. Failure Prevention */}
          <section>
             <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
               <AlertTriangle className="w-4 h-4 text-amber-400" /> 05. Failure Prevention
             </h2>
             <div className="bg-surface border border-border-subtle p-6 text-sm text-text-secondary leading-relaxed border-l-4 border-l-amber-400">
               {arch.failurePrevention}
             </div>
          </section>

          {/* 7. Monitoring Systems */}
          <section>
             <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
               <Activity className="w-4 h-4 text-emerald-400" /> 06. Monitoring Systems
             </h2>
             <ul className="bg-surface border border-border-subtle p-6 space-y-2">
               {arch.monitoring.map((m, i) => (
                 <li key={i} className="text-sm font-mono text-text-secondary flex items-center gap-2">
                   <div className="w-1 h-1 bg-text-secondary rounded-full" /> {m}
                 </li>
               ))}
             </ul>
          </section>

        </div>

        {/* 8. Metrics Layer */}
        <section>
           <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4">
             07. Operational Metrics
           </h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
              {arch.metrics.map((m, i) => (
                <div key={i} className="bg-surface p-6 flex flex-col justify-center">
                  <span className="text-2xl font-mono text-text-primary mb-1">{m.value}</span>
                  <span className="text-[10px] font-mono text-text-secondary uppercase">{m.label}</span>
                </div>
              ))}
           </div>
        </section>

        {/* 9. Technical Notes */}
        <section className="bg-bg-dark border border-border-subtle p-6">
           <h2 className="text-[10px] font-mono text-text-secondary uppercase tracking-wider mb-2">
             Technical Notes / Addendum
           </h2>
           <p className="text-xs font-mono text-text-secondary">
             &gt; {arch.technicalNotes}
           </p>
        </section>

        {/* CTA row */}


      </div>
      <Footer />
    </main>
  );
}
