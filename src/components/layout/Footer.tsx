import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink-faint sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Built from scratch.
        </p>
        <p className="font-mono text-xs">Designed &amp; developed with Next.js, Three.js &amp; GSAP</p>
      </div>
    </footer>
  );
}
