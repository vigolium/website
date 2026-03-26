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
      className="ng-section px-6 py-24 md:py-32"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#555",
            }}
          >
            01 / Features
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "1.6rem" }}
          >
            Core Modules
          </h2>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#00ffcc",
              marginTop: "12px",
            }}
          />
        </motion.div>

        {/* Grid - strict 4-column on desktop, 2 on tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName] || Brain;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative p-6"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  marginTop: "-1px",
                  marginLeft: "-1px",
                }}
              >
                {/* Icon */}
                <div className="mb-5">
                  <Icon
                    size={24}
                    className="text-white"
                  />
                </div>

                {/* Index number */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "#333",
                    fontWeight: 500,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3
                  className="ng-heading mb-3"
                  style={{ fontSize: "0.85rem" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="ng-body"
                  style={{ fontSize: "0.78rem", lineHeight: 1.7 }}
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
