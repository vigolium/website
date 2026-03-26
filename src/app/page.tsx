"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { designsMeta } from "@/lib/content";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Vigolium
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            12 distinct landing page designs for a high-fidelity vulnerability
            scanner. Same content, completely different visual identities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designsMeta.map((design, i) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/${design.id}`}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:scale-[1.02]">
                  <div
                    className="h-32 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${design.colors[0]}, ${design.colors[1]}, ${design.colors[2]})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                    <div className="absolute bottom-3 left-4 text-sm font-mono text-white/60">
                      /{design.id}
                    </div>
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2">
                      {design.name}
                    </h2>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {design.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
