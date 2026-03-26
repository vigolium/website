"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
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
          className="mb-16"
        >
          <p className="de-section-label mb-4">Full Spectrum</p>
          <h2
            className="de-heading"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            Detection Capabilities
          </h2>
        </motion.div>

        {/* Editorial list layout */}
        <div>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6"
              style={{
                borderBottom: "1px solid var(--de-line)",
              }}
            >
              {/* Number */}
              <span
                className="font-serif-editorial shrink-0"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--de-muted)",
                  width: "32px",
                  fontStyle: "italic",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="de-heading shrink-0"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  width: "220px",
                }}
              >
                {cap.title}
              </h3>

              {/* Detail */}
              <p
                className="font-sans-editorial flex-1"
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  color: "var(--de-muted)",
                  fontWeight: 300,
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
