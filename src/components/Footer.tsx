"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";
import { Rocket } from "lucide-react";
import { CornerBrackets, RegistrationMark } from "./decorators";

/* ── Sonar ripple button ── */
function SonarCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const nextId = useRef(0);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = nextId.current++;
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  return (
    <a
      href={href}
      className="ngb-corner-marks relative overflow-hidden"
      style={{
        display: "inline-block",
        padding: "12px 32px",
        border: "1px solid #50fa7b",
        color: "#50fa7b",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#50fa7b";
        e.currentTarget.style.color = "#1c1b19";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#50fa7b";
      }}
    >
      <RegistrationMark className="-top-2 -left-2" />
      <RegistrationMark className="-top-2 -right-2" />
      <RegistrationMark className="-bottom-2 -left-2" />
      <RegistrationMark className="-bottom-2 -right-2" />
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            width: "20px",
            height: "20px",
            marginLeft: "-10px",
            marginTop: "-10px",
            borderRadius: "50%",
            border: "1px solid #50fa7b",
            animation: "sonarPing 0.6s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="ng-section px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-0 mb-12"
          style={{
            border: "1px solid rgba(252,232,195,0.1)",
          }}
        >
          <CornerBrackets size="w-7 h-7" />

          <div className="md:col-span-8 p-10 text-center md:text-left" style={{ borderRight: "none", borderBottom: "1px solid rgba(252,232,195,0.06)" }}>
            <h2
              className="ng-heading mb-2"
              style={{ fontSize: "1.6rem" }}
            >
              {footerCta.headline}
            </h2>
            <p
              className="ng-body"
              style={{ fontSize: "0.9rem" }}
            >
              Deploy in minutes. No configuration needed.
            </p>
            <style jsx>{`
              @media (min-width: 768px) {
                div { border-right: 1px solid rgba(252,232,195,0.06) !important; border-bottom: none !important; }
              }
            `}</style>
          </div>
          <div className="md:col-span-4 flex items-center justify-center p-6 md:p-10">
            <SonarCTA href={footerCta.buttonHref}>
              {footerCta.buttonLabel}
            </SonarCTA>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(252,232,195,0.06)",
            marginBottom: "2rem",
          }}
        />

        {/* Footer links and branding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/vigolium-logo-small.png"
                alt="Vigolium"
                width={24}
                height={24}
                style={{
                  border: "1px solid rgba(80,250,123,0.4)",
                  borderRadius: "4px",
                }}
              />
              <span
                className="ng-heading"
                style={{ fontSize: "1rem", letterSpacing: "0.15em" }}
              >
                Vigolium
              </span>
            </div>
            <p
              className="ng-body"
              style={{ fontSize: "0.85rem" }}
            >
              High-fidelity vulnerability scanner
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="ng-link"
                  style={{
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px dashed rgba(252,232,195,0.08)",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#918175",
            }}
          >
            &copy; 2026 Vigolium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
