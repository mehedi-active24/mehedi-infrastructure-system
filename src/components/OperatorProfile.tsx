"use client";

const tools = [
  "Instantly", "Smartlead", "GoHighLevel", "Google Workspace",
  "Microsoft 365", "Apollo.io", "Clay", "MailerLite",
  "ActiveCampaign", "Brevo", "MXToolbox", "Google Postmaster",
];

export default function OperatorProfile() {
  return (
    <section id="about" className="py-16 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Bio */}
          <div className="space-y-5">
            <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">About</p>
            <p className="text-base text-text-secondary leading-relaxed">
              I spent 8 years in enterprise email security — operating Cisco ESA, Cisco WSA, and Barracuda ESG at the receiving end. I know exactly how spam filters evaluate authentication records and sender reputation because I configured those filters myself.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Since 2020 I've applied that same understanding to outbound teams: building cold email infrastructure from scratch, recovering broken inbox placement, and architecting multi-sender systems for agencies running 5–50 domains.
            </p>
            <div className="border-l-2 border-accent/40 pl-4">
              <p className="text-sm font-mono text-text-primary">
                9,461 subscribers · 62.41% open rate — on my own newsletter. The infrastructure I apply to clients runs on my own domain first.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Cisco ESA", "Cisco WSA", "Barracuda ESG", "Email Security · 2018–present"].map((b) => (
                <span key={b} className="text-[9px] font-mono text-text-secondary/50 border border-border-subtle px-2 py-1 uppercase tracking-wider">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Tools + sample audit */}
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-3">Tools I work with</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-text-secondary border border-border-subtle bg-surface px-2.5 py-1 hover:border-accent/30 hover:text-text-primary transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-border-subtle p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-bold text-text-primary">Sample Audit Report</p>
                <p className="text-[10px] font-mono text-text-secondary/50 mt-0.5">Real findings from a GoHighLevel + Google Workspace engagement. Client details redacted.</p>
              </div>
              <a
                href="/sample-audit-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 border border-border-subtle text-[10px] font-mono text-text-secondary hover:border-accent/40 hover:text-accent transition-colors uppercase tracking-wider whitespace-nowrap"
              >
                Download →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
