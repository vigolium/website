import { motion } from "motion/react";
import { hero } from "@/lib/content";

export function Hero() {
  const headlineChars = hero.headline.split("");
  const charDuration = 0.03;
  const headlineTime = headlineChars.length * charDuration;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        {/* Terminal window */}
        <div
          className="border rounded-md"
          style={{ borderColor: "var(--matrix-border)" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2 border-b"
            style={{ borderColor: "var(--matrix-border)" }}
          >
            <span className="w-3 h-3 rounded-full bg-[#FF0040]" />
            <span className="w-3 h-3 rounded-full bg-[#FFB000]" />
            <span className="w-3 h-3 rounded-full bg-[#00FF41]" />
            <span
              className="ml-3 text-xs"
              style={{ color: "var(--matrix-muted)" }}
            >
              vigolium@scanner:~$
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-10">
            {/* Headline */}
            <div className="mb-6">
              <span
                className="text-sm font-light"
                style={{ color: "var(--matrix-dim)" }}
              >
                {">_"}&nbsp;
              </span>
              <h1 className="inline text-xl md:text-2xl lg:text-3xl font-bold glow-text-strong leading-relaxed">
                {headlineChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.5 + i * charDuration,
                      duration: 0.05,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="cursor-blink ml-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + headlineTime }}
                >
                  █
                </motion.span>
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p
              className="text-sm md:text-base font-light leading-relaxed mb-10 max-w-2xl"
              style={{ color: "var(--matrix-muted)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + headlineTime, duration: 0.8 }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + headlineTime, duration: 0.5 }}
            >
              <a
                href={hero.ctaPrimary.href}
                className="glitch-hover inline-flex items-center gap-2 px-6 py-3 border text-sm font-medium transition-colors hover:bg-[#00FF41] hover:text-black"
                style={{ borderColor: "var(--matrix-green)" }}
              >
                <span style={{ color: "var(--matrix-dim)" }}>[ENTER]</span>{" "}
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="glitch-hover inline-flex items-center gap-2 px-6 py-3 border text-sm font-medium transition-colors hover:bg-[#003B00]"
                style={{
                  borderColor: "var(--matrix-border)",
                  color: "var(--matrix-muted)",
                }}
              >
                <span style={{ color: "var(--matrix-dim)" }}>[?]</span>{" "}
                {hero.ctaSecondary.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
