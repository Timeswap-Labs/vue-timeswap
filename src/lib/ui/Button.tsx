import { ButtonProps } from "@/types/interfaces/ui";
import { cn } from "@/utils/core/cn";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants: Record<"primary" | "secondary" | "ghost" | "outline", string> = {
    primary: "bg-ts-primary text-black hover:bg-opacity-90",
    secondary: "bg-ts-secondary text-white hover:bg-opacity-90",
    ghost: "bg-transparent text-white hover:bg-white/10",
    outline: "border border-ts-primary text-ts-primary hover:bg-ts-primary/10",
  };

  const sizes: Record<"sm" | "md" | "lg", string> = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg font-semibold",
  };

  return (
    <button
      className={cn(
        "rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
