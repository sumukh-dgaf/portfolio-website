"use client";

import dynamic from "next/dynamic";
import { site } from "@/data/content";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroCanvas = dynamic(() => import("@/components/canvas/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-20"
    >
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
          {site.location} · Open to Internships &amp; SDE Roles
        </p>

        <RevealText
          as="h1"
          className="max-w-4xl text-[13vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-[8vw] md:text-[6.4vw] lg:text-[5.4rem]"
        >
          {site.name}
        </RevealText>

        <RevealText
          as="p"
          delay={0.15}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
        >
          {`${site.role} — ${site.tagline}`}
        </RevealText>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            as="a"
            href="#work"
            className="border border-ink bg-ink text-bg hover:bg-transparent hover:text-ink"
          >
            View my work
          </MagneticButton>
          <MagneticButton
            as="a"
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-ink hover:border-accent hover:text-accent"
          >
            Download resume
          </MagneticButton>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-ink-faint to-transparent" />
      </div>
    </section>
  );
}
