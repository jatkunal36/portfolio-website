import { siteConfig } from "../lib/site";
import { ProximityText } from "./proximity-text";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-[2rem] p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.75)]" />
                Available for work
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                <ProximityText>Let&apos;s create your next big idea.</ProximityText>
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Product, UI/UX, and visual design support for startups, platforms, and teams that want clarity with impact.
              </p>
            </div>

            <div className="grid gap-4 sm:justify-self-end">
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-glow">
                Contact Me
              </a>
              <a href={siteConfig.resumePath} download className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">
                Download Resume
              </a>
              <p className="text-sm text-slate-500">Replying for freelance, consulting, and full-time roles.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {siteConfig.year} {siteConfig.name}.</p>
      </div>
    </footer>
  );
}
