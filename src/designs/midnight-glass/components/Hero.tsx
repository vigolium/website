"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24">
      {/* Hero glow behind content */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent 60%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="w-full max-w-4xl mx-auto text-center relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <span className="mg-section-label">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "var(--mg-accent)",
                boxShadow: "0 0 8px var(--mg-accent)",
              }}
            />
            AI-Powered Security Scanner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mg-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mg-body text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={hero.ctaPrimary.href}
            className="mg-btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base"
          >
            {hero.ctaPrimary.label}
            <ArrowRight size={18} />
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="mg-btn-secondary inline-flex items-center gap-2 px-7 py-3.5 text-base"
          >
            <Play size={16} />
            {hero.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Decorative glass panel below hero */}
        <motion.div
          className="mg-glass mt-16 mx-auto max-w-3xl p-px overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div
            className="rounded-[15px] p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(139,92,246,0.03), transparent)",
            }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Scan Speed", value: "10k req/s" },
                { label: "AI Models", value: "Multi-Agent" },
                { label: "Modules", value: "40+" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                >
                  <div
                    className="mg-heading text-2xl md:text-3xl mb-1 mg-accent-text"
                  >
                    {item.value}
                  </div>
                  <div className="text-sm" style={{ color: "var(--mg-muted)" }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
