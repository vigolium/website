"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="vg-label mb-4">Capabilities</p>
          <h2
            className="vg-heading"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            What Vigolium detects
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="vg-card p-6 group"
              style={{
                backgroundColor: "rgba(255,255,255,0.01)",
              }}
            >
              {/* Teal dot indicator */}
              <div
                className="mb-4 h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(94,234,212,0.5)",
                  transition: "background-color 0.4s ease",
                }}
              />
              <h3
                className="vg-heading mb-2"
                style={{ fontSize: "0.95rem" }}
              >
                {cap.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  color: "#6b7280",
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
