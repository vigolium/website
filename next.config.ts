import type { NextConfig } from "next";

const isProd = process.env.BUILD_PROD === "1";

const nextConfig: NextConfig = {
  ...(isProd && {
    output: "export",
    distDir: "dist",
  }),
};

export default nextConfig;
