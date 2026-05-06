export function CorridorMap() {
  return (
    <svg viewBox="0 0 680 380" className="h-full w-full" role="img" aria-label="Jobonic corridor map">
      <defs>
        <linearGradient id="corridor-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="680" height="380" rx="24" fill="#f8fafc" />
      <circle cx="220" cy="180" r="18" fill="#7c3aed" />
      <circle cx="95" cy="180" r="14" fill="#14b8a6" />
      <circle cx="360" cy="115" r="14" fill="#f59e0b" />
      <circle cx="490" cy="95" r="14" fill="#64748b" />
      <path d="M220 180 C165 180, 145 180, 95 180" stroke="url(#corridor-gradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M220 180 C280 140, 320 130, 360 115" stroke="url(#corridor-gradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M220 180 C320 160, 400 125, 490 95" stroke="url(#corridor-gradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
