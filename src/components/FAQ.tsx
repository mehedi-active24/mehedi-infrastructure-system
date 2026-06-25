"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How is this different from running my emails through MXToolbox?",
    a: "MXToolbox tells you whether records exist and whether they pass format validation. It does not test DKIM alignment on replies and forwards, trace SPF resolution through forwarding paths, review DMARC aggregate reports for real failure rates at receiving servers, or track domain reputation trajectory over time. The failures that cause most deliverability problems all happen in the places MXToolbox doesn't look.",
  },
  {
    q: "How long does inbox placement recovery take?",
    a: "It depends on how far reputation has declined. Based on client recovery cases: mild-to-moderate failures (validators passing but placement dropping) typically recover in 14–21 days once root causes are fixed. Severe cases (active blacklistings or domains past the recovery window) take longer or require domain retirement. I'll give you an honest timeline estimate during the discovery call, not after you've paid.",
  },
  {
    q: "Will you fix the problem or just tell me what's wrong?",
    a: "The audit includes the written diagnosis and the specific fix specification. The build and retainer tiers include full implementation. I don't deliver a PDF checklist and walk away. I either fix it or I scope what needs to be done before fixing it. If something falls outside the agreed scope, I'll tell you upfront.",
  },
  {
    q: "Do you work with Instantly, Smartlead, and GoHighLevel?",
    a: "Yes. All three, plus Google Workspace, Microsoft 365, Maildoso, and custom SMTP stacks. Platform compatibility is assessed during the discovery call. I don't force a tool change unless the platform itself is the root cause of the failure.",
  },
  {
    q: "What if my domains are already blacklisted?",
    a: "Blacklist delisting is included in all engagement types. Spamhaus, Barracuda, Spamcop, and SURBL are covered as standard. More complex listings (CBL, SBL) require direct intervention. I'll assess these during the audit and tell you exactly what's required before any work begins.",
  },
  {
    q: "Can you manage deliverability for a multi-client agency?",
    a: "Yes. Agency command center architecture (managing 25+ client environments without cross-contamination) is one of my primary service categories. Each client infrastructure is isolated at the domain, DNS, and sending platform level. If you're managing outbound for multiple clients, the retainer tier is specifically designed for this.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-12">
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Common Questions</h2>
          <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">
            Questions That Come Up Before the Discovery Call
          </h3>
          <p className="text-xs font-mono text-text-secondary mt-2 max-w-lg">
            If your question isn't here, send your question via Upwork and I'll respond within 24 hours.
          </p>
        </div>

        <div className="space-y-px border border-border-subtle">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border-subtle last:border-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-surface/50 transition-colors group"
              >
                <span className="text-sm font-mono font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {faq.q}
                </span>
                <span className="shrink-0 mt-0.5 text-accent">
                  {open === i
                    ? <Minus className="w-4 h-4" />
                    : <Plus className="w-4 h-4" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border-subtle/50 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
