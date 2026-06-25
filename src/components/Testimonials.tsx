"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MXToolbox showed everything passing. We spent three weeks changing copy and re-warming. Nothing moved. Mehedi found the problem in 48 hours — DKIM misalignment on reply paths, which no tool we used even tested for. 10 of 12 domains recovered in 18 days.",
    role: "Founder",
    company: "8-person B2B Lead Gen Agency",
    market: "USA",
    platform: "Instantly",
    volume: "~180k sends/month",
    metric: "31% → 68% inbox placement",
    timeline: "18 days to recovery",
    avatarColor: "bg-blue-500/20 border-blue-400/30 text-blue-400",
    avatarInitial: "F",
  },
  {
    quote: "500k sends/month, almost all routing to Junk on Outlook — while our dashboard showed good open rates because Gmail was still working. Mehedi found the Return-Path misalignment on the first call. Full delivery restored in 21 days. I would not have found this on my own.",
    role: "Agency Director",
    company: "15-person Cold Email Agency",
    market: "Australia",
    platform: "Smartlead + custom SMTP",
    volume: "500k/month",
    metric: "Full Outlook delivery restored",
    timeline: "21 days",
    avatarColor: "bg-violet-500/20 border-violet-400/30 text-violet-400",
    avatarInitial: "A",
  },
  {
    quote: "Reputation dropping for two months. Every tool said we were clean. Mehedi found a spam trap segment driving complaint signals we couldn't see — no forensic DMARC reporting meant no visibility. Bounce rate: 4.2% to 0.7% in 30 days.",
    role: "Head of Outreach",
    company: "Recruiting Firm",
    market: "UK",
    platform: "Instantly + Clay",
    volume: "~60k sends/month",
    metric: "4.2% → 0.7% bounce rate",
    timeline: "30 days",
    avatarColor: "bg-emerald-500/20 border-emerald-400/30 text-emerald-400",
    avatarInitial: "H",
  },
  {
    quote: "Our Salesloft sequences had 22% open rate on Gmail contacts but near-zero on Outlook. Mehedi found the DMARC forensic gap in two hours. Three weeks later: Outlook inbox placement up from 31% to 79%. Nobody on our team would have found this.",
    role: "Head of Sales",
    company: "6-person SaaS Sales Team",
    market: "UK",
    platform: "Salesloft + Google Workspace",
    volume: "~35k sends/month",
    metric: "31% → 79% Outlook placement",
    timeline: "21 days",
    avatarColor: "bg-amber-500/20 border-amber-400/30 text-amber-400",
    avatarInitial: "H",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 border-b border-border-subtle bg-surface/5">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-12">
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">What Clients Say</h2>
          <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">
            From the Agencies and Teams I've Worked With
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-border-subtle bg-bg-dark p-6 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-5 h-5 text-accent/40" />
                <p className="text-sm text-text-secondary leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-mono font-bold text-text-primary">{t.role} · {t.company}</span>
                  <span className="text-[10px] font-mono text-text-secondary/50">{t.metric} · {t.timeline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
