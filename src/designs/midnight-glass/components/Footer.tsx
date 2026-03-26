"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="max-w-4xl mx-auto">
        {/* CTA card */}
        <motion.div
          className="mg-glass p-10 md:p-16 text-center relative overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="relative">
            <h2 className="mg-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              {footerCta.headline}
            </h2>
            <a
              href={footerCta.buttonHref}
              className="mg-btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              {footerCta.buttonLabel}
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Footer links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-200 hover:text-white"
              style={{ color: "var(--mg-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="h-px mb-8 mx-auto max-w-md"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.25), transparent)",
            }}
          />
          <p className="text-xs" style={{ color: "var(--mg-muted)" }}>
            &copy; {new Date().getFullYear()} Vigolium. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
