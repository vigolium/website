"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";
import { Plug } from "lucide-react";

export function Integrations() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mg-section-label mb-4 inline-flex">Integrations</span>
          <h2 className="mg-heading text-3xl md:text-5xl mt-5">
            Fits your workflow
          </h2>
          <p className="mg-body text-lg mt-4 max-w-lg mx-auto">
            Plug into your existing tools and pipelines with zero friction.
          </p>
        </motion.div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              className="mg-glass p-6 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(168,85,247,0.08))",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
              >
                <span style={{ color: "#c084fc" }}><Plug size={18} /></span>
              </div>
              <h3 className="mg-heading text-base mb-1.5">
                {integration.name}
              </h3>
              <p className="mg-body text-sm">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
