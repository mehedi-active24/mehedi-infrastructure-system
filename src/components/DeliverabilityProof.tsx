"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import PostmasterAuditVisual from "@/components/PostmasterAuditVisual";
import AuthHeaderForensics from "@/components/AuthHeaderForensics";

const recoveryLogs = [
  {
    id: "01",
    env: "B2B Cold Email Agency",
    quickResult: "31% → 68% inbox placement · 10/12 domains recovered · 18 days",
    failure: "Silent inbox placement collapse. 31% placement over 90 days. All validators passing. All blacklists clean.\n\nRoot Cause:\n• Warmup service running on identical timing as active outbound — ESPs flagging as bulk automated traffic\n• DKIM passing format validation but breaking on replies and forwards\n• DMARC at p=none with no RUA reporting — zero visibility into failures at receiving servers",
    intervention: "Warmup schedule isolated from outbound cadences. DKIM realigned across all message paths including reply and forward paths. DMARC enforced to p=quarantine with active RUA and RUF forensic reporting.",
    result: "Inbox placement recovered from 31% to 68% by day 18 — pipeline restored within the same outbound sequences. 10 of 12 domains recovered. 2 domains had exceeded the reputation recovery window and were retired.",
  },
  {
    id: "02",
    env: "B2B Agency (50 Domains)",
    quickResult: "500k/month delivery restored · Microsoft 365 SCL 5–6 → 1–2 · 21 days",
    failure: "Domain burnout during volume scaling. 500k/month collapsing to Junk on Microsoft 365 targets — while Gmail contacts still showed good open rates, masking the full scope.\n\nRoot Cause:\n• All 50 domains registered under the same registrar account — Microsoft Defender clustering all 50 as a single sender identity\n• SPF lookup count at 14 across primary domains (RFC limit is 10), causing PermError on strict receivers\n• No domain reputation isolation — one event cascading across the entire fleet",
    intervention: "Domain registrar accounts separated across 3 entities. SPF records rebuilt to 4 lookups maximum. Fleet redesigned with 10-domain clusters, no shared ASN or DNS provider across clusters.",
    result: "Sustained 500k/month delivery restored. Microsoft 365 SCL scores reduced from 5–6 to 1–2 across the full fleet.",
  },
  {
    id: "03",
    env: "Recruiting Outreach",
    quickResult: "4.2% → 0.7% bounce rate · Google reputation: High tier · 30 days",
    failure: "Google Sender Compliance failure. Bounce rate at 4.2% and rising. Clean MXToolbox results throughout.\n\nRoot Cause:\n• DMARC at p=none — Google's bulk sender requirements require p=quarantine for senders above 5k/day\n• Hard and soft bounces treated identically, accelerating list decay into reputation damage\n• No PTR record on sending IP — reverse DNS mismatch flagged by Gmail",
    intervention: "DMARC enforced to p=quarantine with active RUA reporting. PTR records configured. Bounce classification separated: 5xx hard bounces suppressed permanently, 4xx soft bounces retried with adaptive throttle tuning.",
    result: "Bounce rate reduced from 4.2% to 0.7% within 30 days. Google Postmaster domain reputation recovered to High tier.",
  },
  {
    id: "04",
    env: "E-Commerce / GoHighLevel + Google Workspace",
    quickResult: "SPF + DKIM + DMARC: all PASS · Validator-invisible failure resolved · Apr 2026",
    failure: "DMARC failing silently on all outbound. All validator tools — MXToolbox, mail-tester, in-platform checks — reporting authentication as healthy.\n\nRoot Cause:\n• GoHighLevel routing through Google Workspace SMTP relay. Google's relay signs DKIM with gappssmtp.com — not the client's From domain\n• DMARC alignment requires DKIM signing domain to match From domain — silent failure, no bounce code, no validator flag\n• SPF: NONE — Google relay IPs not included in the domain's SPF record",
    intervention: "Custom sending domain configured inside GoHighLevel, authenticated directly on the client domain. DKIM now signs with client domain. SPF record updated. DMARC alignment achieved.",
    result: "SPF: PASS. DKIM: PASS (client domain, correctly aligned). DMARC: PASS. Verified via Gmail Show Original header inspection.",
  },
  {
    id: "05",
    env: "Multi-Domain Newsletter (M365 + MailerLite + Beehiiv · 12,480+ subscribers)",
    quickResult: "Inbox score 2/10 → 10/10 · Suomispam delisted · DMARC p=reject · 4 root causes fixed",
    failure: "Deliverability collapsing across 4 domains. Suomispam blacklist active on primary sending IP. Apple Mail showing signature warning on every outbound email.\n\nRoot Cause:\n• Duplicate DMARC records at _dmarc subdomain — 4 errors, 2 warnings\n• DMARC policy: p=none with conflicting rua= addresses — zero enforcement, zero visibility\n• Microsoft 365 DKIM: disabled, falling back to onmicrosoft.com (misaligned)\n• Legacy S/MIME certificate referencing previous sender identity",
    intervention: "Duplicate DMARC removed, rebuilt to p=reject, pct=100, sp=reject, adkim=s, aspf=s with active rua + ruf. M365 DKIM enabled (selector1 + selector2, both CNAMEs verified). Legacy S/MIME replaced. IP delisting submitted.",
    result: "Suomispam delisted Jun 6, 2026. DKIM active (both selectors verified Jun 5, 2026). Apple Mail signature correct. Inbox score 2/10 → 10/10.",
    screenshot: "/evidence/selfcraft-passed.png",
    screenshotAlt: "selfcraft.me — post-remediation authentication headers: SPF, DKIM, DMARC all passing",
    screenshotCaption: "selfcraft.me · Gmail Show Original · Post-remediation auth headers · Jun 2026",
  },
];

export default function DeliverabilityProof() {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section id="results" className="py-16 sm:py-20 border-b border-border-subtle bg-surface/10">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl space-y-16">

        {/* ── CASE ACCORDION ── */}
        <div>
          <div className="mb-8">
            <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2">Client Recovery Cases</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              5 Documented Cases. Real Failures, Real Fixes.
            </h2>
            <p className="text-xs font-mono text-text-secondary/60 mt-2">US, UK, and AU markets · Cold email agencies and B2B outbound teams</p>
          </div>

          <div className="border border-border-subtle bg-bg-dark divide-y divide-border-subtle">
            {/* Table header — desktop only */}
            <div className="hidden md:flex bg-surface/50 px-5 py-2.5 text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest">
              <span className="w-10 shrink-0">Ref</span>
              <span className="flex-1">Environment · Key Result</span>
              <span className="w-8 shrink-0" />
            </div>

            {recoveryLogs.map((log, i) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenId(openId === log.id ? null : log.id)}
                  className="w-full text-left px-4 sm:px-5 py-4 flex items-center gap-3 sm:gap-4 hover:bg-surface/40 active:bg-surface/60 transition-colors group"
                >
                  <span className="text-[9px] font-mono text-text-secondary/40 shrink-0 w-8 sm:w-10 hidden sm:block">{log.id}</span>
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <span className="block text-xs sm:text-sm font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">{log.env}</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-mono text-emerald-400 leading-snug">{log.quickResult}</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-text-secondary/30 shrink-0 transition-transform duration-300 ${openId === log.id ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {openId === log.id && (
                    <motion.div
                      key={`detail-${log.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Three-column detail — stacks on mobile */}
                      <div className="px-4 sm:px-5 pb-6 pt-2 grid sm:grid-cols-3 gap-5 sm:gap-6 bg-surface/20 border-t border-border-subtle/50">
                        <div className="space-y-2">
                          <div className="text-[8px] font-mono text-red-400/70 uppercase tracking-widest">Failure State</div>
                          <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">{log.failure}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="text-[8px] font-mono text-accent/70 uppercase tracking-widest">Action Taken</div>
                          <p className="text-xs text-text-secondary leading-relaxed">{log.intervention}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="text-[8px] font-mono text-emerald-400/70 uppercase tracking-widest">Result</div>
                          <div className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-xs text-emerald-400 font-mono leading-relaxed">{log.result}</span>
                          </div>
                        </div>
                      </div>

                      {log.screenshot && (
                        <div className="px-4 sm:px-5 pb-6 bg-surface/20">
                          <div className="text-[8px] font-mono text-emerald-400/60 uppercase tracking-widest mb-3">Post-Remediation Evidence</div>
                          <div className="border border-border-subtle overflow-hidden">
                            <img src={log.screenshot} alt={log.screenshotAlt} className="w-full block" />
                          </div>
                          <p className="text-[9px] font-mono text-text-secondary/30 mt-2">{log.screenshotCaption}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TWO EVIDENCE SCREENSHOTS ── */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
          <div className="space-y-3">
            <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">Monitoring</p>
            <h3 className="text-base sm:text-lg font-bold text-text-primary">Google Postmaster — Post-Remediation</h3>
            <PostmasterAuditVisual />
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">Authentication Forensics</p>
            <h3 className="text-base sm:text-lg font-bold text-text-primary">Before &amp; After — Real Headers</h3>
            <AuthHeaderForensics />
          </div>
        </div>

      </div>
    </section>
  );
}
