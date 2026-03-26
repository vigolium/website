"use client";

import { motion } from "motion/react";
import { features } from "@/lib/content";
import { Brain, Zap, Blocks, Crosshair, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Blocks,
  Crosshair,
};

export function Features() {
  return (
    <section
      className="ds-section ds-section-alt relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="ds-section-label mb-4">What Sets Us Apart</p>
          <h2
            className="ds-heading"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Core Capabilities
          </h2>
          <div
            style={{
              height: "4px",
              width: "80px",
              background: "var(--ds-accent)",
              marginTop: "1rem",
            }}
          />
        </motion.div>

        {/* 2x2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName] || Brain;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="ds-card"
              >
                {/* Icon */}
                <div
                  className="mb-5"
                  style={{ color: "var(--ds-accent)" }}
                >
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3
                  className="ds-heading mb-3"
                  style={{ fontSize: "1.4rem", fontWeight: 700 }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="ds-body"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--ds-muted)",
                    fontWeight: 400,
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
