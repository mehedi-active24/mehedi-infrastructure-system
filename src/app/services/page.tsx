import Link from "next/link";
import { ArrowLeft, Check, Terminal, Mail, ArrowUpRight, HelpCircle } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Email Deliverability Consulting — Mehedi Hasan",
  description: "Three ways to work with Mehedi Hasan on email deliverability. Forensic audits, full infrastructure builds, and ongoing deliverability oversight for cold email agencies and B2B outbound teams.",
};

const services = [
  {
    tier: "TIER 01",
    name: "Outbound Systems Diagnostic (OSD)",
    price: "$2,500",
    delivery: "5 business days",
    tag: "DIAGNOSTICS",
    description:
      "A full forensic diagnosis of one to three sending domains. We test DKIM alignment on replies and forwards (not just originating sends). We trace SPF resolution through all forwarding paths. We review DMARC aggregate reports for real authentication failure rates at receiving servers. We track domain reputation trajectory in Google Postmaster Tools over 30 to 60 days. You receive a written findings report with the specific cause and the specific fix, not a list of records that passed validation.",
    includes: [
      "SPF, DKIM, and DMARC forensic realignment",
      "DKIM tested on replies, forwards, and originating sends",
      "DMARC moved to p=quarantine with RUA/RUF reporting activated",
      "Blacklist check across Spamhaus, Barracuda, Spamcop, and SURBL",
      "Domain reputation trajectory review via Google Postmaster Tools",
      "Inbox placement verified post-fix via seed testing",
      "Written findings report with specific cause and fix",
    ],
    cta: "Request Systems Diagnostic",
    subject: "Systems Diagnostic Inquiry [your domain]",
  },
  {
    tier: "TIER 02",
    name: "Isolated Sender Architecture Build",
    price: "From $7,500",
    delivery: "Project-based",
    tag: "SYSTEMS BUILD",
    description:
      "End-to-end architecture for outbound teams building or rebuilding cold email infrastructure. Domain acquisition strategy, DNS configuration (SPF, DKIM, DMARC, BIMI, rDNS, PTR), multi-inbox platform setup, sending architecture designed so warmup and outbound campaigns produce no overlapping timing signatures, domain reputation isolated per cluster. Compatible with custom SMTP and private relay networks.",
    includes: [
      "Domain strategy and acquisition (quantity, registrar separation, naming)",
      "Full DNS configuration: SPF, DKIM, DMARC, BIMI, PTR, rDNS",
      "Multi-inbox platform configuration (Instantly, Smartlead, or custom)",
      "Warmup architecture isolated from outbound campaign timing",
      "Domain reputation isolation per cluster (fleet architecture)",
      "Blacklist delisting if required",
      "Handover documentation with monitoring checklist",
    ],
    cta: "Discuss Sender Architecture",
    subject: "Systems Build Inquiry",
  },
  {
    tier: "TIER 03",
    name: "Enterprise Deliverability Oversight (EDO)",
    price: "$3,500 / month",
    delivery: "Ongoing oversight",
    tag: "MANAGED SERVICE",
    description:
      "Ongoing monitoring for agencies where outbound is a primary acquisition channel and a two-week deliverability failure has a direct revenue cost. Weekly DMARC aggregate report review, domain reputation trajectory tracking in Google Postmaster Tools, blacklist surveillance across all major RBLs, bounce pattern analysis, warmup integrity checks, and inbox placement spot testing. Infrastructure events flagged at the behavioral level, weeks before reply rates move.",
    includes: [
      "Weekly DMARC aggregate (RUA) and forensic (RUF) report review",
      "Domain reputation trajectory monitoring (Google Postmaster Tools)",
      "Blacklist surveillance: Spamhaus, Barracuda, Spamcop, and SURBL",
      "Bounce rate pattern analysis by domain",
      "Warmup integrity checks (timing overlap detection)",
      "Inbox placement spot testing across Gmail, Outlook, and Apple Mail",
      "Monthly written summary with flags and recommendations",
    ],
    cta: "Request Managed Oversight",
    subject: "Managed Oversight Inquiry",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-dark pt-24 selection:bg-accent/30 overflow-x-hidden">
      
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4KPHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-20 z-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-8 relative z-10 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> 
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-l-2 border-accent pl-5 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <h1 className="text-sm font-mono text-text-secondary uppercase tracking-widest leading-none">
              SERVICES // ENGAGEMENT TYPES
            </h1>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-text-primary uppercase tracking-tight">
            Email Deliverability Consulting
          </h2>
          <p className="text-xs sm:text-sm font-mono text-text-secondary max-w-2xl">
            Three ways to work with Mehedi Hasan. Scope and deliverables defined before any work begins.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.tier}
              className="border border-border-subtle bg-surface/30 p-6 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Scanline card overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(255,255,255,0.003)_4px,rgba(255,255,255,0.003)_5px)] pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                
                {/* Card Header Tag */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-accent bg-accent/5 border border-accent/15 px-2 py-0.5 uppercase tracking-wider">
                      {svc.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-text-secondary/40 font-bold uppercase">
                    {svc.tier}
                  </span>
                </div>

                {/* Name & Pricing Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight group-hover:text-accent transition-colors duration-200">
                    {svc.name}
                  </h3>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono">
                    <span className="text-2xl font-bold text-text-primary">{svc.price}</span>
                    <span className="text-[10px] text-text-secondary/60 uppercase">
                      // DEL: {svc.delivery}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed min-h-[120px]">
                  {svc.description}
                </p>

                {/* Features Included List */}
                <div className="space-y-2.5 pt-2 border-t border-border-subtle/50">
                  <div className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest font-bold">
                    SYSTEM SCOPE INCLUDED
                  </div>
                  <ul className="space-y-2">
                    {svc.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <span className="font-mono text-accent shrink-0 select-none text-[10px] mt-0.5">
                          [+]
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-border-subtle/30 relative z-10">
                <a
                  href={`mailto:mehedi.active24@gmail.com?subject=${encodeURIComponent(svc.subject)}`}
                  className="flex items-center justify-between w-full px-4 py-3 bg-bg-dark border border-border-subtle text-xs font-mono uppercase tracking-wider text-text-primary hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-200"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    {svc.cta}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Diagnostic / Diagnostic Assistance Panel */}
        <div className="border border-border-subtle bg-surface/10 p-6 sm:p-8 relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
          
          {/* Subtle decoration terminal elements */}
          <div className="absolute top-0 right-0 p-3 text-[9px] font-mono text-text-secondary/20 hidden md:block">
            NODE: DIAGNOSTIC_DESK // ID: 89f2a
          </div>
          
          <div className="max-w-3xl space-y-6 relative z-10">
            
            <div className="flex items-center gap-3">
              <div className="p-2 border border-border-subtle bg-bg-dark text-accent">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-text-secondary/50 uppercase tracking-widest font-bold">
                  DIAGNOSTIC TRIAGE
                </div>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight">
                  NOT SURE WHICH APPLIES?
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Send three data points: number of active domains and inboxes, reply rate 6–8 weeks ago versus today, and whether a warmup tool runs alongside active campaigns. I will tell you within 24 hours whether this is an infrastructure problem and which engagement type fits.
            </p>

            <div className="pt-2">
              <a
                href="mailto:mehedi.active24@gmail.com?subject=Infrastructure%20Diagnostic"
                className="inline-flex items-center gap-3 px-5 py-3.5 bg-bg-dark border border-border-subtle hover:border-accent text-xs font-mono uppercase tracking-wider text-text-primary hover:text-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
              >
                <Terminal className="w-4 h-4 text-accent" />
                <span>Send the 3 data points</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
