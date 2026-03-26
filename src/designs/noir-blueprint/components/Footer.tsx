"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center mb-16 p-10"
          style={{
            border: "1px solid rgba(56, 189, 248, 0.2)",
          }}
        >
          {/* Corner brackets */}
          <span
            className="absolute top-0 left-0 w-4 h-4"
            style={{
              borderTop: "1px solid rgba(56, 189, 248, 0.5)",
              borderLeft: "1px solid rgba(56, 189, 248, 0.5)",
            }}
          />
          <span
            className="absolute top-0 right-0 w-4 h-4"
            style={{
              borderTop: "1px solid rgba(56, 189, 248, 0.5)",
              borderRight: "1px solid rgba(56, 189, 248, 0.5)",
            }}
          />
          <span
            className="absolute bottom-0 left-0 w-4 h-4"
            style={{
              borderBottom: "1px solid rgba(56, 189, 248, 0.5)",
              borderLeft: "1px solid rgba(56, 189, 248, 0.5)",
            }}
          />
          <span
            className="absolute bottom-0 right-0 w-4 h-4"
            style={{
              borderBottom: "1px solid rgba(56, 189, 248, 0.5)",
              borderRight: "1px solid rgba(56, 189, 248, 0.5)",
            }}
          />

          <h3
            className="bp-headline mb-6"
            style={{ fontSize: "1.3rem", color: "#F8FAFC" }}
          >
            {footerCta.headline}
          </h3>

          <a
            href={footerCta.buttonHref}
            className="bp-corner-marks relative inline-block px-10 py-3 transition-all duration-300"
            style={{
              border: "1px solid #38BDF8",
              color: "#F8FAFC",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              backgroundColor: "rgba(56, 189, 248, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(56, 189, 248, 0.25)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(56, 189, 248, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(56, 189, 248, 0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Registration marks at corners */}
            <span
              className="absolute -top-2 -left-2 text-xs select-none"
              style={{ color: "rgba(56, 189, 248, 0.3)", fontSize: "10px" }}
            >
              +
            </span>
            <span
              className="absolute -top-2 -right-2 text-xs select-none"
              style={{ color: "rgba(56, 189, 248, 0.3)", fontSize: "10px" }}
            >
              +
            </span>
            <span
              className="absolute -bottom-2 -left-2 text-xs select-none"
              style={{ color: "rgba(56, 189, 248, 0.3)", fontSize: "10px" }}
            >
              +
            </span>
            <span
              className="absolute -bottom-2 -right-2 text-xs select-none"
              style={{ color: "rgba(56, 189, 248, 0.3)", fontSize: "10px" }}
            >
              +
            </span>
            {footerCta.buttonLabel}
          </a>
        </motion.div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300"
                style={{
                  fontSize: "0.75rem",
                  color: "#94A3B8",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#38BDF8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#94A3B8";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Revision block */}
          <div
            className="relative"
            style={{
              border: "1px solid rgba(56, 189, 248, 0.2)",
              fontSize: "0.65rem",
              color: "#94A3B8",
              minWidth: "200px",
            }}
          >
            <div
              className="bp-headline px-3 py-1"
              style={{
                fontSize: "0.6rem",
                borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
                color: "rgba(56, 189, 248, 0.6)",
              }}
            >
              REVISION BLOCK
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td
                    className="px-3 py-1"
                    style={{
                      borderRight: "1px solid rgba(56, 189, 248, 0.15)",
                      borderBottom: "1px solid rgba(56, 189, 248, 0.15)",
                      color: "rgba(56, 189, 248, 0.5)",
                    }}
                  >
                    DRAWN
                  </td>
                  <td
                    className="px-3 py-1"
                    style={{
                      borderBottom: "1px solid rgba(56, 189, 248, 0.15)",
                    }}
                  >
                    VIGOLIUM
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-3 py-1"
                    style={{
                      borderRight: "1px solid rgba(56, 189, 248, 0.15)",
                      borderBottom: "1px solid rgba(56, 189, 248, 0.15)",
                      color: "rgba(56, 189, 248, 0.5)",
                    }}
                  >
                    DATE
                  </td>
                  <td
                    className="px-3 py-1"
                    style={{
                      borderBottom: "1px solid rgba(56, 189, 248, 0.15)",
                    }}
                  >
                    2024
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-3 py-1"
                    style={{
                      borderRight: "1px solid rgba(56, 189, 248, 0.15)",
                      color: "rgba(56, 189, 248, 0.5)",
                    }}
                  >
                    REV
                  </td>
                  <td className="px-3 py-1">1.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom fold line decoration */}
        <div
          className="mt-12"
          style={{
            borderTop: "1px dashed rgba(56, 189, 248, 0.15)",
            paddingTop: "1rem",
            textAlign: "center",
          }}
        >
          <span className="bp-annotation">
            &copy; VIGOLIUM — ALL RIGHTS RESERVED — BLUEPRINT SERIES NO. 03
          </span>
        </div>
      </div>
    </footer>
  );
}
