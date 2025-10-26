import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@google/generative-ai'],
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
