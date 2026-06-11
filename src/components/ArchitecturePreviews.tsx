import architectures from "@/data/architectures.json";
import Link from "next/link";
import { Activity, Server } from "lucide-react";

export default function ArchitecturePreviews() {
  // Show only 2 featured architectures on the homepage
  const featuredArchitectures = architectures.slice(0, 2);

  return (
    <section id="architectures" className="py-16 border-b border-border-subtle bg-bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Case Studies</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Featured Client Work</h3>
          </div>
          <Link href="/architecture" className="text-xs font-mono text-accent hover:underline hidden md:block">
            [ View All Case Studies ]
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredArchitectures.map((arch) => (
            <Link 
              href={`/architecture/${arch.slug}`} 
              key={arch.slug}
              className="bg-surface border border-border-subtle p-6 flex flex-col group hover:border-accent transition-colors relative overflow-hidden block"
            >
              {/* Card top stats */}
              <div className="flex justify-between items-start mb-6 border-b border-border-subtle pb-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">{arch.category}</div>
                  <h4 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">{arch.title}</h4>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono border border-border-subtle px-2 py-1 bg-bg-dark">
                  <div className={`w-1.5 h-1.5 rounded-full ${arch.status === 'ACTIVE' ? 'bg-emerald-400' : arch.status === 'STANDBY' ? 'bg-amber-400' : 'bg-blue-400'}`} />
                  <span className={arch.status === 'ACTIVE' ? 'text-emerald-400' : arch.status === 'STANDBY' ? 'text-amber-400' : 'text-blue-400'}>{arch.status}</span>
                </div>
              </div>

              {/* Data grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-[10px] font-mono text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1"><Server className="w-3 h-3"/> System Type</div>
                  <div className="text-sm text-text-primary">{arch.systemType}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1"><Activity className="w-3 h-3"/> Operational Scale</div>
                  <div className="text-sm text-text-primary">{arch.scale}</div>
                </div>
              </div>

              {/* Tools row */}
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <div className="flex flex-wrap gap-2">
                  {arch.tools.slice(0, 4).map((tool, i) => (
                    <span key={i} className="text-[10px] font-mono text-text-secondary bg-bg-dark border border-border-subtle px-2 py-1">
                      {tool}
                    </span>
                  ))}
                  {arch.tools.length > 4 && (
                    <span className="text-[10px] font-mono text-text-secondary bg-bg-dark border border-border-subtle px-2 py-1">+{arch.tools.length - 4}</span>
                  )}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Permanent CTA */}
        <div className="mt-10 text-center">
          <Link 
            href="/architecture" 
            className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline uppercase tracking-widest"
          >
            [ VIEW ALL CASE STUDIES → ]
          </Link>
        </div>

      </div>
    </section>
  );
}
