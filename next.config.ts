import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['puppeteer'],
  allowedDevOrigins: ["career-forge.publicvm.com"],
};

export default nextConfig;
