"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Shield, Server, Database, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-8 bg-bg-dark border-t border-border-subtle overflow-hidden selection:bg-accent/30">
      
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

        {/* Faint Telemetry Line */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-border-subtle opacity-50">
           <motion.div
             className="h-full w-1/4 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"
             animate={{ x: ["-100vw", "100vw"] }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Grid: Statement & Status Panel */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          
          {/* Section 1: Operational Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-6">
               <div className="flex items-center justify-center w-6 h-6 border border-border-subtle bg-surface">
                 <Terminal className="w-3 h-3 text-text-secondary" />
               </div>
               <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
                 System Terminal :: Shutdown Layer
               </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4 uppercase">
               Infrastructure Reliability<br />Over Everything.
             </h2>
             
             <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-text-secondary">
               <p>Cold Email Deliverability & Infrastructure Systems</p>
               <span className="hidden md:inline text-border-subtle">|</span>
               <div className="flex items-center gap-2 font-mono text-xs">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                 <span className="text-emerald-400">GLOBAL ROUTING ACTIVE</span>
               </div>
             </div>
          </div>

          {/* Section 2: Live System Status Panel */}
          <div className="lg:col-span-5">
             <div className="bg-surface/50 border border-border-subtle backdrop-blur-sm p-6 font-mono text-xs text-text-secondary">
                <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-accent" />
                    <span className="text-text-primary uppercase tracking-wider">System Status</span>
                  </div>
                  <div className="px-2 py-1 bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    OPERATIONAL
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center group cursor-default">
                    <span className="group-hover:text-text-primary transition-colors flex items-center gap-2"><Shield className="w-3 h-3"/> DNS Authentication</span>
                    <span className="text-emerald-400">HEALTHY</span>
                  </div>
                  <div className="flex justify-between items-center group cursor-default">
                    <span className="group-hover:text-text-primary transition-colors flex items-center gap-2"><Activity className="w-3 h-3"/> Inbox Placement</span>
                    <span className="text-blue-400">MONITORED</span>
                  </div>
                  <div className="flex justify-between items-center group cursor-default">
                    <span className="group-hover:text-text-primary transition-colors flex items-center gap-2"><Server className="w-3 h-3"/> Warmup Systems</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center group cursor-default">
                    <span className="group-hover:text-text-primary transition-colors flex items-center gap-2"><Database className="w-3 h-3"/> Reputation Layer</span>
                    <span className="text-emerald-400">STABLE</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex justify-between items-center text-[10px] opacity-60">
                  <span>INFRASTRUCTURE VERSION: v2026.4</span>
                  <span>UPDATED: 2026</span>
                </div>
             </div>
          </div>

        </div>

        {/* Section 3: Navigation — 3 curated columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-t border-border-subtle pt-12">

          {/* Column 1: Infrastructure */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-2 mb-6">Infrastructure</h3>
            <ul className="space-y-3 font-mono text-xs">
              <li><Link href="/architecture" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Architecture</Link></li>
              <li><Link href="/#cases" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Infrastructure Cases</Link></li>
              <li><Link href="/#insights" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Deliverability Intelligence</Link></li>
              <li><Link href="/#stack" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Systems Toolkit</Link></li>
            </ul>
          </div>

          {/* Column 2: Connect — Terminal Endpoint Nodes */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-2 mb-6">Connect</h3>
            <ul className="space-y-4 font-mono">
              {([
                { label: "LinkedIn Node", handle: "linkedin.com/in/mehedi-active24", href: "https://www.linkedin.com/in/mehedi-active24/" },
                { label: "GitHub Repository", handle: "github.com/mehedi-active24", href: "https://github.com/mehedi-active24" },
                { label: "X Protocol", handle: "x.com/mehediactive24", href: "https://x.com/mehediactive24" },
                { label: "Fiverr Endpoint", handle: "fiverr.com/sellers/mhasan_24", href: "https://www.fiverr.com/sellers/mhasan_24/" },
                { label: "Facebook Node", handle: "facebook.com/mehedi.active24", href: "https://www.facebook.com/mehedi.active24/" },
                { label: "Email Endpoint", handle: "mehedi.active24@gmail.com", href: "mailto:mehedi.active24@gmail.com" },
              ] as { label: string; handle: string; href: string }[]).map((node, i) => (
                <li key={i}>
                  <a
                    href={node.href}
                    target={node.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={node.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex flex-col gap-0.5 hover:pl-1 transition-all duration-200"
                  >
                    <span className="text-[9px] text-text-secondary/50 uppercase tracking-wider group-hover:text-accent transition-colors">[ {node.label} ]</span>
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
             <span className="text-text-primary/80">MEHEDI HASAN</span> // INFRASTRUCTURE SYSTEMS
          </div>
          <div className="flex items-center gap-2">
             © 2026 // ALL SYSTEMS OPERATIONAL <div className="w-1 h-1 bg-text-secondary/60 rounded-full animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
