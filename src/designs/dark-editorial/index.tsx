"use client";

import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600"],
});

export function DarkEditorialPage() {
  return (
    <div
      className={`${playfair.variable} ${sourceSans.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-source-sans), sans-serif",
        backgroundColor: "#1a1f1a",
        color: "#e8e4df",
      }}
    >
      <style jsx global>{`
        :root {
          --de-bg: #1a1f1a;
          --de-bg-light: #222822;
          --de-text: #e8e4df;
          --de-heading: #f5f2ed;
          --de-muted: #9a9590;
          --de-accent: #e8732a;
          --de-accent-hover: #f08c45;
          --de-line: rgba(232, 228, 223, 0.12);
          --de-line-strong: rgba(232, 228, 223, 0.25);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .font-serif-editorial {
          font-family: var(--font-playfair), "Georgia", serif;
        }

        .font-sans-editorial {
          font-family: var(--font-source-sans), "Helvetica Neue", sans-serif;
        }

        .de-heading {
          font-family: var(--font-playfair), "Georgia", serif;
          color: var(--de-heading);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .de-section-label {
          font-family: var(--font-source-sans), sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--de-muted);
        }

        .de-divider {
          height: 1px;
          background: var(--de-line);
          width: 100%;
        }

        .de-divider-strong {
          height: 1px;
          background: var(--de-line-strong);
          width: 100%;
        }

        .de-ascii-bg::before {
          content: ". : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . : . :";
          position: absolute;
          inset: 0;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.8;
          color: rgba(232, 228, 223, 0.04);
          overflow: hidden;
          pointer-events: none;
          word-break: break-all;
          z-index: 0;
        }

        .de-accent-btn {
          background-color: var(--de-accent);
          color: #fff;
          font-family: var(--font-source-sans), sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          padding: 14px 36px;
          display: inline-block;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .de-accent-btn:hover {
          background-color: var(--de-accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(232, 115, 42, 0.25);
        }

        .de-ghost-btn {
          border: 1px solid var(--de-line-strong);
          color: var(--de-text);
          font-family: var(--font-source-sans), sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          padding: 13px 36px;
          display: inline-block;
          transition: all 0.3s ease;
          text-decoration: none;
          background: transparent;
        }

        .de-ghost-btn:hover {
          border-color: var(--de-text);
          background: rgba(232, 228, 223, 0.05);
        }
      `}</style>

      <Hero />
      <Features />
      <HowItWorks />
      <Capabilities />
      <Stats />
      <Integrations />
      <Footer />
    </div>
  );
}
