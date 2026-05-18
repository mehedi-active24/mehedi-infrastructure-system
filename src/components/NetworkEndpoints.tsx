"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import content from "@/data/content.json";

export default function NetworkEndpoints() {
  const { network } = content;

  return (
    <section className="py-24 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Identity Layer</h2>
            <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">Network Endpoints</h3>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            ALL NODES ACTIVE
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {network.map((node, idx) => (
            <motion.a
              key={idx}
              href={node.href}
              target={node.href.startsWith("mailto") ? undefined : "_blank"}
              rel={node.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group bg-surface border border-border-subtle p-5 flex flex-col gap-4 hover:border-accent transition-all duration-300 relative overflow-hidden"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover:bg-accent transition-all duration-300" />

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[9px] font-mono text-text-secondary uppercase tracking-widest mb-1.5">
                    [ {node.label} ]
                  </div>
                  <div className="text-sm font-mono text-text-primary group-hover:text-accent transition-colors">
                    {node.handle}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border-subtle pt-3">
                <span className="text-[9px] font-mono text-text-secondary/60 uppercase tracking-wider">
                  {node.meta}
                </span>
                <span className="text-[9px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  ACCESS →
                </span>
              </div>

              {/* Subtle scanning line on hover */}
              <motion.div
                className="absolute inset-x-0 h-px bg-accent/20 top-0 opacity-0 group-hover:opacity-100"
                animate={{ y: [0, 80, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
