"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
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
            vigolium --capabilities<span className="cm-cursor">█</span>
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
          Loaded scanner modules:
        </motion.p>

        <div className="space-y-0">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="py-3"
              style={{
                borderBottom: "1px solid var(--cm-border)",
              }}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              <p className="cm-mono text-sm">
                <span style={{ color: "var(--cm-amber)" }}>
                  [{String(i + 1).padStart(2, "0")}]
                </span>{" "}
                <span className="font-bold" style={{ color: "var(--cm-green)" }}>
                  {cap.title}
                </span>
              </p>
              <p
                className="cm-mono text-xs mt-1 pl-8"
                style={{ color: "var(--cm-green-dim)" }}
              >
                {cap.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="cm-mono text-xs mt-6"
          style={{ color: "var(--cm-green-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {capabilities.length} modules loaded — 0 errors
        </motion.p>
      </div>
    </section>
  );
}
