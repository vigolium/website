"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="ds-section relative flex min-h-screen items-center justify-center px-6"
      style={{ backgroundColor: "var(--ds-bg)" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(194,102,42,0.03) 60px, rgba(194,102,42,0.03) 61px)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        {/* Top accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            height: "5px",
            background: "var(--ds-accent)",
            transformOrigin: "left",
            marginBottom: "3rem",
            maxWidth: "120px",
          }}
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="ds-section-label mb-6"
        >
          Vigolium Scanner
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="ds-heading mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            maxWidth: "800px",
          }}
        >
          {hero.headline}
        </motion.h1>

        {/* Thick divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            height: "3px",
            background: "var(--ds-border-thick)",
            transformOrigin: "left",
            marginBottom: "2rem",
            maxWidth: "600px",
          }}
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="ds-body mb-12"
          style={{
            fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
            lineHeight: 1.75,
            color: "var(--ds-muted)",
            maxWidth: "580px",
          }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap gap-5"
        >
          <a href={hero.ctaPrimary.href} className="ds-accent-btn">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="ds-ghost-btn">
            {hero.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Bottom decorative stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-20 flex flex-wrap gap-0"
          style={{ borderTop: "3px solid var(--ds-border-thick)" }}
        >
          {[
            { label: "Engine", value: "Go + AI" },
            { label: "Modules", value: "40+" },
            { label: "Latency", value: "<1s" },
            { label: "Status", value: "Operational" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="py-5 px-6"
              style={{
                borderRight:
                  i < 3 ? "2px solid var(--ds-border)" : "none",
                minWidth: "140px",
              }}
            >
              <div
                className="ds-section-label"
                style={{ fontSize: "0.6rem", marginBottom: "4px" }}
              >
                {item.label}
              </div>
              <div
                className="ds-slab"
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color:
                    i === 3 ? "var(--ds-accent)" : "var(--ds-heading)",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
