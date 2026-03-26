"use client";

import { motion } from "motion/react";
import { features } from "@/lib/content";
import { Brain, Zap, Blocks, Crosshair } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Zap,
  Blocks,
  Crosshair,
};

const flagMap: Record<string, string> = {
  "Agentic AI": "--agentic-ai",
  "Native Speed": "--native-speed",
  "Modular Architecture": "--modular",
  "Precision": "--precision",
};

export function Features() {
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
            vigolium --features<span className="cm-cursor">█</span>
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
          Available feature flags:
        </motion.p>

        <div className="space-y-0">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            const flag = flagMap[feature.title] || `--${feature.title.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <motion.div
                key={feature.title}
                className="py-4"
                style={{
                  borderBottom: "1px solid var(--cm-border)",
                }}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  {Icon && (
                    <span className="flex-shrink-0 mt-1" style={{ color: "var(--cm-amber)" }}>
                      <Icon size={14} />
                    </span>
                  )}
                  <div>
                    <p className="cm-mono text-sm font-bold mb-1" style={{ color: "var(--cm-green)" }}>
                      {flag}
                    </p>
                    <p className="cm-mono text-xs leading-relaxed" style={{ color: "var(--cm-green-dim)" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
