"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export function MidnightGlassPage() {
  return (
    <div
      className={`${plusJakarta.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-jakarta), sans-serif",
        background: "linear-gradient(180deg, #1a0533 0%, #0d0015 30%, #000000 100%)",
        color: "#e4e4e7",
      }}
    >
      <style jsx global>{`
        :root {
          --mg-bg: #0a0014;
          --mg-surface: rgba(255, 255, 255, 0.05);
          --mg-border: rgba(255, 255, 255, 0.1);
          --mg-border-hover: rgba(255, 255, 255, 0.18);
          --mg-text: #ffffff;
          --mg-body: #b4b4b4;
          --mg-muted: #737380;
          --mg-accent: #a855f7;
          --mg-accent-dim: #8b5cf6;
          --mg-accent-glow: rgba(168, 85, 247, 0.15);
          --mg-violet: #7c3aed;
          --mg-card-blur: blur(16px);
          --mg-radius: 16px;
        }

        .mg-glass {
          background: var(--mg-surface);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--mg-border);
          border-radius: var(--mg-radius);
          box-shadow: 0 0 40px var(--mg-accent-glow);
        }

        .mg-glass:hover {
          border-color: var(--mg-border-hover);
          box-shadow: 0 0 60px rgba(168, 85, 247, 0.2);
        }

        .mg-glass-subtle {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--mg-radius);
        }

        .mg-heading {
          font-family: var(--font-jakarta), sans-serif;
          font-weight: 800;
          color: var(--mg-text);
          letter-spacing: -0.02em;
        }

        .mg-body {
          color: var(--mg-body);
          line-height: 1.7;
        }

        .mg-accent-text {
          background: linear-gradient(135deg, #a855f7, #8b5cf6, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mg-btn-primary {
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-family: var(--font-jakarta), sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
        }

        .mg-btn-primary:hover {
          box-shadow: 0 0 50px rgba(168, 85, 247, 0.5);
          transform: translateY(-1px);
        }

        .mg-btn-secondary {
          background: rgba(255, 255, 255, 0.06);
          color: #d4d4d8;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          font-weight: 600;
          font-family: var(--font-jakarta), sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mg-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        @keyframes mg-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes mg-pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes mg-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .mg-float-1 { animation: mg-float 8s ease-in-out infinite; }
        .mg-float-2 { animation: mg-float 10s ease-in-out infinite 2s; }
        .mg-float-3 { animation: mg-float 12s ease-in-out infinite 4s; }

        .mg-section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--mg-accent);
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
        }
      `}</style>

      {/* Floating background orbs */}
      <div
        className="mg-float-1"
        style={{
          position: "fixed",
          top: "10%",
          left: "15%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="mg-float-2"
        style={{
          position: "fixed",
          top: "50%",
          right: "10%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="mg-float-3"
        style={{
          position: "fixed",
          bottom: "10%",
          left: "40%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
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
