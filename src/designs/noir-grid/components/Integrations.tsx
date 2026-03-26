"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
  return (
    <section
      className="ng-section px-6 py-24 md:py-32"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#555",
            }}
          >
            05 / Ecosystem
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "1.6rem" }}
          >
            Integrations
          </h2>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#00ffcc",
              marginTop: "12px",
            }}
          />
        </motion.div>

        {/* Row-based list with strict grid alignment */}
        <div className="grid grid-cols-1 gap-0">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="grid grid-cols-12 gap-0"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Index */}
              <div
                className="col-span-1 flex items-center py-5"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: "#333",
                  fontWeight: 500,
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Name */}
              <div
                className="col-span-4 flex items-center py-5 px-6"
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3
                  className="ng-heading"
                  style={{ fontSize: "0.82rem" }}
                >
                  {integration.name}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-7 flex items-center py-5 px-6">
                <p
                  className="ng-body"
                  style={{ fontSize: "0.78rem" }}
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
