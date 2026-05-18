"use client";

import { motion } from "framer-motion";
import { Shield, Activity, BarChart2, Server, AlertTriangle } from "lucide-react";

const categories = [
  {
    id: "auth",
    icon: Shield,
    label: "Authentication Systems",
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    bgColor: "bg-blue-400/5",
    items: [
      "SPF Flattening",
      "DKIM Alignment",
      "DMARC Enforcement Policies",
      "ARC Header Validation",
      "Reverse DNS Alignment",
      "BIMI Readiness",
    ],
  },
  {
    id: "reputation",
    icon: Activity,
    label: "Reputation Management",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400/5",
    items: [
      "Domain Reputation Drift",
      "Blacklist Recovery Protocols",
      "Complaint Rate Thresholding",
      "Sender Reputation Segmentation",
      "Engagement Signal Monitoring",
      "Suppression Infrastructure",
    ],
  },
  {
    id: "analytics",
    icon: BarChart2,
    label: "Delivery Analytics",
    color: "text-accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    items: [
      "Inbox Placement Testing",
      "Google Postmaster Analysis",
      "Microsoft SNDS Monitoring",
      "Bounce Classification Systems",
      "Reply Classification Logic",
      "Reputation Telemetry",
    ],
  },
  {
    id: "scaling",
    icon: Server,
    label: "Scaling & Infrastructure",
    color: "text-violet-400",
    borderColor: "border-violet-400/20",
    bgColor: "bg-violet-400/5",
    items: [
      "Domain Rotation Architecture",
      "Cold Domain Aging Strategy",
      "Adaptive Sending Threshold Logic",
      "Dedicated vs Shared IP Logic",
      "SMTP Failure Diagnostics",
      "Custom Tracking Domain Strategy",
    ],
  },
  {
    id: "threat",
    icon: AlertTriangle,
    label: "Threat & Failure Management",
    color: "text-amber-400",
    borderColor: "border-amber-400/20",
    bgColor: "bg-amber-400/5",
    items: [
      "Spam Trap Detection & Avoidance",
      "Complaint Feedback Loop Systems",
      "Blocklist Escalation Procedures",
      "Inbox Degradation Detection",
      "Reputation Recovery Systems",
      "Deliverability Failure Isolation",
    ],
  },
];

export default function DeliverabilityIntelligence() {
  return (
    <section id="intelligence" className="py-24 border-b border-border-subtle bg-bg-dark relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-30 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Operational Layer</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Deliverability Intelligence</h3>
            <p className="text-xs font-mono text-text-secondary mt-2">
              Deliverability systems, monitoring frameworks, and infrastructure reliability protocols.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 shrink-0">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            5 INTELLIGENCE LAYERS ACTIVE
          </div>
        </div>

        {/* Intelligence Panels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative border ${cat.borderColor} ${cat.bgColor} bg-bg-dark p-5 hover:bg-surface transition-all duration-300 overflow-hidden`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${cat.color.replace("text-", "bg-")} opacity-40 group-hover:opacity-100 transition-opacity`} />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border-subtle">
                  <div className={`w-6 h-6 border ${cat.borderColor} flex items-center justify-center ${cat.bgColor}`}>
                    <Icon className={`w-3 h-3 ${cat.color}`} />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${cat.color}`}>{cat.label}</span>
                  <motion.div
                    className={`ml-auto w-1.5 h-1.5 rounded-full ${cat.color.replace("text-", "bg-")}`}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                </div>

                {/* Intelligence Items */}
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 group/item">
                      <span className={`text-[9px] font-mono ${cat.color} opacity-40 group-hover/item:opacity-100 transition-opacity`}>›</span>
                      <span className="text-[11px] font-mono text-text-secondary group-hover/item:text-text-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro telemetry bar */}
                <div className="mt-4 pt-3 border-t border-border-subtle">
                  <div className="h-px bg-border-subtle w-full overflow-hidden">
                    <motion.div
                      className={`h-full ${cat.color.replace("text-", "bg-")} opacity-30`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${65 + i * 6}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
