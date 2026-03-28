import type { NextConfig } from "next";

const isProd = process.env.BUILD_PROD === "1";

const nextConfig: NextConfig = {
  ...(isProd && {
    output: "export",
    distDir: "dist",
  }),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.vigolium.com",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
