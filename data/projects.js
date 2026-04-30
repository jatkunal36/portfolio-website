export const projects = [
  {
    slug: "restaurant-management-system",
    title: "Restaurant POS Dashboard for Faster Order Decisions",
    shortTitle: "Restaurant POS",
    category: "SaaS Dashboard",
    role: "Senior UI/UX Designer",
    timeline: "8 weeks",
    platform: "Web dashboard",
    image: "/projects/restaurant-pos.png",
    imageAlt: "Restaurant POS software preview on laptop",
    description: "A high-density restaurant operations dashboard built to simplify order management, billing, and live decision-making.",
    liveUrl: "https://rms.nexiotech.cloud",
    liveLabel: "View Live Project",
    problemActionResult: "Complex order management slowed peak-hour operations, so the product was redesigned into a clearer dashboard with real-time updates and stronger hierarchy.",
    preview: "Simplified order management, billing visibility, and live operational status in one SaaS workspace.",
    tags: ["SaaS", "Dashboard", "UX Research"],
    gradient: "from-orange-400 via-amber-300 to-cyan-300",
    metrics: ["30% faster order time", "28% fewer stock errors", "4 live workspaces"],
    overview: "Restaurant teams needed one place to track orders, billing, and stock pressure without bouncing between disconnected modules during service hours.",
    problem: "Complex order management created confusion across billing, queue status, and kitchen communication, especially when traffic spiked.",
    process: [
      "Mapped cashier, kitchen, and manager workflows to uncover the highest-friction actions.",
      "Reframed the IA around live priorities so urgent tasks appeared before secondary analytics.",
      "Tested denser dashboard layouts to keep speed high without sacrificing clarity."
    ],
    solution: "Designed a unified dashboard with real-time order states, clearer menu actions, faster billing controls, and visible stock alerts for quicker decisions.",
    solutionPoints: [
      "Exception-first dashboard hierarchy",
      "Live status updates for orders and billing",
      "Modular widgets for stock and service visibility",
      "Reusable card patterns for future scaling"
    ],
    designSystem: ["Status chips", "Dense KPI cards", "Live order tables", "Inventory alerts", "Action buttons", "Operational widgets"],
    screens: ["Operations overview", "Live order queue", "Billing flow", "Inventory risk panel"],
    impact: "Reduced order time by 30%, improved operational scanning, and made high-pressure decisions easier for teams during peak hours.",
    impactPoints: [
      "Less time spent switching between modules",
      "Faster order and billing coordination",
      "Clearer hierarchy for critical operational actions"
    ]
  },
  {
    slug: "rims",
    title: "RIMS Platform for Role-Based Academic Workflows",
    shortTitle: "Faculty SPSU RIMS",
    category: "Enterprise Platform",
    role: "Senior UI/UX Designer",
    timeline: "10 weeks",
    platform: "Web platform",
    image: "/projects/rims-spsu.png",
    imageAlt: "RIMS SPSU academic research platform preview on laptop",
    description: "A university research platform redesigned around role-based clarity, approval visibility, and scalable academic workflows.",
    liveUrl: "https://rims-spsu.netlify.app/",
    liveLabel: "View Live Project",
    problemActionResult: "Disconnected academic workflows created delays and repeated steps, so the system was rebuilt around role-based navigation and clearer approval journeys.",
    preview: "A role-aware dashboard for research management, approvals, publications, and faculty progress.",
    tags: ["Dashboard", "UX Research", "Design System"],
    gradient: "from-blue-400 via-indigo-400 to-slate-100",
    metrics: ["41% better task discovery", "30% fewer repeated steps", "7 user roles aligned"],
    overview: "The university needed one structured product experience for students, faculty, and administrators to manage research milestones with less friction.",
    problem: "Users moved through scattered systems with unclear ownership, which slowed approvals and made academic workflows harder to complete end to end.",
    process: [
      "Mapped flows across students, faculty, departments, and approval authorities.",
      "Grouped modules by user intent instead of internal university terminology.",
      "Built role-based dashboard concepts to reduce hesitation and support dependency."
    ],
    solution: "Created a scalable platform with role-based dashboards, clearer approval trails, structured forms, and stronger status communication across modules.",
    solutionPoints: [
      "Role-led home dashboards",
      "Clear approval visibility and timelines",
      "Simplified status language",
      "Structured cards for faster academic scanning"
    ],
    designSystem: ["Role dashboards", "Approval timeline", "Structured forms", "Module cards", "Status language", "Search patterns"],
    screens: ["Research dashboard", "Publication records", "Approval timeline", "Faculty request flow"],
    impact: "Improved discoverability, reduced admin friction, and made academic workflows faster to understand for all user groups.",
    impactPoints: [
      "Fewer repeated steps across approvals",
      "Better ownership visibility",
      "Cleaner paths between modules and actions"
    ]
  },
  {
    slug: "pdf-seva",
    title: "PDF Seva Mobile Utility for Faster Document Tasks",
    shortTitle: "PDF Seva",
    category: "Mobile Product",
    role: "UI/UX Designer",
    timeline: "5 weeks",
    platform: "Mobile app",
    image: "/projects/pdf-seva.png",
    imageAlt: "PDF Seva app preview on laptop",
    description: "A mobile-first PDF utility designed to make file actions faster, clearer, and more trustworthy on the go.",
    liveUrl: "https://play.google.com/store/apps/details?id=cloud.nexiotech.pdfseva",
    liveLabel: "View App Listing",
    problemActionResult: "Users needed too many tools for simple PDF jobs, so the experience was simplified into one mobile product with clearer actions and previews.",
    preview: "Fast scan, merge, compress, reorder, and export flows designed for mobile speed.",
    tags: ["Mobile UX", "Utility", "Product Design"],
    gradient: "from-blue-500 via-cyan-300 to-slate-100",
    metrics: ["38% faster file tasks", "46% better feature discovery", "12 optimized flows"],
    overview: "PDF Seva focused on helping users complete repeat document tasks from one app without uncertainty before export.",
    problem: "Basic PDF actions felt fragmented and unreliable because users had to jump between tools and guess the result before saving.",
    process: [
      "Ranked the most frequent actions like merge, reorder, scan, protect, and compress.",
      "Streamlined the experience around one-handed mobile usage and quick repetition.",
      "Added preview moments and metadata feedback to increase trust before export."
    ],
    solution: "Designed a mobile-first utility with focused actions, clearer previews, faster navigation, and stronger confidence around file output.",
    solutionPoints: [
      "Action-first home screen",
      "Preview-driven flows before export",
      "Large touch targets for repeat actions",
      "Consistent utility patterns across tools"
    ],
    designSystem: ["Bottom nav", "Action sheets", "Document cards", "Progress states", "Utility icons", "Export confirmation"],
    screens: ["Home", "Merge flow", "Reorder pages", "Protected export"],
    impact: "Reduced friction in repeat document tasks and made the product feel faster, clearer, and more dependable on mobile.",
    impactPoints: [
      "Higher confidence before export",
      "Faster completion for common tasks",
      "Better discovery of utility features"
    ]
  },
  {
    slug: "spsu-website-redesign",
    title: "SPSU Website Redesign for Better Admissions Clarity",
    shortTitle: "SPSU Redesign",
    category: "Website Redesign",
    role: "Senior UI/UX Designer",
    timeline: "6 weeks",
    platform: "Responsive website",
    image: "/projects/spsu-redesign.png",
    imageAlt: "SPSU website redesign preview on laptop",
    description: "A university website redesign focused on clearer information hierarchy, stronger trust signals, and better admissions journeys.",
    liveUrl: "https://www.spsu.ac.in/",
    liveLabel: "View Live Website",
    problemActionResult: "Admissions content and trust signals were buried, so the site was redesigned with clearer hierarchy, navigation, and conversion-aware content blocks.",
    preview: "A more premium, better-structured university experience for programs, trust, and inquiry actions.",
    tags: ["Website", "Responsive", "UX Strategy"],
    gradient: "from-yellow-400 via-white to-indigo-300",
    metrics: ["52% stronger CTA visibility", "35% shallower navigation", "3 user groups prioritized"],
    overview: "The website needed to help prospective students and families understand the university faster while improving admissions intent.",
    problem: "The old experience buried important information under heavy navigation and inconsistent hierarchy, which weakened trust and slowed inquiry actions.",
    process: [
      "Reviewed high-intent journeys across admissions, programs, and trust-building sections.",
      "Reordered content so value, credibility, and calls to action surfaced earlier.",
      "Designed modular responsive sections for cleaner browsing on desktop and mobile."
    ],
    solution: "Built a more structured website with stronger hero hierarchy, clearer navigation, better admissions pathways, and premium trust-focused content blocks.",
    solutionPoints: [
      "Admissions-first content hierarchy",
      "Cleaner responsive navigation",
      "Trust signals surfaced earlier",
      "Reusable section patterns for scalability"
    ],
    designSystem: ["Navigation groups", "Trust blocks", "CTA bands", "Program cards", "Responsive sections", "Content modules"],
    screens: ["Homepage", "About page", "Admissions path", "Responsive nav"],
    impact: "Improved engagement intent, made admissions content easier to reach, and elevated the university's digital credibility.",
    impactPoints: [
      "Clearer path to inquiry actions",
      "Stronger content hierarchy",
      "Better visibility for programs and trust cues"
    ]
  }
];

export const featuredClientWork = [
  {
    name: "TechArk Website Redesign",
    role: "UI/UX Designer at Codeworks Consulting",
    category: "Website Redesign",
    summary: "Conversion-focused website design work for TechArk with a cleaner service architecture, stronger credibility, and agency-scale presentation.",
    figmaUrl: "https://www.figma.com/design/CSQC85yZ5BIq26pN2Qa4uT/Techark?node-id=542-1338&t=pj3pCG79pbGzpv4J-1",
    websiteUrl: "https://gotechark.com/",
    image: "/projects/techark.png",
    imageAlt: "TechArk website preview on laptop",
    imagePosition: "center center",
    highlights: [
      "100+ reviews highlighted on the live site",
      "Built for a company serving hundreds of clients since 2012",
      "Designed for stronger service discovery and business trust"
    ]
  },
  {
    name: "Carney Patterson Meade (CPM)",
    role: "UI/UX Designer at Codeworks Consulting",
    category: "Law Firm Website",
    summary: "Professional website design direction for a legal practice that needed clearer hierarchy, trust-first messaging, and stronger information access.",
    figmaUrl: "https://www.figma.com/design/ZqDg8XggvPyzWDPq9M4BZq/CPM?node-id=0-1&t=Mhu3tkITwZnHvSgQ-1",
    websiteUrl: "https://www.cpmlawplc.com/",
    image: "/projects/cpm.png",
    imageAlt: "CPM law website preview on laptop",
    imagePosition: "center center",
    highlights: [
      "Sharper professional first impression",
      "Clearer access to practice areas and attorney information",
      "More structured content flow for trust and readability"
    ]
  },
  {
    name: "Hampton Roads Chamber",
    role: "UI/UX Designer at Codeworks Consulting",
    category: "Award-Winning Website Redesign",
    summary: "A custom website experience aligned to a rebrand, with cleaner navigation, accessibility improvements, and stronger audience engagement.",
    figmaUrl: "https://www.figma.com/design/mBXilBALGiKu5hs5gahzNI/HR-Chamber?node-id=0-1&t=NcBSIQ4roRE0mVOO-1",
    websiteUrl: "https://hrchamber.com/",
    image: "/projects/hr-chamber.png",
    imageAlt: "Hampton Roads Chamber website preview on laptop",
    imagePosition: "center center",
    highlights: [
      "WCAG Level A accessibility compliance",
      "Awarded by ACCE for Communications Excellence in 2023",
      "Stronger engagement and simpler internal content management"
    ]
  }
];

export const visualDesignWork = [
  {
    title: "Infographics",
    category: "Visual Storytelling",
    summary: "Information-heavy visual pieces designed to make complex messages easier to scan, understand, and share.",
    href: "/infographics.zip"
  },
  {
    title: "Social Media Post Design",
    category: "Campaign Design",
    summary: "High-volume branded creatives built for engagement, campaign consistency, and stronger digital visibility.",
    href: "/social-media-posts.zip"
  }
];

export const storyParagraphs = [
  "I started my journey as a freelance designer, working with diverse clients and learning how business goals, product constraints, and user behavior all shape a great interface.",
  "Today, I design scalable digital products at SPSU, focusing on clarity, structure, and systems that support real teams across complex workflows.",
  "Now I’m looking to build impactful products in fast-growing startups where design can directly influence growth, adoption, and product quality."
];

export const focusSpecializations = [
  {
    title: "SaaS dashboards with real density",
    body: "Designing data-heavy interfaces that stay clear under pressure while balancing hierarchy, complexity, and decision speed."
  },
  {
    title: "Scalable design systems",
    body: "Building reusable product systems that improve consistency, speed up collaboration, and stay flexible as products grow."
  },
  {
    title: "Mobile flows built for speed",
    body: "Crafting low-friction mobile experiences that reduce steps, improve task completion, and keep interactions intuitive."
  }
];

export const processSteps = ["Research", "Wireframe", "Design", "Test", "Deliver"];

export const toolSkills = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Corel Draw",
  "Miro",
  "Canva",
  "HTML/CSS basics",
  "ChatGPT",
  "Gemini",
  "Midjourney",
  "Product Design",
  "UI/UX Design",
  "Web Design",
  "Mobile App Design",
  "Wireframing",
  "Prototyping",
  "UX Research",
  "User Testing",
  "Design Systems",
  "Branding",
  "Visual Design",
  "Graphic Design",
  "Social Media Design",
  "Merchandising"
];

export const certifications = [
  {
    name: "imaginXP",
    note: "6-month design course certificate",
    href: "/certificates/imaginxp-design-course.jpg",
    preview: "/cert-logos/accenture.jpg",
    logoClassName: "scale-[1.28]"
  },
  {
    name: "HubSpot",
    note: "HubSpot learning certificate",
    href: "/certificates/hubspot-certificate.png",
    preview: "/cert-logos/coursera.jpg",
    logoClassName: "scale-[1.18]"
  },
  {
    name: "Accenture",
    note: "Accenture certificate",
    href: "/certificates/accenture-certificate.pdf",
    preview: "/cert-logos/imaginxp.jpg",
    logoClassName: "scale-[1.14]"
  },
  {
    name: "Coursera",
    note: "Coursera certificate",
    href: "/certificates/coursera-certificate.pdf",
    preview: "/cert-logos/hubspot.jpg",
    logoClassName: "scale-[1.2]"
  }
];

export const trustSignals = [
  { label: "Projects Delivered", value: "10+" },
  { label: "Years Experience", value: "5+" },
  { label: "Industries Worked Across", value: "Multi" },
  { label: "UX Metrics Improved", value: "Yes" }
];

export const whyMe = [
  "I believe in simplicity, clarity, and measurable impact.",
  "I simplify complex products without flattening what makes them powerful.",
  "I design with business outcomes in mind, not just surface-level visuals."
];

export const experience = [
  {
    period: "Jan 2024 - Present",
    title: "Sr. UI/UX Designer & Brand Design",
    company: "Sir Padampat Singhania University (JK Cement Initiative)",
    impact:
      "Managing brand design and creative communication for admissions, placements, and institutional campaigns. Worked on website redesign to enhance structure, usability, and user experience."
  },
  {
    period: "Jul 2022 - Jan 2024",
    title: "UX Designer",
    company: "Codeworks Consulting",
    impact:
      "Designed web and mobile product experiences for multiple client projects. Managed end-to-end design process from research and wireframing to final UI and developer handoff."
  },
  {
    period: "Sep 2018 - Jul 2022",
    title: "Early Career & Entrepreneurial Experience",
    company: "",
    impact:
      "Started career in US IT staffing and recruitment, then transitioned into UI/UX design through certification and self-learning, followed by freelance projects across mobile apps, websites, dashboards, and branding."
  }
];
