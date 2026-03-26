"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="ng-section relative flex min-h-screen items-center justify-center px-6"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="mx-auto max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left column */}
          <div className="lg:col-span-8 lg:border-r" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="py-16 lg:py-0 lg:pr-12">
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-8"
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#888",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    paddingBottom: "4px",
                  }}
                >
                  Vigolium Scanner v1.0
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="ng-heading mb-8"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  lineHeight: 1.1,
                  maxWidth: "700px",
                }}
              >
                {hero.headline}
              </motion.h1>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.1)",
                  transformOrigin: "left",
                  marginBottom: "2rem",
                }}
              />

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="ng-body mb-10"
                style={{
                  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                  maxWidth: "540px",
                }}
              >
                {hero.subheadline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={hero.ctaPrimary.href}
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
                  {hero.ctaPrimary.label}
                </a>
                <a
                  href={hero.ctaSecondary.href}
                  className="ng-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "12px 32px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "#888",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00ffcc";
                    e.currentTarget.style.color = "#00ffcc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#888";
                  }}
                >
                  {hero.ctaSecondary.label}
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right column - decorative grid info */}
          <div className="lg:col-span-4 hidden lg:flex flex-col justify-center pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {[
                { label: "ENGINE", value: "Go + AI" },
                { label: "MODULES", value: "40+" },
                { label: "LATENCY", value: "<1s" },
                { label: "STATUS", value: "OPERATIONAL" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="mb-6"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    paddingBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#555",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: i === 3 ? "#00ffcc" : "#fff",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
