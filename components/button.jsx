import Link from "next/link";
import { ArrowIcon, DownloadIcon } from "./icons";

const variants = {
  primary: "bg-gradient-to-r from-violet-500 to-sky-400 text-white shadow-glow hover:shadow-violet-500/40",
  secondary: "border border-slate-200 bg-white/[0.05] text-slate-950 shadow-sm backdrop-blur-xl hover:shadow-glow",
  dark: "bg-slate-950 text-white shadow-glow"
};

export function Button({ href, children, variant = "primary", download = false }) {
  const icon = download ? <DownloadIcon /> : <ArrowIcon />;
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${variants[variant]}`;

  if (href?.startsWith("#") || href?.startsWith("/") || href?.startsWith("mailto:") || href?.startsWith("tel:")) {
    return href.startsWith("/") && !download ? (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    ) : (
      <a href={href} download={download} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <a href={href} download={download} className={classes}>
      {children}
      {icon}
    </a>
  );
}
