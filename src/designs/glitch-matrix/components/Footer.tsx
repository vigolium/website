import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* CTA section */}
        <motion.div
          className="border p-8 md:p-12 mb-12 glow-border text-center"
          style={{ borderColor: "var(--matrix-border)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="text-xs font-light mb-4"
            style={{ color: "var(--matrix-dim)" }}
          >
            {">"} {footerCta.headline}
          </div>

          <div className="text-sm font-bold glow-text-strong mb-6">
            $ vigolium --start
          </div>

          <a
            href={footerCta.buttonHref}
            className="glitch-hover inline-flex items-center gap-2 px-8 py-3 border text-sm font-bold transition-colors hover:bg-[#00FF41] hover:text-black"
            style={{ borderColor: "var(--matrix-green)" }}
          >
            <span style={{ color: "var(--matrix-dim)" }}>[ENTER]</span>{" "}
            {footerCta.buttonLabel}
          </a>
        </motion.div>

        {/* Footer links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-light transition-colors hover:text-[#00FF41] glitch-hover"
              style={{ color: "var(--matrix-muted)" }}
            >
              [{link.label.toLowerCase()}]
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
            className="text-xs mb-2"
            style={{ color: "var(--matrix-border)" }}
          >
            ═══════════════════════════════════════════════════════
          </div>
          <div
            className="text-xs font-light"
            style={{ color: "var(--matrix-dim)" }}
          >
            &copy; vigolium | session: active | uptime: 99.9%
          </div>
          <div className="mt-2">
            <span className="text-xs glow-text cursor-blink">█</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
