type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "mx-auto text-center" : "text-left"} mb-12 max-w-5xl ${centered ? "" : "mx-0"} ${className}`}>
      {/* Eyebrow */}
      <div className="mb-4 flex items-center justify-center gap-2">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
      </div>

      {/* Title with Gradient Option */}
      <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl ${centered ? "" : "text-left"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg font-medium text-green-700 text-muted-foreground ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}

      {/* Optional Underline */}
      <div className={`mt-4 ${centered ? "flex justify-center" : ""}`}>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>

      {/* Description */}
      {description && (
        <p className={`mt-6 text-base leading-relaxed text-muted-foreground ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}