"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="tb-section min-h-screen flex items-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="tb-label tb-mono block mb-8">
            // vulnerability scanner
          </span>
        </motion.div>

        <motion.h1
          className="tb-mono font-bold leading-[1.1] mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--tb-white)",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          className="tb-mono leading-relaxed mb-12"
          style={{
            fontSize: "0.9375rem",
            color: "var(--tb-muted)",
            maxWidth: "640px",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href={hero.ctaPrimary.href} className="tb-cta tb-mono">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="tb-cta-ghost tb-mono">
            {hero.ctaSecondary.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
