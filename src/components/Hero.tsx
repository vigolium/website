"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { hero } from "@/lib/content";
import { RegistrationMark } from "./decorators";

/* ── Typing effect hook ── */
function useTypewriter(text: string, delay: number, speed = 30) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return { displayed, done };
}

/* ── Sonar ripple button wrapper ── */
function SonarButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
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

  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      className="ngb-corner-marks relative overflow-hidden"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "12px 32px",
        border: isPrimary ? "1px solid #50fa7b" : "1px solid rgba(255,255,255,0.1)",
        color: isPrimary ? "#50fa7b" : "#888",
        fontSize: "0.8rem",
        fontWeight: isPrimary ? 600 : 400,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.currentTarget.style.backgroundColor = "#50fa7b";
          e.currentTarget.style.color = "#000";
        } else {
          e.currentTarget.style.borderColor = "#50fa7b";
          e.currentTarget.style.color = "#50fa7b";
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#50fa7b";
        } else {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          e.currentTarget.style.color = "#888";
        }
      }}
    >
      <RegistrationMark className="-top-2 -left-2" />
      <RegistrationMark className="-top-2 -right-2" />
      <RegistrationMark className="-bottom-2 -left-2" />
      <RegistrationMark className="-bottom-2 -right-2" />
      {children}
      {/* Sonar ripples */}
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

export function Hero() {
  const { displayed: headlineText, done: headlineDone } = useTypewriter(
    hero.headline,
    600, // delay after page load
    25
  );

  return (
    <section
      className="ng-section relative flex min-h-[80vh] items-center justify-center px-6"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Corner registration marks */}
      <RegistrationMark className="top-4 left-4" />
      <RegistrationMark className="top-4 right-4" />
      <RegistrationMark className="bottom-4 left-4" />
      <RegistrationMark className="bottom-4 right-4" />

      {/* Logo nav with glitch effect */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 py-5"
      >
        <div className="mx-auto max-w-6xl flex items-center gap-3">
          <div
            className="logo-glitch"
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <Image
              src="/vigolium-logo-small.png"
              alt="Vigolium"
              width={32}
              height={32}
              style={{
                border: "1px solid rgba(80, 250, 123, 0.4)",
                borderRadius: "4px",
              }}
            />
            <style jsx>{`
              .logo-glitch:hover {
                animation: glitch 0.3s ease-in-out;
              }
            `}</style>
          </div>
          <span
            className="ng-heading"
            style={{
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
            }}
          >
            Vigolium
          </span>
        </div>
      </motion.div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left column */}
          <div className="lg:col-span-8 lg:border-r" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="py-16 lg:py-0 lg:pr-12">
              {/* Annotation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="ngb-annotation mb-3"
              >
                // CLASSIFICATION: VIGOLIUM-CORE v1.0
              </motion.div>

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-8"
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#888",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    paddingBottom: "4px",
                  }}
                >
                  Vigolium Scanner v1.0
                </span>
              </motion.div>

              {/* Headline with typing effect */}
              <div className="relative mb-8">
                <h1
                  className="ng-heading"
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 4rem)",
                    lineHeight: 1.1,
                    maxWidth: "700px",
                    minHeight: "3em",
                  }}
                >
                  {headlineText}
                  {!headlineDone && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "1em",
                        backgroundColor: "#50fa7b",
                        marginLeft: "2px",
                        verticalAlign: "text-bottom",
                        animation: "blink 0.7s step-end infinite",
                      }}
                    />
                  )}
                </h1>
              </div>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.1)",
                  transformOrigin: "left",
                  marginBottom: "2rem",
                }}
              />

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="ng-body mb-10"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  maxWidth: "540px",
                }}
              >
                {hero.subheadline}
              </motion.p>

              {/* CTAs with sonar ripple */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex flex-wrap gap-4"
              >
                <SonarButton href={hero.ctaPrimary.href} variant="primary">
                  {hero.ctaPrimary.label}
                </SonarButton>
                <SonarButton href={hero.ctaSecondary.href} variant="secondary">
                  {hero.ctaSecondary.label}
                </SonarButton>
              </motion.div>

              {/* Bottom annotation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="ngb-annotation mt-10"
              >
                REVISION 1.0 &mdash; ALL MODULES OPERATIONAL
              </motion.div>
            </div>
          </div>

          {/* Right column - decorative grid info */}
          <div className="lg:col-span-4 hidden lg:flex flex-col justify-center pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {[
                { label: "ENGINE", value: "Go + AI" },
                { label: "MODULES", value: "215" },
                { label: "MODES", value: "Native + Agentic" },
                { label: "STATUS", value: "OPERATIONAL" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="mb-6"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    paddingBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#888",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: i === 3 ? "#50fa7b" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {item.value}
                    {/* Pulsing status dot for OPERATIONAL */}
                    {i === 3 && (
                      <span
                        style={{
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#50fa7b",
                          animation: "statusPulse 2s ease-in-out infinite",
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
