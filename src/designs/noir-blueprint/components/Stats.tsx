"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { stats } from "@/lib/content";

function SlotMachineNumber({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const chars = "0123456789";
    const target = value;
    let frame = 0;
    const totalFrames = 20;
    const interval = setInterval(() => {
      frame++;
      if (frame >= totalFrames) {
        setDisplay(target);
        clearInterval(interval);
        return;
      }
      // Generate random characters for numeric positions
      const scrambled = target
        .split("")
        .map((ch) => {
          if (chars.includes(ch)) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return ch;
        })
        .join("");
      setDisplay(scrambled);
    }, 50);

    return () => clearInterval(interval);
  }, [inView, value]);

  return <span>{display}</span>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative px-6 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="bp-annotation">// SECTION 05</span>
          <h2
            className="bp-headline mt-2"
            style={{ fontSize: "1.5rem", color: "#38BDF8" }}
          >
            Metrics
          </h2>
        </motion.div>

        {/* Single row of stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Annotation label above with leader line */}
              <div className="flex flex-col items-center mb-3">
                <span
                  className="bp-annotation mb-1 block"
                  style={{
                    fontSize: "0.6rem",
                    color: "rgba(56, 189, 248, 0.5)",
                    maxWidth: "120px",
                  }}
                >
                  METRIC-{String(i + 1).padStart(2, "0")}
                </span>
                {/* Leader line */}
                <div
                  style={{
                    width: "1px",
                    height: "16px",
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                  }}
                />
              </div>

              {/* Large number */}
              <div
                className="bp-headline"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#F8FAFC",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                }}
              >
                <SlotMachineNumber value={stat.value} inView={inView} />
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#94A3B8",
                  lineHeight: 1.5,
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
