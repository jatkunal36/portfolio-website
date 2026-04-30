export const siteConfig = {
  name: "Kunal Jat",
  title: "Kunal Jat | Senior UI/UX Designer",
  role: "Senior UI/UX Designer",
  description: "Kunal Jat designs high-impact digital products for SaaS, dashboards, and scalable design systems.",
  email: "jatkunal36@gmail.com",
  phone: "+91 9462136915",
  phoneHref: "tel:+919462136915",
  location: "Udaipur, Rajasthan",
  linkedin: "https://www.linkedin.com/in/designerkunal",
  instagram: "https://www.instagram.com/jat_rules1996/",
  resumePath: "/UX-Designer-Kunal-Jat.pdf",
  year: "2026"
};

export const navigationLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" }
];

export const footerLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "Phone", href: siteConfig.phoneHref },
  { label: "LinkedIn", href: siteConfig.linkedin, external: true },
  { label: "Instagram", href: siteConfig.instagram, external: true },
  { label: "Resume", href: siteConfig.resumePath, download: true }
];
