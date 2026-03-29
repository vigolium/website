"use client";

import { motion } from "motion/react";
import { Cloud as CloudIcon } from "lucide-react";
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
            Cutting-edge AI agents handle your scanning, analysis, and continuous monitoring — no infrastructure to manage, nothing to self-host.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
