import { experience } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Experience" title="Where I've spent my time" />

      <ol className="relative space-y-0 border-l border-border pl-8 sm:pl-10">
        {experience.map((item) => (
          <li key={`${item.role}-${item.org}`} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[calc(2.5rem+5px)]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              {item.period}
            </p>
            <h3 className="mt-2 text-xl font-medium text-ink md:text-2xl">
              {item.role} <span className="text-ink-muted">— {item.org}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-ink-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
