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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
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

        {/* Upwork link */}
        <div className="mb-10">
          <a
            href="https://www.upwork.com/freelancers/~01841a8ed365215f2e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary/60 hover:text-accent transition-colors group"
          >
            <svg className="w-3.5 h-3.5 text-[#6FDA44] flex-shrink-0" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.75 17.542c-1.469 0-2.849-.578-3.875-1.458l.344-1.578.016-.083c.256-1.402 1.063-3.745 3.516-3.745 1.833 0 3.323 1.479 3.323 3.302 0 1.833-1.49 3.562-3.323 3.562zm0-9.042c-2.734 0-4.865 1.49-5.922 4.115-.87-1.547-1.526-3.391-1.911-4.927H14.25v6.141c0 1.849-1.49 3.339-3.339 3.339-1.849 0-3.339-1.49-3.339-3.339V7.688H5v6.141c0 3.068 2.484 5.583 5.552 5.583 3.068 0 5.552-2.515 5.552-5.583v-1.026c.37 1.141.922 2.333 1.625 3.401l-2.192 8.307h2.75l1.141-4.854c1.068.682 2.292 1.083 3.609 1.083 3.609 0 6.521-2.943 6.521-6.552 0-3.609-2.912-6.526-6.521-6.526z"/>
            </svg>
            <span>Connect on Upwork</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
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
