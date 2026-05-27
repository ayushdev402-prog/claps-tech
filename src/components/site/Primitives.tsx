import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("max-w-7xl mx-auto px-6 py-20", className)}>
      {children}
    </section>
  );
}

export function EyebrowBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && <EyebrowBadge>{eyebrow}</EyebrowBadge>}
      <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function GradientButton({
  children,
  href,
  className,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "text-white gradient-brand hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      : "border border-border bg-white/70 hover:bg-white hover:border-foreground/20";
  const Comp: any = href ? "a" : "button";
  return (
    <Comp href={href} onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </Comp>
  );
}

export function GlowBlobs() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-[#2563EB]/25 blur-3xl animate-blob" />
      <div className="absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-[#7C3AED]/20 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute top-1/2 left-1/3 h-[320px] w-[320px] rounded-full bg-[#06B6D4]/20 blur-3xl animate-blob [animation-delay:-12s]" />
    </div>
  );
}
