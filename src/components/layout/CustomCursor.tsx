"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsLowPower } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isLowPower = useIsLowPower();
  const reducedMotion = useReducedMotion();
  const disabled = isLowPower || reducedMotion;

  useEffect(() => {
    if (disabled) {
      document.documentElement.classList.remove("custom-cursor");
      return;
    }
    document.documentElement.classList.add("custom-cursor");
    return () => document.documentElement.classList.remove("custom-cursor");
  }, [disabled]);

  useEffect(() => {
    if (disabled || !dotRef.current || !ringRef.current) return;

    const quickDot = {
      x: gsap.quickTo(dotRef.current, "x", { duration: 0.1, ease: "power3.out" }),
      y: gsap.quickTo(dotRef.current, "y", { duration: 0.1, ease: "power3.out" }),
    };
    const quickRing = {
      x: gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3.out" }),
      y: gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3.out" }),
    };

    const move = (e: MouseEvent) => {
      quickDot.x(e.clientX);
      quickDot.y(e.clientY);
      quickRing.x(e.clientX);
      quickRing.y(e.clientY);
    };

    const growTargets = "a, button, [data-cursor='hover']";
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest?.(growTargets)) {
        gsap.to(ringRef.current, { scale: 2.2, opacity: 0.5, duration: 0.3 });
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest?.(growTargets)) {
        gsap.to(ringRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference" aria-hidden>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
      />
    </div>
  );
}
