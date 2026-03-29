"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";
import { Zap, BookOpen, ExternalLink } from "lucide-react";
import { CornerBrackets, RegistrationMark } from "./decorators";
import { SectionHeading } from "./SectionHeading";
import { TerminalBox } from "./Hero";

const footerLinkIcons: Record<string, React.ReactNode> = {
  Documentation: <BookOpen size={14} />,
  GitHub: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  Twitter: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  LinkedIn: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
};

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

export function QuickStart() {
  return (
    <section className="ng-section px-6 py-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading annotation="Self-hosted" heading="Quick Start" />

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-0"
          style={{
            border: "1px solid rgba(252,232,195,0.1)",
          }}
        >
          <CornerBrackets size="w-7 h-7" />

          <div id="quick-start" className="md:col-span-12 px-6 pt-6 pb-4 text-center md:text-left">
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <Zap size={18} style={{ color: "#ff8c1e" }} />
              <h2
                className="ng-heading"
                style={{ fontSize: "1.4rem" }}
              >
                {footerCta.headline}
              </h2>
            </div>
            <p
              className="ng-body"
              style={{ fontSize: "0.85rem" }}
            >
              {footerCta.subtitle}
            </p>
          </div>
          <div className="md:col-span-12 px-6 pb-6">
            <TerminalBox />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ng-section px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
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
                src="https://cdn.vigolium.com/assets/vigolium-logo-small.png"
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
              High-fidelity vulnerability scanner fusing agentic AI with native speed, modularity, and precision.
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
                  {footerLinkIcons[link.label] && <span style={{ marginRight: "6px", display: "inline-flex", verticalAlign: "middle" }}>{footerLinkIcons[link.label]}</span>}
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
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#918175",
              margin: 0,
            }}
          >
            &copy; 2026 Vigolium. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="/request-demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                fontFamily: "monospace",
                color: "#60a5fa",
                padding: "3px 10px",
                border: "1px solid rgba(96,165,250,0.3)",
                borderRadius: "3px",
                backgroundColor: "rgba(96,165,250,0.05)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 12px rgba(96,165,250,0.3), 0 0 24px rgba(96,165,250,0.15)";
                e.currentTarget.style.borderColor = "rgba(96,165,250,0.6)";
                e.currentTarget.style.backgroundColor = "rgba(96,165,250,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)";
                e.currentTarget.style.backgroundColor = "rgba(96,165,250,0.05)";
              }}
            >
              <ExternalLink size={12} />
              Request Demo
            </a>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                fontFamily: "monospace",
                color: "#50fa7b",
                padding: "3px 10px",
                border: "1px solid rgba(80,250,123,0.3)",
                borderRadius: "3px",
                backgroundColor: "rgba(80,250,123,0.05)",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#50fa7b", animation: "statusPulse 2s ease-in-out infinite" }} />
              v0.0.1-alpha
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
