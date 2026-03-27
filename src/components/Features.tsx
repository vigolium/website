"use client";

import { motion } from "motion/react";
import { features } from "@/lib/content";
import { Brain, Zap, Blocks, Scan, type LucideIcon } from "lucide-react";
import { CornerBrackets } from "./decorators";
import { TiltCard } from "./animations";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Blocks,
  Scan,
};

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
    >
      <TiltCard
        className="relative p-6 pt-10 h-full"
        style={{
          border: "1px dashed rgba(252,232,195,0.1)",
          borderColor: "rgba(252,232,195,0.1)",
        }}
      >
        <CornerBrackets />

        <div className="mb-5">
          <Icon size={24} style={{ color: "#f75341" }} />
        </div>

        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "#918175",
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
      </TiltCard>
    </motion.div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="ng-section px-6 py-8 md:py-12"
      style={{ borderBottom: "1px solid rgba(252,232,195,0.1)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading annotation="Features" heading="Core Components" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
