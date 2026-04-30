import { Reveal } from "./motion";
import { ProximityText } from "./proximity-text";

export function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      {(eyebrow || title) && (
        <Reveal className="mb-10 max-w-3xl">
          {eyebrow ? <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-600">{eyebrow}</p> : null}
          {title ? (
            <h2 className="font-display text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              <ProximityText>{title}</ProximityText>
            </h2>
          ) : null}
        </Reveal>
      )}
      {children}
    </section>
  );
}
