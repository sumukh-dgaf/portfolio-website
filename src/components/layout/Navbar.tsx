"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500 sm:px-6",
        scrolled ? "pt-3" : "pt-5"
      )}
    >
      <nav
        aria-label="Primary"
        className={clsx(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass" : "border border-transparent bg-transparent"
        )}
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
          data-cursor="hover"
        >
          {site.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-cursor="hover"
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-cursor="hover"
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent md:inline-flex"
        >
          Let&rsquo;s talk
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={clsx(
              "h-px w-5 bg-ink transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-px w-5 bg-ink transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </nav>

      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-xl transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-3xl font-medium tracking-tight text-ink"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full border border-border px-6 py-3 text-base text-ink"
        >
          Let&rsquo;s talk
        </a>
      </div>
    </header>
  );
}
