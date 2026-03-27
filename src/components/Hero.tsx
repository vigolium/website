"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { hero } from "@/lib/content";
import { BookOpen, Cloud, Copy, Check, Terminal } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { RegistrationMark } from "./decorators";
import { WindowChrome } from "./WindowChrome";
import { Lightbox } from "./Lightbox";

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

/* ── Terminal copy box ── */
function TerminalBox() {
  const [copied, setCopied] = useState(false);
  const hostnameRef = useRef("");

  useEffect(() => {
    hostnameRef.current = window.location.origin;
  }, []);

  const handleCopy = useCallback(() => {
    const cmd = `curl -fsSL ${hostnameRef.current}/install.sh | bash`;
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const command = `curl -fsSL ${hostnameRef.current}/install.sh | bash`;

  return (
      <div
        style={{
          border: "1px solid rgba(252,232,195,0.1)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 12px",
            borderBottom: "1px solid rgba(252,232,195,0.06)",
            backgroundColor: "rgba(252,232,195,0.03)",
          }}
        >
          <Terminal size={12} style={{ color: "#918175" }} />
          <span style={{ fontSize: "0.65rem", color: "#918175", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Try open-source on your machine
          </span>
        </div>
        <div
          onClick={handleCopy}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            backgroundColor: "rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
        >
          <code
            style={{
              fontSize: "0.85rem",
              color: "#50fa7b",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <span style={{ color: "#918175" }}>$ </span>
            {command}
          </code>
          <button
            onClick={handleCopy}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: copied ? "#50fa7b" : "#918175",
              transition: "color 0.2s ease",
              flexShrink: 0,
              marginLeft: "12px",
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
  );
}

/* ── Sonar ripple button wrapper ── */
function SonarButton({
  href,
  children,
  variant = "primary",
  accentColor = "#50fa7b",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  accentColor?: string;
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
      className={`ngb-corner-marks relative overflow-hidden${isPrimary ? " cta-glow-pulse" : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "12px 32px",
        border: isPrimary ? `1px solid ${accentColor}` : `1px solid ${accentColor}33`,
        color: isPrimary ? accentColor : accentColor,
        fontSize: "0.8rem",
        fontWeight: isPrimary ? 600 : 400,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.color = accentColor;
        if (isPrimary) {
          e.currentTarget.style.backgroundColor = accentColor;
          e.currentTarget.style.color = "#1c1b19";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        if (isPrimary) {
          e.currentTarget.style.borderColor = accentColor;
          e.currentTarget.style.color = accentColor;
        } else {
          e.currentTarget.style.borderColor = `${accentColor}33`;
          e.currentTarget.style.color = accentColor;
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
  const [showLightbox, setShowLightbox] = useState(false);
  const { displayed: headlineText, done: headlineDone } = useTypewriter(
    hero.headline,
    200, // delay after page load
    15
  );

  return (
    <section
      id="hero"
      className="ng-section relative flex min-h-[80vh] items-center justify-center px-6"
      style={{
        borderBottom: "1px solid rgba(252,232,195,0.1)",
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
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 py-5"
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              style={{
                position: "relative",
                display: "inline-block",
                border: "1.5px solid rgba(255,160,50,0.7)",
                borderRadius: "4px",
                animation: "orangeGlow 3s ease-in-out infinite",
              }}
            >
              <div
                className="logo-glitch"
                style={{
                  display: "block",
                }}
              >
                <Image
                  src="/vigolium-logo-small.png"
                  alt="Vigolium"
                  width={32}
                  height={32}
                  style={{
                    borderRadius: "4px",
                    display: "block",
                  }}
                />
              </div>
              <style jsx global>{`
                .logo-glitch:hover {
                  animation: glitch 0.3s ease-in-out;
                }
                @keyframes orangeGlow {
                  0%, 100% {
                    box-shadow: 0 0 6px rgba(255,140,30,0.3), 0 0 14px rgba(255,120,0,0.15);
                  }
                  50% {
                    box-shadow: 0 0 10px rgba(255,140,30,0.5), 0 0 24px rgba(255,120,0,0.3);
                  }
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
          <div className="flex items-center gap-6">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                fontFamily: "monospace",
                color: "#50fa7b",
                padding: "4px 12px",
                border: "1px solid rgba(80,250,123,0.3)",
                borderRadius: "3px",
                backgroundColor: "rgba(80,250,123,0.05)",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#50fa7b", animation: "statusPulse 2s ease-in-out infinite" }} />
              v1.0.0-alpha
            </span>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto max-w-6xl w-full">
        <div>
          <div className="pt-8 lg:pt-0 mt-16 lg:mt-24">
            {/* Annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
              className="ngb-annotation mb-3"
            >
              // An agent-agnostic vulnerability scanner
            </motion.div>

            {/* Headline with typing effect */}
            <div className="relative mb-2">
              <h1
                className="ng-heading"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  lineHeight: 1.1,
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
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                height: "1px",
                background: "rgba(252,232,195,0.1)",
                transformOrigin: "left",
                marginBottom: "1rem",
              }}
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="ng-body mb-2"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <SonarButton href="#cloud" variant="primary" accentColor="#50fa7b">
                <Cloud size={14} style={{ marginRight: "8px" }} />
                Vigolium Cloud
              </SonarButton>
              <SonarButton href={hero.ctaPrimary.href} variant="secondary" accentColor="#fbb829">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Try Open Source
              </SonarButton>
              <SonarButton href={hero.ctaSecondary.href} variant="secondary" accentColor="#53bdfa">
                <BookOpen size={14} style={{ marginRight: "8px" }} />
                Documentation
              </SonarButton>
            </motion.div>
          </div>
        </div>

        {/* Terminal install box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="mt-4 lg:mt-8"
        >
          <TerminalBox />
        </motion.div>

        {/* Main workbench showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-6 mb-12"
        >
          <div
            className="relative"
            style={{
              border: "1px solid rgba(252,232,195,0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => setShowLightbox(true)}
          >
            <WindowChrome title="Vigolium Dashboard" />
            <Image
              src="/vigolium-main-workbench.png"
              alt="Vigolium Main Workbench"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </motion.div>

      </div>

      <AnimatePresence>
        {showLightbox && (
          <Lightbox
            src="/vigolium-main-workbench.png"
            title="Vigolium Dashboard"
            onClose={() => setShowLightbox(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
