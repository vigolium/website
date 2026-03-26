"use client";

import { motion } from "motion/react";
import { hero } from "@/lib/content";

function DimensionLine({
  label,
  vertical = false,
  className = "",
}: {
  label: string;
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex items-center justify-center ${className}`}
      style={{
        ...(vertical
          ? { flexDirection: "column", width: "20px" }
          : { flexDirection: "row", height: "20px" }),
      }}
    >
      {/* Start tick */}
      <div
        style={{
          ...(vertical
            ? { width: "8px", height: "1px" }
            : { width: "1px", height: "8px" }),
          backgroundColor: "rgba(56, 189, 248, 0.3)",
        }}
      />
      {/* Line */}
      <div
        style={{
          flex: 1,
          ...(vertical
            ? { width: "1px", minHeight: "40px" }
            : { height: "1px", minWidth: "40px" }),
          backgroundColor: "rgba(56, 189, 248, 0.3)",
        }}
      />
      {/* Label */}
      <span
        className="bp-annotation"
        style={{
          position: "absolute",
          ...(vertical
            ? { writingMode: "vertical-rl", transform: "rotate(180deg)" }
            : {}),
          padding: "0 4px",
          backgroundColor: "#0A1628",
          fontSize: "0.6rem",
          color: "rgba(56, 189, 248, 0.5)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      {/* End tick */}
      <div
        style={{
          ...(vertical
            ? { width: "8px", height: "1px" }
            : { width: "1px", height: "8px" }),
          backgroundColor: "rgba(56, 189, 248, 0.3)",
        }}
      />
    </div>
  );
}

function RegistrationMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute text-xs select-none ${className}`}
      style={{ color: "rgba(56, 189, 248, 0.3)", fontSize: "10px", lineHeight: 1 }}
    >
      +
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Corner registration marks */}
      <RegistrationMark className="top-4 left-4" />
      <RegistrationMark className="top-4 right-4" />
      <RegistrationMark className="bottom-4 left-4" />
      <RegistrationMark className="bottom-4 right-4" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Annotation above headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bp-annotation mb-4"
        >
          // CLASSIFICATION: VIGOLIUM-CORE v1.0
        </motion.div>

        {/* Headline with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="relative inline-block mb-6"
        >
          {/* Horizontal dimension line above */}
          <DimensionLine
            label="1240px"
            className="left-0 right-0 -top-8"
          />

          <h1
            className="bp-headline"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
              lineHeight: 1.3,
              color: "#F8FAFC",
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: "2px solid #38BDF8",
              animation: "typewriter 3s steps(60, end) forwards, blinkCursor 0.8s step-end infinite",
              maxWidth: "100%",
            }}
          >
            {hero.headline.split(" ").slice(0, 6).join(" ")}
          </h1>

          {/* Horizontal dimension line below */}
          <DimensionLine
            label="VIGOLIUM-01"
            className="left-0 right-0 -bottom-8"
          />
        </motion.div>

        {/* Full headline for smaller screens / accessibility, wrapping version */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          className="bp-headline mt-8 mb-6"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
            lineHeight: 1.4,
            color: "#38BDF8",
            whiteSpace: "normal",
          }}
        >
          {hero.headline}
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
          style={{
            color: "#94A3B8",
            fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
          }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href={hero.ctaPrimary.href}
            className="bp-corner-marks relative px-8 py-3 transition-all duration-300"
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
            <RegistrationMark className="-top-2 -left-2" />
            <RegistrationMark className="-top-2 -right-2" />
            <RegistrationMark className="-bottom-2 -left-2" />
            <RegistrationMark className="-bottom-2 -right-2" />
            {hero.ctaPrimary.label}
          </a>

          {/* Secondary CTA */}
          <a
            href={hero.ctaSecondary.href}
            className="bp-corner-marks relative px-8 py-3 transition-all duration-300"
            style={{
              border: "1px solid rgba(56, 189, 248, 0.3)",
              color: "#94A3B8",
              fontSize: "0.85rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#38BDF8";
              e.currentTarget.style.color = "#F8FAFC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
              e.currentTarget.style.color = "#94A3B8";
            }}
          >
            <RegistrationMark className="-top-2 -left-2" />
            <RegistrationMark className="-top-2 -right-2" />
            <RegistrationMark className="-bottom-2 -left-2" />
            <RegistrationMark className="-bottom-2 -right-2" />
            {hero.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Bottom annotation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 4.8 }}
          className="bp-annotation mt-12"
        >
          REVISION 1.0 &mdash; ALL MODULES OPERATIONAL
        </motion.div>
      </div>

      {/* Vertical dimension line left side */}
      <DimensionLine
        label="100vh"
        vertical
        className="left-8 top-1/4 bottom-1/4 hidden lg:flex"
      />

      {/* Crosshair center decoration */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.08,
        }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400">
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="0.5"
          />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#38BDF8" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#38BDF8" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
