import Image from "next/image";
import Link from "next/link";
import {
  certifications,
  experience,
  featuredClientWork,
  focusSpecializations,
  processSteps,
  projects,
  storyParagraphs,
  toolSkills,
  visualDesignWork,
  whyMe
} from "../data/projects";
import { ArrowIcon } from "./icons";
import { Reveal } from "./motion";
import { ProjectVisual } from "./project-visual";
import { ProximityText } from "./proximity-text";
import { Section } from "./section";

export function ProjectsSection() {
  return (
    <Section id="work" eyebrow="Selected Work" title="Case studies structured around problem, process, solution, and impact.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <Link href={`/case-study/${project.slug}`} className="group glass block overflow-hidden rounded-[2rem] p-4 transition duration-500 hover:-translate-y-2 hover:shadow-glow">
              <ProjectVisual project={project} compact />
              <div className="p-3 pt-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">{project.category}</p>
                <h3 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950">
                  <ProximityText radius={110}>{project.title}</ProximityText>
                </h3>
                <p className="mt-4 text-pretty leading-7 text-slate-600">{project.problemActionResult}</p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                  View Case Study
                  <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function MoreWorkSection() {
  return (
    <Section eyebrow="More Work">
      <div className="grid gap-4 lg:grid-cols-6">
        {featuredClientWork.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.05} className="glass rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-glow lg:col-span-2">
            <div className="relative mb-5 h-52 overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: item.imagePosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">{item.category}</p>
            <h3 className="mt-3 font-display text-2xl font-black text-slate-950">{item.name}</h3>
            <p className="mt-2 text-sm font-bold text-slate-500">{item.role}</p>
            <p className="mt-4 leading-7 text-slate-600">{item.summary}</p>
            <div className="mt-5 grid gap-2">
              {item.highlights.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-600">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                View Live Website
              </a>
              <a
                href={item.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                View Figma Design
              </a>
            </div>
          </Reveal>
        ))}

        {visualDesignWork.map((item, index) => (
          <Reveal key={item.title} delay={0.18 + index * 0.05} className="lg:col-span-3">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="glass more-work-visual-card block rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="more-work-pattern mb-6 grid place-items-center rounded-[1.5rem]">
                <span>{item.title.toUpperCase()}</span>
              </div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">{item.category}</p>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">{item.summary}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="From freelance projects to scalable product design at SPSU.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal className="glass rounded-[2rem] p-7 sm:p-9">
          <div className="grid gap-5">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="glass rounded-[2rem] p-7 sm:p-9">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Current Positioning</p>
          <h3 className="mt-4 font-display text-3xl font-black text-slate-950">
            <ProximityText radius={120}>I design products that are clear, scalable, and ready for real growth.</ProximityText>
          </h3>
          <div className="mt-6 grid gap-3">
            <InfoChip label="Current role" value="Senior UI/UX Designer at SPSU" />
            <InfoChip label="Primary focus" value="SaaS, dashboards, scalable systems" />
            <InfoChip label="Looking for" value="Impactful product roles in fast-growing startups" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function WhyMeSection() {
  return (
    <Section eyebrow="Design Philosophy" title="I believe in simplicity, clarity, and measurable impact.">
      <div className="grid gap-4 lg:grid-cols-3">
        {whyMe.map((item, index) => (
          <Reveal key={item} delay={index * 0.05} className="glass rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-glow">
            <p className="text-lg font-bold leading-8 text-slate-600">{item}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ApproachSection() {
  return (
    <Section eyebrow="My Process" title="Research to delivery, with a clean handoff between thinking and execution.">
      <div className="grid gap-4 md:grid-cols-5">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 0.05} className="glass rounded-[2rem] p-6 text-center transition hover:-translate-y-1 hover:shadow-glow">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-sm font-black text-white">
              0{index + 1}
            </span>
            <p className="mt-4 font-display text-2xl font-black text-slate-950">{step}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Tool+Skills">
      <Reveal className="skills-marquee-shell overflow-hidden py-2">
        <div className="skills-marquee-track">
          {[...toolSkills, ...toolSkills].map((item, index) => (
            <span key={`${item}-${index}`} className="skills-marquee-item">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function CertificationsSection() {
  return (
    <Section eyebrow="Certifications & Learning" title="Structured learning that keeps the craft sharp and the thinking current.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.05}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="glass block rounded-[2rem] p-6 transition duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-glow"
            >
              <div className="grid h-28 place-items-center overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white px-3 py-2">
                <Image
                  src={item.preview}
                  alt={`${item.name} certificate preview`}
                  width={520}
                  height={220}
                  className={`h-full w-full object-contain object-center ${item.logoClassName ?? "scale-110"}`}
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black text-slate-950">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                Open Certificate
                <ArrowIcon className="h-4 w-4" />
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ImpactSection() {
  return (
    <Section eyebrow="What I Specialize In" title="Design areas where clarity matters most under pressure.">
      <div className="grid gap-5 lg:grid-cols-3">
        {focusSpecializations.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05} className="glass rounded-[2rem] p-7 transition hover:-translate-y-1 hover:shadow-glow">
            <p className="gradient-text font-display text-4xl font-black">0{index + 1}</p>
            <h3 className="mt-4 font-display text-2xl font-black text-slate-950">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section eyebrow="Experience Timeline">
      <div className="grid gap-5">
        {experience.map((item, index) => (
          <Reveal key={item.period} delay={index * 0.06} className="grid gap-4 lg:grid-cols-[180px_1fr]">
            <div className="pt-2">
              <p className="font-display text-3xl font-black gradient-text">{item.period}</p>
            </div>
            <div className="glass rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <h3 className="font-display text-2xl font-black text-slate-950">{item.title}</h3>
              {item.company ? <p className="mt-1 text-sm font-black uppercase tracking-[0.18em] text-slate-500">{item.company}</p> : null}
              <p className="mt-4 leading-7 text-slate-600">{item.impact}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function InfoChip({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 font-bold text-slate-600">{value}</p>
    </div>
  );
}
