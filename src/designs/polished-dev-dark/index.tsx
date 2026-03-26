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
  weight: ["300", "400", "500", "600", "700"],
});

export function PolishedDevDarkPage() {
  return (
    <div
      className={`${inter.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        backgroundColor: "var(--pdd-bg)",
        color: "var(--pdd-body)",
      }}
    >
      <style jsx global>{`
        :root {
          --pdd-bg: #0f1117;
          --pdd-surface: #1a1d2b;
          --pdd-surface-hover: #1f2335;
          --pdd-border: #2a2f42;
          --pdd-border-light: #353b52;
          --pdd-heading: #e2e8f0;
          --pdd-body: #94a3b8;
          --pdd-muted: #64748b;
          --pdd-blue: #3b82f6;
          --pdd-blue-hover: #2563eb;
          --pdd-blue-glow: rgba(59, 130, 246, 0.15);
          --pdd-blue-subtle: rgba(59, 130, 246, 0.08);
          --pdd-white: #f8fafc;
        }

        .pdd-card {
          background-color: var(--pdd-surface);
          border: 1px solid var(--pdd-border);
          border-radius: 8px;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .pdd-card:hover {
          border-color: var(--pdd-border-light);
          transform: translateY(-2px);
        }

        .pdd-btn-primary {
          background-color: var(--pdd-blue);
          color: #fff;
          font-weight: 500;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 0.9rem;
          letter-spacing: 0.01em;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pdd-btn-primary:hover {
          background-color: var(--pdd-blue-hover);
          box-shadow: 0 0 24px var(--pdd-blue-glow);
        }

        .pdd-btn-secondary {
          background-color: transparent;
          color: var(--pdd-body);
          font-weight: 500;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 0.9rem;
          letter-spacing: 0.01em;
          border: 1px solid var(--pdd-border);
          transition: border-color 0.2s ease, color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pdd-btn-secondary:hover {
          border-color: var(--pdd-border-light);
          color: var(--pdd-heading);
        }

        .pdd-section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--pdd-blue);
          margin-bottom: 16px;
        }

        .pdd-gradient-border {
          position: relative;
          border-radius: 12px;
          padding: 2px;
          background: linear-gradient(
            135deg,
            var(--pdd-blue) 0%,
            var(--pdd-border-light) 40%,
            var(--pdd-border) 100%
          );
        }

        .pdd-gradient-border-inner {
          background-color: var(--pdd-surface);
          border-radius: 10px;
          overflow: hidden;
        }

        @keyframes pdd-fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pdd-pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px var(--pdd-blue-glow);
          }
          50% {
            box-shadow: 0 0 40px var(--pdd-blue-glow);
          }
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
