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


            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <a
                  href="/architecture"
                  className="px-5 py-2.5 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors"
                >
                  View Case Studies
                </a>
                <a
                  href="/#triage"
                  className="px-5 py-2.5 bg-surface text-text-primary text-xs font-mono uppercase tracking-wider border border-border-subtle hover:bg-surface-hover transition-colors"
                >
                  Free Inbox Diagnostic
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Dual-Layer Portrait System */}
          <div className="relative w-full max-w-lg mx-auto lg:ml-auto h-[350px] md:h-[400px] flex items-center justify-center">
            
            {/* Environment: Background Topology Lines & Pulses */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">               {/* Faint Grid Texture */}            </div>

            {/* Tight Relative Container for Portrait + Overlays */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Core Portrait Node */}
              <motion.div 
                className="w-full h-full z-10 group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Portrait */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image 
                    src="/portrait.jpg" 
                    alt={personal.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                
                {/* Hover Glow Edge */}
                <div className="absolute inset-0 rounded-full border border-accent/0 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-700 pointer-events-none" />
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
