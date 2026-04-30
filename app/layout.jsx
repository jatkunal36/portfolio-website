import { AssistantBubble } from "../components/assistant-bubble";
import { CursorHalo } from "../components/cursor-halo";
import { Footer } from "../components/footer";
import { Nav } from "../components/nav";
import { siteConfig } from "../lib/site";
import "./globals.css";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "portfolio",
  keywords: [
    "Kunal Jat portfolio",
    "UI UX designer portfolio",
    "product designer India",
    "SaaS dashboard designer",
    "mobile app UX designer",
    "case study portfolio"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CursorHalo />
        <div className="site-grain" aria-hidden="true" />
        <div className="site-bg-overlay" aria-hidden="true" />
        <Nav />
        <div className="page-shell">{children}</div>
        <AssistantBubble />
        <Footer />
      </body>
    </html>
  );
}
