import RevealText from "./RevealText";
import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={clsx("mb-14 md:mb-20", className)}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        <span aria-hidden className="mr-2">
          {"//"}
        </span>
        {eyebrow}
      </p>
      <RevealText
        as="h2"
        className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
      >
        {title}
      </RevealText>
    </div>
  );
}
