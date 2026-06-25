"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 bg-bg-dark border-t border-border-subtle selection:bg-accent/30">
      
      {/* Background Depth Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid texture */}        
        {/* Ambient infrastructure glow */}



      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section 3: Navigation — 3 curated columns */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-20">







        </div>


        {/* Section 4: Copyright & Signature Layer */}
        <div className="border-t border-border-subtle pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-text-secondary/60 uppercase tracking-widest">
          <div>
             <span className="text-text-primary/80">Mehedi Hasan</span> · Email Deliverability
          </div>
          <div className="flex items-center gap-2">
             © 2026
          </div>
        </div>

      </div>
    </footer>
  );
}
