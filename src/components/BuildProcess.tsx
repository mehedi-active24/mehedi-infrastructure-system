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
    <section id="process" className="py-24 border-b border-border-subtle bg-bg-dark relative overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(255,255,255,0.003)_4px,rgba(255,255,255,0.003)_5px)] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">How I Work</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight leading-tight">
              What Standard Tools Miss. And How I Find It.
            </h3>
            <p className="text-xs font-mono text-text-secondary mt-3 max-w-lg">
              Every engagement starts with a free 20-minute call. You'll leave knowing whether this is an infrastructure problem, what caused it, and whether it's fixable. No money changes hands until you decide to proceed.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 shrink-0">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            PIPELINE OPERATIONAL
          </div>
        </div>

        {/* Pipeline Layout */}
        <div className="relative">

          {/* Vertical spine line (desktop) */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-border-subtle hidden md:block overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-accent/60 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-3">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const c = colorMap[stage.color];

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="group flex gap-0 md:gap-6 items-stretch"
                >
                  {/* Node on spine */}
                  <div className="hidden md:flex flex-col items-center shrink-0 w-14">
                    <div className={`w-8 h-8 border ${c.border} ${c.bg} flex items-center justify-center z-10 group-hover:border-opacity-60 transition-all mt-4`}>
                      <Icon className={`w-3.5 h-3.5 ${c.text}`} />
                    </div>
                  </div>

                  {/* Stage Card */}
                  <div className={`flex-1 border border-border-subtle bg-surface/30 group-hover:bg-surface group-hover:border-accent/20 transition-all duration-300 relative overflow-hidden`}>

                    {/* Left color bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${c.dot} opacity-20 group-hover:opacity-100 transition-opacity`} />

                    {/* Routed signal line on hover */}
                    <div className="absolute top-1/2 left-0 right-0 h-px overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${c.line} to-transparent`}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                      />
                    </div>

                    <div className="grid md:grid-cols-12 gap-4 p-5 items-start">

                      {/* Stage ID + Label */}
                      <div className="md:col-span-3 flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="md:hidden w-6 h-6 border border-border-subtle flex items-center justify-center bg-bg-dark">
                            <Icon className={`w-3 h-3 ${c.text}`} />
                          </div>
                          <span className={`text-[9px] font-mono uppercase tracking-widest ${c.text} opacity-60 group-hover:opacity-100 transition-opacity`}>
                            {stage.layer}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[10px] font-mono text-text-secondary/30">[ {stage.id} ]</span>
                          <h4 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors leading-tight">
                            {stage.label}
                          </h4>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-6">
                        <p className="text-xs text-text-secondary leading-relaxed">{stage.description}</p>
                      </div>

                      {/* Telemetry Indicators */}
                      <div className="md:col-span-3 flex flex-col gap-2">
                        {stage.indicators.map((ind, j) => (
                          <div key={j} className={`flex items-center justify-between border ${c.border} ${c.bg} px-2.5 py-1.5`}>
                            <span className="text-[8px] font-mono text-text-secondary/50 uppercase">{ind.key}</span>
                            <div className="flex items-center gap-1.5">
                              <motion.div
                                className={`w-1 h-1 rounded-full ${c.dot}`}
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 + j * 0.2 }}
                              />
                              <span className={`text-[9px] font-mono ${c.text}`}>{ind.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Connector arrow between stages (not last) */}
                  {i < stages.length - 1 && (
                    <div className="hidden" /> /* Spine handles visual continuity */
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Pipeline footer */}
          <div className="mt-8 ml-0 md:ml-20 pt-6 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-secondary/30 uppercase tracking-widest">
            <span>Consulting Process // Discovery to Ongoing Protection</span>
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
