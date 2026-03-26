"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="tb-section">
      <div className="max-w-5xl mx-auto">
        <motion.span
          className="tb-label tb-mono block mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          BY THE NUMBERS
        </motion.span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="py-8"
              style={{
                borderRight:
                  i < stats.length - 1 ? "1px solid var(--tb-border)" : "none",
                paddingLeft: i > 0 ? "1.5rem" : "0",
                paddingRight: i < stats.length - 1 ? "1.5rem" : "0",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span
                className="tb-mono block text-3xl md:text-4xl font-bold mb-3"
                style={{ color: "var(--tb-accent)" }}
              >
                {stat.value}
              </span>
              <span
                className="tb-mono block text-xs leading-relaxed"
                style={{ color: "var(--tb-muted)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
