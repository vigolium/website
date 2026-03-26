"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
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
          INTEGRATIONS
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              className="py-6 md:py-8"
              style={{
                borderBottom: "1px solid var(--tb-border)",
                borderRight:
                  (i + 1) % 3 !== 0 ? "1px solid var(--tb-border)" : "none",
                paddingLeft: i % 3 !== 0 ? "1.5rem" : "0",
                paddingRight: (i + 1) % 3 !== 0 ? "1.5rem" : "0",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <h3
                className="tb-mono text-sm font-bold mb-2"
                style={{ color: "var(--tb-white)" }}
              >
                {item.name}
              </h3>
              <p
                className="tb-mono text-xs"
                style={{ color: "var(--tb-muted)" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
