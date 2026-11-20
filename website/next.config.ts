import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/scores/coco",
        destination: "/scores/remember-me",
        statusCode: 301,
      },
      {
        source: "/en/scores/coco",
        destination: "/en/scores/remember-me",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
