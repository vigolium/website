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
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mg-section-label mb-4 inline-flex">How It Works</span>
          <h2 className="mg-heading text-3xl md:text-5xl mt-5">
            Three steps to full coverage
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
              transform: "translateY(-50%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => {
              const Icon = iconMap[step.iconName];
              return (
                <motion.div
                  key={step.title}
                  className="mg-glass p-8 text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Step number */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(124,58,237,0.15))",
                      border: "1px solid rgba(168,85,247,0.35)",
                      boxShadow: "0 0 30px rgba(168,85,247,0.15)",
                    }}
                  >
                    {Icon && (
                      <span style={{ color: "#c084fc" }}>
                        <Icon size={24} />
                      </span>
                    )}
                  </div>

                  {/* Step badge */}
                  <div
                    className="text-xs font-bold mb-3 tracking-widest uppercase"
                    style={{ color: "var(--mg-accent)" }}
                  >
                    Step {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="mg-heading text-xl mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mg-body text-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
