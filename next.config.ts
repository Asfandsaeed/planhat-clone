import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/planhat-clone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
