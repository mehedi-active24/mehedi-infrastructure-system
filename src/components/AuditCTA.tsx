import content from "@/data/content.json";

export default function AuditCTA() {
  const { cta } = content;

  return (
    <section id="book" className="py-32 border-b border-border-subtle bg-bg-dark text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 uppercase tracking-tight">
          {cta.heading}
        </h2>
        
        <p className="text-text-secondary text-base md:text-lg mb-10 max-w-xl mx-auto">
          {cta.copy}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={cta.primaryLink}
            className="px-8 py-4 bg-accent text-white font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto"
          >
            Book a System Audit
          </a>
          <a 
            href={`mailto:${cta.secondaryEmail}`}
            className="px-8 py-4 bg-surface text-text-primary border border-border-subtle font-medium hover:bg-surface-hover transition-colors w-full sm:w-auto"
          >
            {cta.secondaryEmail}
          </a>
        </div>

      </div>
    </section>
  );
}
