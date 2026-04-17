interface SectionLabelProps {
  children: React.ReactNode;
  variant?: "default" | "light";
}

export function SectionLabel({ children, variant = "default" }: SectionLabelProps) {
  const isLight = variant === "light";

  return (
    <div className="flex items-center gap-3">
      <div className={`h-5 w-1 rounded-full ${isLight ? "bg-white/70" : "bg-accent"}`} />
      <span className={`text-sm font-medium uppercase tracking-wider ${isLight ? "text-white/70" : "text-accent"}`}>
        {children}
      </span>
    </div>
  );
}
