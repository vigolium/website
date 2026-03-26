"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Upload,
  Scan,
  FileText,
};

export function HowItWorks() {
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
          <p className="vg-label mb-4">How It Works</p>
          <h2
            className="vg-heading"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            Three steps to comprehensive security
          </h2>
        </motion.div>

        <div className="vg-section mx-auto max-w-3xl p-10" style={{ backgroundColor: "rgba(255,255,255,0.01)" }}>
          <div className="space-y-12">
            {howItWorks.map((step, i) => {
              const Icon = iconMap[step.iconName];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-6 items-start"
                >
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center"
                      style={{
                        borderRadius: "12px",
                        border: "1px solid rgba(94,234,212,0.2)",
                        backgroundColor: "rgba(94,234,212,0.04)",
                      }}
                    >
                      {Icon && <Icon size={20} strokeWidth={1.5} />}
                    </div>
                    {i < howItWorks.length - 1 && (
                      <div
                        style={{
                          width: "1px",
                          height: "48px",
                          marginTop: "8px",
                          background:
                            "linear-gradient(to bottom, rgba(94,234,212,0.15), transparent)",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <span
                      className="vg-label"
                      style={{ fontSize: "0.65rem", marginBottom: "4px", display: "block" }}
                    >
                      Step {step.step}
                    </span>
                    <h3
                      className="vg-heading mb-2"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        color: "#9ca3af",
                        fontWeight: 300,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
