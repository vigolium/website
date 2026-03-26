"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";

export function Integrations() {
  // Position nodes in a circle around the center
  const angleStep = (2 * Math.PI) / integrations.length;
  const radius = 160;

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="bp-annotation">// SECTION 06</span>
          <h2
            className="bp-headline mt-2"
            style={{ fontSize: "1.5rem", color: "#38BDF8" }}
          >
            Integrations
          </h2>
        </motion.div>

        {/* Schematic layout - desktop uses radial, mobile uses list */}
        {/* Desktop radial layout */}
        <div className="hidden md:block relative" style={{ height: "420px" }}>
          {/* Central node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              border: "1px solid #38BDF8",
              padding: "12px 20px",
              backgroundColor: "rgba(56, 189, 248, 0.08)",
              zIndex: 10,
            }}
          >
            <span
              className="bp-headline"
              style={{ fontSize: "0.75rem", color: "#38BDF8" }}
            >
              VIGOLIUM CORE
            </span>
          </motion.div>

          {/* SVG lines connecting center to nodes */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {integrations.map((_, i) => {
              const angle = angleStep * i - Math.PI / 2;
              const cx = 50; // percent
              const cy = 50;
              const endX = cx + (radius / 4.2) * Math.cos(angle) * (100 / 100);
              const endY = cy + (radius / 4.2) * Math.sin(angle) * (100 / 100);
              return (
                <motion.line
                  key={i}
                  x1={`${cx}%`}
                  y1={`${cy}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="rgba(56, 189, 248, 0.25)"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Integration nodes */}
          {integrations.map((item, i) => {
            const angle = angleStep * i - Math.PI / 2;
            const x = 50 + (radius / 4.2) * Math.cos(angle) * (100 / 100);
            const y = 50 + (radius / 4.2) * Math.sin(angle) * (100 / 100);

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  padding: "10px 16px",
                  backgroundColor: "rgba(10, 22, 40, 0.9)",
                  maxWidth: "180px",
                  zIndex: 10,
                }}
              >
                <span
                  className="bp-headline block"
                  style={{ fontSize: "0.7rem", color: "#F8FAFC", marginBottom: "4px" }}
                >
                  {item.name}
                </span>
                <span
                  className="bp-annotation block"
                  style={{ fontSize: "0.6rem" }}
                >
                  {item.description}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile list layout */}
        <div className="md:hidden space-y-4">
          {/* Central label */}
          <div
            className="text-center mb-6 py-3 mx-auto"
            style={{
              border: "1px solid #38BDF8",
              backgroundColor: "rgba(56, 189, 248, 0.08)",
              maxWidth: "200px",
            }}
          >
            <span
              className="bp-headline"
              style={{ fontSize: "0.75rem", color: "#38BDF8" }}
            >
              VIGOLIUM CORE
            </span>
          </div>

          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex items-start gap-4 pl-6"
            >
              {/* Dashed connector */}
              <div
                className="absolute left-0 top-3"
                style={{
                  width: "16px",
                  height: "1px",
                  borderTop: "1px dashed rgba(56, 189, 248, 0.3)",
                }}
              />
              <div>
                <span
                  className="bp-headline block"
                  style={{ fontSize: "0.75rem", color: "#F8FAFC", marginBottom: "2px" }}
                >
                  {item.name}
                </span>
                <span className="bp-annotation">{item.description}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
