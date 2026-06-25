"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, BarChart2, Server, ChevronDown } from "lucide-react";

const categories = [
  {
    id: "reputation",
    icon: Activity,
    label: "Reputation Strategy & Drift Control",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400/5",
    items: [
      "Domain Reputation Drift Analysis",
      "Dynamic Blacklist Recovery Protocols",
      "Algorithmic Complaint Thresholding",
      "Sender Segmentation & Cooldown Pools",
      "Positive Engagement Signal Injection",
      "Suppression List Reconciliation Systems",
    ],
  },
  {
    id: "telemetry",
    icon: BarChart2,
    label: "Delivery Telemetry & Signal Monitoring",
    color: "text-accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    items: [
      "Inbox Placement Seed Testing",
      "Google Postmaster Forensic Tracking",
      "Microsoft SNDS Telemetry Sync",
      "SMTP Bounce Classification Engine",
      "Feedback Loop & Complaint Scoping",
      "Reputation Telemetry Reporting Loops",
    ],
  },
  {
    id: "throttling",
    icon: Server,
    label: "Adaptive Throttling & Velocity Control",
    color: "text-violet-400",
    borderColor: "border-violet-400/20",
    bgColor: "bg-violet-400/5",
    items: [
      "Decentralized Domain Rotation Architecture",
      "Mathematical Cold Domain Warmup Aging",
      "Adaptive Sending Velocity Throttling",
      "Multi-Tenant Isolation Systems",
      "SMTP Silent Delay Failure Diagnostics",
      "Custom CNAME Tracking Domain Isolation",
    ],
  },
];

export default function DeliverabilityIntelligence() {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    reputation: true, // Expand first by default on mobile
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // Accordion on mobile and tablet
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePillar = (id: string) => {
    setExpandedPillars((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="intelligence" className="py-24 border-b border-border-subtle bg-bg-dark relative overflow-hidden">

      {/* Background texture */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Expertise Areas</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Deliverability Expertise</h3>
            <p className="text-xs font-mono text-text-secondary mt-2">
              The three core areas where I diagnose and fix deliverability failures.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 shrink-0">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            3 CORE PILLARS ACTIVE
          </div>
        </div>

        {/* Intelligence Panels Grid / Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isExpanded = expandedPillars[cat.id] || false;
            
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative border ${cat.borderColor} ${cat.bgColor} bg-bg-dark hover:bg-surface transition-all duration-300 overflow-hidden ${
                  isMobile ? "" : "p-5"
                }`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${cat.color.replace("text-", "bg-")} opacity-40 group-hover:opacity-100 transition-opacity`} />

                {/* Header — Clickable on mobile */}
                <div 
                  onClick={() => isMobile && togglePillar(cat.id)}
                  className={`flex items-center justify-between lg:justify-start lg:gap-3 border-b border-border-subtle ${
                    isMobile ? "p-4 cursor-pointer select-none" : "mb-5 pb-3"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 border ${cat.borderColor} flex items-center justify-center ${cat.bgColor}`}>
                      <Icon className={`w-3 h-3 ${cat.color}`} />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${cat.color}`}>{cat.label}</span>
                  </div>

                  {/* Right hand indicators */}
                  <div className="flex items-center gap-2">
                    <motion.div
                      className={`hidden lg:block w-1.5 h-1.5 rounded-full ${cat.color.replace("text-", "bg-")}`}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                    {isMobile && (
                      <ChevronDown className={`w-3.5 h-3.5 text-text-secondary transition-transform duration-200 ${
                        isExpanded ? "transform rotate-180" : ""
                      }`} />
                    )}
                  </div>
                </div>

                {/* Intelligence Items */}
                <AnimatePresence initial={false}>
                  {(!isMobile || isExpanded) && (
                    <motion.div
                      initial={isMobile ? { height: 0, opacity: 0 } : undefined}
                      animate={isMobile ? { height: "auto", opacity: 1 } : undefined}
                      exit={isMobile ? { height: 0, opacity: 0 } : undefined}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={isMobile ? "px-4 pb-5 pt-2 border-t border-border-subtle/50" : ""}
                    >
                      <ul className="space-y-2 mt-2 lg:mt-0">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 group/item">
                            <span className={`text-[9px] font-mono ${cat.color} opacity-40 group-hover/item:opacity-100 transition-opacity`}>›</span>
                            <span className="text-[11px] font-mono text-text-secondary group-hover/item:text-text-primary transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Micro telemetry bar */}
                      <div className="mt-5 pt-3 border-t border-border-subtle">
                        <div className="h-px bg-border-subtle w-full overflow-hidden">
                          <motion.div
                            className={`h-full ${cat.color.replace("text-", "bg-")} opacity-30`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${75 + i * 8}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
