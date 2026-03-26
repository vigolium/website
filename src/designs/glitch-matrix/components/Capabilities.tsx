import { motion } from "motion/react";
import { capabilities } from "@/lib/content";

export function Capabilities() {
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
            {"// CAPABILITY MATRIX"}
          </span>
          <div
            className="mt-2 text-xs"
            style={{ color: "var(--matrix-border)" }}
          >
            ═══════════════════════════════════════════════════════
          </div>
        </motion.div>

        {/* Table */}
        <div
          className="border overflow-x-auto"
          style={{ borderColor: "var(--matrix-border)" }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[1fr_100px_1fr] md:grid-cols-[200px_100px_1fr] gap-0 border-b text-xs font-bold"
            style={{
              borderColor: "var(--matrix-border)",
              color: "var(--matrix-green)",
            }}
          >
            <div className="px-4 py-3 glow-text">CAPABILITY</div>
            <div
              className="px-4 py-3 border-x glow-text"
              style={{ borderColor: "var(--matrix-border)" }}
            >
              STATUS
            </div>
            <div className="px-4 py-3 glow-text">DETAIL</div>
          </div>

          {/* Rows */}
          {capabilities.map((cap, i) => {
            const isActive = i < 4;
            return (
              <motion.div
                key={cap.title}
                className="grid grid-cols-[1fr_100px_1fr] md:grid-cols-[200px_100px_1fr] gap-0 transition-colors hover:bg-[#003B00]/30 group"
                style={{
                  borderBottom:
                    i < capabilities.length - 1
                      ? "1px solid var(--matrix-border)"
                      : "none",
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="px-4 py-3 text-xs font-medium glow-text">
                  {cap.title}
                </div>
                <div
                  className="px-4 py-3 text-xs font-light border-x"
                  style={{
                    borderColor: "var(--matrix-border)",
                    color: isActive
                      ? "var(--matrix-green)"
                      : "var(--matrix-amber)",
                  }}
                >
                  {isActive ? "[ACTIVE]" : "[READY]"}
                </div>
                <div
                  className="px-4 py-3 text-xs font-light"
                  style={{ color: "var(--matrix-muted)" }}
                >
                  {cap.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
