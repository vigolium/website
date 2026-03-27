import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vigolium - High-fidelity vulnerability scanner fusing agentic AI with native speed, modularity, and precision",
  description:
    "Agentic AI meets native speed. Find vulnerabilities others miss with Vigolium's modular, precision-driven scanning engine.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vigolium - High-fidelity vulnerability scanner fusing agentic AI with native speed, modularity, and precision",
    description:
      "Agentic intelligence that scans with surgical precision. Fusing AI with native speed, modularity, and 215+ scanner modules.",
    url: "https://vigolium.com",
    siteName: "Vigolium",
    images: [
      {
        url: "/vigolium-main-workbench.png",
        width: 1920,
        height: 1080,
        alt: "Vigolium Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vigolium - High-fidelity vulnerability scanner fusing agentic AI with native speed, modularity, and precision",
    description:
      "Agentic intelligence that scans with surgical precision. Fusing AI with native speed, modularity, and 215+ scanner modules.",
    images: ["/vigolium-main-workbench.png"],
    creator: "@j3ssie",
  },
  metadataBase: new URL("https://vigolium.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#1c1b19" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener("pageshow",function(e){if(e.persisted){document.documentElement.classList.add("bfcache-restored")}})`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
