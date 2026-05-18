"use client";

import { motion } from "framer-motion";
import { Server, Database, Activity, Shield, ArrowRight } from "lucide-react";

interface FlowStep {
  step: string;
  detail: string;
}

export default function DynamicTopologyVisualizer({ tools, flow }: { tools: string[], flow: FlowStep[] }) {
  
  const PulseLine = ({ delay = 0 }) => (
    <div className="w-8 md:w-16 h-px bg-border-subtle relative overflow-hidden shrink-0">
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay }}
      />
    </div>
  );

  return (
    <div className="w-full bg-bg-dark border border-border-subtle p-6 md:p-12 overflow-x-auto custom-scrollbar font-mono">
      <div className="min-w-[800px]">
        
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-subtle">
           <div className="flex items-center gap-2 text-xs text-text-secondary uppercase">
             <Activity className="w-4 h-4 text-accent animate-pulse" />
             Live System Topology
           </div>
           <div className="flex gap-2">
             {tools.map((t, i) => (
               <span key={i} className="text-[10px] px-2 py-1 border border-border-subtle bg-surface text-text-secondary">
                 {t}
               </span>
             ))}
           </div>
        </div>

        {/* Dynamic Horizontal Flow */}
        <div className="flex items-center justify-center py-12">
          {flow.map((node, index) => (
            <div key={index} className="flex items-center">
              
              {/* Node */}
              <div className="relative group">
                {/* Ping effect behind node */}
                <motion.div 
                   className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <div className="bg-surface border border-border-subtle p-4 w-40 flex flex-col items-center text-center relative z-10 hover:border-accent transition-colors">
                   <div className="w-8 h-8 rounded bg-bg-dark border border-border-subtle flex items-center justify-center mb-3">
                     {index === 0 ? <Database className="w-4 h-4 text-text-secondary" /> : 
                      index === flow.length - 1 ? <Shield className="w-4 h-4 text-emerald-400" /> :
                      <Server className="w-4 h-4 text-accent" />}
                   </div>
                   <div className="text-xs font-bold text-text-primary mb-1">{node.step}</div>
                   <div className="text-[10px] text-text-secondary leading-tight">{node.detail}</div>
                </div>
              </div>

              {/* Connecting Line (except last) */}
              {index < flow.length - 1 && (
                <PulseLine delay={index * 0.4} />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
