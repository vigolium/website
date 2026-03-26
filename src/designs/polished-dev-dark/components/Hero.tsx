"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-4 pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: "var(--pdd-blue-subtle)",
              color: "var(--pdd-blue)",
              border: "1px solid rgba(59, 130, 246, 0.15)",
              letterSpacing: "0.04em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--pdd-blue)" }}
            />
            AI-Powered Security Scanner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          style={{ color: "var(--pdd-heading)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--pdd-body)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a href={hero.ctaPrimary.href} className="pdd-btn-primary">
            {hero.ctaPrimary.label}
            <ArrowRight size={16} />
          </a>
          <a href={hero.ctaSecondary.href} className="pdd-btn-secondary">
            {hero.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Product Screenshot Placeholder */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="pdd-gradient-border">
            <div className="pdd-gradient-border-inner">
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4 h-10"
                style={{
                  backgroundColor: "var(--pdd-bg)",
                  borderBottom: "1px solid var(--pdd-border)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ef4444" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#22c55e" }} />
                <div
                  className="ml-4 flex-1 h-6 rounded"
                  style={{
                    backgroundColor: "var(--pdd-surface)",
                    maxWidth: "280px",
                    border: "1px solid var(--pdd-border)",
                  }}
                >
                  <div
                    className="h-full flex items-center px-3 text-xs"
                    style={{ color: "var(--pdd-muted)" }}
                  >
                    app.vigolium.io/dashboard
                  </div>
                </div>
              </div>

              {/* Screenshot area */}
              <div
                className="relative w-full"
                style={{
                  height: "380px",
                  background:
                    "linear-gradient(135deg, var(--pdd-bg) 0%, var(--pdd-surface) 50%, var(--pdd-bg) 100%)",
                }}
              >
                {/* Faux dashboard elements */}
                <div className="absolute inset-0 p-6 flex flex-col gap-4">
                  {/* Top bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <div className="h-3 w-20 rounded" style={{ backgroundColor: "var(--pdd-border)" }} />
                      <div className="h-3 w-16 rounded" style={{ backgroundColor: "var(--pdd-border)" }} />
                      <div className="h-3 w-24 rounded" style={{ backgroundColor: "var(--pdd-border)" }} />
                    </div>
                    <div className="h-7 w-24 rounded" style={{ backgroundColor: "var(--pdd-blue-subtle)", border: "1px solid rgba(59,130,246,0.2)" }} />
                  </div>

                  {/* Content grid */}
                  <div className="flex-1 grid grid-cols-3 gap-4 mt-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg p-4 flex flex-col gap-3"
                        style={{
                          backgroundColor: "rgba(26, 29, 43, 0.8)",
                          border: "1px solid var(--pdd-border)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="h-2.5 w-16 rounded" style={{ backgroundColor: "var(--pdd-border-light)" }} />
                          <div
                            className="h-5 w-12 rounded-full"
                            style={{
                              backgroundColor: i === 0 ? "rgba(34,197,94,0.15)" : i === 1 ? "var(--pdd-blue-subtle)" : "rgba(239,68,68,0.1)",
                            }}
                          />
                        </div>
                        <div className="h-8 w-20 rounded" style={{ backgroundColor: "var(--pdd-border)" }} />
                        <div className="flex-1 rounded" style={{ backgroundColor: "var(--pdd-border)", opacity: 0.3 }} />
                      </div>
                    ))}
                  </div>

                  {/* Bottom bar */}
                  <div className="flex gap-3">
                    {[80, 120, 60, 100].map((w, i) => (
                      <div
                        key={i}
                        className="h-2 rounded"
                        style={{ width: `${w}px`, backgroundColor: "var(--pdd-border)", opacity: 0.5 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
