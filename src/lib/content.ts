// Shared content for Vigolium landing page
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

export const hero: HeroContent = {
  headline:
    "Agentic intelligence that scans with surgical precision",
  subheadline:
    "High-fidelity vulnerability scanner fusing agentic AI with native speed, modularity, and precision.",
  ctaPrimary: { label: "Get Started", href: "https://github.com/vigolium" },
  ctaSecondary: { label: "Documentation", href: "https://docs.vigolium.com/" },
};

export const features: Feature[] = [
  {
    title: "Native Scan",
    description:
      "Deterministic, multi-phase scanning with active and passive modules. Content discovery, browser spidering, SPA crawling, SAST, and audit — all in one pipeline.",
    iconName: "Scan",
  },
  {
    title: "Agentic Scan",
    description:
      "AI agents autonomously plan attacks, select modules, generate custom payloads, and triage results. Powered by Claude, Codex, Gemini, or OpenCode.",
    iconName: "Brain",
  },
  {
    title: "Native Speed",
    description:
      "Core engine written in Go. Configurable worker pools with per-host rate limiting and hybrid in-memory/disk/Redis queues.",
    iconName: "Zap",
  },
  {
    title: "Dynamic Extensions",
    description:
      "Agents write custom checks on the fly via an embedded JS engine. Discover and load sessions during scans with session-aware HTTP APIs and multi-step auth flows.",
    iconName: "Blocks",
  },
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: "Ingest",
    description:
      "Feed targets via URLs, OpenAPI specs, Postman collections, Burp exports, cURL commands, or live proxy traffic.",
    iconName: "Upload",
  },
  {
    step: 2,
    title: "Scan",
    description:
      "Run native scans with strategy presets, or let AI agents autonomously discover endpoints and orchestrate attacks.",
    iconName: "Scan",
  },
  {
    step: 3,
    title: "Report",
    description:
      "Get findings with full request/response evidence, confidence scoring, and exportable HTML reports.",
    iconName: "FileText",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Injection",
    detail: "XSS (reflected, DOM, SSR), SQLi, NoSQL, SSTI, command injection, XXE, prototype pollution",
  },
  {
    title: "Access Control",
    detail: "CSRF, IDOR, authorization bypass, mass assignment, HTTP method tampering",
  },
  {
    title: "API & Protocol",
    detail: "GraphQL introspection, SSRF, open redirect, request smuggling, JWT flaws, race conditions",
  },
  {
    title: "Framework-Specific",
    detail: "Spring Boot, Django, Laravel, Rails, Express, Next.js, Nuxt, ASP.NET, Flask, FastAPI",
  },
  {
    title: "Cloud & Infra",
    detail: "Firebase, cloud storage takeover, default credentials, web cache poisoning, CORS misconfiguration",
  },
  {
    title: "Adaptive Learning",
    detail: "Agents continuously learn from scan results, refining detection strategies and adapting to new attack surfaces",
  },
];

export const stats: Stat[] = [
  { value: "215+", label: "Scanner modules — active and passive" },
  { value: "6", label: "Native scan phases" },
  { value: "12", label: "Agentic scan phases" },
  { value: "10+", label: "Frameworks with dedicated scanners" },
  { value: "∞", label: "Agent learning capacity — always evolving" },
];

export const integrations: Integration[] = [
  {
    name: "CI/CD Pipelines",
    description: "GitHub Actions, GitLab CI, Jenkins",
  },
  {
    name: "Burp Suite",
    description: "Import/export Burp XML traffic",
  },
  {
    name: "API Server",
    description: "REST API with Swagger UI and traffic ingestion",
  },
  {
    name: "OpenAPI / Swagger",
    description: "Auto-ingest API specifications",
  },
  {
    name: "AI Backends",
    description: "Claude, Codex, Gemini, OpenCode, Cursor via Agent SDK",
  },
];

export const footerCta = {
  headline: "Clone, build, scan. Under 5 minutes.",
  buttonLabel: "View on GitHub",
  buttonHref: "https://github.com/vigolium/vigolium",
};

export const footerLinks: FooterLink[] = [
  { label: "Documentation", href: "http://docs.vigolium.com/" },
  { label: "GitHub", href: "https://github.com/vigolium" },
  { label: "Twitter", href: "https://x.com/j3ssie" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jessie-aiho" },
];
