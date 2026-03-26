"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="om-border-t">
      {/* CTA section */}
      <div className="om-section" style={{ paddingBottom: "6rem" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="om-mono mb-12"
          >
            06 / Get Started
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="om-headline mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: "700px" }}
          >
            {footerCta.headline}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href={footerCta.buttonHref}
              style={{
                backgroundColor: "var(--om-blue)",
                color: "#ffffff",
                padding: "0.875rem 2.5rem",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {footerCta.buttonLabel}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer links and copyright */}
      <div className="om-border-t" style={{ padding: "3rem 2rem" }}>
        <div
          className="mx-auto flex flex-wrap items-center justify-between gap-6"
          style={{ maxWidth: "1100px" }}
        >
          {/* Links */}
          <div className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="om-mono"
                style={{
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--om-gray)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="om-mono" style={{ fontSize: "0.65rem" }}>
            &copy; 2026 Vigolium
          </p>
        </div>
      </div>
    </footer>
  );
}
