import { ArrowRight, CheckCircle2, Clock3, Landmark, ShieldCheck } from "lucide-react";

import type { SiteDictionary } from "@/lib/i18n";

export function HeroVisualMockup({ dict }: { dict: SiteDictionary }) {
  const visual = dict.hero.visual;
  return (
    <div className="relative mx-auto w-full max-w-[38rem] lg:max-w-none">
      <div
        className="absolute -top-10 -left-8 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute right-0 -bottom-8 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl"
        aria-hidden
      />

      <div className="relative rounded-3xl border border-border/70 bg-card/85 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur md:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {visual.candidateMatch}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                NM
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{visual.candidateName}</p>
                <p className="text-xs text-muted-foreground">{visual.candidateRole}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {visual.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-muted px-2 py-1 text-[11px] text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {visual.milestonePayment}
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                <span className="text-xs text-muted-foreground">{visual.escrow}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600">
                  <Clock3 className="h-3.5 w-3.5" />
                  {visual.pending}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                <span className="text-xs text-muted-foreground">{visual.phaseOne}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {visual.released}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>{visual.progress}</span>
                <span>72%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 w-[72%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-background p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{visual.corridorFlow}</p>
          <div className="mt-3 flex items-center justify-between gap-2 text-xs font-medium text-slate-700">
            <span className="rounded-lg bg-violet-100 px-2 py-1 text-violet-700">{visual.route[0]}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="rounded-lg bg-slate-100 px-2 py-1 text-slate-700">{visual.route[1]}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="rounded-lg bg-teal-100 px-2 py-1 text-teal-700">{visual.route[2]}</span>
          </div>
        </div>
      </div>

      <div className="hero-float absolute -top-6 -right-3 rounded-xl border border-border bg-card px-3 py-2 shadow-lg shadow-slate-900/10">
        <p className="text-[11px] font-semibold text-foreground">{visual.trustLayer}</p>
        <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          {visual.escrowArbitration}
        </p>
      </div>

      <div className="hero-float-delayed absolute -bottom-4 left-3 rounded-xl border border-border bg-card px-3 py-2 shadow-lg shadow-slate-900/10">
        <p className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
          <Landmark className="h-3.5 w-3.5 text-primary" />
          {visual.safeContracts}
        </p>
      </div>
    </div>
  );
}
