import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // CI/Vercel runs the canonical TypeScript check explicitly before Next build.
    // This prevents Next's internal type-check phase from becoming a second,
    // opaque build gate while preserving strict type safety in the pipeline.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
