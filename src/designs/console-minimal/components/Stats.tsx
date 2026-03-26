"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

const envKeys = [
  "SCAN_VOLUME",
  "MODULE_COUNT",
  "FALSE_POSITIVE_RATE",
  "INIT_LATENCY",
];

export function Stats() {
  return (
    <section className="cm-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="cm-prompt cm-mono">user@vigolium:~$ </span>
          <span className="cm-cmd cm-mono">
            vigolium --stats<span className="cm-cursor">█</span>
          </span>
        </motion.div>

        <motion.p
          className="cm-mono text-xs mb-6"
          style={{ color: "var(--cm-green-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          Environment variables — runtime metrics:
        </motion.p>

        <div className="space-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="py-3"
              style={{
                borderBottom: "1px solid var(--cm-border)",
              }}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <p className="cm-mono text-sm">
                <span style={{ color: "var(--cm-amber)" }}>
                  {envKeys[i] || `METRIC_${i}`}
                </span>
                <span style={{ color: "var(--cm-green-muted)" }}>=</span>
                <span className="font-bold" style={{ color: "var(--cm-green)" }}>
                  &quot;{stat.value}&quot;
                </span>
              </p>
              <p
                className="cm-mono text-xs mt-1 pl-4"
                style={{ color: "var(--cm-green-dim)" }}
              >
                # {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
