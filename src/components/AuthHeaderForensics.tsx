export default function AuthHeaderForensics() {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">

        {/* BEFORE */}
        <div className="border border-border-subtle">
          <div className="bg-red-400/10 border-b border-red-400/20 px-4 py-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">Before Intervention</span>
          </div>
          <div className="overflow-hidden">
            <img
              src="/evidence/shopsilver-before.png"
              alt="Gmail Show Original — Before: SPF NONE, DKIM signing via gappssmtp.com relay subdomain (not From domain), DMARC FAIL — shopsilvermerch.com, Apr 28 2026"
              className="w-full block"
            />
          </div>
          <div className="px-4 py-3 border-t border-border-subtle space-y-1">
            <p className="text-[10px] font-mono text-red-400/80">
              <span className="font-bold">Finding:</span> DKIM signing domain = gappssmtp.com (Google relay subdomain) — not the From domain. SPF: NONE. DMARC: FAIL. All standard validators reported passing.
            </p>
          </div>
        </div>

        {/* AFTER */}
        <div className="border border-border-subtle">
          <div className="bg-emerald-400/10 border-b border-emerald-400/20 px-4 py-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">After Intervention</span>
          </div>
          <div className="overflow-hidden">
            <img
              src="/evidence/shopsilver-after.png"
              alt="Gmail Show Original — After: SPF PASS, DKIM signing with shopsilvermerch.com (client domain), DMARC PASS — shopsilvermerch.com, Apr 28 2026"
              className="w-full block"
            />
          </div>
          <div className="px-4 py-3 border-t border-border-subtle space-y-1">
            <p className="text-[10px] font-mono text-emerald-400/80">
              <span className="font-bold">Resolution:</span> Custom sending domain authenticated on shopsilvermerch.com inside GoHighLevel. DKIM now signs with the client domain. SPF updated. DMARC alignment achieved.
            </p>
          </div>
        </div>

      </div>
      <p className="text-[9px] font-mono text-text-secondary/40">
        Gmail · Show Original · Raw message headers captured during authentication audit · GoHighLevel + Google Workspace engagement · Apr 2026 · Client domain visible with permission
      </p>
    </div>
  );
}
