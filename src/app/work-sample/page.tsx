import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  {
    label: "Email Authentication — shopsilvermerch.com",
    caption: "GoHighLevel + Google Workspace audit. DKIM showed PASS on every external validator. DMARC was failing silently — only visible in raw Gmail headers.",
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
        label: "shopsilvermerch.com · Verified Final State",
        detail: "Custom sending domain fully authenticated on GoHighLevel · Apr 2026",
      },
    ],
  },
  {
    label: "Email Authentication — preishare.com",
    caption: "Full authentication remediation for a real estate investment platform. SPF was missing entirely; DMARC was failing. Rebuilt from scratch across GHL + DNS.",
    items: [
      {
        src: "/evidence/preishare-before.png",
        label: "preishare.com · Before",
        detail: "SPF: NONE · DKIM: PASS · DMARC: FAIL — emails landing in spam despite partial auth",
      },
      {
        src: "/evidence/preishare-after.png",
        label: "preishare.com · After",
        detail: "SPF: PASS · DKIM: PASS · DMARC: PASS — full alignment restored",
      },
    ],
  },
  {
    label: "Diagnosis & Health Checks",
    caption: "Tools I use to surface what validators miss. MXToolbox exposes DNS-level errors; ActiveCampaign's built-in check confirms record propagation from the sending platform side.",
    items: [
      {
        src: "/evidence/mxtoolbox-selfcraft-before.png",
        label: "MXToolbox · selfcraft.me · Before Fix",
        detail: "4 errors, 2 warnings — duplicate DMARC records preventing policy enforcement · Case 05",
      },
      {
        src: "/evidence/selfcraft-passed.png",
        label: "selfcraft.me · Post-Remediation",
        detail: "SPF, DKIM, DMARC all passing after M365 DKIM key regeneration · Jun 2026",
      },
      {
        src: "/evidence/activecampaign-auth-check.png",
        label: "ActiveCampaign · purcell-compliance.com Auth Check",
        detail: "DKIM OK · SPF OK · DMARC OK — confirmed from inside the sending platform",
      },
      {
        src: "/evidence/postmaster-after.png",
        label: "Google Postmaster · Post-Remediation",
        detail: "Domain reputation + IP reputation + spam ratio tracked at receiving end · Domain names redacted",
      },
    ],
  },
  {
    label: "Cold Email Platform Results",
    caption: "Outbound campaign infrastructure I've built and managed. Deliverability depends on domain warmup, sending limits, and authentication — not just copy.",
    items: [
      {
        src: "/evidence/instantly-analytics.png",
        label: "Instantly.ai · Campaign Analytics",
        detail: "5,200+ emails sent · 66.77% open rate · 4.55% reply rate",
      },
      {
        src: "/evidence/instantly-campaign.png",
        label: "Instantly.ai · Campaign Overview",
        detail: "Running campaign dashboard showing sequence steps and delivery tracking",
      },
      {
        src: "/evidence/ghl-preishare-analytics.png",
        label: "GoHighLevel · PREIshare Email Services",
        detail: "73,229 sent · 71,857 delivered · 98% delivery rate · 1,121 bounces (2%)",
      },
    ],
  },
  {
    label: "Lead Generation & Automation",
    caption: "Building the full stack from lead sourcing to follow-up. Apollo for prospecting, Klaviyo for lifecycle automation, Zapier for multi-platform orchestration.",
    items: [
      {
        src: "/evidence/apollo-leads.png",
        label: "Apollo.io · Lead Search",
        detail: "Operations Manager filter · 9,300+ verified results · Used for outbound list building",
      },
      {
        src: "/evidence/klaviyo-flow.webp",
        label: "Klaviyo · Abandoned Cart Flow (Shopify)",
        detail: "Multi-step email + SMS automation with conditional splits for purchased vs. non-purchased",
      },
      {
        src: "/evidence/zapier-flow.png",
        label: "Zapier · Instantly Reply Automation",
        detail: "Instantly reply → Google Sheets → AI classify → Filter → Slack alert → Email → Delay → Instantly",
      },
    ],
  },
  {
    label: "Email Marketing Platforms",
    caption: "Managed campaigns and list health across multiple ESPs. MailerLite for broadcast campaigns, Beehiiv for newsletter infrastructure.",
    items: [
      {
        src: "/evidence/mailerlite-dashboard.png",
        label: "MailerLite · Subscriber Dashboard",
        detail: "3,020 active subscribers · Campaign management and list segmentation",
      },
      {
        src: "/evidence/beehiiv-dashboard.png",
        label: "Beehiiv · Own Newsletter Dashboard",
        detail: "9,461 subscribers · 62.41% open rate · Own infrastructure — same setup I build for clients",
      },
    ],
  },
  {
    label: "Platform Configuration",
    caption: "Hands-on DNS and sending platform configuration across GHL, Instantly, and Google Workspace.",
    items: [
      {
        src: "/evidence/ghl-config.png",
        label: "GoHighLevel · Email Services Config",
        detail: "Custom sending domain with dedicated authentication inside GHL",
      },
      {
        src: "/evidence/auth-verified.png",
        label: "Authentication Verification",
        detail: "SPF, DKIM, DMARC confirmed passing on correct client domain after fix",
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
                  <div key={item.src} className={`border border-border-subtle overflow-hidden flex flex-col ${"wide" in item && item.wide ? "md:col-span-2 max-w-2xl" : ""}`}>
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
