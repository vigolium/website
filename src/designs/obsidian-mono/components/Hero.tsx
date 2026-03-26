"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center"
      style={{ padding: "6rem 2rem" }}
    >
      {/* Hairline top border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "1px", backgroundColor: "var(--om-border)" }}
      />

      <div className="relative z-10 mx-auto w-full" style={{ maxWidth: "1100px" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="om-mono mb-12"
        >
          Vigolium / Security Scanner
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="om-headline"
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            color: "#ffffff",
            maxWidth: "100%",
            marginBottom: "3rem",
          }}
        >
          {hero.headline.split(" ").slice(0, 4).join(" ")}
        </motion.h1>

        {/* Hairline divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            height: "1px",
            backgroundColor: "var(--om-border)",
            transformOrigin: "left",
            marginBottom: "3rem",
          }}
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="om-body"
          style={{
            maxWidth: "540px",
            fontSize: "0.95rem",
            marginBottom: "4rem",
          }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center gap-6"
        >
          {/* Primary — the ONLY color element */}
          <a
            href={hero.ctaPrimary.href}
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
            {hero.ctaPrimary.label}
          </a>

          {/* Secondary — hairline border only */}
          <a
            href={hero.ctaSecondary.href}
            style={{
              border: "1px solid var(--om-border)",
              color: "var(--om-gray)",
              padding: "0.875rem 2.5rem",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--om-gray)";
              e.currentTarget.style.borderColor = "var(--om-border)";
            }}
          >
            {hero.ctaSecondary.label}
          </a>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "1px", backgroundColor: "var(--om-border)" }}
      />
    </section>
  );
}
