import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['api.builder.io'],
  },
};

export default nextConfig;
