"use client";

import { Fira_Code } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500", "700"],
});

export function ConsoleMinimalPage() {
  return (
    <div
      className={`${firaCode.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-fira), monospace",
        backgroundColor: "var(--cm-bg)",
        color: "var(--cm-green)",
      }}
    >
      <style jsx global>{`
        :root {
          --cm-bg: #000000;
          --cm-green: #00ff41;
          --cm-green-dim: rgba(0, 255, 65, 0.6);
          --cm-green-muted: rgba(0, 255, 65, 0.35);
          --cm-amber: #ffb000;
          --cm-amber-dim: rgba(255, 176, 0, 0.5);
          --cm-border: rgba(0, 255, 65, 0.2);
          --cm-white: #33ff33;
        }

        .cm-mono {
          font-family: var(--font-fira), monospace;
        }

        .cm-separator {
          border: none;
          border-top: 1px solid var(--cm-border);
          margin: 0;
        }

        .cm-section {
          padding: 4rem 1.5rem;
        }

        @media (min-width: 768px) {
          .cm-section {
            padding: 6rem 2rem;
          }
        }

        .cm-prompt {
          color: var(--cm-amber);
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        .cm-cmd {
          color: var(--cm-green);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .cm-output {
          color: var(--cm-green-dim);
          font-size: 0.8125rem;
          line-height: 1.7;
        }

        .cm-cta {
          display: inline-block;
          padding: 0.625rem 1.5rem;
          border: 1px solid var(--cm-green);
          color: var(--cm-green);
          font-family: var(--font-fira), monospace;
          font-size: 0.8125rem;
          text-decoration: none;
          transition: background-color 0.2s, color 0.2s;
        }

        .cm-cta:hover {
          background-color: var(--cm-green);
          color: #000;
        }

        .cm-cta-ghost {
          display: inline-block;
          padding: 0.625rem 1.5rem;
          border: 1px solid var(--cm-border);
          color: var(--cm-green-dim);
          font-family: var(--font-fira), monospace;
          font-size: 0.8125rem;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }

        .cm-cta-ghost:hover {
          border-color: var(--cm-green);
          color: var(--cm-green);
        }

        @keyframes cm-blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .cm-cursor {
          animation: cm-blink 1s step-end infinite;
          color: var(--cm-green);
        }

        @keyframes cm-scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>

      <Hero />
      <hr className="cm-separator" />
      <Features />
      <hr className="cm-separator" />
      <HowItWorks />
      <hr className="cm-separator" />
      <Capabilities />
      <hr className="cm-separator" />
      <Stats />
      <hr className="cm-separator" />
      <Integrations />
      <hr className="cm-separator" />
      <Footer />
    </div>
  );
}
