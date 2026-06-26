"use client";

import content from "@/data/content.json";

export default function AuditCTA() {
  const { cta } = content;

  return (
    <section id="book" className="py-20 border-b border-border-subtle bg-surface/20 text-center border-t-2 border-t-accent/40">

      <div className="container mx-auto px-6 max-w-3xl">

        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 uppercase tracking-tight leading-tight">
          {cta.heading}
        </h2>

        <p className="text-text-secondary text-base md:text-lg mb-8 max-w-lg mx-auto">
          {cta.copy}
        </p>

        {/* Proof bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8 text-[10px] font-mono text-text-secondary/40 uppercase tracking-wider">
          <span>5 documented case recoveries</span>
          <span className="text-text-secondary/20">·</span>
          <span>31+ agencies recovered</span>
          <span className="text-text-secondary/20">·</span>
          <span>94% post-fix placement rate</span>
          <span className="text-text-secondary/20">·</span>
          <span>3-day avg. to root cause</span>
        </div>


      </div>
    </section>
  );
}
