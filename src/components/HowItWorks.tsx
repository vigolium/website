"use client";

import { motion } from "motion/react";
import { howItWorks } from "@/lib/content";
import { Upload, Scan, FileText, type LucideIcon } from "lucide-react";
import { RegistrationMark } from "./decorators";
import { TiltCard } from "./animations";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Scan,
  FileText,
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="ng-section px-6 py-16 md:py-20"
      style={{ borderBottom: "1px solid rgba(252,232,195,0.1)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading annotation="Process" heading="How It Works" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.iconName] || Upload;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <TiltCard
                  className="relative p-8 h-full"
                  style={{
                    border: "1px solid rgba(252,232,195,0.06)",
                    borderColor: "rgba(252,232,195,0.06)",
                  }}
                >
                  <span
                    className="absolute top-0 left-0 w-7 h-7"
                    style={{
                      borderTop: "2px solid #50fa7b",
                      borderLeft: "2px solid #50fa7b",
                    }}
                  />
                  <span
                    className="absolute bottom-0 right-0 w-7 h-7"
                    style={{
                      borderBottom: "2px solid #50fa7b",
                      borderRight: "2px solid #50fa7b",
                    }}
                  />

                  <div className="relative mb-6 inline-block">
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        border: "1px solid rgba(252,232,195,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={20} style={{ color: "#f75341" }} />
                    </div>
                    <RegistrationMark className="-top-1 -right-2" />
                  </div>

                  <h3
                    className="ng-heading mb-3"
                    style={{ fontSize: "1rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="ng-body"
                    style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
                  >
                    {step.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
