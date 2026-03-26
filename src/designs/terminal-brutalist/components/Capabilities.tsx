"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
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
          CAPABILITIES
        </motion.span>

        <div className="space-y-0">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 py-5"
              style={{
                borderBottom: "1px solid var(--tb-border)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <h3
                className="tb-mono text-sm font-bold flex-shrink-0 md:w-56 uppercase"
                style={{ color: "var(--tb-white)" }}
              >
                {cap.title}
              </h3>
              <p
                className="tb-mono text-xs leading-relaxed"
                style={{ color: "var(--tb-muted)" }}
              >
                {cap.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
