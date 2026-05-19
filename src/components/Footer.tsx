"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-8 bg-bg-dark overflow-hidden selection:bg-accent/30">
      
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]" />
        
        {/* Ambient infrastructure glow */}
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent/5 blur-[120px] rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />


      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section 3: Navigation — 3 curated columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {/* Column 1: Infrastructure */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-2 mb-6">Infrastructure</h3>
            <ul className="space-y-3 font-mono text-xs">
              <li><Link href="/architecture" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Master Systems Map</Link></li>
              <li><Link href="/intelligence" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Deliverability Intelligence</Link></li>
              <li><Link href="/logs" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Operational Logs</Link></li>
              <li><Link href="/toolkit" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Systems Toolkit</Link></li>
            </ul>
          </div>

          {/* Column 2: Connect — Terminal Endpoint Nodes */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-2 mb-6">Connect</h3>
            <ul className="space-y-3 font-mono text-xs">
              {([
                { label: "LinkedIn Node", handle: "linkedin.com/in/mehedi-active24", href: "https://www.linkedin.com/in/mehedi-active24/" },
                { label: "GitHub Repository", handle: "github.com/mehedi-active24", href: "https://github.com/mehedi-active24" },
                { label: "Email Endpoint", handle: "mehedi@mehedi-infrastructure.com", href: "mailto:mehedi@mehedi-infrastructure.com" },
              ] as { label: string; handle: string; href: string }[]).map((node, i) => (
                <li key={i}>
                  <a
                    href={node.href}
                    target={node.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={node.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex items-center hover:pl-1 transition-all duration-200"
                  >
                    <span className="text-[9px] text-text-secondary/40 uppercase tracking-wider group-hover:text-accent transition-colors w-24 shrink-0">[ {node.label.replace(" Node", "").replace(" Repository", "").replace(" Protocol", "").replace(" Endpoint", "")} ]</span>
                    <span className="text-[11px] text-text-secondary group-hover:text-text-primary transition-colors truncate">{node.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: System Status — Compact Operational Panel */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-2 mb-6">System Status</h3>
            <div className="bg-surface/40 border border-border-subtle p-4 space-y-3 font-mono text-[10px]">
              {([
                { label: "Infrastructure Reliability", value: "ACTIVE", color: "text-emerald-400" },
                { label: "Monitoring Coverage", value: "ENABLED", color: "text-emerald-400" },
                { label: "Outbound Systems", value: "OPERATIONAL", color: "text-emerald-400" },
                { label: "Reputation Layer", value: "STABLE", color: "text-blue-400" },
              ] as { label: string; value: string; color: string }[]).map((item, i) => (
                <div key={i} className="flex justify-between items-center gap-4 border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                  <span className="text-text-secondary">{item.label}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className={`w-1 h-1 rounded-full ${item.color === "text-emerald-400" ? "bg-emerald-400" : "bg-blue-400"} animate-pulse`} />
                    <span className={item.color}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* Section 4: Copyright & Signature Layer */}
        <div className="border-t border-border-subtle pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-text-secondary/60 uppercase tracking-widest">
          <div>
             <span className="text-text-primary/80">MEHEDI HASAN</span> // COLD EMAIL INFRASTRUCTURE
          </div>
          <div className="flex items-center gap-2">
             © 2026 // ALL SYSTEMS OPERATIONAL <div className="w-1 h-1 bg-text-secondary/60 rounded-full animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
