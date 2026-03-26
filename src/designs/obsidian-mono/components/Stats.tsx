"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="om-section om-border-t">
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="om-mono mb-20"
        >
          04 / Numbers
        </motion.p>

        {/* Stats grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                borderLeft: "1px solid var(--om-border)",
                padding: "3rem 2.5rem",
              }}
            >
              {/* Value */}
              <p
                className="om-headline"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  color: "#ffffff",
                  marginBottom: "1.5rem",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p className="om-body" style={{ fontSize: "0.78rem", maxWidth: "200px" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
