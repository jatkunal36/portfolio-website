import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../../components/project-visual";
import { Reveal } from "../../../components/motion";
import { Section } from "../../../components/section";
import { projects } from "../../../data/projects";
import { siteConfig } from "../../../lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.shortTitle} | ${siteConfig.name} Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.shortTitle} Case Study`,
      description: project.description,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.shortTitle} Case Study`,
      description: project.description
    }
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24">
        <Reveal>
          <Link href="/#work" className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-glow">
            Back to portfolio
          </Link>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">{project.category}</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">{project.title}</h1>
          <p className="mt-6 text-pretty text-xl leading-9 text-slate-600">{project.problemActionResult}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black text-slate-600">
                {tag}
              </span>
            ))}
          </div>
          {project.liveUrl ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                {project.liveLabel || "View Live Project"}
              </a>
              <Link
                href="/#work"
                className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                View More Case Studies
              </Link>
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.1}>
          <ProjectVisual project={project} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <Reveal key={metric} delay={index * 0.05} className="glass rounded-3xl p-6">
              <p className="font-display text-3xl font-black gradient-text">{metric.split(" ")[0]}</p>
              <p className="mt-2 text-sm font-bold text-slate-600">{metric.split(" ").slice(1).join(" ")}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CaseNarrative project={project} />
      <CaseStudyCta project={project} />
      <ProjectPager previousProject={previousProject} nextProject={nextProject} active={project.slug} />
      <RelatedProjects active={project.slug} />
    </main>
  );
}

function CaseNarrative({ project }) {
  const sections = [
    { id: "problem", label: "Problem" },
    { id: "process", label: "Process" },
    { id: "solution", label: "Solution" },
    { id: "impact", label: "Impact" }
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[.66fr_1fr]">
        <Reveal className="glass h-max rounded-[2rem] p-6 lg:sticky lg:top-28">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">Case Study Structure</p>
          <nav className="mt-5 grid gap-2 text-sm font-bold text-slate-600">
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-xl px-3 py-2 transition hover:bg-white/[0.06] hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 grid gap-3">
            <Info label="Project" value={project.shortTitle} />
            <Info label="Role" value={project.role} />
            <Info label="Timeline" value={project.timeline} />
            <Info label="Platform" value={project.platform} />
          </div>
        </Reveal>

        <div className="space-y-6">
          <StoryBlock id="problem" number="01" title="Problem">
            <p>{project.overview}</p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.05] p-5">
              <p className="font-bold leading-8 text-slate-600">{project.problem}</p>
            </div>
          </StoryBlock>

          <StoryBlock id="process" number="02" title="Process">
            <div className="grid gap-3">
              {project.process.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Step 0{index + 1}</p>
                  <p className="mt-2 font-semibold text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </StoryBlock>

          <StoryBlock id="solution" number="03" title="Solution">
            <p>{project.solution}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.solutionPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 font-bold text-slate-600">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.screens.map((screen) => (
                <div key={screen} className={`case-grid min-h-64 rounded-3xl bg-gradient-to-br ${project.gradient} p-4`}>
                  <div className="dark-panel h-full rounded-2xl border border-white/15 bg-slate-950/82 p-4 text-white">
                    <div className="h-3 w-24 rounded-full bg-white/20" />
                    <div className="mt-5 h-20 rounded-2xl bg-white/10" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <span className="h-16 rounded-xl bg-white/10" />
                      <span className="h-16 rounded-xl bg-white/10" />
                    </div>
                    <p className="mt-5 text-sm font-black text-white">{screen}</p>
                  </div>
                </div>
              ))}
            </div>
          </StoryBlock>

          <StoryBlock id="impact" number="04" title="Impact">
            <p className="text-xl font-black text-slate-950">{project.impact}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.impactPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="font-bold leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.designSystem.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 font-black text-slate-950">
                  {item}
                </div>
              ))}
            </div>
          </StoryBlock>
        </div>
      </div>
    </section>
  );
}

function StoryBlock({ id, number, title, children }) {
  return (
    <Reveal>
      <article id={id} className="glass scroll-mt-28 rounded-[2rem] p-7 sm:p-9">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">{number}</p>
        <h2 className="mt-2 font-display text-3xl font-black text-slate-950">{title}</h2>
        <div className="mt-5 leading-8 text-slate-600">{children}</div>
      </article>
    </Reveal>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 font-black text-slate-950">{value}</p>
    </div>
  );
}

function CaseStudyCta({ project }) {
  return (
    <Section eyebrow="Need Similar Work?" title="Looking for this level of product thinking on your team?" className="pt-0">
      <Reveal className="glass grid gap-6 rounded-[2rem] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Kunal is available for senior UI/UX roles, dashboard redesigns, mobile UX, and product workflow projects where clarity directly affects business performance.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            {project.liveLabel || "View Live Project"}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-glow">
            Start a Conversation
          </a>
          <a href={siteConfig.resumePath} download className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow">
            Download Resume
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

function ProjectPager({ previousProject, nextProject, active }) {
  const adjacentProjects = [previousProject, nextProject].filter((project, index, items) => {
    if (!project || project.slug === active) {
      return false;
    }

    return items.findIndex((item) => item.slug === project.slug) === index;
  });

  if (!adjacentProjects.length) {
    return null;
  }

  return (
    <Section eyebrow="Continue Browsing" title="Compare this work against another product story." className="pt-0">
      <div className="grid gap-4 md:grid-cols-2">
        {adjacentProjects.map((project) => (
          <Reveal key={project.slug}>
            <Link href={`/case-study/${project.slug}`} className="glass block rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">{project.category}</p>
              <h3 className="mt-3 font-display text-2xl font-black text-slate-950">{project.shortTitle}</h3>
              <p className="mt-3 leading-7 text-slate-600">{project.problemActionResult}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                View Case Study
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function RelatedProjects({ active }) {
  return (
    <Section eyebrow="More Work" title="Explore another product story." className="pt-0">
      <div className="grid gap-4 md:grid-cols-3">
        {projects
          .filter((project) => project.slug !== active)
          .slice(0, 3)
          .map((project) => (
            <Reveal key={project.slug}>
              <Link href={`/case-study/${project.slug}`} className="glass block rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-glow">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">{project.category}</p>
                <h3 className="mt-3 font-display text-xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.problemActionResult}</p>
              </Link>
            </Reveal>
          ))}
      </div>
    </Section>
  );
}
