"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/content";
import { Shield } from "lucide-react";

export function Capabilities() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mg-section-label mb-4 inline-flex">Capabilities</span>
          <h2 className="mg-heading text-3xl md:text-5xl mt-5">
            Comprehensive vulnerability coverage
          </h2>
          <p className="mg-body text-lg mt-4 max-w-xl mx-auto">
            From common web flaws to complex logic bugs, Vigolium has you covered.
          </p>
        </motion.div>

        {/* Capability cards in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="mg-glass p-6 transition-all duration-300 group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(168,85,247,0.12)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                >
                  <span style={{ color: "var(--mg-accent)" }}><Shield size={16} /></span>
                </div>
                <div>
                  <h3 className="mg-heading text-base mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="mg-body text-sm" style={{ lineHeight: 1.6 }}>
                    {cap.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
