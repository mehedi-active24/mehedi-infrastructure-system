"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import content from "@/data/content.json";

export default function HeroCommandCenter() {
  const { personal } = content;

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 border-b border-border-subtle overflow-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="relative container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">

          {/* ── Text column ── */}
          <div className="flex-1 space-y-5 sm:space-y-6">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 border border-border-subtle bg-surface/60 px-3 py-1.5 rounded-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-mono text-text-secondary/70 uppercase tracking-widest">
                Email Deliverability Consultant
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl xl:text-[3.5rem] font-bold text-text-primary tracking-tight"
            >
              {personal.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl"
            >
              {personal.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="/#results"
                className="px-5 py-2.5 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 active:bg-accent/80 transition-colors"
              >
                View Case Studies
              </a>
              <a
                href="/work-sample"
                className="px-5 py-2.5 border border-border-subtle text-text-secondary text-xs font-mono uppercase tracking-wider hover:bg-surface hover:text-text-primary hover:border-accent/30 active:bg-surface-hover transition-all"
              >
                Work Sample
              </a>
            </motion.div>

            {/* Proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-2 border-t border-border-subtle"
            >
              {[
                { v: "5", l: "Documented Cases" },
                { v: "94%", l: "Avg. Inbox Rate" },
                { v: "3–7d", l: "Avg. Recovery" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col gap-0.5">
                  <span className="text-xl sm:text-2xl font-bold text-text-primary leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>{s.v}</span>
                  <span className="text-[9px] font-mono text-text-secondary/45 uppercase tracking-widest">{s.l}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Portrait column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-end lg:shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl" />
              {/* Outer ring */}
              <div className="absolute -inset-1 rounded-full border border-accent/15" />
              <div
                className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden border border-surface"
              >
                <Image
                  src="/portrait.jpg"
                  alt={personal.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
