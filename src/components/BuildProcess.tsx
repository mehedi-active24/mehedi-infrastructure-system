"use client";

import { motion } from "framer-motion";
import { Search, Server, Gauge, Zap, Activity } from "lucide-react";

const stages = [
  {
    id: "01",
    icon: Search,
    label: "Discovery Call",
    layer: "STEP 01 — FREE",
    description:
      "A 20-minute call to understand your sending environment, infrastructure setup, and the symptoms you're seeing. You'll leave knowing whether this is an infrastructure problem and whether I can fix it.",
    indicators: [
      { key: "DURATION", value: "20 MIN" },
      { key: "COST", value: "FREE" },
    ],
    color: "blue",
  },
  {
    id: "02",
    icon: Server,
    label: "Forensic Audit",
    layer: "STEP 02 — DIAGNOSIS",
    description:
      "I test DKIM alignment on replies and forwards, not just originating sends. I trace SPF resolution through all forwarding paths. I review DMARC aggregate reports for real failure rates. You get a written findings report with the specific cause and specific fix.",
    indicators: [
      { key: "DELIVERY", value: "72 HOURS" },
      { key: "OUTPUT", value: "WRITTEN REPORT" },
    ],
    color: "violet",
  },
  {
    id: "03",
    icon: Gauge,
    label: "Fix & Implement",
    layer: "STEP 03 — REMEDIATION",
    description:
      "Targeted fixes applied across your sending infrastructure: DNS authentication records, platform configuration, warmup scheduling, and fleet architecture where needed. Not a checklist. The actual repair.",
    indicators: [
      { key: "DNS AUTH", value: "CORRECTED" },
      { key: "PLACEMENT", value: "RECOVERING" },
    ],
    color: "amber",
  },
  {
    id: "04",
    icon: Zap,
    label: "Verify & Hand Off",
    layer: "STEP 04 — CONFIRMATION",
    description:
      "Inbox placement confirmed via seed testing across Gmail, Outlook, and Apple Mail before handoff. You receive a monitoring checklist and documented changes so your team knows what was done and why.",
    indicators: [
      { key: "PLACEMENT TEST", value: "PASSED" },
      { key: "DOCS", value: "DELIVERED" },
    ],
    color: "emerald",
  },
  {
    id: "05",
    icon: Activity,
    label: "Ongoing Monitoring",
    layer: "STEP 05 — OPTIONAL RETAINER",
    description:
      "For agencies where outbound is the primary acquisition channel. Weekly DMARC report review, reputation tracking, blacklist surveillance, and inbox spot testing. Issues caught weeks before reply rates move.",
    indicators: [
      { key: "MONITORING", value: "WEEKLY" },
      { key: "RESPONSE TIME", value: "24H" },
    ],
    color: "emerald",
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; dot: string; line: string }> = {
  blue:    { text: "text-blue-400",    border: "border-blue-400/25",    bg: "bg-blue-400/5",    dot: "bg-blue-400",    line: "from-blue-400/40"    },
  violet:  { text: "text-violet-400",  border: "border-violet-400/25",  bg: "bg-violet-400/5",  dot: "bg-violet-400",  line: "from-violet-400/40"  },
  amber:   { text: "text-amber-400",   border: "border-amber-400/25",   bg: "bg-amber-400/5",   dot: "bg-amber-400",   line: "from-amber-400/40"   },
  emerald: { text: "text-emerald-400", border: "border-emerald-400/25", bg: "bg-emerald-400/5", dot: "bg-emerald-400", line: "from-emerald-400/40" },
};

export default function BuildProcess() {
  return (
    <section id="process" className="py-24 border-b border-border-subtle bg-bg-dark">

      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-10">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">How I Work</h2>
            <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">
              What Standard Tools Miss. And How I Find It.
            </h3>
            <p className="text-xs font-mono text-text-secondary mt-3 max-w-lg">
              Every engagement starts with a free 20-minute call. You'll leave knowing whether this is an infrastructure problem, what caused it, and whether it's fixable. No money changes hands until you decide to proceed.
            </p>
          </div>

        </div>

        {/* Steps */}
        <div className="space-y-px border border-border-subtle">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex gap-5 p-5 bg-bg-dark border-b border-border-subtle last:border-0 hover:bg-surface/30 transition-colors"
              >
                <div className="shrink-0 w-8 h-8 border border-border-subtle flex items-center justify-center mt-0.5">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[9px] font-mono text-text-secondary/30">{stage.id}</span>
                    <h4 className="text-sm font-bold text-text-primary">{stage.label}</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{stage.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

          {/* Pipeline footer */}
          <div className="mt-8 ml-0 md:ml-20 pt-6 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-secondary/30 uppercase tracking-widest">
            <span>Consulting Process · Discovery to Ongoing Protection</span>
            <div className="flex items-center gap-2">
              <motion.div className="w-1 h-1 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              All Stages Operational
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
