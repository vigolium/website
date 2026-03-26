"use client";

import { motion } from "motion/react";
import { features } from "@/lib/content";
import { Brain, Zap, Blocks, Crosshair } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Zap,
  Blocks,
  Crosshair,
};

export function Features() {
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
          FEATURES
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.title}
                className="py-8 md:py-10"
                style={{
                  borderBottom: "1px solid var(--tb-border)",
                  borderRight: i % 2 === 0 ? "1px solid var(--tb-border)" : "none",
                  paddingLeft: i % 2 === 1 ? "2rem" : "0",
                  paddingRight: i % 2 === 0 ? "2rem" : "0",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <span className="flex-shrink-0" style={{ color: "var(--tb-accent)" }}>
                      <Icon size={16} />
                    </span>
                  )}
                  <h3
                    className="tb-mono text-sm font-bold uppercase tracking-wide"
                    style={{ color: "var(--tb-white)" }}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  className="tb-mono text-xs leading-relaxed"
                  style={{ color: "var(--tb-muted)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
