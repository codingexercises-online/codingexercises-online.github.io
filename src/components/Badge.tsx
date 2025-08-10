export function Badge({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "success" | "warn" | "danger" | "info" }) {
  const toneClasses: Record<string, string> = {
    default: "border-black/10 dark:border-white/15",
    success: "border-emerald-500/40 text-emerald-400",
    warn: "border-amber-500/40 text-amber-400",
    danger: "border-rose-500/40 text-rose-400",
    info: "border-sky-500/40 text-sky-400",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs border ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
