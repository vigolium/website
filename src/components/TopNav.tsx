"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { hero } from "@/lib/content";

export function TopNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-0 left-0 right-0 z-20 px-6 py-5"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <a href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              border: "1.5px solid rgba(255,160,50,0.7)",
              borderRadius: "4px",
              animation: "orangeGlow 3s ease-in-out infinite",
            }}
          >
            <div
              className="logo-glitch"
              style={{ display: "block" }}
            >
              <Image
                src="https://cdn.vigolium.com/assets/vigolium-logo-small.png"
                alt="Vigolium"
                width={32}
                height={32}
                style={{ borderRadius: "4px", display: "block" }}
              />
            </div>
            <style jsx global>{`
              .logo-glitch:hover {
                animation: glitch 0.3s ease-in-out;
              }
              @keyframes orangeGlow {
                0%, 100% {
                  box-shadow: 0 0 6px rgba(255,140,30,0.3), 0 0 14px rgba(255,120,0,0.15);
                }
                50% {
                  box-shadow: 0 0 10px rgba(255,140,30,0.5), 0 0 24px rgba(255,120,0,0.3);
                }
              }
            `}</style>
          </div>
          <span
            className="ng-heading"
            style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}
          >
            Vigolium
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#quick-start"
            title="Try Vigolium Open-Source"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              fontFamily: "monospace",
              color: "#fbb829",
              padding: "4px 12px",
              border: "1px solid rgba(251,184,41,0.3)",
              borderRadius: "3px",
              backgroundColor: "rgba(251,184,41,0.05)",
              textDecoration: "none",
              transition: "box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 12px rgba(251,184,41,0.3), 0 0 24px rgba(251,184,41,0.15)";
              e.currentTarget.style.borderColor = "rgba(251,184,41,0.6)";
              e.currentTarget.style.backgroundColor = "rgba(251,184,41,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(251,184,41,0.3)";
              e.currentTarget.style.backgroundColor = "rgba(251,184,41,0.05)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="hidden sm:inline" style={{ textTransform: "uppercase" }}>Try Vigolium Open-Source</span>
          </a>
          <a
            href={hero.ctaSecondary.href}
            title="Documentation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              fontFamily: "monospace",
              color: "#60a5fa",
              padding: "4px 12px",
              border: "1px solid rgba(96,165,250,0.3)",
              borderRadius: "3px",
              backgroundColor: "rgba(96,165,250,0.05)",
              textDecoration: "none",
              transition: "box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 12px rgba(96,165,250,0.3), 0 0 24px rgba(96,165,250,0.15)";
              e.currentTarget.style.borderColor = "rgba(96,165,250,0.6)";
              e.currentTarget.style.backgroundColor = "rgba(96,165,250,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)";
              e.currentTarget.style.backgroundColor = "rgba(96,165,250,0.05)";
            }}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline" style={{ textTransform: "uppercase" }}>Documentation</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
