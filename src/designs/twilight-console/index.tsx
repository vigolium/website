"use client";

import { JetBrains_Mono, Inter } from "next/font/google";
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
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export function TwilightConsolePage() {
  return (
    <div
      className={`${jetbrainsMono.variable} ${inter.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        backgroundColor: "var(--twi-bg)",
        color: "var(--twi-text)",
      }}
    >
      <style jsx global>{`
        :root {
          --twi-bg: #1e1e2e;
          --twi-surface: #313244;
          --twi-overlay: #45475a;
          --twi-text: #cdd6f4;
          --twi-subtext: #a6adc8;
          --twi-lavender: #b4befe;
          --twi-green: #a6e3a1;
          --twi-peach: #fab387;
          --twi-yellow: #f9e2af;
          --twi-blue: #89b4fa;
          --twi-muted: #6c7086;
          --twi-crust: #11111b;
          --twi-mantle: #181825;
        }

        .twi-mono {
          font-family: var(--font-jetbrains), monospace;
        }

        .twi-sans {
          font-family: var(--font-inter), sans-serif;
        }

        .twi-panel {
          background-color: var(--twi-surface);
          border: 1px solid var(--twi-overlay);
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2),
            0 1px 4px rgba(0, 0, 0, 0.1);
        }

        .twi-panel-flush {
          background-color: var(--twi-surface);
          border: 1px solid var(--twi-overlay);
          border-radius: 12px;
        }

        .twi-tab-bar {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 0 12px;
          height: 40px;
          background-color: var(--twi-mantle);
          border-bottom: 1px solid var(--twi-overlay);
          border-radius: 12px 12px 0 0;
        }

        .twi-tab {
          padding: 8px 16px;
          font-size: 0.75rem;
          color: var(--twi-muted);
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          cursor: pointer;
        }

        .twi-tab.active {
          color: var(--twi-lavender);
          border-bottom-color: var(--twi-lavender);
        }

        .twi-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          font-size: 0.7rem;
          font-weight: 500;
          border-radius: 9999px;
          letter-spacing: 0.02em;
        }

        .twi-pill-green {
          background-color: rgba(166, 227, 161, 0.12);
          color: var(--twi-green);
        }

        .twi-pill-yellow {
          background-color: rgba(249, 226, 175, 0.12);
          color: var(--twi-yellow);
        }

        .twi-pill-blue {
          background-color: rgba(137, 180, 250, 0.12);
          color: var(--twi-blue);
        }

        .twi-pill-peach {
          background-color: rgba(250, 179, 135, 0.12);
          color: var(--twi-peach);
        }

        .twi-code-line {
          line-height: 1.8;
          font-size: 0.85rem;
        }

        .twi-keyword {
          color: var(--twi-lavender);
          font-weight: 600;
        }

        .twi-string {
          color: var(--twi-green);
        }

        .twi-func {
          color: var(--twi-blue);
        }

        .twi-comment {
          color: var(--twi-muted);
          font-style: italic;
        }

        .twi-number {
          color: var(--twi-peach);
        }

        .twi-type {
          color: var(--twi-yellow);
        }

        .twi-line-num {
          color: var(--twi-muted);
          user-select: none;
          text-align: right;
          width: 2rem;
          display: inline-block;
          margin-right: 1.25rem;
          opacity: 0.6;
        }
      `}</style>

      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Capabilities />
        <Stats />
        <Integrations />
        <Footer />
      </div>
    </div>
  );
}
