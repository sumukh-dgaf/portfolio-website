import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export default function GlassPanel({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
