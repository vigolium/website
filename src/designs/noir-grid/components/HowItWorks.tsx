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
            02 / Process
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "1.6rem" }}
          >
            How It Works
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

        {/* 3-column strict grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName] || Upload;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative p-8"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  marginLeft: "-1px",
                }}
              >
                {/* Step number - large geometric */}
                <div
                  style={{
                    fontSize: "4rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.04)",
                    position: "absolute",
                    top: "12px",
                    right: "16px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="mb-6"
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} className="text-white" />
                </div>

                {/* Connector line between steps */}
                {i < howItWorks.length - 1 && (
                  <div
                    className="hidden md:block absolute"
                    style={{
                      top: "56px",
                      right: "-12px",
                      width: "24px",
                      height: "1px",
                      background: "rgba(255,255,255,0.15)",
                      zIndex: 2,
                    }}
                  />
                )}

                <h3
                  className="ng-heading mb-3"
                  style={{ fontSize: "0.9rem" }}
                >
                  {step.title}
                </h3>
                <p
                  className="ng-body"
                  style={{ fontSize: "0.78rem", lineHeight: 1.7 }}
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
