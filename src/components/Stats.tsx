"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { stats } from "@/lib/content";
import { CornerBrackets } from "./decorators";

const metricLabels = ["METRIC-01", "METRIC-02", "METRIC-03", "METRIC-04"];

/* ── Counter that rolls up from 0 ── */
function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part and suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      // Non-numeric value, just display it
      setDisplayValue(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2]; // e.g., "+", ""
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return <>{displayValue}</>;
}

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
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
          <span className="ngb-annotation block mb-1">// SECTION 04</span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            04 / Metrics
          </span>
          <h2
            className="ng-heading mt-3"
            style={{ fontSize: "2rem" }}
          >
            By The Numbers
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

        {/* 4-column strict grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-6 text-center"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                marginTop: "-1px",
                marginLeft: "-1px",
              }}
            >
              <CornerBrackets />

              {/* Metric annotation label */}
              <div
                className="ngb-annotation"
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(80, 250, 123, 0.5)",
                  marginBottom: "8px",
                }}
              >
                {metricLabels[i]}
              </div>

              {/* Leader line */}
              <div
                style={{
                  width: "1px",
                  height: "16px",
                  background: "rgba(80, 250, 123, 0.2)",
                  margin: "0 auto 12px",
                }}
              />

              {/* Value with counter animation */}
              <div
                className="ng-heading mb-3"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <AnimatedCounter value={stat.value} inView={isInView} />
              </div>

              {/* Thin divider */}
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "rgba(255,255,255,0.15)",
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
