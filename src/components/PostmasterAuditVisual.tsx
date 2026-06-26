export default function PostmasterAuditVisual() {
  return (
    <div className="space-y-3">
      <div className="border border-border-subtle overflow-hidden">
        <img
          src="/evidence/postmaster-after.png"
          alt="Google Postmaster domain reputation dashboard showing recovery after authentication fixes — domain reputation, IP reputation, spam ratio tracking Jul 2024"
          className="w-full block"
        />
      </div>
      <p className="text-[9px] font-mono text-text-secondary/40">
        Google Postmaster · Domain reputation + IP reputation + spam ratio monitoring · Post-remediation recovery data · Domain names redacted
      </p>
    </div>
  );
}
