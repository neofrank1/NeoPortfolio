"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent as ReactMouseEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Copy,
  Database,
  GraduationCap,
  Mail,
  Moon,
  RotateCcw,
  Server,
  Sparkles,
  Sun,
  Wrench,
  X,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siClaude,
  siDocker,
  siGit,
  siGithub,
  siGooglegemini,
  siHeroui,
  siJavascript,
  siLaravel,
  siLinux,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons/icons";

const EMAIL = "neofrank.uy@dev.ph";
const GITHUB_URL = "https://github.com/neofrank1";
const LINKEDIN_URL = "https://www.linkedin.com/in/neo-frank-uy/";

type Project = {
  key: string;
  title: string;
  description: string;
  details: string;
  highlights: string[];
  tags: string[];
  status: string;
  tone: "progress" | "live" | "off";
  mock: "app" | "movies";
  mockTitle: string;
  mockAction: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    key: "inventory",
    title: "Inventory & Sales Management System",
    description: "A system for managing products, monitoring inventory, tracking sales, and generating reports.",
    details:
      "A comprehensive full-stack business application for managing product SKUs, monitoring real-time stock thresholds, tracking POS sales transactions, and exporting financial reports.",
    highlights: [
      "Role-based access control and audit logs for stock adjustments",
      "Automated low-stock alerts and daily/monthly sales analytics",
      "Normalized MySQL schema engineered for fast reporting queries",
    ],
    tags: ["Laravel", "React", "TypeScript", "MySQL"],
    status: "In progress",
    tone: "progress",
    mock: "app",
    mockTitle: "Inventory Overview",
    mockAction: "+ New item",
  },
  {
    key: "movieflix",
    title: "Movie Review Platform",
    description: "A movie platform with reviews, ratings, likes, and user authentication.",
    details:
      "A modern full-stack cinema discovery and community review web app with user authentication, star ratings, review likes, and curated title browsing.",
    highlights: [
      "Server-rendered catalog pages with fast filtering and search",
      "Optimistic UI updates for likes and user review submissions",
      "Type-safe database layer powered by Prisma and PostgreSQL",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "Live platform",
    tone: "live",
    mock: "movies",
    mockTitle: "MovieFlix",
    mockAction: "Browse titles",
    demoUrl: "https://movie-react-steel-phi.vercel.app",
  },
  {
    key: "scheduling",
    title: "Academic Scheduling System",
    description: "An academic scheduling application designed to organize classes, rooms, instructors, and time slots.",
    details:
      "An academic timetabling and resource allocation system built to eliminate room, instructor, and class section conflicts across semesters.",
    highlights: [
      "Automated conflict detection across rooms, faculty, and time slots",
      "Departmental schedule matrix views and printable load summaries",
      "Built with Laravel, PHP, MySQL, and vanilla JavaScript",
    ],
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    status: "Not live",
    tone: "off",
    mock: "app",
    mockTitle: "Class Scheduling",
    mockAction: "+ New item",
  },
  {
    key: "nativecamp",
    title: "NativeCamp",
    description:
      "A global online English and language learning platform with 24/7 on-demand, unlimited lessons, primarily serving students in Japan and Taiwan.",
    details:
      "A global 24/7 on-demand online English and language learning platform serving learners primarily in Japan and Taiwan with instant lesson matching.",
    highlights: [
      "Real-time lesson availability and instant classroom session flow",
      "Scalable multi-timezone scheduling and student progress tracking",
      "High-availability web architecture supporting global traffic",
    ],
    tags: ["ESL", "Online Learning", "Language Learning"],
    status: "Live platform",
    tone: "live",
    mock: "app",
    mockTitle: "Online English Class",
    mockAction: "+ Join lesson",
    demoUrl: "https://nativecamp.net/",
  },
];

const stacks = [
  { icon: Code2, name: "Frontend", tags: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HeroUI"] },
  { icon: Server, name: "Backend", tags: ["PHP", "Laravel", "Node.js", "REST APIs"] },
  { icon: Database, name: "Database", tags: ["PostgreSQL", "MySQL", "Prisma", "SQL"] },
  { icon: Wrench, name: "Tools", tags: ["Git", "GitHub", "Docker", "Linux", "Vite"] },
  { icon: Sparkles, name: "AI", tags: ["Claude", "Codex", "ChatGPT", "Gemini", "Prompt Engineering"] },
];

const technologyIcons: Record<string, SimpleIcon> = {
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss,
  HeroUI: siHeroui,
  PHP: siPhp,
  Laravel: siLaravel,
  "Node.js": siNodedotjs,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Prisma: siPrisma,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Linux: siLinux,
  Vite: siVite,
  Claude: siClaude,
  Gemini: siGooglegemini,
};

const navItems = [
  { id: "home", label: "home" },
  { id: "projects", label: "projects" },
  { id: "tech_stack", label: "tech_stack" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

const PROFILE_SNIPPET = `const developer = {
  name: "Neo Frank D. Uy",
  role: "Full-Stack Developer",
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Laravel", "Node.js"],
  building: "full-stack apps",
  openToWork: true,
};`;

function BrandIcon({ icon, className = "size-3.5 fill-current" }: { icon: SimpleIcon; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

function LinkedInIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  );
}

/* Moves the spotlight border/glow with the cursor. */
function spotlight(e: ReactMouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
}

function AppMock({ title, action }: { title: string; action: string }) {
  const rows = ["bg-slate-200", "bg-slate-200/80", "bg-slate-200/80", "bg-slate-200/60"];
  return (
    <div className="mockup-frame rounded-lg bg-[#e8eef7] text-slate-800 p-2.5 flex gap-2.5 h-44 shadow-inner" aria-hidden="true">
      <div className="w-7 rounded-md bg-[#111522] p-1.5 flex flex-col gap-1.5">
        <div className="h-1.5 w-full rounded-full bg-slate-600" />
        <div className="h-1.5 w-3/4 rounded-full bg-slate-700 mt-1" />
        <div className="h-1.5 w-full rounded-full bg-slate-700" />
        <div className="h-1.5 w-4/5 rounded-full bg-slate-700" />
        <div className="h-1.5 w-full rounded-full bg-slate-700" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-semibold text-slate-700 tracking-tight">{title}</span>
          <span className="px-2 py-0.5 rounded bg-blue-500 text-white text-[7px] font-semibold shadow-sm">{action}</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-7 rounded bg-white border border-slate-200/80" />
          ))}
        </div>
        <div className="flex-1 rounded bg-white border border-slate-200/80 p-2 flex flex-col justify-between">
          {rows.map((tone, i) => (
            <div key={i} className="grid grid-cols-2 gap-2">
              <div className={`h-1.5 rounded ${tone}`} />
              <div className={`h-1.5 rounded ${tone}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieMock({ title, action }: { title: string; action: string }) {
  const posters = [
    "from-rose-500/80 via-red-900/70 to-zinc-900",
    "from-amber-500/80 via-orange-800/70 to-zinc-900",
    "from-stone-400/60 via-red-950/80 to-zinc-900",
    "from-teal-400/70 via-cyan-900/70 to-zinc-900",
    "from-amber-300/80 via-amber-800/70 to-zinc-900",
  ];
  return (
    <div
      className="mockup-frame rounded-lg bg-gradient-to-b from-[#0b0e17] to-[#121622] p-3 flex flex-col justify-between h-44 border border-white/[0.05]"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold tracking-wide text-white">{title}</span>
        <span className="px-2 py-0.5 rounded bg-red-600/90 text-white text-[7px] font-semibold">{action}</span>
      </div>
      <div className="grid grid-cols-5 gap-2 my-auto pt-2">
        {posters.map((tone) => (
          <div key={tone} className={`h-24 rounded-md bg-gradient-to-br ${tone} border border-white/15 shadow-md`} />
        ))}
      </div>
    </div>
  );
}

const statusDot = { progress: "bg-emerald-400 animate-pulse", live: "bg-emerald-400", off: "bg-rose-500" } as const;

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const ideRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineBarRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const heroTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [midnight, setMidnight] = useState(false);
  const [active, setActive] = useState("home");
  const [indicator, setIndicator] = useState({ left: 0, width: 28 });
  const [heroIn, setHeroIn] = useState(false);
  const [lines, setLines] = useState(0);
  const [copyLabel, setCopyLabel] = useState("copy");
  const [toast, setToast] = useState({ message: "", show: false });
  const [modalKey, setModalKey] = useState(projects[0].key);
  const [projectOpen, setProjectOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const showToast = useCallback((message: string) => {
    setToast({ message, show: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2600);
  }, []);

  const copyText = useCallback(
    async (text: string, success: string) => {
      try {
        await navigator.clipboard.writeText(text);
        showToast(success);
      } catch {
        showToast("Unable to copy");
      }
    },
    [showToast],
  );

  /* Hero entrance + code lines typing in */
  const runHero = useCallback(() => {
    heroTimers.current.forEach(clearTimeout);
    heroTimers.current = [];
    setHeroIn(false);
    setLines(0);
    heroTimers.current.push(setTimeout(() => setHeroIn(true), 40));
    for (let i = 0; i < 8; i += 1) {
      heroTimers.current.push(setTimeout(() => setLines((n) => Math.max(n, i + 1)), 300 + i * 95));
    }
  }, []);

  useEffect(() => {
    const start = setTimeout(runHero, 0);
    const timers = heroTimers;
    return () => {
      clearTimeout(start);
      timers.current.forEach(clearTimeout);
    };
  }, [runHero]);

  /* Scroll reveal */
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".reveal-up");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Scroll spy + timeline progress */
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 180;
      let current = "home";
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && pos >= el.getBoundingClientRect().top + window.scrollY) current = id;
      }
      setActive(current);

      const box = timelineRef.current;
      const bar = timelineBarRef.current;
      if (box && bar) {
        const rect = box.getBoundingClientRect();
        const progress = Math.min(Math.max((window.innerHeight * 0.72 - rect.top) / rect.height, 0), 1);
        bar.style.height = `${Math.round(progress * 100)}%`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Sliding nav underline */
  useEffect(() => {
    const place = () => {
      const el = navRefs.current[active];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  /* Midnight tint */
  useEffect(() => {
    document.documentElement.classList.toggle("midnight-theme", midnight);
    return () => document.documentElement.classList.remove("midnight-theme");
  }, [midnight]);

  /* Modals: Escape closes, page does not scroll behind */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProjectOpen(false);
        setContactOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = projectOpen || contactOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [projectOpen, contactOpen]);

  const replay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const els = Array.from(rootRef.current?.querySelectorAll<HTMLElement>(".reveal-up") ?? []);
    els.forEach((el) => el.classList.remove("is-visible"));
    runHero();
    setTimeout(() => {
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      });
    }, 300);
    showToast("Replaying entrance animations");
  };

  const toggleTheme = () => {
    const next = !midnight;
    setMidnight(next);
    showToast(next ? "Theme: Midnight IDE Tint" : "Theme: Deep Obsidian");
  };

  const onIdeMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    spotlight(e);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-2px)`;
  };

  const onIdeLeave = () => {
    if (ideRef.current) ideRef.current.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  const copyProfile = () => {
    copyText(PROFILE_SNIPPET, "Copied profile.ts to clipboard");
    setCopyLabel("copied!");
    setTimeout(() => setCopyLabel("copy"), 1800);
  };

  const openProject = (key: string) => {
    setModalKey(key);
    setProjectOpen(true);
  };

  const submitContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent(`${message}\n\n— ${from}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setContactOpen(false);
    form.reset();
    showToast("Opening your email app…");
  };

  const modalProject = projects.find((p) => p.key === modalKey) ?? projects[0];
  const stagger = (ms: number) => ({ transitionDelay: `${ms}ms` });

  const pillBase =
    "group inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/[0.08] bg-[var(--bg-card)] hover:border-emerald-400/40 hover:bg-emerald-500/[0.05] text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-all duration-200";
  const primaryBtn =
    "group inline-flex items-center gap-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono text-xs sm:text-[13px] font-semibold shadow-lg shadow-emerald-500/15 hover:shadow-emerald-400/30 transition-all duration-300 active:scale-95";
  const eyebrow = "font-mono text-[11px] tracking-wider uppercase text-emerald-400 mb-2";

  return (
    <div ref={rootRef} className="portfolio relative min-h-screen font-mono antialiased selection:bg-emerald-500/25 selection:text-emerald-300">
      <div className="ambient-glow" />
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="group font-mono text-sm sm:text-[15px] font-semibold tracking-tight flex items-center gap-0.5">
            <span className="text-emerald-400 transition-transform duration-300 group-hover:-translate-x-0.5">~/</span>
            <span className="text-white">neo</span>
            <span className="text-emerald-400">.dev</span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center relative gap-7 font-mono text-xs text-zinc-400">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                ref={(el) => {
                  navRefs.current[item.id] = el;
                }}
                className={`py-1.5 transition-colors hover:text-white ${active === item.id ? "text-white" : ""}`}
              >
                {item.label}
              </a>
            ))}
            <span
              id="nav-indicator"
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[1.5px] bg-emerald-400 rounded-full pointer-events-none"
              style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
            />
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={replay}
              title="Replay entrance animations"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-emerald-400/40 text-[11px] font-mono text-zinc-400 hover:text-emerald-300 transition-all active:scale-95"
            >
              <RotateCcw size={14} aria-hidden="true" />
              <span>replay</span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle terminal atmosphere"
              title="Switch Obsidian / Midnight tint"
              className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300 active:scale-90"
            >
              {midnight ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-center gap-5 py-2 border-t border-white/[0.04] font-mono text-[11px] text-zinc-400 overflow-x-auto px-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors hover:text-emerald-400 ${active === item.id ? "text-emerald-400" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        {/* ============ HERO ============ */}
        <section id="home" className="pt-14 pb-20 sm:pt-20 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6" data-hero={heroIn ? "in" : "out"}>
              <div
                className="hero-stagger inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.07] font-mono text-xs text-emerald-400"
                style={stagger(60)}
              >
                <span className="relative flex h-2 w-2">
                  <span className="beacon-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>open_to_work = true</span>
              </div>

              <div className="hero-stagger" style={stagger(150)}>
                <h1 className="font-mono text-4xl sm:text-[46px] font-semibold tracking-tight leading-[1.16] text-white">
                  Hi, I’m <span className="hero-name-gradient">Neo Frank D. Uy</span>
                  <span className="cursor-blink text-emerald-400 font-normal ml-0.5" aria-hidden="true">|</span>
                </h1>
              </div>

              <div className="hero-stagger font-mono text-base sm:text-lg text-zinc-200 flex items-center gap-2.5" style={stagger(240)}>
                <span className="text-emerald-400 font-semibold">&gt;</span>
                <span className="tracking-tight">Full-Stack Developer</span>
              </div>

              <p className="hero-stagger font-mono text-[13px] sm:text-sm leading-relaxed text-zinc-400 max-w-xl" style={stagger(320)}>
                I build web applications focused on usability, maintainability, and solving real-world problems. My work spans backend development, database design, and modern frontend interfaces.
              </p>

              <div className="hero-stagger flex flex-wrap items-center gap-3.5 pt-1" style={stagger(400)}>
                <a href="#projects" className={`${primaryBtn} px-5 py-2.5`}>
                  <span>Explore Projects</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                    showToast("Scrolled to Experience & Resume overview");
                  }}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-[var(--bg-card)] hover:bg-[var(--bg-card-inner)] hover:border-white/25 text-zinc-200 font-mono text-xs sm:text-[13px] font-medium transition-all duration-300 active:scale-95"
                >
                  <span>View Resume</span>
                  <ArrowDown size={14} className="text-zinc-400 group-hover:text-emerald-400 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                </button>
              </div>

              <div className="hero-stagger flex flex-wrap items-center gap-2.5 pt-1" style={stagger(480)}>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={pillBase}>
                  <BrandIcon icon={siGithub} className="size-3.5 fill-current text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <span>github</span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={pillBase}>
                  <LinkedInIcon className="size-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <span>linkedin</span>
                </a>
                <button type="button" onClick={() => copyText(EMAIL, "Copied email address")} className={pillBase}>
                  <Mail size={14} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" aria-hidden="true" />
                  <span>email</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 ide-tilt-wrapper">
              <div
                ref={ideRef}
                onMouseMove={onIdeMove}
                onMouseLeave={onIdeLeave}
                className="ide-card spotlight-card rounded-xl overflow-hidden shadow-2xl shadow-black/60"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.015]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-mono text-[11px] text-zinc-500">profile.ts</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyProfile}
                    title="Copy profile.ts"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-zinc-500 hover:text-emerald-400 hover:bg-white/[0.05] transition-colors"
                  >
                    <Copy size={12} aria-hidden="true" />
                    <span>{copyLabel}</span>
                  </button>
                </div>

                <div className="p-5 sm:p-6 font-mono text-[12px] sm:text-[12.5px] leading-[1.85] overflow-x-auto" aria-label="profile.ts source">
                  {[
                    <><span className="text-purple-400">const</span> <span className="text-emerald-400">developer</span> <span className="text-zinc-400">=</span> <span className="text-zinc-300">{"{"}</span></>,
                    <><span className="text-zinc-300">name:</span> <span className="text-amber-300">&quot;Neo Frank D. Uy&quot;</span><span className="text-zinc-400">,</span></>,
                    <><span className="text-zinc-300">role:</span> <span className="text-amber-300">&quot;Full-Stack Developer&quot;</span><span className="text-zinc-400">,</span></>,
                    <><span className="text-zinc-300">frontend:</span> <span className="text-zinc-400">[</span><span className="text-amber-300">&quot;React&quot;</span><span className="text-zinc-400">,</span> <span className="text-amber-300">&quot;Next.js&quot;</span><span className="text-zinc-400">,</span> <span className="text-amber-300">&quot;TypeScript&quot;</span><span className="text-zinc-400">],</span></>,
                    <><span className="text-zinc-300">backend:</span> <span className="text-zinc-400">[</span><span className="text-amber-300">&quot;Laravel&quot;</span><span className="text-zinc-400">,</span> <span className="text-amber-300">&quot;Node.js&quot;</span><span className="text-zinc-400">],</span></>,
                    <><span className="text-zinc-300">building:</span> <span className="text-amber-300">&quot;full-stack apps&quot;</span><span className="text-zinc-400">,</span></>,
                    <><span className="text-zinc-300">openToWork:</span> <span className="text-indigo-400">true</span><span className="text-zinc-400">,</span></>,
                    <><span className="text-zinc-300">{"};"}</span><span className="cursor-blink text-emerald-400 ml-1">▋</span></>,
                  ].map((line, i) => (
                    <div key={i} className={`code-line ${i > 0 && i < 7 ? "pl-4" : ""} ${lines > i ? "revealed" : ""}`}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="py-16 sm:py-24">
          <div className="reveal-up flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className={eyebrow}>{"// SELECTED_PROJECTS"}</p>
              <h2 className="font-mono text-2xl sm:text-[32px] font-semibold text-white tracking-tight">
                Projects I’ve been building<span className="cursor-blink text-emerald-400">_</span>
              </h2>
              <p className="font-mono text-xs sm:text-[13px] text-zinc-400 mt-2">
                A few featured projects that showcase my skills and approach to problem solving.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-emerald-400 transition-colors self-start sm:self-auto border-b border-white/20 hover:border-emerald-400 pb-1"
            >
              <span>view_all_projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <article
                key={project.key}
                onMouseMove={spotlight}
                className="spotlight-card reveal-up rounded-2xl p-5 flex flex-col justify-between group"
                style={{ "--reveal-delay": `${50 + i * 85}ms` } as React.CSSProperties}
              >
                <div>
                  <div className="rounded-xl bg-[#0d1017] border border-white/[0.06] p-3 mb-5 overflow-hidden">
                    {project.mock === "movies" ? (
                      <MovieMock title={project.mockTitle} action={project.mockAction} />
                    ) : (
                      <AppMock title={project.mockTitle} action={project.mockAction} />
                    )}
                  </div>
                  <h3 className="font-mono text-base sm:text-[17px] font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs leading-relaxed text-zinc-400 mt-2">{project.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-300">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="inline-flex items-center gap-2 text-zinc-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.tone]}`} />
                      <span>{project.status}</span>
                    </span>
                    <span className="inline-flex items-center gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live website`}
                          className="relative z-10 inline-flex items-center gap-1 text-zinc-300 hover:text-emerald-400 underline underline-offset-4 transition-colors"
                        >
                          <span>Live site</span>
                          <span>↗</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => openProject(project.key)}
                        aria-label={`Inspect ${project.title}`}
                        className="relative z-10 text-zinc-500 group-hover:text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Inspect →
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ TECH STACK ============ */}
        <section id="tech_stack" className="py-16 sm:py-24">
          <div className="reveal-up mb-10">
            <p className={eyebrow}>{"// TECH_STACK"}</p>
            <h2 className="font-mono text-2xl sm:text-[32px] font-semibold text-white tracking-tight">
              My development toolkit<span className="cursor-blink text-emerald-400">_</span>
            </h2>
            <p className="font-mono text-xs sm:text-[13px] text-zinc-400 mt-2">
              Technologies I use, grouped by the role they play in building applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {stacks.map((stack, i) => {
              const CategoryIcon = stack.icon;
              return (
                <div
                  key={stack.name}
                  onMouseMove={spotlight}
                  className={`spotlight-card reveal-up rounded-2xl p-6 ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`}
                  style={{ "--reveal-delay": `${50 + i * 75}ms` } as React.CSSProperties}
                >
                  <div className="category-icon-box w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 mb-5">
                    <CategoryIcon size={16} aria-hidden="true" />
                  </div>
                  <h3 className="font-mono text-base font-semibold text-white mb-4">{stack.name}</h3>
                  <div className="flex flex-wrap gap-2 font-mono text-[11px] text-zinc-300">
                    {stack.tags.map((tag) => (
                      <span key={tag} className="tech-pill inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md cursor-default">
                        {technologyIcons[tag] ? <BrandIcon icon={technologyIcons[tag]} /> : <Code2 size={14} aria-hidden="true" />}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ EXPERIENCE + EDUCATION ============ */}
        <section id="experience" className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            <div className="lg:col-span-7 reveal-up">
              <p className={eyebrow}>MY JOURNEY</p>
              <h2 className="font-mono text-2xl sm:text-[28px] font-semibold text-white tracking-tight">Experience &amp; milestones.</h2>
              <p className="font-mono text-xs sm:text-[13px] text-zinc-400 mt-2 mb-10 leading-relaxed">
                A timeline of my professional experience, independent work, and growth as a developer.
              </p>

              <div ref={timelineRef} className="relative pl-7 space-y-10">
                <div className="absolute left-[5px] top-2 bottom-2 w-[1.5px] bg-white/[0.08]" />
                <div
                  id="timeline-progress"
                  ref={timelineBarRef}
                  className="absolute left-[5px] top-2 w-[1.5px] bg-gradient-to-b from-emerald-400 to-emerald-400/30"
                  style={{ height: "0%" }}
                />

                <div className="reveal-up relative group" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
                  <span className="absolute -left-7 top-1.5 flex h-3 w-3 items-center justify-center">
                    <span className="beacon-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 ring-4 ring-[var(--bg-primary)]" />
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs text-zinc-400">Oct 2023 – Present</span>
                    <span className="px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] font-mono text-[10px] text-emerald-400">Full-time</span>
                  </div>
                  <h3 className="font-mono text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">Web Developer</h3>
                  <p className="font-mono text-xs text-zinc-400 mt-0.5">Forty Degrees Celsius Inc. · Cebu City</p>
                  <p className="font-mono text-xs leading-relaxed text-zinc-400/90 mt-3">
                    Develop and maintain web applications with CakePHP 2, PHP, JavaScript, and jQuery. Resolved 100+ technical tickets across bug fixes, feature work, and performance improvements. Collaborate with senior developers and architects on code refactoring and database query optimization.
                  </p>
                </div>

                <div className="reveal-up relative group" style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
                  <span className="absolute -left-7 top-1.5 flex h-3 w-3 items-center justify-center">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400/80 group-hover:bg-emerald-400 ring-4 ring-[var(--bg-primary)] transition-colors" />
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs text-zinc-400">Feb 2023 – Sep 2023</span>
                    <span className="px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] font-mono text-[10px] text-emerald-400">Internship</span>
                  </div>
                  <h3 className="font-mono text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">Web Developer Intern</h3>
                  <p className="font-mono text-xs text-zinc-400 mt-0.5">SugboDoc Technologies Inc. · Cebu City</p>
                  <p className="font-mono text-xs leading-relaxed text-zinc-400/90 mt-3">
                    Developed and maintained company web systems using CodeIgniter 3 and Bootstrap 4. Supported team operations and organized medical coding data across SNOMED, FHIR, ICD-9, and ICD-10 standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 reveal-up" style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
              <p className={eyebrow}>EDUCATION</p>
              <h2 className="font-mono text-2xl sm:text-[28px] font-semibold text-white tracking-tight">Where I learned and grew.</h2>
              <div onMouseMove={spotlight} className="spotlight-card rounded-2xl p-6 mt-6">
                <div className="flex items-start gap-4">
                  <div className="category-icon-box shrink-0 w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-zinc-400">Aug 2023</span>
                    <h3 className="font-mono text-sm sm:text-[15px] font-semibold text-white leading-snug mt-1">
                      Bachelor of Science in Information Technology
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 leading-relaxed mt-2">
                      Cebu Technological University · M.J. Cuenco Ave., Cebu City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="pt-10 pb-20">
          <div onMouseMove={spotlight} className="spotlight-card reveal-up rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-lg">
                <p className={eyebrow}>GET IN TOUCH</p>
                <h2 className="font-mono text-2xl sm:text-[28px] font-semibold text-white leading-tight">Have a project or opportunity in mind?</h2>
                <p className="font-mono text-xs sm:text-[13px] text-zinc-400 leading-relaxed mt-3">
                  I’m interested in connecting with teams and people building useful software. Feel free to reach out.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-center gap-3 shrink-0">
                <button type="button" onClick={() => setContactOpen(true)} className={`${primaryBtn} px-6 py-3`}>
                  <Mail size={16} aria-hidden="true" />
                  <span>Contact me</span>
                </button>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <span>GitHub profile</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a href="#home" className="font-semibold text-sm">
              <span className="text-emerald-400">~/</span>
              <span className="text-white">neo</span>
              <span className="text-emerald-400">.dev</span>
            </a>
            <span>© 2026 Neo Frank D. Uy. All rights reserved.</span>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <span>back_to_top</span>
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </button>
        </div>
      </footer>

      {/* ============ PROJECT INSPECTOR ============ */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Project details"
        aria-hidden={!projectOpen}
        onClick={(e) => e.target === e.currentTarget && setProjectOpen(false)}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-[opacity,visibility] duration-200 ${
          projectOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className={`w-full max-w-lg rounded-2xl border border-white/10 bg-[var(--bg-card)] p-6 shadow-2xl transition-transform duration-200 ${
            projectOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
            <span className="font-mono text-xs text-emerald-400">{"// PROJECT_SPEC"}</span>
            <button
              type="button"
              onClick={() => setProjectOpen(false)}
              aria-label="Close project details"
              className="w-8 h-8 rounded-lg border border-white/10 hover:bg-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 space-y-4">
            <h3 className="font-mono text-lg font-semibold text-white">{modalProject.title}</h3>
            <p className="font-mono text-xs leading-relaxed text-zinc-400">{modalProject.details}</p>
            <div>
              <p className="font-mono text-[11px] text-zinc-400 mb-2">Architecture &amp; Highlights:</p>
              <ul className="space-y-1.5 font-mono text-xs text-zinc-300 list-disc list-inside">
                {modalProject.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
              {modalProject.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-emerald-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ CONTACT MODAL ============ */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Send a message"
        aria-hidden={!contactOpen}
        onClick={(e) => e.target === e.currentTarget && setContactOpen(false)}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-[opacity,visibility] duration-200 ${
          contactOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className={`w-full max-w-md rounded-2xl border border-white/10 bg-[var(--bg-card)] p-6 shadow-2xl transition-transform duration-200 ${
            contactOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
            <span className="font-mono text-xs text-emerald-400">$ send_message --to neo</span>
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              aria-label="Close contact form"
              className="w-8 h-8 rounded-lg border border-white/10 hover:bg-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <form onSubmit={submitContact} className="mt-5 space-y-4 font-mono text-xs">
            <div>
              <label htmlFor="contact-email" className="block text-zinc-400 mb-1.5">your_email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0d12] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-zinc-400 mb-1.5">message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                required
                placeholder="Hi Neo, let's build something together..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0d12] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => copyText(EMAIL, `Copied ${EMAIL}`)}
                className="text-zinc-400 hover:text-emerald-400 underline underline-offset-4 transition-colors"
              >
                Copy direct email
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold transition-all active:scale-95"
              >
                Transmit →
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ============ TOAST ============ */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-50 pointer-events-none flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/35 bg-[var(--bg-card)]/95 backdrop-blur-md shadow-xl font-mono text-xs text-emerald-300 transition-all duration-300 ${
          toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
