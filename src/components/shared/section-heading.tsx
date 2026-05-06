import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
          eyebrow ? "mt-3" : null,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
