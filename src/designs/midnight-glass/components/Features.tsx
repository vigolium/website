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
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mg-section-label mb-4 inline-flex">Features</span>
          <h2 className="mg-heading text-3xl md:text-5xl mt-5">
            Built for modern security
          </h2>
          <p className="mg-body text-lg mt-4 max-w-xl mx-auto">
            Four pillars that make Vigolium the most capable scanner on the market.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.title}
                className="mg-glass p-6 md:p-8 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(139,92,246,0.1))",
                    border: "1px solid rgba(168,85,247,0.25)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.1)",
                  }}
                >
                  {Icon && (
                    <span style={{ color: "var(--mg-accent)" }}>
                      <Icon size={22} />
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mg-heading text-xl mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mg-body text-sm leading-relaxed">
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
