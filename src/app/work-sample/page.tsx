import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  {
    label: "Email Authentication — Before & After",
    caption: "Raw Gmail headers captured during a GoHighLevel + Google Workspace audit. DKIM showed PASS on every validator. DMARC was failing silently — only visible in raw message headers.",
    items: [
      {
        src: "/evidence/shopsilver-before.png",
        label: "shopsilvermerch.com · Before",
        detail: "SPF: NONE · DKIM: gappssmtp.com relay (misaligned) · DMARC: FAIL",
      },
      {
        src: "/evidence/shopsilver-after.png",
        label: "shopsilvermerch.com · After",
        detail: "SPF: PASS · DKIM: PASS (client domain) · DMARC: PASS",
      },
      {
        src: "/evidence/shopsilver-fixed.png",
        label: "shopsilvermerch.com · Verified final state",
        detail: "Custom sending domain fully authenticated on GoHighLevel · Apr 2026",
      },
      {
        src: "/evidence/selfcraft-passed.png",
        label: "selfcraft.me · Post-remediation",
        detail: "SPF, DKIM, DMARC all passing after M365 DKIM fix · Jun 2026",
      },
    ],
  },
  {
    label: "Deliverability Monitoring",
    caption: "Monitoring tools I use on every engagement. Google Postmaster tracks domain reputation at the receiving end — the signal validators like MXToolbox never surface.",
    items: [
      {
        src: "/evidence/postmaster-after.png",
        label: "Google Postmaster · Post-remediation",
        detail: "Domain reputation + IP reputation + spam ratio · Recovery data after authentication fixes · Domain names redacted",
      },
      {
        src: "/evidence/auth-verified.png",
        label: "Authentication verification",
        detail: "SPF, DKIM, DMARC confirmed passing on correct domain after fix",
      },
    ],
  },
  {
    label: "Platform Configuration",
    caption: "Screenshots from active client engagements showing hands-on platform work.",
    items: [
      {
        src: "/evidence/ghl-config.png",
        label: "GoHighLevel · Email Services Config",
        detail: "Custom sending domain setup inside GoHighLevel with dedicated authentication",
      },
      {
        src: "/evidence/instantly-analytics.png",
        label: "Instantly.ai · Campaign Analytics",
        detail: "Active outbound sequences with deliverability metrics and inbox placement tracking",
      },
    ],
  },
  {
    label: "Case Study — Multi-Domain Remediation",
    caption: "4 domains audited across Microsoft 365, MailerLite, and Beehiiv. 4 root causes identified. Inbox deliverability score: 2/10 to 10/10.",
    items: [
      {
        src: "/evidence/case-multidomain.png",
        label: "Multi-Domain Authentication Remediation",
        detail: "12,480+ combined subscribers · Suomispam delisted · DMARC p=reject · Jun 2026",
        wide: true,
      },
    ],
  },
  {
    label: "Newsletter Infrastructure — Own Domain",
    caption: "The same principles I apply to client engagements run on my own newsletter first.",
    items: [
      {
        src: "/evidence/beehiiv-dashboard.png",
        label: "Beehiiv · Own Newsletter Dashboard",
        detail: "9,461 subscribers · 62.41% open rate · Real data, not a client engagement",
      },
    ],
  },
];

export default function WorkSamplePage() {
  return (
    <main className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent/30">

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        <div className="mb-12 pb-8 border-b border-border-subtle">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors mb-6">
            <ArrowLeft className="w-3 h-3" /> Back
          </Link>
          <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2">Work Sample</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-3">Real Screenshots from Client Work</h1>
          <p className="text-sm text-text-secondary max-w-xl">
            Every screenshot on this page is from a real client engagement or my own infrastructure. No mockups. Client domain names redacted where permission was not given.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.label}>
              <div className="mb-6">
                <h2 className="text-base font-bold text-text-primary mb-1">{section.label}</h2>
                <p className="text-xs text-text-secondary/60 font-mono max-w-2xl">{section.caption}</p>
              </div>

              <div className={`grid gap-4 ${section.items.length === 1 ? "grid-cols-1 max-w-2xl" : "md:grid-cols-2"}`}>
                {section.items.map((item) => (
                  <div key={item.src} className={`border border-border-subtle overflow-hidden flex flex-col ${item.wide ? "md:col-span-2 max-w-2xl" : ""}`}>
                    <div className="bg-surface px-4 py-2.5 border-b border-border-subtle flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider">{item.label}</span>
                    </div>
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full block"
                    />
                    <div className="px-4 py-2.5 border-t border-border-subtle">
                      <p className="text-[10px] font-mono text-text-secondary/40">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
