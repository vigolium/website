"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { hero } from "@/lib/content";
import { Cloud, Copy, Check, Terminal, MessageSquare } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { RegistrationMark } from "./decorators";
import { useTextScramble } from "./animations";
import { WindowChrome } from "./WindowChrome";
import { Lightbox } from "./Lightbox";
import { TopNav } from "./TopNav";

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
export function TerminalBox() {
  const [copied, setCopied] = useState(false);
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    setHostname(window.location.origin);
  }, []);

  const handleCopy = useCallback(() => {
    const text = `# We're currently offering private access to enterprise customers only.\n# Visit https://www.vigolium.com/request-demo to request a demo\ncurl -fsSL ${hostname}/install.sh | bash`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [hostname]);

  const command = `curl -fsSL ${hostname}/install.sh | bash`;

  return (
      <div
        style={{
          border: "1px solid rgba(252,232,195,0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(80,250,123,0.4)";
          e.currentTarget.style.boxShadow = "0 0 15px rgba(80,250,123,0.15), 0 0 30px rgba(80,250,123,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(252,232,195,0.1)";
          e.currentTarget.style.boxShadow = "none";
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
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span style={{ color: "#918175" }}>
              # We're currently offering private access to enterprise customers only.
            </span>
            <span style={{ color: "#918175" }}>
              # Visit https://www.vigolium.com/request-demo to request a demo
            </span>
            <span style={{ whiteSpace: "nowrap" }}>
              <span style={{ color: "#918175" }}>$ </span>
              {command}
            </span>
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
  title,
  className: extraClassName,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  accentColor?: string;
  title?: string;
  className?: string;
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
      title={title}
      className={`ngb-corner-marks relative overflow-hidden py-3 px-8 text-[0.8rem]${isPrimary ? " cta-glow-pulse" : ""}${extraClassName ? ` ${extraClassName}` : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: isPrimary ? `1px solid ${accentColor}` : `1px solid ${accentColor}33`,
        color: isPrimary ? accentColor : accentColor,
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
          e.currentTarget.style.boxShadow = `0 0 15px ${accentColor}40, 0 0 30px ${accentColor}25, 0 0 50px ${accentColor}15`;
        } else {
          e.currentTarget.style.boxShadow = `inset 0 0 20px ${accentColor}30, inset 0 0 40px ${accentColor}15, 0 0 15px ${accentColor}20`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.boxShadow = "none";
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
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const headlineInView = useInView(headlineRef, { once: true });
  const headlineText = useTextScramble(hero.headline, headlineInView, { duration: 250, stagger: 15 });

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

      <TopNav />

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

            {/* Headline with scramble effect */}
            <motion.div
              className="relative mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1
                ref={headlineRef}
                className="ng-heading"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  lineHeight: 1.1,
                }}
              >
                {headlineText}
              </h1>
            </motion.div>

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
              className="flex flex-wrap gap-4 items-center justify-center sm:justify-start"
            >
              <SonarButton href="#cloud" variant="primary" accentColor="#50fa7b" title="Scan Your Stack" className="!py-2 !px-5 sm:!py-3 sm:!px-8 !text-xs sm:!text-[0.8rem]">
                <Cloud size={14} style={{ marginRight: "8px" }} />
                Scan Your Stack
              </SonarButton>
              <SonarButton href="/request-demo" variant="secondary" accentColor="#53bdfa" title="Request Demo" className="!py-2 !px-5 sm:!py-3 sm:!px-8 !text-xs sm:!text-[0.8rem]">
                <MessageSquare size={14} className="mr-2" />
                Request Demo
              </SonarButton>
            </motion.div>
          </div>
        </div>

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
