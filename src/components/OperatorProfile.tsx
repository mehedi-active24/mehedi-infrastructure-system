import content from "@/data/content.json";

const platforms = [
  "Instantly",
  "Smartlead",
  "Google Workspace",
  "Microsoft 365",
  "Cloudflare",
  "Clay",
  "GoHighLevel",
  "Salesloft",
];

export default function OperatorProfile() {
  const { profile } = content;

  return (
    <section id="about" className="py-20 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid md:grid-cols-12 gap-12">

          <div className="md:col-span-4">
             <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">What Standard Audits Miss</h2>
             <h3 className="text-2xl font-bold text-text-primary leading-tight">{profile.philosophy}</h3>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
              {profile.body}
            </p>

            <div className="bg-surface border border-border-subtle p-4 border-l-4 border-l-accent font-mono text-sm text-text-primary">
              {profile.notice}
            </div>

            {/* Platform strip */}
            <div className="space-y-3">
              <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">Platforms I work in</p>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-mono text-text-secondary/70 border border-border-subtle bg-surface/40 px-2.5 py-1 uppercase tracking-wider hover:text-text-primary hover:border-accent/20 transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
