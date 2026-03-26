import { motion } from "motion/react";
import { stats } from "@/lib/content";

const barLengths = [9, 6, 8, 10]; // visual bar lengths out of 10

export function Stats() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs font-light"
            style={{ color: "var(--matrix-dim)" }}
          >
            {"// SYSTEM METRICS"}
          </span>
          <div
            className="mt-2 text-xs"
            style={{ color: "var(--matrix-border)" }}
          >
            ═══════════════════════════════════════════════════════
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, i) => {
            const filled = barLengths[i];
            const empty = 10 - filled;
            const bar = "█".repeat(filled) + "░".repeat(empty);
            return (
              <motion.div
                key={stat.value}
                className="border p-5 glow-border glitch-hover"
                style={{ borderColor: "var(--matrix-border)" }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl md:text-3xl font-bold glow-text-strong">
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-light"
                    style={{ color: "var(--matrix-green)" }}
                  >
                    [OK]{" "}
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF41] cursor-blink"
                      aria-hidden
                    />
                  </span>
                </div>

                <div
                  className="text-xs font-light mb-3"
                  style={{ color: "var(--matrix-muted)" }}
                >
                  {stat.label}
                </div>

                <div
                  className="text-xs font-light"
                  style={{ color: "var(--matrix-dim)" }}
                >
                  [{bar}] {filled * 10}%
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
