"use client";

import { useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useIsLowPower } from "@/hooks/useMediaQuery";
import clsx from "clsx";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function MagneticButton({
  children,
  className,
  as = "button",
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const isLowPower = useIsLowPower();

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isLowPower || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  const Comp = as as "button";

  return (
    <Comp
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 will-change-transform",
        className
      )}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </Comp>
  );
}
