import Link from "next/link";
import { projects } from "../data/projects";

export default function NotFound() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass rounded-[2rem] p-8 sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">Page Not Found</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            This page drifted off the portfolio, but the work is still here.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Jump back to the homepage or open one of the featured case studies below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-glow">
              Back to Homepage
            </Link>
            <Link href="/#work" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">
              Browse Projects
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.slug} href={`/case-study/${project.slug}`} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-glow">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">{project.category}</p>
                <h2 className="mt-3 text-xl font-black text-slate-950">{project.shortTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
