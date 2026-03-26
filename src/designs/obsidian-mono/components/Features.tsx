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
          01 / Features
        </motion.p>

        {/* Section headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="om-headline mb-20"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Core Capabilities
        </motion.h2>

        {/* Features grid */}
        <div
          className="grid gap-0"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="om-border"
                style={{
                  padding: "3rem 2rem",
                  marginTop: "-1px",
                  marginLeft: "-1px",
                }}
              >
                {/* Icon */}
                {Icon && (
                  <div style={{ marginBottom: "2rem", color: "#ffffff" }}>
                    <Icon size={24} strokeWidth={1} />
                  </div>
                )}

                {/* Feature number label */}
                <p className="om-mono" style={{ marginBottom: "1rem" }}>
                  0{i + 1}
                </p>

                {/* Title */}
                <h3
                  className="om-headline"
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    color: "#ffffff",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="om-body" style={{ fontSize: "0.8rem" }}>
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
