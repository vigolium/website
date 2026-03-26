"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Upload,
  Scan,
  FileText,
};

const stepColors = [
  { pill: "twi-pill-green", color: "var(--twi-green)" },
  { pill: "twi-pill-yellow", color: "var(--twi-yellow)" },
  { pill: "twi-pill-blue", color: "var(--twi-blue)" },
];

export function HowItWorks() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="twi-pill twi-pill-green twi-mono mb-4 inline-block">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--twi-green)" }}
            />
            workflow
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-4"
            style={{ color: "var(--twi-text)" }}
          >
            How it works
          </h2>
        </motion.div>

        {/* Pipeline steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "var(--twi-overlay)" }}
          />

          <div className="space-y-6">
            {howItWorks.map((step, i) => {
              const Icon = iconMap[step.iconName];
              const sc = stepColors[i % stepColors.length];

              return (
                <motion.div
                  key={step.step}
                  className="relative flex gap-5 md:gap-8 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  {/* Step indicator */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center twi-mono text-sm font-bold"
                    style={{
                      backgroundColor: "var(--twi-surface)",
                      border: `1px solid var(--twi-overlay)`,
                      color: sc.color,
                    }}
                  >
                    {Icon && <span style={{ color: sc.color }}><Icon size={22} /></span>}
                  </div>

                  {/* Step content */}
                  <div className="twi-panel flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`twi-pill ${sc.pill} twi-mono`}>
                        step {step.step}
                      </span>
                    </div>

                    <h3
                      className="twi-mono text-lg font-semibold mb-2"
                      style={{ color: "var(--twi-text)" }}
                    >
                      <span className="twi-func">{step.title}</span>
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--twi-subtext)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
