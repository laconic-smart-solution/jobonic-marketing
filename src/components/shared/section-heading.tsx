interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600">{description}</p> : null}
    </div>
  );
}
