"use client";

export default function Services() {
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
      border: "border-indigo-400/20",
      dot: "bg-indigo-400",
      who: "For: cold email agencies, B2B SDR teams, SaaS outbound",
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
      border: "border-emerald-400/20",
      dot: "bg-emerald-400",
      who: "For: newsletters, B2B email programs, ESP migrations",
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
      border: "border-amber-400/20",
      dot: "bg-amber-400",
      who: "For: outbound agencies, RevOps leads, funded startups",
    },
  ];

  return (
    <section className="py-20 border-b border-border-subtle bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10">
          <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2">
            Services
          </p>
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">
            Three Ways to Engage
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className={`border ${s.border} p-6 space-y-4`}>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${s.dot}`} />
                <span
                  className={`text-[9px] font-mono font-bold uppercase tracking-widest ${s.accent}`}
                >
                  {s.label}
                </span>
              </div>
              <p className={`text-sm font-semibold ${s.accent} leading-snug`}>
                {s.tagline}
              </p>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] text-text-secondary leading-relaxed">
                    <span className={`mt-0.5 shrink-0 ${s.accent}`}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className={`text-[9px] font-mono uppercase tracking-wider ${s.accent} opacity-60 border-t ${s.border} pt-3`}
              >
                {s.who}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
