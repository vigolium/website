"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
  type MouseEvent,
} from "react";

/* ═══════════════════════════════════════════════════════
   1. TEXT SCRAMBLE — hacker-style character decode effect
   ═══════════════════════════════════════════════════════ */

const SCRAMBLE_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`01";

export function useTextScramble(text: string, inView: boolean) {
  const [display, setDisplay] = useState(text);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!inView || hasPlayed.current) return;
    hasPlayed.current = true;

    const chars = text.split("");
    const duration = 600; // total ms
    const staggerPerChar = 40; // ms offset per character
    const startTime = performance.now();
    let animId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const result = chars.map((char, i) => {
        if (char === " ") return " ";
        const charStart = i * staggerPerChar;
        const charProgress = Math.max(0, elapsed - charStart) / duration;
        if (charProgress >= 1) return char;
        // Show random character while scrambling
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      });

      setDisplay(result.join(""));

      // Check if all characters are resolved
      const totalDuration = duration + chars.length * staggerPerChar;
      if (elapsed < totalDuration) {
        animId = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [inView, text]);

  return display;
}

/* ═══════════════════════════════════════════════════════
   2. TILT CARD — 3D perspective hover effect
   ═══════════════════════════════════════════════════════ */

export function TiltCard({
  children,
  className,
  style,
  hoverBg = "rgba(252,232,195,0.03)",
  hoverBorder = "rgba(80,250,123,0.4)",
  onMouseMove: externalMouseMove,
  onMouseLeave: externalMouseLeave,
  onMouseEnter: externalMouseEnter,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverBg?: string;
  hoverBorder?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      externalMouseMove?.(e);
    },
    [externalMouseMove],
  );

  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      el.style.backgroundColor = hoverBg;
      el.style.borderColor = hoverBorder;
      externalMouseEnter?.(e);
    },
    [hoverBg, hoverBorder, externalMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
      el.style.backgroundColor = "transparent";
      el.style.borderColor = style?.borderColor as string ?? "";
      externalMouseLeave?.(e);
    },
    [externalMouseLeave, style?.borderColor],
  );

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        transition: "transform 0.3s ease, background-color 0.25s ease, border-color 0.25s ease",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   3. SCROLL PROGRESS BAR — neon green top bar
   ═══════════════════════════════════════════════════════ */

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${pct}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: "0%",
        height: "2px",
        background: "#ffffff",
        boxShadow: "0 0 8px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.2)",
        transition: "width 0.05s linear",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════
   4. SCRAMBLE COUNTER — random digits before settling
   ═══════════════════════════════════════════════════════ */

const DIGIT_CHARS = "0123456789";

export function ScrambleCounter({
  value,
  inView,
}: {
  value: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!inView || hasPlayed.current) return;
    hasPlayed.current = true;

    // Non-numeric value (like ∞)
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      // Scramble through random chars then reveal
      const scrambleDuration = 800;
      const startTime = performance.now();
      let animId: number;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        if (elapsed >= scrambleDuration) {
          setDisplay(value);
          return;
        }
        // Show random symbols
        const symbols = "∑∆Ω∏∫√∞≈≠±";
        setDisplay(symbols[Math.floor(Math.random() * symbols.length)]);
        animId = requestAnimationFrame(tick);
      };
      animId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(animId);
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const totalDuration = 1200;
    const scramblePhase = 400; // first 400ms: pure random scramble
    const startTime = performance.now();
    let animId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;

      if (elapsed < scramblePhase) {
        // Pure scramble phase — random digits
        const digits = String(target).length;
        let scrambled = "";
        for (let i = 0; i < digits; i++) {
          scrambled += DIGIT_CHARS[Math.floor(Math.random() * 10)];
        }
        setDisplay(`${scrambled}${suffix}`);
        animId = requestAnimationFrame(tick);
      } else {
        // Count-up phase with digit blur
        const countProgress = Math.min(
          (elapsed - scramblePhase) / (totalDuration - scramblePhase),
          1
        );
        // Ease out cubic
        const eased = 1 - Math.pow(1 - countProgress, 3);
        const current = Math.round(eased * target);
        const currentStr = String(current);
        const targetStr = String(target);

        // For digits that haven't settled, scramble them
        let result = "";
        for (let i = 0; i < targetStr.length; i++) {
          const targetDigit = targetStr[i];
          const currentDigit = currentStr.padStart(targetStr.length, "0")[i];
          if (countProgress > 0.85 || currentDigit === targetDigit) {
            result += currentDigit;
          } else {
            result += DIGIT_CHARS[Math.floor(Math.random() * 10)];
          }
        }
        setDisplay(`${parseInt(result, 10)}${suffix}`);

        if (countProgress < 1) {
          animId = requestAnimationFrame(tick);
        } else {
          setDisplay(`${target}${suffix}`);
        }
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [inView, value]);

  return <>{display}</>;
}
