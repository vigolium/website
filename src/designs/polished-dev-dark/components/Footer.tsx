"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        {/* CTA section */}
        <motion.div
          className="text-center mb-16 p-12 md:p-16 rounded-xl"
          style={{
            backgroundColor: "var(--pdd-surface)",
            border: "1px solid var(--pdd-border)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-6"
            style={{ color: "var(--pdd-heading)" }}
          >
            {footerCta.headline}
          </h2>
          <a
            href={footerCta.buttonHref}
            className="pdd-btn-primary"
          >
            {footerCta.buttonLabel}
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Links & copyright */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid var(--pdd-border)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--pdd-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--pdd-heading)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--pdd-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs" style={{ color: "var(--pdd-muted)" }}>
            &copy; {new Date().getFullYear()} Vigolium. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
