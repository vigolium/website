"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
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
          05 / Integrations
        </motion.p>

        {/* Section headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="om-headline mb-20"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Connects To Everything
        </motion.h2>

        {/* Integrations list */}
        <div>
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="om-border-t"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "2rem 0",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {integration.name}
              </h3>
              <p
                className="om-body"
                style={{ fontSize: "0.78rem", textAlign: "right" }}
              >
                {integration.description}
              </p>
            </motion.div>
          ))}
          {/* Final border */}
          <div className="om-border-t" />
        </div>
      </div>
    </section>
  );
}
