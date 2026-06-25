"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Layers, ChevronDown, ChevronUp } from "lucide-react";

interface ToolAnnotation {
  name: string;
  why: string;
}

interface EcosystemLayer {
  id: string;
  layer: string;
  label: string;
  description: string;
  primary: ToolAnnotation[];
  extended: string[];
}

const ecosystem: EcosystemLayer[] = [
  {
    id: "sending",
    layer: "Layer 01",
    label: "Sending Infrastructure",
    description: "Primary sending engines & outreach platforms",
    primary: [
      { name: "Smartlead", why: "Industry-standard for high-volume outreach and automated multi-sender rotational warmup loops." },
      { name: "Instantly", why: "Highly efficient UI for scale-focused agencies running decentralized workspace structures." },
      { name: "Maildoso", why: "Dedicated, optimized enterprise sending nodes with pre-configured custom IP subnets." }
    ],
    extended: ["Mailshake", "Salesforge", "Reply.io", "QuickMail", "Woodpecker", "GoHighLevel", "Apollo Outreach"]
  },
  {
    id: "smtp",
    layer: "Layer 02",
    label: "SMTP & Delivery Layer",
    description: "Transactional delivery infrastructure and relays",
    primary: [
      { name: "Amazon SES", why: "Maximum deliverability throughput and cost efficiency when configured with dedicated IP warmups." },
      { name: "Mailgun", why: "Excellent MTA logs and tracking APIs for high-frequency transactional and promotional isolation." },
      { name: "Postmark", why: "Precise transactional inbox placement with strict bounce classification metrics." }
    ],
    extended: ["SendGrid", "SocketLabs", "SMTP2GO", "Brevo SMTP", "ZeptoMail", "Postfix MTA"]
  },
  {
    id: "dns",
    layer: "Layer 03",
    label: "DNS & Infrastructure Layer",
    description: "Domain and DNS network provisioning tools",
    primary: [
      { name: "Cloudflare", why: "Ultra-fast DNS propagation, strict security layers, and scalable API record management." },
      { name: "AWS Route 53", why: "Enterprise-grade registrar routing with programmatic record generation profiles." }
    ],
    extended: ["Google Cloud DNS", "Porkbun", "Namecheap", "Dynadot", "Spaceship"]
  },
  {
    id: "mailbox",
    layer: "Layer 04",
    label: "Workspace & Mailbox Systems",
    description: "Mailbox provisioning and workspace management",
    primary: [
      { name: "Google Workspace", why: "Gold standard for outreach inbox placement. Demands strict per-mailbox warmups." },
      { name: "Microsoft 365", why: "Essential for enterprise B2B coverage. Bypasses strict Microsoft spam filters by default." }
    ],
    extended: ["Zoho Mail", "Outlook Exchange", "Fastmail"]
  },
  {
    id: "monitoring",
    layer: "Layer 05",
    label: "Deliverability Monitoring & Telemetry",
    description: "Inbox placement, reputation, and tracking systems",
    primary: [
      { name: "Google Postmaster Tools", why: "Critical source of truth for raw sender domain and IP reputation tracking." },
      { name: "GlockApps", why: "Invaluable seed-list placement testing for catching silent spam routing behaviors." },
      { name: "MXToolbox", why: "Automatic blacklist monitoring and DNS authentication audit sweeps." },
      { name: "Spamhaus", why: "Direct ZEN/SBL monitoring and remediation interface for enterprise threat pools." }
    ],
    extended: ["Microsoft SNDS", "DMARCian", "Folderly", "MailReach", "Litmus"]
  },
  {
    id: "data",
    layer: "Layer 06",
    label: "Data & Enrichment Intelligence",
    description: "Lead intelligence, enrichment, and validation systems",
    primary: [
      { name: "Clay", why: "Unmatched programmatic enrichment and multi-source scraping orchestration." },
      { name: "Apollo", why: "Standard database for targeted high-fidelity B2B sales data." },
      { name: "MillionVerifier", why: "Rigorous multi-pass email cleaning to secure outbound bounce protection." }
    ],
    extended: ["Scrubby", "Hunter.io", "Dropcontact", "Prospeo"]
  },
  {
    id: "automation",
    layer: "Layer 07",
    label: "Automation & System Orchestration",
    description: "Workflow automation, webhooks, and integrations",
    primary: [
      { name: "n8n", why: "Self-hosted, highly secure visual automation engine for custom outbound data pipelines." },
      { name: "Make", why: "Cloud orchestration for multi-app webhook integrations." },
      { name: "Custom Webhooks", why: "Ultra-lightweight direct programmatic system triggers." }
    ],
    extended: ["Zapier", "Airtable Automations", "Retool", "Cloud Functions"]
  }
];

export default function SystemsToolkit({ condensed = true }: { condensed?: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedLayers, setExpandedLayers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLayer = (id: string) => {
    setExpandedLayers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const displayedLayers = condensed
    ? ecosystem.filter((layer) => ["sending", "smtp", "dns", "monitoring"].includes(layer.id))
    : ecosystem;

  return (
    <section id="stack" className="py-16 border-b border-border-subtle bg-surface/20 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Tools & Stack</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">
              {condensed ? "What I Use to Find and Fix It" : "Full Diagnostic and Build Stack"}
            </h3>
            <p className="text-xs font-mono text-text-secondary mt-2">
              The platforms and tools I use to diagnose deliverability problems and build outbound infrastructure.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 shrink-0">
            <Layers className="w-3.5 h-3.5" />
            {displayedLayers.length} TOOL CATEGORIES
          </div>
        </div>

        {/* Ecosystem Layers */}
        <div className="space-y-4">
          {displayedLayers.map((layer, i) => {
            const isExpanded = expandedLayers[layer.id] || false;
            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group border border-border-subtle bg-bg-dark p-5 hover:border-accent/30 transition-all duration-300 relative"
              >
                {/* Layer Metadata */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pb-4 border-b border-border-subtle/50">
                  <div>
                    <span className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest block mb-1">
                      {layer.layer}
                    </span>
                    <h4 className="text-base font-mono font-bold text-text-primary group-hover:text-accent transition-colors">
                      {layer.label}
                    </h4>
                    <p className="text-xs font-mono text-text-secondary/60 mt-0.5">
                      {layer.description}
                    </p>
                  </div>
                </div>

                {/* Primary Stack List */}
                <div className="space-y-3">
                  <div className="text-[9px] font-mono text-accent/80 uppercase tracking-wider mb-2">
                    [ PRIMARY STACK ]
                  </div>
                  <div className="grid gap-3 md:grid-cols-1">
                    {layer.primary.map((tool, j) => (
                      <div key={j} className="flex flex-col md:flex-row md:items-center gap-2 bg-surface/30 border border-border-subtle/40 p-3 hover:bg-surface/50 transition-colors">
                        <span className="text-xs font-mono font-bold text-text-primary shrink-0 min-w-[120px] md:border-r md:border-border-subtle/50 md:pr-4">
                          {tool.name}
                        </span>
                        <span className="text-[11px] font-mono text-text-secondary md:pl-2">
                          {tool.why}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collapsible Extended Compatibility Accordion */}
                {layer.extended.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleLayer(layer.id)}
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono text-text-secondary/70 hover:text-accent transition-colors cursor-pointer select-none border border-border-subtle/50 bg-surface/10 px-2.5 py-1"
                    >
                      {isExpanded ? <ChevronUp className="w-3 h-3 text-accent" /> : <ChevronDown className="w-3 h-3" />}
                      {isExpanded
                        ? `[ Hide extended tools ]`
                        : `[ +${layer.extended.length} more platforms ]`}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 flex flex-wrap gap-1.5">
                            {layer.extended.map((extTool, j) => (
                              <span
                                key={j}
                                className="text-[9px] font-mono text-text-secondary/80 border border-border-subtle/40 bg-bg-dark px-2 py-0.5"
                              >
                                {extTool}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Hover line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/0 group-hover:bg-accent/20 transition-colors" />
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA Footer based on condensed prop */}
        {condensed ? (
          <div className="mt-8 text-center">
            <Link 
              href="/toolkit" 
              className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline uppercase tracking-widest"
            >
              [ VIEW FULL TOOLS & STACK → ]
            </Link>
          </div>
        ) : (
          <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">
            <span>Tools & Stack // Complete Reference</span>
            <div className="flex items-center gap-2">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
