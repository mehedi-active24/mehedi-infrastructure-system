"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import content from "@/data/content.json";
import Link from "next/link";

export default function HeroCommandCenter() {
  const { personal } = content;

  return (
    <section className="pt-28 pb-16 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Side: Copy & CTA */}
          <div className="space-y-6 pt-4">
            <div>
              <h2 className="text-text-secondary text-sm font-mono mb-2 uppercase tracking-wider">{personal.name}</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight leading-[1.05] uppercase">
                {personal.title}
              </h1>
            </div>
            
            <p className="text-text-secondary text-sm md:text-base max-w-xl">
              {personal.subtitle}
            </p>

            {/* Evidence bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-l-2 border-accent/30 pl-3">
              <span className="text-[10px] font-mono text-text-secondary/80 uppercase tracking-wider font-semibold">
                31+ agencies recovered
              </span>
              <span className="text-text-secondary/20 text-[10px]">·</span>
              <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider">
                94% post-fix placement
              </span>
              <span className="text-text-secondary/20 text-[10px]">·</span>
              <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider">
                14-day avg. to root cause
              </span>
              <span className="text-text-secondary/20 text-[10px]">·</span>
              <span className="text-[10px] font-mono text-accent/80 uppercase tracking-wider font-bold">
                Reads headers validators never check
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://calendly.com/mehedi-active24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors"
                >
                  Book a Free Discovery Call
                </a>
                <a
                  href="/architecture"
                  className="px-5 py-2.5 bg-surface text-text-primary text-xs font-mono uppercase tracking-wider border border-border-subtle hover:bg-surface-hover transition-colors"
                >
                  See Case Studies
                </a>
              </div>

              {/* Availability signal */}
              <div className="flex items-center gap-2 pl-1">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[10px] font-mono text-emerald-400/70 uppercase tracking-wider">
                  Now accepting new clients · July 2026
                </span>
              </div>

              <div className="flex items-center gap-4 pl-1">
                <Link
                  href="/#triage"
                  className="inline-flex items-center text-[10px] font-mono text-emerald-400/80 hover:text-emerald-400 transition-colors gap-1 uppercase tracking-wider"
                >
                  Free inbox diagnostic →
                </Link>
                <span className="text-text-secondary/20 text-[10px]">·</span>
                <Link
                  href="/services"
                  className="inline-flex items-center text-[10px] font-mono text-text-secondary hover:text-accent transition-colors gap-1 uppercase tracking-wider"
                >
                  Pricing →
                </Link>
                <span className="text-text-secondary/20 text-[10px]">·</span>
                <a
                  href="https://www.linkedin.com/in/mehedi-active24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[10px] font-mono text-text-secondary hover:text-accent transition-colors gap-1 uppercase tracking-wider"
                >
                  LinkedIn →
                </a>
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

            {/* Tight Relative Container for Portrait + Overlays */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Core Portrait Node */}
              <motion.div 
                className="w-full h-full z-10 group relative"
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

              {/* Layer 2: Routing signal line only */}
              <div className="absolute inset-0 pointer-events-none z-20">
                 {/* Routing Path Overlay */}
                 <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-px bg-border-subtle overflow-hidden">
                   <motion.div
                     className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
                     animate={{ x: ["-100%", "200%"] }}
                     transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                   />
                 </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
