"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="ng-section px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-0 mb-20"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="md:col-span-8 p-10" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
            <h2
              className="ng-heading mb-2"
              style={{ fontSize: "1.4rem" }}
            >
              {footerCta.headline}
            </h2>
            <p
              className="ng-body"
              style={{ fontSize: "0.8rem" }}
            >
              Deploy in minutes. No configuration needed.
            </p>
          </div>
          <div className="md:col-span-4 flex items-center justify-center p-10">
            <a
              href={footerCta.buttonHref}
              style={{
                display: "inline-block",
                padding: "12px 32px",
                border: "1px solid #00ffcc",
                color: "#00ffcc",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#00ffcc";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#00ffcc";
              }}
            >
              {footerCta.buttonLabel}
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "2rem",
          }}
        />

        {/* Footer links and branding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          {/* Brand */}
          <div className="md:col-span-4">
            <div
              className="ng-heading mb-2"
              style={{ fontSize: "0.9rem", letterSpacing: "0.15em" }}
            >
              Vigolium
            </div>
            <p
              className="ng-body"
              style={{ fontSize: "0.7rem" }}
            >
              High-fidelity vulnerability scanner
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="ng-link"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#333",
            }}
          >
            &copy; 2026 Vigolium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
