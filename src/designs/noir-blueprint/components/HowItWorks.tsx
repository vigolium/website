"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Scan,
  FileText,
};

export function HowItWorks() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="bp-annotation">// SECTION 03</span>
          <h2
            className="bp-headline mt-2"
            style={{ fontSize: "1.5rem", color: "#38BDF8" }}
          >
            Process Flow
          </h2>
        </motion.div>

        {/* Steps - horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName] || Upload;
            return (
              <div key={step.title} className="flex flex-col md:flex-row items-center flex-1">
                {/* Step card */}
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative w-full p-6"
                  style={{
                    transformOrigin: "top",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                  }}
                >
                  {/* Step number with registration mark */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="relative flex items-center justify-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid #38BDF8",
                      }}
                    >
                      <span
                        className="absolute -top-1 -right-1 text-xs select-none"
                        style={{
                          color: "rgba(56, 189, 248, 0.4)",
                          fontSize: "8px",
                        }}
                      >
                        +
                      </span>
                      <span
                        style={{
                          color: "#38BDF8",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                        }}
                      >
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="text-[#38BDF8]">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3
                    className="bp-headline mb-2"
                    style={{ fontSize: "0.95rem", color: "#F8FAFC" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#94A3B8",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Corner L-brackets */}
                  <span
                    className="absolute top-0 left-0 w-3 h-3"
                    style={{
                      borderTop: "1px solid rgba(56, 189, 248, 0.4)",
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
                </motion.div>

                {/* Connector dimension line */}
                {i < howItWorks.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.25 + 0.3,
                    }}
                    className="hidden md:flex items-center"
                    style={{
                      width: "60px",
                      height: "1px",
                      transformOrigin: "left",
                    }}
                  >
                    {/* Line with ticks and arrow */}
                    <svg width="60" height="20" viewBox="0 0 60 20">
                      {/* Start tick */}
                      <line
                        x1="0"
                        y1="6"
                        x2="0"
                        y2="14"
                        stroke="rgba(56, 189, 248, 0.4)"
                        strokeWidth="1"
                      />
                      {/* Main line */}
                      <line
                        x1="0"
                        y1="10"
                        x2="52"
                        y2="10"
                        stroke="rgba(56, 189, 248, 0.3)"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                      />
                      {/* Arrow */}
                      <polygon
                        points="52,7 60,10 52,13"
                        fill="rgba(56, 189, 248, 0.4)"
                      />
                    </svg>
                  </motion.div>
                )}

                {/* Mobile vertical connector */}
                {i < howItWorks.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.25 + 0.3,
                    }}
                    className="md:hidden flex justify-center"
                    style={{
                      height: "40px",
                      transformOrigin: "top",
                    }}
                  >
                    <svg width="20" height="40" viewBox="0 0 20 40">
                      <line
                        x1="10"
                        y1="0"
                        x2="10"
                        y2="32"
                        stroke="rgba(56, 189, 248, 0.3)"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                      />
                      <polygon
                        points="7,32 10,40 13,32"
                        fill="rgba(56, 189, 248, 0.4)"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
