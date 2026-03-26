"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section divider */}
        <div className="de-divider mb-16" />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="de-section-label mb-4">Ecosystem</p>
          <h2
            className="de-heading"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            Integrations
          </h2>
        </motion.div>

        {/* Logo-style structured grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center justify-center text-center py-10 px-6"
              style={{
                border: "1px solid var(--de-line)",
                marginTop: "-1px",
                marginLeft: "-1px",
              }}
            >
              {/* Integration name as stylized monogram */}
              <div
                className="font-serif-editorial mb-3"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "var(--de-heading)",
                  letterSpacing: "-0.02em",
                }}
              >
                {integration.name}
              </div>

              {/* Thin separator */}
              <div
                className="mb-3"
                style={{
                  width: "20px",
                  height: "1px",
                  backgroundColor: "var(--de-line-strong)",
                }}
              />

              {/* Description */}
              <p
                className="font-sans-editorial"
                style={{
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "var(--de-muted)",
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
