"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CornerBrackets } from "./decorators";
import { SectionHeading } from "./SectionHeading";
import { Lightbox } from "./Lightbox";

const screenshots = [
  {
    src: "/vigolium-ui-dashboard-1.png",
    label: "SCREEN-01",
    title: "Dashboard Overview",
    description: "Real-time severity distribution and scan control",
  },
  {
    src: "/vigolium-agentic-scan.png",
    label: "SCREEN-02",
    title: "Agentic Scan",
    description: "AI-powered scanning with agent sessions",
  },
  {
    src: "/vigolium-native-scan.png",
    label: "SCREEN-03",
    title: "Native Scan",
    description: "High-speed native scanning configuration",
  },
  {
    src: "/vigolium-cli-scan-1.png",
    label: "SCREEN-04",
    title: "CLI Scanner",
    description: "Terminal-based scanning with live output",
  },
  {
    src: "/vigolium-finding-list.png",
    label: "SCREEN-05",
    title: "Findings List",
    description: "Detailed vulnerability findings with severity levels",
  },
  {
    src: "/vigolium-static-report-1.png",
    label: "SCREEN-06",
    title: "Static Report",
    description: "Browser-based HTML report with traffic analysis",
  },
  {
    src: "/vigolium-traffic-list.png",
    label: "SCREEN-07",
    title: "Traffic Records",
    description: "HTTP traffic capture and inspection",
  },
  {
    src: "/vigolium-ui-dashboard-2.png",
    label: "SCREEN-08",
    title: "Findings Breakdown",
    description: "Visual breakdown of findings by module and type",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="ng-section px-6 py-16 md:py-20"
      style={{ borderBottom: "1px solid rgba(252,232,195,0.1)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading annotation="Screenshots" heading="In Action" />

        <div
          style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            paddingBottom: "12px",
            scrollSnapType: "x mandatory",
          }}
        >
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative cursor-pointer"
              whileHover={{
                backgroundColor: "rgba(252,232,195,0.03)",
                borderColor: "rgba(80,250,123,0.4)",
                transition: { duration: 0.25 },
              }}
              style={{
                border: "1px solid rgba(252,232,195,0.06)",
                transition: "all 0.25s ease",
                overflow: "hidden",
                flexShrink: 0,
                width: "520px",
                scrollSnapAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => setSelected(i)}
            >
              <CornerBrackets />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
                  borderBottom: "1px solid rgba(252,232,195,0.04)",
                }}
              >
                <span
                  className="ngb-annotation"
                  style={{
                    fontSize: "0.65rem",
                    color: "#53bdfa",
                    fontWeight: 700,
                  }}
                >
                  {shot.label}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#918175",
                    letterSpacing: "0.05em",
                  }}
                >
                  {shot.title}
                </span>
              </div>

              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.2)" }}>
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={720}
                  height={405}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "8px 12px",
                  borderTop: "1px solid rgba(252,232,195,0.04)",
                }}
              >
                <p
                  className="ng-body"
                  style={{ fontSize: "0.75rem", margin: 0 }}
                >
                  {shot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <Lightbox
            src={screenshots[selected].src}
            title={screenshots[selected].title}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
