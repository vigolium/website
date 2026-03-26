"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pdd-section-label">By the Numbers</span>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: "var(--pdd-heading)" }}
          >
            Trusted at scale
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-lg"
              style={{
                backgroundColor: "var(--pdd-surface)",
                border: "1px solid var(--pdd-border)",
                borderRadius: "8px",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2 tracking-tight"
                style={{ color: "var(--pdd-blue)" }}
              >
                {stat.value}
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--pdd-muted)" }}
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
