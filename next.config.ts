import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
};
export default nextConfig;
