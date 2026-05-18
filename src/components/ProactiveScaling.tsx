"use client";

import { motion } from "framer-motion";
import { TrendingUp, Cpu, Server, ShieldCheck } from "lucide-react";

export default function ProactiveScaling() {
  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-accent" />,
      title: "Pre-Emptive Subnet Rotation",
      description: "Instead of reacting when an IP is burned, we deploy segmented, multi-tenant IP clusters with automated sender throttling. Your volume scales seamlessly while risk is completely isolated."
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: "Continuous Telemetry Loops",
      description: "We establish active feedback loops and DNS monitoring scripts that detect minor reputation drift on sub-domains before any major spam filter or blocklist triggers."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: "RFC-Compliant Scale Maps",
      description: "We architect registration, domain, and DNS patterns matching high-volume enterprise compliance guidelines, ensuring your domain cluster remains 100% stable under high scale."
    }
  ];

  return (
    <section className="py-16 border-b border-border-subtle bg-surface/5 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-40 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[10px] font-mono text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 w-fit mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            PROACTIVE SYSTEMS SCALING // PRE-EMPTIVE ARCHITECTURE
          </div>
          <h2 className="text-3xl font-bold text-text-primary uppercase tracking-tight mb-3">
            Pre-Emptive Systems Scaling
          </h2>
          <p className="text-sm font-mono text-text-secondary leading-relaxed">
            For outbound-led agencies and SaaS teams scaling from 50k to 500k monthly sends who want to architect their sending infrastructure right the first time.
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
