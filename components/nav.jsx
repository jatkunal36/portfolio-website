"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GooeyNav from "./GooeyNav";
import { CloseIcon, InstagramIcon, LinkedInIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { navigationLinks, siteConfig } from "../lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-slate-200 bg-white/82 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/25 shadow-glow">
            <Image src="/profile-avatar.jpg" alt="Kunal Jat" fill sizes="40px" className="object-cover" priority />
          </span>
          <span>
            <span className="block text-sm font-black text-slate-950">{siteConfig.name}</span>
            <span className="block text-xs font-medium text-slate-500">{siteConfig.role}</span>
          </span>
        </Link>

        <div className="hidden items-center md:flex">
          <GooeyNav
            items={navigationLinks}
            particleCount={14}
            particleDistances={[72, 12]}
            particleR={88}
            initialActiveIndex={0}
            animationTime={520}
            timeVariance={220}
            colors={[1, 2, 3, 2, 1, 4]}
          />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${siteConfig.name} on LinkedIn`}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 transition hover:scale-105 hover:border-blue-500 hover:text-blue-600"
          >
            <LinkedInIcon className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${siteConfig.name} on Instagram`}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 transition hover:scale-105 hover:border-fuchsia-400 hover:text-fuchsia-300"
          >
            <InstagramIcon className="h-4 w-4" />
          </Link>
          <ThemeToggle />
          <Link href={`mailto:${siteConfig.email}`} className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex">
            Hire Me
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 grid max-w-7xl gap-2 rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-glass backdrop-blur-2xl md:hidden">
          {navigationLinks.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100">
              {label}
            </Link>
          ))}
          <a
            href={siteConfig.resumePath}
            download
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100"
          >
            Download Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
