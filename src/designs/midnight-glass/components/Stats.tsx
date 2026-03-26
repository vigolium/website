"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mg-glass p-10 md:p-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative inner glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="mg-heading text-3xl md:text-4xl lg:text-5xl mb-2 mg-accent-text">
                  {stat.value}
                </div>
                <p className="mg-body text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
