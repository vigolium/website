"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 de-ascii-bg overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Thin top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto mb-16"
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "var(--de-line-strong)",
            transformOrigin: "center",
          }}
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="de-section-label mb-8"
        >
          Vigolium Security Scanner
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="de-heading mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            lineHeight: 1.1,
          }}
        >
          {hero.headline}
        </motion.h1>

        {/* Decorative divider under headline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mb-8"
          style={{
            width: "120px",
            height: "1px",
            backgroundColor: "var(--de-accent)",
            transformOrigin: "center",
          }}
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-sans-editorial mb-12"
          style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            lineHeight: 1.8,
            color: "var(--de-muted)",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            fontWeight: 300,
          }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a href={hero.ctaPrimary.href} className="de-accent-btn">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="de-ghost-btn">
            {hero.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-20 flex items-center justify-center gap-3"
          style={{ color: "var(--de-muted)", fontSize: "0.65rem", letterSpacing: "0.15em" }}
        >
          <span style={{ width: "30px", height: "1px", backgroundColor: "var(--de-line-strong)", display: "inline-block" }} />
          <span className="font-sans-editorial uppercase">Scroll to explore</span>
          <span style={{ width: "30px", height: "1px", backgroundColor: "var(--de-line-strong)", display: "inline-block" }} />
        </motion.div>
      </div>
    </section>
  );
}
