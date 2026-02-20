import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence "multiple lockfiles" warning when workspace has parent lockfile
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
