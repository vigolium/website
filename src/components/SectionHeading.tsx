"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTextScramble } from "./animations";

export function SectionHeading({
  annotation,
  heading,
}: {
  annotation: string;
  heading: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const scrambled = useTextScramble(heading, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <span className="ngb-annotation block mb-1">// {annotation}</span>
      <h2
        className="ng-heading mt-3"
        style={{ fontSize: "2rem" }}
      >
        {scrambled}
      </h2>
      <div
        style={{
          width: "48px",
          height: "1px",
          background: "#f75341",
          marginTop: "12px",
        }}
      />
    </motion.div>
  );
}
