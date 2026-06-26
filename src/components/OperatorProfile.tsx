"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";

const platforms = [
  "Instantly",
  "Smartlead",
  "Google Workspace",
  "Microsoft 365",
  "Cloudflare",
  "Clay",
  "GoHighLevel",
  "Salesloft",
];

export default function OperatorProfile() {
  const { profile } = content;

  return (
    <section id="about" className="py-20 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid md:grid-cols-12 gap-12">

          <div className="md:col-span-4">
             <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">What Standard Audits Miss</h2>
             <h3 className="text-2xl font-bold text-text-primary leading-tight">{profile.philosophy}</h3>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
              {profile.body}
            </p>

            <div className="bg-surface border border-border-subtle p-4 border-l-4 border-l-accent font-mono text-sm text-text-primary">
              {profile.notice}
            </div>

            {/* Platform strip */}
            <div className="space-y-3">
              <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">Platforms I work in</p>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-mono text-text-secondary/70 border border-border-subtle bg-surface/40 px-2.5 py-1 uppercase tracking-wider hover:text-text-primary hover:border-accent/20 transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample audit download */}
            <div className="flex items-center gap-4 pt-2 border-t border-border-subtle">
              <div className="flex-1">
                <p className="text-xs font-mono font-bold text-text-primary">Sample Audit Report</p>
                <p className="text-[10px] font-mono text-text-secondary/50 mt-0.5">Real findings from a GoHighLevel + Google Workspace engagement. Client details redacted.</p>
              </div>
              <a
                href="/sample-audit-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 border border-border-subtle text-[10px] font-mono text-text-secondary hover:border-accent/40 hover:text-accent transition-colors uppercase tracking-wider whitespace-nowrap"
              >
                Download PDF →
              </a>
            </div>
          </div>

        </div>

        {/* Founder story */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-12 border-t border-border-subtle"
        >
          <div className="grid md:grid-cols-12 gap-8 items-start">

            <div className="md:col-span-4">
              <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">Background</h2>
              <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest leading-relaxed">
                Enterprise email security infrastructure · 2018 → present
              </p>
            </div>

            <div className="md:col-span-8 space-y-5">
              <p className="text-xl font-bold text-text-primary leading-snug">
                I spent years on the other side of the inbox.
              </p>

              <p className="text-base text-text-secondary leading-relaxed">
                From 2018 I worked in enterprise email security — administration and infrastructure, operating systems like Cisco ESA, Cisco WSA, and Barracuda ESG. These are the appliances that sit at the receiving end and decide what gets delivered and what gets blocked. I saw exactly how filters evaluate authentication records, behavioral patterns, and sender reputation signals. Most people building cold email infrastructure have never seen that layer.
              </p>

              <p className="text-base text-text-secondary leading-relaxed">
                When I started working with outbound teams in 2020, the same configuration mistakes appeared in every engagement: SPF breaking on forwarded paths, DKIM misaligning on replies, DMARC with no forensic reporting, no warmup, no list hygiene, no sending limits. Standard validators reported everything passing. Placement was collapsing anyway. The failures were in the exact places surface-level tools are not designed to look.
              </p>

              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-mono text-text-primary">
                  That gap — between what validators confirm and what receiving servers actually do — is where I work.
                </p>
              </div>

              {/* Enterprise stack badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Cisco ESA", "Cisco WSA", "Barracuda ESG", "8 Years in IT Infrastructure", "Email Security Since 2018"].map((badge) => (
                  <span key={badge} className="text-[9px] font-mono text-text-secondary/50 border border-border-subtle px-2 py-1 uppercase tracking-wider">
                    {badge}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
