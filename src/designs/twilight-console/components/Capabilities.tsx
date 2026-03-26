"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

const dotColors = [
  "var(--twi-green)",
  "var(--twi-blue)",
  "var(--twi-lavender)",
  "var(--twi-peach)",
  "var(--twi-yellow)",
  "var(--twi-green)",
];

export function Capabilities() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="twi-pill twi-pill-peach twi-mono mb-4 inline-block">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--twi-peach)" }}
            />
            explorer
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-4"
            style={{ color: "var(--twi-text)" }}
          >
            Capabilities
          </h2>
        </motion.div>

        {/* File explorer style grid */}
        <div
          className="twi-panel overflow-hidden"
        >
          {/* Explorer header */}
          <div
            className="twi-mono text-xs px-5 py-3 flex items-center gap-3"
            style={{
              backgroundColor: "var(--twi-mantle)",
              borderBottom: "1px solid var(--twi-overlay)",
              borderRadius: "12px 12px 0 0",
              color: "var(--twi-muted)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1.5 2.5h4l1.5 1.5h5.5v7.5h-11V2.5z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
            src/modules/
          </div>

          <div className="divide-y" style={{ borderColor: "var(--twi-overlay)" }}>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="flex items-start gap-4 px-5 py-4 transition-colors duration-150"
                style={{
                  borderColor: "var(--twi-overlay)",
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(69, 71, 90, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {/* Status dot */}
                <div className="flex-shrink-0 mt-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full block"
                    style={{ backgroundColor: dotColors[i % dotColors.length] }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className="twi-mono text-sm font-semibold"
                      style={{ color: "var(--twi-text)" }}
                    >
                      {cap.title}
                    </h3>
                    <span className="twi-pill twi-pill-green twi-mono" style={{ fontSize: "0.6rem" }}>
                      active
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--twi-muted)" }}
                  >
                    {cap.detail}
                  </p>
                </div>

                {/* File-like suffix */}
                <div
                  className="flex-shrink-0 twi-mono text-xs mt-1"
                  style={{ color: "var(--twi-muted)", opacity: 0.5 }}
                >
                  .mod
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
