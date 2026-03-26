import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";

const stepNames = ["INGEST", "SCAN", "REPORT"];

export function HowItWorks() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs font-light"
            style={{ color: "var(--matrix-dim)" }}
          >
            {"// PROCESS FLOW"}
          </span>
          <div
            className="mt-2 text-xs"
            style={{ color: "var(--matrix-border)" }}
          >
            ═══════════════════════════════════════════════════════
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              {/* ASCII box */}
              <div
                className="border p-5 glow-border glitch-hover"
                style={{ borderColor: "var(--matrix-border)" }}
              >
                {/* Top decoration */}
                <div
                  className="text-xs mb-3 font-light"
                  style={{ color: "var(--matrix-dim)" }}
                >
                  ┌─ STEP {step.step} ─┐
                </div>

                {/* Step name */}
                <div className="text-lg font-bold glow-text-strong mb-3">
                  [{step.step}] {stepNames[i]}
                </div>

                {/* Title */}
                <div className="text-sm font-medium mb-2 glow-text">
                  {step.title}
                </div>

                {/* Description */}
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "var(--matrix-muted)" }}
                >
                  {step.description}
                </p>

                {/* Progress bar decoration */}
                <div
                  className="mt-4 text-xs font-light"
                  style={{ color: "var(--matrix-dim)" }}
                >
                  {i === 0 && "[████████░░] 80%"}
                  {i === 1 && "[██████████] 100%"}
                  {i === 2 && "[███████░░░] 70%"}
                </div>
              </div>

              {/* Arrow connector (hidden on mobile, shown between boxes on desktop) */}
              {i < howItWorks.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-4 text-xs glow-text"
                  style={{ transform: "translateY(-50%)" }}
                >
                  ▶
                </div>
              )}

              {/* Mobile arrow */}
              {i < howItWorks.length - 1 && (
                <div
                  className="md:hidden text-center py-2 text-xs"
                  style={{ color: "var(--matrix-dim)" }}
                >
                  │
                  <br />▼
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
