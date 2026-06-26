"use client";



const navLinks = [
  { label: "Case Studies", href: "/#results" },
  { label: "Work Sample", href: "/work-sample" },
  { label: "Contact", href: "/#book" },
];

const services = [
  "Cold Email Infrastructure",
  "Deliverability Recovery",
  "Authentication Audit",
  "Blacklist Remediation",
  "Strategy & Operations",
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-subtle">

      {/* Main footer grid */}
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl py-12 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-3 lg:col-span-1">
            <div>
              <p className="font-mono text-sm font-bold text-text-primary uppercase tracking-wider">Mehedi Hasan</p>
              <p className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest mt-0.5">Email Deliverability Consultant</p>
            </div>
            <p className="text-xs text-text-secondary/60 leading-relaxed max-w-xs">
              Cold email infrastructure, inbox recovery, and outbound operations for agencies and B2B teams.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["US", "UK", "AU"].map((m) => (
                <span key={m} className="text-[9px] font-mono text-text-secondary/40 border border-border-subtle px-2 py-0.5 uppercase tracking-wider">{m}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-widest">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs font-mono text-text-secondary/60 hover:text-text-primary transition-colors uppercase tracking-wider">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <p className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-widest">Services</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-xs font-mono text-text-secondary/60 uppercase tracking-wider">{s}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest">
          <span>© 2026 · Mehedi Hasan</span>
          <span>Email Deliverability · Inbox Recovery · Cold Email Infrastructure</span>
        </div>
      </div>

    </footer>
  );
}
