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
    <section className="px-4 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pdd-section-label">Features</span>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: "var(--pdd-heading)" }}
          >
            Built for modern security teams
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "var(--pdd-body)" }}
          >
            Four pillars that set Vigolium apart from legacy scanning tools.
          </p>
        </motion.div>

        {/* Three-column grid (wraps to 2x2 on md, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.title}
                className={`pdd-card p-6 ${i === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "var(--pdd-blue-subtle)",
                    border: "1px solid rgba(59, 130, 246, 0.1)",
                  }}
                >
                  {Icon && <Icon size={20} className="text-blue-400" />}
                </div>

                <h3
                  className="text-base font-semibold mb-2 tracking-tight"
                  style={{ color: "var(--pdd-heading)" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--pdd-body)" }}
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
