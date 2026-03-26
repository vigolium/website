"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="vg-label mb-4">Integrations</p>
          <h2
            className="vg-heading"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            Fits into your workflow
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="vg-card px-7 py-5"
              style={{
                backgroundColor: "rgba(255,255,255,0.01)",
                minWidth: "200px",
                maxWidth: "240px",
                flex: "1 1 200px",
              }}
            >
              <h3
                className="vg-heading mb-1.5"
                style={{ fontSize: "0.9rem" }}
              >
                {integration.name}
              </h3>
              <p
                style={{
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "#6b7280",
                  fontWeight: 300,
                }}
              >
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
