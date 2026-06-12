"use client";

import { motion } from "framer-motion";
import { Database, Filter, Send, Users, Shield, Server, Activity, AlertCircle, CheckCircle2, Workflow, Fingerprint } from "lucide-react";

export default function NeoScienceArchitecture() {
  const domains = [
    "neosciencestest.co", "neosciencestest.tech", "neosciencestestmail.com", "neosciencestesthq.com",
    "neosciencestestlabs.com", "neosciencestesthealth.com", "neosciencestestpro.com", "neosciencestestnetwork.com",
    "neosciencestestoutreach.com", "neosciencestestsystems.com", "neosciencestestinfra.com", "neosciencestestcloud.com",
    "neosciencestestgroup.com", "neosciencestestglobal.com", "neosciencestestconnect.com", "neosciencestestmail.co",
    "neosciencestestops.com", "neosciencestestsend.com", "neosciencestestdeliver.com", "neosciencestesthub.com",
    "neosciencestestnetwork.co", "neosciencestestx.com"
  ];

  const PulseLine = ({ delay = 0, width = "w-full" }) => (
    <div className={`h-px bg-border-subtle relative overflow-hidden ${width}`}>
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
        animate={{ x: ["-100%", "300%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear", delay }}
      />
    </div>
  );

  return (
    <div className="bg-bg-dark text-text-primary p-4 md:p-8 font-sans overflow-x-auto selection:bg-accent/30">
      <div className="min-w-[1400px] max-w-[1800px] mx-auto">
        
        {/* Header */}
        <div className="mb-8 border-b border-border-subtle pb-4 flex items-end justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight mb-1">NEO Science Outreach Architecture</h1>
            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">Live Delivery Topology & Infrastructure Node Map</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/> SYSTEMS NOMINAL</span>
            <span className="text-text-secondary">|</span>
            <span className="text-text-secondary">ROUTING: <span className="text-accent">ACTIVE</span></span>
          </div>
        </div>

        {/* Layer 5: Monitoring Shell (Surrounds everything) */}
        <div className="relative border border-border-subtle p-8 bg-surface/30">
          
          {/* Shell Monitors */}
          <div className="absolute top-0 left-8 -translate-y-1/2 flex gap-4">
            <div className="bg-surface border border-border-subtle px-3 py-1 text-[10px] font-mono text-text-secondary flex items-center gap-2">
              <Activity className="w-3 h-3 text-accent" /> Google Postmaster
            </div>
            <div className="bg-surface border border-border-subtle px-3 py-1 text-[10px] font-mono text-text-secondary flex items-center gap-2">
              <Shield className="w-3 h-3 text-accent" /> MXToolbox
            </div>
          </div>
          <div className="absolute bottom-0 right-8 translate-y-1/2 flex gap-4">
            <div className="bg-surface border border-border-subtle px-3 py-1 text-[10px] font-mono text-text-secondary flex items-center gap-2">
              <AlertCircle className="w-3 h-3 text-emerald-400" /> Spamhaus/Blacklist Monitoring
            </div>
            <div className="bg-surface border border-border-subtle px-3 py-1 text-[10px] font-mono text-text-secondary flex items-center gap-2">
              <Server className="w-3 h-3 text-accent" /> SNDS Telemetry
            </div>
          </div>

          <div className="flex flex-row gap-8 items-stretch h-full">

            {/* Layer 2: Data & Enrichment */}
            <div className="flex-1 border border-border-subtle bg-surface p-6 flex flex-col relative group">
              <h2 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-6 pb-2 border-b border-border-subtle">01. Data & Enrichment</h2>
              
              <div className="mb-6 bg-bg-dark border border-border-subtle p-3 text-xs font-mono text-center flex items-center justify-center gap-2">
                <Database className="w-4 h-4 text-text-secondary" /> CSV Lead Intake
              </div>

              <div className="flex justify-center my-2"><div className="w-px h-6 bg-border-subtle relative"><motion.div className="absolute top-0 w-full h-1/2 bg-accent" animate={{ y: [0, 24] }} transition={{ repeat: Infinity, duration: 1.5 }}/></div></div>

              <div className="flex-grow bg-bg-dark border border-accent/20 p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                <div className="flex items-center gap-2 mb-4 text-sm font-bold text-accent">
                  <Workflow className="w-4 h-4" /> Clay.com Engine
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-text-secondary">
                  <div className="bg-surface border border-border-subtle p-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400"/> LinkedIn Profile</div>
                  <div className="bg-surface border border-border-subtle p-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400"/> Company Intel</div>
                  <div className="bg-surface border border-border-subtle p-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400"/> Employee Count</div>
                  <div className="bg-surface border border-border-subtle p-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400"/> Recent Activity</div>
                  <div className="bg-surface border border-border-subtle p-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400"/> Tech Stack</div>
                  <div className="bg-surface border border-border-subtle p-2 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400"/> Buying Signals</div>
                </div>

                <div className="mt-4 border-t border-border-subtle pt-4">
                  <div className="bg-surface border border-border-subtle p-2 text-[10px] font-mono text-accent text-center flex items-center justify-center gap-2">
                    <Fingerprint className="w-3 h-3" /> AI Personalization Engine
                  </div>
                </div>
              </div>
            </div>

            {/* Path: Enrichment -> Outreach */}
            <div className="w-8 flex flex-col justify-center items-center">
              <PulseLine delay={0.5} />
            </div>

            {/* Layer 3: Outreach Engine */}
            <div className="w-80 shrink-0 border border-border-subtle bg-surface p-6 flex flex-col relative">
              <h2 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-6 pb-2 border-b border-border-subtle">02. Outreach Engine</h2>
              
              <div className="flex-grow bg-bg-dark border border-accent/20 p-4 relative">
                 <div className="flex items-center justify-between mb-4 pb-4 border-b border-border-subtle">
                   <div className="flex items-center gap-2 text-sm font-bold text-accent">
                     <Send className="w-4 h-4" /> Instantly.ai
                   </div>
                   <div className="flex gap-1">
                     <div className="w-1 h-3 bg-emerald-400 animate-pulse" />
                     <div className="w-1 h-3 bg-emerald-400 animate-pulse delay-75" />
                     <div className="w-1 h-3 bg-emerald-400 animate-pulse delay-150" />
                   </div>
                 </div>

                 <div className="space-y-2 text-[10px] font-mono text-text-secondary">
                   <div className="flex justify-between items-center bg-surface border border-border-subtle p-1.5">
                     <span>Inbox Rotation</span><div className="w-2 h-2 rounded-full bg-emerald-400"/>
                   </div>
                   <div className="flex justify-between items-center bg-surface border border-border-subtle p-1.5">
                     <span>Smart Throttling</span><div className="w-2 h-2 rounded-full bg-emerald-400"/>
                   </div>
                   <div className="flex justify-between items-center bg-surface border border-border-subtle p-1.5">
                     <span>Sequence Automation</span><div className="w-2 h-2 rounded-full bg-emerald-400"/>
                   </div>
                   <div className="flex justify-between items-center bg-surface border border-border-subtle p-1.5">
                     <span>Timezone Delivery</span><div className="w-2 h-2 rounded-full bg-emerald-400"/>
                   </div>
                   <div className="flex justify-between items-center bg-surface border border-border-subtle p-1.5">
                     <span>Reply Detection</span><div className="text-accent">ACTIVE</div>
                   </div>
                   <div className="flex justify-between items-center bg-surface border border-border-subtle p-1.5">
                     <span>Kill-Switch</span><div className="text-text-secondary">STANDBY</div>
                   </div>
                 </div>
              </div>
            </div>

             {/* Path: Outreach -> Delivery */}
            <div className="w-8 flex flex-col justify-center items-center">
              <PulseLine delay={1.0} />
            </div>

            {/* Layer 1: Domain & Deliverability */}
            <div className="flex-[2] border border-border-subtle bg-surface p-6 flex flex-col relative">
               <h2 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-6 pb-2 border-b border-border-subtle flex justify-between">
                 <span>03. Domain & Deliverability Layer</span>
                 <span className="text-emerald-400">22 ACTIVE DOMAINS</span>
               </h2>

               <div className="grid grid-cols-12 gap-4 flex-grow">
                 
                 {/* Authentication Gates */}
                 <div className="col-span-3 flex flex-col gap-2 justify-center border-r border-border-subtle pr-4">
                    <div className="bg-bg-dark border border-border-subtle p-3 flex flex-col items-center gap-1">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-mono text-text-primary">SPF</span>
                      <span className="text-[8px] font-mono text-text-secondary">v=spf1 ~all</span>
                    </div>
                    <div className="bg-bg-dark border border-border-subtle p-3 flex flex-col items-center gap-1">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-mono text-text-primary">DKIM</span>
                      <span className="text-[8px] font-mono text-text-secondary">2048-bit RSA</span>
                    </div>
                    <div className="bg-bg-dark border border-border-subtle p-3 flex flex-col items-center gap-1">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-mono text-text-primary">DMARC</span>
                      <span className="text-[8px] font-mono text-text-secondary">p=quarantine</span>
                    </div>
                 </div>

                 {/* 22 Domain Grid */}
                 <div className="col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-1.5 content-start">
                    {domains.map((domain, i) => (
                      <div key={i} className="bg-bg-dark border border-border-subtle px-2 py-1.5 flex items-center justify-between group hover:border-accent transition-colors">
                        <span className="text-[9px] font-mono text-text-secondary truncate">{domain}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-80" />
                      </div>
                    ))}
                 </div>
               </div>
               
               {/* Warmup Engine Node */}
               <div className="mt-4 bg-bg-dark border border-border-subtle p-2 flex items-center justify-between text-[10px] font-mono">
                 <div className="flex items-center gap-2 text-text-secondary"><Activity className="w-3 h-3 text-accent"/> Distributed Warmup Engine</div>
                 <div className="flex items-center gap-4">
                   <span>Vol: 4.2k/day</span>
                   <span className="text-emerald-400">99.8% Inbox</span>
                 </div>
               </div>
            </div>

            {/* Path: Delivery -> CRM */}
            <div className="w-8 flex flex-col justify-center items-center">
              <PulseLine delay={1.5} />
            </div>

            {/* Layer 4: CRM & Sales Handoff */}
            <div className="w-64 shrink-0 border border-border-subtle bg-surface p-6 flex flex-col relative">
               <h2 className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-6 pb-2 border-b border-border-subtle">04. Sales Handoff</h2>
               
               <div className="flex-grow bg-bg-dark border border-border-subtle p-4 flex flex-col">
                 <div className="flex items-center justify-center gap-2 mb-6 pb-4 border-b border-border-subtle text-sm font-bold text-accent">
                   <Users className="w-4 h-4" /> HubSpot CRM
                 </div>

                 <div className="space-y-4 flex-grow flex flex-col justify-center relative">
                   {/* Pipeline Visual */}
                   <div className="absolute left-3 top-0 bottom-0 w-px bg-border-subtle" />
                   
                   <div className="relative pl-8">
                     <div className="absolute left-[9px] top-1.5 w-2 h-2 rounded-full bg-border-subtle z-10" />
                     <div className="text-[10px] font-mono text-text-primary">Qualified Intake</div>
                     <div className="text-[8px] font-mono text-text-secondary">Lead verification</div>
                   </div>
                   <div className="relative pl-8">
                     <div className="absolute left-[9px] top-1.5 w-2 h-2 rounded-full bg-accent z-10 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                     <div className="text-[10px] font-mono text-text-primary">Opp Routing</div>
                     <div className="text-[8px] font-mono text-text-secondary">AE Assignment</div>
                   </div>
                   <div className="relative pl-8">
                     <div className="absolute left-[9px] top-1.5 w-2 h-2 rounded-full bg-border-subtle z-10" />
                     <div className="text-[10px] font-mono text-text-primary">Deal Pipeline</div>
                     <div className="text-[8px] font-mono text-text-secondary">Lifecycle active</div>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
