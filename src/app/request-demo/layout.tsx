import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo - Vigolium",
  description:
    "Request a personalized demo of Vigolium's agentic AI vulnerability scanner. See how high-fidelity scanning fuses AI with native speed.",
  openGraph: {
    title: "Request a Demo - Vigolium",
    description:
      "Request a personalized demo of Vigolium's agentic AI vulnerability scanner.",
    url: "https://vigolium.com/request-demo",
    siteName: "Vigolium",
  },
};

export default function RequestDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
