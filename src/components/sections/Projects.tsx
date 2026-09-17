import { projects } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Selected Work" title="Things I've built" />

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
