"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="px-6 pt-32 pb-16">
      <div className="mx-auto max-w-4xl">
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="vg-section mb-20 p-12 text-center"
          style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
        >
          <h2
            className="vg-heading mb-6"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
          >
            {footerCta.headline}
          </h2>
          <a
            href={footerCta.buttonHref}
            className="inline-block px-8 py-3 transition-all duration-400"
            style={{
              border: "1px solid rgba(94,234,212,0.3)",
              borderRadius: "12px",
              color: "#f3f4f6",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "0.04em",
              backgroundColor: "rgba(94,234,212,0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(94,234,212,0.12)";
              e.currentTarget.style.boxShadow =
                "0 0 24px rgba(94,234,212,0.12)";
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(94,234,212,0.06)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(94,234,212,0.3)";
            }}
          >
            {footerCta.buttonLabel}
          </a>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
            marginBottom: "2rem",
          }}
        />

        {/* Footer links and branding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 300,
              color: "#4b5563",
              letterSpacing: "0.04em",
            }}
          >
            Vigolium
          </p>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "#6b7280",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d1d5db";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#6b7280";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
