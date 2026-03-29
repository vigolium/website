"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Zap, Brain } from "lucide-react";
import { CornerBrackets, RegistrationMark } from "@/components/decorators";
import { SectionHeading } from "@/components/SectionHeading";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { LandingShell } from "@/components/LandingShell";
import { WindowChrome } from "@/components/WindowChrome";
import { TopNav } from "@/components/TopNav";

function DemoHero() {
  return (
    <section
      className="ng-section relative px-6"
      style={{ borderBottom: "1px solid rgba(252,232,195,0.1)" }}
    >
      {/* Corner registration marks */}
      <RegistrationMark className="top-4 left-4" />
      <RegistrationMark className="top-4 right-4" />
      <RegistrationMark className="bottom-4 left-4" />
      <RegistrationMark className="bottom-4 right-4" />

      <TopNav />

      <div className="mx-auto w-full max-w-6xl py-16 md:py-24 mt-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="ng-link inline-flex items-center gap-2"
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — Form */}
          <div>
            <SectionHeading annotation="Contact" heading="Request a Demo" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
              style={{
                border: "1px solid rgba(252,232,195,0.08)",
                padding: "2rem",
              }}
            >
              <CornerBrackets />
              <RegistrationMark className="-top-2 -left-2" />
              <RegistrationMark className="-top-2 -right-2" />
              <RegistrationMark className="-bottom-2 -left-2" />
              <RegistrationMark className="-bottom-2 -right-2" />

              <DemoRequestForm />
            </motion.div>
          </div>

          {/* Right column — Dashboard + tagline */}
          <div className="flex flex-col gap-8">
            {/* Dashboard image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="relative"
                style={{
                  border: "1px solid rgba(252,232,195,0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
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

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <p
                className="ng-body"
                style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
              >
                Agentic AI meets native speed. Get a walkthrough tailored to your stack.
              </p>
            </motion.div>

            {/* Highlight grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { icon: Brain, title: "Agentic AI", description: "Autonomous attack planning & custom payloads" },
                { icon: Zap, title: "Native Speed", description: "Go engine with configurable worker pools" },
                { icon: Shield, title: "Full Evidence", description: "Request/response proof & confidence scoring" },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "12px",
                    border: "1px solid rgba(252,232,195,0.06)",
                    borderRadius: "6px",
                  }}
                >
                  <item.icon
                    size={14}
                    style={{ color: "#50fa7b", marginBottom: "6px" }}
                  />
                  <h4
                    className="ng-heading"
                    style={{ fontSize: "0.65rem", marginBottom: "3px" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "#918175",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RequestDemoPage() {
  return <LandingShell hero={<DemoHero />} />;
}
