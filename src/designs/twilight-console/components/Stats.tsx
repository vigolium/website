"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

// Simple sparkline paths for decoration
const sparklines = [
  "M0 20 L8 16 L16 18 L24 10 L32 12 L40 6 L48 8 L56 4 L64 2",
  "M0 18 L8 14 L16 16 L24 8 L32 14 L40 10 L48 4 L56 8 L64 6",
  "M0 16 L8 20 L16 14 L24 12 L32 18 L40 8 L48 10 L56 6 L64 4",
  "M0 14 L8 10 L16 18 L24 16 L32 6 L40 12 L48 8 L56 4 L64 2",
];

const accentColors = [
  "var(--twi-lavender)",
  "var(--twi-green)",
  "var(--twi-peach)",
  "var(--twi-blue)",
];

export function Stats() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="twi-pill twi-pill-yellow twi-mono mb-4 inline-block">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--twi-yellow)" }}
            />
            metrics
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-4"
            style={{ color: "var(--twi-text)" }}
          >
            By the numbers
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="twi-panel p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Sparkline decoration */}
              <div className="absolute top-4 right-4 opacity-30">
                <svg
                  width="64"
                  height="24"
                  viewBox="0 0 64 24"
                  fill="none"
                >
                  <path
                    d={sparklines[i % sparklines.length]}
                    stroke={accentColors[i % accentColors.length]}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Value */}
              <div
                className="twi-mono text-3xl md:text-4xl font-bold mb-3"
                style={{ color: accentColors[i % accentColors.length] }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--twi-muted)" }}
              >
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-30"
                style={{
                  backgroundColor: accentColors[i % accentColors.length],
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
