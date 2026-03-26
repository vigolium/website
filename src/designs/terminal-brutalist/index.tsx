"use client";

import { JetBrains_Mono } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
});

export function TerminalBrutalistPage() {
  return (
    <div
      className={`${jetbrainsMono.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-jetbrains), monospace",
        backgroundColor: "var(--tb-bg)",
        color: "var(--tb-text)",
      }}
    >
      <style jsx global>{`
        :root {
          --tb-bg: #0a0a0a;
          --tb-text: #d4d4d4;
          --tb-muted: #737373;
          --tb-border: rgba(255, 255, 255, 0.08);
          --tb-accent: #4a9979;
          --tb-accent-dim: rgba(74, 153, 121, 0.15);
          --tb-white: #e8e8e8;
        }

        .tb-mono {
          font-family: var(--font-jetbrains), monospace;
        }

        .tb-separator {
          border: none;
          border-top: 1px solid var(--tb-border);
          margin: 0;
        }

        .tb-section {
          padding: 5rem 1.5rem;
        }

        @media (min-width: 768px) {
          .tb-section {
            padding: 7rem 2rem;
          }
        }

        .tb-label {
          font-size: 0.6875rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--tb-muted);
        }

        .tb-cta {
          display: inline-block;
          padding: 0.75rem 2rem;
          background-color: var(--tb-accent);
          color: #0a0a0a;
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .tb-cta:hover {
          opacity: 0.8;
        }

        .tb-cta-ghost {
          display: inline-block;
          padding: 0.75rem 2rem;
          border: 1px solid var(--tb-border);
          color: var(--tb-muted);
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.8125rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }

        .tb-cta-ghost:hover {
          border-color: var(--tb-text);
          color: var(--tb-text);
        }

        @keyframes tb-fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Hero />
      <hr className="tb-separator" />
      <Features />
      <hr className="tb-separator" />
      <HowItWorks />
      <hr className="tb-separator" />
      <Capabilities />
      <hr className="tb-separator" />
      <Stats />
      <hr className="tb-separator" />
      <Integrations />
      <hr className="tb-separator" />
      <Footer />
    </div>
  );
}
