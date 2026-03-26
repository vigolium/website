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
    <section className="om-section om-border-t">
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="om-mono mb-16"
        >
          02 / Process
        </motion.p>

        {/* Section headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="om-headline mb-24"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          How It Works
        </motion.h2>

        {/* Steps */}
        <div className="space-y-0">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="om-border-t"
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "3rem",
                  padding: "3.5rem 0",
                  alignItems: "start",
                }}
              >
                {/* Step number */}
                <div>
                  <span
                    className="om-headline"
                    style={{
                      fontSize: "3.5rem",
                      color: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {Icon && (
                      <Icon size={18} strokeWidth={1} />
                    )}
                    <h3
                      className="om-headline"
                      style={{ fontSize: "2rem", color: "#ffffff" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="om-body"
                    style={{ maxWidth: "480px", fontSize: "0.85rem" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
          {/* Final border */}
          <div className="om-border-t" />
        </div>
      </div>
    </section>
  );
}
