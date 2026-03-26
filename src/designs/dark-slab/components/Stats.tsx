"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section
      className="ds-section relative px-6 py-24 md:py-32"
      style={{ backgroundColor: "var(--ds-bg)" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="ds-section-label mb-4">By The Numbers</p>
          <h2
            className="ds-heading"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Performance Metrics
          </h2>
          <div
            className="mx-auto"
            style={{
              height: "4px",
              width: "80px",
              background: "var(--ds-accent)",
              marginTop: "1rem",
            }}
          />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center py-10 px-6"
              style={{
                borderRight:
                  i < 3 ? "3px solid var(--ds-border)" : "none",
                borderBottom: "3px solid var(--ds-border)",
              }}
            >
              {/* Value */}
              <div
                className="ds-slab"
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  color: "var(--ds-accent)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                }}
              >
                {stat.value}
              </div>

              {/* Thick mini divider */}
              <div
                className="mx-auto"
                style={{
                  width: "32px",
                  height: "3px",
                  background: "var(--ds-border-thick)",
                  marginBottom: "0.75rem",
                }}
              />

              {/* Label */}
              <p
                className="ds-body"
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: "var(--ds-muted)",
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
