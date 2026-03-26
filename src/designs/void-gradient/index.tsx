"use client";

import { Inter } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400"],
});

export function VoidGradientPage() {
  return (
    <div
      className={`${inter.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 300,
        color: "#d1d5db",
        background: "linear-gradient(180deg, #0a0e1a 0%, #000000 100%)",
      }}
    >
      <style jsx global>{`
        :root {
          --vg-navy: #0a0e1a;
          --vg-black: #000000;
          --vg-heading: #f3f4f6;
          --vg-body: #d1d5db;
          --vg-muted: #6b7280;
          --vg-teal: #5eead4;
          --vg-teal-dim: rgba(94, 234, 212, 0.1);
          --vg-border: rgba(255, 255, 255, 0.08);
          --vg-glow-white: 0 0 20px rgba(255, 255, 255, 0.05);
          --vg-glow-teal: 0 0 20px rgba(94, 234, 212, 0.1);
        }

        @keyframes vgFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes vgPulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes vgFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .vg-section {
          border: 1px solid var(--vg-border);
          border-radius: 12px;
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .vg-section:hover {
          box-shadow: var(--vg-glow-white);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .vg-card {
          border: 1px solid var(--vg-border);
          border-radius: 12px;
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .vg-card:hover {
          box-shadow: var(--vg-glow-teal);
          border-color: rgba(94, 234, 212, 0.15);
        }

        .vg-heading {
          color: var(--vg-heading);
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        .vg-label {
          color: var(--vg-teal);
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
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
