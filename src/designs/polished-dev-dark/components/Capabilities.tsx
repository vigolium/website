"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";
import { Shield } from "lucide-react";

export function Capabilities() {
  return (
    <section
      className="px-4 py-24 md:py-32"
      style={{ backgroundColor: "var(--pdd-surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pdd-section-label">Capabilities</span>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: "var(--pdd-heading)" }}
          >
            Comprehensive vulnerability coverage
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "var(--pdd-body)" }}
          >
            From common web flaws to advanced attack chains, Vigolium has you covered.
          </p>
        </motion.div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="p-5 rounded-lg transition-colors duration-300"
              style={{
                backgroundColor: "var(--pdd-bg)",
                border: "1px solid var(--pdd-border)",
                borderRadius: "8px",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileHover={{
                borderColor: "rgba(59, 130, 246, 0.25)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="mt-0.5 w-8 h-8 rounded flex-shrink-0 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--pdd-blue-subtle)",
                  }}
                >
                  <Shield size={15} className="text-blue-400" />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--pdd-heading)" }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--pdd-muted)" }}
                  >
                    {cap.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
