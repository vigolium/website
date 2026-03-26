import { motion } from "motion/react";
import { integrations } from "@/lib/content";

function slugify(name: string) {
  return name.toLowerCase().replace(/[\s/]+/g, "-");
}

export function Integrations() {
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
            {"// INTEGRATIONS"}
          </span>
          <div
            className="mt-2 text-xs"
            style={{ color: "var(--matrix-border)" }}
          >
            ═══════════════════════════════════════════════════════
          </div>
        </motion.div>

        {/* Command */}
        <motion.div
          className="mb-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs"
            style={{ color: "var(--matrix-dim)" }}
          >
            $
          </span>{" "}
          <span className="font-bold glow-text">
            vigolium --list-integrations
          </span>
        </motion.div>

        {/* Tree view */}
        <div
          className="border p-6 glow-border"
          style={{ borderColor: "var(--matrix-border)" }}
        >
          {integrations.map((integration, i) => {
            const isLast = i === integrations.length - 1;
            const prefix = isLast ? "└──" : "├──";
            return (
              <motion.div
                key={integration.name}
                className="flex items-start gap-3 py-2 glitch-hover"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
              >
                <span
                  className="text-sm font-light flex-shrink-0"
                  style={{ color: "var(--matrix-dim)" }}
                >
                  {prefix}
                </span>
                <span className="text-sm font-medium glow-text flex-shrink-0">
                  {slugify(integration.name)}
                </span>
                <span
                  className="text-sm flex-shrink-0"
                  style={{ color: "var(--matrix-green)" }}
                >
                  ✓ installed
                </span>
                <span
                  className="text-xs font-light hidden sm:inline"
                  style={{ color: "var(--matrix-muted)" }}
                >
                  — {integration.description}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
