"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import content from "@/data/content.json";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroCommandCenter() {
  const { personal, telemetry } = content;
  
  const [showAllMetrics, setShowAllMetrics] = useState(false);
  const [subtitleText, setSubtitleText] = useState("");
  const fullText = personal.subtitle;
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setSubtitleText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="pt-28 pb-16 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Side: Copy & CTA */}
          <div className="space-y-6 pt-4">
            <div>
              <h2 className="text-text-secondary text-sm font-mono mb-2 uppercase tracking-wider">{personal.name}</h2>
              <h1 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight uppercase">
                {personal.title}
              </h1>
            </div>
            
            <p className="text-text-secondary text-sm md:text-base max-w-xl min-h-[70px]">
              {subtitleText}
              <span className="animate-pulse inline-block w-1 h-3.5 bg-text-secondary ml-1 align-middle" />
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#results"
                  className="px-5 py-2.5 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors"
                >
                  See Infrastructure Proof
                </a>
                <a 
                  href="#book"
                  className="px-5 py-2.5 bg-surface text-text-primary text-xs font-mono uppercase tracking-wider border border-border-subtle hover:bg-surface-hover transition-colors"
                >
                  Book a System Audit
                </a>
              </div>
              <div>
                <Link 
                  href="/services"
                  className="inline-flex items-center text-[10px] font-mono text-text-secondary hover:text-accent transition-colors gap-1 uppercase tracking-wider pl-1"
                >
                  View services and pricing →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Dual-Layer Portrait System */}
          <div className="relative w-full max-w-lg mx-auto lg:ml-auto h-[350px] md:h-[400px] flex items-center justify-center">
            
            {/* Environment: Background Topology Lines & Pulses */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
               {/* Ambient blue glow */}
               <motion.div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-[80px]"
                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               />
               
               {/* Faint Grid Texture */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]" />
            </div>

            {/* Core Portrait Node */}
            <motion.div 
              className="relative w-48 h-48 md:w-64 md:h-64 z-10 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Radial Masked Portrait */}
              <div 
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ maskImage: 'radial-gradient(circle at center, black 45%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 70%)' }}
              >
                <Image 
                  src="/portrait.jpg" 
                  alt={personal.name}
                  fill
                  className="object-cover object-center grayscale-[70%] contrast-125 opacity-80 mix-blend-luminosity"
                  priority
                />
                {/* Cinematic Toning Overlay */}
                <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 pointer-events-none" />
                {/* Scanline Texture */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none" />
              </div>
              
              {/* Hover Glow Edge */}
              <div className="absolute inset-0 rounded-full border border-accent/0 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-700 pointer-events-none" />
            </motion.div>

            {/* Layer 2: Technical Overlays (Operator in the Infrastructure) */}
            <div className="absolute inset-0 pointer-events-none z-20">
               
               {/* Telemetry Node 1 (Top Left) */}
               <motion.div 
                 className="flex absolute top-4 left-4 sm:top-8 sm:left-8 bg-bg-dark/80 backdrop-blur-sm border border-border-subtle p-2 items-center gap-2"
                 animate={{ y: [0, -8, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                 <div className="text-[9px] font-mono text-text-secondary uppercase">Node: ACTIVE</div>
               </motion.div>

               {/* Telemetry Node 2 (Bottom Right) */}
               <motion.div 
                 className="flex absolute bottom-8 right-2 sm:bottom-12 sm:right-4 bg-bg-dark/80 backdrop-blur-sm border border-border-subtle p-2 flex flex-col gap-1"
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                 <div className="text-[8px] font-mono text-text-secondary uppercase">Packet Loss</div>
                 <div className="text-xs font-mono text-accent font-bold">0.00%</div>
               </motion.div>

               {/* Routing Path Overlay */}
               <div className="hidden md:block absolute top-1/2 right-1/4 w-32 h-px bg-border-subtle overflow-hidden">
                 <motion.div
                   className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
                   animate={{ x: ["-100%", "200%"] }}
                   transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                 />
               </div>

               {/* DNS Metric Panel (Bottom Left) */}
               <motion.div 
                 className="block absolute bottom-4 left-4 sm:bottom-8 sm:left-12 bg-bg-dark/80 backdrop-blur-sm border border-border-subtle p-2"
                 animate={{ y: [0, -5, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               >
                 <div className="flex items-end gap-3">
                   <div className="flex flex-col gap-0.5">
                     <div className="w-8 h-1 bg-border-subtle"><div className="w-full h-full bg-emerald-400" /></div>
                     <div className="w-8 h-1 bg-border-subtle"><div className="w-full h-full bg-emerald-400" /></div>
                     <div className="w-8 h-1 bg-border-subtle"><div className="w-3/4 h-full bg-emerald-400" /></div>
                   </div>
                   <div className="text-[9px] font-mono text-text-secondary uppercase leading-none">DNS SYNC</div>
                 </div>
               </motion.div>

            </div>
          </div>

        </div>

        {/* Outbound Infrastructure Scale — Telemetry Panel */}
        <div className="border border-border-subtle bg-surface/30">
          <div className="px-6 py-3 border-b border-border-subtle flex items-center justify-between">
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Outbound Infrastructure Scale</span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              INFRASTRUCTURE VERIFIED
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border-subtle">
            {telemetry.map((metric, idx) => (
              <div key={idx} className="bg-bg-dark p-4 flex flex-col gap-2 group hover:bg-surface transition-colors relative overflow-hidden">
                {/* Subtle bar graph background */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/0 group-hover:bg-accent/20 transition-colors" />
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider leading-tight pr-2">{metric.label}</span>
                  <span className="text-[8px] font-mono px-1.5 py-0.5 border shrink-0 text-text-secondary border-border-subtle">
                    {metric.status}
                  </span>
                </div>
                <span className="text-2xl font-mono font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">{metric.value}</span>
                {/* Micro graph line */}
                <div className="h-px bg-border-subtle w-full overflow-hidden mt-1">
                  <motion.div
                    className="h-full bg-accent/40"
                    initial={{ width: 0 }}
                    animate={{ width: `${60 + (idx * 7)}%` }}
                    transition={{ duration: 1.5, delay: idx * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
