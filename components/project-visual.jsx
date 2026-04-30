import Image from "next/image";

export function ProjectVisual({ project, compact = false }) {
  return (
    <div className={`group case-grid rounded-[1.6rem] bg-gradient-to-br ${project.gradient} p-4`}>
      <div className="glass overflow-hidden rounded-[1.35rem] p-3">
        <div className={`relative overflow-hidden rounded-[1.25rem] ${compact ? "h-64" : "h-[30rem]"}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-sky-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute inset-0 grid place-items-center opacity-0 transition duration-500 group-hover:opacity-100">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white shadow-glow backdrop-blur-md">
              View Case Study
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{project.category}</p>
            <p className="mt-2 font-display text-lg font-black text-white">{compact ? project.shortTitle : project.preview}</p>
          </div>
        </div>

        <div className={`mt-4 grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-3"}`}>
          {project.metrics.slice(0, compact ? 2 : 3).map((metric) => (
            <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/[0.1]">
              <p className="font-display text-lg font-black text-white">{metric.split(" ")[0]}</p>
              <p className="mt-1 text-[11px] leading-4 text-zinc-300">{metric.split(" ").slice(1).join(" ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
