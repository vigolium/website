"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section
      className="ds-section ds-section-alt relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="ds-section-label mb-4">Full Spectrum</p>
          <h2
            className="ds-heading"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Detection Capabilities
          </h2>
          <div
            style={{
              height: "4px",
              width: "80px",
              background: "var(--ds-accent)",
              marginTop: "1rem",
            }}
          />
        </motion.div>

        {/* Capabilities list */}
        <div>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 py-6"
              style={{
                borderBottom: "2px solid var(--ds-border)",
                borderLeft: "5px solid var(--ds-accent)",
                paddingLeft: "1.5rem",
                marginBottom: "2px",
              }}
            >
              {/* Number */}
              <span
                className="ds-slab shrink-0"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  color: "rgba(194, 102, 42, 0.4)",
                  width: "48px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="ds-heading shrink-0"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  width: "220px",
                }}
              >
                {cap.title}
              </h3>

              {/* Detail */}
              <p
                className="ds-body flex-1"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--ds-muted)",
                  fontWeight: 400,
                }}
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
