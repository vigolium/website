"use client";

import { Hero } from "@/components/Hero";
import { LandingShell } from "@/components/LandingShell";

export default function Page() {
  return <LandingShell hero={<Hero />} />;
}
