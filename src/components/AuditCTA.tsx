import content from "@/data/content.json";

export default function AuditCTA() {
  const { cta } = content;

  return (
    <section id="book" className="py-20 border-b border-border-subtle bg-surface/20 text-center relative overflow-hidden border-t-2 border-t-accent/40">
      {/* Large background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[140px] md:text-[200px] font-black text-text-primary/[0.02] uppercase tracking-tighter leading-none whitespace-nowrap">
          BOOK
        </span>
      </div>
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 uppercase tracking-tight leading-tight">
          {cta.heading}
        </h2>

        <p className="text-text-secondary text-base md:text-lg mb-8 max-w-lg mx-auto">
          {cta.copy}
        </p>

        {/* Proof bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 text-[10px] font-mono text-text-secondary/40 uppercase tracking-wider">
          <span>3 completed case breakdowns available</span>
          <span className="text-text-secondary/20">·</span>
          <span>Avg. recovery: 14–30 days</span>
          <span className="text-text-secondary/20">·</span>
          <span>94% post-fix placement rate</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={cta.primaryLink}
            className="px-8 py-4 bg-accent text-white text-sm font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Discovery Call
          </a>
          <a
            href={`mailto:${cta.secondaryEmail}`}
            className="px-8 py-4 bg-bg-dark text-text-primary border border-border-subtle text-sm font-mono uppercase tracking-wider hover:border-accent/40 transition-colors w-full sm:w-auto"
          >
            Email Me Directly
          </a>
        </div>

      </div>
    </section>
  );
}
