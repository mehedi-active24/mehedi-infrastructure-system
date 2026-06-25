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

          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-2 mb-6">Navigation</h3>
            <ul className="space-y-3 font-mono text-xs">
              <li><Link href="/services" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Services</Link></li>
              <li><Link href="/architecture" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Case Studies</Link></li>
              <li><Link href="/logs" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Field Reports</Link></li>
              <li><Link href="/toolkit" className="text-text-secondary hover:text-text-primary hover:pl-2 transition-all group flex items-center gap-2"><span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">&gt;</span>Tools & Stack</Link></li>
            </ul>
          </div>





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
