"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import clsx from "clsx";

type RevealTextProps = {
  children: string;
  as?: ElementType;
  className?: string;
  /** stagger delay between words, in seconds */
  stagger?: number;
  delay?: number;
};

export default function RevealText({
  children,
  as: Tag = "div",
  className,
  stagger = 0.04,
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    const words = children.split(" ");
    ref.current.innerHTML = words
      .map(
        (word) =>
          `<span class="reveal-word" style="display:inline-block;overflow:hidden;vertical-align:top;"><span class="reveal-word-inner" style="display:inline-block;">${word}</span></span>`
      )
      .join(" ");

    if (reducedMotion) return;

    registerGsap();
    const inners = ref.current.querySelectorAll(".reveal-word-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [children, reducedMotion, stagger, delay]);

  const Component = Tag as unknown as "div";

  return (
    <Component ref={ref} className={clsx("text-balance", className)}>
      {children}
    </Component>
  );
}
