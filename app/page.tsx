"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Moon,
  Server,
  Sparkles,
  Sun,
  Wrench,
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

type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  visual: string;
  githubUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Inventory & Sales Management System",
    description: "A system for managing products, monitoring inventory, tracking sales, and generating reports.",
    tags: ["Laravel", "React", "TypeScript", "MySQL"],
    status: "In progress",
    visual: "inventory",
  },
  {
    title: "Movie Review Platform",
    description: "A movie platform with reviews, ratings, likes, and user authentication.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "Live platform",
    visual: "movies",
    demoUrl: "https://movie-react-steel-phi.vercel.app",
  },
  {
    title: "Academic Scheduling System",
    description: "An academic scheduling application designed to organize classes, rooms, instructors, and time slots.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    status: "Not live",
    visual: "schedule",
  },
  {
    title: "NativeCamp",
    description: "A global online English and language learning platform with 24/7 on-demand, unlimited lessons, primarily serving students in Japan and Taiwan.",
    tags: ["ESL", "Online Learning", "Language Learning"],
    status: "Live platform",
    visual: "online-class",
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

function BrandIcon({ icon, className = "brand-icon" }: { icon: SimpleIcon; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>;
}

function ProjectPreview({ type }: { type: string }) {
  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      {type === "movies" ? (
        <div className="movie-screen">
          <div className="mock-top"><b>MovieFlix</b><i>Browse titles</i></div>
          <div className="poster-row">{[1, 2, 3, 4, 5].map((poster) => <span className={`poster poster-${poster}`} key={poster} />)}</div>
        </div>
      ) : (
        <div className="mock-app">
          <aside className="mock-sidebar"><i /><i /><i /><i /><i /></aside>
          <div className="mock-content">
            <div className="mock-top"><b>{type === "inventory" ? "Inventory Overview" : type === "online-class" ? "Online English Class" : "Class Scheduling"}</b><i>{type === "online-class" ? "＋ Join lesson" : "＋ New item"}</i></div>
            <div className="mock-stats"><span /><span /><span /></div>
            <div className="mock-table"><span /><span /><span /><span /></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
    const sections = links.map((link) => document.querySelector(link.hash)).filter((section): section is Element => Boolean(section));
    const handleNavClick = (event: MouseEvent) => {
      const link = event.currentTarget as HTMLAnchorElement;
      links.forEach((navLink) => navLink.classList.toggle("active", navLink === link));
    };
    links.forEach((link) => link.addEventListener("click", handleNavClick));
    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
      if (!visibleSections.length) return;

      const clickedSection = links.find((link) => link.hash === window.location.hash)?.hash;
      const activeSection = visibleSections.find((section) => `#${section.id}` === clickedSection) ?? visibleSections[0];
      links.forEach((link) => link.classList.toggle("active", link.hash === `#${activeSection.id}`));
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      links.forEach((link) => link.removeEventListener("click", handleNavClick));
    };
  }, []);

  return (
    <div className={light ? "portfolio light" : "portfolio"}>
      <header className="site-header">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#home"><span>~/</span>neo<span>.dev</span></a>
          <div className="nav-links">
            <a className="active" href="#home">home</a><a href="#projects">projects</a><a href="#stack">tech_stack</a>
            <a href="#experience">experience</a><a href="#contact">contact</a>
          </div>
          <button className="theme-toggle" aria-label="Toggle color theme" onClick={() => setLight(!light)}>{light ? <Sun size={20} /> : <Moon size={20} />}</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <div className="availability"><i className="dot" />open_to_work = true</div>
              <h1>Hi, I’m <span>Neo Frank D. Uy</span><b className="cursor" aria-hidden="true" /></h1>
              <h2><span className="prompt-mark">&gt;</span> Full-Stack Developer</h2>
              <p className="intro">I build web applications focused on usability, maintainability, and solving real-world problems. My work spans backend development, database design, and modern frontend interfaces.</p>
              <div className="actions"><a className="btn btn-primary" href="#projects">Explore Projects <ArrowRight size={17} /></a><a className="btn btn-ghost" href="#experience">View Resume <ArrowDown size={16} /></a></div>
              <div className="socials">
                <a href="https://github.com/neofrank1" target="_blank" rel="noreferrer"><BrandIcon icon={siGithub} /> github</a>
                <a href="https://www.linkedin.com/in/neo-frank-uy/" target="_blank" rel="noreferrer">
                  <svg className="brand-icon social-stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></svg> linkedin
                </a>
                <a href="mailto:hello@example.com"><Mail size={18} /> email</a>
              </div>
            </div>
            <div className="hero-terminal" aria-hidden="true">
              <div className="term-bar"><i className="term-dot term-red" /><i className="term-dot term-yellow" /><i className="term-dot term-green" /><span>profile.ts</span></div>
              <pre className="term-body"><code>
                <div><span className="tk-kw">const</span> <span className="tk-var">developer</span> = {"{"}</div>
                <div className="term-indent">name: <span className="tk-str">{'"Neo Frank D. Uy"'}</span>,</div>
                <div className="term-indent">role: <span className="tk-str">{'"Full-Stack Developer"'}</span>,</div>
                <div className="term-indent">frontend: [<span className="tk-str">{'"React"'}</span>, <span className="tk-str">{'"Next.js"'}</span>, <span className="tk-str">{'"TypeScript"'}</span>],</div>
                <div className="term-indent">backend: [<span className="tk-str">{'"Laravel"'}</span>, <span className="tk-str">{'"Node.js"'}</span>],</div>
                <div className="term-indent">building: <span className="tk-str">{'"full-stack apps"'}</span>,</div>
                <div className="term-indent">openToWork: <span className="tk-bool">true</span>,</div>
                <div>{"};"}</div>
              </code></pre>
            </div>
          </div>
        </section>

        <section id="projects"><div className="wrap section">
          <div className="section-head"><div><p className="eyebrow">{"// SELECTED_PROJECTS"}</p><h2>Projects I’ve been building<span className="heading-cursor">_</span></h2><p className="section-sub">A few featured projects that showcase my skills and approach to problem solving.</p></div><a className="text-link" href="https://github.com/neofrank1" target="_blank" rel="noreferrer">view_all_projects <span>→</span></a></div>
          <div className="projects">{projects.map((project) => <article className="project-card" key={project.title}>
            <ProjectPreview type={project.visual} /><h3>{project.title}</h3><p>{project.description}</p>
            <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="project-foot"><span className={`status ${project.status === "Update status" ? "status-blue" : project.status === "Not live" ? "status-red" : ""}`}><i />{project.status}</span><span className="project-links">{project.githubUrl && <a href={project.githubUrl} aria-label={`${project.title} GitHub repository`} target="_blank" rel="noreferrer"><BrandIcon icon={siGithub} /> Code</a>}{project.demoUrl && <a href={project.demoUrl} aria-label={`${project.title} live website`} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={15} /></a>}</span></div>
          </article>)}</div>
        </div></section>

        <section id="stack"><div className="wrap section"><p className="eyebrow">{"// TECH_STACK"}</p><h2>My development toolkit<span className="heading-cursor">_</span></h2><p className="section-sub">Technologies I use, grouped by the role they play in building applications.</p>
          <div className="tech-grid">{stacks.map((stack) => { const CategoryIcon = stack.icon; return <article className="tech-card" key={stack.name}><span className="icon"><CategoryIcon size={21} /></span><h3>{stack.name}</h3><div className="tags">{stack.tags.map((tag) => <span className="tag" key={tag}>{technologyIcons[tag] ? <BrandIcon icon={technologyIcons[tag]} /> : <Code2 size={14} />}<span>{tag}</span></span>)}</div></article>; })}</div>
        </div></section>

        <section className="journey-section">
          <div className="wrap journey">
            <div id="experience"><p className="eyebrow">My Journey</p><h2>Experience &amp; milestones.</h2><p className="section-sub">A timeline of my professional experience, independent work, and growth as a developer.</p>
              <div className="timeline">
                <div className="timeline-item"><span className="pill-outline">Full-time</span><div className="timeline-date">Oct 2023 — Present</div><div className="timeline-title">Web Developer</div><div className="timeline-role">Forty Degrees Celsius Inc. · Cebu City</div><p className="timeline-desc">Develop and maintain web applications with CakePHP 2, PHP, JavaScript, and jQuery. Resolved 100+ technical tickets across bug fixes, feature work, and performance improvements. Collaborate with senior developers and architects on code refactoring and database query optimization.</p></div>
                <div className="timeline-item"><span className="pill-outline">Internship</span><div className="timeline-date">Feb 2023 — Sep 2023</div><div className="timeline-title">Web Developer Intern</div><div className="timeline-role">SugboDoc Technologies Inc. · Cebu City</div><p className="timeline-desc">Developed and maintained company web systems using CodeIgniter 3 and Bootstrap 4. Supported team operations and organized medical coding data across SNOMED, FHIR, ICD-9, and ICD-10 standards.</p></div>
              </div>
            </div>
            <div id="education">
              <p className="eyebrow">Education</p>
              <h2>Where I learned and grew.</h2>
                <div className="education-card">
                  <span className="icon"><GraduationCap size={21} /></span>
                  <div>
                    <small>Aug 2023</small>
                    <h3>Bachelor of Science in Information Technology</h3>
                    <p>Cebu Technological University · M.J. Cuenco Ave., Cebu City</p>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section"><div className="wrap"><div className="contact-card"><div><p className="eyebrow">Get in touch</p><h2>Have a project or opportunity<br />in mind?</h2><p>I’m interested in connecting with teams and people building useful software. Feel free to reach out.</p></div><div className="contact-actions"><a className="btn btn-primary" href="mailto:hello@example.com"><Mail size={17} /> Contact me</a><a className="text-link" href="https://github.com/neofrank1" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={15} /></a></div></div></div></section>
      </main>
      <footer className="wrap footer"><div className="footer-left"><a className="brand" href="#home"><span>~/</span>neo<span>.dev</span></a><span>© 2026 Neo Frank D. Uy. All rights reserved.</span></div><a className="back-top" href="#home">back_to_top <ArrowUpRight size={15} /></a></footer>
    </div>
  );
}
