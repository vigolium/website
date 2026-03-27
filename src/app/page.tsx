"use client";

import { useEffect, useRef, useCallback } from "react";

import { Space_Grotesk } from "next/font/google";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Capabilities } from "@/components/Capabilities";
import { Stats } from "@/components/Stats";
import { Integrations } from "@/components/Integrations";
import { Gallery } from "@/components/Gallery";
import { Cloud } from "@/components/Cloud";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/animations";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

/* ── Noise grain overlay ── */
function NoiseGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;

    let animId: number;
    const draw = () => {
      const imageData = ctx.createImageData(256, 256);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 12; // very subtle
      }
      ctx.putImageData(imageData, 0, 0);
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9998]"
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.4,
        mixBlendMode: "overlay",
      }}
    />
  );
}

/* ── Hex watermark ── */
function HexWatermark() {
  const containerRef = useRef<HTMLDivElement>(null);

  const generateHex = useCallback(() => {
    const chars = "0123456789abcdef";
    const lines: string[] = [];
    for (let i = 0; i < 80; i++) {
      let line = "";
      for (let j = 0; j < 8; j++) {
        for (let k = 0; k < 2; k++) {
          line += chars[Math.floor(Math.random() * 16)];
        }
        line += " ";
      }
      lines.push(line);
    }
    return lines.join("\n");
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const pre = el.querySelector("pre");
    if (!pre) return;

    let animId: number;
    let frame = 0;
    const tick = () => {
      frame++;
      if (frame % 6 === 0) {
        pre.textContent = generateHex();
      }
      animId = requestAnimationFrame(tick);
    };
    pre.textContent = generateHex();
    tick();
    return () => cancelAnimationFrame(animId);
  }, [generateHex]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed z-0 hidden lg:block"
      style={{
        top: 0,
        right: 0,
        width: "200px",
        height: "100%",
        overflow: "hidden",
        opacity: 0.04,
      }}
    >
      <pre
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
          lineHeight: "14px",
          color: "#50fa7b",
          whiteSpace: "pre",
          padding: "20px 10px",
        }}
      />
    </div>
  );
}

const SECTION_IDS = ["features", "how-it-works", "capabilities", "stats", "integrations", "gallery", "cloud"];

function HashTracker() {
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            history.replaceState(null, "", `#${id}`);
            return;
          }
        }
        // If no tracked section is visible, clear the hash (hero area)
        if (window.scrollY < window.innerHeight / 2) {
          history.replaceState(null, "", window.location.pathname);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return null;
}

export default function Page() {
  return (
    <div
      className={`${spaceGrotesk.variable} relative min-h-screen overflow-x-hidden`}
      style={{
        fontFamily: "var(--font-space), sans-serif",
        backgroundColor: "#1c1b19",
        color: "#fce8c3",
      }}
    >
      {/* Scroll progress bar */}
      <ScrollProgress />
      <HashTracker />

      {/* Noise grain */}
      <NoiseGrain />


      {/* Dot grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(252,232,195,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <style jsx global>{`
        :root {
          --ng-black: #1c1b19;
          --ng-white: #fce8c3;
          --ng-gray: #baa67f;
          --ng-gray-dim: #918175;
          --ng-neon: #50fa7b;
          --ng-green: #53bdfa;
          --ng-line: rgba(252, 232, 195, 0.1);
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

        @keyframes drawLine {
          from {
            stroke-dashoffset: 200;
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

        @keyframes scanLine {
          0% {
            top: -2px;
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0.3;
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
            filter: none;
          }
          20% {
            transform: translate(-2px, 1px);
            filter: hue-rotate(90deg);
          }
          40% {
            transform: translate(2px, -1px);
            filter: hue-rotate(-90deg);
          }
          60% {
            transform: translate(-1px, -1px);
            filter: hue-rotate(180deg);
          }
          80% {
            transform: translate(1px, 2px);
            filter: none;
          }
        }

        @keyframes sonarPing {
          0% {
            transform: scale(0.5);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes borderDraw {
          0% {
            clip-path: polygon(0 0, 0 0, 0 0, 0 0);
          }
          25% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          }
          50% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          75% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px #50fa7b; }
          50% { opacity: 0.5; box-shadow: 0 0 8px #50fa7b; }
        }

        @keyframes dataFlow {
          0% { stroke-dashoffset: 14; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes ctaGlowPulse {
          0%, 100% {
            box-shadow: 0 0 4px rgba(80,250,123,0.15), 0 0 16px rgba(80,250,123,0.08);
          }
          50% {
            box-shadow: 0 0 8px rgba(80,250,123,0.3), 0 0 28px rgba(80,250,123,0.15);
          }
        }

        .cta-glow-pulse {
          animation: ctaGlowPulse 2.5s ease-in-out infinite;
        }

        .cta-glow-pulse:hover {
          animation: none;
          box-shadow: 0 0 12px rgba(80,250,123,0.4), 0 0 32px rgba(80,250,123,0.2);
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
          color: #f75341;
        }

        .ng-divider {
          width: 100%;
          height: 1px;
          background: var(--ng-line);
        }

        .ng-section {
          position: relative;
          z-index: 1;
          scroll-margin-top: 2rem;
        }

        .ngb-annotation {
          font-weight: 300;
          font-style: italic;
          font-size: 0.85rem;
          color: rgba(186, 166, 127, 0.7);
        }

        .ngb-corner-marks {
          position: relative;
        }

        .ngb-corner-marks::before,
        .ngb-corner-marks::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #50fa7b;
        }

        .ngb-corner-marks::before {
          top: -1px;
          left: -1px;
          border-top: 2px solid;
          border-left: 2px solid;
        }

        .ngb-corner-marks::after {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }
      `}</style>

      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Capabilities />
        <Stats />
        <Integrations />
        <Gallery />
        <Cloud />
        <Footer />
      </div>
    </div>
  );
}
