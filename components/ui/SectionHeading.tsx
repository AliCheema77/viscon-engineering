type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl font-sans text-base text-foreground/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
