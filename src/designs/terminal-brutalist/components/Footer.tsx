"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="tb-section">
      <div className="max-w-5xl mx-auto">
        {/* CTA block */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="tb-mono text-2xl md:text-3xl font-bold mb-8"
            style={{ color: "var(--tb-white)" }}
          >
            {footerCta.headline}
          </h2>
          <a href={footerCta.buttonHref} className="tb-cta tb-mono">
            {footerCta.buttonLabel}
          </a>
        </motion.div>

        <hr className="tb-separator mb-10" />

        {/* Links and copyright */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="tb-mono text-xs uppercase tracking-wide transition-colors duration-200"
                style={{ color: "var(--tb-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--tb-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--tb-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <span
            className="tb-mono text-xs"
            style={{ color: "var(--tb-muted)" }}
          >
            Vigolium
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
