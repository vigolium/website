"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section className="om-section om-border-t">
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="om-mono mb-16"
        >
          03 / Capabilities
        </motion.p>

        {/* Layout: headline left, list right */}
        <div
          className="grid gap-16"
          style={{
            gridTemplateColumns: "1fr",
          }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="om-headline"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              maxWidth: "600px",
            }}
          >
            What We Detect
          </motion.h2>

          {/* Capabilities list */}
          <div
            className="grid gap-0"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="om-border-t"
                style={{ padding: "2rem 1.5rem 2rem 0" }}
              >
                <p className="om-mono" style={{ marginBottom: "0.75rem", fontSize: "0.65rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {cap.title}
                </h3>
                <p className="om-body" style={{ fontSize: "0.78rem" }}>
                  {cap.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
