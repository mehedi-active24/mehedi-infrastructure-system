import content from "@/data/content.json";

export default function AuditCTA() {
  const { cta } = content;

  return (
    <section id="book" className="py-20 border-b border-border-subtle bg-bg-dark text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 uppercase tracking-tight">
          {cta.heading}
        </h2>
        
        <p className="text-text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto">
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
            className="px-8 py-4 bg-accent text-white font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Discovery Call
          </a>
          <a
            href={`mailto:${cta.secondaryEmail}`}
            className="px-8 py-4 bg-surface text-text-primary border border-border-subtle font-medium hover:bg-surface-hover transition-colors w-full sm:w-auto"
          >
            Email Me Directly
          </a>
        </div>

      </div>
    </section>
  );
}
