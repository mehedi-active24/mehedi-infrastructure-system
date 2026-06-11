"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We were running 12 Instantly domains. Placement dropped to 31% overnight. MXToolbox showed everything passing — SPF, DKIM, DMARC all green. We spent three weeks changing copy, reducing volume, re-warming. Nothing moved. Mehedi found the actual problem within 48 hours. It was a DKIM alignment issue on reply paths that no tool we used even tested for. 10 of 12 domains were recovering inside 18 days.",
    author: "Agency Owner",
    company: "8-person B2B Lead Gen Agency",
    market: "United States",
    platform: "Instantly",
    volume: "~180k sends/month",
    metric: "31% → 68% inbox placement",
    timeline: "18 days to recovery",
  },
  {
    quote: "500,000 sends per month, almost all of it routing to Junk on Outlook. Our Smartlead dashboard showed good open rates because Gmail was still working — we didn't realize Outlook was the problem until we ran a seed test. Mehedi identified the issue in the first call. It was our Return-Path domain misalignment breaking SPF for Microsoft 365 specifically. He rebuilt the sending architecture and we were back to full volume in 21 days. I would not have found this on my own.",
    author: "Founder",
    company: "15-person Cold Email Agency",
    market: "Australia",
    platform: "Smartlead + custom SMTP",
    volume: "500k/month",
    metric: "Full Outlook delivery restored",
    timeline: "21 days",
  },
  {
    quote: "Google Postmaster showed our domain reputation dropping every week for two months. Bounce rate was up to 4.2%. We checked every tool — MXToolbox, Mail-Tester, our Instantly reports. Nothing flagged. Mehedi found a spam trap segment in our Clay-sourced list that was driving complaint signals we could not see because we had no ruf= on our DMARC record. Bounce rate went from 4.2% to 0.7% in 30 days after the list purge and DMARC forensic reporting was turned on.",
    author: "Head of Growth",
    company: "Recruiting Outreach Team",
    market: "United Kingdom",
    platform: "Instantly + Clay",
    volume: "~60k sends/month",
    metric: "4.2% → 0.7% bounce rate",
    timeline: "30 days",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 border-b border-border-subtle bg-surface/5">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-12">
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Client Results</h2>
          <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">
            What Clients Say
          </h3>
          <p className="text-xs font-mono text-text-secondary mt-2">
            Outcome summaries from completed engagements. Full technical breakdowns in the case studies below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group border border-border-subtle bg-bg-dark p-6 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-accent/0 group-hover:bg-accent/40 transition-colors" />

              <div className="space-y-4">
                <Quote className="w-5 h-5 text-accent/40" />
                <p className="text-sm text-text-secondary leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle space-y-3">
                {/* Result metrics */}
                <div className="flex flex-wrap gap-2">
                  <div className="bg-emerald-400/5 border border-emerald-400/20 px-2 py-1">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase">{t.metric}</span>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 px-2 py-1">
                    <span className="text-[9px] font-mono text-accent uppercase">{t.timeline}</span>
                  </div>
                </div>

                {/* Context */}
                <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono text-text-secondary/50 uppercase">
                  <span>Platform: {t.platform}</span>
                  <span>Vol: {t.volume}</span>
                </div>

                {/* Author */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-mono font-bold text-text-primary">{t.author}</span>
                  <span className="text-[10px] font-mono text-text-secondary/60">{t.company} · {t.market}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof note */}
        <p className="mt-6 text-[10px] font-mono text-text-secondary/40 text-center uppercase tracking-wider">
          Full case breakdowns available in the Client Recovery Cases section above
        </p>

      </div>
    </section>
  );
}
