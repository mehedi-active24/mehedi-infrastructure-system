"use client";

const tools = [
  "Instantly", "Smartlead", "GoHighLevel", "Google Workspace",
  "Microsoft 365", "Apollo.io", "Clay", "MailerLite",
  "ActiveCampaign", "Brevo", "MXToolbox", "Google Postmaster",
];

const background = ["Cisco ESA", "Cisco WSA", "Barracuda ESG", "Email Security · 2018–present"];

export default function OperatorProfile() {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

          {/* Left — Bio */}
          <div className="space-y-5">
            <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">About</p>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              I spent 8 years in enterprise email security — operating Cisco ESA, Cisco WSA, and Barracuda ESG on the receiving end. I know how spam filters evaluate authentication records and sender reputation because I configured those filters myself.
            </p>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Since 2020 I've applied that to outbound teams: building cold email infrastructure from scratch, recovering broken inbox placement, and architecting multi-sender systems for agencies running 5–50 domains.
            </p>

            <div className="border-l-2 border-accent/50 pl-4 py-1">
              <p className="text-sm font-semibold text-text-primary leading-relaxed">
                9,461 subscribers · 62.41% open rate on my own newsletter. Same infrastructure I build for clients.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {background.map((b) => (
                <span key={b} className="text-[9px] font-mono text-text-secondary/50 border border-border-subtle px-2 py-1 uppercase tracking-wider">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Tools */}
          <div className="space-y-5">
            <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">Tools I work with</p>

            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="text-[10px] sm:text-xs font-mono text-text-secondary border border-border-subtle bg-surface/60 px-3 py-1.5 hover:border-accent/30 hover:text-text-primary transition-all duration-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Markets */}
            <div className="border border-border-subtle bg-surface/40 p-4 mt-2">
              <p className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest mb-3">Markets served</p>
              <div className="grid grid-cols-3 gap-3">
                {["🇺🇸 United States", "🇬🇧 United Kingdom", "🇦🇺 Australia"].map((m) => (
                  <div key={m} className="text-xs font-mono text-text-secondary/70">{m}</div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
