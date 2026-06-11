"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Network, ShieldAlert, Lock, RefreshCw, ServerCrash, Box,
  Activity, BarChart2, Clock, Filter
} from "lucide-react";

const modules = [
  {
    id: "mdsp",
    icon: Network,
    size: "large",
    title: "Multi-Domain Sending Pools",
    label: "SENDER POOL DESIGN",
    desc: "Architecting decentralized sender networks with segmented domain clusters, isolated reputation layers, and scalable throughput management.",
    meta: "Domain Isolation · Throughput Segmentation · Risk Distribution",
    pulse: "emerald",
  },
  {
    id: "rrs",
    icon: ShieldAlert,
    size: "normal",
    title: "Reputation Recovery Systems",
    label: "REPUTATION RECOVERY",
    desc: "Forensic remediation of degraded sender reputation, blacklist escalation events, and inbox placement collapse.",
    meta: "Blacklist Recovery · Forensic Diagnostics · Inbox Restoration",
    pulse: "amber",
  },
  {
    id: "dns",
    icon: Lock,
    size: "normal",
    title: "DNS Authentication Hardening",
    label: "DNS AUTHENTICATION",
    desc: "Strict SPF, DKIM, DMARC, ARC, reverse DNS, and BIMI alignment engineered for provider compliance and authentication integrity.",
    meta: "SPF · DKIM · DMARC · ARC · rDNS · BIMI",
    pulse: "blue",
  },
  {
    id: "sra",
    icon: RefreshCw,
    size: "normal",
    title: "Sending Rotation Architecture",
    label: "IP & DOMAIN ROTATION",
    desc: "Algorithmic IP and domain rotation systems designed to distribute sending risk and reduce provider throttling exposure.",
    meta: "Rotation Logic · Throttle Avoidance · Risk Segmentation",
    pulse: "violet",
  },
  {
    id: "bro",
    icon: ServerCrash,
    size: "normal",
    title: "Blocklist Recovery Operations",
    label: "BLACKLIST REMOVAL",
    desc: "Escalation handling, forensic diagnostics, and reputation restoration across major anti-spam intelligence networks.",
    meta: "Spamhaus · Barracuda · SORBS · URIports",
    pulse: "red",
  },
  {
    id: "mio",
    icon: Box,
    size: "large",
    title: "Mailbox Infrastructure Orchestration",
    label: "INBOX PROVISIONING",
    desc: "Automated provisioning workflows for scalable workspace deployment, routing alignment, sender isolation, and mailbox lifecycle management.",
    meta: "Workspace Provisioning · Lifecycle Management · Routing Alignment · Sender Isolation",
    pulse: "emerald",
  },
  {
    id: "ipt",
    icon: Activity,
    size: "normal",
    title: "Inbox Placement Telemetry",
    label: "PLACEMENT MONITORING",
    desc: "Live deliverability monitoring systems tracking spam trap exposure, bounce patterns, complaint rates, and inbox flow degradation.",
    meta: "Seed Testing · Bounce Classification · Complaint Rate",
    pulse: "blue",
  },
  {
    id: "rts",
    icon: BarChart2,
    size: "normal",
    title: "Reputation Telemetry Systems",
    label: "REPUTATION TRACKING",
    desc: "Continuous monitoring of sender health, engagement signals, complaint thresholds, and infrastructure degradation patterns.",
    meta: "Postmaster · SNDS · Engagement Signals · Drift Detection",
    pulse: "accent",
  },
  {
    id: "cda",
    icon: Clock,
    size: "normal",
    title: "Cold Domain Aging Systems",
    label: "DOMAIN WARMUP",
    desc: "Engineered domain aging protocols establishing progressive trust signals before production sending begins.",
    meta: "Warmup Curves · Aging Schedules · Trust Establishment",
    pulse: "emerald",
  },
  {
    id: "asi",
    icon: Filter,
    size: "normal",
    title: "Adaptive Sending Threshold Logic",
    label: "SEND VELOCITY",
    desc: "Dynamic sending velocity calibration responding to real-time provider signals, reputation scoring, and infrastructure load.",
    meta: "Velocity Control · Provider Compliance · Dynamic Throttling",
    pulse: "amber",
  },
];

const pulseColors: Record<string, { dot: string; border: string; bg: string; text: string }> = {
  emerald: { dot: "bg-emerald-400", border: "border-emerald-400/20", bg: "bg-emerald-400/5",  text: "text-emerald-400" },
  amber:   { dot: "bg-amber-400",   border: "border-amber-400/20",   bg: "bg-amber-400/5",    text: "text-amber-400"   },
  blue:    { dot: "bg-blue-400",    border: "border-blue-400/20",    bg: "bg-blue-400/5",     text: "text-blue-400"    },
  violet:  { dot: "bg-violet-400",  border: "border-violet-400/20",  bg: "bg-violet-400/5",   text: "text-violet-400"  },
  red:     { dot: "bg-red-400",     border: "border-red-400/20",     bg: "bg-red-400/5",      text: "text-red-400"     },
  accent:  { dot: "bg-accent",      border: "border-accent/20",      bg: "bg-accent/5",       text: "text-accent"      },
};

export default function CapabilitiesGrid() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="capabilities" className="py-24 border-b border-border-subtle bg-surface/10 relative overflow-hidden">

      {/* Background topology */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(255,255,255,0.003)_4px,rgba(255,255,255,0.003)_5px)] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Service Areas</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight leading-tight">
              Deliverability Problems<br />I Fix
            </h3>
            <p className="text-xs font-mono text-text-secondary mt-3 max-w-lg">
              Every service area maps to a deliverability failure category. These are the problems I diagnose and fix.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 shrink-0">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            10 SERVICE AREAS
          </div>
        </div>

        {/* Asymmetric Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            const colors = pulseColors[mod.pulse];
            const colSpan = mod.size === "large" ? "md:col-span-3" : "md:col-span-2";
            const isHiddenMobile = !showAll && i >= 4;

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`group relative border border-border-subtle bg-bg-dark p-5 hover:bg-surface hover:border-accent/20 transition-all duration-300 overflow-hidden ${colSpan} ${
                  isHiddenMobile ? "hidden md:block" : ""
                }`}
              >
                {/* Left accent strip */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${colors.dot} opacity-20 group-hover:opacity-80 transition-opacity duration-300`} />

                {/* Corner node indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <motion.div
                    className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                  />
                </div>

                {/* Module Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-8 h-8 border ${colors.border} ${colors.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <div>
                    <div className={`text-[9px] font-mono uppercase tracking-widest mb-1 ${colors.text} opacity-60 group-hover:opacity-100 transition-opacity`}>
                      {mod.label}
                    </div>
                    <h4 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors leading-tight">
                      {mod.title}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {mod.desc}
                </p>

                {/* Meta tags */}
                <div className="flex flex-wrap gap-1.5">
                  {mod.meta.split(" · ").map((tag, j) => (
                    <span key={j} className={`text-[8px] font-mono px-1.5 py-0.5 border border-border-subtle text-text-secondary/50 bg-bg-dark group-hover:${colors.border} group-hover:${colors.text} transition-colors`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow overlay */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>

        {/* Toggle Button for Mobile View */}
        <div className="md:hidden mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[10px] font-mono text-accent hover:underline uppercase tracking-widest cursor-pointer border border-border-subtle bg-bg-dark px-4 py-2.5"
          >
            {showAll ? "[ SHOW LESS ]" : "[ SHOW ALL ]"}
          </button>
        </div>

      </div>
    </section>
  );
}
