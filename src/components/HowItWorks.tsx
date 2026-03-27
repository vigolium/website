"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText, type LucideIcon } from "lucide-react";
import { RegistrationMark } from "./decorators";

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Scan,
  FileText,
};

export function HowItWorks() {
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
          <span className="ngb-annotation block mb-1">// SECTION 02</span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            02 / Process
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "2rem" }}
          >
            How It Works
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
                {/* Corner brackets */}
                <span
                  className="absolute top-0 left-0 w-3 h-3"
                  style={{
                    borderTop: "1px solid rgba(80, 250, 123, 0.4)",
                    borderLeft: "1px solid rgba(80, 250, 123, 0.4)",
                  }}
                />
                <span
                  className="absolute bottom-0 right-0 w-3 h-3"
                  style={{
                    borderBottom: "1px solid rgba(80, 250, 123, 0.4)",
                    borderRight: "1px solid rgba(80, 250, 123, 0.4)",
                  }}
                />

                {/* Icon with registration mark */}
                <div className="relative mb-6 inline-block">
                  <div
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
                  <RegistrationMark className="-top-1 -right-2" />
                </div>

                <h3
                  className="ng-heading mb-3"
                  style={{ fontSize: "1rem" }}
                >
                  {step.title}
                </h3>
                <p
                  className="ng-body"
                  style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
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
