import architectures from "@/data/architectures.json";
import Link from "next/link";
import { ArrowLeft, Network, Server, Shield, Database, Activity } from "lucide-react";
import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent/30 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12 pt-28 pb-16">
        
        <header className="mb-16 pb-8 border-b border-border-subtle flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors mb-6">
              <ArrowLeft className="w-3 h-3" /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-2">Client Case Studies</h1>
            <p className="text-text-secondary font-mono text-sm max-w-xl">
              <Network className="w-4 h-4 inline mr-2 text-accent" />
              Infrastructure recovery cases and outbound systems built for cold email agencies and B2B outbound teams.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="bg-surface border border-border-subtle px-4 py-2 text-xs font-mono text-center">
               <div className="text-text-secondary mb-1">TOTAL CASES</div>
               <div className="text-accent text-lg">{architectures.length}</div>
             </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {architectures.map((arch) => (
            <Link 
              key={arch.slug}
              href={`/architecture/${arch.slug}`}
              className="group relative block bg-surface/50 border border-border-subtle p-6 hover:bg-surface hover:border-accent transition-all duration-300"
            >
              {/* Connecting lines illusion */}
              <div className="absolute top-1/2 -left-3 w-3 h-px bg-border-subtle group-hover:bg-accent transition-colors" />
              
              <div className="flex items-start justify-between mb-8">
                <div className={`p-2 rounded border border-border-subtle bg-bg-dark ${arch.status === 'ACTIVE' ? 'text-emerald-400' : 'text-text-secondary'}`}>
                  {arch.category === 'Deliverability Layer' ? <Shield className="w-5 h-5" /> : 
                   arch.category === 'Data Layer' ? <Database className="w-5 h-5" /> : 
                   arch.category === 'Monitoring Systems' ? <Activity className="w-5 h-5" /> : 
                   <Server className="w-5 h-5" />}
                </div>
                <div className="text-[10px] font-mono border border-border-subtle px-2 py-1 bg-bg-dark text-text-secondary">
                  {arch.category.toUpperCase()}
                </div>
              </div>

              <h2 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {arch.title}
              </h2>
              
              <div className="text-xs text-text-secondary mb-6 line-clamp-2">
                {arch.overview}
              </div>

              <div className="space-y-2 border-t border-border-subtle pt-4">
                {arch.metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="flex justify-between items-center text-xs font-mono">
                    <span className="text-text-secondary">{m.label}</span>
                    <span className="text-text-primary">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-16 pt-10 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold text-text-primary uppercase tracking-tight">Seen a failure that looks like yours?</p>
            <p className="text-xs font-mono text-text-secondary mt-1">Most are diagnosable in a single 20-minute call. It&apos;s free.</p>
          </div>
          <a
            href="https://calendly.com/mehedi-active24"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            Book a Free Discovery Call →
          </a>
        </div>

      </div>
      <Footer />
    </main>
  );
}
