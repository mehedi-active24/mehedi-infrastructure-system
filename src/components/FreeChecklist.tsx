"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Lock, Mail, ArrowRight } from "lucide-react";

const checks = [
  {
    id: 1,
    title: "DKIM alignment on reply paths",
    description:
      "Test whether your DKIM signature holds when a recipient replies. Most validators only test the originating send. Reply-path misalignment is the #1 failure mode MXToolbox misses.",
    free: true,
    how: "Send → Gmail → reply back to sender → check 'Show original' for dkim=pass on the reply.",
  },
  {
    id: 2,
    title: "SPF DNS lookup count",
    description:
      "Count the total DNS lookups in your SPF chain, including all nested includes. RFC 7208 hard limit is 10. Most infrastructure with 2+ sending platforms exceeds this silently.",
    free: true,
    how: "Use kitterman.com/spf/validate.html. It counts lookups and flags PermError before live delivery does.",
  },
  {
    id: 3,
    title: "DMARC rua= reporting configured",
    description:
      "Confirm your DMARC record includes a rua= address that is actively receiving aggregate reports. Without this, you have zero forensic visibility into authentication failures.",
    free: true,
    how: "Check your DNS TXT record for rua=. Then verify the inbox is receiving XML files from Google, Microsoft, and Yahoo.",
  },
  {
    id: 4,
    title: "DKIM alignment on forwarded messages",
    description:
      "Forwarded email is rewritten differently than replied email. Many configurations that pass on replies still fail on forwards. This is a common path for spam filter evaluation.",
    free: false,
    how: "Forward a sent message to a second Gmail → Show original → check dkim= result.",
  },
  {
    id: 5,
    title: "Postmaster Tools complaint rate trend",
    description:
      "Check the 30-day trend line in Google Postmaster Tools, not just the current number. A rising trend from 0.04% to 0.08% is a warning sign even if both numbers are below threshold.",
    free: false,
    how: "Postmaster Tools → Spam Rate → switch from 7-day to 30-day view. Directional trend matters more than point-in-time.",
  },
  {
    id: 6,
    title: "Microsoft SNDS trap hit check",
    description:
      "Microsoft's Smart Network Data Services (SNDS) shows whether your sending IPs have hit spam traps in the Outlook ecosystem. Available free. Most operators have never checked it.",
    free: false,
    how: "postmaster.live.com → Smart Network Data Services → register your IPs. Check complaint rate and trap hit columns.",
  },
  {
    id: 7,
    title: "Return-Path domain alignment",
    description:
      "The Return-Path (envelope sender) domain must align with either your From domain (SPF) or your DKIM signing domain for DMARC to pass. Multi-platform infrastructure frequently breaks this.",
    free: false,
    how: "Show original on any sent email. Find Return-Path: header. Compare domain to From: header domain and d= value in DKIM-Signature.",
  },
  {
    id: 8,
    title: "Seed test across Gmail + Outlook (not just open rate)",
    description:
      "Your sending platform's reported open rate is not inbox placement. A seed test sends to controlled inboxes and reports exact inbox/spam/tabs routing per provider. Open rate inflates because only inboxed recipients can open.",
    free: false,
    how: "GlockApps or MailReach offer affordable per-test pricing. Run one per active campaign sequence, not one per month.",
  },
  {
    id: 9,
    title: "Warmup signal vs. production volume ratio",
    description:
      "Reputation maintenance requires continuous positive engagement signal. If warmup is turned off post-warmup, domain reputation decays passively. Check that warmup volume is at least 10-15% of your production send volume on every active domain.",
    free: false,
    how: "In Instantly or Smartlead: check per-domain warmup settings. If warmup is disabled post-warmup, re-enable at 10-15 emails/mailbox/day.",
  },
];

export default function FreeChecklist() {
  const [revealed, setRevealed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const freeChecks = checks.filter((c) => c.free);
  const lockedChecks = checks.filter((c) => !c.free);
  const displayChecks = revealed ? checks : freeChecks;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="checklist" className="py-16 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Free Resource</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight leading-tight">
                The 9 Deliverability Checks MXToolbox Skips
              </h3>
              <p className="text-xs font-mono text-text-secondary mt-2 max-w-lg">
                The specific tests that surface failures standard validators cannot see. The first 3 are free and require no tools.
              </p>
            </div>
            <div className="text-[10px] font-mono text-text-secondary/40 uppercase shrink-0">
              {freeChecks.length} FREE · {lockedChecks.length} UNLOCKABLE
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="border border-border-subtle bg-bg-dark overflow-hidden">

          {/* Table header */}
          <div className="grid grid-cols-12 border-b border-border-subtle px-5 py-2.5 bg-surface/40">
            <div className="col-span-1 text-[9px] font-mono text-text-secondary uppercase tracking-widest">#</div>
            <div className="col-span-8 text-[9px] font-mono text-text-secondary uppercase tracking-widest">Check</div>
            <div className="col-span-3 text-[9px] font-mono text-text-secondary uppercase tracking-widest text-right">Access</div>
          </div>

          {/* Checks */}
          <div className="divide-y divide-border-subtle">
            {displayChecks.map((check, i) => (
              <motion.div
                key={check.id}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.06 }}
                className="grid grid-cols-12 items-start px-5 py-5 group hover:bg-surface/40 transition-colors"
              >
                <div className="col-span-1 pt-0.5">
                  <span className="text-[11px] font-mono text-text-secondary/30 font-bold">
                    {String(check.id).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-8 pr-6">
                  <div className="flex items-start gap-2 mb-1.5">
                    <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center shrink-0 ${
                      check.free ? "border-emerald-400/40 bg-emerald-400/10" : "border-border-subtle bg-surface"
                    }`}>
                      {check.free
                        ? <Check className="w-2.5 h-2.5 text-emerald-400" />
                        : <Lock className="w-2.5 h-2.5 text-text-secondary/30" />
                      }
                    </div>
                    <p className="text-sm font-bold text-text-primary leading-snug">{check.title}</p>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed ml-6 mb-2">{check.description}</p>
                  {(check.free || revealed) && (
                    <div className="ml-6 border-l-2 border-accent/20 pl-3">
                      <p className="text-[10px] font-mono text-text-secondary/50 uppercase mb-0.5">How to test</p>
                      <p className="text-[11px] font-mono text-text-secondary leading-relaxed">{check.how}</p>
                    </div>
                  )}
                </div>
                <div className="col-span-3 flex justify-end pt-0.5">
                  <span className={`text-[9px] font-mono px-2 py-1 border ${
                    check.free
                      ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
                      : "text-text-secondary/40 border-border-subtle"
                  } uppercase tracking-wider`}>
                    {check.free ? "Free" : "Full list"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Unlock footer */}
          {!revealed && (
            <div className="border-t border-border-subtle p-6 bg-surface/20">
              {submitted ? (
                <div className="flex items-center gap-3 text-emerald-400">
                  <Check className="w-4 h-4 shrink-0" />
                  <p className="text-sm font-mono">Noted — reach out via Upwork and I'll send you the full list directly.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-text-primary mb-1">
                      Get checks 4–9 with full "how to test" walkthroughs
                    </p>
                    <p className="text-xs font-mono text-text-secondary">
                      Enter your email — I'll send the complete list directly. No list, no pitch.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@youragency.com"
                      className="flex-1 bg-bg-dark border border-border-subtle px-4 py-2.5 text-xs font-mono text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-3 h-3" />
                      Get Full List
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </form>
                  <button
                    onClick={() => setRevealed(true)}
                    className="text-[10px] font-mono text-text-secondary/40 hover:text-text-secondary transition-colors uppercase tracking-wider"
                  >
                    Or preview all 9 here →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer note */}
        <p className="mt-4 text-[10px] font-mono text-text-secondary/30 text-center">
          These are the checks I run in every forensic audit. The first 3 have surfaced failures in over 60% of new engagements.
        </p>

      </div>
    </section>
  );
}
