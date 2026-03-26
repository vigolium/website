"use client";

import { motion } from "motion/react";
import { features } from "@/lib/content";
import { Brain, Zap, Blocks, Crosshair } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Brain,
  Zap,
  Blocks,
  Crosshair,
};

export function Features() {
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
          <p className="vg-label mb-4">Core Features</p>
          <h2
            className="vg-heading"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            Built for precision, designed for speed
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="vg-card p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.01)",
                }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid rgba(94,234,212,0.15)",
                    backgroundColor: "rgba(94,234,212,0.04)",
                  }}
                >
                  {Icon && (
                    <Icon size={18} strokeWidth={1.5} />
                  )}
                </div>
                <h3
                  className="vg-heading mb-3"
                  style={{ fontSize: "1.05rem" }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#9ca3af",
                    fontWeight: 300,
                  }}
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
