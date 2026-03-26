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

const moduleLabels = ["MODULE-01", "MODULE-02", "MODULE-03", "MODULE-04"];

function LeaderLine({ index }: { index: number }) {
  // Different angles for each card
  const configs = [
    { x1: 0, y1: 0, x2: -20, y2: -15 },
    { x1: "100%", y1: 0, x2: "calc(100% + 20)", y2: -15 },
    { x1: 0, y1: 0, x2: -20, y2: -15 },
    { x1: "100%", y1: 0, x2: "calc(100% + 20)", y2: -15 },
  ];
  const cfg = configs[index];
  const isRight = index % 2 === 1;

  return (
    <div
      className="absolute bp-annotation whitespace-nowrap"
      style={{
        top: "-28px",
        ...(isRight ? { right: "-8px" } : { left: "-8px" }),
        color: "rgba(56, 189, 248, 0.5)",
      }}
    >
      <svg
        width="60"
        height="24"
        viewBox="0 0 60 24"
        className="absolute"
        style={{
          top: "14px",
          ...(isRight ? { right: 0 } : { left: 0 }),
        }}
      >
        <line
          x1={isRight ? 60 : 0}
          y1="0"
          x2={isRight ? 30 : 30}
          y2="24"
          stroke="rgba(56, 189, 248, 0.3)"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
      </svg>
      {moduleLabels[index]}
    </div>
  );
}

function CornerBrackets() {
  return (
    <>
      {/* Top-left */}
      <span
        className="absolute top-0 left-0 w-3 h-3"
        style={{
          borderTop: "1px solid rgba(56, 189, 248, 0.4)",
          borderLeft: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />
      {/* Top-right */}
      <span
        className="absolute top-0 right-0 w-3 h-3"
        style={{
          borderTop: "1px solid rgba(56, 189, 248, 0.4)",
          borderRight: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />
      {/* Bottom-left */}
      <span
        className="absolute bottom-0 left-0 w-3 h-3"
        style={{
          borderBottom: "1px solid rgba(56, 189, 248, 0.4)",
          borderLeft: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />
      {/* Bottom-right */}
      <span
        className="absolute bottom-0 right-0 w-3 h-3"
        style={{
          borderBottom: "1px solid rgba(56, 189, 248, 0.4)",
          borderRight: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />
    </>
  );
}

export function Features() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="bp-annotation">// SECTION 02</span>
          <h2
            className="bp-headline mt-2"
            style={{ fontSize: "1.5rem", color: "#38BDF8" }}
          >
            Core Modules
          </h2>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName] || Brain;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-6 pt-10"
                style={{
                  border: "1px dashed rgba(56, 189, 248, 0.3)",
                }}
              >
                <CornerBrackets />
                <LeaderLine index={i} />

                {/* Icon with stroke draw-in */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
                  className="mb-4"
                >
                  <span className="text-[#38BDF8]" style={{ display: "inline-block" }}>
                    <Icon size={28} strokeWidth={1.5} />
                  </span>
                </motion.div>

                <h3
                  className="bp-headline mb-3"
                  style={{ fontSize: "0.95rem", color: "#F8FAFC" }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#94A3B8",
                    lineHeight: 1.7,
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
