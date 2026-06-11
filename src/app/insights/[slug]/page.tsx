import insights from "@/data/insights.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import Footer from "@/components/Footer";

const severityColor: Record<string, string> = {
  CRITICAL: "text-red-400 border-red-400/20 bg-red-400/5",
  HIGH: "text-amber-400 border-amber-400/20 bg-amber-400/5",
  WARNING: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5",
  MAINTENANCE: "text-blue-400 border-blue-400/20 bg-blue-400/5",
};

export function generateStaticParams() {
  return insights.map((article) => ({
    slug: article.slug,
  }));
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent/30">
      
      {/* Top Bar Navigation */}
      <nav className="border-b border-border-subtle bg-bg-dark/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/logs" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors">
            <ArrowLeft className="w-3 h-3" /> Insights Archive
          </Link>
          <div className="flex items-center gap-3">
            <span className={`text-[9px] font-mono px-2 py-1 border ${severityColor[article.severity] || ""}`}>
              {article.severity}
            </span>
            <div className="text-[10px] font-mono text-text-secondary border border-border-subtle px-2 py-1 bg-surface hidden sm:block">
              [ ARCHIVE REF: {article.slug.substring(0, 10).toUpperCase()} ]
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        
        {/* Metadata Row */}
        <header className="mb-16">
          <div className="grid grid-cols-12 gap-2 border border-border-subtle bg-surface/40 p-4 mb-8 font-mono text-[10px] text-text-secondary">
            <div className="col-span-6 md:col-span-3">
              <div className="text-text-secondary/40 uppercase mb-1">Timestamp</div>
              <div className="text-text-primary">{article.date}</div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="text-text-secondary/40 uppercase mb-1">Severity</div>
              <div className={severityColor[article.severity]?.split(" ")[0] || "text-text-primary"}>{article.severity}</div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="text-text-secondary/40 uppercase mb-1">Classification Tags</div>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag, i) => (
                  <span key={i} className="text-text-secondary border border-border-subtle px-1.5 py-0.5 text-[9px] bg-bg-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-text-primary mb-4">
            {article.title}
          </h1>
          <div className="h-px bg-border-subtle mt-8" />
        </header>

        {/* Article Content */}
        <div className="space-y-8 text-base text-text-secondary leading-relaxed font-sans">
          {article.content.map((block, i) => {
            if (block.type === "paragraph") {
              return <p key={i} className="text-text-secondary leading-relaxed">{block.text}</p>;
            }
            if (block.type === "header") {
              return (
                <h2 key={i} className="text-lg font-bold text-text-primary mt-14 mb-4 flex items-center gap-3 uppercase tracking-tight">
                  <span className="text-accent font-mono text-sm opacity-60">›</span>
                  {block.text}
                </h2>
              );
            }
            if (block.type === "log") {
              return (
                <div key={i} className="bg-surface border border-border-subtle p-5 font-mono text-xs text-text-primary overflow-x-auto mt-8 mb-8 border-l-2 border-l-accent relative">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border-subtle">
                    <Terminal className="w-3 h-3 text-accent" />
                    <span className="text-[9px] text-text-secondary uppercase tracking-widest">System Log Output</span>
                  </div>
                  <code className="block whitespace-pre text-text-primary leading-relaxed">{block.text}</code>
                </div>
              );
            }
            if (block.type === "list" && block.items) {
              return (
                <ul key={i} className="space-y-3 my-8 pl-0 border-l border-border-subtle ml-0">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-4 pl-4">
                      <span className="text-accent font-mono shrink-0 mt-0.5">›</span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Article Footer */}
        <footer className="mt-20 pt-6 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono text-text-secondary/50 uppercase tracking-widest">
            <span>End of Report // {article.date}</span>
            <span>[ {article.slug.substring(0, 12).toUpperCase()} ]</span>
          </div>
        </footer>

      </article>
      <Footer />
    </main>
  );
}
