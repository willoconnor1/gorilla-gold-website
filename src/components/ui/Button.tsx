import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200";

  const variants = {
    primary: "bg-accent text-bg-primary hover:bg-accent-hover",
    secondary:
      "bg-bg-elevated text-text-primary hover:bg-border",
    outline:
      "border border-border text-text-primary hover:border-accent hover:text-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
          {arrow && <ArrowUpRight className="h-4 w-4" />}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
        {arrow && <ArrowUpRight className="h-4 w-4" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
      {arrow && <ArrowUpRight className="h-4 w-4" />}
    </button>
  );
}
