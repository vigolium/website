"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";
import { RegistrationMark } from "./decorators";

export function Integrations() {
  return (
    <section
      className="ng-section px-6 py-16 md:py-20"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="ngb-annotation block mb-1">// SECTION 05</span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            05 / Ecosystem
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "2rem" }}
          >
            Integrations
          </h2>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#50fa7b",
              marginTop: "12px",
            }}
          />
        </motion.div>

        {/* Row-based list */}
        <div className="grid grid-cols-1 gap-0">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative grid grid-cols-12 gap-0"
              style={{
                borderBottom: "1px dashed rgba(255,255,255,0.08)",
              }}
            >
              {/* Registration mark */}
              <div className="col-span-1 relative flex items-center py-5">
                <RegistrationMark className="top-1/2 left-0 -translate-y-1/2" />
                <span
                  className="ngb-annotation ml-4"
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(80, 250, 123, 0.5)",
                  }}
                >
                  INTG-{String(i + 1).padStart(2, "0")}
                </span>
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
                  style={{ fontSize: "1rem" }}
                >
                  {integration.name}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-7 flex items-center py-5 px-6">
                <p
                  className="ng-body"
                  style={{ fontSize: "0.9rem" }}
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
