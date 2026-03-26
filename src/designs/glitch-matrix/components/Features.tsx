import { motion } from "motion/react";
import { features } from "@/lib/content";
import { Brain, Zap, Blocks, Crosshair } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Zap,
  Blocks,
  Crosshair,
};

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function Features() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs font-light"
            style={{ color: "var(--matrix-dim)" }}
          >
            {"// MODULES"}
          </span>
          <div
            className="mt-2 text-xs"
            style={{ color: "var(--matrix-border)" }}
          >
            ═══════════════════════════════════════════════════════
          </div>
        </motion.div>

        <div className="space-y-0">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="py-6 glitch-hover">
                  {/* Command line */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs"
                      style={{ color: "var(--matrix-dim)" }}
                    >
                      $
                    </span>
                    <span className="text-sm font-bold glow-text">
                      vigolium --module {slugify(feature.title)}
                    </span>
                    {Icon && (
                      <span style={{ color: "var(--matrix-green)" }}>
                        <Icon size={16} />
                      </span>
                    )}
                  </div>

                  {/* Output */}
                  <div
                    className="pl-6 text-sm font-light leading-relaxed"
                    style={{ color: "var(--matrix-muted)" }}
                  >
                    <span
                      className="mr-2"
                      style={{ color: "var(--matrix-dim)" }}
                    >
                      {"→"}
                    </span>
                    {feature.description}
                  </div>
                </div>

                {i < features.length - 1 && (
                  <div
                    className="text-xs"
                    style={{ color: "var(--matrix-border)" }}
                  >
                    ─────────────────────────────────────────────────────────
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
