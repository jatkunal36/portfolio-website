const { useEffect, useMemo, useState } = React;

const projects = [
  {
    slug: "restaurant-management-system",
    title: "Restaurant Management System",
    eyebrow: "B2B SaaS Dashboard",
    description: "A command center for orders, inventory, staff, table flow, and real-time analytics.",
    impact: "Reduced order handling time by 34% and inventory errors by 28% in prototype testing.",
    tags: ["SaaS UX", "Dashboard", "Design System"],
    color: "from-violet-500 to-cyan-300",
    stats: ["34% faster order flow", "28% fewer inventory mistakes", "4 core roles mapped"],
    problem: "Restaurant teams were jumping between order tickets, stock sheets, and daily sales reports. Managers could not see operational health without interrupting staff.",
    role: "Led product UX, information architecture, dashboard strategy, wireframes, UI direction, and design system foundations.",
    insights: [
      "Managers wanted exception-first dashboards instead of decorative analytics.",
      "Kitchen and service staff needed large touch targets and minimal decision points.",
      "Inventory alerts had to be tied to menu availability, not hidden in a separate module.",
    ],
    flow: ["Login", "Live Orders", "Kitchen Queue", "Inventory Alert", "Manager Analytics", "Daily Close"],
    system: ["Status colors", "Dense tables", "KPI cards", "Role-aware navigation", "Touch-first actions"],
    screens: ["Live order console", "Inventory forecast", "Revenue analytics"],
  },
  {
    slug: "rims-university-platform",
    title: "RIMS (University Platform)",
    eyebrow: "Education Workflow Platform",
    description: "A centralized university operating system for academic, admin, and student workflows.",
    impact: "Improved task discoverability by 41% and reduced duplicated administrative steps by 30%.",
    tags: ["Enterprise UX", "Workflow", "Research"],
    color: "from-indigo-500 to-fuchsia-400",
    stats: ["41% better discoverability", "30% fewer repeated steps", "7 user groups aligned"],
    problem: "University teams were relying on disconnected portals, manual follow-ups, and unclear ownership across recurring academic processes.",
    role: "Owned user journey mapping, module prioritization, UX research synthesis, admin dashboards, and responsive UI patterns.",
    insights: [
      "Faculty users needed quick recovery from interrupted workflows.",
      "Students searched by intent, while staff searched by department vocabulary.",
      "Approval states needed plain-language labels to reduce support calls.",
    ],
    flow: ["Role Selection", "Academic Module", "Request Form", "Approval Chain", "Notifications", "Archive"],
    system: ["Role dashboards", "Approval chips", "Form groups", "Audit timeline", "Search patterns"],
    screens: ["Academic control room", "Approval timeline", "Student request view"],
  },
  {
    slug: "pdf-seva-mobile-app",
    title: "PDF Seva (Mobile App)",
    eyebrow: "Mobile Productivity App",
    description: "A focused mobile app for scanning, organizing, merging, compressing, and sharing PDF documents.",
    impact: "Cut document task completion time by 38% and increased first-session feature discovery by 46%.",
    tags: ["Mobile UI", "Productivity", "Prototyping"],
    color: "from-cyan-400 to-violet-500",
    stats: ["38% faster tasks", "46% higher feature discovery", "12 mobile flows"],
    problem: "Users had to combine multiple tools for common PDF jobs, which made simple document tasks feel slow and unreliable.",
    role: "Designed mobile navigation, document action flows, onboarding, empty states, and high-fidelity UI screens.",
    insights: [
      "The most valuable actions were contextual, appearing after a document was selected.",
      "Users trusted file actions more when size, page count, and output preview were visible.",
      "One-handed reach mattered for repeat tasks like scan, merge, and share.",
    ],
    flow: ["Home", "Scan or Import", "Choose Action", "Preview Output", "Save", "Share"],
    system: ["Bottom navigation", "Action sheets", "Document cards", "Progress states", "File metadata"],
    screens: ["Document home", "Merge workflow", "Export confirmation"],
  },
  {
    slug: "spsu-website-redesign",
    title: "SPSU Website Redesign",
    eyebrow: "University Website UX",
    description: "A more scannable, conversion-oriented university website for students, parents, and recruiters.",
    impact: "Increased key program-page CTA visibility by 52% and lowered navigation depth by 35%.",
    tags: ["Web Design", "Content UX", "Responsive"],
    color: "from-fuchsia-400 to-indigo-500",
    stats: ["52% stronger CTA visibility", "35% shallower navigation", "3 audiences prioritized"],
    problem: "Important admissions, programs, and credibility content was buried across inconsistent pages with weak mobile hierarchy.",
    role: "Led content restructuring, responsive page templates, visual hierarchy, navigation, and conversion-focused UI improvements.",
    insights: [
      "Prospective students needed program clarity before institutional details.",
      "Parents looked for credibility signals and outcomes early in the journey.",
      "Recruiters needed fast access to departments, placements, and contact points.",
    ],
    flow: ["Homepage", "Program Finder", "Program Detail", "Admissions CTA", "Inquiry", "Follow-up"],
    system: ["Page templates", "Content cards", "CTA bands", "Navigation groups", "Responsive grids"],
    screens: ["Homepage redesign", "Program page", "Admissions journey"],
  },
];

const skills = [
  "UI/UX Design",
  "Product Design",
  "SaaS UX",
  "Dashboards",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Web Design",
  "Mobile Design",
];

const gallery = [
  { title: "Revenue Intelligence", type: "Dashboard", gradient: "from-violet-500/40 to-cyan-400/30" },
  { title: "Mobile Documents", type: "Mobile UI", gradient: "from-cyan-400/40 to-indigo-500/30" },
  { title: "Academic Portal", type: "Web Layout", gradient: "from-indigo-500/40 to-fuchsia-400/30" },
  { title: "Operations Console", type: "Dashboard", gradient: "from-fuchsia-400/35 to-violet-500/30" },
  { title: "Admissions Journey", type: "Web Layout", gradient: "from-blue-400/35 to-purple-500/30" },
  { title: "Design System Kit", type: "Components", gradient: "from-emerald-300/25 to-violet-500/25" },
];

const Icon = ({ name, className = "h-5 w-5" }) => {
  const icons = {
    arrow: "M5 12h14m-6-6 6 6-6 6",
    download: "M12 3v12m0 0 5-5m-5 5-5-5M5 21h14",
    mail: "M4 6h16v12H4z M4 7l8 6 8-6",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92z",
    map: "M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z M12 10a3 3 0 1 0 0-.01",
    moon: "M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z",
    sun: "M12 4V2m0 20v-2m8-8h2M2 12h2m14.95 6.95 1.41 1.41M3.64 3.64l1.41 1.41m0 13.9-1.41 1.41M20.36 3.64l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "M6 6l12 12M18 6 6 18",
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
};

function useRoute() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash.replace(/^#/, "");
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      { threshold: 0.13 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
}

function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, setDark];
}

function App() {
  const route = useRoute();
  const [dark, setDark] = useTheme();
  useReveal();
  const slug = route.startsWith("/case-study/") ? route.split("/").pop() : null;
  const project = projects.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  return (
    <div className="min-h-screen overflow-hidden">
      <Nav dark={dark} setDark={setDark} />
      {project ? <CaseStudy project={project} /> : <Home />}
      <Footer />
    </div>
  );
}

function Nav({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "#projects"],
    ["About", "#about"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  const go = target => {
    if (!window.location.hash.startsWith("#/")) window.location.hash = "#/";
    setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: "smooth" }), 30);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]">
        <a href="#/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 text-sm font-black text-white shadow-glow">KJ</span>
          <span>
            <span className="block text-sm font-bold tracking-wide">Kunal Jat</span>
            <span className="block text-xs text-zinc-500 dark:text-zinc-400">Senior Product Designer</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, target]) => (
            <button key={label} onClick={() => go(target)} className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white">
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-black/[0.03] text-zinc-700 transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-white">
            <Icon name={dark ? "sun" : "moon"} />
          </button>
          <a href="mailto:jatkunal36@gmail.com" className="hidden rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105 hover:shadow-glow dark:bg-white dark:text-zinc-950 sm:inline-flex">Hire Me</a>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden dark:border-white/10">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-2 grid max-w-7xl gap-2 rounded-2xl border border-black/10 bg-white/90 p-3 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90 md:hidden">
          {links.map(([label, target]) => (
            <button key={label} onClick={() => go(target)} className="rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/10">{label}</button>
          ))}
        </div>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="reveal mb-10 max-w-3xl">
          {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-cyan-300">{eyebrow}</p>}
          {title && <h2 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-5xl">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}

function Button({ children, href, variant = "primary", icon = "arrow", download = false }) {
  const styles = {
    primary: "bg-white text-zinc-950 shadow-glow hover:scale-[1.03] dark:bg-white dark:text-zinc-950",
    secondary: "border border-black/10 bg-white/50 text-zinc-950 hover:scale-[1.03] hover:bg-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:bg-white/14",
    dark: "bg-zinc-950 text-white hover:scale-[1.03] dark:bg-gradient-to-r dark:from-violet-500 dark:to-indigo-500",
  };
  return (
    <a href={href} download={download} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${styles[variant]}`}>
      {children}
      <Icon name={icon} className="h-4 w-4" />
    </a>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Experience />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-[1fr_.92fr] lg:px-8">
      <div className="reveal">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 backdrop-blur-xl dark:text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,.8)]"></span>
          Available for SaaS and product design
        </div>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-zinc-950 dark:text-white sm:text-7xl lg:text-8xl">
          Kunal Jat
          <span className="gradient-text block pt-3 text-4xl sm:text-6xl lg:text-7xl">I design complex SaaS products that people actually understand.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          5+ years designing dashboards, web apps, and mobile products with clean information architecture, scalable design systems, and sharp product thinking.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="#projects">View Work</Button>
          <Button href="./public/Kunal_Jat_Resume.pdf" variant="secondary" icon="download" download>Download Resume</Button>
          <Button href="mailto:jatkunal36@gmail.com" variant="dark">Hire Me</Button>
        </div>
        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
          {["5+ Years", "12+ Product Flows", "4 Case Studies"].map((item, index) => (
            <div key={item} className="glass rounded-2xl p-4">
              <p className="text-xl font-black">{item.split(" ")[0]}</p>
              <p className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">{item.split(" ").slice(1).join(" ")}</p>
            </div>
          ))}
        </div>
      </div>
      <HeroMockups />
    </section>
  );
}

function HeroMockups() {
  return (
    <div className="reveal relative min-h-[560px] lg:min-h-[680px]">
      <div className="absolute left-2 top-6 h-56 w-56 rounded-full bg-violet-500/30 blur-3xl dark:bg-violet-500/35"></div>
      <div className="glass absolute right-0 top-10 w-[92%] rounded-[2rem] p-4 shadow-glow animate-float">
        <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-4 text-white">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400">Restaurant OS</p>
              <p className="text-lg font-black">Live Operations</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">Healthy</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Orders", "Revenue", "Stock"].map((label, i) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                <p className="text-xs text-zinc-400">{label}</p>
                <p className="mt-2 text-xl font-black">{["128", "₹2.8L", "91%"][i]}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-[1.25fr_.75fr] gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <div className="mb-4 flex items-end gap-2">
                {[52, 72, 44, 88, 64, 94, 76].map((h, i) => (
                  <span key={i} className="w-full rounded-t-lg bg-gradient-to-t from-violet-500 to-cyan-300" style={{ height: `${h}px` }}></span>
                ))}
              </div>
              <div className="h-2 w-3/4 rounded-full bg-white/10"></div>
            </div>
            <div className="space-y-3">
              {["Kitchen queue", "Low stock", "Table turnover"].map((item, i) => (
                <div key={item} className="rounded-xl bg-white/[0.06] p-3">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${i === 1 ? "bg-amber-300" : "bg-cyan-300"}`}></span>
                    <p className="text-xs font-bold">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="glass absolute bottom-4 left-0 w-[58%] rounded-[2rem] p-3 animate-floatSlow">
        <div className="mx-auto h-[430px] max-w-[230px] rounded-[2rem] border border-white/12 bg-zinc-950 p-3 text-white">
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-white/20"></div>
          <div className="rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-300 p-4">
            <p className="text-xs font-semibold text-white/80">PDF Seva</p>
            <p className="mt-10 text-2xl font-black">Merge files in seconds</p>
          </div>
          <div className="mt-4 space-y-3">
            {["Scan document", "Compress PDF", "Share secure link"].map((item, i) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.07] p-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-xs font-black">{i + 1}</span>
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="glass absolute bottom-28 right-4 w-56 rounded-3xl p-4 animate-pulseSoft">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-cyan-300">UX Signal</p>
        <p className="mt-2 text-2xl font-black">+41%</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-300">better task discoverability after navigation redesign</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Senior product design for products with real operational complexity.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="reveal glass rounded-[2rem] p-7 sm:p-10">
          <p className="text-xl leading-9 text-zinc-700 dark:text-zinc-200">
            Kunal Jat is a Senior UI/UX Designer with 5+ years of experience working on SaaS platforms, dashboards, mobile apps, and web products. He specializes in simplifying complex workflows, building scalable design systems, and delivering intuitive user experiences.
          </p>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            His work sits at the intersection of product strategy, interaction design, and polished visual execution, with a focus on helping teams ship products that feel calm, usable, and commercially credible.
          </p>
        </div>
        <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {["Complex dashboards", "Design systems", "Mobile workflows"].map((item, i) => (
            <div key={item} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Focus {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-black">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">Clear hierarchy, thoughtful interaction states, and interfaces built for repeat professional use.</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="A focused skill set for SaaS, dashboards, and digital products.">
      <div className="reveal flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="rounded-full border border-black/10 bg-white/55 px-5 py-3 text-sm font-bold text-zinc-700 transition hover:-translate-y-1 hover:border-violet-400 hover:text-violet-700 dark:border-white/12 dark:bg-white/[0.07] dark:text-zinc-200 dark:hover:text-white">
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Case studies built around product impact, not decoration.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map(project => (
          <a key={project.slug} href={`#/case-study/${project.slug}`} className="reveal group glass relative overflow-hidden rounded-[2rem] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-glow">
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`}></div>
            <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-2xl transition group-hover:opacity-40`}></div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-cyan-300">{project.eyebrow}</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight">{project.title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
            <p className="mt-5 rounded-2xl border border-black/10 bg-black/[0.03] p-4 text-sm font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/[0.055] dark:text-zinc-200">{project.impact}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map(tag => <span key={tag} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-white/10 dark:text-zinc-200">{tag}</span>)}
            </div>
            <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-zinc-950 dark:text-white">
              View Case Study <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  return (
    <Section id="gallery" eyebrow="Gallery" title="A visual language for dashboards, mobile UI, and web layouts.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map(item => (
          <div key={item.title} className="reveal glass group overflow-hidden rounded-[2rem] p-4 transition hover:-translate-y-2 hover:shadow-glow">
            <div className={`case-visual-grid min-h-64 rounded-[1.5rem] bg-gradient-to-br ${item.gradient} p-4`}>
              <div className="rounded-2xl border border-white/15 bg-zinc-950/70 p-4 text-white shadow-glass">
                <div className="flex items-center justify-between">
                  <span className="h-3 w-24 rounded-full bg-white/20"></span>
                  <span className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300"></span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <span className="h-16 rounded-xl bg-white/10"></span>
                  <span className="h-16 rounded-xl bg-white/10"></span>
                  <span className="h-16 rounded-xl bg-white/10"></span>
                </div>
                <div className="mt-4 h-20 rounded-2xl bg-gradient-to-r from-white/10 to-white/5"></div>
              </div>
            </div>
            <div className="p-2 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{item.type}</p>
              <h3 className="mt-2 text-xl font-black">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const items = [
    ["2024-Present", "Senior UI/UX Designer", "Sir Padampat Singhania University", "Leading UX improvements across university platforms, websites, and student-facing digital products."],
    ["2022-2024", "UX Designer", "Codeworks Consulting", "Designed SaaS dashboards, product workflows, and mobile/web experiences for client products."],
    ["2018-2022", "Entrepreneurial Experience", "Independent Ventures", "Built practical product, customer, and business judgment through hands-on entrepreneurial work."],
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="A path shaped by product ownership and hands-on execution.">
      <div className="reveal glass rounded-[2rem] p-5 sm:p-8">
        {items.map((item, index) => (
          <div key={item[1]} className={`grid gap-4 py-6 md:grid-cols-[180px_1fr] ${index ? "border-t border-black/10 dark:border-white/10" : ""}`}>
            <p className="text-sm font-black text-violet-700 dark:text-cyan-300">{item[0]}</p>
            <div>
              <h3 className="text-2xl font-black">{item[1]}</h3>
              <p className="mt-1 font-semibold text-zinc-600 dark:text-zinc-300">{item[2]}</p>
              <p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">{item[3]}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s design the product your users keep choosing.">
      <div className="reveal glass grid gap-8 rounded-[2rem] p-7 sm:p-10 lg:grid-cols-[1fr_.9fr]">
        <div>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Available for senior product design roles, SaaS dashboard design, mobile product UX, and design system work.
          </p>
          <a href="mailto:jatkunal36@gmail.com" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-4 text-sm font-black text-white shadow-glow transition hover:scale-[1.03]">Let’s Work Together</a>
        </div>
        <div className="grid gap-3">
          <ContactRow icon="mail" label="Email" value="jatkunal36@gmail.com" href="mailto:jatkunal36@gmail.com" />
          <ContactRow icon="phone" label="Phone" value="+91 9462136915" href="tel:+919462136915" />
          <ContactRow icon="map" label="Location" value="Udaipur, Rajasthan" />
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.025] p-4 transition hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.055] dark:hover:bg-white/[0.09]">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 text-white"><Icon name={icon} /></span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">{label}</span>
        <span className="mt-1 block font-bold">{value}</span>
      </span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function CaseStudy({ project }) {
  return (
    <main className="pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24">
        <div className="reveal">
          <a href="#/" className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-bold dark:border-white/10 dark:bg-white/8">← Back to portfolio</a>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-cyan-300">{project.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">{project.title}</h1>
          <p className="mt-6 text-xl leading-9 text-zinc-600 dark:text-zinc-300">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map(tag => <span key={tag} className="rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-bold dark:border-white/10 dark:bg-white/8">{tag}</span>)}
          </div>
        </div>
        <CaseHeroVisual project={project} />
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {project.stats.map(stat => (
            <div key={stat} className="reveal glass rounded-3xl p-6">
              <p className="text-3xl font-black gradient-text">{stat.split(" ")[0]}</p>
              <p className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300">{stat.split(" ").slice(1).join(" ")}</p>
            </div>
          ))}
        </div>
      </section>
      <CaseNarrative project={project} />
      <RelatedProjects active={project.slug} />
    </main>
  );
}

function CaseHeroVisual({ project }) {
  return (
    <div className="reveal glass overflow-hidden rounded-[2rem] p-4 shadow-glow">
      <div className={`case-visual-grid rounded-[1.5rem] bg-gradient-to-br ${project.color} p-5`}>
        <div className="rounded-[1.4rem] border border-white/15 bg-zinc-950/82 p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400">Case Study Preview</p>
              <p className="text-2xl font-black">{project.title}</p>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">Prototype</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-[.8fr_1.2fr]">
            <div className="space-y-3">
              {project.flow.slice(0, 5).map((step, i) => (
                <div key={step} className="rounded-2xl bg-white/[0.07] p-3">
                  <p className="text-xs text-zinc-400">Step {i + 1}</p>
                  <p className="font-bold">{step}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-white/[0.07] p-4">
              <div className="grid grid-cols-2 gap-3">
                <span className="h-24 rounded-2xl bg-gradient-to-br from-white/20 to-white/5"></span>
                <span className="h-24 rounded-2xl bg-white/10"></span>
              </div>
              <div className="mt-4 h-40 rounded-3xl bg-gradient-to-r from-violet-500/35 to-cyan-300/25"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseNarrative({ project }) {
  const blocks = [
    ["Overview", project.description],
    ["Problem", project.problem],
    ["My Role", project.role],
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[.72fr_1fr]">
        <aside className="reveal glass h-max rounded-[2rem] p-6 lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-cyan-300">Project Story</p>
          <nav className="mt-5 grid gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            {["Overview", "Problem", "My Role", "Research Insights", "User Flow", "Wireframes", "UI Design", "Design System", "Final Screens", "Impact"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">{item}</a>
            ))}
          </nav>
        </aside>
        <div className="space-y-6">
          {blocks.map(([title, body]) => <StoryBlock key={title} title={title}><p>{body}</p></StoryBlock>)}
          <StoryBlock title="Research Insights">
            <div className="grid gap-3">
              {project.insights.map(item => <p key={item} className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.055]">{item}</p>)}
            </div>
          </StoryBlock>
          <StoryBlock title="User Flow">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {project.flow.map((step, i) => (
                <div key={step} className="min-w-44 rounded-2xl border border-black/10 bg-white/45 p-4 dark:border-white/10 dark:bg-white/[0.055]">
                  <p className="text-xs font-bold text-violet-600 dark:text-cyan-300">0{i + 1}</p>
                  <p className="mt-3 font-black">{step}</p>
                </div>
              ))}
            </div>
          </StoryBlock>
          <VisualStory title="Wireframes" copy="Low-fidelity structure focused on hierarchy, navigation behavior, and reducing cognitive load before visual styling." />
          <VisualStory title="UI Design" copy="High-fidelity screens use deep contrast, clear priority, meaningful color, and calm density for professional workflows." />
          <StoryBlock title="Design System">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.system.map(item => <div key={item} className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 font-bold dark:border-white/10 dark:bg-white/[0.055]">{item}</div>)}
            </div>
          </StoryBlock>
          <StoryBlock title="Final Screens">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.screens.map(screen => (
                <div key={screen} className={`case-visual-grid min-h-52 rounded-3xl bg-gradient-to-br ${project.color} p-4`}>
                  <div className="h-full rounded-2xl border border-white/15 bg-zinc-950/75 p-4 text-white">
                    <div className="h-3 w-24 rounded-full bg-white/20"></div>
                    <div className="mt-5 h-16 rounded-2xl bg-white/10"></div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <span className="h-14 rounded-xl bg-white/10"></span>
                      <span className="h-14 rounded-xl bg-white/10"></span>
                    </div>
                    <p className="mt-4 text-sm font-black">{screen}</p>
                  </div>
                </div>
              ))}
            </div>
          </StoryBlock>
          <StoryBlock title="Impact">
            <p className="text-xl font-black">{project.impact}</p>
            <p className="mt-4">The measurable gains come from prototype evaluation, heuristic review, and workflow comparison against the previous experience. The design is structured to help users move faster while giving teams stronger visibility into the product’s most important states.</p>
          </StoryBlock>
        </div>
      </div>
    </section>
  );
}

function StoryBlock({ title, children }) {
  const id = title.toLowerCase().replaceAll(" ", "-");
  return (
    <article id={id} className="reveal glass scroll-mt-28 rounded-[2rem] p-7 sm:p-9">
      <h2 className="text-3xl font-black">{title}</h2>
      <div className="mt-5 leading-8 text-zinc-600 dark:text-zinc-300">{children}</div>
    </article>
  );
}

function VisualStory({ title, copy }) {
  return (
    <StoryBlock title={title}>
      <p>{copy}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.055]">
          <div className="h-4 w-24 rounded-full bg-zinc-300 dark:bg-white/15"></div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <span className="h-24 rounded-2xl bg-zinc-200 dark:bg-white/10"></span>
            <span className="h-24 rounded-2xl bg-zinc-200 dark:bg-white/10"></span>
            <span className="h-24 rounded-2xl bg-zinc-200 dark:bg-white/10"></span>
          </div>
          <div className="mt-4 h-28 rounded-2xl bg-zinc-200 dark:bg-white/10"></div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.055]">
          <div className="grid gap-3">
            <span className="h-12 rounded-2xl bg-zinc-200 dark:bg-white/10"></span>
            <span className="h-12 rounded-2xl bg-zinc-200 dark:bg-white/10"></span>
            <span className="h-12 rounded-2xl bg-zinc-200 dark:bg-white/10"></span>
            <span className="h-24 rounded-2xl bg-gradient-to-r from-violet-500/25 to-cyan-300/20"></span>
          </div>
        </div>
      </div>
    </StoryBlock>
  );
}

function RelatedProjects({ active }) {
  return (
    <Section eyebrow="More Work" title="Explore another case study." className="pt-0">
      <div className="grid gap-4 md:grid-cols-3">
        {projects.filter(project => project.slug !== active).slice(0, 3).map(project => (
          <a key={project.slug} href={`#/case-study/${project.slug}`} className="reveal glass rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-glow">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{project.eyebrow}</p>
            <h3 className="mt-3 text-xl font-black">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{project.description}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 px-5 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kunal Jat. Designed for thoughtful product teams.</p>
        <div className="flex gap-4 font-bold">
          <a className="hover:text-violet-600 dark:hover:text-white" href="mailto:jatkunal36@gmail.com">Email</a>
          <a className="hover:text-violet-600 dark:hover:text-white" href="#">LinkedIn</a>
          <a className="hover:text-violet-600 dark:hover:text-white" href="#">Dribbble</a>
          <a className="hover:text-violet-600 dark:hover:text-white" href="#">Behance</a>
        </div>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
