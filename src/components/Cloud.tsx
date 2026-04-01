"use client";

import { motion } from "motion/react";
import { Cloud as CloudIcon, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CornerBrackets } from "./decorators";

export function Cloud() {
  return (
    <section
      id="cloud"
      className="ng-section px-6 py-8 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading annotation="Cloud" heading="Vigolium Cloud" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col items-center justify-center text-center py-20"
          style={{
            border: "1px dashed rgba(252,232,195,0.1)",
          }}
        >
          <CornerBrackets />

          <CloudIcon size={40} style={{ color: "#53bdfa", marginBottom: "1.5rem", opacity: 0.6 }} />

          <span
            className="ng-heading"
            style={{
              fontSize: "1.5rem",
              letterSpacing: "0.1em",
              color: "#53bdfa",
            }}
          >
            Coming Soon
          </span>

          <p
            className="ng-body mt-4"
            style={{ fontSize: "0.9rem", maxWidth: "480px" }}
          >
            Cutting-edge AI agents handle your scanning, analysis, and continuous monitoring. No infrastructure to manage, nothing to self-host.
          </p>

          <p
            className="ng-body mt-3"
            style={{ fontSize: "0.85rem", maxWidth: "480px", opacity: 0.7 }}
          >
            We&apos;re currently offering private access to enterprise customers only.
          </p>

          <a
            href="https://www.vigolium.com/request-demo"
            className="mt-5 inline-flex items-center gap-2"
            style={{
              fontSize: "0.85rem",
              color: "#53bdfa",
              textDecoration: "none",
              padding: "8px 20px",
              border: "1px solid rgba(83,189,250,0.3)",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(83,189,250,0.6)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(83,189,250,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(83,189,250,0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Request a Demo <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
