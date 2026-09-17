"use client";

import { useRef } from "react";
import type { Project } from "@/data/content";
import { gsap } from "@/lib/gsap";
import { useIsLowPower } from "@/hooks/useMediaQuery";
import TagPill from "@/components/ui/TagPill";
import RevealText from "@/components/ui/RevealText";

const GRADIENTS = [
  "linear-gradient(135deg, #5b7cff 0%, #0c0c10 70%)",
  "linear-gradient(135deg, #b98cff 0%, #0c0c10 70%)",
  "linear-gradient(135deg, #4dd0e1 0%, #0c0c10 70%)",
  "linear-gradient(135deg, #ff8a5b 0%, #0c0c10 70%)",
];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const isLowPower = useIsLowPower();

  const handleMove = (e: React.MouseEvent) => {
    if (isLowPower || !cardRef.current || !previewRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(previewRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.6,
      ease: "power3.out",
      transformPerspective: 800,
    });
  };

  const handleLeave = () => {
    if (!previewRef.current) return;
    gsap.to(previewRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "power3.out" });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group grid items-center gap-8 border-b border-border py-12 first:pt-0 md:grid-cols-[auto_1fr_1fr] md:gap-12"
    >
      <span className="font-mono text-sm text-ink-faint">{String(index + 1).padStart(2, "0")}</span>

      <div
        ref={previewRef}
        className="order-first h-48 w-full rounded-2xl border border-border will-change-transform md:order-none md:h-56"
        style={{ background: GRADIENTS[index % GRADIENTS.length] }}
        aria-hidden
      />

      <div>
        <div className="mb-2 flex items-center gap-3">
          <RevealText as="h3" className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
            {project.title}
          </RevealText>
          <span className="font-mono text-xs text-ink-faint">{project.year}</span>
        </div>
        <p className="mb-4 max-w-md text-ink-muted">{project.description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
        <div className="flex gap-5 text-sm">
          {project.href && (
            <a
              href={project.href}
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
            >
              Live site <span aria-hidden>&rarr;</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent"
            >
              Source <span aria-hidden>&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
