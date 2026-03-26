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
    <section className="relative px-6 py-24 md:py-32 de-ascii-bg overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="de-section-label mb-4">The Process</p>
          <h2
            className="de-heading"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            How It Works
          </h2>
        </motion.div>

        {/* Three-column steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName] || Upload;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative text-center px-8 py-10"
                style={{
                  borderLeft: i > 0 ? "1px solid var(--de-line)" : "none",
                }}
              >
                {/* Step number */}
                <div
                  className="font-serif-editorial mb-6"
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: "rgba(232, 228, 223, 0.06)",
                    lineHeight: 1,
                  }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="flex justify-center mb-5"
                  style={{ color: "var(--de-accent)" }}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="de-heading mb-3"
                  style={{ fontSize: "1.2rem", fontWeight: 600 }}
                >
                  {step.title}
                </h3>

                {/* Thin line separator */}
                <div
                  className="mx-auto mb-4"
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "var(--de-line-strong)",
                  }}
                />

                {/* Description */}
                <p
                  className="font-sans-editorial"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "var(--de-muted)",
                    fontWeight: 300,
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
