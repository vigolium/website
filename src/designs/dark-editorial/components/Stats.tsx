"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative px-6 py-24 md:py-32 de-ascii-bg overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="de-section-label mb-4">By The Numbers</p>
          <h2
            className="de-heading"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            Performance at Scale
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center py-10 px-4"
              style={{
                borderLeft: i > 0 ? "1px solid var(--de-line)" : "none",
              }}
            >
              {/* Value */}
              <div
                className="font-serif-editorial mb-3"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  color: "var(--de-heading)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>

              {/* Thin orange accent line */}
              <div
                className="mx-auto mb-4"
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--de-accent)",
                }}
              />

              {/* Label */}
              <p
                className="font-sans-editorial"
                style={{
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "var(--de-muted)",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
