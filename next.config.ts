import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/chat',
        destination: '/api/chat',
      },
    ];
  },
};

export default nextConfig;
