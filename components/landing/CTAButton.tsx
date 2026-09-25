import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: CTAButtonProps) {
  const variants = {
    primary:
      "bg-vioniko-gradient text-ink shadow-glow hover:brightness-110 focus-visible:outline-cyanGlow",
    secondary:
      "border border-cyanGlow/40 bg-cyanGlow/10 text-white hover:border-cyanGlow/70 hover:bg-cyanGlow/20 focus-visible:outline-cyanGlow",
    ghost:
      "border border-white/10 bg-white/5 text-white hover:border-violetGlow/50 hover:bg-white/10 focus-visible:outline-violetGlow",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-black uppercase leading-tight transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-11 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
