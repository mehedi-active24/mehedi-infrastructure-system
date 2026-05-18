"use client";

import { motion } from "framer-motion";

const ecosystem = [
  {
    id: "sending",
    layer: "Layer 01",
    label: "Sending Infrastructure",
    description: "Primary sending engines & enterprise outreach platforms",
    groups: [
      {
        sublabel: "Primary Sending Engines",
        tools: ["Smartlead", "Instantly", "Lemlist", "Mailshake", "Salesforge", "Reply.io", "QuickMail", "Woodpecker", "Klenty", "SmartReach.io", "Reachinbox", "Pipl.ai", "Snov.io"],
      },
      {
        sublabel: "Enterprise Outreach Platforms",
        tools: ["HubSpot Sequences", "GoHighLevel", "Outreach.io", "Salesloft", "Apollo Outreach", "Close CRM Outreach"],
      },
    ],
  },
  {
    id: "smtp",
    layer: "Layer 02",
    label: "SMTP & Delivery Layer",
    description: "Transactional delivery infrastructure and relay systems",
    groups: [
      {
        sublabel: "SMTP Providers",
        tools: ["Amazon SES", "Mailgun", "SendGrid", "Postmark", "SparkPost", "SocketLabs", "SMTP2GO", "MailChannels", "Elastic Email", "Mailjet", "Brevo SMTP", "ZeptoMail", "Mailazy", "Inboxroad", "Mailreef"],
      },
    ],
  },
  {
    id: "dns",
    layer: "Layer 03",
    label: "DNS & Infrastructure Layer",
    description: "Domain, DNS, and network infrastructure provisioning",
    groups: [
      {
        sublabel: "DNS & Registrars",
        tools: ["Cloudflare", "AWS Route 53", "Google Cloud DNS", "Azure DNS", "DNSMadeEasy", "Bunny DNS", "Hetzner DNS", "Namecheap", "Porkbun", "Dynadot", "Spaceship", "GoDaddy"],
      },
    ],
  },
  {
    id: "mailbox",
    layer: "Layer 04",
    label: "Workspace & Mailbox Systems",
    description: "Mailbox provisioning and workspace management",
    groups: [
      {
        sublabel: "Email Workspace Providers",
        tools: ["Google Workspace", "Microsoft 365", "Outlook Exchange", "Zoho Mail", "Maildoso", "Fastmail"],
      },
    ],
  },
  {
    id: "monitoring",
    layer: "Layer 05",
    label: "Deliverability Monitoring & Telemetry",
    description: "Inbox placement, reputation, and delivery telemetry systems",
    groups: [
      {
        sublabel: "Monitoring Platforms",
        tools: ["Google Postmaster Tools", "Microsoft SNDS", "GlockApps", "MXToolbox", "Spamhaus", "Validity Everest", "Litmus", "InboxAlly", "Folderly", "MailReach", "URIports", "DMARCian", "ZeroBounce Monitor"],
      },
    ],
  },
  {
    id: "data",
    layer: "Layer 06",
    label: "Data & Enrichment Intelligence",
    description: "Lead intelligence, contact enrichment, and validation systems",
    groups: [
      {
        sublabel: "Data & Enrichment",
        tools: ["Clay", "Apollo", "ZoomInfo", "Clearbit", "People Data Labs", "Hunter.io", "FullEnrich", "Dropcontact", "Prospeo", "Lusha", "Kaspr", "Seamless.ai", "MillionVerifier", "Scrubby"],
      },
    ],
  },
  {
    id: "automation",
    layer: "Layer 07",
    label: "Automation & System Orchestration",
    description: "Workflow automation, webhooks, and system integration",
    groups: [
      {
        sublabel: "Automation Stack",
        tools: ["n8n", "Make", "Zapier", "Airtable Automations", "Retool", "Supabase", "Custom Webhooks", "Cloud Functions", "Serverless Workflows", "Webhook Relay"],
      },
    ],
  },
];

export default function SystemsToolkit() {
  return (
    <section id="stack" className="py-24 border-b border-border-subtle bg-surface/20 relative overflow-hidden">

      {/* Background depth */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-30 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Ecosystem Layer</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Outbound Infrastructure Ecosystem</h3>
            <p className="text-xs font-mono text-text-secondary mt-2">
              Infrastructure-grade platforms powering outbound delivery, enrichment, monitoring, and automation systems.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 shrink-0">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            7 INFRASTRUCTURE LAYERS
          </div>
        </div>

        {/* Ecosystem Layers */}
        <div className="space-y-3">
          {ecosystem.map((layer, i) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group border border-border-subtle bg-bg-dark hover:bg-surface hover:border-accent/30 transition-all duration-300"
            >
              {/* Layer Header — always visible */}
              <div className="grid grid-cols-12 items-center px-5 py-4 gap-4">

                {/* Layer ID */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest group-hover:text-accent/60 transition-colors">{layer.layer}</span>
                </div>

                {/* Layer Name */}
                <div className="col-span-7 md:col-span-3">
                  <div className="text-sm font-mono font-bold text-text-primary group-hover:text-accent transition-colors">{layer.label}</div>
                  <div className="text-[10px] font-mono text-text-secondary/50 mt-0.5 hidden md:block">{layer.description}</div>
                </div>

                {/* Tools — horizontal scrollable tag list */}
                <div className="col-span-12 md:col-span-8 flex flex-wrap gap-1.5 mt-2 md:mt-0">
                  {layer.groups.flatMap(g => g.tools).map((tool, j) => (
                    <span
                      key={j}
                      className="text-[9px] font-mono text-text-secondary border border-border-subtle bg-bg-dark px-2 py-0.5 group-hover:border-accent/20 group-hover:text-text-primary transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom pulse line on hover */}
              <div className="h-px bg-accent/0 group-hover:bg-accent/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Ecosystem Footer Note */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">
          <span>Infrastructure Ecosystem // v2026.4</span>
          <div className="flex items-center gap-2">
            <motion.div className="w-1 h-1 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>

      </div>
    </section>
  );
}
