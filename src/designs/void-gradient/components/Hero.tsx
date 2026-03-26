"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle radial glow behind content */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(94,234,212,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="vg-label mb-8"
        >
          Vulnerability Scanner
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="vg-heading mb-8"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            lineHeight: 1.25,
          }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
            lineHeight: 1.8,
            maxWidth: "560px",
            margin: "0 auto 3rem",
            color: "#9ca3af",
            fontWeight: 300,
          }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href={hero.ctaPrimary.href}
            className="relative px-8 py-3 transition-all duration-400"
            style={{
              border: "1px solid rgba(94,234,212,0.3)",
              borderRadius: "12px",
              color: "#f3f4f6",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "0.04em",
              backgroundColor: "rgba(94,234,212,0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(94,234,212,0.12)";
              e.currentTarget.style.boxShadow =
                "0 0 24px rgba(94,234,212,0.12)";
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(94,234,212,0.06)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.3)";
            }}
          >
            {hero.ctaPrimary.label}
          </a>

          <a
            href={hero.ctaSecondary.href}
            className="relative px-8 py-3 transition-all duration-400"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              color: "#9ca3af",
              fontSize: "0.875rem",
              fontWeight: 300,
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "#9ca3af";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {hero.ctaSecondary.label}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, rgba(94,234,212,0.3), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
