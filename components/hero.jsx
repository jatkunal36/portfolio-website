"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RotatingText from "./RotatingText";
import TrueFocus from "./TrueFocus";
import { Reveal } from "./motion";
import { Button } from "./button";
import { siteConfig } from "../lib/site";

const heroHighlights = [
  "Senior UI/UX Designer with 5+ years experience",
  "Specialized in SaaS, Dashboards & Scalable Design Systems"
];

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const primaryCardY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const secondaryCardY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} className="relative mx-auto min-h-screen max-w-7xl px-5 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-x-4 top-16 -z-10 h-[38rem] rounded-[3rem] bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.28),transparent_28rem),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_24rem)] blur-3xl" />

      <div className="grid items-center gap-14 lg:grid-cols-[1fr_.95fr]">
        <Reveal className="relative z-10">
          <div className="glass rounded-[2rem] p-7 sm:p-9 lg:p-10">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-600">
              High-impact product design
            </p>

            <div className="hero-signature font-display text-4xl font-semibold leading-none text-slate-950 sm:text-5xl lg:text-6xl">
              <TrueFocus
                sentence="Kunal Jat"
                manualMode={false}
                blurAmount={2}
                borderColor="#8b5cf6"
                glowColor="rgba(56, 189, 248, 0.55)"
                animationDuration={0.7}
                pauseBetweenAnimations={1.1}
              />
            </div>

            <h1 className="mt-4 max-w-4xl text-balance font-display text-[2.25rem] font-black leading-[0.94] text-slate-950 sm:text-[3rem] lg:text-[3.5rem]">
              A{" "}
              <RotatingText
                texts={["creative,", "UI/UX,", "Graphic,", "Product,", "Visual"]}
                mainClassName="hero-rotating-text mx-2 inline-flex align-middle"
                splitLevelClassName="overflow-hidden pb-1"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.02}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                rotationInterval={2000}
              />
              Designer
            </h1>

            <div className="mt-5 grid gap-3">
              {heroHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-slate-600">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#work">View Work</Button>
              <Button href={siteConfig.resumePath} variant="secondary" download>
                Download Resume
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="relative min-h-[620px]">
          <motion.div
            style={{ y: primaryCardY }}
            className="glass absolute right-0 top-0 w-[92%] overflow-hidden rounded-[2rem] p-3 shadow-glow"
          >
            <div className="mb-3 flex items-center gap-2 px-2 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            </div>
            <div className="relative h-[330px] overflow-hidden rounded-[1.55rem]">
              <Image src="/projects/restaurant-pos.png" alt="Restaurant POS case study preview" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            style={{ y: secondaryCardY }}
            className="glass absolute bottom-4 left-0 w-[58%] overflow-hidden rounded-[2rem] p-3"
          >
            <div className="mb-3 flex items-center gap-2 px-2 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
            </div>
            <div className="relative h-[250px] overflow-hidden rounded-[1.5rem]">
              <Image src="/projects/pdf-seva.png" alt="PDF Seva mobile case study preview" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute bottom-20 right-4 w-60 rounded-[1.75rem] p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Business Impact</p>
            <p className="mt-3 font-display text-4xl font-black text-slate-950">+41%</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Better task discovery after rebuilding hierarchy for dense product workflows.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
