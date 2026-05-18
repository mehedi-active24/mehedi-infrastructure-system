import insights from "@/data/insights.json";
import Link from "next/link";

const severityColor: Record<string, string> = {
  CRITICAL: "text-red-400 border-red-400/20 bg-red-400/5",
  HIGH: "text-amber-400 border-amber-400/20 bg-amber-400/5",
  WARNING: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5",
  MAINTENANCE: "text-blue-400 border-blue-400/20 bg-blue-400/5",
};

export default function InsightsLog() {
  return (
    <section id="insights" className="py-24 border-b border-border-subtle bg-bg-dark relative overflow-hidden">
      
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-40 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Intelligence Layer</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Deliverability Intelligence Archive</h3>
              <p className="text-xs font-mono text-text-secondary mt-2">
                Operational field reports from live outbound infrastructure environments.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary/60 shrink-0">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 inline-block bg-red-400/80"/> CRITICAL</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 inline-block bg-amber-400/80"/> HIGH</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 inline-block bg-yellow-400/80"/> WARNING</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 inline-block bg-blue-400/80"/> MAINTENANCE</span>
            </div>
          </div>
        </div>

        {/* Archive Table */}
        <div className="border border-border-subtle">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-border-subtle px-4 py-2 bg-surface/50">
            <div className="col-span-2 text-[9px] font-mono text-text-secondary uppercase tracking-widest">Timestamp</div>
            <div className="col-span-1 text-[9px] font-mono text-text-secondary uppercase tracking-widest hidden md:block">Severity</div>
            <div className="col-span-6 md:col-span-5 text-[9px] font-mono text-text-secondary uppercase tracking-widest">Report Title</div>
            <div className="col-span-3 text-[9px] font-mono text-text-secondary uppercase tracking-widest hidden md:block">Tags</div>
            <div className="col-span-4 md:col-span-1 text-[9px] font-mono text-text-secondary uppercase tracking-widest text-right">Action</div>
          </div>

          {/* Archive Rows */}
          {insights.map((article, idx) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className={`
                grid grid-cols-12 items-center px-4 py-4 group relative
                border-b border-border-subtle last:border-b-0
                hover:bg-surface/60 transition-colors duration-150
              `}
            >
              {/* Left accent border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover:bg-accent transition-all duration-200" />

              {/* Date */}
              <div className="col-span-2 text-[11px] font-mono text-text-secondary group-hover:text-text-primary transition-colors">
                {article.date}
              </div>

              {/* Severity */}
              <div className="col-span-1 hidden md:flex">
                <span className={`text-[8px] font-mono px-1.5 py-0.5 border ${severityColor[article.severity] || "text-text-secondary border-border-subtle"}`}>
                  {article.severity}
                </span>
              </div>

              {/* Title */}
              <div className="col-span-6 md:col-span-5 pr-4">
                <span className="text-sm text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </span>
              </div>

              {/* Tags */}
              <div className="col-span-3 hidden md:flex flex-wrap gap-1.5">
                {article.tags.map((tag, i) => (
                  <span key={i} className="text-[8px] font-mono text-text-secondary/60 border border-border-subtle px-1.5 py-0.5 bg-bg-dark">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="col-span-4 md:col-span-1 flex justify-end">
                <span className="text-[10px] font-mono text-text-secondary group-hover:text-accent transition-colors whitespace-nowrap flex items-center gap-1">
                  Open Report
                  <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
