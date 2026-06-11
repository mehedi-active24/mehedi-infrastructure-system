import content from "@/data/content.json";

export default function OperatorProfile() {
  const { profile } = content;

  return (
    <section id="about" className="py-16 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
             <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">About Mehedi</h2>
             <h3 className="text-xl font-bold text-text-primary">{profile.philosophy}</h3>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
              {profile.body}
            </p>
            
            <div className="bg-surface border border-border-subtle p-4 border-l-4 border-l-accent font-mono text-sm text-text-primary">
              {profile.notice}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
