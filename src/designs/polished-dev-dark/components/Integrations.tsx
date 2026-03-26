"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";
import { Plug } from "lucide-react";

export function Integrations() {
  return (
    <section
      className="px-4 py-24 md:py-32"
      style={{ backgroundColor: "var(--pdd-surface)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pdd-section-label">Integrations</span>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: "var(--pdd-heading)" }}
          >
            Fits into your workflow
          </h2>
          <p
            className="mt-4 text-base max-w-lg mx-auto"
            style={{ color: "var(--pdd-body)" }}
          >
            Connect Vigolium to the tools you already use.
          </p>
        </motion.div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              className="flex items-start gap-4 p-5 rounded-lg"
              style={{
                backgroundColor: "var(--pdd-bg)",
                border: "1px solid var(--pdd-border)",
                borderRadius: "8px",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <div
                className="w-9 h-9 rounded flex-shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor: "var(--pdd-blue-subtle)",
                }}
              >
                <Plug size={16} className="text-blue-400" />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--pdd-heading)" }}
                >
                  {integration.name}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--pdd-muted)" }}
                >
                  {integration.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
