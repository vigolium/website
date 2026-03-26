"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

function CapabilityCard({
  title,
  detail,
  index,
}: {
  title: string;
  detail: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative p-5"
      style={{
        border: "1px solid rgba(56, 189, 248, 0.15)",
        transition: "border-color 0.3s",
        borderColor: hovered
          ? "rgba(56, 189, 248, 0.4)"
          : "rgba(56, 189, 248, 0.15)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner L-brackets */}
      <span
        className="absolute top-0 left-0 w-3 h-3"
        style={{
          borderTop: "1px solid rgba(56, 189, 248, 0.4)",
          borderLeft: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />
      <span
        className="absolute top-0 right-0 w-3 h-3"
        style={{
          borderTop: "1px solid rgba(56, 189, 248, 0.4)",
          borderRight: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />
      <span
        className="absolute bottom-0 left-0 w-3 h-3"
        style={{
          borderBottom: "1px solid rgba(56, 189, 248, 0.4)",
          borderLeft: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />
      <span
        className="absolute bottom-0 right-0 w-3 h-3"
        style={{
          borderBottom: "1px solid rgba(56, 189, 248, 0.4)",
          borderRight: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      />

      {/* Dimension lines on hover */}
      {hovered && (
        <>
          {/* Top dimension line */}
          <div
            className="absolute -top-5 left-0 right-0 flex items-center justify-center"
            style={{ height: "12px" }}
          >
            <div
              style={{
                width: "1px",
                height: "8px",
                backgroundColor: "rgba(56, 189, 248, 0.3)",
              }}
            />
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(56, 189, 248, 0.2)",
              }}
            />
            <span
              className="bp-annotation px-1"
              style={{
                position: "absolute",
                fontSize: "0.55rem",
                color: "rgba(56, 189, 248, 0.4)",
                backgroundColor: "#0A1628",
              }}
            >
              320px
            </span>
            <div
              style={{
                width: "1px",
                height: "8px",
                backgroundColor: "rgba(56, 189, 248, 0.3)",
              }}
            />
          </div>

          {/* Right dimension line */}
          <div
            className="absolute top-0 bottom-0 -right-5 flex flex-col items-center justify-center"
            style={{ width: "12px" }}
          >
            <div
              style={{
                height: "1px",
                width: "8px",
                backgroundColor: "rgba(56, 189, 248, 0.3)",
              }}
            />
            <div
              style={{
                flex: 1,
                width: "1px",
                backgroundColor: "rgba(56, 189, 248, 0.2)",
              }}
            />
            <div
              style={{
                height: "1px",
                width: "8px",
                backgroundColor: "rgba(56, 189, 248, 0.3)",
              }}
            />
          </div>
        </>
      )}

      {/* Capability index */}
      <span
        className="bp-annotation block mb-2"
        style={{ color: "rgba(56, 189, 248, 0.5)" }}
      >
        CAP-{String(index + 1).padStart(2, "0")}
      </span>

      <h3
        className="bp-headline mb-2"
        style={{ fontSize: "0.85rem", color: "#F8FAFC" }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.75rem",
          color: "#94A3B8",
          lineHeight: 1.7,
        }}
      >
        {detail}
      </p>
    </motion.div>
  );
}

export function Capabilities() {
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
          <span className="bp-annotation">// SECTION 04</span>
          <h2
            className="bp-headline mt-2"
            style={{ fontSize: "1.5rem", color: "#38BDF8" }}
          >
            Capabilities
          </h2>
        </motion.div>

        {/* 3x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
