import { skills } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import TagPill from "@/components/ui/TagPill";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Skills" title="Tools I reach for" />

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <GlassPanel
            key={group.category}
            className="p-7 transition-transform duration-500 hover:-translate-y-1"
          >
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-ink-muted">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <TagPill key={item}>{item}</TagPill>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
