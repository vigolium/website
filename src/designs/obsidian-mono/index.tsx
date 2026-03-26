"use client";

import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Capabilities } from "./components/Capabilities";
import { Stats } from "./components/Stats";
import { Integrations } from "./components/Integrations";
import { Footer } from "./components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export function ObsidianMonoPage() {
  return (
    <div
      className={`${bebasNeue.variable} ${jetbrainsMono.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <style jsx global>{`
        :root {
          --om-black: #000000;
          --om-white: #ffffff;
          --om-gray: #888888;
          --om-border: rgba(255, 255, 255, 0.12);
          --om-blue: #0066ff;
        }

        @keyframes omFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes omLineReveal {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .om-headline {
          font-family: var(--font-bebas), "Arial Narrow", sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 0.95;
          font-weight: 400;
        }

        .om-mono {
          font-family: var(--font-mono), monospace;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--om-gray);
        }

        .om-body {
          font-family: var(--font-mono), monospace;
          font-weight: 300;
          color: var(--om-gray);
          line-height: 1.7;
          font-size: 0.875rem;
        }

        .om-border-b {
          border-bottom: 1px solid var(--om-border);
        }

        .om-border-t {
          border-top: 1px solid var(--om-border);
        }

        .om-border {
          border: 1px solid var(--om-border);
        }

        .om-section {
          padding: 8rem 2rem;
        }

        @media (min-width: 768px) {
          .om-section {
            padding: 10rem 4rem;
          }
        }

        @media (min-width: 1024px) {
          .om-section {
            padding: 12rem 6rem;
          }
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
