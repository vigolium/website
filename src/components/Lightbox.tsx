"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { WindowChrome } from "./WindowChrome";

export function Lightbox({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ backgroundColor: "rgba(28,27,25,0.7)", backdropFilter: "blur(24px) saturate(1.2)", WebkitBackdropFilter: "blur(24px) saturate(1.2)", fontFamily: "'Space Grotesk', sans-serif" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "none",
            border: "none",
            color: "#918175",
            cursor: "pointer",
            padding: "4px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fce8c3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#918175";
          }}
        >
          <X size={24} />
        </button>
        <div
          style={{
            border: "1px solid rgba(252,232,195,0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <WindowChrome title={title} />
          <div style={{ position: "relative", backgroundColor: "#1c1b19" }}>
            {!loaded && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "16/9",
                  width: "100%",
                  maxHeight: "80vh",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="animate-spin"
                >
                  <circle cx="12" cy="12" r="10" stroke="rgba(252,232,195,0.15)" strokeWidth="3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="#50fa7b" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            )}
            <Image
              src={src}
              alt={title}
              width={1920}
              height={1080}
              priority
              onLoad={() => setLoaded(true)}
              style={{
                width: "100%",
                height: "auto",
                display: loaded ? "block" : "none",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
