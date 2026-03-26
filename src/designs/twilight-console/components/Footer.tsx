"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* CTA Panel */}
        <motion.div
          className="twi-panel overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Accent top bar */}
          <div
            className="h-1"
            style={{
              background:
                "linear-gradient(90deg, var(--twi-lavender), var(--twi-blue), var(--twi-green))",
              opacity: 0.6,
            }}
          />

          <div className="p-8 md:p-12 text-center">
            <p
              className="twi-mono text-xs mb-4"
              style={{ color: "var(--twi-muted)" }}
            >
              // ready to deploy?
            </p>

            <h3
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: "var(--twi-text)" }}
            >
              {footerCta.headline}
            </h3>

            <a
              href={footerCta.buttonHref}
              className="twi-mono inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-110"
              style={{
                backgroundColor: "var(--twi-lavender)",
                color: "var(--twi-crust)",
              }}
            >
              <span style={{ opacity: 0.6 }}>$</span> {footerCta.buttonLabel}
            </a>
          </div>
        </motion.div>

        {/* Footer links */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 md:gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="twi-mono text-xs transition-colors duration-200"
              style={{ color: "var(--twi-muted)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--twi-lavender)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--twi-muted)";
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Status bar (IDE bottom bar) */}
        <motion.div
          className="rounded-lg overflow-hidden"
          style={{
            backgroundColor: "var(--twi-mantle)",
            border: "1px solid var(--twi-overlay)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="flex items-center justify-between px-4 py-2">
            {/* Left side */}
            <div className="flex items-center gap-4 twi-mono text-xs">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--twi-green)" }}
                />
                <span style={{ color: "var(--twi-green)" }}>ready</span>
              </div>

              <span style={{ color: "var(--twi-muted)" }}>|</span>

              <div className="flex items-center gap-1.5">
                <span style={{ color: "var(--twi-muted)" }}>main</span>
              </div>

              <span style={{ color: "var(--twi-muted)" }}>|</span>

              <div className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--twi-blue)" }}
                />
                <span style={{ color: "var(--twi-muted)" }}>TypeScript</span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4 twi-mono text-xs" style={{ color: "var(--twi-muted)" }}>
              <span>UTF-8</span>
              <span>vigolium v1.0</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p
            className="twi-mono text-xs"
            style={{ color: "var(--twi-muted)", opacity: 0.5 }}
          >
            &copy; Vigolium
          </p>
        </div>
      </div>
    </footer>
  );
}
