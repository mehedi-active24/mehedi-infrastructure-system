"use client";

const services = [
  {
    id: "A",
    label: "Infrastructure Build",
    tagline: "Cold email systems built right the first time",
    items: [
      "Sending domain setup (SPF / DKIM / DMARC)",
      "Google Workspace & Microsoft 365 configuration",
      "Instantly / Smartlead / GHL account setup",
      "Domain warmup strategy & execution",
      "Inbox rotation & daily sending cap architecture",
      "Tracking domain, bounce & unsubscribe handling",
      "Handoff doc: logins, DNS records, operating playbook",
    ],
    accent: "text-indigo-400",
    bg: "bg-indigo-400/[0.04]",
    border: "border-indigo-400/25",
    dot: "bg-indigo-400",
    topBar: "bg-indigo-400/20",
    who: "Cold email agencies · B2B SDR teams · SaaS outbound",
  },
  {
    id: "B",
    label: "Deliverability Recovery",
    tagline: "Inbox placement restored — root cause documented",
    items: [
      "Full authentication audit (SPF, DKIM, DMARC)",
      "Blacklist monitoring & expedited delisting",
      "Google Postmaster reputation analysis",
      "Sender IP & domain health diagnosis",
      "ESP configuration review (Brevo, AC, MailerLite)",
      "List hygiene & re-engagement strategy",
      "Written remediation report with priority order",
    ],
    accent: "text-emerald-400",
    bg: "bg-emerald-400/[0.04]",
    border: "border-emerald-400/25",
    dot: "bg-emerald-400",
    topBar: "bg-emerald-400/20",
    who: "Newsletters · B2B email programs · ESP migrations",
  },
  {
    id: "C",
    label: "Strategy & Operations",
    tagline: "Outbound systems designed to run without you",
    items: [
      "Multi-sender outreach architecture",
      "Sequence logic, cadence design & wave scheduling",
      "Response routing & meeting-booking workflows",
      "Make / n8n automation build",
      "KPI tracking & weekly performance reporting",
      "SOPs + documentation for team handoff",
      "Ongoing deliverability monitoring & tuning",
    ],
    accent: "text-amber-400",
    bg: "bg-amber-400/[0.04]",
    border: "border-amber-400/25",
    dot: "bg-amber-400",
    topBar: "bg-amber-400/20",
    who: "Outbound agencies · RevOps leads · Funded startups",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 border-b border-border-subtle bg-surface/30">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">

        <div className="mb-10 sm:mb-12">
          <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">Three Ways to Engage</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.id}
              className={`${s.bg} border ${s.border} flex flex-col overflow-hidden group hover:border-opacity-50 transition-all duration-300`}
            >
              {/* Top accent bar */}
              <div className={`h-0.5 ${s.topBar}`} />

              <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
                {/* Header */}
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${s.dot}`} />
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${s.accent}`}>
                    {s.label}
                  </span>
                </div>

                {/* Tagline */}
                <p className={`text-sm font-semibold ${s.accent} leading-snug`}>{s.tagline}</p>

                {/* Items */}
                <ul className="flex-1 space-y-2">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                      <span className={`mt-px shrink-0 ${s.accent} opacity-70`}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* For label */}
                <p className={`text-[9px] font-mono uppercase tracking-wider ${s.accent} opacity-50 border-t ${s.border} pt-3 mt-1`}>
                  {s.who}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
