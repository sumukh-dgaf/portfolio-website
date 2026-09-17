import { site } from "@/data/content";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const socials = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Twitter", href: site.social.twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        <span aria-hidden className="mr-2">
          {"//"}
        </span>
        Contact
      </p>

      <RevealText
        as="h2"
        className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
      >
        Have a role, a project, or just want to say hi?
      </RevealText>

      <div className="mt-12">
        <MagneticButton
          as="a"
          href={`mailto:${site.email}`}
          className="!rounded-2xl !px-8 !py-6 text-2xl font-medium text-ink glass hover:text-accent sm:text-4xl"
        >
          {site.email}
        </MagneticButton>
      </div>

      <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="text-sm text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
