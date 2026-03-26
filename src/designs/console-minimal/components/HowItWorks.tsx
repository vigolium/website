"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Upload,
  Scan,
  FileText,
};

export function HowItWorks() {
  return (
    <section className="cm-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="cm-prompt cm-mono">user@vigolium:~$ </span>
          <span className="cm-cmd cm-mono">
            vigolium --how-it-works<span className="cm-cursor">█</span>
          </span>
        </motion.div>

        <motion.p
          className="cm-mono text-xs mb-8"
          style={{ color: "var(--cm-green-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          Pipeline execution flow:
        </motion.p>

        <div className="space-y-0">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName];
            return (
              <motion.div
                key={step.step}
                className="py-5"
                style={{
                  borderBottom: "1px solid var(--cm-border)",
                }}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center gap-2">
                    {Icon && (
                      <span style={{ color: "var(--cm-amber)" }}>
                        <Icon size={14} />
                        </span>
                    )}
                    <span
                      className="cm-mono text-xs font-bold"
                      style={{ color: "var(--cm-amber)" }}
                    >
                      [{step.step}/3]
                    </span>
                  </div>
                  <div>
                    <p className="cm-mono text-sm font-bold mb-1" style={{ color: "var(--cm-green)" }}>
                      {step.title.toUpperCase()}
                    </p>
                    <p className="cm-output cm-mono">
                      &gt; {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="cm-mono text-xs mt-6"
          style={{ color: "var(--cm-green-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          [PIPELINE COMPLETE] — 3 stages executed successfully
        </motion.p>
      </div>
    </section>
  );
}
