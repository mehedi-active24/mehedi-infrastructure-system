"use client";

export default function EvidenceGallery() {
  const items = [
    {
      src: "/evidence/beehiiv-dashboard.png",
      alt: "Beehiiv newsletter dashboard showing 9,461 subscribers and 62.41% open rate — real data from Mehedi's own newsletter",
      label: "Beehiiv · Own Newsletter",
      caption: "9,461 subscribers · 62.41% open rate · The same infrastructure I apply to client engagements runs on my own sending domain.",
      accent: "emerald",
    },
    {
      src: "/evidence/auth-verified.png",
      alt: "Email authentication verified — DKIM, SPF, and DMARC all passing correctly after authentication fix",
      label: "Authentication Verification",
      caption: "Post-remediation authentication check confirming SPF, DKIM, and DMARC all passing on the correct domain.",
      accent: "indigo",
    },
    {
      src: "/evidence/shopsilver-fixed.png",
      alt: "shopsilvermerch.com — final verified authentication state after GoHighLevel custom domain setup",
      label: "shopsilvermerch.com · Final State",
      caption: "GoHighLevel + Google Workspace · Final verified header state after custom sending domain configuration. Apr 2026.",
      accent: "indigo",
    },
  ];

  return (
    <section className="py-20 border-b border-border-subtle bg-surface/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10">
          <p className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2">
            Additional Evidence
          </p>
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">
            More Real Screenshots
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="border border-border-subtle overflow-hidden flex flex-col">
              <div className={`px-4 py-2.5 border-b border-border-subtle flex items-center gap-2 bg-surface`}>
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.accent === "emerald" ? "bg-emerald-400" : "bg-indigo-400"}`} />
                <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full block"
                />
              </div>
              <div className="px-4 py-3 border-t border-border-subtle mt-auto">
                <p className="text-[10px] font-mono text-text-secondary/50 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
