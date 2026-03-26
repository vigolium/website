"use client";

import { motion } from "motion/react";
import { footerCta, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="cm-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="cm-prompt cm-mono">user@vigolium:~$ </span>
          <span className="cm-cmd cm-mono">
            vigolium --start<span className="cm-cursor">█</span>
          </span>
        </motion.div>

        <motion.p
          className="cm-mono text-lg font-bold mb-6"
          style={{ color: "var(--cm-green)" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          &gt; {footerCta.headline}
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a href={footerCta.buttonHref} className="cm-cta cm-mono">
            [ {footerCta.buttonLabel} ]
          </a>
        </motion.div>

        <hr className="cm-separator mb-8" />

        <motion.div
          className="flex flex-wrap gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cm-mono text-xs"
              style={{
                color: "var(--cm-green-dim)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cm-green)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--cm-green-dim)")
              }
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.p
          className="cm-mono text-xs mt-8"
          style={{ color: "var(--cm-green-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          vigolium v2.4.0 | {new Date().getFullYear()} | EOF
        </motion.p>
      </div>
    </footer>
  );
}
