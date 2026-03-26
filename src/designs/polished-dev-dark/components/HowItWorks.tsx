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
    <section className="px-4 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pdd-section-label">How It Works</span>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: "var(--pdd-heading)" }}
          >
            Three steps to secure your stack
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName];
            return (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.15 }}
              >
                {/* Connector line (between cards on desktop) */}
                {i < howItWorks.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-full h-px"
                    style={{ backgroundColor: "var(--pdd-border)", zIndex: 0 }}
                  />
                )}

                {/* Step number */}
                <div
                  className="relative z-10 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--pdd-surface)",
                    border: "1px solid var(--pdd-border)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--pdd-blue-subtle)",
                      border: "1px solid rgba(59, 130, 246, 0.12)",
                    }}
                  >
                    {Icon && <Icon size={22} className="text-blue-400" />}
                  </div>
                </div>

                {/* Step label */}
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--pdd-blue)" }}
                >
                  Step {step.step}
                </div>

                <h3
                  className="text-lg font-semibold mb-2 tracking-tight"
                  style={{ color: "var(--pdd-heading)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-sm leading-relaxed max-w-xs mx-auto"
                  style={{ color: "var(--pdd-body)" }}
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
