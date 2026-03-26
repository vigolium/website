"use client";

import { Space_Grotesk } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

export function NoirGridPage() {
  return (
    <div
      className={`${spaceGrotesk.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-space), sans-serif",
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <style jsx global>{`
        :root {
          --ng-black: #000000;
          --ng-white: #ffffff;
          --ng-gray: #888888;
          --ng-gray-dim: #333333;
          --ng-neon: #00ffcc;
          --ng-green: #39ff14;
          --ng-line: rgba(255, 255, 255, 0.1);
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }

        @keyframes lineExpand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .ng-heading {
          font-family: var(--font-space), sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ng-white);
        }

        .ng-body {
          color: var(--ng-gray);
          line-height: 1.7;
        }

        .ng-link {
          color: var(--ng-neon);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ng-link:hover {
          color: var(--ng-green);
        }

        .ng-divider {
          width: 100%;
          height: 1px;
          background: var(--ng-line);
        }

        .ng-section {
          position: relative;
          z-index: 1;
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
