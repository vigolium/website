"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";
import { CornerBrackets } from "./decorators";

/* ── Capability card ── */
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
      className="relative flex items-start gap-4 p-6"
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
        marginTop: "-1px",
        marginLeft: "-1px",
      }}
    >
      <CornerBrackets />

      {/* Marker */}
      <div
        style={{
          width: "8px",
          height: "8px",
          border: "1px solid rgba(255,255,255,0.3)",
          flexShrink: 0,
          marginTop: "4px",
        }}
      />

      <div>
        {/* CAP annotation */}
        <span
          className="ngb-annotation block mb-1"
          style={{ color: "rgba(80, 250, 123, 0.5)", fontSize: "0.7rem" }}
        >
          CAP-{String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="ng-heading mb-1" style={{ fontSize: "1rem" }}>
          {title}
        </h3>
        <p className="ng-body" style={{ fontSize: "0.9rem" }}>
          {detail}
        </p>
      </div>

      {/* Index */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "10px",
          fontSize: "0.55rem",
          letterSpacing: "0.15em",
          color: "#333",
          fontWeight: 500,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

export function Capabilities() {
  return (
    <section
      className="ng-section relative px-6 py-16 md:py-20"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="ngb-annotation block mb-1">// SECTION 03</span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            03 / Capabilities
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "2rem" }}
          >
            What We Detect
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

        {/* Strict 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
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
