"use client";

import { Roboto_Slab, DM_Sans } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-slab",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export function DarkSlabPage() {
  return (
    <div
      className={`${robotoSlab.variable} ${dmSans.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-body), sans-serif",
        backgroundColor: "#1f1d1a",
        color: "#ede8e0",
      }}
    >
      <style jsx global>{`
        :root {
          --ds-bg: #1f1d1a;
          --ds-bg-alt: #2a2724;
          --ds-bg-card: #302d28;
          --ds-text: #ede8e0;
          --ds-heading: #f7f4ef;
          --ds-muted: #9e9688;
          --ds-accent: #c2662a;
          --ds-accent-hover: #d4783c;
          --ds-gold: #b8963e;
          --ds-band: rgba(194, 102, 42, 0.2);
          --ds-border: rgba(237, 232, 224, 0.12);
          --ds-border-thick: rgba(237, 232, 224, 0.25);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
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

        @keyframes expandLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .ds-slab {
          font-family: var(--font-slab), "Rockwell", serif;
        }

        .ds-body {
          font-family: var(--font-body), "Helvetica Neue", sans-serif;
        }

        .ds-heading {
          font-family: var(--font-slab), "Rockwell", serif;
          color: var(--ds-heading);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .ds-section-label {
          font-family: var(--font-slab), serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ds-accent);
        }

        .ds-band {
          width: 100%;
          height: 5px;
          background: var(--ds-band);
        }

        .ds-band-strong {
          width: 100%;
          height: 5px;
          background: var(--ds-accent);
          opacity: 0.35;
        }

        .ds-card {
          background: var(--ds-bg-card);
          border-left: 5px solid var(--ds-accent);
          padding: 28px 28px;
        }

        .ds-accent-btn {
          background-color: var(--ds-accent);
          color: #fff;
          font-family: var(--font-slab), serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          padding: 16px 40px;
          display: inline-block;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
        }

        .ds-accent-btn:hover {
          background-color: var(--ds-accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(194, 102, 42, 0.35);
        }

        .ds-ghost-btn {
          border: 3px solid var(--ds-border-thick);
          color: var(--ds-text);
          font-family: var(--font-slab), serif;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          padding: 13px 36px;
          display: inline-block;
          transition: all 0.3s ease;
          text-decoration: none;
          background: transparent;
        }

        .ds-ghost-btn:hover {
          border-color: var(--ds-accent);
          color: var(--ds-accent);
        }

        .ds-section {
          position: relative;
          z-index: 1;
        }

        .ds-section-alt {
          background-color: var(--ds-bg-alt);
        }
      `}</style>

      <div className="relative z-10">
        <Hero />
        <div className="ds-band" />
        <Features />
        <div className="ds-band" />
        <HowItWorks />
        <div className="ds-band" />
        <Capabilities />
        <div className="ds-band" />
        <Stats />
        <div className="ds-band" />
        <Integrations />
        <div className="ds-band" />
        <Footer />
      </div>
    </div>
  );
}
