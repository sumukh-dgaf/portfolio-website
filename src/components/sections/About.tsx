import { about } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import RevealText from "@/components/ui/RevealText";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="About" title="A little about how I work" />

      <div className="grid gap-16 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <RevealText
              key={i}
              as="p"
              stagger={0.012}
              className="text-lg leading-relaxed text-ink-muted first:text-xl first:text-ink"
            >
              {p}
            </RevealText>
          ))}

          <div className="flex flex-wrap gap-3 pt-4">
            {about.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border px-4 py-2 text-sm text-ink-muted"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <GlassPanel className="h-fit p-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Education</p>
          <p className="mt-4 text-xl font-medium text-ink">{about.education.degree}</p>
          <p className="mt-1 text-ink-muted">{about.education.institution}</p>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-6 text-sm">
            <span className="text-ink-faint">{about.education.period}</span>
            <span className="text-ink-muted">{about.education.detail}</span>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
