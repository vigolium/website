"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";
import { CornerBrackets } from "./decorators";
import { TiltCard } from "./animations";
import { SectionHeading } from "./SectionHeading";

function CapabilityCard({
  title,
  detail,
  index,
}: {
  title: string;
  detail: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
    >
      <TiltCard
        className="relative flex items-start gap-4 p-6 h-full"
        style={{
          border: "1px solid rgba(252,232,195,0.06)",
          borderColor: "rgba(252,232,195,0.06)",
        }}
      >
        <CornerBrackets />

        <div
          style={{
            width: "8px",
            height: "8px",
            border: "1px solid #53bdfa",
            backgroundColor: "rgba(83,189,250,0.15)",
            flexShrink: 0,
            marginTop: "4px",
          }}
        />

        <div>
          <h3 className="ng-heading mb-1" style={{ fontSize: "1rem" }}>
            {title}
          </h3>
          <p className="ng-body" style={{ fontSize: "0.9rem" }}>
            {detail}
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "10px",
            fontSize: "0.55rem",
            letterSpacing: "0.15em",
            color: "#918175",
            fontWeight: 500,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="ng-section relative px-6 py-8 md:py-12"
      style={{ borderBottom: "1px solid rgba(252,232,195,0.1)" }}
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading annotation="Capabilities" heading="What We Detect" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {capabilities.map((cap, i) => (
            <CapabilityCard
              key={cap.title}
              title={cap.title}
              detail={cap.detail}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
