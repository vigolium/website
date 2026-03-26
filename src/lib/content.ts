// Shared content for all 6 Vigolium landing page designs
// Single source of truth — only visual presentation differs per design

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface Feature {
  title: string;
  description: string;
  iconName: string; // lucide-react icon name
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Capability {
  title: string;
  detail: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Integration {
  name: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface DesignMeta {
  id: number;
  name: string;
  description: string;
  colors: string[]; // gradient colors for preview
}

export const hero: HeroContent = {
  headline:
    "High-fidelity vulnerability scanner fusing agentic AI with native speed, modularity, and precision",
  subheadline:
    "Vigolium combines the intelligence of AI agents with the raw performance of native code to find vulnerabilities others miss.",
  ctaPrimary: { label: "Get Started", href: "#" },
  ctaSecondary: { label: "View Documentation", href: "#" },
};

export const features: Feature[] = [
  {
    title: "Agentic AI",
    description:
      "Autonomous AI agents that reason about attack surfaces, chain vulnerabilities, and adapt to each target's unique architecture.",
    iconName: "Brain",
  },
  {
    title: "Native Speed",
    description:
      "Core engine written in Go for blazing-fast scanning. Thousands of requests per second with minimal resource usage.",
    iconName: "Zap",
  },
  {
    title: "Modular Architecture",
    description:
      "40+ scanner modules (active & passive). Enable exactly what you need. Write custom modules with a simple API.",
    iconName: "Blocks",
  },
  {
    title: "Precision",
    description:
      "Low false-positive rates through multi-stage confirmation. Every finding includes full request/response evidence and confidence scoring.",
    iconName: "Crosshair",
  },
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: "Ingest",
    description:
      "Feed targets via URLs, OpenAPI specs, Burp exports, or live proxy traffic.",
    iconName: "Upload",
  },
  {
    step: 2,
    title: "Scan",
    description:
      "AI agents orchestrate modules, prioritize attack vectors, and adapt in real-time.",
    iconName: "Scan",
  },
  {
    step: 3,
    title: "Report",
    description:
      "Get findings with severity ratings, confidence scores, full HTTP evidence, and remediation guidance.",
    iconName: "FileText",
  },
];

export const capabilities: Capability[] = [
  {
    title: "XSS Detection",
    detail: "Reflected, stored, and DOM-based with payload confirmation",
  },
  {
    title: "SQL Injection",
    detail: "Error-based, blind, and time-based across multiple DBMS",
  },
  {
    title: "Authentication Flaws",
    detail: "Broken auth, session fixation, token weakness analysis",
  },
  {
    title: "API Security",
    detail: "REST & GraphQL endpoint fuzzing, parameter tampering",
  },
  {
    title: "SSRF & Open Redirect",
    detail: "Internal network probing, redirect chain analysis",
  },
  {
    title: "Custom Modules",
    detail: "Write your own scanner modules with Go or YAML DSL",
  },
];

export const stats: Stat[] = [
  { value: "1M+", label: "URLs scanned daily across enterprise deployments" },
  { value: "40+", label: "Built-in scanner modules" },
  { value: "3x", label: "Fewer false positives than traditional DAST tools" },
  { value: "<1s", label: "Sub-second scan initiation" },
];

export const integrations: Integration[] = [
  {
    name: "CI/CD Pipelines",
    description: "GitHub Actions, GitLab CI, Jenkins",
  },
  {
    name: "Burp Suite",
    description: "Import/export compatibility",
  },
  {
    name: "REST API",
    description: "Programmatic access for automation",
  },
  {
    name: "Webhooks",
    description: "Slack, Discord, custom notifications",
  },
  {
    name: "OpenAPI/Swagger",
    description: "Auto-ingestion of API specifications",
  },
];

export const footerCta = {
  headline: "Start scanning in under 60 seconds",
  buttonLabel: "Get Started",
  buttonHref: "#",
};

export const footerLinks: FooterLink[] = [
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Community", href: "#" },
];

export const designsMeta: DesignMeta[] = [
  {
    id: 1,
    name: "Noir Blueprint",
    description:
      "Midnight navy with cyan-white technical drawings. Blueprint grids, dimension lines, crosshair cursors, annotation callouts.",
    colors: ["#0A1628", "#38BDF8", "#F8FAFC"],
  },
  {
    id: 2,
    name: "Glitch Matrix",
    description:
      "Terminal green on black. Falling code rain, monospace everything, command-line aesthetics, matrix-style digital corruption.",
    colors: ["#00FF41", "#008F11", "#003B00"],
  },
  {
    id: 3,
    name: "Twilight Console",
    description:
      "Soft dark with muted lavender, sage green, and peach. Gentle IDE/dashboard aesthetic — syntax-highlighted blocks, soft panels, muted status pills.",
    colors: ["#1E1E2E", "#B4BEFE", "#A6E3A1"],
  },
  {
    id: 5,
    name: "Terminal Brutalist",
    description:
      "Dark, monospace-heavy layout with minimal decoration. Raw typography hierarchy on near-black background with thin border separators and a single muted accent on the CTA.",
    colors: ["#0a0a0a", "#4a9979", "#d4d4d4"],
  },
  {
    id: 6,
    name: "Dark Editorial",
    description:
      "Deep dark-green/charcoal background with elegant serif headings and clean sans-serif body. Centered, spacious layout with subtle ASCII texture and a warm-orange CTA accent.",
    colors: ["#1a1f1a", "#e8732a", "#e8e4df"],
  },
  {
    id: 7,
    name: "Polished Dev Dark",
    description:
      "Refined dark page with soft blue-gray palette, clean sans-serif typography, and generous whitespace. Text-centered hero with blue CTA and three-column features.",
    colors: ["#0f1117", "#3b82f6", "#e2e8f0"],
  },
  {
    id: 8,
    name: "Noir Grid",
    description:
      "Pitch-black background with visible dot-grid overlay. Geometric sans-serif typography, rigid column-snapped layout, with neon cyan used sparingly for links only.",
    colors: ["#000000", "#00ffcc", "#ffffff"],
  },
  {
    id: 9,
    name: "Midnight Glassmorphism",
    description:
      "Dark indigo-to-black gradient with frosted-glass card surfaces and semi-transparent borders. Bold sans-serif headings with soft purple-violet glow accents.",
    colors: ["#1a0533", "#a855f7", "#8b5cf6"],
  },
  {
    id: 10,
    name: "Console Minimal",
    description:
      "Everything rendered terminal-style — monospace throughout, green-on-black text, cursor-blink animations, command-line section headers. No images, no cards, just text.",
    colors: ["#000000", "#00ff41", "#ffb000"],
  },
  {
    id: 11,
    name: "Dark Slab",
    description:
      "Warm charcoal background with thick slab-serif headings and compact sans-serif body. Sections divided by bold horizontal bands with a rust orange CTA accent.",
    colors: ["#1f1d1a", "#c2662a", "#ede8e0"],
  },
  {
    id: 12,
    name: "Obsidian Mono",
    description:
      "Pure black with high-contrast white text, hairline borders, and deliberate negative space. Condensed grotesque headlines, monospace labels. Zero color except electric blue.",
    colors: ["#000000", "#0066ff", "#ffffff"],
  },
  {
    id: 13,
    name: "Void Gradient",
    description:
      "Subtle dark gradient from deep navy to true black with airy layout and thin-weight sans-serif typography. Floating sections with muted teal accents — minimal and quiet.",
    colors: ["#0a0e1a", "#5eead4", "#d1d5db"],
  },
];
