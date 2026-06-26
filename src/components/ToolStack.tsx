"use client";

export default function ToolStack() {
  const toolGroups = [
    {
      label: "Cold Email Senders",
      tools: ["Instantly", "Smartlead", "Lemlist", "Woodpecker", "Snov.io"],
    },
    {
      label: "Infrastructure & CRM",
      tools: ["Google Workspace", "Microsoft 365", "GoHighLevel", "HubSpot", "Reply.io"],
    },
    {
      label: "Lead & Enrichment",
      tools: ["Apollo.io", "Clay", "LinkedIn Sales Nav", "ZoomInfo"],
    },
    {
      label: "ESPs & Newsletter",
      tools: ["MailerLite", "ActiveCampaign", "Brevo", "Beehiiv", "Klaviyo"],
    },
    {
      label: "Monitoring & DNS",
      tools: ["Google Postmaster", "MXToolbox", "GlockApps", "Microsoft SNDS", "Cloudflare"],
    },
    {
      label: "Automation",
      tools: ["Make (Integromat)", "n8n", "Zapier"],
    },
  ];

  return (
    <section className="py-20 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10">
          <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2">
            Stack
          </p>
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">
            Tools I Work With
          </h2>
        </div>

        {/* Tool badge grid */}
        <div className="space-y-3 mb-14">
          {toolGroups.map((group) => (
            <div key={group.label} className="flex flex-wrap items-center gap-2">
              <span className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-widest w-36 shrink-0">
                {group.label}
              </span>
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-[10px] font-mono text-text-secondary border border-border-subtle bg-surface hover:border-accent/40 hover:text-text-primary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Screenshot evidence */}
        <div className="border-t border-border-subtle pt-10">
          <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-6">
            Hands-on evidence
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border-subtle overflow-hidden">
              <div className="bg-surface px-4 py-2.5 border-b border-border-subtle flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider">
                  Instantly.ai — Campaign Analytics
                </span>
              </div>
              <img
                src="/evidence/instantly-analytics.png"
                alt="Instantly.ai campaign analytics dashboard showing active outbound sequences and deliverability metrics"
                className="w-full block"
              />
            </div>
            <div className="border border-border-subtle overflow-hidden">
              <div className="bg-surface px-4 py-2.5 border-b border-border-subtle flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider">
                  GoHighLevel — Email Services Config
                </span>
              </div>
              <img
                src="/evidence/ghl-config.png"
                alt="GoHighLevel email services configuration panel showing custom sending domain setup and authentication"
                className="w-full block"
              />
            </div>
          </div>
          <p className="text-[9px] font-mono text-text-secondary/30 mt-3">
            Real platform screenshots from active client engagements · Tool names and campaign details partially redacted
          </p>
        </div>
      </div>
    </section>
  );
}
