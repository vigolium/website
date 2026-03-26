"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="vg-label mb-4">By the Numbers</p>
          <h2
            className="vg-heading"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            Performance at scale
          </h2>
        </motion.div>

        <div
          className="vg-section p-10"
          style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className="vg-heading mb-2"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    fontWeight: 300,
                    color: "#5eead4",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    color: "#6b7280",
                    fontWeight: 300,
                    maxWidth: "180px",
                    margin: "0 auto",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
