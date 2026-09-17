export default function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
