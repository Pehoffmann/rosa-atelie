import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@lottiefiles/dotlottie-react"],
  },
};

export default nextConfig;
