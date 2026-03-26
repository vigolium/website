"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
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
            03 / Capabilities
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "1.6rem" }}
          >
            What We Detect
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

        {/* Strict 2-column grid with rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative flex items-start gap-4 p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                marginTop: "-1px",
                marginLeft: "-1px",
              }}
            >
              {/* Marker */}
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              />

              <div>
                <h3
                  className="ng-heading mb-1"
                  style={{ fontSize: "0.85rem" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="ng-body"
                  style={{ fontSize: "0.75rem" }}
                >
                  {cap.detail}
                </p>
              </div>

              {/* Index */}
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "10px",
                  fontSize: "0.55rem",
                  letterSpacing: "0.15em",
                  color: "#333",
                  fontWeight: 500,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
