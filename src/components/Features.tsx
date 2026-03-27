"use client";

import { motion } from "motion/react";
import { features } from "@/lib/content";
import { Brain, Zap, Blocks, Scan, type LucideIcon } from "lucide-react";
import { CornerBrackets } from "./decorators";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Blocks,
  Scan,
};

const moduleLabels = ["MODULE-01", "MODULE-02", "MODULE-03", "MODULE-04"];

/* ── Feature card with hover breach border draw ── */
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = iconMap[feature.iconName] || Brain;

  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative p-6 pt-10"
      style={{
        border: "1px dashed rgba(255,255,255,0.1)",
        marginTop: "-1px",
        marginLeft: "-1px",
      }}
    >
      <CornerBrackets />

      {/* Module annotation label */}
      <div
        className="ngb-annotation absolute"
        style={{
          top: "-20px",
          left: "8px",
          color: "rgba(80, 250, 123, 0.5)",
          fontSize: "0.7rem",
        }}
      >
        {moduleLabels[index]}
      </div>

      {/* Icon */}
      <div className="mb-5">
        <Icon size={24} className="text-white" />
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
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3
        className="ng-heading mb-3"
        style={{ fontSize: "1rem" }}
      >
        {feature.title}
      </h3>
      <p
        className="ng-body"
        style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

export function Features() {
  return (
    <section
      className="ng-section px-6 py-16 md:py-20"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="ngb-annotation block mb-1">// SECTION 01</span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            01 / Features
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "2rem" }}
          >
            Core Modules
          </h2>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#50fa7b",
              marginTop: "12px",
            }}
          />
        </motion.div>

        {/* Grid - strict 4-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
