"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
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
            vigolium --integrations<span className="cm-cursor">█</span>
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
          Supported integration targets:
        </motion.p>

        <div className="space-y-0">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
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
                <span style={{ color: "var(--cm-green-muted)" }}>
                  ├──{" "}
                </span>
                <span className="font-bold" style={{ color: "var(--cm-green)" }}>
                  {integration.name}
                </span>
              </p>
              <p
                className="cm-mono text-xs mt-1"
                style={{ color: "var(--cm-green-dim)" }}
              >
                <span style={{ color: "var(--cm-green-muted)" }}>
                  │{"   "}
                </span>
                {integration.description}
              </p>
            </motion.div>
          ))}

          <motion.p
            className="cm-mono text-xs py-3"
            style={{ color: "var(--cm-green-muted)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            └── {integrations.length} integrations available
          </motion.p>
        </div>
      </div>
    </section>
  );
}
