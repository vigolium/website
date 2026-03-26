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
  weight: ["300", "400", "700"],
});

export function NoirBlueprintPage() {
  return (
    <div
      className={`${jetbrainsMono.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-jetbrains), monospace",
        backgroundColor: "#0A1628",
        color: "#F8FAFC",
        cursor: "crosshair",
        background: `
          #0A1628
          repeating-linear-gradient(
            90deg,
            rgba(56, 189, 248, 0.06) 0px,
            rgba(56, 189, 248, 0.06) 1px,
            transparent 1px,
            transparent 20px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(56, 189, 248, 0.06) 0px,
            rgba(56, 189, 248, 0.06) 1px,
            transparent 1px,
            transparent 20px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(56, 189, 248, 0.12) 0px,
            rgba(56, 189, 248, 0.12) 1px,
            transparent 1px,
            transparent 80px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(56, 189, 248, 0.12) 0px,
            rgba(56, 189, 248, 0.12) 1px,
            transparent 1px,
            transparent 80px
          )
        `.replace(/\n\s+/g, " "),
      }}
    >
      {/* Global styles */}
      <style jsx global>{`
        :root {
          --bp-bg: #0a1628;
          --bp-cyan: #38bdf8;
          --bp-white: #f8fafc;
          --bp-muted: #94a3b8;
          --bp-grid: rgba(56, 189, 248, 0.12);
          --bp-dim: rgba(56, 189, 248, 0.3);
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blinkCursor {
          0%,
          100% {
            border-color: #38bdf8;
          }
          50% {
            border-color: transparent;
          }
        }

        @keyframes drawLine {
          from {
            stroke-dashoffset: 200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes iconDraw {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes unfold {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        .font-jetbrains {
          font-family: var(--font-jetbrains), monospace;
        }

        .bp-headline {
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .bp-annotation {
          font-weight: 300;
          font-style: italic;
          font-size: 0.7rem;
          color: var(--bp-muted);
        }

        .bp-corner-marks {
          position: relative;
        }

        .bp-corner-marks::before,
        .bp-corner-marks::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: rgba(56, 189, 248, 0.4);
        }

        .bp-corner-marks::before {
          top: -1px;
          left: -1px;
          border-top: 1px solid;
          border-left: 1px solid;
        }

        .bp-corner-marks::after {
          bottom: -1px;
          right: -1px;
          border-bottom: 1px solid;
          border-right: 1px solid;
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
