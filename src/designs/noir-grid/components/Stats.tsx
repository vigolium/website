"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
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
            04 / Metrics
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "1.6rem" }}
          >
            By The Numbers
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

        {/* 4-column strict grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-8 text-center"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                marginTop: "-1px",
                marginLeft: "-1px",
              }}
            >
              {/* Value */}
              <div
                className="ng-heading mb-3"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>

              {/* Thin divider */}
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "rgba(255,255,255,0.15)",
                  margin: "0 auto 12px",
                }}
              />

              <p
                className="ng-body"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
