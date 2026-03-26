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

const accentColors = [
  { bg: "rgba(180, 190, 254, 0.12)", color: "var(--twi-lavender)" },
  { bg: "rgba(249, 226, 175, 0.12)", color: "var(--twi-yellow)" },
  { bg: "rgba(137, 180, 250, 0.12)", color: "var(--twi-blue)" },
  { bg: "rgba(250, 179, 135, 0.12)", color: "var(--twi-peach)" },
];

export function Features() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="twi-pill twi-pill-blue twi-mono mb-4 inline-block"
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--twi-blue)" }}
            />
            features
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-4"
            style={{ color: "var(--twi-text)" }}
          >
            Built for modern security
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            const accent = accentColors[i % accentColors.length];

            return (
              <motion.div
                key={feature.title}
                className="twi-panel overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Card tab header */}
                <div
                  className="twi-mono text-xs px-5 py-2.5 flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--twi-mantle)",
                    borderBottom: "1px solid var(--twi-overlay)",
                    borderRadius: "12px 12px 0 0",
                    color: "var(--twi-muted)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: accent.color }}
                  />
                  module_{i + 1}.ts
                </div>

                <div className="p-6">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: accent.bg,
                    }}
                  >
                    {Icon && <span style={{ color: accent.color }}><Icon size={20} /></span>}
                  </div>

                  {/* Title as function name */}
                  <h3 className="twi-mono text-base font-semibold mb-2">
                    <span className="twi-keyword">fn</span>{" "}
                    <span className="twi-func">
                      {feature.title.replace(/\s+/g, "_").toLowerCase()}
                    </span>
                    <span style={{ color: "var(--twi-text)" }}>()</span>
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--twi-subtext)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
