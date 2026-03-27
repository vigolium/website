"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { stats } from "@/lib/content";
import { CornerBrackets } from "./decorators";
import { ScrambleCounter } from "./animations";
import { SectionHeading } from "./SectionHeading";

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="ng-section px-6 py-16 md:py-20"
      style={{ borderBottom: "1px solid rgba(252,232,195,0.1)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading annotation="Metrics" heading="By The Numbers" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-6 text-center"
              whileHover={{
                backgroundColor: "rgba(252,232,195,0.03)",
                borderColor: "rgba(80,250,123,0.4)",
                transition: { duration: 0.25 },
              }}
              style={{
                border: "1px solid rgba(252,232,195,0.06)",
                transition: "all 0.25s ease",
              }}
            >
              <CornerBrackets />

              <div
                style={{
                  width: "1px",
                  height: "16px",
                  background: "rgba(80, 250, 123, 0.2)",
                  margin: "0 auto 12px",
                }}
              />

              <div
                className="ng-heading mb-3"
                style={{
                  fontSize: i === stats.length - 1 ? "3rem" : "2.2rem",
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  color: i === stats.length - 1 ? "#50fa7b" : undefined,
                  textShadow: i === stats.length - 1 ? "0 0 20px rgba(80,250,123,0.4)" : undefined,
                }}
              >
                <ScrambleCounter value={stat.value} inView={isInView} />
              </div>

              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "rgba(252,232,195,0.15)",
                  margin: "0 auto 12px",
                }}
              />

              <p
                className="ng-body"
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
