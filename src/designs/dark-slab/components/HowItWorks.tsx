"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Scan,
  FileText,
};

export function HowItWorks() {
  return (
    <section
      className="ds-section relative px-6 py-24 md:py-32"
      style={{ backgroundColor: "var(--ds-bg)" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="ds-section-label mb-4">The Process</p>
          <h2
            className="ds-heading"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            How It Works
          </h2>
          <div
            className="mx-auto"
            style={{
              height: "4px",
              width: "80px",
              background: "var(--ds-accent)",
              marginTop: "1rem",
            }}
          />
        </motion.div>

        {/* Three steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName] || Upload;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative px-8 py-10"
                style={{
                  borderLeft:
                    i > 0
                      ? "3px solid var(--ds-border-thick)"
                      : "none",
                  backgroundColor:
                    i === 1 ? "var(--ds-bg-alt)" : "transparent",
                }}
              >
                {/* Big step number */}
                <div
                  className="ds-slab"
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: 900,
                    color: "rgba(194, 102, 42, 0.1)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="mb-5"
                  style={{ color: "var(--ds-accent)" }}
                >
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3
                  className="ds-heading mb-3"
                  style={{ fontSize: "1.3rem", fontWeight: 700 }}
                >
                  {step.title}
                </h3>

                {/* Thick short divider */}
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    backgroundColor: "var(--ds-accent)",
                    opacity: 0.5,
                    marginBottom: "1rem",
                  }}
                />

                {/* Description */}
                <p
                  className="ds-body"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--ds-muted)",
                    fontWeight: 400,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
