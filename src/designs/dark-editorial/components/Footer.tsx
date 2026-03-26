"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Divider */}
        <div className="de-divider mb-20" />

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h3
            className="de-heading mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
          >
            {footerCta.headline}
          </h3>

          <a href={footerCta.buttonHref} className="de-accent-btn">
            {footerCta.buttonLabel}
          </a>
        </motion.div>

        {/* Footer divider */}
        <div className="de-divider-strong mb-10" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div
            className="font-serif-editorial"
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--de-heading)",
              letterSpacing: "0.05em",
            }}
          >
            VIGOLIUM
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans-editorial transition-colors duration-300"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--de-muted)",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--de-text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--de-muted)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line and copyright */}
        <div
          className="mt-12 pt-6 text-center"
          style={{
            borderTop: "1px solid var(--de-line)",
          }}
        >
          <p
            className="font-sans-editorial"
            style={{
              fontSize: "0.7rem",
              color: "var(--de-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            &copy; 2026 Vigolium &mdash; All Rights Reserved &mdash; Dark Editorial Edition
          </p>
        </div>
      </div>
    </footer>
  );
}
