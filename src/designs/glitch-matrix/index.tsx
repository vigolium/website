"use client";

import { Fira_Code } from "next/font/google";
import { MatrixRain } from "./components/MatrixRain";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export function GlitchMatrixPage() {
  return (
    <div
      className={`${firaCode.variable} relative min-h-screen bg-black text-[#00FF41] overflow-x-hidden`}
      style={{ fontFamily: "var(--font-fira-code), monospace" }}
    >
      <MatrixRain />

      <style jsx global>{`
        :root {
          --matrix-green: #00FF41;
          --matrix-dim: #008F11;
          --matrix-dark: #003B00;
          --matrix-amber: #FFB000;
          --matrix-red: #FF0040;
          --matrix-muted: #00AA2A;
          --matrix-border: rgba(0, 255, 65, 0.2);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes glitchFlicker {
          0%, 100% { opacity: 1; transform: translate(0); }
          3% { opacity: 0.8; transform: translate(-2px, 1px); }
          6% { opacity: 1; transform: translate(2px, -1px); }
          9% { opacity: 0.9; transform: translate(0); }
          92% { opacity: 1; transform: translate(0); }
          94% { opacity: 0.7; transform: translate(1px, 2px); }
          96% { opacity: 1; transform: translate(-1px, -1px); }
        }

        @keyframes scanline {
          0% { top: -5%; }
          100% { top: 105%; }
        }

        .glow-text {
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
        }

        .glow-text-strong {
          text-shadow: 0 0 10px #00FF41, 0 0 20px rgba(0, 255, 65, 0.25);
        }

        .glow-border {
          box-shadow: 0 0 5px rgba(0, 255, 65, 0.3), inset 0 0 5px rgba(0, 255, 65, 0.1);
        }

        .cursor-blink {
          animation: blink 1s step-end infinite;
        }

        .glitch-hover:hover {
          animation: glitchFlicker 0.3s ease-in-out;
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
