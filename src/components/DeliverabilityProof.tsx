"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, CheckCircle } from "lucide-react";

const telemetry = [
  {
    value: "7,450+",
    label: "Active Mailbox Infrastructure",
    meta: "STATUS: STABLE",
    status: "emerald",
    bar: 88,
  },
  {
    value: "99.4%",
    label: "Average Inbox Placement",
    meta: "SIGNAL HEALTH: VERIFIED",
    status: "emerald",
    bar: 99,
  },
  {
    value: "1,235+",
    label: "Sending Domains Recovered",
    meta: "RECOVERY SYSTEMS: ACTIVE",
    status: "blue",
    bar: 72,
  },
  {
    value: "5.3M+",
    label: "Monthly Delivery Throughput",
    meta: "INFRASTRUCTURE: OPERATIONAL",
    status: "emerald",
    bar: 82,
  },
  {
    value: "<0.3%",
    label: "Complaint Rate Stability",
    meta: "MONITORING: ACTIVE",
    status: "emerald",
    bar: 97,
  },
  {
    value: "24/7",
    label: "Infrastructure Monitoring",
    meta: "LAST CHECK: LIVE",
    status: "accent",
    bar: 100,
  },
];

const statusColors: Record<string, { dot: string; text: string; border: string; bg: string }> = {
  emerald: { dot: "bg-emerald-400", text: "text-emerald-400", border: "border-emerald-400/20", bg: "bg-emerald-400/5" },
  blue:    { dot: "bg-blue-400",    text: "text-blue-400",    border: "border-blue-400/20",    bg: "bg-blue-400/5"    },
  accent:  { dot: "bg-accent",      text: "text-accent",      border: "border-accent/20",      bg: "bg-accent/5"      },
};

const recoveryLogs = [
  {
    id: "01",
    env: "Enterprise SaaS",
    failure: "Spamhaus blocklist escalation causing all cold outreach to hit spam.",
    intervention: "Rebuilt DNS authentication (SPF/DKIM/DMARC), isolated damaged domains, and migrated to clean sending IPs.",
    result: "100% inbox placement restored within 14 days, resuming pipeline growth.",
    severity: "CRITICAL",
  },
  {
    id: "02",
    env: "B2B Agency",
    failure: "Domain burnout and blacklisting within 3 weeks of cold email campaign launch.",
    intervention: "Engineered a decentralized 50-domain sending architecture with automated rotational segmentation.",
    result: "Sustained delivery of 500k+ emails per month with zero domain reputation drift.",
    severity: "HIGH",
  },
  {
    id: "03",
    env: "Recruiting Firm",
    failure: "Failed Google's new sender compliance requirements, leading to high bounce rates.",
    intervention: "Hardened domain validation, enforced DMARC security, and applied adaptive sending delays.",
    result: "Bounces cut below 1% and maintained 99%+ deliverability ever since.",
    severity: "HIGH",
  },
];

const severityColors: Record<string, string> = {
  CRITICAL: "text-red-400 border-red-400/20 bg-red-400/5",
  HIGH:     "text-amber-400 border-amber-400/20 bg-amber-400/5",
};

export default function DeliverabilityProof() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="results" className="py-16 border-b border-border-subtle bg-surface/10 relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-30 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-12">

        {/* ── SECTION 1: TELEMETRY METRICS ── */}
        <div>
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Observability Layer</h2>
              <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Deliverability Telemetry</h3>
              <p className="text-xs font-mono text-text-secondary mt-2">
                Operational infrastructure metrics monitored across live outbound delivery environments.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 shrink-0">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              TELEMETRY STREAM LIVE
            </div>
          </div>

          {/* Telemetry Panel Header */}
          <div className="border border-border-subtle">
            <div className="bg-surface/50 px-5 py-2.5 border-b border-border-subtle flex items-center justify-between">
              <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-3 h-3 text-accent" /> Live Infrastructure Metrics
              </span>
              <span className="text-[9px] font-mono text-text-secondary/40 hidden sm:inline">STREAM: ACTIVE // UPDATE INTERVAL: CONTINUOUS</span>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border-subtle">
              {telemetry
                .slice(0, showAll ? telemetry.length : (typeof window !== "undefined" && window.innerWidth >= 768 ? telemetry.length : 4))
                .map((metric, i) => {
                  const c = statusColors[metric.status];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="group bg-bg-dark p-5 flex flex-col gap-3 hover:bg-surface transition-colors relative overflow-hidden"
                    >
                      {/* Status dot */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider leading-tight pr-2">{metric.label}</span>
                        <div className="flex items-center gap-1.5">
                          <motion.div
                            className={`w-1.5 h-1.5 rounded-full ${c.dot}`}
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                          />
                        </div>
                      </div>

                      {/* Value */}
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
                        {metric.value}
                      </div>

                      {/* Progress bar */}
                      <div className="h-px bg-border-subtle w-full overflow-hidden mt-1">
                        <motion.div
                          className={`h-full ${c.dot} opacity-60`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.bar}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: i * 0.08, ease: "easeOut" }}
                        />
                      </div>

                      {/* Meta */}
                      <div className={`text-[8px] font-mono px-1.5 py-0.5 border w-fit ${c.border} ${c.bg} ${c.text}`}>
                        {metric.meta}
                      </div>

                      {/* Hover line trace */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/0 group-hover:bg-accent/20 transition-colors" />
                    </motion.div>
                  );
                })}
            </div>

            {/* Toggle Button for Mobile */}
            <div className="md:hidden border-t border-border-subtle p-3 text-center bg-bg-dark">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[10px] font-mono text-accent hover:underline uppercase tracking-widest cursor-pointer"
              >
                {showAll ? "[ COLLAPSE OBSERVABILITY LAYER ]" : "[ DISCLOSE FULL OBSERVABILITY LAYER ]"}
              </button>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: INFRASTRUCTURE RECOVERY LOGS ── */}
        <div>
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Remediation Archive</h2>
              <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Infrastructure Recovery Logs</h3>
              <p className="text-xs font-mono text-text-secondary mt-2">
                Archived remediation events across live outbound delivery systems.
              </p>
            </div>
          </div>

          {/* Recovery Log Table */}
          <div className="border border-border-subtle bg-bg-dark">

            {/* Table Header (Desktop only) */}
            <div className="hidden md:grid grid-cols-12 bg-surface/50 border-b border-border-subtle px-5 py-2.5 gap-4 text-[9px] font-mono text-text-secondary uppercase tracking-widest">
              <div className="col-span-1">Ref</div>
              <div className="col-span-2">Environment</div>
              <div className="col-span-3">🔴 Problem</div>
              <div className="col-span-4">🛠️ Action</div>
              <div className="col-span-2">🟢 Result</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border-subtle">
              {recoveryLogs.map((log, i) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-5 py-5 hover:bg-surface/50 transition-colors relative"
                >
                  {/* Left hover accent (Desktop only) */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover:bg-accent transition-colors hidden md:block" />

                  {/* Ref */}
                  <div className="md:col-span-1 flex items-start gap-2 border-b border-border-subtle/50 md:border-0 pb-1.5 md:pb-0">
                    <span className="text-[9px] font-mono text-accent">[ REF: {log.id} ]</span>
                  </div>

                  {/* Environment */}
                  <div className="md:col-span-2 space-y-1">
                    <div className="text-[8px] font-mono text-text-secondary/40 uppercase md:hidden">Environment</div>
                    <span className="text-xs font-mono font-bold text-text-primary block">{log.env}</span>
                    <span className={`inline-block text-[8px] font-mono px-1.5 py-0.5 border ${severityColors[log.severity]}`}>
                      {log.severity}
                    </span>
                  </div>

                  {/* Failure State */}
                  <div className="md:col-span-3">
                    <div className="text-[8px] font-mono text-text-secondary/40 uppercase mb-0.5 md:hidden">🔴 Problem</div>
                    <span className="text-xs text-text-secondary leading-relaxed block">{log.failure}</span>
                  </div>

                  {/* Intervention */}
                  <div className="md:col-span-4">
                    <div className="text-[8px] font-mono text-text-secondary/40 uppercase mb-0.5 md:hidden">🛠️ Action</div>
                    <span className="text-xs text-text-secondary leading-relaxed block">{log.intervention}</span>
                  </div>

                  {/* Result */}
                  <div className="md:col-span-2">
                    <div className="text-[8px] font-mono text-text-secondary/40 uppercase mb-0.5 md:hidden">🟢 Result</div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-emerald-400 font-mono leading-tight">{log.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="px-5 py-3 bg-surface/20 flex justify-between items-center text-[9px] font-mono text-text-secondary/30 uppercase tracking-widest border-t border-border-subtle">
              <span>Recovery Archive // {recoveryLogs.length} Events Logged</span>
              <div className="flex items-center gap-2">
                <motion.div className="w-1 h-1 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                All Environments Stabilized
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
