import content from "@/data/content.json";

export default function CaseStudiesSection() {
  const { cases } = content;

  return (
    <section className="py-24 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-8">Infrastructure Cases</h2>

        <div className="space-y-12">
          {cases.map((study, idx) => (
            <div 
              key={idx}
              className="bg-surface border border-border-subtle p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-6 border-b border-border-subtle">
                <h3 className="text-xl font-bold text-text-primary">{study.clientType}</h3>
                {idx === 0 ? (
                  <a href="/architecture/neo-science-outreach" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline mt-2 md:mt-0">[ View Architecture Diagram ]</a>
                ) : (
                  <a href="#" className="text-xs font-mono text-text-secondary hover:text-text-primary transition-colors mt-2 md:mt-0">[ Architecture Diagram Restricted ]</a>
                )}
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                
                {/* Left col: Details */}
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Initial Failure State</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{study.initialFailure}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Root Cause</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{study.rootCause}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Infrastructure Actions</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{study.infrastructureActions}</p>
                  </div>
                </div>

                {/* Right col: Stack & Outcome */}
                <div className="md:col-span-4 space-y-6 md:border-l border-border-subtle md:pl-8">
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Stack Used</h4>
                    <ul className="flex flex-wrap gap-2">
                      {study.stack.map((item, i) => (
                        <li key={i} className="text-xs font-mono text-text-secondary px-2 py-1 bg-bg-dark border border-border-subtle">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Outcome Metrics</h4>
                    <p className="text-sm text-accent leading-relaxed">{study.outcome}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
