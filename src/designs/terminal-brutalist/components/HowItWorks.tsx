"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Upload,
  Scan,
  FileText,
};

export function HowItWorks() {
  return (
    <section className="tb-section">
      <div className="max-w-5xl mx-auto">
        <motion.span
          className="tb-label tb-mono block mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          HOW IT WORKS
        </motion.span>

        <div className="space-y-0">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName];
            return (
              <motion.div
                key={step.step}
                className="flex items-start gap-6 md:gap-10 py-10"
                style={{
                  borderBottom: i < howItWorks.length - 1 ? "1px solid var(--tb-border)" : "none",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 flex items-center gap-4">
                  <span
                    className="tb-mono text-4xl md:text-5xl font-bold"
                    style={{ color: "var(--tb-border)" }}
                  >
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                      <span style={{ color: "var(--tb-accent)" }}>
                        <Icon size={14} />
                      </span>
                    )}
                    <h3
                      className="tb-mono text-base font-bold uppercase tracking-wide"
                      style={{ color: "var(--tb-white)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="tb-mono text-sm leading-relaxed"
                    style={{ color: "var(--tb-muted)", maxWidth: "480px" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
