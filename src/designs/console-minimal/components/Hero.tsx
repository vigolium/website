"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="cm-section min-h-screen flex items-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="cm-prompt cm-mono mb-2">
            user@vigolium:~$
          </p>
          <p className="cm-cmd cm-mono mb-8">
            ./vigolium --about<span className="cm-cursor">█</span>
          </p>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="cm-mono text-xs mb-1"
            style={{ color: "var(--cm-green-muted)" }}
          >
            VIGOLIUM v2.4.0 — Agentic Vulnerability Scanner
          </p>
          <p
            className="cm-mono text-xs"
            style={{ color: "var(--cm-border)" }}
          >
            ════════════════════════════════════════════════
          </p>
        </motion.div>

        <motion.h1
          className="cm-mono font-bold leading-[1.2] mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
            color: "var(--cm-green)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          className="cm-output cm-mono mb-10"
          style={{ maxWidth: "640px" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          &gt; {hero.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href={hero.ctaPrimary.href} className="cm-cta cm-mono">
            [ {hero.ctaPrimary.label} ]
          </a>
          <a href={hero.ctaSecondary.href} className="cm-cta-ghost cm-mono">
            [ {hero.ctaSecondary.label} ]
          </a>
        </motion.div>
      </div>
    </section>
  );
}
