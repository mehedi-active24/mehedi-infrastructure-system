"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Search } from "lucide-react";
import type { ReactNode } from "react";

type Status = "pass" | "fail" | "warn" | "neutral";

interface HeaderRow {
  field: string;
  value: string;
  note?: string;
  status: Status;
}

const before: HeaderRow[] = [
  { field: "From",  value: "sw@shopsilvermerch.com",                                                status: "neutral" },
  { field: "SPF",   value: "NONE · 209.85.220.41",   note: "Sending IP not listed in domain SPF record",             status: "fail" },
  { field: "DKIM",  value: "PASS · gappssmtp.com",   note: "Signing domain = Google relay subdomain — not the From domain. Standard validators report PASS. Receiving servers check alignment.", status: "warn" },
  { field: "DMARC", value: "FAIL",                    note: "DKIM signing domain ≠ From domain → alignment failure. Silent. No bounce code.", status: "fail" },
];

const after: HeaderRow[] = [
  { field: "From",  value: "sw@shopsilvermerch.com",                                                status: "neutral" },
  { field: "SPF",   value: "PASS · 209.85.220.65",                                                  status: "pass" },
  { field: "DKIM",  value: "PASS · shopsilvermerch.com", note: "Signing domain now matches From domain — alignment achieved on both paths", status: "pass" },
  { field: "DMARC", value: "PASS",                                                                   status: "pass" },
];

const styles: Record<Status, { value: string; bg: string }> = {
  pass:    { value: "text-emerald-400",  bg: "" },
  fail:    { value: "text-red-400",      bg: "bg-red-400/[0.04]" },
  warn:    { value: "text-amber-400",    bg: "bg-amber-400/[0.04]" },
  neutral: { value: "text-text-primary", bg: "" },
};

function HeaderPanel({
  label,
  icon,
  rows,
  panelStatus,
  delay = 0,
}: {
  label: string;
  icon: ReactNode;
  rows: HeaderRow[];
  panelStatus: "fail" | "pass";
  delay?: number;
}) {
  const isPass     = panelStatus === "pass";
  const borderColor = isPass ? "border-emerald-400/20" : "border-red-400/20";
  const headerBg    = isPass ? "bg-emerald-400/5"      : "bg-red-400/5";
  const dotColor    = isPass ? "bg-emerald-400"        : "bg-red-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`border ${borderColor} bg-bg-dark flex-1 overflow-hidden`}
    >
      {/* Panel title bar */}
      <div className={`px-4 py-2.5 flex items-center gap-2.5 border-b ${borderColor} ${headerBg}`}>
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-text-secondary">
          {icon}
          {label}
        </span>
      </div>

      {/* Source stamp */}
      <div className="px-4 py-1.5 border-b border-border-subtle/50 bg-surface/20">
        <span className="text-[8px] font-mono text-text-secondary/25 uppercase tracking-wider">
          Gmail · Show Original · Message Source · Apr 28 2026
        </span>
      </div>

      {/* Header rows */}
      <div className="divide-y divide-border-subtle/40">
        {rows.map((row) => {
          const s = styles[row.status];
          return (
            <div key={row.field} className={`px-4 py-3 ${s.bg}`}>
              <div className="flex gap-3">
                <span className="text-[9px] font-mono text-text-secondary/35 uppercase tracking-wider w-12 shrink-0 pt-px">
                  {row.field}
                </span>
                <div className="flex-1 min-w-0 space-y-1">
                  <span className={`text-[10px] font-mono font-bold block ${s.value}`}>
                    {row.value}
                  </span>
                  {row.note && (
                    <p className="text-[8px] font-mono text-text-secondary/40 leading-relaxed">
                      {row.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function AuthHeaderForensics() {
  return (
    <div className="border border-border-subtle bg-bg-dark overflow-hidden">

      {/* Component header */}
      <div className="border-b border-border-subtle px-5 py-3 flex items-center justify-between bg-surface/40">
        <div className="flex items-center gap-3">
          <Search className="w-3 h-3 text-accent" />
          <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">
            Authentication Forensics · Raw Header Comparison
          </span>
        </div>
        <span className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-wider hidden sm:inline">
          GoHighLevel + Google Workspace · Apr 2026
        </span>
      </div>

      <div className="p-5 space-y-5">

        {/* Diagnostic finding callout */}
        <div className="border border-amber-400/15 bg-amber-400/[0.03] px-4 py-3">
          <p className="text-[10px] font-mono leading-relaxed">
            <span className="text-amber-400 font-bold">Finding: </span>
            <span className="text-text-secondary/60">
              DKIM reported PASS on all standard validators — MXToolbox, mail-tester, and in-platform checks.
              The signing domain was a Google relay subdomain (gappssmtp.com), not the client&apos;s From domain.
              DMARC alignment requires a match between the two. The failure was only visible in raw message headers.
            </span>
          </p>
        </div>

        {/* Before / After panels */}
        <div className="flex flex-col md:flex-row gap-4">
          <HeaderPanel
            label="Before Intervention"
            icon={<ShieldAlert className="w-2.5 h-2.5" />}
            rows={before}
            panelStatus="fail"
            delay={0}
          />
          <HeaderPanel
            label="After Intervention"
            icon={<ShieldCheck className="w-2.5 h-2.5" />}
            rows={after}
            panelStatus="pass"
            delay={0.15}
          />
        </div>

        {/* Resolution note */}
        <div className="border-l-2 border-accent/30 pl-4">
          <p className="text-[9px] font-mono text-text-secondary/40 leading-relaxed uppercase tracking-wide">
            Resolution: Custom sending domain authenticated directly on shopsilvermerch.com inside GoHighLevel.
            DKIM now signs with the client domain — not the Google relay subdomain.
            SPF updated to cover outbound Google SMTP IP range.
            DMARC alignment achieved on both SPF and DKIM authentication paths.
          </p>
        </div>

      </div>

      {/* Component footer */}
      <div className="border-t border-border-subtle px-5 py-2.5 flex items-start justify-between gap-4">
        <p className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-wider leading-relaxed max-w-lg">
          Live headers captured via Gmail Show Original during authentication audit · Authentication evaluated by receiving server · Client-documented engagement, Apr 2026
        </p>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">Resolved</span>
        </div>
      </div>

    </div>
  );
}
