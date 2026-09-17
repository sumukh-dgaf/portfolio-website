// ---------------------------------------------------------------------------
// Single source of truth for portfolio content.
// Edit the values below to update the site — no other files need to change.
// ---------------------------------------------------------------------------

export const site = {
  name: "Sumukh Gupta",
  role: "Software Engineer & 3rd-Year B.Tech Student",
  tagline: "I build fast, thoughtful software.",
  location: "India",
  email: "aarav.mehta.dev@gmail.com",
  resumeUrl: "/resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app",
  social: {
    github: "https://github.com/your-github",
    linkedin: "https://linkedin.com/in/your-linkedin",
    twitter: "https://twitter.com/your-twitter",
  },
};

export const about = {
  paragraphs: [
    "I'm a third-year B.Tech student who enjoys turning ambiguous problems into clean, working software — the kind of person who reads the docs and then breaks the thing anyway just to see how it works.",
    "Most of my time goes into full-stack web development and systems that sit at the edge of design and engineering: interfaces that feel considered, backends that don't fall over, and the occasional deep dive into whatever's currently interesting — right now that's WebGL and distributed systems.",
    "Outside of coursework, I contribute to a couple of open-source projects, compete in hackathons, and I'm slowly building a habit of writing about what I learn.",
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Your University / College Name",
    period: "2023 — 2027",
    detail: "3rd Year · CGPA 8.9/10",
  },
  focusAreas: [
    "Full-Stack Web Development",
    "Systems & Backend Engineering",
    "Human-Centered Interfaces",
    "Open Source",
  ],
};

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Three.js", "GSAP", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Linux"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Nimbus — Realtime Collaboration Suite",
    description:
      "A Notion-style collaborative workspace with live multiplayer cursors, CRDT-based conflict resolution, and offline-first sync across devices.",
    tags: ["Next.js", "WebSockets", "CRDT", "PostgreSQL"],
    year: "2026",
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Pathfinder — Algorithm Visualizer",
    description:
      "An interactive visualizer for pathfinding and sorting algorithms with step-by-step playback, custom obstacle drawing, and performance benchmarking.",
    tags: ["React", "Canvas API", "TypeScript"],
    year: "2025",
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Orbit — Campus Event Platform",
    description:
      "A full-stack platform for discovering and RSVP-ing to college events, used by 1,200+ students across three campuses.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    year: "2025",
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Lumen — Terminal-Themed Blog Engine",
    description:
      "A markdown-powered static blog generator with a retro terminal aesthetic, syntax highlighting, and sub-second build times.",
    tags: ["Rust", "Markdown", "CLI"],
    year: "2024",
    href: "#",
    repo: "#",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    org: "Company Name",
    period: "May 2026 — Jul 2026",
    description:
      "Built internal tooling used by the data platform team; shipped a caching layer that cut API response times by 40%.",
  },
  {
    role: "Open Source Contributor",
    org: "Project Name",
    period: "2025 — Present",
    description:
      "Contributed features and bug fixes to a mid-sized open-source library; reviewed community pull requests.",
  },
  {
    role: "Core Team Member",
    org: "College Developer Society",
    period: "2024 — Present",
    description:
      "Organize workshops and hackathons for 300+ members; mentor first-year students on web development fundamentals.",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
