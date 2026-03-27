"use client";

import { motion } from "motion/react";
import { integrations } from "@/lib/content";
import { RegistrationMark } from "./decorators";
import { SectionHeading } from "./SectionHeading";
import { ChevronRight } from "lucide-react";

export function Integrations() {
  return (
    <section
      id="integrations"
      className="ng-section px-6 py-8 md:py-12"
      style={{ borderBottom: "1px solid rgba(252,232,195,0.1)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading annotation="Ecosystem" heading="Integrations" />

        <div className="grid grid-cols-1 gap-0">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative grid grid-cols-12 gap-0"
              style={{
                borderBottom: "1px dashed rgba(252,232,195,0.08)",
              }}
            >
              <div className="col-span-1 relative flex items-center py-5">
                <RegistrationMark className="top-1/2 left-0 -translate-y-1/2" />
                <ChevronRight
                  size={20}
                  className="ml-4"
                  style={{ color: "#53bdfa" }}
                />
              </div>

              <div
                className="col-span-4 flex items-center py-5 px-6"
                style={{
                  borderRight: "1px solid rgba(252,232,195,0.06)",
                }}
              >
                <h3
                  className="ng-heading"
                  style={{ fontSize: "1rem" }}
                >
                  {integration.name}
                </h3>
              </div>

              <div className="col-span-7 flex items-center py-5 px-6">
                <p
                  className="ng-body"
                  style={{ fontSize: "0.9rem" }}
                >
                  {integration.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
