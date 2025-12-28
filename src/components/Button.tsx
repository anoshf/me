import React from "react";
import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:translate-y-[-1px] hover:shadow-soft"
      : "bg-white text-slate-900 border border-slate-900/10 hover:bg-slate-50";
  return <button className={cn(base, styles, className)} {...props} />;
}
