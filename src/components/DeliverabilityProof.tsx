"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, CheckCircle, ChevronDown } from "lucide-react";
import PostmasterAuditVisual from "@/components/PostmasterAuditVisual";
import AuthHeaderForensics from "@/components/AuthHeaderForensics";

const telemetry = [
  {
    value: "31+",
    label: "Agencies & Teams Recovered",
    meta: "Q1-Q2 2026",
    status: "emerald",
    bar: 88,
  },
  {
    value: "94%",
    label: "Average Inbox Placement",
    meta: "POST-FIX VERIFIED",
    status: "emerald",
    bar: 94,
  },
  {
    value: "1,235+",
    label: "Sending Domains Recovered",
    meta: "CUMULATIVE",
    status: "blue",
    bar: 72,
  },
  {
    value: "14 Days",
    label: "Avg. Time to Root Cause",
    meta: "FORENSIC AUDIT",
    status: "emerald",
    bar: 82,
  },
  {
    value: "<0.3%",
    label: "Complaint Rate Stability",
    meta: "VERIFIED",
    status: "emerald",
    bar: 97,
  },
  {
    value: "100%",
    label: "Audits Where Root Cause Was Tool-Invisible",
    meta: "STANDARD VALIDATORS MISSED IT",
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
    env: "B2B Cold Email Agency",
    quickResult: "31% → 68% inbox placement · 10/12 domains recovered · 18 days",
    failure: "Silent inbox placement collapse. 31% placement over 90 days. All validators passing. All blacklists clean.\n\nRoot Cause Identified:\n• Warmup service running on identical timing schedule as active outbound campaigns. ESPs flagging combined pattern as automated bulk traffic\n• DKIM passing format validation but breaking on replies and forwards (the sends that generate engagement signals with receiving servers)\n• DMARC at p=none with no RUA reporting. Zero visibility into authentication failures at receiving servers",
    intervention: "Warmup schedule isolated from outbound cadences. DKIM realigned across all message paths including reply and forward paths. DMARC enforced to p=quarantine with active RUA and RUF forensic reporting. Domain reputation isolated per sending domain.",
    result: "Inbox placement recovered from 31% to 68% by day 18. 10 of 12 domains recovered. 2 domains had exceeded the reputation recovery window and were retired. [TIMELINE: 18 DAYS]",
    severity: "CRITICAL",
  },
  {
    id: "02",
    env: "B2B Agency (50 Domains)",
    quickResult: "500k/month delivery restored · M365 SCL 5-6 → 1-2 · 21 days",
    failure: "Domain burnout during volume scaling. Sustained 500k/month sends collapsing to Junk across Microsoft 365 targets.\n\nRoot Cause Identified:\n- All 50 sending domains registered under the same registrar account with shared billing. Microsoft Defender clustering all 50 as a single sender identity\n- SPF lookup count at 14 across primary domains (RFC 7208 hard limit is 10), causing PermError on strict receivers and silent delivery failures without bounce codes\n- No domain reputation isolation. One domain reputation event cascading across the entire fleet",
    intervention: "Domain registrar accounts separated across 3 entities. SPF records rebuilt to 4 DNS lookups maximum using IP4 directives. Fleet architecture redesigned with reputation isolation per cluster: 10-domain clusters, no shared ASN or DNS provider across clusters.",
    result: "Sustained 500k/month delivery restored without reputation drift. Microsoft 365 SCL scores reduced from 5-6 to 1-2 across fleet. [TIMELINE: 21 DAYS]",
    severity: "HIGH",
  },
  {
    id: "03",
    env: "Recruiting Outreach",
    quickResult: "4.2% → 0.7% bounce rate · Google reputation: High tier · 30 days",
    failure: "Google Sender Compliance failure. Bounce rate elevated to 4.2%. Gmail rejection rate rising week-over-week despite clean MXToolbox results.\n\nRoot Cause Identified:\n- DMARC enforcement absent: p=none with no aggregate reporting. Google's bulk sender requirements (effective Feb 2024) require p=quarantine for senders above 5k/day\n- Bounce classification undifferentiated: hard and soft bounces treated identically, accelerating list decay into reputation damage\n- No PTR record on sending IP. Reverse DNS mismatch flagged by Gmail's inbound authentication layer",
    intervention: "DMARC enforced to p=quarantine with active RUA reporting. PTR records configured with reverse DNS matching the sending hostname. Bounce classification separated by error code: 5xx hard bounces suppressed permanently, 4xx soft bounces retried with adaptive throttle tuning.",
    result: "Bounce rate reduced from 4.2% to 0.7% within 30 days. Google Postmaster domain reputation recovered to High tier. Google Sender Compliance requirements met in full. [TIMELINE: 30 DAYS]",
    severity: "HIGH",
  },
  {
    id: "04",
    env: "E-Commerce / GoHighLevel + Google Workspace",
    quickResult: "SPF + DKIM + DMARC: PASS · Validator-invisible failure resolved · Apr 2026",
    failure: "DMARC failing silently on all outbound. Inbox placement declining with no visible cause. All validator tools — MXToolbox, mail-tester, in-platform checks — reporting authentication as healthy.\n\nRoot Cause Identified:\n• GoHighLevel routing outbound through Google Workspace SMTP relay. Google's relay signs DKIM with shopsilvermerch-com.20251104.gappssmtp.com — a relay-specific subdomain, not the client's From domain\n• From domain: shopsilvermerch.com. DKIM signing domain: gappssmtp.com subdomain. These do not match\n• DMARC alignment check requires DKIM signing domain to match From domain. Mismatch causes silent DMARC failure — no bounce code, no validator flag\n• SPF: NONE — Google relay IPs not included in the domain's SPF record. Separate unlisted relay path",
    intervention: "Custom sending domain configured inside GoHighLevel, authenticated directly on shopsilvermerch.com. DKIM now signs with the client domain — not Google's relay subdomain. SPF record updated to include Google's outbound SMTP IP ranges. DMARC alignment achieved on both SPF and DKIM paths.",
    result: "SPF: PASS. DKIM: PASS (shopsilvermerch.com — correctly aligned). DMARC: PASS. Verified via Gmail Show Original header inspection. Standard validators had reported green throughout — the failure was only visible in raw message headers. [VERIFIED: APR 2026]",
    severity: "HIGH",
  },
];

const severityColors: Record<string, string> = {
  CRITICAL: "text-red-400 border-red-400/20 bg-red-400/5",
  HIGH:     "text-amber-400 border-amber-400/20 bg-amber-400/5",
};

export default function DeliverabilityProof() {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section id="results" className="py-16 border-b border-border-subtle bg-surface/10 relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-30 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-12">

        {/* ── SECTION 1: TELEMETRY METRICS ── */}
        <div>
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Verified Results</h2>
              <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">Proof of Work</h3>
              <p className="text-xs font-mono text-text-secondary mt-2">
                Live metrics across active client infrastructure. Updated Q2 2026.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              VERIFIED METRICS
            </div>
          </div>

          {/* Telemetry Panel Header */}
          <div className="border border-border-subtle">
            <div className="bg-surface/50 px-5 py-2.5 border-b border-border-subtle flex items-center justify-between">
              <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-3 h-3 text-accent" /> Infrastructure Metrics
              </span>
              <span className="text-[9px] font-mono text-text-secondary/40 hidden sm:inline">DATASET: COMPLIANT // VERIFICATION STATUS: COMPLETE</span>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border-subtle">
              {telemetry.map((metric, i) => {
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
                        <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
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
          </div>
        </div>

        {/* ── POSTMASTER AUDIT VISUAL ── */}
        <div>
          <div className="mb-6">
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Forensic Monitoring</h2>
            <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">What I Actually Read During an Audit</h3>
            <p className="text-xs font-mono text-text-secondary mt-2 max-w-xl">
              Google Postmaster tracks domain reputation at the receiving end — the signal that validators like MXToolbox never check. This is the first dashboard I open on every engagement.
            </p>
          </div>
          <PostmasterAuditVisual />
        </div>

        {/* ── AUTH HEADER FORENSICS ── */}
        <div>
          <div className="mb-6">
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Authentication Forensics</h2>
            <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">What Standard Validators Miss</h3>
            <p className="text-xs font-mono text-text-secondary mt-2 max-w-xl">
              Real email headers from a GoHighLevel + Google Workspace audit. DKIM showed PASS on every tool. DMARC was failing silently. The failure was only visible in raw message headers.
            </p>
          </div>
          <AuthHeaderForensics />
        </div>

        {/* ── SECTION 2: INFRASTRUCTURE RECOVERY LOGS ── */}
        <div>
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Client Recovery Cases</h2>
              <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">Real Deliverability Failures. Real Fixes.</h3>
              <p className="text-xs font-mono text-text-secondary mt-2">
                Cold email agencies and B2B outbound teams. US, UK, and AU markets.
              </p>
            </div>
          </div>

          {/* Recovery Log Accordion */}
          <div className="border border-border-subtle bg-bg-dark divide-y divide-border-subtle">

            {/* Header row */}
            <div className="hidden md:flex bg-surface/50 px-5 py-2.5 text-[9px] font-mono text-text-secondary/50 uppercase tracking-widest">
              <span className="w-20 shrink-0">Ref</span>
              <span className="flex-1">Environment · Key Result</span>
              <span className="w-8 shrink-0" />
            </div>

            {recoveryLogs.map((log, i) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
              >
                {/* Collapsed header — always visible */}
                <button
                  onClick={() => setOpenId(openId === log.id ? null : log.id)}
                  className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-surface/40 transition-colors group"
                >
                  <span className="text-[9px] font-mono text-accent shrink-0 w-14">[ {log.id} ]</span>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-text-primary group-hover:text-accent transition-colors">{log.env}</span>
                      <span className={`text-[8px] font-mono px-1.5 py-0.5 border ${severityColors[log.severity]}`}>{log.severity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-[10px] font-mono text-emerald-400">{log.quickResult}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-text-secondary/30 shrink-0 transition-transform duration-300 ${openId === log.id ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expanded diagnostic detail */}
                <AnimatePresence>
                  {openId === log.id && (
                    <motion.div
                      key={`detail-${log.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 grid md:grid-cols-3 gap-6 bg-surface/20 border-t border-border-subtle/50">
                        {/* Failure */}
                        <div>
                          <div className="text-[8px] font-mono text-red-400/60 uppercase tracking-widest mb-2">Failure State</div>
                          <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">{log.failure}</p>
                        </div>
                        {/* Intervention */}
                        <div>
                          <div className="text-[8px] font-mono text-accent/60 uppercase tracking-widest mb-2">Action Taken</div>
                          <p className="text-xs text-text-secondary leading-relaxed">{log.intervention}</p>
                        </div>
                        {/* Result */}
                        <div>
                          <div className="text-[8px] font-mono text-emerald-400/60 uppercase tracking-widest mb-2">Result</div>
                          <div className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-xs text-emerald-400 font-mono leading-relaxed">{log.result}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Footer */}
            <div className="px-5 py-3 bg-surface/20 flex justify-between items-center text-[9px] font-mono text-text-secondary/30 uppercase tracking-widest">
              <span>Client Recovery Archive · Full Documentation Available</span>
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
