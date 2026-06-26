"use client";

import content from "@/data/content.json";
import Link from "next/link";

const proofPoints = [
  "5 documented case recoveries",
  "31% → 68% inbox placement",
  "94% avg. post-fix placement",
  "3-day avg. to root cause",
];

export default function AuditCTA() {
  const { cta } = content;

  return (
    <section id="book" className="relative py-16 sm:py-20 border-b border-border-subtle overflow-hidden">

      {/* Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.05] via-transparent to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-5 sm:px-6 max-w-3xl text-center">

        <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-4">Get in Touch</p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight leading-tight">
          {cta.heading}
        </h2>

        <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
          {cta.copy}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/work-sample"
            className="w-full sm:w-auto px-6 py-3 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 active:bg-accent/80 transition-colors text-center"
          >
            View Work Sample
          </Link>
          <a
            href="/#results"
            className="w-full sm:w-auto px-6 py-3 border border-border-subtle text-text-secondary text-xs font-mono uppercase tracking-wider hover:bg-surface hover:text-text-primary hover:border-accent/30 active:bg-surface-hover transition-all text-center"
          >
            See Case Studies
          </a>
        </div>

        {/* Proof bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-mono text-text-secondary/40 uppercase tracking-wider">
          {proofPoints.map((p, i) => (
            <span key={p} className="flex items-center gap-4">
              {p}
              {i < proofPoints.length - 1 && <span className="text-text-secondary/15 hidden sm:inline">·</span>}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
