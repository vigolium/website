"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";
import { Puzzle } from "lucide-react";

const statusLabels = ["installed", "installed", "active", "installed", "active"];
const statusPills = [
  "twi-pill-green",
  "twi-pill-green",
  "twi-pill-blue",
  "twi-pill-green",
  "twi-pill-blue",
];

export function Integrations() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="twi-pill twi-pill-lavender twi-mono mb-4 inline-block" style={{
            backgroundColor: "rgba(180, 190, 254, 0.12)",
            color: "var(--twi-lavender)",
          }}>
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--twi-lavender)" }}
            />
            extensions
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-4"
            style={{ color: "var(--twi-text)" }}
          >
            Integrations
          </h2>
        </motion.div>

        {/* Extensions list panel */}
        <div className="twi-panel overflow-hidden">
          {/* Panel header */}
          <div
            className="twi-mono text-xs px-5 py-3 flex items-center justify-between"
            style={{
              backgroundColor: "var(--twi-mantle)",
              borderBottom: "1px solid var(--twi-overlay)",
              borderRadius: "12px 12px 0 0",
              color: "var(--twi-muted)",
            }}
          >
            <div className="flex items-center gap-2">
              <Puzzle size={13} />
              Extensions
            </div>
            <span>{integrations.length} available</span>
          </div>

          {/* Extension list */}
          <div className="divide-y" style={{ borderColor: "var(--twi-overlay)" }}>
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                className="flex items-center gap-4 px-5 py-4 transition-colors duration-150"
                style={{ borderColor: "var(--twi-overlay)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(69, 71, 90, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {/* Icon placeholder */}
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--twi-overlay)",
                  }}
                >
                  <Puzzle
                    size={16}
                    style={{ color: "var(--twi-subtext)" } as React.CSSProperties}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="twi-mono text-sm font-semibold"
                    style={{ color: "var(--twi-text)" }}
                  >
                    {integration.name}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "var(--twi-muted)" }}
                  >
                    {integration.description}
                  </p>
                </div>

                {/* Status badge */}
                <span
                  className={`twi-pill ${statusPills[i % statusPills.length]} twi-mono flex-shrink-0`}
                >
                  {statusLabels[i % statusLabels.length]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
