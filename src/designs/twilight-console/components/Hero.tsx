"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  // Break headline into "code-like" lines for the syntax display
  const words = hero.headline.split(" ");
  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(" ");
  const line2 = words.slice(mid).join(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-4xl mx-auto">
        {/* IDE Window */}
        <motion.div
          className="twi-panel overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-4 h-10"
            style={{
              backgroundColor: "var(--twi-crust)",
              borderBottom: "1px solid var(--twi-overlay)",
              borderRadius: "12px 12px 0 0",
            }}
          >
            {/* Window dots */}
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#f38ba8" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#f9e2af" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#a6e3a1" }}
              />
            </div>

            {/* Title */}
            <span
              className="twi-mono text-xs"
              style={{ color: "var(--twi-muted)" }}
            >
              vigolium - main
            </span>

            <div className="w-14" />
          </div>

          {/* Tab bar */}
          <div className="twi-tab-bar">
            <div className="twi-tab active twi-mono">vigolium.ts</div>
            <div className="twi-tab twi-mono">config.yaml</div>
            <div className="twi-tab twi-mono">readme.md</div>
          </div>

          {/* Code area */}
          <div className="p-6 md:p-10" style={{ backgroundColor: "var(--twi-bg)" }}>
            <div className="twi-mono twi-code-line mb-1">
              <span className="twi-line-num">1</span>
              <span className="twi-keyword">import</span>{" "}
              <span className="twi-text">{"{"}</span>{" "}
              <span className="twi-type">Vigolium</span>{" "}
              <span className="twi-text">{"}"}</span>{" "}
              <span className="twi-keyword">from</span>{" "}
              <span className="twi-string">&quot;@vigolium/core&quot;</span>
            </div>

            <div className="twi-mono twi-code-line mb-1">
              <span className="twi-line-num">2</span>
            </div>

            <div className="twi-mono twi-code-line mb-1">
              <span className="twi-line-num">3</span>
              <span className="twi-comment">
                // {hero.subheadline}
              </span>
            </div>

            <div className="twi-mono twi-code-line mb-1">
              <span className="twi-line-num">4</span>
            </div>

            <motion.div
              className="twi-mono twi-code-line mb-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="twi-line-num">5</span>
              <span className="twi-keyword">const</span>{" "}
              <span className="twi-func">scanner</span>{" "}
              <span style={{ color: "var(--twi-text)" }}>=</span>{" "}
              <span className="twi-keyword">new</span>{" "}
              <span className="twi-type">Vigolium</span>
              <span style={{ color: "var(--twi-text)" }}>({"{"}</span>
            </motion.div>

            <motion.div
              className="twi-mono twi-code-line mb-1 pl-8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="twi-line-num">6</span>
              {"  "}
              <span className="twi-text">mission:</span>{" "}
              <span className="twi-string">&quot;{line1}&quot;</span>
              <span style={{ color: "var(--twi-text)" }}>,</span>
            </motion.div>

            <motion.div
              className="twi-mono twi-code-line mb-1 pl-8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="twi-line-num">7</span>
              {"  "}
              <span className="twi-text">vision:</span>{" "}
              <span className="twi-string">&quot;{line2}&quot;</span>
              <span style={{ color: "var(--twi-text)" }}>,</span>
            </motion.div>

            <motion.div
              className="twi-mono twi-code-line mb-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="twi-line-num">8</span>
              <span style={{ color: "var(--twi-text)" }}>{"}"});</span>
            </motion.div>

            <div className="twi-mono twi-code-line mb-1">
              <span className="twi-line-num">9</span>
            </div>

            <motion.div
              className="twi-mono twi-code-line"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="twi-line-num">10</span>
              <span className="twi-func">scanner</span>
              <span style={{ color: "var(--twi-text)" }}>.</span>
              <span className="twi-func">start</span>
              <span style={{ color: "var(--twi-text)" }}>()</span>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA buttons below the editor */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href={hero.ctaPrimary.href}
            className="twi-mono inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-600 transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: "var(--twi-lavender)",
              color: "var(--twi-crust)",
              fontWeight: 600,
            }}
          >
            <span style={{ opacity: 0.7 }}>$</span> {hero.ctaPrimary.label}
          </a>

          <a
            href={hero.ctaSecondary.href}
            className="twi-mono inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:brightness-125"
            style={{
              backgroundColor: "var(--twi-overlay)",
              color: "var(--twi-subtext)",
              fontWeight: 500,
            }}
          >
            {hero.ctaSecondary.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
