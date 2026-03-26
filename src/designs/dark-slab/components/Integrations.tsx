"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
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
          <p className="ds-section-label mb-4">Ecosystem</p>
          <h2
            className="ds-heading"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Integrations
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

        {/* Integration cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="ds-card"
            >
              {/* Name */}
              <h3
                className="ds-heading mb-2"
                style={{ fontSize: "1.1rem", fontWeight: 700 }}
              >
                {item.name}
              </h3>

              {/* Description */}
              <p
                className="ds-body"
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  color: "var(--ds-muted)",
                  fontWeight: 400,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
