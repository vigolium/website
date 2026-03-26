"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer
      className="ds-section relative px-6 py-24 md:py-32"
      style={{ backgroundColor: "#18160f" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="ds-heading mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            {footerCta.headline}
          </h2>
          <a href={footerCta.buttonHref} className="ds-accent-btn">
            {footerCta.buttonLabel}
          </a>
        </motion.div>

        {/* Thick divider */}
        <div
          style={{
            height: "3px",
            background: "var(--ds-border-thick)",
            marginBottom: "2rem",
          }}
        />

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="ds-slab"
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--ds-muted)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--ds-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--ds-muted)";
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="ds-body text-center mt-10"
          style={{
            fontSize: "0.75rem",
            color: "rgba(158, 150, 136, 0.5)",
            fontWeight: 400,
          }}
        >
          &copy; 2026 Vigolium. Built for security teams.
        </motion.p>
      </div>
    </footer>
  );
}
