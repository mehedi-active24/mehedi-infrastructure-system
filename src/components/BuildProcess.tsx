"use client"; // v2

import { motion } from "framer-motion";
import { Search, Server, Gauge, Zap, Activity } from "lucide-react";

const stages = [
  {
    id: "01",
    icon: Search,
    label: "Discovery Call",
    layer: "STEP 01 — FREE",
    description:
      "Day 1. A 20-minute call to scope your sending environment and symptoms. You'll leave knowing whether this is an infrastructure problem, what likely caused it, and whether I can fix it. No payment until you decide to proceed.",
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
      "Days 2–4. I test DKIM on reply and forward paths (not just originating sends), trace SPF through all forwarding chains, and review DMARC aggregate reports for real failure rates at receiving servers. Delivered: a written findings report — specific cause, specific fix. No generic checklist.",
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
      "Days 4–7. Targeted fixes across your infrastructure: DNS authentication records corrected, platform configuration updated, warmup schedule isolated from outbound timing. I implement the repair, not a PDF telling you how to do it yourself.",
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
      "Day 7–10. Inbox placement verified via seed testing across Gmail, Outlook, and Apple Mail before handoff. You receive a one-page documented change log so your team knows exactly what was fixed and why.",
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
      "Optional. For agencies where a two-week deliverability failure costs real pipeline. Weekly DMARC report review, Google Postmaster reputation tracking, blacklist surveillance across major RBLs, and inbox spot testing. Issues flagged weeks before reply rates move.",
    indicators: [
      { key: "MONITORING", value: "WEEKLY" },
      { key: "RESPONSE TIME", value: "24H" },
    ],
    color: "emerald",
  },
];

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

      </div>
    </section>
  );
}
