"use client";

import { motion } from "framer-motion";
import { TrendingUp, Cpu, Server, ShieldCheck } from "lucide-react";

export default function ProactiveScaling() {
  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-accent" />,
      title: "Volume Grows. Reputation Stays Clean.",
      description: "Instead of reacting when a domain burns, I architect segmented sender clusters with isolated risk from day one. Your send volume scales without reputation events cascading across the fleet."
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: "Problems Caught Before Reply Rates Drop.",
      description: "I establish active DMARC feedback loops and reputation monitoring that detect drift on individual domains weeks before any spam filter triggers or bounce rate moves."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: "Stable at Any Send Volume.",
      description: "Domain registration, DNS architecture, and sending patterns are built to match high-volume compliance requirements from the start. No emergency rebuilds when you scale."
    }
  ];

  return (
    <section className="py-16 border-b border-border-subtle bg-surface/5 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[10px] font-mono text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 w-fit mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            WHAT GOOD INFRASTRUCTURE DELIVERS
          </div>
          <h2 className="text-3xl font-bold text-text-primary uppercase tracking-tight mb-3">
            Built to Scale Before the Problem
          </h2>
          <p className="text-sm font-mono text-text-secondary leading-relaxed">
            For cold email agencies and B2B outbound teams scaling from 50k to 500k monthly sends, who want infrastructure that survives growth instead of collapsing under it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group border border-border-subtle bg-bg-dark p-6 hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-border-subtle bg-surface/50 rounded group-hover:border-accent/20 group-hover:bg-accent/5 transition-all">
                  {pillar.icon}
                </div>
                <h3 className="text-sm font-mono font-bold text-text-primary group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
              
              {/* Bottom pulse line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/0 group-hover:bg-accent/20 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
