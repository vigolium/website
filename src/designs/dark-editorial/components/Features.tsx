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
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section divider */}
        <div className="de-divider mb-16" />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="de-section-label mb-4">What Sets Us Apart</p>
          <h2
            className="de-heading"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            Core Capabilities
          </h2>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName] || Brain;
            const isTop = i < 2;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative p-8 md:p-10"
                style={{
                  borderTop: isTop ? "1px solid var(--de-line)" : "none",
                  borderBottom: "1px solid var(--de-line)",
                  borderRight: isLeft ? "1px solid var(--de-line)" : "none",
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5"
                  style={{ color: "var(--de-accent)" }}
                >
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="de-heading mb-3"
                  style={{ fontSize: "1.3rem", fontWeight: 600 }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="font-sans-editorial"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "var(--de-muted)",
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
