"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our inbox placement was at 31% across 12 domains. Mehedi identified the exact failure — DKIM breaking on reply paths and warmup timing overlap — within 48 hours. 10 domains recovered in 18 days.",
    author: "Agency Owner",
    company: "B2B Lead Gen Agency",
    market: "US Market",
    metric: "31% → 68% placement",
    timeline: "18 days",
  },
  {
    quote: "We were sending 500k/month and watching everything collapse into Junk on Microsoft 365. Turned out all 50 domains shared the same registrar account. Mehedi redesigned the entire fleet architecture.",
    author: "Founder",
    company: "Cold Email Agency",
    market: "AU Market",
    metric: "500k/mo restored",
    timeline: "21 days",
  },
  {
    quote: "Google Postmaster showed our domain reputation tanking week over week. Mehedi found missing PTR records and undifferentiated bounce handling that MXToolbox completely missed. Fixed in 30 days.",
    author: "Head of Growth",
    company: "Recruiting Outreach Team",
    market: "UK Market",
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
            Real outcomes from real engagements. Details anonymised at client request.
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
                <div className="flex gap-4">
                  <div className="bg-emerald-400/5 border border-emerald-400/20 px-2 py-1">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase">{t.metric}</span>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 px-2 py-1">
                    <span className="text-[9px] font-mono text-accent uppercase">{t.timeline}</span>
                  </div>
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
